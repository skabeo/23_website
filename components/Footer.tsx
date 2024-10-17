import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Prime Properties</h3>
            <p className="text-muted-foreground">Your trusted partner in finding your dream home.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/properties" className="text-muted-foreground hover:text-primary">Properties</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-muted-foreground">123 Real Estate Street</p>
            <p className="text-muted-foreground">Cityville, State 12345</p>
            <p className="text-muted-foreground">Phone: (123) 456-7890</p>
            <p className="text-muted-foreground">Email: info@primeproperties.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p className="text-muted-foreground">&copy; 2023 Prime Properties. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
