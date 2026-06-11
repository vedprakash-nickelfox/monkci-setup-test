import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us — Hans Infotech",
  description:
    "Get in touch with the Hans Infotech team. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
