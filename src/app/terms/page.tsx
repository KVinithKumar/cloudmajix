import Link from "next/link";
import { site } from "@/content/site";
import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms that apply when you use the ${site.name} website at ${site.domain}.`,
  path: "/terms",
});

export default function TermsPage() {
  const province = site.legal.governingProvince;
  const governingLaw = province
    ? `the laws of the Province of ${province} and the federal laws of Canada applicable there`
    : "the laws of the Canadian province in which CloudMajix is based and the federal laws of Canada applicable there";

  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      intro={`These terms apply to your use of ${site.domain}. By using this website, you agree to them.`}
    >
      <h2>1. About these terms</h2>
      <p>
        This website is operated by {site.name}, a Canadian software development company. These terms cover your use of the
        website only. Any services we provide to you will be covered by a separate written proposal or agreement, which takes
        priority over these terms if there is any conflict.
      </p>

      <h2>2. Using our website</h2>
      <p>You agree to use this website lawfully and not to:</p>
      <ul>
        <li>Submit false, misleading or spam information through our forms</li>
        <li>Attempt to gain unauthorised access to the website or its systems</li>
        <li>Interfere with the website&rsquo;s security or performance</li>
        <li>Copy or reuse our content for commercial purposes without permission</li>
      </ul>

      <h2>3. Information on this website</h2>
      <p>
        We work to keep the information on this website accurate and current, but it is provided for general information only.
        Prices shown are starting prices in Canadian dollars, exclude applicable taxes and may change. A binding price is only
        set in a written quote or agreement.
      </p>
      <p>
        Projects marked as &ldquo;Concept&rdquo; are examples that illustrate our approach and capabilities. They are not work
        delivered for a specific client.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        The content, design, logos and code of this website belong to {site.name} or its licensors and are protected by
        Canadian and international intellectual-property laws. Ownership of work we create for clients is set out in each
        client agreement.
      </p>

      <h2>5. Links to other websites</h2>
      <p>
        Our website may link to third-party websites. We are not responsible for their content, policies or practices.
      </p>

      <h2>6. Disclaimer</h2>
      <p>
        This website is provided &ldquo;as is&rdquo; without warranties of any kind, to the extent permitted by law. We do not
        guarantee that it will always be available, uninterrupted or error-free.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {site.name} is not liable for any indirect, incidental or consequential loss
        arising from your use of this website or reliance on its content.
      </p>

      <h2>8. Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we handle personal information you share with us.
      </p>

      <h2>9. Governing law</h2>
      <p>These terms are governed by {governingLaw}.</p>

      <h2>10. Changes and contact</h2>
      <p>
        We may update these terms from time to time; the date at the top of this page shows the latest version. Questions? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
