import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="flex h-screen w-full flex-col items-center justify-between">
          <AntdRegistry>
              {children}
          </AntdRegistry>
        </main>
      </body>
    </html>
  );
}
