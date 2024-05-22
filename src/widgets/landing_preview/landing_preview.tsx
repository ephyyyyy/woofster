import clsx from "clsx";
import { LandingPreviewBackdround } from "./background";

import styles from './landing_preview.module.css';
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";

export const LandingPreview = () => {
  return (
    <div className={clsx("flex flex-col items-center justify-between w-full max-h-full p-10 mx-auto max-w-7xl px-6 pb-32 pt-20 sm:pt-32 lg:px-8 lg:pt-10")}>
      <LandingPreviewBackdround />
      <div className="w-full flex justify-between gap-10">
        <div className="flex flex-col justify-center items-start">
          <h1 className="z-10 text-4xl font-bold tracking-tight text-slate-900">Welcome to Woofster</h1>
          <p className="pt-4">Connecting dog lovers to the best dog-friendly spots in town.</p>
          <div className="flex mt-10 justify-start items-start">
            <Button className={styles.button} style={{ backgroundColor: '#ff4500'}} type="primary" shape='default' size='large'>
              Find Dog Parks
            </Button>
            <Button className={clsx(styles.button, 'ml-6 gap-1 font-semibold leading-6 text-slate-900 text-base')} type="text" shape="round" iconPosition='end' icon={<ArrowRightOutlined />} size='large'>
              Subscribe Us
            </Button>
          </div>
        </div>
        <div className="p-4 flex gap-10">
          <div className="flex flex-col gap-10 justify-end items-end py-20">
            <div className=" bg-slate-100 rounded-full aspect-square object-cover shadow-lg">
              <Image className="aspect-square w-full rounded-xl bg-slate-100 object-cover" src="/images/dog-photo-2.jpeg" alt="Dog" width={140} height={140} />
            </div>
            <div className=" bg-slate-100 rounded-full">
              <Image className="aspect-square w-full rounded-xl bg-slate-100 object-cover" src="/images/dog-photo-1.jpeg" alt="Dog" width={140} height={140} />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className=" bg-slate-100 rounded-full">
              <Image className="aspect-square w-full rounded-xl bg-slate-100 object-cover"src="/images/dog-photo-3.jpeg" alt="Dog" width={140} height={140} />
            </div>
            <div className=" bg-slate-100 rounded-full">
              <Image className="aspect-square w-full rounded-xl bg-slate-100 object-cover"src="/images/dog-photo-4.jpeg" alt="Dog" width={140} height={140} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
