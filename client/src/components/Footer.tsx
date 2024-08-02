import { AiFillInstagram } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';

const FooterComp = () => {
  return (
    <Footer container className='border border-t-8 border-green-400'>
      <div className='w-full'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
          <div>
            <Link
              to={'/'}
              className='self-center whitespace-nowrap text-lg sm:text-2xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-br from-indigo-500  via-purple-400 to-red-200 rounded-lg text-white'>
                Sagwa's
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 mt-4 gap-4 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link href='/about' target='_blank'>
                  Sagwa's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='FOLLOW US' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' target='_blank'>
                  Github
                </Footer.Link>
                <Footer.Link href='#' target='_blank'>
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='LEGAL' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' target='_blank'>
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href='#' target='_blank'>
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Sagwa's Blog"
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 mt-2 sm:mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsLinkedin} />
            <Footer.Icon href='#' icon={FaTelegram} />
            <Footer.Icon href='#' icon={AiFillInstagram} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
