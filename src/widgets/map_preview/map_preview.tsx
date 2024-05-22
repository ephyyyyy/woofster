import clsx from "clsx";
import { GoogleMap } from "./google_map";

export const MapPreview = () => {
  return (
    <div className={clsx("flex flex-col items-center justify-between w-full max-h-full p-10 mx-auto max-w-7xl px-6 pb-32 pt-20 sm:pt-32 lg:px-8 lg:pt-10")}>
      <div className="w-full flex justify-between gap-10">
        <div className="flex flex-col justify-center items-start">
          <h2 className="z-10 text-2xl font-bold tracking-tight text-slate-900 ml-1">Find Your Next Adventure</h2>
          <p className="pt-4 ml-1">Use our map to discover dog-friendly locations around you.</p>
          <div className="flex justify-center items-center text-slate-900 mt-4">
          <svg aria-hidden="true" style={{ color: '#ff4500'}} focusable="false" width={20} height={20} data-prefix="fas" data-icon="location-dot" className="svg-inline--fa fa-location-dot " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
            <p className="ml-4" style={{ color: '#ff4500'}}>Dog Parks Near You.</p>
          </div>
        </div>
        <div className="w-full h-full p-10">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}
