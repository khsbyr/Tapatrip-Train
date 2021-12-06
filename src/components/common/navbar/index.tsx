import { MenuIcon, XIcon, PhoneIcon } from '@heroicons/react/solid';
import { LogoutIcon, CheckIcon } from '@heroicons/react/outline';
import React, { FC, useState } from 'react';
import { Transition } from '@headlessui/react';
import OrderCheck from '@components/bus/orderCheck';
import styles from './navbar.module.scss';
import SelectLanguage from '@components/common/language';
import Link from 'next/link';
import Profile from './profile';
import { useTranslation } from 'next-i18next';
import { useGlobalStore } from '@context/globalStore';
import { delay } from 'lodash';

interface Props {
  navbarData?: any;
}
const Navbar: FC<Props> = ({ navbarData }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [openTab, setOpenTab] = React.useState(4);
  const { user } = useGlobalStore();
  const isAuth = user ? true : false;

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeBackground);
  }

  return (
    <div>
      <nav
        className={`absolute top-5 md:mt-0 md:fixed w-screen 
          ${navbar ? 'bg-white' : 'bg-none'}
          md:h-20 md:top-0 z-10 ${navbar ? 'shadow-lg' : 'shadow-none'}`}
      >
        <div className={styles.navbar}>
          <div className={styles.navbarBody}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/bus">
                  <a>
                    <img
                      src={`${
                        navbar
                          ? '/assets/svgIcons/NewLogo.svg'
                          : '/assets/svgIcons/NewLogoWhite.svg'
                      } `}
                      alt="Logo"
                      className={styles.logo}
                    />
                  </a>
                </Link>
              </div>
              <div className={`${navbar ? 'hidden' : 'lg:block'} hidden`}>
                <div className={styles.menuBody}>
                  {navbarData.generalList.map(menu => (
                    <a
                      key={menu.id}
                      className={styles.menu}
                      href={`${menu.route}`}
                    >
                      {t(`${menu.text}`)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div
                className={`${
                  navbar ? 'hidden' : 'lg:flex items-center space-x-5'
                } hidden`}
              >
                <OrderCheck />
                <SelectLanguage isBlack={false} />
              </div>
              <div className="hidden lg:flex items-center">
                <a href="tel:97675154444">
                  <div
                    className={`${
                      navbar ? 'text-cardDate' : 'text-white'
                    } flex text-base font-bold cursor-pointer mr-5 hover:bg-onlineSupport hover:text-white hover:rounded px-3 py-2`}
                  >
                    <PhoneIcon className="w-4" />
                    <p className="pl-2">7515-4444</p>
                  </div>
                </a>
                <div className={styles.loginBody}>
                  {isAuth ? (
                    <Profile data={user} />
                  ) : (
                    <a href="/auth/login">
                      <button className={styles.loginButton}>
                        {t('login')}
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="-mr-2 flex space-x-5 lg:hidden">
              <div className="flex items-center justify-center">
                <span className="animate-ping absolute inline-flex h-8 w-8 bg-onlineSupport rounded-lg"></span>
                <button className="z-10 flex text-xs font-thin cursor-pointer text-white bg-onlineSupport p-2 rounded-lg">
                  <PhoneIcon className="w-6" />
                </button>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={styles.mobileButton}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <MenuIcon
                    className={`${
                      navbar ? 'h-6 w-6 text-cardDate' : 'h-6 w-6 text-cardDate'
                    } `}
                  />
                ) : (
                  <XIcon
                    className={`${
                      navbar ? 'h-6 w-6 text-cardDate' : 'h-6 w-6 text-cardDate'
                    } `}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="hidden max-w-7xl mx-auto justify-end pr-4 lg:flex">
          <div className="flex justify-center items-center mt-7">
            <span className="animate-ping absolute inline-flex h-7 w-28 bg-green-200 rounded-lg"></span>
            <span className="animate-ping absolute inline-flex h-7 w-28 bg-onlineSupport rounded-lg z-8"></span>
            <button className="z-10 flex text-xs font-thin cursor-pointer text-white bg-onlineSupport p-3 rounded-lg">
              <PhoneIcon className="w-4" />
              <p className="pl-1 w-36">{t('onlineHelp')}</p>
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          className="flex justify-end w-full px-2 absolute top-16"
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div
              className="flex justify-center px-6 py-3 lg:hidden bg-white rounded-xl shadow-lg"
              id="mobile-menu"
            >
              <div ref={ref} className="p-3 space-y-4">
                <div className="flex flex-wrap">
                  <h1 className="text-cardDate font-medium pr-4">
                    {t('chooselanguage')}
                  </h1>
                  <SelectLanguage />
                </div>
                <OrderCheck />
                <a href="tel:97675154444">
                  <div className="flex justify-center items-center text-base sm:text-lg mt-4 font-bold px-4 py-2 cursor-pointer text-cardDate hover:bg-onlineSupport hover:text-white hover:rounded">
                    <PhoneIcon className="w-4 sm:w-5" />
                    <p className="pl-2">(976)-7514-4444</p>
                  </div>
                </a>
                <hr />

                <div className={styles.loginBody}>
                  {isAuth ? (
                    // <Profile data={user} />
                    <div className="text-cardDate">
                      <a className="flex items-center text-base border-4 border-white  hover:border-blue-200 p-2 rounded hover:text-cardDate">
                        <img
                          src="/assets/profile1.png"
                          alt=""
                          width="30"
                          className="rounded-full"
                        />
                        <p className="space-y-1 pl-4 text-sm">
                          {user?.phone} <p>{t('customerSection')}</p>
                        </p>
                      </a>
                      <a
                        className="flex items-center border-2 border-white  hover:border-blue-200 rounded p-2 hover:text-cardDate"
                        href=""
                      >
                        <CheckIcon className="pr-2 h-5" />
                        {t('myOrders')}
                      </a>
                      <a
                        className="flex items-center rounded border-4 border-white  hover:border-blue-200 p-2 text-red-600 hover:text-red-600"
                        href="/"
                      >
                        <LogoutIcon className="pr-2 h-5" />
                        {t('logout')}
                      </a>
                    </div>
                  ) : (
                    <a href="/auth/login">
                      <button className={styles.loginButton}>
                        {t('login')}
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </Transition>

        <nav className={styles.bottomMenu}>
          {navbarData.generalList.map(menu => (
            <div key={menu.id}>
              <a
                className={
                  'text-xs pt-3 rounded-full block leading-normal' +
                  (openTab === menu.id
                    ? 'text-selected'
                    : 'text-mobileNav bg-white cursor-default pointer-events-none ')
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(menu.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="-5 0 60 45"
                  fill={openTab === menu.id ? 'white' : '#BCC4CC'}
                  className={
                    openTab === menu.id
                      ? 'bg-blue-600 rounded-full p-1.5'
                      : '#BCC4CC'
                  }
                >
                  <g>
                    {menu.path.map(value => (
                      <path key={value} d={value} />
                    ))}
                  </g>
                </svg>
                <span className="flex justify-center">{t(`${menu.text}`)}</span>
              </a>
            </div>
          ))}
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
