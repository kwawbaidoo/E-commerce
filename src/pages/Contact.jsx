const Contact = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col xl:max-w-[1170px] lg:max-w-[1170px] md:max-w-[1170px] gap-20">
        <div>
          <h3>Home / Contact</h3>
        </div>
        <div className="flex gap-8">
        <div className="flex gap-8">
          <div className="flex flex-col w-[340px] h-[4567px] bg-white rounded-md px-9 py-10 shadow-lg">
            <div className="flex flex-col gap-8">
              <span className="flex flex-col gap-6 border">
                <h3 className="flex gap-4 items-center ">
                    <span className="flex w-10 h-10 rounded-full bg-customred items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                   <h4>Call to us</h4>
                </h3>

                <span className="flex flex-col gap-4">
                  <h3>We are available 24/7, 7 days a week.</h3>
                  <h3>Phone: +233 201236413</h3>
                </span>
              </span>
              <hr className="border" />
              <div className="flex flex-col gap-6 border">
                <h3 className="flex gap-4 items-center">
                    <span className="flex w-10 h-10 rounded-full bg-customred items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  </span>
                  <h4>Write to us</h4>
                </h3>
                <div className="flex flex-col gap-4">
                    <h4>Fill out our form and we will contact you within 24 hours.</h4>
                    <h4>Emails: customer@exclusive.com</h4>
                    <h4>Emails: support@exclusive.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[800px] h-[457px] flex py-10 px-8 shadow-md">
                <div className="flex gap-4">
                    <input type="text" placeholder="Your name" />
                </div>

                <div class="flex items-center space-x-2">
        <label for="name" class="text-gray-700">Your name <span class="text-red-500">*</span></label>
        <input id="name" type="text" placeholder="Your name" class="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
