import { Globe, Lock, MessageSquare, Users } from "lucide-react";
import { Card } from "../ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Instant Messaging",
    description:
      "Send messages instantly with real-time delivery and read receipts.",
  },
  {
    icon: Users,
    title: "Communities",
    description:
      "Create and manage multiple communities with text and voice channels.",
  },
  {
    icon: Lock,
    title: "Role Management",
    description: "Fine-grained permissions and role-based access control.",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "Access Relay from any device, anywhere in the world.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to <span className="text-primary">connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to bring your team together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
