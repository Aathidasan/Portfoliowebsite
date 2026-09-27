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
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aathidasan-ai-portfoli-craft.lovable.app"),
  title: {
    default: "Aathidasan R | Java Developer | Software Developer",
    template: "%s | Aathidasan R",
  },
  description:
    "Aathidasan R is a Java developer and software developer fresher with experience in AI, web development, Python, SQL, and practical software projects.",
  keywords: [
    "Aathidasan R",
    "Java Developer",
    "Software Developer Fresher",
    "AI Enthusiast",
    "Chennai Developer",
    "Python",
    "SQL",
    "React",
    "QSpiders Velachery",
    "PRIST University",
    "AI Theft Detection System",
    "Web Developer Fresher",
  ],
  authors: [{ name: "Aathidasan R" }],
  creator: "Aathidasan R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aathidasan-ai-portfoli-craft.lovable.app",
    title: "Aathidasan R | Java Developer | Software Developer",
    description:
      "Aathidasan R is a Java developer and software developer fresher with experience in AI, web development, Python, SQL, and practical software projects.",
    siteName: "Aathidasan R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aathidasan R | Java Developer | Software Developer",
    description:
      "Aathidasan R is a Java developer and software developer fresher with experience in AI, web development, Python, SQL, and practical software projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    jobTitle: "Java Developer",
    description:
      "Passionate software developer fresher focused on Java, web technologies, and AI, building practical solutions while continuously improving development skills.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "PRIST University, Thanjavur",
    },
    knowsAbout: [
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "React",
      "Artificial Intelligence",
      "Computer Vision",
      "Object Detection",
      "Software Development",
    ],
    url: "https://aathidasan-ai-portfoli-craft.lovable.app",
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
        className={`${inter.variable} ${firaCode.variable} font-sans bg-[#0B1120] text-slate-100 antialiased min-h-screen relative selection:bg-indigo-500/30 selection:text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-indigo-600 text-white rounded-md font-medium shadow-lg transition-transform"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
