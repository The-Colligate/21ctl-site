import { CaretDown } from '@icons/index';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { NavClose } from '@icons/close';
import Link from 'next/link';
import { Popover } from 'evergreen-ui';
import { academyNavLinks, trainingCourses, DigitalInfa, DigitalPlatform } from '../constants/NavbarLinks';

export function AcademyNavbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [displayPopup, setDisplayPopup] = useState([false, -1]);

  const aboutUsLink = academyNavLinks()[0].navLinks[0];

  useEffect(() => {
    // const addclass = theme === "light" ? "show-white" : "show-black";

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        return document.querySelector('.navbar').classList.add('show');
      }
      return document.querySelector('.navbar').classList.remove('show');
    });
  });

  return (
    <>
      <div className="navbar flex justify-between items-center space-x-5 py-1 px-20 font-lato z-50 tablet:x-0 tablet:px-10 smallTablet:px-5 fixed w-full bg-white dark:bg-black dark:bg-[linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.06) 136.14%)] dark:opacity-90 z-40 ">
        <Link href="/">
          <img src="/light-logo.svg" className="dark:hidden w-16 tablet:w-14" />
        </Link>
        <Link href="/">
          <img
            src="/light-logo_dark.svg"
            className="dark:block hidden w-16 tablet:w-14"
          />
        </Link>

        <ul className="flex space-x-8 largeTablet:hidden">
          {
            <Popover
              statelessProps={{
                className: '!p-0 !min-w-[170px] !rounded-lg !bg-transparent',
              }}
              // position={Position.BOTTOM_LEFT}

              triggerType="menu"
              isShown={displayPopup[0] && displayPopup[1] === -2}
              content={
                <div
                  className="min-w-max flex"
                  onMouseOver={(e) => setDisplayPopup([true, -2])}
                  onMouseOut={(e) => setDisplayPopup([true, -2])}
                >
                  <div className="min-w-max pl-5 py-5 whitespace-nowrap rounded bg-white  dark:bg-black dark:bg-opacity-90">
                    <h2 className="text-darkShade">
                      {aboutUsLink.name.toUpperCase()}
                    </h2>
                    <hr />
                    <div
                      className={`grid grid-cols-2  items-start flex-nowrap mr-5 w-full`}
                    >
                      {aboutUsLink.subLinks.map((sublinks) => (
                        <div
                          key={sublinks.name}
                          className="mt-5 dark:text-white hover:text-primary-orange"
                        >
                          <div className="flex hover:text-primary-orange">
                            <img
                              height={20}
                              width={20}
                              src={`${sublinks.icon}`}
                            />

                            <Link
                              href={`${sublinks.link}`}
                              className="ml-4 space-y-2 list-disc font-semibold dark:text-white"
                            >
                              {' '}
                              {sublinks.name}
                            </Link>
                          </div>
                          <Link
                            href={`${sublinks.link}`}
                            className="ml-9 space-y-2 list-disc text-[10px] dark:text-white"
                          >
                            {sublinks.text}{' '}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            >
              <div
                className="relative hover:text-primary-orange"
                // onMouseOver={(e) => setDisplayPopup([true, index])}
                // onMouseOut={(e) => setDisplayPopup([true, index])}
                onClick={() => setDisplayPopup([false, -1])}
                // {() => {; console.log(displayPopup);}}
              >
                <a
                  href="#"
                  className="flex items-center"
                  onClick={() => {
                    setDisplayPopup([
                      displayPopup[1] === -2 ? !displayPopup[0] : true,
                      -2,
                    ]);
                  }}
                >
                  {aboutUsLink.name}{' '}
                  {displayPopup[0] && displayPopup[1] === -2 ? (
                    <CaretDown className="ml-1 -rotate-180" />
                  ) : (
                    <CaretDown className="ml-1" />
                  )}
                </a>
              </div>
            </Popover>
          }
          {
            <Popover
              statelessProps={{
                className: '!p-0 !min-w-[170px] !rounded-lg !bg-transparent',
              }}
              // position={Position.BOTTOM_LEFT}

              triggerType="menu"
              isShown={displayPopup[0] && displayPopup[1] === -3}
              content={
                <div
                  className="min-w-max flex"
                  onMouseOver={(e) => setDisplayPopup([true, -3])}
                  onMouseOut={(e) => setDisplayPopup([true, -3])}
                >
                  <div className="min-w-max pl-5 py-5 whitespace-nowrap rounded bg-white  dark:bg-black dark:bg-opacity-90">
                    <h2 className="text-darkShade  opacity-70">
                      OUR TRAININGS
                    </h2>
                    <hr />
                    <div
                      className={`grid grid-cols-4  items-start flex-nowrap mr-5 w-full`}
                    >
                      {trainingCourses().map((name) => (
                        <div key={name.name} className="mt-5 dark:text-white">
                          <div key={name.name}>
                            <h2 className="ml-4 font-semibold"> {name.name}</h2>
                            {name.courses.map((course) => (
                              <div
                                key={course.name}
                                className="flex  opacity-70 hover:text-primary-orange"
                              >
                                <Link
                                  href={`${course.link}`}
                                  className="ml-4 space-y-2 list-disc  dark:text-white"
                                >
                                  {' '}
                                  {course.name}
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              }
            >
              <div
                className="relative hover:text-primary-orange"
                // onMouseOver={(e) => setDisplayPopup([true, index])}
                // onMouseOut={(e) => setDisplayPopup([true, index])}
                onClick={() => setDisplayPopup([false, -1])}
                // {() => {; console.log(displayPopup);}}
              >
                <a
                  href="#"
                  className="flex items-center"
                  onClick={() => {
                    setDisplayPopup([
                      displayPopup[1] === -3 ? !displayPopup[0] : true,
                      -3,
                    ]);
                  }}
                >
                  Training{' '}
                  {displayPopup[0] && displayPopup[1] === -3 ? (
                    <CaretDown className="ml-1 -rotate-180" />
                  ) : (
                    <CaretDown className="ml-1" />
                  )}
                </a>
              </div>
            </Popover>
          }

          {academyNavLinks()[0]
            .navLinks.splice(1)
            .map((link, index) => (
              <Popover
                key={link.name}
                statelessProps={{
                  className: '!p-0 !min-w-[170px] !rounded-lg !bg-transparent',
                }}
                // position={Position.BOTTOM_LEFT}

                triggerType="menu"
                isShown={displayPopup[0] && displayPopup[1] === index}
                content={
                  <div
                    className="min-w-max flex"
                    onMouseOver={(e) => setDisplayPopup([true, index])}
                    onMouseOut={(e) => setDisplayPopup([true, index])}
                  >
                    <div className="min-w-max pl-5 py-5 whitespace-nowrap rounded bg-white  dark:bg-black dark:bg-opacity-90">
                      <h2 className="text-darkShade">
                        {link.name.toUpperCase()}
                      </h2>
                      <hr />
                      <div
                        className={`grid grid-cols-2  items-start flex-nowrap mr-5 w-full`}
                      >
                        {link.subLinks.map((sublinks) => (
                          <div
                            key={sublinks.name}
                            className="mt-5 dark:text-white hover:text-primary-orange"
                          >
                            <div className="flex hover:text-primary-orange">
                              <img
                                height={20}
                                width={20}
                                src={`${sublinks.icon}`}
                              />

                              <Link
                                href={`${sublinks.link}`}
                                className="ml-4 space-y-2 list-disc font-semibold dark:text-white"
                              >
                                {' '}
                                {sublinks.name}
                              </Link>
                            </div>
                            <Link
                              href={`${sublinks.link}`}
                              className="ml-9 space-y-2 list-disc text-[10px] dark:text-white"
                            >
                              {sublinks.text}{' '}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              >
                <div
                  className="relative hover:text-primary-orange"
                  // onMouseOver={(e) => setDisplayPopup([true, index])}
                  // onMouseOut={(e) => setDisplayPopup([true, index])}
                  onClick={() => setDisplayPopup([false, -1])}
                  // {() => {; console.log(displayPopup);}}
                >
                  <a
                    href="#"
                    className="flex items-center"
                    onClick={() => {
                      setDisplayPopup([
                        displayPopup[1] === index ? !displayPopup[0] : true,
                        index,
                      ]);
                    }}
                  >
                    {link.name}{' '}
                    {displayPopup[0] && displayPopup[1] === index ? (
                      <CaretDown className="ml-1 -rotate-180" />
                    ) : (
                      <CaretDown className="ml-1" />
                    )}
                  </a>
                </div>
              </Popover>
            ))}
        </ul>

        <div className="flex space-x-4">
          <button className="bg-primary-orange rounded text-white py-3 px-6 my-6">
            Apply now
          </button>
          <button
            className="p-3 px-[14px] ml-8 rounded-full bg-input block dark:hidden tablet:!hidden"
            onClick={() => setTheme('dark')}
            title="Switch to dark mode"
          >
            <Moon />
          </button>
          <button
            className="p-3 px-[14px] ml-8 rounded-full bg-input hidden dark:block tablet:!hidden"
            onClick={() => setTheme('light')}
            title="Switch to light mode"
          >
            <Sun />
          </button>
          <button
            className="hidden largeTablet:block"
            onClick={() => setIsOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </div>
      <MobileNavbar
        theme={theme}
        setTheme={setTheme}
        isOpen={isOpen}
        close={() => setIsOpen(false)}
      />
    </>
  );
}

const MobileNavbar = ({ isOpen, theme, setTheme, close }) => {
  const [showExpanded, setShowExpanded] = useState([-1, false]);
  const aboutUsLink = academyNavLinks()[0].navLinks[0];

  useEffect(() => {
    // const addclass = theme === "light" ? "show-white" : "show-black";

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        return document.querySelector('.navbar').classList.add('show');
      }
      return document.querySelector('.navbar').classList.remove('show');
    });
  });

  return (
    <div
      className={` fixed z-50 hidden transition-all duration-300 w-screen h-screen overflow-hidden bg-[#E7DDDA] sh top-0 left-0 translate-x-full ${
        isOpen ? 'translate-x-0' : ''
      } largeTablet:block dark:bg-[#1f1d1d]`}
    >
      <div className="relative w-full h-full overflow-auto  ">
        <div className="navbar bg-[#E7DDDA] fixed w-full px-5  py-1 pr-5 z-50 flex justify-between  dark:bg-black dark:bg-[linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.06) 136.14%)] dark:opacity-90">
          {showExpanded[1] ? (
            <button
              className="flex items-center"
              onClick={() => setShowExpanded(false)}
            >
              <CaretDown className="mr-2 rotate-90" />
              Back
            </button>
          ) : (
            <>
              <img src="/light-logo.svg" className="w-14 h-auto dark:hidden" />
              <img
                src="/light-logo_dark.svg"
                className="w-14 h-auto dark:block hidden"
              />
            </>
          )}
          <button
            onClick={() => {
              setShowExpanded([-1, false]);
              close();
            }}
          >
            <NavClose />
          </button>
        </div>
        {showExpanded[1] ? (
          <div className="px-5">
            <>
              {' '}
              {showExpanded[0] === -2 ? (
                <div>
                  <h2 className="uppercase text-sm mt-5 opacity-50">
                    {aboutUsLink.name}
                  </h2>

                  {aboutUsLink.subLinks.map((sublinks) => (
                    <div className="flex my-3" key={sublinks.name}>
                      {' '}
                      <img
                        height={20}
                        width={20}
                        src={`${sublinks.icon}`}
                      />{' '}
                      <Link
                        href={`${sublinks.link}`}
                        className="ml-4 space-y-2 list-disc font-semibold "
                      >
                        {' '}
                        {sublinks.name}
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </>

            <>
              {' '}
              {showExpanded[0] === -3 ? (
                <div className="mt-20 px-5">
                  <h2 className="uppercase text-sm mt-5 opacity-50">
                    Training
                  </h2>

                  <div className={`  items-start flex-nowrap mr-5 w-full`}>
                    {trainingCourses().map((name) => (
                      <div key={name.name} className="mt-5 dark:text-white">
                        <div key={name.name}>
                          <h2 className="ml-4 font-semibold"> {name.name}</h2>
                          {name.courses.map((course) => (
                            <div
                              key={course.name}
                              className="flex  opacity-70 hover:text-primary-orange"
                            >
                              <Link
                                href={`${course.link}`}
                                className="ml-4 space-y-2 list-disc  dark:text-white"
                              >
                                {' '}
                                {course.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>

            {academyNavLinks()[0]
              .navLinks.splice(1)
              .map((link, index) => (
                <>
                  {' '}
                  {showExpanded[0] === index ? (
                    <div key={link.name} className=" px-5">
                      <h2 className="uppercase text-sm mt-5 opacity-50">
                        {link.name}
                      </h2>

                      {link.subLinks.map((sublinks) => (
                        <div className="flex my-3" key={sublinks.name}>
                          {' '}
                          <img
                            height={20}
                            width={20}
                            src={`${sublinks.icon}`}
                          />{' '}
                          <Link
                            href={`${sublinks.link}`}
                            className="ml-4 space-y-2 list-disc font-semibold "
                          >
                            {' '}
                            {sublinks.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ))}
          </div>
        ) : (
          <ul className="space-y-5 mt-20 text-lg p-5">
            <li onClick={() => setShowExpanded([-2, true])}>
              <a className="flex items-center justify-between">
                About Us <CaretDown className="-rotate-90" />
              </a>
            </li>
            <li onClick={() => setShowExpanded([-3, true])}>
              <a className="flex items-center justify-between">
                Training <CaretDown className="-rotate-90" />
              </a>
            </li>
            {academyNavLinks()[0]
              .navLinks.splice(1)
              .map((link, index) => (
                <li
                  key={link.name}
                  onClick={() => setShowExpanded([index, true])}
                >
                  <a className="flex items-center justify-between">
                    {link.name} <CaretDown className="-rotate-90" />
                  </a>
                </li>
              ))}
          </ul>
        )}
        <button
          className="rounded-full fixed bottom-0 right-0 block dark:hidden p-5"
          onClick={() => setTheme('dark')}
          title="Switch to dark mode"
        >
          <Moon />
        </button>
        <button
          className="rounded-full fixed bottom-0 right-0 hidden dark:block p-5"
          onClick={() => setTheme('light')}
          title="Switch to light mode"
        >
          <Sun />
        </button>
      </div>
    </div>
  );
};

const Menu = () => (
  <svg
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_836_2806)">
      <circle cx="29" cy="29" r="20" fill="white" />
    </g>
    <path
      d="M21.125 35.375H36.875M21.125 29.375H36.875M21.125 23.375H36.875"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_d_836_2806"
        x="0"
        y="0"
        width="58"
        height="58"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.964706 0 0 0 0 0.305882 0 0 0 0 0.121569 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_836_2806"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_836_2806"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const Close = () => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_764_2632)">
        <circle cx="29" cy="29" r="20" fill="white" />
      </g>
      <path
        d="M23.7578 35.2431L29.0008 30.0001M34.2438 24.7571L28.9998 30.0001M28.9998 30.0001L23.7578 24.7571M29.0008 30.0001L34.2438 35.2431"
        stroke="black"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_764_2632"
          x="0"
          y="0"
          width="58"
          height="58"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.964706 0 0 0 0 0.305882 0 0 0 0 0.121569 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_764_2632"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_764_2632"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const Moon = () => (
  <svg
    width="58"
    height="58"
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_836_3143)">
      <circle cx="34" cy="34" r="25" fill="#3A2F2E" />
    </g>
    <path
      d="M45.2845 37.1523C44.7339 39.1229 43.6769 40.915 42.2187 42.3503C40.7606 43.7857 38.952 44.8142 36.973 45.3336C34.9939 45.853 32.9134 45.8452 30.9383 45.311C28.9632 44.7767 27.1624 43.7347 25.715 42.2885C24.2676 40.8423 23.2241 39.0423 22.6883 37.0677C22.1525 35.093 22.143 33.0125 22.6608 31.033C23.1786 29.0535 24.2056 27.2442 25.6398 25.7848C27.0739 24.3255 28.8651 23.2671 30.8353 22.7148C30.9796 22.6684 31.1332 22.6581 31.2824 22.6848C31.4317 22.7116 31.5721 22.7746 31.6913 22.8684C31.8105 22.9621 31.9049 23.0837 31.9661 23.2224C32.0273 23.3612 32.0534 23.5128 32.0423 23.6641C32.042 23.7358 32.0301 23.807 32.0071 23.875C31.5422 25.5531 31.5308 27.3244 31.9739 29.0084C32.417 30.6923 33.2989 32.2286 34.5296 33.4605C35.7603 34.6923 37.2957 35.5757 38.9792 36.0205C40.6627 36.4652 42.4341 36.4555 44.1126 35.9922L44.3704 35.9453C44.5743 35.9437 44.7733 36.0078 44.9379 36.1281C45.1026 36.2484 45.2241 36.4185 45.2845 36.6133C45.3434 36.7881 45.3434 36.9775 45.2845 37.1523Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_d_836_3143"
        x="0"
        y="0"
        width="68"
        height="68"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.964706 0 0 0 0 0.305882 0 0 0 0 0.121569 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_836_3143"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_836_3143"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const Sun = () => (
  <svg
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_836_3054)">
      <circle cx="29" cy="29" r="20" fill="white" />
    </g>
    <g clipPath="url(#clip0_836_3054)">
      <path
        d="M29 35C30.5913 35 32.1174 34.3679 33.2426 33.2426C34.3679 32.1174 35 30.5913 35 29C35 27.4087 34.3679 25.8826 33.2426 24.7574C32.1174 23.6321 30.5913 23 29 23C27.4087 23 25.8826 23.6321 24.7574 24.7574C23.6321 25.8826 23 27.4087 23 29C23 30.5913 23.6321 32.1174 24.7574 33.2426C25.8826 34.3679 27.4087 35 29 35ZM29 17C29.1989 17 29.3897 17.079 29.5303 17.2197C29.671 17.3603 29.75 17.5511 29.75 17.75V20.75C29.75 20.9489 29.671 21.1397 29.5303 21.2803C29.3897 21.421 29.1989 21.5 29 21.5C28.8011 21.5 28.6103 21.421 28.4697 21.2803C28.329 21.1397 28.25 20.9489 28.25 20.75V17.75C28.25 17.5511 28.329 17.3603 28.4697 17.2197C28.6103 17.079 28.8011 17 29 17V17ZM29 36.5C29.1989 36.5 29.3897 36.579 29.5303 36.7197C29.671 36.8603 29.75 37.0511 29.75 37.25V40.25C29.75 40.4489 29.671 40.6397 29.5303 40.7803C29.3897 40.921 29.1989 41 29 41C28.8011 41 28.6103 40.921 28.4697 40.7803C28.329 40.6397 28.25 40.4489 28.25 40.25V37.25C28.25 37.0511 28.329 36.8603 28.4697 36.7197C28.6103 36.579 28.8011 36.5 29 36.5ZM41 29C41 29.1989 40.921 29.3897 40.7803 29.5303C40.6397 29.671 40.4489 29.75 40.25 29.75H37.25C37.0511 29.75 36.8603 29.671 36.7197 29.5303C36.579 29.3897 36.5 29.1989 36.5 29C36.5 28.8011 36.579 28.6103 36.7197 28.4697C36.8603 28.329 37.0511 28.25 37.25 28.25H40.25C40.4489 28.25 40.6397 28.329 40.7803 28.4697C40.921 28.6103 41 28.8011 41 29ZM21.5 29C21.5 29.1989 21.421 29.3897 21.2803 29.5303C21.1397 29.671 20.9489 29.75 20.75 29.75H17.75C17.5511 29.75 17.3603 29.671 17.2197 29.5303C17.079 29.3897 17 29.1989 17 29C17 28.8011 17.079 28.6103 17.2197 28.4697C17.3603 28.329 17.5511 28.25 17.75 28.25H20.75C20.9489 28.25 21.1397 28.329 21.2803 28.4697C21.421 28.6103 21.5 28.8011 21.5 29ZM37.4855 20.5145C37.6261 20.6551 37.7051 20.8459 37.7051 21.0448C37.7051 21.2436 37.6261 21.4344 37.4855 21.575L35.3645 23.6975C35.2948 23.7671 35.212 23.8224 35.1209 23.86C35.0299 23.8976 34.9323 23.917 34.8337 23.9169C34.6347 23.9168 34.4439 23.8376 34.3032 23.6967C34.2336 23.627 34.1784 23.5443 34.1408 23.4532C34.1031 23.3621 34.0838 23.2645 34.0838 23.166C34.084 22.9669 34.1632 22.7761 34.304 22.6355L36.425 20.5145C36.5656 20.3739 36.7564 20.2949 36.9552 20.2949C37.1541 20.2949 37.3449 20.3739 37.4855 20.5145ZM23.696 34.304C23.8366 34.4446 23.9156 34.6354 23.9156 34.8342C23.9156 35.0331 23.8366 35.2239 23.696 35.3645L21.575 37.4855C21.4335 37.6221 21.2441 37.6977 21.0474 37.696C20.8508 37.6943 20.6627 37.6154 20.5236 37.4764C20.3846 37.3373 20.3057 37.1492 20.304 36.9526C20.3023 36.7559 20.3779 36.5665 20.5145 36.425L22.6355 34.304C22.7761 34.1634 22.9669 34.0844 23.1657 34.0844C23.3646 34.0844 23.5554 34.1634 23.696 34.304ZM37.4855 37.4855C37.3449 37.6261 37.1541 37.7051 36.9552 37.7051C36.7564 37.7051 36.5656 37.6261 36.425 37.4855L34.304 35.3645C34.1674 35.223 34.0918 35.0336 34.0935 34.8369C34.0952 34.6403 34.1741 34.4522 34.3131 34.3131C34.4522 34.1741 34.6403 34.0952 34.8369 34.0935C35.0336 34.0918 35.223 34.1674 35.3645 34.304L37.4855 36.425C37.6261 36.5656 37.7051 36.7564 37.7051 36.9552C37.7051 37.1541 37.6261 37.3449 37.4855 37.4855ZM23.696 23.6975C23.5554 23.8381 23.3646 23.9171 23.1657 23.9171C22.9669 23.9171 22.7761 23.8381 22.6355 23.6975L20.5145 21.575C20.4429 21.5058 20.3857 21.4231 20.3464 21.3316C20.3071 21.2401 20.2864 21.1416 20.2856 21.0421C20.2847 20.9425 20.3037 20.8437 20.3414 20.7515C20.3791 20.6594 20.4348 20.5756 20.5052 20.5052C20.5756 20.4348 20.6594 20.3791 20.7515 20.3414C20.8437 20.3037 20.9425 20.2847 21.0421 20.2856C21.1416 20.2864 21.2401 20.3071 21.3316 20.3464C21.4231 20.3857 21.5058 20.4429 21.575 20.5145L23.696 22.6355C23.7658 22.7052 23.8213 22.7879 23.8591 22.879C23.8969 22.9702 23.9163 23.0678 23.9163 23.1665C23.9163 23.2652 23.8969 23.3628 23.8591 23.454C23.8213 23.5451 23.7658 23.6278 23.696 23.6975Z"
        fill="#3A302E"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_836_3054"
        x="0"
        y="0"
        width="58"
        height="58"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.964706 0 0 0 0 0.305882 0 0 0 0 0.121569 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_836_3054"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_836_3054"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_836_3054">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(17 17)"
        />
      </clipPath>
    </defs>
  </svg>
);
