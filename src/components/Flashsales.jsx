const Flashsales = () => {
  return (
    <div className="flex justify-center items-center border border-red-300 mt-36">
      <section className="flex flex-col items- justify-center w-full xl:max-w-[1170px] md:max-w-[1170px] border">
        <div className="flex  xl:max-w-[600px] md:max-w-[600px] justify-between border">
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-4">
              <span className="w-5 h-10 bg-customred rounded-md "></span>
              <h3 className="font-poppins text-customred font-semibold">
                Today's
              </h3>
            </span>
            <h3 className="font-inter font-semibold text-4xl">Flash Sales</h3>
          </div>

          <div className="flex items-end justify-between gap- border">
            <span className="flex flex-col items- gap-1 mr-4 border">
              <h3 className="text-xs font-poppins font-medium">Days</h3>
              <h3 className="text-3xl font-inter font-bold">03</h3>
            </span>
            <h3 className="text-5xl text-custometimecolor mr-4 mb-1">:</h3>
            <span className="flex flex-col items-  gap-1 mr-4 border">
              <h3 className="text-xs font-poppins font-medium">Hours</h3>
              <h3 className="text-3xl font-inter font-bold">23</h3>
             
            </span>
            <h3 className=" text-5xl text-custometimecolor mr-4 mb-1">:</h3>
            <span className="flex flex-col items-star justify-between gap-1 mr-4 border">
              <h3 className="text-xs font-poppins font-medium">Minutes</h3>
              <h3 className="text-3xl font-inter font-bold">19</h3>
            </span>
            <h3 className="text-5xl text-custometimecolor mr-4 mb-1">:</h3>
            <span className="flex flex-col items- gap-1 border">
              <h3 className="text-xs font-poppins font-medium">Seconds</h3>
              <h3 className="text-3xl font-inter font-bold">56</h3>
            </span>
          </div>
        </div>

        <div className="w-58 h-58 border">hellp</div>
      </section>
    </div>
  );
};

export default Flashsales;
