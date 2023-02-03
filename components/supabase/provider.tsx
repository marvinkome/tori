"use client";

import { useState } from "react";
import { createClient } from "libs/supabase/browser";
import { Context } from "libs/supabase";

export default function SupabaseProvider({ children, session }: any) {
  const [supabase] = useState(() => createClient());

  return (
    <Context.Provider value={{ supabase, session }}>
      <>{children}</>
    </Context.Provider>
  );
}
