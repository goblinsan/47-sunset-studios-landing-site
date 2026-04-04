import type { Metadata } from 'next';
import { ContentArea, PageContainer, Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for 47 Sunset Studios.',
};

export default function TermsPage() {
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
            Terms of Use
          </Typography>
          <Typography variant="caption" className="mb-12 block">
            Last updated: April 2026
          </Typography>

          <div className="space-y-10">
            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Acceptance of terms
              </Typography>
              <Typography variant="body">
                By accessing or using 47sunsetstudios.com (the &quot;Site&quot;), you agree to be
                bound by these Terms of Use. If you do not agree to these terms, please do not use
                the Site. These terms apply to all visitors and anyone who accesses or uses the
                Site.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Use of the site
              </Typography>
              <Typography variant="body" className="mb-3">
                This Site is provided for informational purposes only. You agree not to:
              </Typography>
              <ul className="text-text-secondary text-body ml-5 list-disc space-y-2">
                <li>
                  Use the Site in any way that violates applicable laws or regulations.
                </li>
                <li>
                  Attempt to gain unauthorised access to any part of the Site or its related
                  infrastructure.
                </li>
                <li>
                  Reproduce, duplicate, or distribute any content from the Site without prior
                  written permission.
                </li>
                <li>
                  Use automated means to scrape, crawl, or extract content from the Site.
                </li>
              </ul>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Intellectual property
              </Typography>
              <Typography variant="body">
                All content on this Site — including text, design, graphics, and code — is the
                property of 47 Sunset Studios unless otherwise noted. You may not reproduce,
                distribute, or create derivative works from any content without our express written
                consent. All rights not explicitly granted are reserved.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Disclaimer of warranties
              </Typography>
              <Typography variant="body">
                The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis
                without warranties of any kind, express or implied. We do not warrant that the
                Site will be uninterrupted, error-free, or free of harmful components. Your use of
                the Site is at your sole risk.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Limitation of liability
              </Typography>
              <Typography variant="body">
                To the fullest extent permitted by law, 47 Sunset Studios shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages arising out
                of your access to or use of — or inability to access or use — the Site or any
                content on it.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                External links
              </Typography>
              <Typography variant="body">
                The Site may contain links to third-party websites. These links are provided for
                convenience only. We have no control over the content of those sites and accept no
                responsibility for them or for any loss or damage that may arise from your use of
                them.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Governing law
              </Typography>
              <Typography variant="body">
                These terms are governed by and construed in accordance with applicable law. Any
                disputes arising in connection with these terms shall be subject to the exclusive
                jurisdiction of the relevant courts.
              </Typography>
            </div>

            <div>
              <Typography variant="heading-sm" as="h2" className="mb-3">
                Contact
              </Typography>
              <Typography variant="body" className="mb-3">
                If you have any questions about these terms, please reach out:
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
                Changes to these terms
              </Typography>
              <Typography variant="body">
                We reserve the right to modify these terms at any time. The &quot;last
                updated&quot; date at the top of this page reflects the most recent revision.
                Continued use of the Site after any changes constitutes your acceptance of the
                updated terms.
              </Typography>
            </div>
          </div>
        </ContentArea>
      </Section>
    </PageContainer>
  );
}
