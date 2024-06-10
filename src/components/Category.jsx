import phone from "../assets/images/CellPhone.png";
import camera from "../assets/images/Camera.png";
import computer from "../assets/images/Computer.png";
import gamePad from "../assets/images/Gamepadd.png";
import smartwatch from "../assets/images/SmartWatch.png";
import headphone from "../assets/images/Headphone.png";

const Category = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex gap-16 flex-col mt-20 w-full xl:max-w-[1170px] md:max-w-[1170px] lg:max-w-[1170px] ">
        <div className=" flex justify-between items-end">
          <div className=" flex flex-col gap-5 ">
            <span className="flex gap-4 items-center">
              <span className="w-5 h-10 bg-customred rounded-md"></span>
              <span className="font-poppins text-base font-semibold text-customred">
                categories
              </span>
            </span>
            <h3 className="font-inter font-semibold text-4xl text-black">
              Browse By Category
            </h3>
          </div>
          <div className="flex gap-2">
            <span className=" w-12 h-12 rounded-full flex items-center justify-center bg-customgray">
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
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </span>
            <span className="w-12 h-12 rounded-full flex items-center justify-center bg-customgray">
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
            </span>
          </div>
        </div>
        <div className=" flex gap-8">
          <div className="flex gap-4 items-center justify-center flex-col w-44 h-36 rounded-md border">
            <img src={phone} alt="" />
            <span>Phones</span>
          </div>
          <div className="flex gap-4 items-center justify-center flex-col w-44 h-36 rounded-md border">
            <img src={computer} alt="" />
            <span>Computers</span>
          </div>
          <div className="flex gap-4 items-center justify-center flex-col w-44 h-36 rounded-md border">
            <img src={smartwatch} alt="" />
            <span>SmartWatch</span>
          </div>
          <div className="flex text-white gap-4 items-center justify-center flex-col w-44 h-36 rounded-md bg-customred border">
            <img src={camera} alt="" />
            <span>Camera</span>
          </div>
          <div className="flex gap-4 items-center justify-center flex-col w-44 h-36 rounded-md border">
            <img src={headphone} alt="" />
            <span>HeadPhones</span>
          </div>
          <div className="flex gap-4 items-center justify-center flex-col w-44 h-36 rounded-md border">
            <img src={gamePad} alt="" />
            <span>Gaming</span>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <hr className="w-[1170px] border " />
        </div>
      </div>
    </section>
  );
};

export default Category;
