import { Inter, Source_Sans_3 } from "next/font/google";
import { LandingPreview, MapPreview, ServiceExplanation } from "@/widgets";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { clsx } from "clsx";
import Image from "next/image";

const font = Source_Sans_3({ subsets: ["latin"], variable: '--font-sans', });

export default function Home() {
  return (
    <main className={clsx("flex flex-col items-center justify-between py-10 px-48", font.variable)}>
      <LandingPreview />
      <MapTitle />
      <MapPreviewSide />
      {/* <MapPreview /> */}
      <ServiceExplanation />
    </main>
  );
}

const MapPreviewSide = () => {
  return (
    <div className="flex justify-between items-center w-full mt-12 mb-6 gap-28">
      <div className="flex flex-col justify-center items-start w-2/5">
        <Image className="aspect-square object-cover" src="/images/app.svg" alt="Dog" width={200} height={200} />
        <div className="flex justify-center items-center text-slate-900 mt-4">
          <svg aria-hidden="true" style={{ color: '#ff4500'}} focusable="false" width={20} height={20} data-prefix="fas" data-icon="location-dot" className="svg-inline--fa fa-location-dot " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
          <p className="ml-2" style={{ color: '#ff4500'}}>Dog Parks Near You.</p>
        </div>
        {/* <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-900">Explore the World with Your Pet</h2> */}
        <p className="ml-1 pt-2 text-theme-gray_text tracking-tight">Discover the best places and services for dogs, share experiences, and take care of your pet with our support.</p>

        {/* <Button style={{ backgroundColor: '#ff4500' }} className='mt-6 ml-1 font-sans' type="primary" shape="round" iconPosition='end' icon={<ArrowRightOutlined />} size='large'>
          Find Your Next Adventure
        </Button> */}
      </div>
      <MapPreview />
    </div>
  );
}

const MapTitle = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full max-h-full mx-auto max-w-7xl mt-48">
      <h2 className="mt-10 text-3xl font-bold tracking-tight text-slate-900">Explore the World with Your Pet</h2>
      <p className=" text-theme-gray_text tracking-tight">Use our map to discover best places and services for dogs, and enhance your pet&apos;s life with us.</p>
    </div>
  );
}
