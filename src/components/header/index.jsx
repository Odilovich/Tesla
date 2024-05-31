import { NavLink } from "react-router-dom";
import { Container } from "../containers";
import Logo from "../../assets/images/logo.svg";
import "./style.scss";

const index = () => {
  return (
    <header className="">
      <Container>
        <nav className="flex items-center justify-between h-[80px]">
          <NavLink to="#">
            <img src={Logo} alt="logo" />
          </NavLink>
          <ul className="flex items-center gap-[30px] ml-[180px]">
            <li className="text-[#fff] border-2 border-transparent font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeModelS text-white font-medium text-[16px]"
                    : "text-white font-medium text-[16px]"
                }
                to="/"
              >
                Model S
              </NavLink>
            </li>
            <li className="text-[#fff] border-2 border-transparent font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeModel3 text-white font-medium text-[16px]"
                    : "text-white font-medium text-[16px]"
                }
                to="/model3"
              >
                Model 3
              </NavLink>
            </li>
            <li className="text-[#fff] border-2 border-transparent font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeModelX text-white font-medium text-[16px]"
                    : "text-white font-medium text-[16px]"
                }
                to="/modelX"
              >
                Model X
              </NavLink>
            </li>
            <li className="text-[#fff] border-2 border-transparent font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeModelY text-white font-medium text-[16px]"
                    : "text-white font-medium text-[16px]"
                }
                to="/modelY"
              >
                Model Y
              </NavLink>
            </li>
            <li className="text-[#fff] border-2 border-transparent font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeSolarRoof text-white font-medium text-[16px]"
                    : "text-white font-medium text-[16px]"
                }
                to="/solar-roof"
              >
                Solar Roof
              </NavLink>
            </li>
            <li className="text-[#fff] border-2 border-transparent font-medium">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "activeModelY text-white font-medium text-[16px]"
                    : "text-white font-medium text-[16px]"
                }
                to="/solar-panels"
              >
                Solar Panels
              </NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-[40px]">
            <label className="flex items-center w-[174px] pl-[25px]  gap-[25px] bg-[#f4fbff1a] py-[10px] rounded-[85px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 0C13.9706 0 18 4.02944 18 9C18 11.1248 17.2637 13.0776 16.0323 14.6172L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L14.6172 16.0323C13.0776 17.2637 11.1248 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <input
                className="bg-transparent font-medium  outline-none text-[#fff] w-[80px]"
                type="text"
                placeholder="Search"
              />
            </label>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g filter="url(#filter0_b_2990_332)">
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    fill="#F4FBFF"
                    fill-opacity="0.1"
                  />
                </g>
                <path
                  d="M11 28.5C11 28.9602 11.3727 29.3333 11.8333 29.3333C12.2939 29.3333 12.6667 28.9602 12.6667 28.5C12.6667 25.5593 14.3596 22.9559 16.9984 21.7248C17.9116 22.3183 18.998 22.6667 20.1659 22.6667C21.3381 22.6667 22.4287 22.3159 23.3441 21.7183C24.1318 22.0901 24.8618 22.5905 25.4694 23.1977C26.8862 24.6149 27.6667 26.498 27.6667 28.5C27.6667 28.9602 28.0394 29.3333 28.5 29.3333C28.9606 29.3333 29.3333 28.9602 29.3333 28.5C29.3333 26.0529 28.3796 23.7515 26.6478 22.0193C26.0683 21.4395 25.3948 20.9424 24.6723 20.5325C25.5008 19.5251 25.9992 18.2364 25.9992 16.8333C25.9992 13.6168 23.382 11 20.1659 11C16.9497 11 14.3325 13.6168 14.3325 16.8333C14.3325 18.233 14.8289 19.5185 15.6537 20.5249C12.7931 22.1355 11 25.1448 11 28.5ZM20.1659 12.6667C22.4632 12.6667 24.3325 14.536 24.3325 16.8333C24.3325 19.1307 22.4632 21 20.1659 21C17.8685 21 15.9992 19.1307 15.9992 16.8333C15.9992 14.536 17.8685 12.6667 20.1659 12.6667Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_b_2990_332"
                    x="-500"
                    y="-500"
                    width="1040"
                    height="1040"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="250"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2990_332"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2990_332"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g filter="url(#filter0_b_2990_320)">
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    fill="#F4FBFF"
                    fill-opacity="0.1"
                  />
                </g>
                <path
                  d="M27 26H13C12.4477 26 12 25.5523 12 25C12 24.4477 12.4477 24 13 24H27C27.5523 24 28 24.4477 28 25C28 25.5523 27.5523 26 27 26Z"
                  fill="white"
                />
                <path
                  d="M27 21H13C12.4477 21 12 20.5523 12 20C12 19.4477 12.4477 19 13 19H27C27.5523 19 28 19.4477 28 20C28 20.5523 27.5523 21 27 21Z"
                  fill="white"
                />
                <path
                  d="M27 16H13C12.4477 16 12 15.5523 12 15C12 14.4477 12.4477 14 13 14H27C27.5523 14 28 14.4477 28 15C28 15.5523 27.5523 16 27 16Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_b_2990_320"
                    x="-500"
                    y="-500"
                    width="1040"
                    height="1040"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="250"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2990_320"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2990_320"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default index;
