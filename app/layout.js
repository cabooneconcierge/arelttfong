import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://arlettfong.com"),
  title: "Dra. Arlett Fong Hirales | Cirugía general y laparoscópica en Los Cabos",
  description:
    "Consulta de cirugía general, laparoscopía y mini laparoscopía en Los Cabos, Baja California Sur.",
  openGraph: {
    title: "Dra. Arlett Fong Hirales",
    description: "Cirugía general y laparoscópica en Los Cabos.",
    url: "https://arlettfong.com",
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
    url: "https://arlettfong.com"
  };

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
