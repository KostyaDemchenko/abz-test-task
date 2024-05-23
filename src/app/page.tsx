import React from "react";

// importing components
import Headder from "@/components/Header";
import FirstSection from "@/components/FirstSection";
import Button from "@/components/Button";

import "./global.scss";

export default function Home() {
  return (
    <>
      <Headder />
      <main>
        <FirstSection />
      </main>
    </>
  );
}
