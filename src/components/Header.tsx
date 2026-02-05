import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-2 group" aria-label="Airaleaf Home">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-leaf-light group-hover:scale-105 transition-transform">
            <Leaf className="w-5 h-5 text-leaf" aria-hidden="true" />
          </div>
          <span className="font-heading text-xl font-bold text-foreground">
            Airaleaf
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            How It Works
          </a>
          <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Categories
          </a>
          <a href="#why" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Why Scent-Free
          </a>
        </nav>

        <a
          href="#categories"
          className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-soft hover:shadow-hover hover:scale-[1.02] transition-all"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
