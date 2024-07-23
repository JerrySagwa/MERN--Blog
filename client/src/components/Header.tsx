import { FaMoon } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Projects', '/projects'],
];

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link
        to={'/'}
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-br from-indigo-500  via-purple-400 to-red-200 rounded-lg text-white'>
          Sagwa's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={BiSearchAlt2}
          className='hidden lg:inline-block'
        />
      </form>
      <Button className='w-12 h-10 inline-block lg:hidden' color='gray' pill>
        <BiSearchAlt2 />
      </Button>
      <div className='flex gap-x-2 md:order-2'>
        <Button
          className='w-12 h-10 hidden sm:inline-block'
          color={'gray'}
          pill
        >
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue' className='rounded-lg' outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {Links.map(([k, link]) => (
          <Navbar.Link active={path === link} as='div' key={k}>
            <Link to={link}>{k}</Link>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
