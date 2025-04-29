import { Metadata } from "next";
import {ArrowBigLeft} from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Valuemine Power Solutions",
  description:
    "Read the privacy practices of Valuemine Power Solutions. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: false,
    follow: false,
  },
};

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">Effective Date: April 28, 2025</p>

      <p className="mb-4">
        Welcome to Valuemine Power Solutions (&apos;we&apos;, &apos;our&apos;,
        &apos;us&apos;). Your privacy is important to us. This Privacy Policy
        explains how we collect, use, and protect your information when you
        visit our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        phone number, and payment details when you interact with our website,
        make a purchase, or contact us for inquiries.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">We use your information to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Process transactions and deliver services.</li>
        <li>Send important updates about your orders or service requests.</li>
        <li>Improve our website, services, and marketing efforts.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to third
        parties. We may share your information with trusted service providers
        who assist us in operating our website, processing payments, or
        delivering services — provided they agree to keep your information
        confidential.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Cookies and Tracking Technologies
      </h2>
      <p className="mb-4">
        We may use cookies and similar technologies to enhance your experience
        on our website, understand usage patterns, and deliver targeted
        advertisements.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal
        information. To make a request, please contact us at the details
        provided below.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your information.
        However, no method of transmission over the internet or method of
        electronic storage is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        7. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We encourage you to
        review this page periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, you can contact us
        at:
      </p>
      <p className="mb-2">
        <strong>Valuemine Power Solutions</strong>
        <br />
        Email: support@valuemine.com
        <br />
        Phone: +234 902 053 2639
      </p>

      <div className="mt-10 bg-linear-to-r from-blue-500 to-pink-500 via-purple-500">
        <Link
          href="/"
          className="inline-flex justify-center items-center text-white font-semibold py-3 px-6 rounded-md transition">
          <ArrowBigLeft/>
          Return to Landing Page
        </Link>
      </div>
    </main>
  );
}
