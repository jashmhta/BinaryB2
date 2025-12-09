"use client";

export default function TrustSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/institutional-clients.jpg" 
              alt="Institutional Investors and Financial Institutions" 
              className="w-full h-auto object-cover"
            />
            {/* Optional Overlay for better text visibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
