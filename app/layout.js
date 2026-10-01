import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://arelttfong.com"),
  title: "Dra. Arlett Fong Hirales | Cirugía general y laparoscópica en Los Cabos",
  description:
    "Consulta de cirugía general, laparoscopía y mini laparoscopía en Hospital H+ Los Cabos, San José del Cabo, Baja California Sur.",
  openGraph: {
    title: "Dra. Arlett Fong Hirales",
    description: "Cirugía general y laparoscópica en Los Cabos.",
    url: "https://arelttfong.com",
    siteName: "Dra. Arlett Fong Hirales",
    locale: "es_MX",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Arlett Fong Hirales",
    medicalSpecialty: "General surgery",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plaza Koral Center, Carretera Transpeninsular Km 24.5",
      addressLocality: "San José del Cabo",
      addressRegion: "Baja California Sur",
      postalCode: "23406",
      addressCountry: "MX"
    },
    url: "https://arelttfong.com"
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
