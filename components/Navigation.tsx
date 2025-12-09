"use client";

import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_NAME } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    } else {
      // Navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src="/logo.png" alt={APP_NAME} className="h-10 w-10 md:h-14 md:w-14" />
            <span className="text-base md:text-xl font-bold text-[hsl(var(--navy))] dark:text-white">
              {APP_NAME}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] dark:hover:text-[hsl(var(--golden))] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] dark:hover:text-[hsl(var(--golden))] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] dark:hover:text-[hsl(var(--golden))] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] dark:hover:text-[hsl(var(--golden))] transition-colors font-medium"
            >
              Contact
            </button>
            <a
              href="/faq"
              className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] dark:hover:text-[hsl(var(--golden))] transition-colors font-medium"
            >
              FAQ
            </a>
            <a
              href="https://binary-capital-bc.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] dark:hover:text-[hsl(var(--golden))] transition-colors font-medium"
            >
              Binary Capital
            </a>
            <ThemeToggle />
            <Button
              className="bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-black dark:text-black"
              onClick={() => scrollToSection("contact")}
            >
              Buy Bonds
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] transition-colors font-medium text-left px-4"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] transition-colors font-medium text-left px-4"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] transition-colors font-medium text-left px-4"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] transition-colors font-medium text-left px-4"
              >
                Contact
              </button>
              <a
                href="/faq"
                className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] transition-colors font-medium text-left px-4"
              >
                FAQ
              </a>
              <a
                href="https://binary-capital-bc.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--golden))] transition-colors font-medium text-left px-4"
              >
                Binary Capital
              </a>
              <div className="px-4">
                <Button
                  className="w-full bg-[hsl(var(--golden))] hover:bg-[hsl(var(--golden-dark))] text-black dark:text-black"
                  onClick={() => scrollToSection("contact")}
                >
                  Buy Bonds
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
