import gamepad from "../assets/images/gamePad.png";
import heart from "../assets/images/heart.png";
import view from "../assets/images/view.png";
const Flashsales = () => {
  return (
    <div className="flex justify-center items-center border border-red-300 mt-36">
      <section className="flex flex-col gap-10 items- justify-center w-full xl:max-w-[1170px] md:max-w-[1170px] ">
        <div className="flex  xl:max-w-[600px] md:max-w-[600px] justify-between ">
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-4">
              <span className="w-5 h-10 bg-customred rounded-md "></span>
              <h3 className="font-poppins text-customred font-semibold">
                Today's
              </h3>
            </span>
            <h3 className="font-inter font-semibold text-4xl">Flash Sales</h3>
          </div>

          <div className="flex items-end justify-between gap- ">
            <span className="flex flex-col items- gap-1 mr-4 ">
              <h3 className="text-xs font-poppins font-medium">Days</h3>
              <h3 className="text-3xl font-inter font-bold">03</h3>
            </span>
            <h3 className="text-5xl text-custometimecolor mr-4 mb-1">:</h3>
            <span className="flex flex-col items-  gap-1 mr-4 ">
              <h3 className="text-xs font-poppins font-medium">Hours</h3>
              <h3 className="text-3xl font-inter font-bold">23</h3>
            </span>
            <h3 className=" text-5xl text-custometimecolor mr-4 mb-1">:</h3>
            <span className="flex flex-col items-star justify-between gap-1 mr-4 ">
              <h3 className="text-xs font-poppins font-medium">Minutes</h3>
              <h3 className="text-3xl font-inter font-bold">19</h3>
            </span>
            <h3 className="text-5xl text-custometimecolor mr-4 mb-1">:</h3>
            <span className="flex flex-col items- gap-1 ">
              <h3 className="text-xs font-poppins font-medium">Seconds</h3>
              <h3 className="text-3xl font-inter font-bold">56</h3>
            </span>
          </div>
        </div>

        <div className="w-[270px] h-[350px] border ">
          <div className=" flex w-[270px] h-[250px] p-3 bg-customgray  justify-center rounded-md">
            <h4 className="w-14 h-7 rounded-md bg-customred text-white items-center flex justify-center text-xs font-poppins">
              -40%
            </h4>
            <img
              className="w-[172px] h-[152px] -ml-5 mt-10  "
              src={gamepad}
              alt=""
            />
            <span className=" flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img className="" src={heart} alt="" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img src={view} alt="" />
              </span>
            </span>
          </div>
         <div className="flex flex-col gap-2 mt-2">
         <p>HAVIT HV-G92 Gamepad</p>
          <div className="flex gap-2">
            <span>$120</span>
            <span className="line-through">$160</span>
          </div>
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFAD33"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="starColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFAD33"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="starColor"
              className="size-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFAD33"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="starColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFAD33"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="starColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFAD33"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="starColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            (88)
          </span>
         </div>
        </div>
      </section>
    </div>
  );
};

export default Flashsales;
