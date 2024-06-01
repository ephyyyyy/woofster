import { Roboto } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Analytics } from '@vercel/analytics/react';

import { Header } from "@/widgets";

import { PageHead } from "./head";
import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PageHead />
      <body className={roboto.className}>
        <AntdRegistry>
          <Header />
          {children}
        </AntdRegistry>
        <Analytics />
      </body>
    </html>
  );
}
