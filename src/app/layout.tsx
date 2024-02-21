import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import './flickity.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
