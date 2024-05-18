import clsx from "clsx";
import { LandingPreviewBackdround } from "./background";

import styles from './landing_preview.module.css';

export const LandingPreview = () => {
  return (
    <div className={clsx("flex flex-col items-center justify-between w-full max-h-full")}>
      <LandingPreviewBackdround />
      <h1>Welcome to Woofster</h1>
    </div>
  );
}
