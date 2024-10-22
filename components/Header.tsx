"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Home, Info, Briefcase, Building, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from './ModeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/about', icon: Info, label: 'About' },
    { href: '/services', icon: Briefcase, label: 'Services' },
    { href: '/properties', icon: Building, label: 'Properties' },
  ];

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          23 Properties
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center text-primary hover:text-primary/80">
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center text-primary hover:text-primary/80 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="absolute bottom-4 left-0 right-0">
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
