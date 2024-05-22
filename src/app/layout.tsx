import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import { Header } from "@/widgets";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AntdRegistry>
          <Header />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
