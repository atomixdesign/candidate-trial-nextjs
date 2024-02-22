import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import CommonHeader from '@/components/header/Header';
import CommonFooter from '@/components/footer/Footer';
import { getFooterData, getHeaderData } from '@/actions/rawActions';
import { Footer, Header } from '@/definitions/definitions';
import CommonHelper from '@/helpers/common';

import './assets/scss/main.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: CommonHelper.MetaData.Title,
  description: CommonHelper.MetaData.Description,
};

/**
 * Represents the root layout component for the application.
 * This component wraps the entire application content, including the header, footer, and main content.
 *
 * @param children The child components to be rendered within the layout.
 * @returns The HTML structure for the root layout.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerData: Header = getHeaderData();
  const footerData: Footer = getFooterData();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div>
          <CommonHeader headerData={headerData} />
          {children}
          <CommonFooter footerData={footerData} />
        </div>
      </body>
    </html>
  );
}
