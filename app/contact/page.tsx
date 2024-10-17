"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xbljjwzl");
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
              />
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <Textarea
                id="textarea"
                name="textarea"
                placeholder="Your Message" rows={5}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={state.submitting}
              >Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info and Office Hours */}
        <div className="space-y-8">
          {/* Contact Information Card */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-2" />
                <span>+233 530 914 141</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" />
                <span>23propertiess@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>Mystical Rose, Clinic Street</span>
              </div>
            </CardContent>
          </Card>

          {/* Office Hours Card */}
          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
