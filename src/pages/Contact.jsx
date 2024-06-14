const Contact = () => {
  return (
    <div>
      <div className="flex flex-col xl:max-w-[1170px] lg:max-w-[1170px] md:max-w-[1170px] gap-20">
        <div>
          <h3>Home / Contact</h3>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col w-[340px] h-[4567px] bg-white rounded-md px-9 py-10">
            <div>
              <span>
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 w-10 h-10 rounded-full items-center justify-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  Call to us
                </h3>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
