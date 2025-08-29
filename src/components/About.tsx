import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const keyPoints = [
    {
      icon: Award,
      title: "Expert Coaching",
      description: "International championship experience"
    },
    {
      icon: TrendingUp,
      title: "Proven Results", 
      description: "85% competition success rate"
    },
    {
      icon: Target,
      title: "Individual Focus",
      description: "Personalized training programs"
    },
    {
      icon: Users,
      title: "Complete Development",
      description: "Physical, mental & technical growth"
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            About EDESTORY Sports Academy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building Champions Through Discipline & Dedication
          </p>
        </div>

        {/* Content Split */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop"
                alt="Modern training facility with coach and students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-3xl font-bold">2016</div>
                <div className="text-sm">Established</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-6">
              Where Warriors Are Born
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              EDESTORY Sports Academy has been the premier destination for combat sports training since 2016. Our world-class facility combines traditional martial arts wisdom with modern training methodologies.
            </p>

            {/* Key Points */}
            <div className="space-y-6 mb-8">
              {keyPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-1">
                        {point.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-semibold shadow-red">
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;