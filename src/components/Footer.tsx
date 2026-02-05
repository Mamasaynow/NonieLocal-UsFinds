import { Leaf, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-foreground/10">
                <Leaf className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <span className="font-heading text-xl font-bold">
                Airaleaf
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Your calm guide to low-tox home interiors. 
              We help you choose furniture, finishes, and furnishings that support 
              healthier indoor air—without the overwhelm.
            </p>
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Airaleaf. Made with care for sensitive souls.
            </p>
          </div>

          {/* Newsletter / Contact */}
          <div className="md:text-right">
            <h3 className="font-heading text-lg font-bold mb-4">
              Stay Connected
            </h3>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Want updates on new product reviews and tips for healthier home design? 
              We keep it minimal—no spam, ever.
            </p>
            <a
              href="mailto:hello@airaleaf.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors font-medium"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Get in Touch
            </a>
          </div>
        </div>

        {/* Accessibility note */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/50 text-center">
            Airaleaf is committed to accessibility. This site aims to meet WCAG 2.1 AA standards. 
            If you encounter any issues, please let us know.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
