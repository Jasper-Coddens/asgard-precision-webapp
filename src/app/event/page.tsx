'use client';

import { useForm } from 'react-hook-form';
import { sendEvent } from '@/utils/send-event';

export type FormData = {
  name: string;
  email: string;
};

export default function Event() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEvent(data);
  }
    return (
    <>
      <h1 className="my-4 font-semibold text-4xl text-center">Upcoming Events</h1>
      <ul className='w-full max-w-[60%] mx-auto flex justify-center space-y-6 flex-col'>
        <li className='bg-white text-black rounded-md p-4 flex justify-between items-start'>
          <div className='flex-1'>
            <h3 className='text-3xl'>Event for shooting in Opwijk</h3>
            <p className='m-3'>DESCRIPTION: crazy text idk what to talk about this will be the description of the event. I just want to add more text to see what happens to the page css</p>
            <p className='m-3'>DATE: 28/02/2025</p>
            <p className='m-3'>LOCATION: Opwijk schooting range</p>
          </div>
          <div className='w-96 mx-6'>
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-5'>
              <label
                htmlFor='name'
                className='mb-3 block text-base font-medium'
              >
                Full Name
              </label>
              <input
                type='text'
                placeholder='Jane Doe'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none'
                {...register('name', { required: true })}
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='email'
                className='mb-3 block text-base font-medium'
              >
                Email Address
              </label>
              <input
                type='email'
                placeholder='jane@doe.com'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none'
                {...register('email', { required: true })}
              />
            </div>
            <div>
              <button className='md:hover:text-asgard-blue md:hover:bg-white rounded-md bg-asgard-blue py-3 px-8 text-base font-semibold text-white outline-none transition duration-300'>
                Submit
              </button>
            </div>
            </form>
          </div>
        </li>
        <li className='bg-white text-black rounded-md p-4 flex justify-between items-start'>
          <div className='flex-1'>
            <h3 className='text-3xl'>Event for shooting in classified</h3>
            <p className='m-3'>DESCRIPTION: shooting test in an undisclosed location</p>
            <p className='m-3'>DATE: 28/02/2025</p>
            <p className='m-3'>LOCATION: outside of belgium</p>
          </div>
          <div className='w-96 mx-6'>
            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-5'>
              <label
                htmlFor='name'
                className='mb-3 block text-base font-medium'
              >
                Full Name
              </label>
              <input
                type='text'
                placeholder='Jane Doe'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none'
                {...register('name', { required: true })}
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='email'
                className='mb-3 block text-base font-medium'
              >
                Email Address
              </label>
              <input
                type='email'
                placeholder='jane@doe.com'
                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none'
                {...register('email', { required: true })}
              />
            </div>
            <div>
              <button className='md:hover:text-asgard-blue md:hover:bg-white rounded-md bg-asgard-blue py-3 px-8 text-base font-semibold text-white outline-none transition duration-300'>
                Submit
              </button>
            </div>
            </form>
          </div>
        </li>
        <li className='bg-white text-black rounded-md p-4 flex justify-between items-start'>
          <div className='flex-1'>
            <h3 className='text-3xl'>Event for shooting in classified</h3>
            <p className='m-3'>DESCRIPTION: This is an event organized by one of our partners.</p>
            <p className='m-3'>DATE: 15/03/2025</p>
            <p className='m-3'>LOCATION: Europe</p>
          </div>
          <div className='w-96 mx-6 my-auto'>
            <a className='md:hover:text-asgard-blue md:hover:bg-white rounded-md bg-asgard-blue py-3 px-8 text-base font-semibold text-white outline-none transition duration-300' href='http://www.crimi-events.com/Nuketown-XL'>Link to partner</a>
          </div>
        </li>
      </ul>
    </>
    );
}
  