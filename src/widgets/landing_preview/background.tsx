export const LandingPreviewBackdround = () => {
  return (
    <div className="flex justify-center items-center w-full h-50 overflow-hidden isolate z-0">
        <svg className="absolute opacity-100 inset-x-0 top-0 h-[80rem] w-full stroke-black/10 [mask-image:radial-gradient(60rem_60rem_at_center,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="background-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-[#cadbb2]">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth="0"></path>
          </svg>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#background-pattern)"></rect>
        </svg>
    </div>
  );
}


/**
 * #cadbb2 — светлый зеленовато-желтый
 * #e3eccb — очень светлый зеленый
 * #c2d3af — бледно-зеленый
 * #dde8d0 — светло-зеленый
 * #f0f4e3 — очень светлый желто-зеленый
 * #b0c49f — серо-зеленый
 * #a5b893 — умеренный зеленый
 * #f8f9f4 — светлейший желто-зеленый
 * #bccab3 — слабо-зеленый
 * #9ea785 — тусклый зеленый
 */
