"use client";

import React from "react";

// importing components
import Headder from "@/components/Header";
import FirstSection from "@/components/FirstSection";
import EmployeesList from "@/components/EmployeesList";
import JobApplication from "@/components/JobApplication";

import "./global.scss";

export default function Home() {
  return (
    <>
      <Headder />
      <main>
        <FirstSection />
        <EmployeesList />
        <JobApplication />
      </main>
    </>
  );
}
