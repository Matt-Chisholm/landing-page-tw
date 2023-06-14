import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Landing() {
  return (
    <div className='flex flex-col h-screen bg-gray-900'>
      <div
        className='flex flex-grow justify-center items-center bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}>
        <div className='max-w-2xl px-4 py-16 text-center'>
          <Typography color='white' type='h1' className='mb-4'>
            Welcome to Our Website
          </Typography>
          <Typography color='white' type='h5' className='mb-8'>
            We provide high-quality services for all your needs.
          </Typography>
          <Button color='white' size='lg' ripple='light'>
            Get Started
          </Button>
        </div>
      </div>

      <div className='bg-gray-800 py-16' id='about'>
        <div className='max-w-2xl px-4 mx-auto'>
          <Typography type='h2' className='text-center mb-8 text-white'>
            About Us
          </Typography>
          <Typography type='body1' className='text-center text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            augue mauris. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Nulla ut venenatis ligula. Proin
            semper eleifend arcu, sit amet hendrerit tellus fermentum non.
          </Typography>
        </div>
      </div>

      <div className='bg-gray-700 py-16' id='services'>
        <div className='max-w-2xl px-4 mx-auto'>
          <Typography type='h2' className='text-center mb-8 text-white'>
            Our Services
          </Typography>
          <div className='flex flex-col md:flex-row md:justify-center gap-8'>
            <div className='bg-gray-800 rounded-lg shadow-md p-8 flex-1'>
              <Typography type='h4' className='text-center mb-4 text-white'>
                Service 1
              </Typography>
              <Typography type='body1' className='text-white'>
                Description of service 1.
              </Typography>
            </div>
            <div className='bg-gray-800 rounded-lg shadow-md p-8 flex-1'>
              <Typography type='h4' className='text-center mb-4 text-white'>
                Service 2
              </Typography>
              <Typography type='body1' className='text-white'>
                Description of service 2.
              </Typography>
            </div>
            <div className='bg-gray-800 rounded-lg shadow-md p-8 flex-1'>
              <Typography type='h4' className='text-center mb-4 text-white'>
                Service 3
              </Typography>
              <Typography type='body1' className='text-white'>
                Description of service 3.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-900 py-16' id='contact'>
        <div className='max-w-2xl px-4 mx-auto'>
          <Typography type='h2' className='text-center mb-8 text-white'>
            Contact Us
          </Typography>
          <form>
            <div className='mb-4'>
              <label htmlFor='name' className='block mb-1 text-white'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full px-4 py-2 border rounded-md'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block mb-1 text-white'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-2 border rounded-md'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block mb-1 text-white'>
                Message
              </label>
              <textarea
                id='message'
                className='w-full px-4 py-2 border rounded-md'
                rows='4'></textarea>
            </div>
            <Button color='blue' ripple='light'>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
