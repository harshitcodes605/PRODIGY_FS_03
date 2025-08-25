import { Heart, Users, Leaf, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-shop-hero py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About LocalShop
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Supporting local artisans and bringing handcrafted quality to your doorstep
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              LocalShop was born from a simple belief: that the best products come from passionate creators 
              in our own community. We started as a small marketplace to help local artisans reach more 
              customers and provide people with unique, high-quality alternatives to mass-produced goods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                We're dedicated to fostering a thriving local economy by connecting customers with 
                talented artisans and small businesses. Every purchase supports creativity, 
                sustainability, and the unique character of our community.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Quality First</h3>
              <p className="text-muted-foreground">
                We carefully curate every product in our store, ensuring that each item meets our 
                high standards for quality, craftsmanship, and authenticity. When you shop with us, 
                you're not just buying a product – you're investing in artistry and tradition.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Local Artisans</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Years Serving</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-shop-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community First</h3>
                <p className="text-muted-foreground text-sm">
                  Supporting local creators and building stronger communities together.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-shop-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                <p className="text-muted-foreground text-sm">
                  Promoting eco-friendly practices and reducing environmental impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Maintaining the highest standards in product quality and service.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Relationships</h3>
                <p className="text-muted-foreground text-sm">
                  Building lasting connections between customers and creators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions about our products or want to become a partner artisan? 
            We'd love to hear from you!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Visit Our Store</h3>
                <p className="text-muted-foreground text-sm">
                  123 Main Street<br />
                  Your City, State 12345<br />
                  Mon-Sat: 9am-7pm<br />
                  Sun: 11am-5pm
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Contact Info</h3>
                <p className="text-muted-foreground text-sm">
                  Phone: (555) 123-4567<br />
                  Email: hello@localshop.com<br />
                  Instagram: @localshop<br />
                  Facebook: LocalShop
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}