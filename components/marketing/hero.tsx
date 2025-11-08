import { ArrowRight, Zap } from "lucide-react";
import { Button } from "../ui/button";

interface HeroProps {
  onClick: () => void;
}

export const Hero = ({ onClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm">
              <Zap className="h-4 w-4" />
              <span>Real-time messaging platform</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Connect your team in{" "}
              <span className="text-primary">real-time</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              Experience seamless communication with Converge. Chat,
              collaborate, and build communities with lightning-fast messaging.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onClick}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow group"
              >
                Open Converge
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Communities</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          <div
            className="relative lg:block hidden animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/hero-image.png"
                alt="Converge messaging platform interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
