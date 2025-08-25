import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-success-foreground" />
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Order Placed Successfully!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been confirmed and will be processed shortly.
          </p>
          
          <Card className="mb-8 bg-shop-card shadow-card">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-2">Order Number</h3>
                  <p className="text-muted-foreground">#LS{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Estimated Delivery</h3>
                  <p className="text-muted-foreground">3-5 business days</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email Confirmation</h3>
                  <p className="text-muted-foreground">Sent to your email address</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Order Status</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-primary font-medium">Processing</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Truck className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">What happens next?</h3>
            </div>
            <div className="text-left max-w-md mx-auto space-y-3 text-muted-foreground">
              <p>• We'll prepare your order with care</p>
              <p>• You'll receive tracking information via email</p>
              <p>• Your items will be delivered to your doorstep</p>
              <p>• Enjoy your locally-crafted products!</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="hero" size="lg">
                Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}