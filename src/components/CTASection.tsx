import { Button } from "@/components/ui/button";
import excavatorImage from "@/assets/excavator-work.jpg";

const CTASection = () => {
  return (
    <section className="py-0 bg-dark-section overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="py-16 lg:py-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-section-foreground mb-6 leading-tight">
              Discover how T3 reduces downtime and maximizes fleet efficiency.
            </h2>
            <Button variant="cta" size="lg" className="text-base px-8">
              Book personalized demo
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[600px] -mr-4 sm:-mr-6 lg:-mr-8">
            <img
              src={excavatorImage}
              alt="Excavator working on site"
              className="w-full h-full object-cover rounded-l-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark-section/20 rounded-l-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
