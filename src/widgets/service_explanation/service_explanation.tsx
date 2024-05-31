import Image from "next/image";
import clsx from "clsx";

export const ServiceExplanation = () => {
  return (
    <div className={clsx("flex flex-col items-center justify-between w-full max-h-full p-10 mx-auto max-w-7xl px-6 pb-32 pt-20 sm:pt-32 lg:px-8 lg:pt-8")}>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Discover Dog-Friendly Places</h1>
        <p className="pt-2">Explore parks, cafes, and shops that welcome your furry friends.</p>
      </div>
      <div>
        <div className="flex gap-12 justify-between w-full pt-14">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex flex-col justify-center items-center text-2xl font-semibold tracking-tight text-slate-900">
              <svg aria-hidden="true" focusable="false" data-icon="paw" className="w-10 h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"></path></svg>
              <span className="mt-4">Top-Rated Parks</span>
            </div>
            <p className="pt-2">Find the best parks for your dog to play and socialize.</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex flex-col justify-center items-center text-2xl font-semibold tracking-tight text-slate-900">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mug-saucer" className="w-10 h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg>
              <span className="mt-4">Dog-Friendly Cafes</span>
            </div>
            <p className="pt-2">Enjoy a coffee while your dog gets a treat.</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex flex-col justify-center items-center text-2xl font-semibold tracking-tight text-slate-900">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bone" className="w-10 h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M153.7 144.8c6.9 16.3 20.6 31.2 38.3 31.2H384c17.7 0 31.4-14.9 38.3-31.2C434.4 116.1 462.9 96 496 96c44.2 0 80 35.8 80 80c0 30.4-17 56.9-42 70.4c-3.6 1.9-6 5.5-6 9.6s2.4 7.7 6 9.6c25 13.5 42 40 42 70.4c0 44.2-35.8 80-80 80c-33.1 0-61.6-20.1-73.7-48.8C415.4 350.9 401.7 336 384 336H192c-17.7 0-31.4 14.9-38.3 31.2C141.6 395.9 113.1 416 80 416c-44.2 0-80-35.8-80-80c0-30.4 17-56.9 42-70.4c3.6-1.9 6-5.5 6-9.6s-2.4-7.7-6-9.6C17 232.9 0 206.4 0 176c0-44.2 35.8-80 80-80c33.1 0 61.6 20.1 73.7 48.8z"></path></svg>
              <span className="mt-4">Pet Shops</span>
            </div>
            <p className="pt-2">Get everything your dog needs from trusted pet shops.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
