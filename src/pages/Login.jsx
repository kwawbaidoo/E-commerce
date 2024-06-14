
import { Link } from "react-router-dom";
import market from "../assets/images/marketpng.png"
const Login =()=>{
    return(
        <div>
             <div className="w-full flex gap-[129px] items-center xl:max-w-[1305px] lg:max-w-[1305px] md:max-w-[1305px] mt-16 ">
        <div className="bg-customseablue w-[805px] h-[781px] flex items-end justify-center">
          <img src={market} alt="" />
        </div>
        <div className="w-[371px] h-[530px] flex flex-col gap-12">
          <span className="flex flex-col gap-6">
            <h3 className="font-inter font-medium text-4xl text-black">
              Log in to Exclusive
            </h3>
            <h3 className="font-poppins font-normal text-base">
              Enter your details below
            </h3>
          </span>
          <span className="flex flex-col gap-10">
            
            <input
              className="h-8  border-b-2 outline-none"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              className="h-8  border-b-2 outline-none"
              type="password"
              placeholder="Password"
            />
          </span>
          <span className="flex justify-between items-center">
            <button className="flex items-center justify-center w-36 bg-customred h-14 rounded-md text-white text-base font-poppins font-medium">
              Log in
            </button>
            <h4 className="text-customred font-poppins text-base font-light">Forget Password</h4>
          </span>
          <span className="flex gap-4 items-center justify-center">
          <h3 className="font-popins font-normal text-base">Already have an acoount?</h3>
          <h3 className="font-poppins font-medium text-base">
            <Link to="/login">Log in</Link>
            </h3>

          </span>
        </div>
      </div>
        </div>
    )
}

export default Login;