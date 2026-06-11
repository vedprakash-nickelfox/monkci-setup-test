import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us — Hans Infotech",
  description:
    "Learn about Hans Infotech — our story, mission, values, and the team behind cutting-edge AI and IT solutions.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
