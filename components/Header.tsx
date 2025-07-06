"use client";

import { NavigationMenu } from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Star, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <>
      {/* Yellow bar with phone and address */}
      <div className="w-full bg-yellow-100 text-xs md:text-sm flex justify-between items-center px-2 md:px-8 py-1 font-medium border-b border-yellow-200">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-2 md:px-8 py-1 font-medium ">
          <span className="flex items-center gap-1">
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
            <a href="tel:(323)555-0192" className="cursor-pointer">
              (323) 555-0192
            </a>
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
            <span className="cursor-pointer">
              <span className="hidden md:inline">
                1287 Maplewood Drive, Los Angeles, CA 90026
              </span>
              <span className="inline md:hidden">Los Angeles, CA</span>
            </span>
          </span>
        </div>
      </div>
      <header
        className="sticky top-0 left-0 w-full z-50 bg-white border-b border-border shadow-sm"
        style={{ marginTop: 0 }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-8 py-2 md:py-3">
          {/* Left: Logo and subtitle */}
          <div className="flex flex-col items-start justify-center min-w-[180px]">
            <span className="font-bold text-lg md:text-xl tracking-tight cursor-pointer">
              Dr. Serena Blake, PsyD
            </span>
            <span className="text-xs font-normal text-muted-foreground">
              Clinical Psychologist
            </span>
          </div>
          {/* Center: Nav */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex gap-6 items-center">
              {navLinks.map((link, idx) => (
                <a
                  key={`${link.href}-${idx}`}
                  href={link.href}
                  className="text-sm md:text-base font-medium hover:text-primary transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          {/* Right: Button */}
          <div className="flex items-center min-w-[20px] justify-end">
            <Button
              className="ml-2 md:ml-4 hidden md:inline-flex text-sm md:text-base cursor-pointer"
              size="lg"
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Star className="mr-1 w-4 h-4" />
              Get Started
            </Button>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden ml-2">
            <details className="relative">
              <summary className="list-none cursor-pointer p-2 rounded hover:bg-accent">
                <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
                <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
                <span className="block w-6 h-0.5 bg-foreground"></span>
              </summary>
              <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded shadow-lg flex flex-col">
                {navLinks.map((link, idx) => (
                  <a
                    key={`${link.href}-${idx}`}
                    href={link.href}
                    className="px-4 py-2 text-base font-medium hover:bg-accent cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  className="m-2 text-base cursor-pointer"
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Star className="mr-1 w-4 h-4" />
                  Get Started
                </Button>
              </div>
            </details>
          </div>
        </nav>
      </header>
    </>
  );
}
