import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Translator",
  description: "From Korean to English",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <body className={inter.className}>
        <div className="main_layout">
          <div tabIndex="-1" className="main_container">
            <Header />
            <section className="">
              <div className="min-h-full w-full p-9 bg-zinc-100">
                {children}
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
