import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';

import styles from './header.module.css';

import clsx from "clsx";
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={clsx("flex flex-row justify-between w-full h-24 py-4 absolute z-10", styles.root)}>
      <div className='flex justify-start items-center w-full h-full'>
        <Image
          style={{ color: '#ff4500'}}
          src="/favicon.ico"
          alt="Woofster Logo"
          width={200}
          height={24}
          priority
        />
      </div>
      <div className='flex justify-between items-center gap-8 h-full'>
        <nav className='flex justify-center items-center cursor-pointer'>
          <Link href='/' className='text-white'>Home</Link>
        </nav>
        <nav className='flex justify-center items-center cursor-pointer text-nowrap'>
          <Link href='/parks' className='text-white'>Pet&apos;s Map</Link>
        </nav>
        <nav className='flex justify-center items-center cursor-pointer'>
          <Link href='/newsletter' className='text-white'>Materials</Link>
        </nav>
      </div>
      <nav className='flex justify-end items-center w-full h-full'>
        <Button className={styles.button} iconPosition='end' style={{ backgroundColor: '#ff4500'}} type="primary" shape="round" icon={<ArrowRightOutlined />} size='large'>
          Log In
        </Button>
        <Button className={clsx(styles.button, 'ml-2')} iconPosition='end' type="text" shape="round" size='large'>
          <span className='text-white'>Sign Up</span>
        </Button>
      </nav>
    </header>
  );
}

