"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSupabase } from "libs/supabase";

export default function SupabaseListener({ serverAccessToken }: any) {
  const { supabase } = useSupabase();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverAccessToken) {
        // HACK:: Remove the tokens from the url before refreshing
        // read more: https://github.com/supabase/gotrue-js/issues/302
        router.replace(window.location.href.split("#")[0]);
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [serverAccessToken, router, supabase]);

  return null;
}
