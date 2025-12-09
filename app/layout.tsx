import type { Metadata } from 'next';
import './globals.css';
import { defaultMetadata } from '@/lib/seo';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';
import AOSInit from '@/components/AOSInit';
import Analytics from '@/components/Analytics';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme Script - Prevents Flash of Light Mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (savedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    const hour = new Date().getHours();
                    const isDarkTime = hour >= 18 || hour < 6;
                    if (isDarkTime) {
                      document.documentElement.classList.add('dark');
                      localStorage.setItem('theme', 'dark');
                    } else {
                      localStorage.setItem('theme', 'light');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* Preload Critical Assets - WebP for better performance */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        <link rel="preload" href="/hero-background-bonds.webp" as="image" type="image/webp" />
        <link rel="preload" href="/logo-animation.gif" as="image" type="image/gif" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon */}
        <link rel="icon" href="/1000112610.png" />
        <link rel="apple-touch-icon" href="/1000112610.png" />
      </head>
      <body className="antialiased bg-white dark:bg-black transition-colors duration-300">
        {/* Analytics - Google Analytics 4 + Vercel Analytics */}
        <Analytics />
        <AOSInit />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
