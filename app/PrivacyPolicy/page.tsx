import { NextPage } from "next";
import Link from "next/link";

const PrivacyPolicy: NextPage = () => {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>
        At Valuemine Power Solutions, we respect your privacy and are committed
        to protecting the personal data you share with us. This Privacy Policy
        outlines how we collect, use, and protect your information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect personal information such as your name, email address, and
        payment information when you sign up or purchase our services.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        Your information is used to provide you with personalized service,
        respond to inquiries, and send you relevant updates or marketing
        materials.
      </p>
      <h2>Data Protection</h2>
      <p>
        We implement reasonable security measures to protect your personal data
        from unauthorized access or disclosure.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about our privacy practices, please contact us
        at{" "}
        <Link href="mailto:support@valuemine.com.ng">
          support@valuemine.com
        </Link>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
