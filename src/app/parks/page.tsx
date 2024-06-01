import clsx from "clsx";
import { LandingPreview, MapPreview, ServiceExplanation } from "@/widgets";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-brand-salad p-10">
      <MapPreview />
    </main>
  );
}
