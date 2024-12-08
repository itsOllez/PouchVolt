import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - PouchVolt",
  description: "Read PouchVolt's terms and conditions to understand your rights and responsibilities when using our website.",
};

export default function TermsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Terms & Conditions</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing and using PouchVolt, you agree to be bound by these Terms and Conditions. 
          If you disagree with any part of these terms, you may not access the website.
        </p>

        <h2>Age Restriction</h2>
        <p>
          This website contains information about nicotine products and is intended for adults only. 
          You must be of legal age in your jurisdiction to access and use this website.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, images, logos, and trademarks, is the property 
          of PouchVolt or its content suppliers and is protected by international copyright laws.
        </p>

        <h2>User Responsibilities</h2>
        <p>When using our website, you agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Use the website legally and responsibly</li>
          <li>Not attempt to gain unauthorized access</li>
          <li>Not distribute malicious code</li>
          <li>Not collect user information without consent</li>
        </ul>

        <h2>Disclaimer</h2>
        <p>
          The information provided on PouchVolt is for general informational purposes only. We make 
          no representations or warranties about the accuracy or completeness of this information.
        </p>

        <h2>Medical Disclaimer</h2>
        <p>
          Content on this website is not medical advice. Always consult healthcare professionals 
          regarding nicotine use and potential health effects.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          PouchVolt and its operators shall not be liable for any indirect, incidental, special, 
          consequential, or punitive damages resulting from your use of the website.
        </p>

        <h2>External Links</h2>
        <p>
          Our website may contain links to external sites. We are not responsible for the content 
          or privacy practices of these sites.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be effective 
          immediately upon posting to the website.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
          without regard to its conflict of law provisions.
        </p>

        <h2>Contact Information</h2>
        <p>
          For questions about these Terms & Conditions, please contact us at:
          <br />
          Email: legal@pouchvolt.com
        </p>
      </div>
    </div>
  );
}