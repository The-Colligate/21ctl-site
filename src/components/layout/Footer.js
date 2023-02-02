import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Footer() {
  const router = useRouter();

  const academy = ['/people', '/programmes', '/training-pillars', '/admission'];

  const index = ['/', '/support-centers', '/events', '/explore-more'];
  const power = ['/power'];
  const security = ['/security', '/identity'];
  const tech = ['/digital-infrastructure', '/platform', '/communication', '/automation'];

  const footerBg = academy.includes(router.pathname)
  ? `bg-primary-orange`
  : index.includes(router.pathname)
  ? `bg-primary-orange`
  : power.includes(router.pathname)
  ? `bg-primary-green`
  : security.includes(router.pathname)
  ? `bg-magenta`
  : tech.includes(router.pathname)
  ? `bg-primary-orange`
  : null;

  const footerEmail = academy.includes(router.pathname)
    ? 'support@academy.21ctl.com'
    : index.includes(router.pathname)
    ? 'inquiry@21ctl.com'
    : power.includes(router.pathname)
    ? 'support@power.21ctl.com'
    : security.includes(router.pathname)
    ? 'support@security.21ctl.com'
    : tech.includes(router.pathname)
    ? 'support@technology.21ctl.com'
    : null;

  // get year
  const year = new Date().getFullYear();
  return (
    <footer className={`${footerBg} dark:bg-[#252525] px-20 py-10 pb-4 h-full`}>
      <div className="flex sm:flex-row flex-col sm:justify-evenly justify-center sm:items-center sm:space-y-0 space-y-10">
        <div className="space-y-8 tablet:flex tablet:flex-col tablet:justify-center tablet:items-center">
          <div>
            <img
              src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675092408/21ctl/21st_Century_Technolies_Logo_xtstpd.svg"
              className="dark:hidden w-16 tablet:w-14 "
            />
            <img
              src="https://res.cloudinary.com/dqsggbqmf/image/upload/v1675080972/21ctl/21st_Century_Technologies_Logo_Dark_aztket.svg"
              className="dark:block hidden w-16 tablet:w-14"
            />
          </div>

          <div className="flex space-x-5">
            <a
              href="https://www.linkedin.com/company/21st-century-technologies_2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-linkedin w-7 h-7"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/21st-century-technologies_2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-facebook  w-7 h-7"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/21ctlcom?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-instagram w-7 h-7"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/21ctlcom?s=21&t=3Lc26MhPh1mSvArXEWxEeQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                className="bi bi-twitter  w-7 h-7"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
          </div>
        </div>

        {/* address */}
        <div className="tablet:flex tablet:flex-col tablet:justify-center tablet:items-center">
          <p className="font-bold text-lg text-black dark:text-white ">
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
          <p className="font-bold text-lg text-black dark:text-white tablet:flex tablet:justify-center tablet:items-center">
            Contact
          </p>

          <div className="flex items-center pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-telephone-fill w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>{' '}
            <span className="text-black dark:text-white ml-3">
              <a href="tel:+23412707777">+234 1 270 7777</a>
            </span>
          </div>
          <div className="flex items-center pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-envelope-fill w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>{' '}
            <span className="text-black dark:text-white hover:text-primary-orange ml-3">
              <a href={`mailto:${footerEmail}`}>{footerEmail}</a>
            </span>
          </div>

          <div className="pt-2">
            <Link
              href="/support-centers"
              className="text-black dark:text-white hover:text-primary-orange ml-[30px]"
            >
              Support Centers
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <p className="text-center text-black dark:text-white">
          © {year}, 21st Century Technologies. All right reserved.
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
