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
    <div className="w-full min-h-screen flex flex-col">
      <LightNavbar />
      <div className="grid grid-cols-2 w-full h-full px-20 flex-grow">
        <div className="w-full h-full relative flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-7xl font-lato font-black">
              <span className="text-primary-orange">Innovative</span> Solutions
              for all Communication Needs
            </h1>
            <p className="text-2xl mt-6">
              We provide cutting edge infrastructures and a wide range of
              services to meet all communication and payment needs
            </p>
          </div>
          <div className="absolute w-full h-full bg_gradient_l"></div>
        </div>
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full bg_gradient_r"></div>
          <div className="w-full h-full flex items-center justify-center">
            <img src="/test-polygon-grid.png" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-5 items-center justify-between px-20 py-10 space-x-5">
        {products.map((product) => (
          <div
            key={product.name}
            className="group relative w-full !transition-all"
          >
            <div className="absolute -top-52 transition-all duration-300 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100">
              <div className="rounded-lg rainbow-bg p-px">
                <div className="rounded-lg p-5 bg-white">
                  <p className="font-semibold">{product.name}</p>
                  <p className="mt-3">{product.snippet}</p>
                  <a className="mt-3 flex" href={product.link}>
                    See more <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pt-5">
              <div className="h-24 w-24 rounded-full shadow-lg cursor-pointer flex items-center justify-center border bg-[#FFFFFF66]">
                <img src={product.icon} className="h-12 w-auto" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LightDesign;
