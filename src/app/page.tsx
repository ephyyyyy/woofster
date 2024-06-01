import { Inter } from "next/font/google";
import { LandingPreview, MapPreview, ServiceExplanation } from "@/widgets";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 bg-brand-salad">
      <LandingPreview />
      <MapPreview>
        <MapPreviewSide />
      </MapPreview>
      <ServiceExplanation />
    </main>
  );
}

const MapPreviewSide = () => {
  return (
    <div className="flex flex-col justify-center items-start w-2/3">
      <h2 className="z-10 text-3xl font-bold tracking-tight text-slate-900 ml-1">Explore the World with Your Pet</h2>
      <p className="mt-4 ml-1">Use our map to discover best places and services for dogs, and enhance your pet&apos;s life with us.</p>
      {/* <div className="flex justify-center items-center text-slate-900 mt-4">
        <svg aria-hidden="true" style={{ color: '#ff4500'}} focusable="false" width={20} height={20} data-prefix="fas" data-icon="location-dot" className="svg-inline--fa fa-location-dot " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
        <p className="ml-4" style={{ color: '#ff4500'}}>Dog Parks Near You.</p>
      </div> */}
      <Button style={{ backgroundColor: '#ff4500' }} className='mt-10 ml-1' type="primary" shape="round" iconPosition='end' icon={<ArrowRightOutlined />} size='large'>
        Find Your Next Adventure
      </Button>
    </div>
  );
}
