import driverImage from "@/assets/driver-cab.jpg";
import equipmentImage from "@/assets/equipment-site.jpg";
import { Layers } from "lucide-react";

const WhySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-light-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8 font-medium">
          Why we built T3
        </p>

        {/* Main Heading Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-foreground">
            T3 was built by contractors who faced the same challenges fleet
            managers face every day. Founded in 2015, EquipmentShare set out to
            create an industry-first solution that is both intuitive and mature,
            yet simple and more profitable.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Column 1 - Technical Diagram */}
          <div className="flex flex-col gap-6">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center p-8">
              <Layers className="w-full h-full text-muted-foreground/30" strokeWidth={0.5} />
            </div>
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-muted-foreground">
                EquipmentShare is one of the fastest-growing construction
                equipment rental businesses, with 170+ locations and 20,000+ assets
                across North America.
              </p>
            </div>
          </div>

          {/* Column 2 - Driver Photo */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src={driverImage}
                alt="Driver in vehicle cab"
                title="Driver in vehicle cab"
                loading="lazy"
                width={400}
                height={533}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Real operators facing real challenges need real solutions that
                work in the field.
              </p>
            </div>
          </div>

          {/* Column 3 - Equipment Photo */}
          <div className="flex flex-col gap-6">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src={equipmentImage}
                alt="Equipment on site"
                title="Equipment on site"
                loading="lazy"
                width={400}
                height={533}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-muted-foreground">
                If T3 can handle our massive fleet, it can handle any fleet. We
                bring context and insight into one place so you can make smarter
                decisions faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
