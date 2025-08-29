import { Award, Building2, TrendingUp, Calendar } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Award,
      title: "WORLD-CLASS COACHES",
      statistic: "15+ Years Average Experience",
      description: "Our coaches are former professional athletes and certified trainers with international competition experience.",
      color: "from-primary to-primary-dark"
    },
    {
      icon: Building2,
      title: "MODERN FACILITIES",
      statistic: "2,500 m² Training Space",
      description: "Professional boxing ring, wrestling mats, modern equipment, and dedicated areas for different training types.",
      color: "from-primary-dark to-secondary"
    },
    {
      icon: TrendingUp,
      title: "PROVEN METHODOLOGY",
      statistic: "95% Goal Achievement Rate",
      description: "Our structured training programs combine traditional techniques with modern sports science for optimal results.",
      color: "from-secondary to-primary"
    },
    {
      icon: Calendar,
      title: "FLEXIBLE PROGRAMS",
      statistic: "6 Days/Week Schedule",
      description: "Morning, afternoon, and evening classes to fit your lifestyle. Weekend workshops and special events available.",
      color: "from-primary to-primary-light"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Why Choose EDESTORY?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What Makes Us Different
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-red hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>

                {/* Statistic */}
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  {advantage.statistic}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Champion Coaches</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;