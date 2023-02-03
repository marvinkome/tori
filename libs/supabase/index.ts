"use client";
import { createContext, useContext } from "react";
import type { Session, SupabaseClient } from "@supabase/auth-helpers-nextjs";

type SupabaseContext = {
  supabase: SupabaseClient;
  session: Session | undefined;
};

// @ts-ignore
export const Context = createContext<SupabaseContext>();
export const useSupabase = () => useContext(Context);
