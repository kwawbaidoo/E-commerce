import heart from '../assets/images/heart.png';
import cart from '../assets/images/Cart1.png';

const Navigation = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex md:max-w-[1170px] xl:max-w-[1170px] border gap-36 items-center">

        <span className="flex gap-48 w-full xl:max-w-[675px] border border-red-400">
          <h3 className='font-inter font-semibold text-2xl'>Exclusive</h3>

          <ul className="flex gap-12 font-poppins text-base items-center">
            <li>
              <a className='' href="">Home</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
          </ul>
        </span>

        <div className="flex justify-between w-[347px]">
          <span className='flex w-52 gap-5 justify-beteen bg-customgray  items-center border'>
            <input className=' w- py-2 outline-none bg-customgray pl-4 text-xs' type="text" placeholder='what are you looking for?'/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>

          <div className='flex gap-6 items-center'>
            <img className='w-5 h-5' src={heart} alt="" />
            <img className='w-6 h-6' src={cart} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navigation;
