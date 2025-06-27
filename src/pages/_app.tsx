import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../pages/Home.css';
import '../pages/About.css';
import '../pages/Projects.css';
import '../pages/Contacts.css';
import '../components/Navbar.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/ec69074f3c.js"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
