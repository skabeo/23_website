import Link from 'next/link';
import { Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">23 Properties</h3>
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
            <p className="text-muted-foreground">Clinic Street, Sowutuom</p>
            <p className="text-muted-foreground">Accra, Ghana</p>
            <p className="text-muted-foreground">Phone: +233 530 91 4141</p>
            <p className="text-muted-foreground">Email: 23propertiess@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex justify-between items-center">
          <p className="text-muted-foreground">&copy; 2024 23 Properties. All rights reserved.</p>
          <div className="flex space-x-4">
            {/* <a href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></a> */}
            <a href="https://x.com/23_properties" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
            <a href="https://www.instagram.com/23propertiess/" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></a>
            {/* <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
