import Image from "next/image";
import { Inter } from "next/font/google";
import { LandingPreview } from "@/widgets/landing_preview";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <LandingPreview />
    </main>
  );
}
