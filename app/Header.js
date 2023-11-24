'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../public/logo.png';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);



  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
    <div className='flex flex-col justify-between sticky top-0 z-[999999] items-center overflow-x-hidden bg-white'>
      <div className='container items-center flex px-[3vw] justify-between  max-lg:hidden border-b border-b-gray-300'>
        <Link href="/" className='left-header items-center'>
          <Image src={logo} alt='logo' width={150} height={70} className='object-contain bg-none max-w-[150px] max-h-[70px]' />
        </Link>
        <div className='middle-header text-[2vh]  flex font-semibold justify-center items-center text-gray-700'>
          <Link href="/components/"  className='textLink'>Service</Link>
          <Link href="/components/" className='textLink'>Software</Link>
          <Link href="/components/" className='textLink'>Job</Link>
          <Link href="/components/" className='textLink'>Blog</Link>
          <Link href="/components/" className='textLink'>Contact</Link>
        </div>
        <div className='right-header flex items-center'>
          <div className='headerButton mr-4 '>
            <button >Sign In</button>
          </div>
          <div className='headerButton mr-4'>
            <button>Sign Up</button>
          </div>
          <div className='items-center hover:cursor-pointer'>
            <LanguageIcon className='text-gray-500'/>
          </div>
        </div>
      </div>
      <div className='header2 w-full  max-lg:hidden border-b border-b-gray-200 rounded-b-3xl flex items-center justify-evenly'>
        <Link href="/components/GraphicsDesign" className='pageslink' >Graphics & Design</Link>
        <Link href="/components/ProgrammingTech" className='pageslink'> Programming & Tech</Link>
        <Link href="/components/WritingTranslation" className='pageslink'>Writing & Translation</Link>
        <Link href="/components/DigitalMarketing" className='pageslink'>Digital Marketing </Link>
        <Link href="/components/AiSERVICES" className='pageslink'>AI Services</Link>
        <Link href="/components/VideoAnimation" className='pageslink'>Video Animation</Link>
        <Link href="/components/Photography" className='pageslink'>Photography</Link>
        <Link href="/components/Business" className='pageslink'>Business</Link>
        
      </div>

      {/* Mobile Menu */}
      <div className='lg:hidden flex justify-between items-center  w-full'>
        <div className='container flex max-w-6xl p-[1vh] m-auto justify-between '>
          <Link href="/" className='left-header items-center'>
            <Image src={logo} alt='logo' width={150} height={60} className='object-contain bg-none' />
          </Link>
          <div className='rightHead-md'>
            <MenuIcon className='hover:cursor-pointer text-[4vh]' onClick={toggleMenu} />
          </div>
        </div>
        {isMenuOpen && (
          <div className='lg:hidden  w-full fixed h-screen z-50 left-0 right-0 top-14'>
            {/* Your side menu content goes here */}
            
            <div className='fixed bg-white flex flex-col h-screen border rounded-md fright-0 w-[60%]  z-50 '>
              <Link href="/components/"  className='textLinkpop'>Service</Link >
              <Link href="/components/"  className='textLinkpop'>Software</Link >
              <Link href="/components/"  className='textLinkpop'>Job</Link >
              <Link href="/components/"  className='textLinkpop'>Blog</Link >
              <Link href="/components/"  className='textLinkpop'>Browse Categories</Link >
              <Link href="/components/"  className='textLinkpop'>Contact</Link >
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
