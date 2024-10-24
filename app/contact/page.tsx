"use client"

import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import OfficeHours from './OfficeHours';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />
        <div className="space-y-8">
          <ContactInfo />
          <OfficeHours />
        </div>
      </div>
    </div>
  );
}
