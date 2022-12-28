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
        {/* <img className="cursor-pointer" src="/icons/whatsapp.png" />
        <img className="cursor-pointer" src="/icons/instagram.png" />
        <img className="cursor-pointer" src="/icons/phone.png" />
        <img className="cursor-pointer" src="/icons/linkedin.png" /> */}

        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Black" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </div>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Black" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </div>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Black" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
        </div>
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="Black" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LightDesign;
