import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-dark-section relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-accent/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Slider Controls */}
          <div className="flex gap-3 order-2 lg:order-1">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 border-dark-section-foreground/20 text-dark-section-foreground hover:bg-dark-section-foreground/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 border-dark-section-foreground/20 text-dark-section-foreground hover:bg-dark-section-foreground/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonial Content */}
          <div className="flex-1 max-w-3xl order-1 lg:order-2">
            <blockquote className="space-y-6">
              <p className="text-xl sm:text-2xl lg:text-3xl text-dark-section-foreground leading-relaxed">
                "Because of the T3 Flash Cam, I'm no longer doing 14-hour days in
                the courthouse or the shop. I work 9-to-5 now and I get to spend
                more time with my family."
              </p>
              <footer className="flex items-center gap-4">
                <div>
                  <p className="text-base font-semibold text-dark-section-foreground">
                    Chase Dickey
                  </p>
                  <p className="text-sm text-dark-section-foreground/70">
                    Fleet Manager
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
