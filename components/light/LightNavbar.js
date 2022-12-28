import { CaretDown } from "icons";
import { NavClose } from "icons/close";
import { useState } from "react";
import { useTheme } from "next-themes";

export function LightNavbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center py-3 px-20 font-lato tablet:px-10 phone:px-5">
        <img src="/light-logo.png" className="dark:hidden tablet:w-14 w-14 h-14" />
        <img
          src="/light-logo_dark.svg"
          className="dark:block hidden tablet:w-14"
        />

        <ul className="flex space-x-5 largeTablet:hidden">
          <li className="relative group">
            <a href="#" className="flex items-center">
              Products <CaretDown className="ml-1" />
            </a>
            <div class="absolute z-10 opacity-0 shadow-lg min-w-max p-3 whitespace-nowrap rounded bg-white dark:bg-black dark:bg-opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-5">
              <div className="flex flex-nowrap space-x-4 w-full">
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="flex items-center">
              Solutions <CaretDown className="ml-1" />
            </a>
            <div class="absolute z-10 opacity-0 shadow-lg min-w-max p-3 whitespace-nowrap rounded bg-white dark:bg-black dark:bg-opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-5">
              <div className="flex flex-nowrap space-x-4">
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="flex items-center">
              Market Place <CaretDown className="ml-1" />
            </a>
            <div class="absolute z-10 opacity-0 shadow-lg min-w-max p-3 whitespace-nowrap rounded bg-white dark:bg-black dark:bg-opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-5">
              <div className="flex flex-nowrap space-x-4">
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="flex items-center">
              Company <CaretDown className="ml-1" />
            </a>
            <div class="absolute z-10 opacity-0 shadow-lg min-w-max p-3 whitespace-nowrap rounded bg-white dark:bg-black dark:bg-opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-5">
              <div className="flex flex-nowrap space-x-4">
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="flex items-center">
              Konet Mail <CaretDown className="ml-1" />
            </a>
            <div class="absolute z-10 opacity-0 shadow-lg min-w-max p-3 whitespace-nowrap rounded bg-white dark:bg-black dark:bg-opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-5">
              <div className="flex flex-nowrap space-x-4">
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="flex items-center">
              Explore More <CaretDown className="ml-1" />
            </a>
            <div class="absolute z-10 opacity-0 shadow-lg min-w-max p-3 whitespace-nowrap rounded bg-white dark:bg-black dark:bg-opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-5">
              <div className="flex flex-nowrap space-x-4">
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
                <div>
                  <h2 className="uppercase text-sm opacity-50">Digital</h2>
                  <ul className="ml-4 space-y-2 list-disc font-semibold">
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="flex space-x-4">
          <button
            className="p-3 px-[14px] ml-8 rounded-full bg-input block dark:hidden tab:ml-4 phone:p-2"
            onClick={() => setTheme("dark")}
            title="Switch to dark mode"
          >
            <Moon />
          </button>
          <button
            className="p-3 px-[14px] ml-8 rounded-full bg-input hidden dark:block tab:ml-4 phone:p-2"
            onClick={() => setTheme("light")}
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
        isOpen={isOpen}
        close={() => setIsOpen(false)}
      />
    </>
  );
}

const MobileNavbar = ({ isOpen, theme, close }) => {
  const [showExpanded, setShowExpanded] = useState(false);
  return (
    <div
      className={`fixed z-50 hidden transition-all duration-300 w-screen h-screen overflow-auto p-5 bg-[#E7DDDA] top-0 left-0 translate-x-full ${
        isOpen ? "translate-x-0" : ""
      } largeTablet:block dark:bg-[#1f1d1d]`}
    >
      <div className="flex justify-between">
        {showExpanded ? (
          <button
            className="flex items-center"
            onClick={() => setShowExpanded(false)}
          >
            <CaretDown className="mr-2 rotate-90" />
            Back
          </button>
        ) : (
          <>
            {/* <img src="/light-logo.svg" className="w-14 h-auto dark:hidden" /> */}
            <img src="/light-logo.png" className="dark:hidden w-14 h-14" />
            <img
              src="/light-logo_dark.svg"
              className="w-14 h-auto dark:block hidden"
            />
          </>
        )}
        <button
          onClick={() => {
            setShowExpanded(false);
            close();
          }}
        >
          <NavClose />
        </button>
      </div>
      {showExpanded ? (
        <div>
          <h2 className="uppercase text-sm mt-5 opacity-50" id="nav-products">
            Products
          </h2>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <h2 className="uppercase text-sm mt-5 opacity-50" id="nav-solutions">
            Solutions
          </h2>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <h2 className="uppercase text-sm mt-5 opacity-50" id="nav-market">
            Market Place
          </h2>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <h2 className="uppercase text-sm mt-5 opacity-50" id="nav-company">
            Company
          </h2>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <h2 className="uppercase text-sm mt-5 opacity-50" id="nav-konet">
            Konet Mail
          </h2>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
          <h2 className="uppercase text-sm mt-5 opacity-50" id="nav-explore">
            Explore More
          </h2>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      ) : (
        <ul className="space-y-5 mt-10 text-lg">
          <li onClick={() => setShowExpanded(true)}>
            <a
              href="#nav-products"
              className="flex items-center justify-between"
            >
              Products <CaretDown className="-rotate-90" />
            </a>
          </li>
          <li onClick={() => setShowExpanded(true)}>
            <a
              href="#nav-solutions"
              className="flex items-center justify-between"
            >
              Solutions <CaretDown className="-rotate-90" />
            </a>
          </li>
          <li onClick={() => setShowExpanded(true)}>
            <a href="#nav-market" className="flex items-center justify-between">
              Market Place <CaretDown className="-rotate-90" />
            </a>
          </li>
          <li onClick={() => setShowExpanded(true)}>
            <a
              href="#nav-company"
              className="flex items-center justify-between"
            >
              Company <CaretDown className="-rotate-90" />
            </a>
          </li>
          <li onClick={() => setShowExpanded(true)}>
            <a href="#nav-konet" className="flex items-center justify-between">
              Konet Mail <CaretDown className="-rotate-90" />
            </a>
          </li>
          <li onClick={() => setShowExpanded(true)}>
            <a
              href="#nav-explore"
              className="flex items-center justify-between"
            >
              Explore More <CaretDown className="-rotate-90" />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

const Menu = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    height="2em"
    width="2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
  </svg>
);

export const Moon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.1718 16.8184C17.5634 16.8086 15.9865 16.3712 14.6028 15.551C13.2192 14.7308 12.0785 13.5574 11.2978 12.1511C10.5172 10.7448 10.1246 9.15611 10.1603 7.54803C10.196 5.93994 10.6587 4.37029 11.5011 3C9.28179 3.38961 7.287 4.59139 5.90529 6.37126C4.52359 8.15112 3.85391 10.3816 4.02673 12.6282C4.19954 14.8748 5.20247 16.9766 6.84013 18.5242C8.4778 20.0718 10.6329 20.9544 12.8857 21C14.4269 21.0039 15.943 20.6095 17.287 19.8551C18.631 19.1006 19.7572 18.0116 20.5564 16.6938C20.0986 16.7695 19.6358 16.8111 19.1718 16.8184V16.8184Z"
      stroke="black"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Sun = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
      stroke="white"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 3V4.38462"
      stroke="white"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19.6155V21.0001"
      stroke="white"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.9998 12H19.6152"
      stroke="white"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.38462 12H3"
      stroke="white"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3693 5.63086L17.3862 6.61394"
      stroke="white"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.61394 17.3862L5.63086 18.3693"
      stroke="white"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3693 18.3693L17.3862 17.3862"
      stroke="white"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.61394 6.61394L5.63086 5.63086"
      stroke="white"
      strokeWidth="1.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
