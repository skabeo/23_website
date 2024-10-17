import Image from "next/image";
import Logo from "@/components/assets/download.jpeg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, ThumbsUp } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: "#4B91F1" }}>About Prime Properties</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative w-full h-[400px]">
          <Image
            src={Logo}
            alt="Prime Properties Office"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            23 Properties was founded in 2022 with a vision to revolutionize the real estate industry. Our journey began with a small team of passionate individuals who believed in making the dream of homeownership accessible to everyone.
          </p>
          <p className="text-muted-foreground mb-4">
            Over the years, we've grown into a leading real estate agency&apos; known for our commitment to excellence, integrity, and customer satisfaction. Our team of expert agents combines years of experience with cutting-edge technology to provide unparalleled service to our clients.
          </p>
          <p className="text-muted-foreground">
            At 23 Properties&apos; we don't just sell houses&apos; we help people find homes where memories are made and dreams come true.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2" />
              Client-Centric Approach
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>We put our clients&apos; needs first&apos; ensuring a personalized and satisfying experience throughout the real estate journey.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2" />
              Excellence in Service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>We strive for excellence in every aspect of our service, from property listings to closing deals.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ThumbsUp className="mr-2" />
              Integrity and Trust
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>We build lasting relationships based on trust, transparency, and ethical business practices.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Kwabena Adjei', 'George Osei', 'Afia Dowsey'].map((name, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="w-[300px] h-[300px] relative mx-auto mb-4">
                {/* <Image
                  src={`https://source.unsplash.com/random/300x300?portrait,${index + 1}`}
                  alt={name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                /> */}
              </div>
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-center">Real Estate Agent</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                With over 5 years of experience, {name.split(' ')[0]} has helped countless families find their perfect homes.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
