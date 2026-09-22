import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "TakeMyOnlineClassUSA — Online Class Support for Busy Students",
  description:
    "TMOCU provides professional online class support for busy students. We help manage your coursework, assignments, quizzes, and exams so you can focus on what matters most.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
