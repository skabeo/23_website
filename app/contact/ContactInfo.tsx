import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
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
  );
}
