import { ArrowRight, Clock, Users, Star, Trophy, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "BOXING FUNDAMENTALS",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
      age: "Ages 8-16",
      description: "Master the sweet science with proper technique, footwork, and conditioning",
      price: "From 8,000₽/month",
      features: [
        "Basic punching techniques",
        "Footwork training", 
        "Physical conditioning"
      ],
      cta: "Join Boxing",
      popular: false
    },
    {
      id: 2,
      title: "WRESTLING MASTERY",
      image: "https://images.unsplash.com/photo-1583473848882-f9a5c8b8c4b0?w=600&h=400&fit=crop",
      age: "Ages 10-18",
      description: "Develop superior grappling skills, takedowns, and ground control",
      price: "From 9,000₽/month",
      features: [
        "Takedown techniques",
        "Ground control",
        "Competition preparation"
      ],
      cta: "Start Wrestling",
      popular: false
    },
    {
      id: 3,
      title: "KIDS COMBAT SPORTS",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop",
      age: "Ages 6-12",
      description: "Safe introduction to martial arts focusing on discipline and fun",
      price: "From 6,500₽/month",
      features: [
        "Age-appropriate techniques",
        "Character development",
        "Anti-bullying skills"
      ],
      cta: "Kids Classes",
      popular: true
    },
    {
      id: 4,
      title: "ADULT FITNESS BOXING",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      age: "Ages 18+",
      description: "High-intensity boxing workouts for fitness and stress relief",
      price: "From 7,500₽/month",
      features: [
        "Cardio conditioning",
        "Technique training",
        "Stress management"
      ],
      cta: "Adult Training",
      popular: false
    },
    {
      id: 5,
      title: "COMPETITION PREP",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop",
      age: "Advanced only",
      description: "Elite training for competitive athletes and tournament preparation",
      price: "From 15,000₽/month",
      features: [
        "1-on-1 coaching",
        "Competition strategy",
        "Mental preparation"
      ],
      cta: "Go Pro",
      popular: false
    },
    {
      id: 6,
      title: "PERSONAL TRAINING",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      age: "All ages",
      description: "One-on-one sessions tailored to your specific goals and needs",
      price: "From 3,500₽/session",
      features: [
        "Customized programs",
        "Flexible scheduling",
        "Faster progress"
      ],
      cta: "Book Session",
      popular: false
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Training Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose Your Path to Mastery
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`group bg-white rounded-2xl shadow-card hover:shadow-red hover:-translate-y-2 transition-all duration-300 overflow-hidden ${
                program.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="bg-primary text-white text-sm font-semibold px-4 py-2 text-center">
                  MOST POPULAR
                </div>
              )}

              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Age & Title */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {program.age}
                  </span>
                  <div className="text-2xl font-bold text-primary">
                    {program.price.split(' ')[1]}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>

                <div className="text-sm font-medium text-secondary mb-4">
                  {program.price}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full font-semibold transition-all ${
                    program.popular 
                      ? 'bg-primary hover:bg-primary-hover text-white shadow-red'
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {program.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Not sure which program is right for you?
          </p>
          <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-semibold shadow-red">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;