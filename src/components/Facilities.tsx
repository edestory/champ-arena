import { useState } from 'react';

const Facilities = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const facilities = [
    {
      id: 1,
      title: "BOXING RING",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop",
      caption: "Official competition-size ring"
    },
    {
      id: 2,
      title: "WRESTLING MATS", 
      image: "https://images.unsplash.com/photo-1583473848882-f9a5c8b8c4b0?w=800&h=600&fit=crop",
      caption: "High-quality competition mats"
    },
    {
      id: 3,
      title: "CONDITIONING AREA",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      caption: "Modern fitness equipment"
    },
    {
      id: 4,
      title: "LOCKER ROOMS",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop",
      caption: "Clean, spacious facilities"
    },
    {
      id: 5,
      title: "RECOVERY ZONE", 
      image: "https://images.unsplash.com/photo-1506629905607-d0fbdd4c4c10?w=800&h=600&fit=crop",
      caption: "Stretching and recovery area"
    },
    {
      id: 6,
      title: "YOUTH TRAINING AREA",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop",
      caption: "Safe space for young athletes"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Our Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Train Like a Champion
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <div
              key={facility.id}
              className="group relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-red transition-all duration-300"
              onClick={() => setSelectedImage(facility.id)}
            >
              {/* Image */}
              <img 
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {facility.caption}
                  </p>
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-accent rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">2.5K</span>
            </div>
            <h4 className="font-semibold text-secondary mb-2">Training Space</h4>
            <p className="text-sm text-muted-foreground">Square meters of professional facilities</p>
          </div>

          <div className="bg-accent rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-dark to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">24/7</span>
            </div>
            <h4 className="font-semibold text-secondary mb-2">Access</h4>
            <p className="text-sm text-muted-foreground">Member access to facilities</p>
          </div>

          <div className="bg-accent rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">Pro</span>
            </div>
            <h4 className="font-semibold text-secondary mb-2">Equipment</h4>
            <p className="text-sm text-muted-foreground">Professional grade training gear</p>
          </div>

          <div className="bg-accent rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">Safe</span>
            </div>
            <h4 className="font-semibold text-secondary mb-2">Environment</h4>
            <p className="text-sm text-muted-foreground">Clean, secure, and monitored</p>
          </div>
        </div>
      </div>

      {/* Modal/Lightbox would go here if selectedImage is not null */}
      {/* For now, just close on click outside */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={facilities.find(f => f.id === selectedImage)?.image}
              alt="Facility detail"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Facilities;