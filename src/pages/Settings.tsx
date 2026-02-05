import { Leaf, Accessibility, Info, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background pb-24 pt-6">
      <div className="container max-w-lg mx-auto px-4">
        <header className="mb-8">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Customize your Airaleaf experience.
          </p>
        </header>

        {/* Default Filters */}
        <section className="mb-8">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Leaf className="w-5 h-5 text-leaf" aria-hidden="true" />
            Default Filters
          </h2>
          <Card variant="default">
            <CardContent className="p-5 space-y-5">
              <div className="flex items-center justify-between">
                <Label htmlFor="scent-free" className="text-foreground cursor-pointer">
                  Scent-Free / Fragrance-Free
                </Label>
                <Switch id="scent-free" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="low-voc" className="text-foreground cursor-pointer">
                  Low-VOC / Zero-VOC Only
                </Label>
                <Switch id="low-voc" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Accessibility */}
        <section className="mb-8">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Accessibility className="w-5 h-5 text-primary" aria-hidden="true" />
            Accessibility
          </h2>
          <Card variant="default">
            <CardContent className="p-5 space-y-5">
              <div className="flex items-center justify-between">
                <Label htmlFor="high-contrast" className="text-foreground cursor-pointer">
                  High Contrast Mode
                </Label>
                <Switch id="high-contrast" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="large-text" className="text-foreground cursor-pointer">
                  Larger Text
                </Label>
                <Switch id="large-text" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="reduced-motion" className="text-foreground cursor-pointer">
                  Reduce Animations
                </Label>
                <Switch id="reduced-motion" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About */}
        <section className="mb-8">
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-accent" aria-hidden="true" />
            About Airaleaf
          </h2>
          <Card variant="default">
            <CardContent className="p-5 space-y-4">
              <p className="text-foreground leading-relaxed">
                Airaleaf is a calm, friendly guide that helps you choose eco-friendly, low-tox, 
                scent-free home products for cleaner indoor air and healthier living.
              </p>
              <p className="text-muted-foreground text-sm">
                We focus on materials, certifications, and indoor air quality—not selling products. 
                Designed especially for people with allergies, asthma, migraines, or chemical sensitivities.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Accessibility Statement */}
        <section>
          <h2 className="font-heading text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-leaf" aria-hidden="true" />
            Accessibility Statement
          </h2>
          <Card variant="default">
            <CardContent className="p-5 space-y-4">
              <p className="text-foreground leading-relaxed">
                Airaleaf is committed to ensuring digital accessibility for all users. 
                We continually work to improve the user experience for everyone.
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf mt-2 shrink-0" />
                  WCAG 2.1 AA compliance
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf mt-2 shrink-0" />
                  Keyboard navigation support
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf mt-2 shrink-0" />
                  Screen reader compatible
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf mt-2 shrink-0" />
                  High contrast and large text options
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Settings;
