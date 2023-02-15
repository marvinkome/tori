import type { NextApiRequest, NextApiResponse } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import supabaseAdmin from "libs/supabase/admin";
import { getBaseURL } from "@/libs/utils";

const LOG_TAG = "share-profile";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body } = req;
    const supabase = createServerSupabaseClient({ req, res });

    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      return res.status(401).json({ error: "not authenticated" });
    }

    switch (method) {
      case "POST": {
        const { email } = body;

        if (!email) {
          console.warn("%s no email in body - %j", LOG_TAG, body);
          return res.status(400).send({ message: "no email in body" });
        }

        const currentProfileResponse = await supabase.from("profiles").select("id, email, username").eq("id", session.user.id).single();

        if (currentProfileResponse.error) {
          throw currentProfileResponse.error;
        }

        // check if user is already a follower
        const checkForFollowerResponse = await supabase
          .from("followers")
          .select(`follower:follower_id(email), following:following_id(email)`)
          .eq("following.email", currentProfileResponse.data.email)
          .eq("follower.email", email)
          .throwOnError()
          .maybeSingle();

        if (checkForFollowerResponse.data) {
          console.warn("%s email is already following - %j", LOG_TAG, body);
          return res.status(200).send({ message: "already-following" });
        }

        // check user is already created
        const userResponse = await supabaseAdmin
          .from("profiles")
          .select("id, email")
          .eq("email", email)
          .throwOnError()
          .limit(1)
          .maybeSingle();

        if (!userResponse.data) {
          console.log("%s user not yet created. sending invite email - %j", LOG_TAG, body);
          const inviteResponse = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
            redirectTo: getBaseURL() + `/profile/invite?invitedBy=${currentProfileResponse.data.username}`,
          });

          if (inviteResponse.error) {
            throw inviteResponse.error;
          }

          console.log("%s adding new user as a follower - %j", LOG_TAG, body);
          await supabaseAdmin
            .from("followers")
            .insert({
              following_id: currentProfileResponse.data.id,
              follower_id: inviteResponse.data.user.id,
            })
            .throwOnError();

          return res.send({ message: "email-sent" });
        }

        console.log("%s adding existing user as a follower - %j", LOG_TAG, body);
        await supabaseAdmin
          .from("followers")
          .insert({
            following_id: currentProfileResponse.data.id,
            follower_id: userResponse.data.id,
          })
          .throwOnError();

        return res.send({ message: "invited" });
      }
      default:
        console.warn("%s unauthorized method - %s", LOG_TAG, method);
        return res.status(500).send({ error: "unauthorized method" });
    }
  } catch (error: any) {
    console.error("%s general error - %j", LOG_TAG, {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });

    return res.status(500).send({ error: "request failed" });
  }
}
