import iphone from "../assets/images/Apple_gray_logo 1.png";
import heroPhone from "../assets/images/heroPhone.png";
const Hero = () => {
  return (
    <div className="flex pt-8 items-center justify-center">
      <div className="flex w-full md:max-w-[1170px] xl:max-w-[1170px] justify-between   relative  ">
        <div className="flex flex-col h-[310px]   ">
          <ul className="flex justify-  flex-col pl- pr-2 font-light gap-4  font-poppins text-base">
            <li className="flex items-center justify-between  w-52">
              <a href="">Woman's Fashion</a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </li>
            <li className="flex justify-between">
              <a href="">Men's Fashion</a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">Electronics</a>
            </li>
            <li>
              <a href="">Home & Lifestyle</a>
            </li>
            <li>
              <a href="">Medicine</a>
            </li>
            <li>
              <a href="">Sports & Outdoor</a>
            </li>
            <li>
              <a href="">Groceries &Toys</a>
            </li>
            <li>
              <a href="">Health & Beauty</a>
            </li>
          </ul>
        </div>
        <div className="h-[342px] w-px z-50 -bottom-0 left-60 bg-gray-300 absolute"></div>

        <div className="bg-black text-white flex flex-col justify-between items-center  pt-  w-[892px] h-[310px] ">
          <div className="flex bg- w-[892px]  justify-between items-center pl-16 pt-10">
            <div className="flex flex-col w-72 gap-5 mb-12  ">
              <span className="flex items-center gap-3">
                <img className="w-8" src={iphone} alt="" />
                <span>iPhone 14 Series</span>
              </span>
              <h4 className="font-poppins text-5xl leading-[60px] font-semibold">
                Up to 10% off Voucher
              </h4>
              <h4 className="flex gap-2 text-base font-poppins font-light">
                Shop Now{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </h4>
            </div>
            <img className=" w-[400px]  mr-10 " src={heroPhone} alt="" />
          </div>
          <div className=" bg-back w-full flex items-center justify-center mb- absolute top-[280px] gap-3">
            <span className="w-3 h-3 rounded-full bg-gray-500"></span>
            <span className="w-3 h-3 rounded-full bg-gray-500"></span>
            <span className="w-3 h-3 rounded-full bg-red-500 border border-white"></span>
            <span className="w-3 h-3 rounded-full bg-gray-500"></span>
            <span className="w-3 h-3 rounded-full bg-gray-500"></span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
