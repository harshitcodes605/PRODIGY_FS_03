import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/products';
import heroImage from '@/assets/hero-shop.jpg';

export default function Home() {
  const featuredProducts = sampleProducts.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to LocalShop
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Discover unique, handcrafted products from local artisans in your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose LocalShop?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-shop-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Handcrafted Quality</h3>
                <p className="text-muted-foreground">
                  Every product is carefully crafted by local artisans with passion and attention to detail.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-shop-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Local Delivery</h3>
                <p className="text-muted-foreground">
                  Quick and reliable delivery from our local store to your doorstep within 2-3 days.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  100% satisfaction guaranteed. If you're not happy, we'll make it right.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Products
            </h2>
            <Link to="/products">
              <Button variant="outline" className="hidden sm:flex">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Link to="/products">
              <Button variant="outline">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The quality of products here is amazing! I love supporting local artisans."
                </p>
                <p className="font-semibold">- Sarah M.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-shop-card shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Fast delivery and excellent customer service. Highly recommend!"
                </p>
                <p className="font-semibold">- James L.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-shop-card shadow-card md:col-span-2 lg:col-span-1">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Beautiful handcrafted items that make perfect gifts. Love this store!"
                </p>
                <p className="font-semibold">- Emily R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}