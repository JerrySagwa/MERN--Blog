import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password, email } = formData;
    if (!username || !password || !email) {
      setErrorMessage('Please fill out all the fields!');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setErrorMessage('Duplicate username or email!');
      } else {
        navigate('/sign-in')
      }
    } catch (e) {
      setErrorMessage('Unknown Error~');
    } finally {
      setLoading(false);
    }
  };

  // console.log(formData);

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
          <form className='flex flex-col gap-y-4' onSubmit={submitHandler}>
            <div>
              <Label>Your username</Label>
              <TextInput
                type='text'
                placeholder='username'
                id='username'
                onChange={changeHandler}
              />
            </div>
            <div>
              <Label>Your email</Label>
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={changeHandler}
              />
            </div>
            <div>
              <Label>Your password</Label>
              <TextInput
                type='password'
                placeholder='password'
                id='password'
                onChange={changeHandler}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <span>Loading ...</span> <Spinner size={'sm'} />
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
            <div>
              Already have an account?{' '}
              <Link to='/sign-in'>
                <span className='text-blue-400'>Sign In</span>
              </Link>
            </div>
            {errorMessage && <Alert color='failure'>{errorMessage}</Alert>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
