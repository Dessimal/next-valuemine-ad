// app/terms-and-conditions/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Valuemine Power Solutions",
  description:
    "Review the terms and conditions for using Valuemine Power Solutions website and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to Valuemine Power Solutions! These terms and conditions outline
        the rules and regulations for the use of our website and services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Website</h2>
      <p className="mb-4">
        By accessing this website, you agree to be bound by these Terms and
        Conditions and all applicable laws. If you do not agree, please do not
        use our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Intellectual Property Rights
      </h2>
      <p className="mb-4">
        All content published and made available on our site is the property of
        Valuemine Power Solutions and its creators. This includes, but is not
        limited to, images, text, logos, documents, downloadable files, and
        anything that contributes to the composition of our site.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Limitation of Liability
      </h2>
      <p className="mb-4">
        Valuemine Power Solutions will not be held liable for any damages
        arising from your use of the website or the services offered through the
        website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites. We are not
        responsible for the content or practices of these third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
      <p className="mb-8">
        We may update our Terms and Conditions from time to time. We encourage
        you to review this page periodically for any changes.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
        Return to Homepage
      </Link>
    </main>
  );
}
