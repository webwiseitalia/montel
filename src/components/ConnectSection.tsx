import diagramImage from "@/assets/isometric-diagram.jpg";
import { Network, Zap, Users } from "lucide-react";

const ConnectSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-light-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
              How T3 works
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Connect every asset giving you total fleet visibility
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base text-muted-foreground leading-relaxed">
              Data flows seamlessly between the field and office, giving you
              real-time insights into your entire operation.
            </p>
          </div>
        </div>

        {/* Isometric Diagram */}
        <div className="mb-20">
          <div className="relative rounded-xl overflow-hidden bg-muted/30 p-8 lg:p-12">
            <img
              src={diagramImage}
              alt="T3 connected ecosystem diagram"
              title="T3 Connected Ecosystem"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
              <Network className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Seamless hardware & connectivity
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Install once and connect to T3's platform instantly. Hardware
              integrates with 175+ telematics and connects to any OEM, giving you
              universal visibility across your mixed fleet.
            </p>
          </div>

          {/* Card 2 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
              <Zap className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Data-driven decisions
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Transform raw data into clear, actionable insights. Track utilization,
              monitor health, predict maintenance needs, and optimize routes—all from
              one intuitive dashboard that surfaces what matters most.
            </p>
          </div>

          {/* Card 3 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
              <Users className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Simple onboarding & ongoing support
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Get up and running quickly with white-glove installation and training.
              Our team provides continuous support to ensure you're maximizing value
              and getting the most out of your T3 investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
