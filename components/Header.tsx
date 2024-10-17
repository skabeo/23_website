"use client"

import Link from 'next/link';
import { Home, Info, Briefcase, Building } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/"
          className="text-2xl font-bold"
          style={{ color: "#4B91F1" }}
        >
          23 Properties
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{ color: "#4B91F1" }}>
                  <Home
                    className="mr-2 h-4 w-4"
                    style={{ color: "#4B91F1" }}
                  />
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{ color: "#4B91F1" }}>
                  <Info
                    className="mr-2 h-4 w-4"
                    style={{ color: "#4B91F1" }}
                  />
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{ color: "#4B91F1" }}>
                  <Briefcase className="mr-2 h-4 w-4" style={{ color: "#4B91F1" }} />
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/properties" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} style={{ color: "#4B91F1" }}>
                  <Building className="mr-2 h-4 w-4" style={{ color: "#4B91F1" }} />
                  Properties
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;

