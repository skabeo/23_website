import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import properties from "@/components/utilis/detailedDatabase";
import Link from 'next/link';

export default function Properties() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Properties</h1>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Input placeholder="Search properties..." className="flex-grow" />
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="penthouse">Penthouse</SelectItem>
            <SelectItem value="cottage">Cottage</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="0-250000">$0 - $250,000</SelectItem>
            <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
            <SelectItem value="500000-1000000">$500,000 - $1,000,000</SelectItem>
            <SelectItem value="1000000+">$1,000,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Card key={property.id}>
            <CardHeader>
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>
              <CardTitle>{property.title}</CardTitle>
              <CardDescription>{property.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-2">{property.price}</p>
              <p className="text-muted-foreground mb-2">{property.location}</p>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{property.bedrooms} beds</span>
                <span>{property.bathrooms} baths</span>
                <span>{property.area}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={property.meqasa} target="_blank" className="w-full">
                <Button className="w-full">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
