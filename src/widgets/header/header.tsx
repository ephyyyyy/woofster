import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import clsx from "clsx";

import Icon from 'public/logoorange.svg'

import styles from './header.module.css';


export const Header = () => {
  return (
    <header className={clsx("flex flex-row justify-between w-full h-20 py-4 z-50 px-48 sticky left-0 top-0 bg-white border-b-2 border-x-theme-gray_text", styles.root)}>
      <div className='flex justify-start items-center content-normal h-full'>
        <Image
          src={Icon}
          alt="Woofster Logo"
          width={120}
          height={120}
          priority
        />
      </div>
      <div className='flex justify-between items-center ml-14 gap-8 h-full'>
        <nav className='flex justify-center items-center cursor-pointer'>
          <Link className='font-sans' href='/'>Home</Link>
        </nav>
        <nav className='flex justify-center items-center cursor-pointer text-nowrap'>
          <Link className='font-sans' href='/parks'>Pet&apos;s Map</Link>
        </nav>
        <nav className='flex justify-center items-center cursor-pointer'>
          <Link className='font-sans' href='/materials'>Materials</Link>
        </nav>
      </div>
      <nav className='flex justify-end items-center w-full h-full'>
        <Button className={clsx(styles.button, 'ml-2 font-sans')} iconPosition='end' type="text" shape="round" size='large'>
          <span>Log In</span>
        </Button>
        <Button className={clsx(styles.button, 'font-sans')} iconPosition='end' style={{ backgroundColor: '#ff4500'}} type="primary" shape="round" size='large'>
          Sign Up
        </Button>
      </nav>
    </header>
  );
}

