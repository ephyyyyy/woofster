import clsx from "clsx";
import { LandingPreview, MapPreview, ServiceExplanation } from "@/widgets";

import Article from './vaccination.mdx';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-brand-salad p-10 pt-[156px]">
      <Article />
    </main>
  );
}
