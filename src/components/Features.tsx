import { Target, BookOpen, TrendingUp, Trophy } from 'lucide-react';

const Features = () => {
  const steps = [
    {
      icon: Target,
      title: "ASSESSMENT & GOAL SETTING",
      description: "Personal evaluation and customized training plan development",
      time: "Week 1",
      color: "from-primary to-primary-dark"
    },
    {
      icon: BookOpen,
      title: "FUNDAMENTAL TECHNIQUES",
      description: "Master basic strikes, footwork, and defensive movements",
      time: "Weeks 2-8", 
      color: "from-primary-dark to-secondary"
    },
    {
      icon: TrendingUp,
      title: "SKILL DEVELOPMENT",
      description: "Advanced combinations, sparring preparation, and conditioning",
      time: "Weeks 9-16",
      color: "from-secondary to-primary"
    },
    {
      icon: Trophy,
      title: "COMPETITION READY",
      description: "Tournament preparation, advanced strategy, and peak performance",
      time: "Week 16+",
      color: "from-primary to-primary-light"
    }
  ];

  return (
    <section id="features" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            What You Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete Training Experience
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary-dark to-primary transform md:-translate-x-0.5"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:flex-row`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-8 md:left-1/2 w-16 h-16 transform md:-translate-x-1/2 -translate-y-2 md:translate-y-0">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-red`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-red transition-all duration-300 hover:-translate-y-1">
                        {/* Time Badge */}
                        <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                          {step.time}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-secondary mb-4">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Training Success Metrics
            </h3>
            <p className="text-muted-foreground">
              Real results from our structured approach
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors">
                95%
              </div>
              <div className="text-sm text-muted-foreground">Goal Achievement</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors">
                6-8
              </div>
              <div className="text-sm text-muted-foreground">Weeks to Progress</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors">
                85%
              </div>
              <div className="text-sm text-muted-foreground">Competition Ready</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:text-primary-dark transition-colors">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;