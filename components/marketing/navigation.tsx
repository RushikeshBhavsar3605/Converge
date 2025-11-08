import { Button } from "../ui/button";

interface NavigationProps {
  onClick: () => void;
}

export const Navigation = ({ onClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Converge Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-foreground">Converge</span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={onClick}
              variant="ghost"
              className="text-foreground"
            >
              Sign In
            </Button>
            <Button
              onClick={onClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
