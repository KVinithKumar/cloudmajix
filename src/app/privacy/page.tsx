import { site } from "@/content/site";
import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information, in line with Canada's PIPEDA.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      intro={`Your privacy matters to us. This policy explains what personal information ${site.name} collects through ${site.domain}, why we collect it and how we protect it.`}
    >
      <h2>1. Who we are</h2>
      <p>
        {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a Canadian software development company. We
        handle personal information in accordance with the <em>Personal Information Protection and Electronic Documents Act</em>{" "}
        (PIPEDA) and applicable provincial privacy laws.
      </p>

      <h2>2. Information we collect</h2>
      <p>We only collect information you choose to give us, mainly when you fill in our contact form or email us:</p>
      <ul>
        <li>Your name and business name</li>
        <li>Your email address and, if you provide it, your phone number</li>
        <li>The service you&rsquo;re interested in and the details of your message</li>
      </ul>
      <p>
        Our hosting provider may also automatically record basic technical information, such as IP addresses and browser type,
        in server logs used for security and to keep the website running reliably.
      </p>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To reply to your enquiry and discuss your project</li>
        <li>To prepare proposals, quotes and contracts you request</li>
        <li>To deliver and support services you purchase from us</li>
        <li>To protect our website from spam and abuse</li>
      </ul>
      <p>
        We do not sell, rent or trade your personal information. We will not add you to a marketing mailing list without your
        express consent, and you can withdraw consent at any time.
      </p>

      <h2>4. Consent</h2>
      <p>
        By submitting our contact form or emailing us, you consent to us using your information for the purposes described above.
        You may withdraw your consent at any time by contacting us, subject to legal or contractual restrictions.
      </p>

      <h2>5. Cookies and analytics</h2>
      <p>
        This website does not use advertising or tracking cookies. If we add privacy-friendly analytics in the future, we will
        update this policy to describe them.
      </p>

      <h2>6. Service providers</h2>
      <p>We use trusted third-party providers to operate this website, including:</p>
      <ul>
        <li>
          <strong>Vercel</strong> for website hosting
        </li>
        <li>
          <strong>Supabase</strong> to securely store contact-form submissions
        </li>
        <li>Our business email provider, to receive and reply to your messages</li>
      </ul>
      <p>
        These providers may process or store information outside Canada, including in the United States, where it may be subject
        to the laws of that country. We choose providers with strong security practices and only share what&rsquo;s needed for
        them to provide their service.
      </p>

      <h2>7. How long we keep information</h2>
      <p>
        We keep enquiry information only as long as needed to respond to you and manage our business relationship, generally no
        longer than two years after our last contact, unless a longer period is required by law (for example, for tax records).
      </p>

      <h2>8. How we protect information</h2>
      <p>
        We use reasonable safeguards, including encrypted connections (HTTPS), access controls, and database security rules that
        prevent the public from reading submitted information. No method of transmission or storage is completely secure, but we
        work hard to protect your information.
      </p>

      <h2>9. Your rights</h2>
      <p>
        You can ask to see the personal information we hold about you, ask us to correct it, or ask us to delete it. We will
        respond within 30 days. If you&rsquo;re not satisfied with our response, you may contact the Office of the Privacy
        Commissioner of Canada.
      </p>

      <h2>10. Contact us</h2>
      <p>
        For any privacy question or request, email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top of this page shows when it
        was last changed.
      </p>
    </LegalPage>
  );
}
