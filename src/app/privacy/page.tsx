import type { Metadata } from 'next';
import { ContentArea, PageContainer, Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for 47 Sunset Studios — how we handle your information.',
};

export default function PrivacyPage() {
  return (
    <PageContainer>
      <Section className="py-section-lg">
        <ContentArea size="md">
          {/* Back link */}
          <div className="mb-10">
            <Button variant="ghost" size="sm" href="/">
              ← Back to home
            </Button>
          </div>

          <Typography variant="eyebrow" className="mb-4 block">
            Legal
          </Typography>
          <Typography variant="heading-lg" as="h1" className="mb-2">
            Privacy Policy
          </Typography>
          <Typography variant="caption" className="mb-12 block">
            Last updated: April 2026
          </Typography>

          <div className="space-y-10">
            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Overview
              </Typography>
              <Typography variant="body">
                47 Sunset Studios (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your
                privacy. This policy explains what information we collect when you visit
                47sunsetstudios.com and how we use it. We keep things simple: we collect only what
                we need and we do not sell your data.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Information we collect
              </Typography>
              <Typography variant="body" className="mb-3">
                We may collect the following categories of information:
              </Typography>
              <ul className="text-text-secondary text-body ml-5 list-disc space-y-2">
                <li>
                  <strong className="text-text-primary font-semibold">Contact information</strong> —
                  name and email address when you reach out to us directly via email.
                </li>
                <li>
                  <strong className="text-text-primary font-semibold">Usage data</strong> — basic
                  analytics such as page views and referral sources, collected in aggregate and
                  without personally identifiable information.
                </li>
                <li>
                  <strong className="text-text-primary font-semibold">Technical data</strong> —
                  browser type, device type, and IP address, retained only for as long as needed for
                  security and diagnostic purposes.
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                How we use your information
              </Typography>
              <Typography variant="body" className="mb-3">
                We use the information we collect solely to:
              </Typography>
              <ul className="text-text-secondary text-body ml-5 list-disc space-y-2">
                <li>Respond to enquiries and project briefs you send us.</li>
                <li>Understand how visitors interact with the site so we can improve it.</li>
                <li>Maintain the security and performance of our infrastructure.</li>
              </ul>
              <Typography variant="body" className="mt-3">
                We will never use your contact details to send unsolicited marketing communications.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Third-party services
              </Typography>
              <Typography variant="body">
                Our site is hosted on Cloudflare Pages. By visiting this site, your request passes
                through Cloudflare&apos;s network, subject to Cloudflare&apos;s own privacy policy.
                We do not currently use third-party analytics scripts or advertising trackers on
                this site.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Data retention
              </Typography>
              <Typography variant="body">
                Email correspondence is retained only for as long as necessary to fulfil the purpose
                for which it was sent. You may request deletion of your contact details at any time
                by emailing us.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Your rights
              </Typography>
              <Typography variant="body">
                Depending on where you are located, you may have the right to access, correct, or
                delete any personal information we hold about you. To exercise any of these rights,
                please contact us at the address below.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Contact
              </Typography>
              <Typography variant="body" className="mb-3">
                If you have any questions about this policy, please reach out:
              </Typography>
              <a
                href="mailto:hello@47sunsetstudios.com"
                className="text-accent hover:text-accent-bright focus-visible:ring-accent duration-base font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                hello@47sunsetstudios.com
              </a>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Changes to this policy
              </Typography>
              <Typography variant="body">
                We may update this policy from time to time. The &quot;last updated&quot; date at
                the top of this page reflects the most recent revision. Continued use of the site
                after any changes constitutes your acceptance of the updated policy.
              </Typography>
            </div>
          </div>
        </ContentArea>
      </Section>
    </PageContainer>
  );
}
