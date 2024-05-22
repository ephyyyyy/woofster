import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';

import styles from './header.module.css';

import clsx from "clsx";
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={clsx("flex flex-row justify-between w-full h-24 py-4 z-20", styles.root)}>
      <div className='flex justify-start items-center w-full h-full'>
        <Image
          src="/favicon.ico"
          alt="Next.js Logo"
          width={30}
          height={12}
          priority
        />
      </div>
      <div className='flex justify-between items-center gap-8 h-full'>
        <nav className='flex justify-center items-center cursor-pointer'>
          <Link href='/'>Home</Link>
        </nav>
        <nav className='flex justify-center items-center cursor-pointer text-nowrap'>
          <Link href='/parks'>Dog Parks</Link>
        </nav>
        <nav className='flex justify-center items-center cursor-pointer'>
          <Link href='/newsletter'>Newsletter</Link>
        </nav>
      </div>
      <nav className='flex justify-end items-center w-full h-full'>
        <Button className={styles.button} iconPosition='end' style={{ backgroundColor: '#ff4500'}} type="primary" shape="round" icon={<ArrowRightOutlined />} size='large'>
          Contact Us
        </Button>
      </nav>
    </header>
  );
}

