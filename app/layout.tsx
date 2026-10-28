import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aathidasan-ai-portfoli-craft.lovable.app"),
  title: {
    default: "Aathidasan R | Java Full Stack Developer & AI Enthusiast",
    template: "%s | Aathidasan R",
  },
  description:
    "Aathidasan R is a Java Full Stack Developer and B.Sc. IT graduate with practical experience in AI computer vision, Python, React, Flask, and SQL.",
  keywords: [
    "Aathidasan R",
    "Java Full Stack Developer",
    "Software Developer Fresher",
    "AI Enthusiast",
    "Chennai Developer",
    "Nagapattinam",
    "Python",
    "SQL",
    "React",
    "PRIST University",
    "AI Theft Detection System",
  ],
  authors: [{ name: "Aathidasan R" }],
  creator: "Aathidasan R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aathidasan-ai-portfoli-craft.lovable.app",
    title: "Aathidasan R | Java Full Stack Developer & AI Enthusiast",
    description:
      "Aathidasan R is a Java Full Stack Developer and B.Sc. IT graduate with practical experience in AI computer vision, Python, React, Flask, and SQL.",
    siteName: "Aathidasan R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aathidasan R | Java Full Stack Developer & AI Enthusiast",
    description:
      "Aathidasan R is a Java Full Stack Developer and B.Sc. IT graduate with practical experience in AI computer vision, Python, React, Flask, and SQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aathidasan-ai-portfoli-craft.lovable.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aathidasan R",
    jobTitle: "Java Full Stack Developer",
    description:
      "B.Sc. Information Technology graduate and aspiring Java Full Stack Developer with strong foundation in Java, Python, React, SQL, and AI computer vision.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagapattinam / Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Ponnaiyah Ramajayam Institute of Science & Technology (PRIST), Thanjavur",
    },
    url: "https://aathidasan-ai-portfoli-craft.lovable.app",
    sameAs: ["https://www.linkedin.com/in/aathi-dasan-386513352"],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans bg-[#0A0A0C] text-white antialiased min-h-screen relative selection:bg-purple-500/30 selection:text-white"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-purple-600 text-white rounded font-medium shadow-lg transition-transform"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
