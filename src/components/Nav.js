import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import "./Nav.css";

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <a href='#' className='flex items-center'>
          About Us
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <a href='#' className='flex items-center'>
          Benefits
        </a>
      </Typography>
      <Typography
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'>
        <a href='#' className='flex items-center'>
          Features
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className='navbar sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4'>
        <div className='flex items-center justify-between text-blue-gray-900'>
          <div className='flex items-center gap-4'>
            <Typography
              as='a'
              href='#'
              className='mr-4 cursor-pointer py-1.5 font-medium'>
              For Customers
            </Typography>
            <Typography
              as='a'
              href='#'
              className='mr-4 cursor-pointer py-1.5 font-medium'>
              For Developers
            </Typography>
          </div>
          <div className='flex items-center gap-4'>
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
              onClick={() => setOpenNav(!openNav)}>
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
      <div className='mx-auto max-w-screen-md py-12 mt-12'>
        <Typography variant='h1' color='blue-gray' className='mb-2'>
          Empowering people
        </Typography>
        <Typography variant='h2' color='blue-gray' className='mb-2'>
          in the modern digital world
        </Typography>
        <Typography color='gray' className='font-normal'>
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
      </div>
    </>
  );
}
