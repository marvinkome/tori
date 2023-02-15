"use client";

import { useEffect } from "react";

export default function Redirect({ path }: { path: string }) {
  useEffect(() => {
    window.location.replace(path);
  });

  return null;
}
