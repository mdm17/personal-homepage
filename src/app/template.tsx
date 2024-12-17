"use client";

import React from "react";
import { PageTransitionLayout } from "./_component/PageTransitionLayout";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <PageTransitionLayout>
      {children}
    </PageTransitionLayout>
  );
}
