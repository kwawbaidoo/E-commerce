import React from "react";
import sideimage from "..//assets/images/SideImage.png";
import kwawImage from "../assets/images/kwaw.png";
import { useLocation } from "react-router-dom";
import shop from "../assets/icons/shop.png";
import Sale from "../assets/icons/Sale.png";
import Shoppingbag from "../assets/icons/Shopping bag.png";
import moneybag from "../assets/icons/Moneybag.png";
import richmond from "../assets/images/Richmond.jpg";

const About = () => {
  const data = [
    { icon:  shop , number: 5, details: "Sallers active on our site" },
    {icon: Sale, number: 33, details: "Monthly monthly Sale"},
    { icon: Shoppingbag, number: 5, details: "Customers active on our site" },
    { icon: moneybag, number: 5, details: "Anual gross sale in our site" },
  ];

  const team =[
    {image : richmond, name: "Richmond Forkuo Afram", role:"Product Designer",linkOne:"link1", linkTwo:"link2", linkThree:"link3"},
    {image : kwawImage, name: "Francis Baidoo", role:"Managing Director",linkOne:"link1", linkTwo:"link2", linkThree:"link3"}

  ]

//   <i class='bx bx-dollar'></i>
//   <i class='bx bx-store-alt' ></i>
  console.log(data);

  const location = useLocation();
  let path = location.pathname.slice(1);
  let paths = path.charAt(0).toUpperCase() + path.slice(1);
  return (
    <div className="w-full flex flex-col items-center">
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
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </span>
          </div>
        </div>

        <div>
          <img className="w-[705px] h-[609px]" src={sideimage} alt="" />
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-36">
      <div className="w-full xl:max-w-[1170px] md:max-[1170px] lg:max-w-[1170px] flex gap-8 ">
            
            {data.map((item, key)=>(

            <div key={key} className="border w-[270px] h-[230px] rounded-[4px] flex items-center justify-center hover:bg-customred hover:text-white">
                <div className="flex flex-col gap-6 items-center justify-center">
                <span className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="flex w-14 h-14 rounded-full bg-black hover:bg-white items-center justify-center">
                            <img src={item.icon} alt="" />
                    </span>
                </span>

                <div className="flex flex-col gap-3 items-center justify-center">
                    <span>{item.number}<span>k</span></span>
                    <h5>{item.details}</h5>
                </div>
                </div>

            </div>
            ))}
      </div>

     

      </div>
      <div className="flex mt-36 gap-20 w-full items-center justify-center border">
        <div className="flex flex-col w-[236px] h-[564px] border">

                <div className="w-[236px] h-[321px] bg-teambg rounded-lg shadow-lg">
                <img className="w-[236px] h-[321px]" src={kwawImage} alt="" />
                </div>
        <span className="flex flex-col gap-4">
            <span className="flex flex-col gap-2">
            <h3>name</h3>
            <h3>Role</h3>
            </span>
            <span className="flex gap-4">
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
            </span>
        </span>
            
        </div>

        
       
      </div>
    </div>
  );
};

export default About;
