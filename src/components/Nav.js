import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import "./Nav.css";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <li className='flex items-center gap-2'>
        <img
          className='h-full w-full lg:h-16 lg:w-16 logo'
          src='https://img.icons8.com/color/480/minecraft-logo--v1.png'
          alt='nature image'
        />
      </li>
      <li>
        <Typography
          as='a'
          href='#'
          variant='small'
          color='whitesmoke'
          className='p-1 font-normal flex items-center'>
          About Us
        </Typography>
      </li>
      <li>
        <Typography
          as='a'
          href='#'
          variant='small'
          color='whitesmoke'
          className='p-1 font-normal flex items-center'>
          Benefits
        </Typography>
      </li>
      <li>
        <Typography
          as='a'
          href='#'
          variant='small'
          color='whitesmoke'
          className='p-1 font-normal flex items-center'>
          Features
        </Typography>
      </li>
    </ul>
  );

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <Navbar className='navbar sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-between gap-4'>
          <div className='mr-4 hidden lg:block'>{navList}</div>
          <Button
            variant='gradient'
            size='sm'
            className='hidden lg:inline-block'>
            <span>Sign In</span>
          </Button>
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={toggleNav}>
            {openNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='h-6 w-6'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant='gradient' size='sm' fullWidth className='mb-2'>
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
