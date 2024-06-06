import Image from "next/image";
import { Button } from "antd";
import clsx from "clsx";

import { LandingPreviewBackdround } from "./background";

import styles from './landing_preview.module.css';

export const LandingPreview = () => {
  return (
    <div className={clsx("flex flex-col items-center justify-between w-full max-h-full mt-[146px] mx-auto max-w-7xl")}>
      <div className="w-full flex justify-between gap-10 z-10">
        <div className="flex flex-col justify-center items-start w-1/2">
          <h1 className="z-10 text-4xl font-bold tracking-tight text-slate-900">
            <strong style={{ color: '#ff4500' }}>Woofster. </strong>
            A Platform for a Happy Life with Your Pet
          </h1>
          <p className="pt-4 font-semibold text-theme-gray_text tracking-tight">Our app helps you find the best places for walks and services for your pet, uniting dog owners into a friendly community. Track your walks in real-time, discover pet-friendly cafes and stores, and share unforgettable moments with fellow dog lovers. A simple and convenient platform to enhance and simplify life with your pet.</p>
          <div className="flex mt-10 justify-start items-start">
            <Button className={styles.button} style={{ backgroundColor: '#ff4500'}} type="primary" shape='default' size='large'>
              Join Now and Enhance Your Pet&apos;s Life
            </Button>
          </div>
        </div>
        <div className="p-4 flex gap-10">
          <Image className="aspect-square object-cover border-solid border-black border-2 rounded-2xl" src="/images/landing.svg" alt="Dog" width={340} height={340} />
        </div>
      </div>
    </div>
  );
}
