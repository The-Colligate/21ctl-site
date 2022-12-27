import { CaretDown } from "icons";

export function LightNavbar() {
  return (
    <div className="flex justify-between items-center py-3 px-20 font-lato">
      <img src="/light-logo.svg" />

      <ul className="flex space-x-5">
        <li>
          <a href="#" className="flex items-center">
            Products <CaretDown className="ml-1" />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            Solutions <CaretDown className="ml-1" />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            Market Place <CaretDown className="ml-1" />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            Company <CaretDown className="ml-1" />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            Konet Mail <CaretDown className="ml-1" />
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center">
            Explore More <CaretDown className="ml-1" />
          </a>
        </li>
      </ul>

      <button>Light Mode</button>
    </div>
  );
}
