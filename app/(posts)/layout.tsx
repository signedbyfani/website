import { GoBack } from "@/components/goback";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <GoBack />
      {children}
    </React.Fragment>
  );
}
