import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full h-24 py-4">
      <div className='flex justify-center align-middle w-full h-full'>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={30}
          height={12}
          priority
        />
      </div>
      <div className='flex justify-between align-middle w-full h-full'>
        <nav className='text-center'>Home</nav>
        <nav className='text-center ml'>Dog Parks</nav>
        <nav className='text-center'>Newsletter</nav>
      </div>
      <nav className='flex justify-center w-full h-full'>
        <Button type="primary" shape="round" icon={<ArrowRightOutlined />} size='large'>
          Contact Us
        </Button>
      </nav>
    </header>
  );
}

