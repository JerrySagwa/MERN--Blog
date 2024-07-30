import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
<div className='min-h-screen mt-20'>
      <div className='flex flex-col p-3 max-w-3xl mx-auto md:flex-row gap-4 md:items-center'>
        {/* left */}
        <div className='flex-1'>
          <Link
            to={'/'}
            className='self-center whitespace-nowrap text-4xl font-bold dark:text-white'
          >
            <span className='px-2 py-1 bg-gradient-to-br from-indigo-500  via-purple-400 to-red-200 rounded-lg text-white'>
              Sagwa's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-4'>
            Welcome to Sagwa's Blog! You can sign up with you email and
            password.
          </p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-y-4'>
            <div>
              <Label>Your username</Label>
              <TextInput type='text' placeholder='username' id='username'/>
            </div>
            <div>
              <Label>Your email</Label>
              <TextInput type='text' placeholder='name@company.com' id='email'/>
            </div>
            <div>
              <Label>Your password</Label>
              <TextInput type='text' placeholder='password' id='password'/>
            </div>
            <Button gradientDuoTone="purpleToPink" type='submit'>
              Sign Up
            </Button>
            <div>
              Already have an account? <Link to='/sign-in'><span className='text-blue-400'>Sign In</span></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
