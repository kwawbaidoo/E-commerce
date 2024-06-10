import phone from "../assets/images/Cellphone.png";
import camera from "../assets/images/Camera.png";
import computer from "../assets/images/Computer.png";
import gamePad from "../assets/images/Gamepadd.png";
import headphone from "../assets/images/Headphone.png"


const Category = () => {
  return (
    <section className="flex justify-center xl:max-w-[1170px]">
      <div className="flex w-full xl:max-w-[1170px] md:max-w-[1170px] lg:max-w-[1170px]">
        <div>
          <div>
          <span>
            <span></span>
            <span>categories</span>
          </span>
          <h3>Browse By Category</h3>
          </div>
          <div>
            <span>
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
            <span>
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

        <div>

            <div>
                <img src={} alt="" />
                <span></span>
            
            </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
