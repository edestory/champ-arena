import { Check, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "STARTER",
      price: "6,500",
      description: "Perfect for beginners",
      popular: false,
      features: [
        "2 classes per week",
        "Basic equipment included",
        "Access to locker room", 
        "Beginner-friendly programs",
        "Group training only"
      ],
      cta: "Choose Starter",
      icon: Star
    },
    {
      name: "CHAMPION",
      price: "11,500",
      description: "Most popular choice",
      popular: true,
      badge: "BEST VALUE",
      features: [
        "Unlimited group classes",
        "2 personal training sessions",
        "Competition preparation",
        "Nutrition consultation",
        "Access to all equipment",
        "Priority booking"
      ],
      cta: "Choose Champion",
      icon: Crown
    },
    {
      name: "ELITE",
      price: "18,500", 
      description: "For serious athletes",
      popular: false,
      features: [
        "Unlimited all access",
        "4 personal training sessions",
        "Competition coaching",
        "Individual meal plans",
        "Recovery treatments",
        "Guest privileges"
      ],
      cta: "Go Elite",
      icon: Crown
    }
  ];

  const additionalServices = [
    { name: "Personal Training Session", price: "3,500₽" },
    { name: "Competition Preparation", price: "5,000₽/month" },
    { name: "Nutrition Consulting", price: "2,500₽/session" }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Membership Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible Options for Every Goal
          </p>
          
          {/* Annual Discount Banner */}
          <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold">
            <Star className="w-5 h-5 mr-2" />
            Save 15% with Annual Membership
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-card hover:shadow-red transition-all duration-300 overflow-hidden ${
                  plan.popular ? 'scale-105 ring-2 ring-primary' : 'hover:-translate-y-2'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="bg-primary text-white text-sm font-semibold px-4 py-2 text-center">
                    {plan.badge}
                  </div>
                )}

                <div className="p-8">
                  {/* Icon & Plan Name */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      plan.popular ? 'bg-gradient-to-br from-primary to-primary-dark' : 'bg-gradient-to-br from-secondary to-primary'
                    }`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {plan.price}₽
                    </div>
                    <div className="text-muted-foreground">per month</div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular ? 'bg-primary' : 'bg-secondary'
                        }`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full font-semibold transition-all ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary-hover text-white shadow-red'
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-accent rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-secondary text-center mb-8">
            Additional Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-card hover:shadow-red transition-all duration-300 hover:-translate-y-1">
                <h4 className="font-semibold text-secondary mb-2">
                  {service.name}
                </h4>
                <div className="text-2xl font-bold text-primary">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Pay monthly or save with yearly plans
          </p>
          <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-semibold shadow-red">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;