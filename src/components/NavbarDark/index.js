import React, { useState } from 'react';
import MobileSidebar from './MobileSidebar';

const MenuBar = () => {
  return (
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
};

const NavbarDark = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="sm:px-20 px-5 py-5 flex items-center justify-between text-white">
        <div>
          <svg
            width="76"
            height="73"
            viewBox="0 0 76 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 0L19 6L13 12L7 6L13 0Z" fill="#F64E1F" />
            <path d="M6 7L12 13L6 19L0 13L6 7Z" fill="#7FBA03" />
            <path d="M20 7L26 13L20 19L14 13L20 7Z" fill="#FEB906" />
            <path d="M13 14L19 20L13 26L7 20L13 14Z" fill="#03A5F0" />
            <path
              d="M36.6 24C36.6 23.05 36.7833 22.1833 37.15 21.4C37.5167 20.6 37.9583 19.9083 38.475 19.325C38.9917 18.7417 39.6667 18.05 40.5 17.25L40.875 16.875C41.7917 16.0083 42.475 15.2417 42.925 14.575C43.3917 13.9083 43.625 13.175 43.625 12.375C43.625 10.4083 42.5583 9.425 40.425 9.425C39.725 9.425 39.05 9.525 38.4 9.725C37.75 9.925 37.275 10.1083 36.975 10.275L36.5 9.025C37.1667 8.70833 37.7917 8.48333 38.375 8.35C38.9583 8.2 39.675 8.125 40.525 8.125C42.0083 8.125 43.1333 8.51667 43.9 9.3C44.6667 10.0833 45.05 11.0917 45.05 12.325C45.05 13.0583 44.9083 13.7333 44.625 14.35C44.3417 14.9667 43.9833 15.525 43.55 16.025C43.1333 16.5083 42.5417 17.1333 41.775 17.9L41.275 18.4C41.1583 18.5167 40.8167 18.8667 40.25 19.45C39.6833 20.0167 39.225 20.5833 38.875 21.15C38.525 21.7167 38.3083 22.2583 38.225 22.775H44.75L44.925 24H36.6ZM48.6688 24V22.775H51.4188V9.75L48.6438 11.05L48.1688 9.925V9.9L51.5938 8.325H52.9688V22.775H55.3188V24H48.6688ZM61.81 24.125C61.16 24.125 60.4766 24.0417 59.76 23.875C59.06 23.6917 58.4016 23.45 57.785 23.15L58.285 21.95C58.7016 22.1833 59.2266 22.3917 59.86 22.575C60.51 22.7417 61.135 22.825 61.735 22.825C62.485 22.825 63.085 22.6667 63.535 22.35C64.0016 22.0167 64.235 21.4917 64.235 20.775C64.235 20.2083 64.1016 19.7833 63.835 19.5C63.585 19.2167 63.185 18.9833 62.635 18.8L60.81 18.25C60.1433 18.0333 59.61 17.8083 59.21 17.575C58.81 17.3417 58.5016 17.025 58.285 16.625C58.0683 16.2083 57.96 15.675 57.96 15.025C57.96 13.9417 58.335 13.1333 59.085 12.6C59.835 12.0667 60.7766 11.8 61.91 11.8C63.0933 11.8 64.1766 12.0333 65.16 12.5L64.71 13.675C64.3266 13.4917 63.8933 13.35 63.41 13.25C62.9433 13.1333 62.485 13.075 62.035 13.075C61.285 13.075 60.6683 13.2417 60.185 13.575C59.7016 13.8917 59.46 14.4 59.46 15.1C59.46 15.4667 59.5266 15.75 59.66 15.95C59.7933 16.15 59.9766 16.3083 60.21 16.425C60.4433 16.5417 60.7933 16.675 61.26 16.825L63.06 17.4C64.0433 17.7167 64.735 18.1083 65.135 18.575C65.5516 19.0417 65.76 19.75 65.76 20.7C65.76 21.8833 65.385 22.75 64.635 23.3C63.9016 23.85 62.96 24.125 61.81 24.125ZM72.4395 24.125C71.5895 24.1083 70.9311 23.925 70.4645 23.575C69.9978 23.225 69.6728 22.7083 69.4895 22.025C69.3228 21.3417 69.2395 20.425 69.2395 19.275V13.075H67.3645V11.975H69.2895L69.5895 8.525H70.8145V11.975H74.5645V13.075H70.8145V19.3C70.8145 20.3333 70.8895 21.1 71.0395 21.6C71.2061 22.1 71.4228 22.4333 71.6895 22.6C71.9728 22.75 72.3645 22.825 72.8645 22.825C73.7645 22.825 74.3728 22.8 74.6895 22.75L74.7645 24C74.1145 24.0833 73.3395 24.125 72.4395 24.125Z"
              fill="white"
            />
            <path
              d="M9.06 30.1C8.3 30.1 7.61333 30.2333 7 30.5C6.38667 30.7533 5.86667 31.1333 5.44 31.64C5.01333 32.1333 4.68667 32.74 4.46 33.46C4.23333 34.1667 4.12 34.9667 4.12 35.86C4.12 37.0333 4.3 38.0533 4.66 38.92C5.03333 39.7867 5.58 40.4533 6.3 40.92C7.03333 41.3867 7.94667 41.62 9.04 41.62C9.66667 41.62 10.26 41.5667 10.82 41.46C11.38 41.3533 11.9267 41.22 12.46 41.06V42.62C11.9267 42.82 11.3733 42.9667 10.8 43.06C10.24 43.1533 9.56667 43.2 8.78 43.2C7.32667 43.2 6.11333 42.9 5.14 42.3C4.16667 41.7 3.43333 40.8467 2.94 39.74C2.46 38.6333 2.22 37.3333 2.22 35.84C2.22 34.76 2.36667 33.7733 2.66 32.88C2.96667 31.9867 3.40667 31.2133 3.98 30.56C4.56667 29.9067 5.28667 29.4067 6.14 29.06C6.99333 28.7 7.97333 28.52 9.08 28.52C9.81333 28.52 10.52 28.5933 11.2 28.74C11.88 28.8867 12.4867 29.0933 13.02 29.36L12.3 30.88C11.86 30.68 11.3667 30.5 10.82 30.34C10.2867 30.18 9.7 30.1 9.06 30.1ZM19.2767 32.08C20.1967 32.08 20.9834 32.28 21.6367 32.68C22.3034 33.08 22.8101 33.6467 23.1567 34.38C23.5167 35.1 23.6967 35.9467 23.6967 36.92V37.98H16.3567C16.3834 39.1933 16.6901 40.12 17.2767 40.76C17.8767 41.3867 18.7101 41.7 19.7767 41.7C20.4567 41.7 21.0567 41.64 21.5767 41.52C22.1101 41.3867 22.6567 41.2 23.2167 40.96V42.5C22.6701 42.74 22.1301 42.9133 21.5967 43.02C21.0634 43.14 20.4301 43.2 19.6967 43.2C18.6834 43.2 17.7834 42.9933 16.9967 42.58C16.2234 42.1667 15.6167 41.5533 15.1767 40.74C14.7501 39.9133 14.5367 38.9067 14.5367 37.72C14.5367 36.5467 14.7301 35.54 15.1167 34.7C15.5167 33.86 16.0701 33.2133 16.7767 32.76C17.4967 32.3067 18.3301 32.08 19.2767 32.08ZM19.2567 33.52C18.4167 33.52 17.7501 33.7933 17.2567 34.34C16.7767 34.8733 16.4901 35.62 16.3967 36.58H21.8567C21.8567 35.9667 21.7634 35.4333 21.5767 34.98C21.3901 34.5267 21.1034 34.1733 20.7167 33.92C20.3434 33.6533 19.8567 33.52 19.2567 33.52ZM31.3858 32.08C32.6658 32.08 33.6324 32.3933 34.2858 33.02C34.9391 33.6333 35.2658 34.6333 35.2658 36.02V43H33.5258V36.14C33.5258 35.2733 33.3324 34.6267 32.9458 34.2C32.5591 33.7733 31.9524 33.56 31.1258 33.56C29.9391 33.56 29.1191 33.8933 28.6658 34.56C28.2124 35.2267 27.9858 36.1867 27.9858 37.44V43H26.2258V32.28H27.6458L27.9058 33.74H28.0058C28.2458 33.3667 28.5391 33.06 28.8858 32.82C29.2458 32.5667 29.6391 32.38 30.0658 32.26C30.4924 32.14 30.9324 32.08 31.3858 32.08ZM41.9691 41.76C42.2357 41.76 42.5091 41.74 42.7891 41.7C43.0691 41.6467 43.2957 41.5933 43.4691 41.54V42.88C43.2824 42.9733 43.0157 43.0467 42.6691 43.1C42.3224 43.1667 41.9891 43.2 41.6691 43.2C41.1091 43.2 40.5891 43.1067 40.1091 42.92C39.6424 42.72 39.2624 42.38 38.9691 41.9C38.6757 41.42 38.5291 40.7467 38.5291 39.88V33.64H37.0091V32.8L38.5491 32.1L39.2491 29.82H40.2891V32.28H43.3891V33.64H40.2891V39.84C40.2891 40.4933 40.4424 40.98 40.7491 41.3C41.0691 41.6067 41.4757 41.76 41.9691 41.76ZM54.3756 32.28V43H52.9356L52.6756 41.58H52.5956C52.369 41.9533 52.0756 42.26 51.7156 42.5C51.3556 42.74 50.9623 42.9133 50.5356 43.02C50.109 43.14 49.6623 43.2 49.1956 43.2C48.3423 43.2 47.6223 43.0667 47.0356 42.8C46.4623 42.52 46.029 42.0933 45.7356 41.52C45.4423 40.9467 45.2956 40.2067 45.2956 39.3V32.28H47.0756V39.18C47.0756 40.0333 47.269 40.6733 47.6556 41.1C48.0423 41.5267 48.6423 41.74 49.4556 41.74C50.2556 41.74 50.8823 41.5933 51.3356 41.3C51.8023 40.9933 52.129 40.5533 52.3156 39.98C52.5156 39.3933 52.6156 38.6867 52.6156 37.86V32.28H54.3756ZM62.5789 32.08C62.7789 32.08 62.9922 32.0933 63.2189 32.12C63.4589 32.1333 63.6656 32.16 63.8389 32.2L63.6189 33.82C63.4456 33.78 63.2522 33.7467 63.0389 33.72C62.8389 33.6933 62.6456 33.68 62.4589 33.68C62.0456 33.68 61.6522 33.7667 61.2789 33.94C60.9056 34.1133 60.5722 34.36 60.2789 34.68C59.9856 34.9867 59.7522 35.36 59.5789 35.8C59.4189 36.24 59.3389 36.7333 59.3389 37.28V43H57.5789V32.28H59.0189L59.2189 34.24H59.2989C59.5256 33.84 59.7989 33.48 60.1189 33.16C60.4389 32.8267 60.8056 32.5667 61.2189 32.38C61.6322 32.18 62.0856 32.08 62.5789 32.08ZM63.9606 32.28H65.8406L68.1606 38.38C68.294 38.74 68.414 39.0867 68.5206 39.42C68.6406 39.7533 68.7473 40.08 68.8406 40.4C68.934 40.7067 69.0073 41.0067 69.0606 41.3H69.1406C69.2206 40.9667 69.3473 40.5333 69.5206 40C69.694 39.4533 69.874 38.9067 70.0606 38.36L72.2406 32.28H74.1406L69.5206 44.48C69.2673 45.1467 68.9673 45.7267 68.6206 46.22C68.2873 46.7267 67.874 47.1133 67.3806 47.38C66.9006 47.66 66.314 47.8 65.6206 47.8C65.3006 47.8 65.0206 47.78 64.7806 47.74C64.5406 47.7133 64.334 47.68 64.1606 47.64V46.24C64.3073 46.2667 64.4806 46.2933 64.6806 46.32C64.894 46.3467 65.114 46.36 65.3406 46.36C65.754 46.36 66.1073 46.28 66.4006 46.12C66.7073 45.9733 66.9673 45.7533 67.1806 45.46C67.394 45.18 67.574 44.8467 67.7206 44.46L68.2806 43.04L63.9606 32.28Z"
              fill="white"
            />
            <path
              d="M7.89 48.01V48.59H5.95V55H5.25V48.59H3.3V48.01H7.89ZM9.51531 48.58V51.19H12.1653V51.77H9.51531V54.42H12.4653V55H8.81531V48H12.4653V48.58H9.51531ZM13.3446 51.5C13.3446 50.8133 13.4946 50.2 13.7946 49.66C14.0946 49.1133 14.5046 48.69 15.0246 48.39C15.5446 48.0833 16.1246 47.93 16.7646 47.93C17.5446 47.93 18.2113 48.1167 18.7646 48.49C19.3246 48.8567 19.7313 49.3767 19.9846 50.05H19.1646C18.9646 49.5767 18.6579 49.2067 18.2446 48.94C17.8379 48.6733 17.3446 48.54 16.7646 48.54C16.2513 48.54 15.7879 48.66 15.3746 48.9C14.9679 49.14 14.6479 49.4867 14.4146 49.94C14.1813 50.3867 14.0646 50.9067 14.0646 51.5C14.0646 52.0933 14.1813 52.6133 14.4146 53.06C14.6479 53.5067 14.9679 53.85 15.3746 54.09C15.7879 54.33 16.2513 54.45 16.7646 54.45C17.3446 54.45 17.8379 54.32 18.2446 54.06C18.6579 53.7933 18.9646 53.4267 19.1646 52.96H19.9846C19.7313 53.6267 19.3246 54.1433 18.7646 54.51C18.2046 54.8767 17.5379 55.06 16.7646 55.06C16.1246 55.06 15.5446 54.91 15.0246 54.61C14.5046 54.3033 14.0946 53.88 13.7946 53.34C13.4946 52.8 13.3446 52.1867 13.3446 51.5ZM26.3895 48.01V55H25.6895V51.73H21.8995V55H21.1995V48.01H21.8995V51.15H25.6895V48.01H26.3895ZM33.0766 55H32.3766L28.5066 49.12V55H27.8066V48.01H28.5066L32.3766 53.88V48.01H33.0766V55ZM37.622 55.07C36.9754 55.07 36.3887 54.92 35.862 54.62C35.3354 54.3133 34.9187 53.89 34.612 53.35C34.312 52.8033 34.162 52.1867 34.162 51.5C34.162 50.8133 34.312 50.2 34.612 49.66C34.9187 49.1133 35.3354 48.69 35.862 48.39C36.3887 48.0833 36.9754 47.93 37.622 47.93C38.2754 47.93 38.8654 48.0833 39.392 48.39C39.9187 48.69 40.332 49.1133 40.632 49.66C40.932 50.2 41.082 50.8133 41.082 51.5C41.082 52.1867 40.932 52.8033 40.632 53.35C40.332 53.89 39.9187 54.3133 39.392 54.62C38.8654 54.92 38.2754 55.07 37.622 55.07ZM37.622 54.46C38.142 54.46 38.6087 54.34 39.022 54.1C39.4354 53.86 39.762 53.5167 40.002 53.07C40.242 52.6167 40.362 52.0933 40.362 51.5C40.362 50.9067 40.242 50.3867 40.002 49.94C39.762 49.4933 39.4354 49.15 39.022 48.91C38.6087 48.67 38.142 48.55 37.622 48.55C37.102 48.55 36.6354 48.67 36.222 48.91C35.8087 49.15 35.482 49.4933 35.242 49.94C35.002 50.3867 34.882 50.9067 34.882 51.5C34.882 52.0933 35.002 52.6167 35.242 53.07C35.482 53.5167 35.8087 53.86 36.222 54.1C36.6354 54.34 37.102 54.46 37.622 54.46ZM42.8829 54.43H45.3929V55H42.1829V48.01H42.8829V54.43ZM49.3519 55.07C48.7052 55.07 48.1185 54.92 47.5919 54.62C47.0652 54.3133 46.6485 53.89 46.3419 53.35C46.0419 52.8033 45.8919 52.1867 45.8919 51.5C45.8919 50.8133 46.0419 50.2 46.3419 49.66C46.6485 49.1133 47.0652 48.69 47.5919 48.39C48.1185 48.0833 48.7052 47.93 49.3519 47.93C50.0052 47.93 50.5952 48.0833 51.1219 48.39C51.6485 48.69 52.0619 49.1133 52.3619 49.66C52.6619 50.2 52.8119 50.8133 52.8119 51.5C52.8119 52.1867 52.6619 52.8033 52.3619 53.35C52.0619 53.89 51.6485 54.3133 51.1219 54.62C50.5952 54.92 50.0052 55.07 49.3519 55.07ZM49.3519 54.46C49.8719 54.46 50.3385 54.34 50.7519 54.1C51.1652 53.86 51.4919 53.5167 51.7319 53.07C51.9719 52.6167 52.0919 52.0933 52.0919 51.5C52.0919 50.9067 51.9719 50.3867 51.7319 49.94C51.4919 49.4933 51.1652 49.15 50.7519 48.91C50.3385 48.67 49.8719 48.55 49.3519 48.55C48.8319 48.55 48.3652 48.67 47.9519 48.91C47.5385 49.15 47.2119 49.4933 46.9719 49.94C46.7319 50.3867 46.6119 50.9067 46.6119 51.5C46.6119 52.0933 46.7319 52.6167 46.9719 53.07C47.2119 53.5167 47.5385 53.86 47.9519 54.1C48.3652 54.34 48.8319 54.46 49.3519 54.46ZM59.4127 50.05C59.2127 49.59 58.9061 49.23 58.4927 48.97C58.0861 48.7033 57.6061 48.57 57.0527 48.57C56.5327 48.57 56.0661 48.69 55.6527 48.93C55.2394 49.17 54.9127 49.5133 54.6727 49.96C54.4327 50.4 54.3127 50.9133 54.3127 51.5C54.3127 52.0867 54.4327 52.6033 54.6727 53.05C54.9127 53.4967 55.2394 53.84 55.6527 54.08C56.0661 54.32 56.5327 54.44 57.0527 54.44C57.5394 54.44 57.9761 54.3367 58.3627 54.13C58.7561 53.9167 59.0694 53.6167 59.3027 53.23C59.5427 52.8367 59.6794 52.38 59.7127 51.86H56.7727V51.29H60.4527V51.8C60.4194 52.4133 60.2527 52.97 59.9527 53.47C59.6527 53.9633 59.2494 54.3533 58.7427 54.64C58.2427 54.9267 57.6794 55.07 57.0527 55.07C56.4061 55.07 55.8194 54.92 55.2927 54.62C54.7661 54.3133 54.3494 53.89 54.0427 53.35C53.7427 52.8033 53.5927 52.1867 53.5927 51.5C53.5927 50.8133 53.7427 50.2 54.0427 49.66C54.3494 49.1133 54.7661 48.69 55.2927 48.39C55.8194 48.0833 56.4061 47.93 57.0527 47.93C57.7994 47.93 58.4527 48.1167 59.0127 48.49C59.5727 48.8633 59.9794 49.3833 60.2327 50.05H59.4127ZM62.255 48.01V55H61.555V48.01H62.255ZM64.3602 48.58V51.19H67.0102V51.77H64.3602V54.42H67.3102V55H63.6602V48H67.3102V48.58H64.3602ZM70.6295 55.07C70.1694 55.07 69.7628 54.99 69.4094 54.83C69.0628 54.67 68.7894 54.4467 68.5894 54.16C68.3894 53.8733 68.2828 53.5533 68.2694 53.2H69.0094C69.0428 53.54 69.1928 53.84 69.4594 54.1C69.7261 54.3533 70.1161 54.48 70.6295 54.48C71.1028 54.48 71.4761 54.36 71.7494 54.12C72.0294 53.8733 72.1694 53.5633 72.1694 53.19C72.1694 52.89 72.0928 52.65 71.9394 52.47C71.7861 52.2833 71.5961 52.1467 71.3695 52.06C71.1428 51.9667 70.8294 51.8667 70.4294 51.76C69.9628 51.6333 69.5928 51.51 69.3194 51.39C69.0461 51.27 68.8128 51.0833 68.6194 50.83C68.4261 50.5767 68.3294 50.2333 68.3294 49.8C68.3294 49.44 68.4228 49.12 68.6094 48.84C68.7961 48.5533 69.0594 48.33 69.3994 48.17C69.7394 48.01 70.1294 47.93 70.5694 47.93C71.2161 47.93 71.7361 48.09 72.1295 48.41C72.5295 48.7233 72.7595 49.13 72.8195 49.63H72.0595C72.0128 49.3433 71.8561 49.09 71.5894 48.87C71.3228 48.6433 70.9628 48.53 70.5094 48.53C70.0894 48.53 69.7394 48.6433 69.4594 48.87C69.1794 49.09 69.0394 49.3933 69.0394 49.78C69.0394 50.0733 69.1161 50.31 69.2694 50.49C69.4228 50.67 69.6128 50.8067 69.8394 50.9C70.0728 50.9933 70.3861 51.0933 70.7794 51.2C71.2328 51.3267 71.5995 51.4533 71.8795 51.58C72.1594 51.7 72.3961 51.8867 72.5895 52.14C72.7828 52.3933 72.8794 52.7333 72.8794 53.16C72.8794 53.4867 72.7928 53.7967 72.6195 54.09C72.4461 54.3833 72.1895 54.62 71.8495 54.8C71.5094 54.98 71.1028 55.07 70.6295 55.07Z"
              fill="white"
            />
            <rect
              width="74"
              height="17"
              transform="translate(1 56)"
              fill="white"
            />
            <path
              d="M3.079 66.988H5.664V68H1.825V60.355H3.079V66.988ZM13.4887 60.355V68H12.2347V60.355H13.4887ZM28.7091 60.355V68H27.4551V62.764L25.1231 68H24.2541L21.9111 62.764V68H20.6571V60.355H22.0101L24.6941 66.35L27.3671 60.355H28.7091ZM37.1333 60.355V68H35.8793V60.355H37.1333ZM49.2407 60.355V61.378H47.2057V68H45.9517V61.378H43.9057V60.355H49.2407ZM57.2867 61.367V63.611H59.9267V64.634H57.2867V66.977H60.2567V68H56.0327V60.344H60.2567V61.367H57.2867ZM69.8202 60.355C70.6342 60.355 71.3455 60.5127 71.9542 60.828C72.5702 61.136 73.0432 61.5833 73.3732 62.17C73.7105 62.7493 73.8792 63.4277 73.8792 64.205C73.8792 64.9823 73.7105 65.657 73.3732 66.229C73.0432 66.801 72.5702 67.241 71.9542 67.549C71.3455 67.8497 70.6342 68 69.8202 68H67.3232V60.355H69.8202ZM69.8202 66.977C70.7149 66.977 71.4005 66.735 71.8772 66.251C72.3539 65.767 72.5922 65.085 72.5922 64.205C72.5922 63.3177 72.3539 62.6247 71.8772 62.126C71.4005 61.6273 70.7149 61.378 69.8202 61.378H68.5772V66.977H69.8202Z"
              fill="black"
            />
          </svg>
        </div>
        <div onClick={handleOpen} className="flex sm:hidden">
          <MenuBar />
        </div>
        <div className="sm:flex hidden space-x-16">
          {/* dropitem 1 */}
          <div className="dropdown">
            <button className="flex items-center">
              Products
              <svg
                width="12"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M13.6663 1.33333L6.99967 8L0.333008 1.33333L1.51634 0.150001L6.99967 5.63333L12.483 0.150001L13.6663 1.33333Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="dropdown-menu">
              <div className="whitespace-nowrap text-white">
                <h2>Digital</h2>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
          </div>
          {/* dropitem 1 */}
          <div className="dropdown">
            <button className="flex items-center">
              Solution
              <svg
                width="12"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M13.6663 1.33333L6.99967 8L0.333008 1.33333L1.51634 0.150001L6.99967 5.63333L12.483 0.150001L13.6663 1.33333Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="dropdown-menu">
              <div className="whitespace-nowrap text-white">
                <h2>Digital</h2>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
          </div>
          {/* dropitem 1 */}
          <div className="dropdown">
            <button className="flex items-center">
              Market Place
              <svg
                width="12"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M13.6663 1.33333L6.99967 8L0.333008 1.33333L1.51634 0.150001L6.99967 5.63333L12.483 0.150001L13.6663 1.33333Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="dropdown-menu">
              <div className="whitespace-nowrap text-white">
                <h2>Digital</h2>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
          </div>
          {/* dropitem 1 */}
          <div className="dropdown">
            <button className="flex items-center">
              Company
              <svg
                width="12"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M13.6663 1.33333L6.99967 8L0.333008 1.33333L1.51634 0.150001L6.99967 5.63333L12.483 0.150001L13.6663 1.33333Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="dropdown-menu">
              <div className="whitespace-nowrap text-white">
                <h2>Digital</h2>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
          </div>
          {/* dropitem 1 */}
          <div className="dropdown">
            <button className="flex items-center">
              Konet Mail
              <svg
                width="12"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M13.6663 1.33333L6.99967 8L0.333008 1.33333L1.51634 0.150001L6.99967 5.63333L12.483 0.150001L13.6663 1.33333Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="dropdown-menu">
              <div className="whitespace-nowrap text-white">
                <h2>Digital</h2>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
          </div>
          {/* dropitem 1 */}
          <div className="dropdown">
            <button className="flex items-center">
              Explore More
              <svg
                width="12"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M13.6663 1.33333L6.99967 8L0.333008 1.33333L1.51634 0.150001L6.99967 5.63333L12.483 0.150001L13.6663 1.33333Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="dropdown-menu">
              <div className="whitespace-nowrap text-white">
                <h2>Digital</h2>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
                <p>Lorem, ipsum.</p>
              </div>
            </div>
          </div>
        </div>
        {/* empty */}
        <div className="sm:flex hidden"></div>
      </nav>
      {open && <MobileSidebar handleOpen={handleOpen} />}
    </>
  );
};

export default NavbarDark;