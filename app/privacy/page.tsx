import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - PouchVolt",
  description: "PouchVolt's privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2>Introduction</h2>
        <p>
          At PouchVolt, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
          and protect your personal information when you use our website.
        </p>

        <h2>Information We Collect</h2>
        <h3>Information You Provide</h3>
        <ul>
          <li>Contact information (email address)</li>
          <li>User preferences and settings</li>
          <li>Feedback and communications</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <ul>
          <li>Device information</li>
          <li>Browser type and version</li>
          <li>IP address</li>
          <li>Usage data and analytics</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Respond to your inquiries</li>
          <li>Send newsletters and updates (with your consent)</li>
          <li>Analyze website performance</li>
          <li>Ensure website security</li>
        </ul>

        <h2>Data Protection</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information 
          against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to improve your browsing experience. You can 
          control cookie preferences through your browser settings.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services for analytics, advertising, and other functions. These services 
          may collect information about your use of our website.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Object to data processing</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or your personal information, please contact us at:
          <br />
          Email: privacy@pouchvolt.com
        </p>
      </div>
    </div>
  );
}