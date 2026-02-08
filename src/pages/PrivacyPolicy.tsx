import { Shield, Eye, Cookie, Link2, Heart, Share2, FileText, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pb-24 pt-6">
      <div className="container max-w-lg mx-auto px-4">
        <header className="mb-8">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Calm, helpful, and respectful of your privacy.
          </p>
        </header>

        {/* Intro */}
        <Card variant="default" className="mb-6">
          <CardContent className="p-5">
            <p className="text-foreground leading-relaxed">
              Airaleaf was created to be calm, helpful, and respectful of your privacy. 
              You should be able to explore home interior guidance without being tracked, 
              profiled, or marketed to.
            </p>
          </CardContent>
        </Card>

        {/* What We Do Not Collect */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-leaf" aria-hidden="true" />
            What We Do Not Collect
          </h2>
          <Card variant="default">
            <CardContent className="p-5 space-y-3">
              <p className="text-foreground leading-relaxed">
                Airaleaf does not collect personal information such as:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  Names, email addresses, phone numbers
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  Account data or payment information
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  GPS location data or device fingerprints
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  Cross-site browsing behavior
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                  Health information
                </li>
              </ul>
              <p className="text-foreground font-medium pt-2">
                You do not need an account to use Airaleaf.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What We Do Collect */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-leaf" aria-hidden="true" />
            What We Do Collect (Anonymous Only)
          </h2>
          <Card variant="default">
            <CardContent className="p-5 space-y-3">
              <p className="text-foreground leading-relaxed">
                Airaleaf uses anonymous, aggregated data to understand which content is helpful. 
                This may include:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf mt-2 shrink-0" />
                  Page views and saves
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf mt-2 shrink-0" />
                  Room category interest
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf mt-2 shrink-0" />
                  Which predefined regions are selected
                </li>
              </ul>
              <p className="text-muted-foreground text-sm pt-2">
                This data cannot identify you and is used only to improve educational content.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Cookies & Tracking */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Cookie className="w-5 h-5 text-accent" aria-hidden="true" />
            Cookies & Tracking
          </h2>
          <Card variant="default">
            <CardContent className="p-5">
              <p className="text-foreground leading-relaxed">
                Airaleaf does not use advertising cookies, third-party trackers, 
                session replay tools, or cross-site tracking.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Affiliate Links */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Link2 className="w-5 h-5 text-primary" aria-hidden="true" />
            Affiliate Links
          </h2>
          <Card variant="default">
            <CardContent className="p-5">
              <p className="text-foreground leading-relaxed">
                Some links may earn a commission at no extra cost to you. 
                Recommendations are based on educational and material criteria, not sponsorship.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Health & Educational Notice */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-sky-foreground" aria-hidden="true" />
            Health & Educational Notice
          </h2>
          <Card variant="default">
            <CardContent className="p-5">
              <p className="text-foreground leading-relaxed">
                Airaleaf provides educational information only and does not offer medical 
                or health advice. Always confirm product details with manufacturers or retailers.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Data Sharing */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
            Data Sharing
          </h2>
          <Card variant="default">
            <CardContent className="p-5">
              <p className="text-foreground leading-relaxed">
                Airaleaf does not sell, rent, or share personal data.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-6">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
            Changes to This Policy
          </h2>
          <Card variant="default">
            <CardContent className="p-5">
              <p className="text-foreground leading-relaxed">
                If our privacy practices change, we will update this notice.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Questions */}
        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-leaf" aria-hidden="true" />
            Questions
          </h2>
          <Card variant="default">
            <CardContent className="p-5">
              <p className="text-foreground leading-relaxed">
                If you have questions about privacy or transparency, we encourage informed review.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
