import { LightNavbar, ProductPreview } from "@components/light";
import { ArrowRight } from "icons";

function LightDesign() {
  const products = [
    {
      icon: "/icons/cloud-computing.svg",
      name: "Digital Infrastructure",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/power-lighting.svg",
      name: "Power",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/credit-card.svg",
      name: "Payment",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/baseline-call.svg",
      name: "Communication",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/group.svg",
      name: "People",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/computer.svg",
      name: "Digital Platform",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
    {
      icon: "/icons/globe.svg",
      name: "Konet Space",
      snippet:
        "Lorem ipsum dolor sit amet consectetur. Blandit dui mi pretium sed eu amet eget sit.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-full min-h-screen flex flex-col overflow-x-hidden">
      <LightNavbar />
      <div className="flex items-center w-full h-full px-20 flex-grow largeTablet:mt-10 largeTablet:flex-wrap tablet:px-10 phone:px-5">
        <div className="w-full h-full relative flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-lato font-black whitespace-pre-wrap largeTablet:text-6xl phone:text-4xl">
              <span className="text-primary-orange">Innovative</span> Solutions
              for all Communication Needs
            </h1>
            <p className="text-2xl mt-6 largeTablet:text-xl phone:text-lg">
              We provide cutting edge infrastructures and a wide range of
              services to meet all communication and payment needs
            </p>
          </div>
          <div className="absolute w-full h-full bg_gradient_l smallTablet:top-40"></div>
        </div>
        <div className="w-full h-full min-w-[50%] relative">
          <div className="absolute w-full h-full bg_gradient_r largeTablet:hidden"></div>
          <div className="h-full flex justify-center -mt-10 mx-auto largeTablet:mt-14 mb-20">
            <div className="flex">
              <div className="hexagon-container">
                <div className="hex-wrapper relative p-[1px]">
                  <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                    <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                      <img
                        src="/icons/tree-structure.svg"
                        className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="hex-wrapper relative p-[1px]">
                  <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                    <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                      <img
                        src="/icons/setting.svg"
                        className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="hex-wrapper relative p-[1px]">
                  <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                    <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                      <img
                        src="/icons/group.svg"
                        className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="hex-wrapper relative p-[1px]">
                  <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                    <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                      <img
                        src="/icons/arrow-rotate.svg"
                        className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="hex-wrapper relative p-[1px]">
                  <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                    <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                      <img
                        src="/icons/baseline-call.svg"
                        className="w-[90px] h-[90px] largeTablet:w-[70px] largeTablet:h-[70px] tablet:w-[50px] tablet:h-[50px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="hex-wrapper relative p-[1px]">
                  <div className="absolute hex-shape w-full h-full bg-white dark:!bg-gray-900">
                    <div className="hex-shape w-full h-full flex items-center justify-center bg-primary-orange-light !m-0">
                      <img
                        src="/icons/credit-card.svg"
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
      <div className="flex items-center justify-center gap-5 px-20 py-5 mt-16 largeTablet:flex-wrap tablet:px-10 tablet:grid-cols-4 phone:px-5">
        {products.map((product) => (
          <div
            key={product.name}
            className="group relative min-w-[132px] tablet:min-w-[100px] !transition-all"
          >
            <div className="absolute min-w-[160px] -left-7 bottom-28 transition-all duration-300 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100">
              <div className="rounded-lg rainbow-bg p-px">
                <div className="rounded-lg p-5 bg-white dark:bg-black">
                  <p className="font-semibold">{product.name}</p>
                  <p className="mt-3">{product.snippet}</p>
                  <a className="mt-3 flex" href={product.link}>
                    See more <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pt-5">
              <div className="h-24 min-w-[6rem] rounded-full shadow group-hover:shadow-lg cursor-pointer flex items-center justify-center border bg-gray-100 bg-opacity-50 dark:bg-black dark:bg-opacity-10">
                <img src={product.icon} className="h-12 w-auto tablet:h-8" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col fixed p-2 left-0 space-y-4 top-1/2 rounded-r bg-white tablet:hidden">
        <img className="cursor-pointer" src="/icons/whatsapp.png" />
        <img className="cursor-pointer" src="/icons/instagram.png" />
        <img className="cursor-pointer" src="/icons/phone.png" />
        <img className="cursor-pointer" src="/icons/linkedin.png" />
      </div>
    </div>
  );
}

export default LightDesign;
