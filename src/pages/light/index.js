import { LightNavbar } from "@components/layout/";
import { ArrowRight } from "@icons/index";
import { Popover } from "evergreen-ui";

function LightDesign() {
  const products = [
    {
      icon: "/icons/home/cloud-computing.svg",
      name: "Digital Infrastructure",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/home/power-lighting.svg",
      name: "Power",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/home/credit-card.svg",
      name: "Payment",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/home/baseline-call.svg",
      name: "Communication",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/home/group.svg",
      name: "People",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/home/computer.svg",
      name: "Digital Platform",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/home/globe.svg",
      name: "Konet Space",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden relative">
      <div className="absolute w-full h-full flex justify-between items-center">
        <div className="w-full min-h-[50%] bg_gradient_l"></div>
        <div className="w-full min-h-[50%] bg_gradient_r"></div>
      </div>
      <div className="w-full min-h-screen overflow-y-auto flex flex-col z-[1]">
        <LightNavbar />
        <div className="flex items-center w-full h-full px-20 flex-grow largeTablet:mt-10 largeTablet:flex-wrap phone:flex-grow-0 tablet:px-10 tablet:mt-10 smallTablet:px-5">
          <div className="w-full h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-7xl font-lato font-black whitespace-pre-wrap largeTablet:text-6xl tablet:text-5xl smallTablet:text-4xl">
                <span className="text-primary-orange">Innovative</span>{" "}
                Solutions for all Communication Needs
              </h1>
              <p className="text-2xl mt-6 largeTablet:text-xl smallTablet:text-lg">
                We provide cutting edge infrastructures and a wide range of
                services to meet all communication and payment needs
              </p>
            </div>
          </div>
          <div className="w-full h-full min-w-[50%]">
            <div className="h-full flex justify-center -mt-10 mx-auto largeTablet:mt-14 smallTablet:mt-8 phone:mt-6 mb-20">
              <div className="flex">
                <div className="hexagon-container">
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/tree-structure.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/setting.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/group-large.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/arrow-rotate.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/baseline-call-large.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hex-wrapper relative p-[1px]">
                    <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                      <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                        <img
                          src="/icons/home/credit-card-large.svg"
                          className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between max-w-full gap-12 overflow-x-auto px-20 py-5 mt-16  tablet:px-10 tablet:grid-cols-4 tablet:bg-gradient-to-b tablet:from-transparent tablet:to-gray-400 tablet:dark:!bg-none smallTablet:px-10 phone:mt-auto phone:py-10">
          {products.map((product) => {
            return (
              <Popover
                key={product.name}
                statelessProps={{
                  className: "!p-0 !min-w-[170px] !rounded-lg",
                }}
                trigger="click"
                content={
                  <div className="rounded-lg rainbow-bg p-px max-w-[170px] mx-auto">
                    <div className="rounded-lg p-5 text-sm bg-white dark:bg-black">
                      <p>{product.name}</p>
                      <p className="mt-3 text-xs opacity-60">
                        {product.snippet}
                      </p>
                      <a
                        className="mt-3 flex items-center text-xs group hover:text-primary-orange"
                        href={product.link}
                      >
                        See more{" "}
                        <ArrowRight className="transition-all duration-500 ml-1 group-hover:ml-2" />
                      </a>
                    </div>
                  </div>
                }
              >
                <div
                  className="animate__animated animate__heartBeat animate__duration-0.8 animate__infinite	infinite h-24 min-w-[6rem] rounded-full shadow cursor-pointer flex items-center justify-center border bg-white bg-opacity-60 dark:bg-black dark:bg-opacity-10 tablet:h-16 tablet:min-w-[4rem]"
                  role="button"
                >
                  <img src={product.icon} className="h-12 w-auto tablet:h-8" />
                </div>
              </Popover>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col fixed z-[1] p-2 left-0 space-y-4 top-1/3 rounded-r bg-white tablet:hidden">
        <img className="cursor-pointer w-6" src="/icons/home/whatsapp.svg" />
        <img className="cursor-pointer w-6" src="/icons/home/instagram.svg" />
        <img className="cursor-pointer w-6" src="/icons/home/phone.svg" />
        <img className="cursor-pointer w-6" src="/icons/home/linkedin.svg" />
      </div>
    </div>
  );
}

export default LightDesign;
