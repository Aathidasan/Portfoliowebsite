import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#110720",
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
    "Aathidasan R is a Java Full Stack Developer and B.Sc. IT graduate (CGPA: 8.8/10) with practical experience in AI computer vision, Python, React, Flask, and SQL.",
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
    "QSpiders Velachery",
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
      "Aathidasan R is a Java Full Stack Developer and B.Sc. IT graduate (CGPA: 8.8/10) with practical experience in AI computer vision, Python, React, Flask, and SQL.",
    siteName: "Aathidasan R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aathidasan R | Java Full Stack Developer & AI Enthusiast",
    description:
      "Aathidasan R is a Java Full Stack Developer and B.Sc. IT graduate (CGPA: 8.8/10) with practical experience in AI computer vision, Python, React, Flask, and SQL.",
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
      "B.Sc. Information Technology graduate with a CGPA of 8.8/10 and aspiring Java Full Stack Developer with strong foundation in Java, Python, React, SQL, and AI computer vision.",
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
        className={`${inter.variable} ${firaCode.variable} font-sans bg-[#110720] text-white antialiased min-h-screen relative selection:bg-purple-500/40 selection:text-white`}
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
