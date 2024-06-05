import iphone from '../assets/images/Apple_gray_logo 1.png';
import heroPhone from '../assets/images/heroPhone.png'
const Hero = () => {
  return (
    <div className="flex pt-10 items-center justify-center">
      <div className="flex w-full md:max-w-[1170px] xl:max-w-[1170px] justify-between bg-red-300">
        <div className="flex flex-col">
          <ul className="flex flex-col pl-4 pr-2 font-light gap-4 font-poppins text-base border border-l-0 border-t-0 border-b-0">
            <li className="flex items-center justify-between  w-52">
              <a href="">Woman's Fashion</a>
              <a href=""><svg
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
              </svg></a>
            </li>
            <li className="flex justify-between">
              <a href="">Men's Fashion</a>
              <a href=""><svg
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
              </svg></a>
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
        <div className="bg-black text-white flex w-[892px] justify-between items-center border">
          <div className="flex">
            <div className="flex flex-col">
              <span className='flex items-center gap-6'>
                <img className='w-10' src={iphone} alt="" />
                <span>iPhone 14 Series</span>
              </span>
              <h4>Up to 10% off Voucher</h4>
              <h4>shop Now</h4>
            </div>
            <img src={heroPhone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
