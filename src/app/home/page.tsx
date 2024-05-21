import { Inter } from "next/font/google";
import { LandingPreview, ServiceExplanation } from "@/widgets";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <LandingPreview />
      <ServiceExplanation />
    </main>
  );
}
