import { Button } from "@/components/ui/button";
import phoneImage from "@/assets/phone-app.jpg";

const PlatformSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={phoneImage}
          alt="T3 mobile app"
          title="T3 Mobile Application"
          loading="lazy"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/90 via-hero-overlay/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-warm-accent mb-4 font-medium">
            All-in-one platform
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-section-foreground mb-6 leading-tight">
            What to expect with T3
          </h2>
          <p className="text-base sm:text-lg text-dark-section-foreground/90 mb-8 max-w-xl leading-relaxed">
            T3 consolidates multiple systems into one powerful platform for
            tracking, managing, and optimizing your fleet. Get real-time insights
            and actionable data at your fingertips.
          </p>
          <Button variant="hero" size="lg" className="text-base px-8">
            Explore solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
