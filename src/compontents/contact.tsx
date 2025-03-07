'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form className='w-full max-w-[60%] mx-auto flex justify-center space-y-6 flex-col' onSubmit={handleSubmit(onSubmit)}>
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
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-black outline-none'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='md:hover:text-asgard-blue md:hover:bg-white rounded-md bg-asgard-blue py-3 px-8 text-base font-semibold text-white outline-none transition duration-300'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;