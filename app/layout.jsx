import { Poppins } from 'next/font/google';import Header from "@/components/Header";
import "./globals.css";

const poppins =Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Maximum weight is 900
  variables: '--font-poppins',
  
});

export const metadata = {
  title: "Zheer Barzan",
  description: "A portfolio website for Zheer Barzan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
