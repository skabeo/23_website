import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OfficeHours() {
  return (
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
  );
}

