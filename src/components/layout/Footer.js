import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#fe622a] dark:bg-[#252525] px-20 py-10 pb-4 h-60">
      <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center sm:space-y-0 space-y-10">
        <div className="space-y-8">
          <div>
            <img
              src="/light-logo.svg"
              className="dark:hidden w-16 tablet:w-14 "
            />
            <img
              src="/light-logo_dark.svg"
              className="dark:block hidden w-16 tablet:w-14"
            />
          </div>

          <div className="flex space-x-5">
            <img
              className="w-7 h-7  cursor-pointer"
              src="/logo/socials/linkedin.png"
              alt="linkedin"
            />
            <img
              className="w-7 h-7  cursor-pointer"
              src="/logo/socials/facebook.png"
              alt="facebook"
            />
            <img
              className="w-7 h-7  cursor-pointer"
              src="/logo/socials/insta.png"
              alt="insta"
            />
            <img
              className="w-7 h-7  cursor-pointer"
              src="/logo/socials/twitter.png"
              alt="twitter"
            />
          </div>
        </div>

        {/* address */}
        <div>
          <p className="font-bold text-lg text-black dark:text-white">
            Our Address
          </p>

          <div className="text-black dark:text-white pt-2">
            5 Jeremiah Ugwu Street, <br />
            Off Babatunde Anjous,
            <br />
            Lekki Phase 1,
            <br />
            Lagos, Nigeria
          </div>
        </div>

        {/* contact */}
        <div>
          <p className="font-bold text-lg text-black dark:text-white">
            Contact
          </p>

          <div className="flex items-center pt-2">
            <PhoneIcon />{' '}
            <span className="text-black dark:text-white ml-3">Phone</span>
          </div>
          <div className="flex pt-2">
            <MailIcon />{' '}
            <span className="text-black dark:text-white ml-3">Email us</span>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <p className="text-center text-black dark:text-white">
          Copyright © 2023 21st Century Technology Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

const PhoneIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.95 21.5C17.8 21.5 15.7043 21.0207 13.663 20.062C11.621 19.104 9.81267 17.8373 8.238 16.262C6.66267 14.6873 5.396 12.879 4.438 10.837C3.47933 8.79567 3 6.7 3 4.55C3 4.25 3.1 4 3.3 3.8C3.5 3.6 3.75 3.5 4.05 3.5H8.1C8.33333 3.5 8.54167 3.575 8.725 3.725C8.90833 3.875 9.01667 4.06667 9.05 4.3L9.7 7.8C9.73333 8.03333 9.72933 8.24567 9.688 8.437C9.646 8.629 9.55 8.8 9.4 8.95L7 11.4C7.7 12.6 8.575 13.725 9.625 14.775C10.675 15.825 11.8333 16.7333 13.1 17.5L15.45 15.15C15.6 15 15.796 14.8873 16.038 14.812C16.2793 14.7373 16.5167 14.7167 16.75 14.75L20.2 15.45C20.4333 15.5 20.625 15.6123 20.775 15.787C20.925 15.9623 21 16.1667 21 16.4V20.45C21 20.75 20.9 21 20.7 21.2C20.5 21.4 20.25 21.5 19.95 21.5Z"
        fill="#F64E1F"
      />
    </svg>
  );
};

const MailIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z"
        fill="#F64E1F"
      />
    </svg>
  );
};
