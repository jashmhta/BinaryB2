import { APP_LOGO, APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-800 to-blue-900 dark:from-gray-900 dark:to-black py-12 transition-colors duration-300 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/footer-background-bonds.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={APP_LOGO} alt={APP_NAME} className="h-10 w-10" />
              <span className="text-xl font-black text-white">{APP_NAME}</span>
            </div>
            <p className="text-white text-sm leading-relaxed font-bold">
              Strategic bond market solutions for institutional investors.
            </p>
            <p className="text-white/95 text-sm leading-relaxed mt-2 font-semibold">
              A specialized division of Binary Capital.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-black mb-4 text-[hsl(var(--golden))] drop-shadow-lg">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-white font-bold">
              <li>Corporate Bond Underwriting</li>
              <li>Government Securities</li>
              <li>High-Yield Bonds</li>
              <li>Bond Portfolio Management</li>
              <li>Credit Rating Advisory</li>
              <li>Secondary Market Trading</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-black mb-4 text-[hsl(var(--golden))] drop-shadow-lg">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-white font-semibold">
              <li>
                <span className="font-black text-white">Phone:</span>
                <br />
                <a href="tel:+917738056127" className="text-white hover:text-[hsl(var(--golden))] transition-colors font-semibold">
                  +91 7738056127
                </a>
              </li>
              <li>
                <span className="font-black text-white">Email:</span>
                <br />
                <a href="mailto:sales@binarycapital.in" className="text-white hover:text-[hsl(var(--golden))] transition-colors font-semibold">
                  sales@binarycapital.in
                </a>
              </li>
              <li>
                <span className="font-black text-white">Address:</span>
                <br />
                2045, 2nd Floor, Spaces Adani Height
                <br />
                Andheri West, Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 dark:border-white/20 pt-8 text-center">
          <p className="text-sm text-white/95 font-bold">
            © 2025 Binary Bonds - A Division of Binary Capital. All rights reserved. | Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
