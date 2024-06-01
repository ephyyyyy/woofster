import clsx from "clsx";
import { LandingPreview, MapPreview, ServiceExplanation } from "@/widgets";
import { SideBar } from "@/widgets/side_bar";

export default function Home() {
  return (
    <main className="flex items-center justify-between bg-brand-salad pt-10">
      <SideBar />
      <MapPreview />
    </main>
  );
}

