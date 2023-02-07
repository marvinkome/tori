import "server-only";
import "./globals.css";

import SupabaseProvider from "components/supabase/provider";
import SupabaseListener from "components/supabase/listener";

import { Nunito, Inter } from "@next/font/google";
import { createClient } from "libs/supabase/server";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable} h-full`}>
      <head />
      <body className="h-full">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
