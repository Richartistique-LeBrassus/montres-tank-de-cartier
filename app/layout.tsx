import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DesignBy from "@/components/DesignBy";

export const metadata = {
  title: "Richartistique | Montres Tank de Cartier",
  description: "Cartier Tank ReImagined by MJ Ríchards.",
  icons: {
    icon: [
      { url: '/imgs/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/imgs/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/imgs/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/imgs/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
        <Footer />
        <DesignBy />
      </body>
    </html>
  );
}