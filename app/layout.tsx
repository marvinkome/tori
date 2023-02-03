import "server-only";
import "./globals.css";

import SupabaseProvider from "components/supabase/provider";
import SupabaseListener from "components/supabase/listener";

import { Nunito } from "@next/font/google";
import { createClient } from "libs/supabase/server";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className={`${nunito.variable} h-full`}>
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

// do not cache this layout
export const revalidate = 0;
export default RootLayout;
