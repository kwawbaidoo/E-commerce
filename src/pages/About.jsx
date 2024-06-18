import React from "react";
import sideimage from "..//assets/images/SideImage.png";
import kwawImage from "../assets/images/kwaw.jpg";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  let path = location.pathname.slice(1);
  let paths = path.charAt(0).toUpperCase() + path.slice(1);
  return (
    <div className="w-full  flex flex-col items-center">
      <div className="w-full xl:max-w-[1305px] ml-36 flex items-start">
        <h3>
          Home / <span className="text-customred">{paths}</span>
        </h3>
      </div>

      <div className="flex w-full xl:max-w-[1306px] gap-20 items-center ml-36 border">
            <div className="xl:max-w-[525px] ">
                <div className="flex flex-col gap-10">
                    <h3>Our Story</h3>
                    <span>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </span>
                </div>
            </div>

            <div>
                <img className="w-[705px] h-[609px]" src={sideimage} alt="" />
            </div>
      </div>
    </div>
  );
};

export default About;
