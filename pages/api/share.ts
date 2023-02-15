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

        const currentProfileResponse = await supabase
          .from("profiles")
          .select("id, email, username")
          .eq("id", session.user.id)
          .single();

        if (currentProfileResponse.error) {
          throw currentProfileResponse.error;
        }

        // check if user is already a follower
        const checkForFollowerResponse = await supabase
          .from("profile_followers")
          .select(`profile:profile(email), follower:follower(email)`)
          .eq("profile.email", currentProfileResponse.data.email)
          .eq("follower.email", email)
          .throwOnError()
          .maybeSingle();

        if (checkForFollowerResponse.data) {
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
          const inviteResponse = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
            redirectTo: getBaseURL() + `/profile?invitedBy=${currentProfileResponse.data.username}`,
          });

          if (inviteResponse.error) {
            throw inviteResponse.error;
          }

          await supabaseAdmin
            .from("profile_followers")
            .insert({
              profile: currentProfileResponse.data.id,
              follower: inviteResponse.data.user.id,
            })
            .throwOnError();

          return res.send({ message: "email-sent" });
        }

        await supabaseAdmin
          .from("profile_followers")
          .insert({
            profile: currentProfileResponse.data.id,
            follower: userResponse.data.id,
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
