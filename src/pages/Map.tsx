import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Map = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero text-white mb-6">
            Visit{" "}
            <span className="bg-gradient-to-r from-secondary-light to-secondary bg-clip-text text-transparent">
              Hydromark
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Located in the heart of New York City, our showroom and offices 
            are always open for client meetings and consultations.
          </p>
        </div>
      </section>

      {/* Map and Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Location Information */}
            <div className="lg:col-span-1">
              <Card className="shadow-card h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Beldi Salhapur, Dhandhedi Khwazgipur<br />
                      Roorkee<br />
                      Haridwar PIN - 247667<br />
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Business Hours
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Phone: +91 75794 48970, +91 70179 60923</p>
                      <p>Email: hydromark0923@gmail.com</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="hero" className="w-full " asChild>
                      <a
                        href="https://maps.app.goo.gl/XVrC9oF4xwUpQgfw8"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                  </div>

                  {/* <div className="pt-4 border-t">
                    <h4 className="font-semibold text-foreground mb-2">Transportation</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>🚇 Subway: 1, 2, 3 lines to 14th St-Union Sq</p>
                      <p>🚌 Bus: M14A, M14D to Union Square</p>
                      <p>🚗 Parking: Street parking and nearby garages</p>
                      <p>🚶 Walk-friendly area with easy access</p>
                    </div>
                  </div> */}
                </CardContent>
              </Card>
            </div>

            {/* Embedded Map */}
            <div className="lg:col-span-2">
              <Card className="shadow-card h-full">
                <CardContent className="p-0">
                  <div className="relative w-full h-96 lg:h-full min-h-96 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27672.98117787581!2d77.91674504999999!3d29.889566449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094b0032e2e1c7%3A0x1abe00b8e533fcef!2sHydroMark!5e0!3m2!1sen!2sin!4v1754117495277!5m2!1sen!2sin"
                      width="100%"
                      height="570px"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hydromark Location"
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section-title text-foreground mb-6">
            Schedule a{" "}
            <span className="bg-gradient-ocean bg-clip-text text-transparent">
              Visit
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We'd love to show you our showroom and discuss your project in person. 
            Our team is available for consultations, product demonstrations, 
            and custom design sessions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Showroom Tours",
                description: "See our latest products and customization options"
              },
              {
                title: "Design Consultations", 
                description: "Work with our designers to create your perfect bottle"
              },
              {
                title: "Sample Reviews",
                description: "Touch and feel the quality of our materials"
              }
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-lg glass text-center">
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <Button variant="hero" size="lg" asChild>
            <a href="/contact">Schedule Your Visit</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Map;