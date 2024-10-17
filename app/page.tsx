import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Home as Mone, DollarSign, TrendingUp } from 'lucide-react';
import database from "@/components/utilis/propertyDatabase";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4" style={{ color: "#4B91F1" }}>Welcome to 23 Properties</h1>
        <p className="text-xl text-muted-foreground mb-8">Your trusted partner in finding your dream home</p>
        <Link href="/properties" passHref>
          <Button size="lg">Explore Properties</Button>
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {database.map((property) => (
            <Card key={property.id}>
              <CardHeader>
                <CardTitle>{property.title}</CardTitle>
                <CardDescription>{property.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 relative">
                  <Image
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Link href={property.href} target="_blank" className="w-full">
                  <Button className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mone className="mr-2" />
                Extensive Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access to a wide range of properties to suit every need and budget.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2" />
                Competitive Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>We offer the best value for your investment in the real estate market.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2" />
                Expert Guidance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our experienced agents provide personalized advice throughout your journey.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Find Your Dream Home?</h2>
        <p className="text-xl text-muted-foreground mb-8">Let us help you navigate the real estate market with ease.</p>
        <Link href="/contact" passHref>
          <Button size="lg">Contact Us Today</Button>
        </Link>
      </section>
    </div>
  );
}
