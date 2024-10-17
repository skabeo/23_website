import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Search, DollarSign, Briefcase, Key, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Property Listings',
      description: 'Access our extensive database of properties for sale and rent.',
      icon: Home,
    },
    {
      title: 'Property Valuation',
      description: 'Get an accurate estimate of your property\'s market value.',
      icon: DollarSign,
    },
    {
      title: 'Property Management',
      description: 'Let us handle the day-to-day operations of your rental properties.',
      icon: Briefcase,
    },
    {
      title: 'Home Buying Assistance',
      description: 'Expert guidance throughout your home buying journey.',
      icon: Key,
    },
    {
      title: 'Investment Consulting',
      description: 'Strategic advice for real estate investments and portfolio management.',
      icon: TrendingUp,
    },
    {
      title: 'Property Search',
      description: 'Personalized property search based on your specific requirements.',
      icon: Search,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center">
        At 23 Properties, we offer a comprehensive range of real estate services to meet all your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {<service.icon className="mr-2" />}
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Need a Custom Service?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          We understand that every client has unique needs. Contact us to discuss how we can tailor our services to your specific requirements.
        </p>
        <a href="/contact" className="text-primary hover:underline text-lg font-semibold">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
