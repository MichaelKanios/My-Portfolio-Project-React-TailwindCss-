import { CometCard } from "../components/ui/comet-card";

const Contact = () => {
  return (
    <>
      <h1 id="contact" className="titlesmini">
        Contact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-6 mb-20 gap-10 font-monts m-2">
        {/* Left Column */}
        <div className="dark:bg-slate-600 dark:text-white bg-stone-100 drop-shadow-xl rounded-lg col-span-4 md:col-span-2 p-4 text-center">
          <CometCard>
            <button
              type="button"
              className="my-6 flex w-full max-w-md md:max-w-l xl:max-w-xl cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-"
              aria-label="View invite F7RA"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
            >
              <div className="mx-2 flex-1">
                <div className="relative aspect-[3/4] w-full  ">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] object-cover contrast-90"
                    alt="Invite background"
                    src="images/Let_s talk.jpg"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <div className="text-xs">...put your cursor here </div>
            </button>
          </CometCard>

          <h3 className="font-semibold text-base md:text-lg xl:text-lg my-3">
            Kanios Michael
          </h3>
          <p className="italic">
            I am available for freelance work. <br />
            You can contact me via email, LinkedIn <br />
            or just by filling the form.
          </p>

          <div className="flex my-4 justify-center">
            <img
              className="w-8 md:w-10"
              src="images/receive-mail.png"
              alt="Email"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:mkanios77@gmail.com"
              className="pl-2 xl:pl-3 hover:underline ease-in-out duration-200 hover:text-black self-center hover:scale-110"
            >
              Email
            </a>
          </div>

          <div className="flex justify-center">
            <img
              className="w-8 md:w-10"
              src="images/linkedin.png"
              alt="LinkedIn"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kaniosmichael/"
              className="pl-2 xl:pl-3 hover:underline ease-in-out duration-200 hover:text-black self-center hover:scale-110"
            >
              Kanios Michael
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="mt-10 md:mt-0  dark:bg-slate-400 dark:text-white drop-shadow-2xl col-span-4 bg-stone-100 rounded-xl">
          <div className="text-center">
            <h2 className="font-semibold text-base md:text-xl xl:text-xl mt-8">
              Let's talk
            </h2>
            <p className="italic text-base">
              "I love talking about how I can help you"
            </p>
          </div>

          {/* Form */}
          <form
            className="dark:bg-slate-600 dark:text-white p-4"
            action="https://formsubmit.co/kanios.michael@gmail.com"
            method="POST"
          >
            <div>
              <label className="font-semibold" htmlFor="your-name">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="border-b-4 rounded-lg py-2 w-full"
              />
            </div>

            <div className="mt-4">
              <label className="font-semibold" htmlFor="email">
                Your Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="border-b-4 rounded-lg py-2 w-full"
              />

              <label className="font-semibold mt-4 block" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="border-b-4 rounded-lg py-2 w-full"
              />

              <label className="font-semibold mt-4 block" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                required
                placeholder="Your message..."
                className="border-b-4 rounded-lg w-full italic py-2"
              ></textarea>

              <button
                type="submit"
                className="mt-5 ease-in-out duration-300 bg-red-400 hover:bg-stone-800 text-white rounded-lg text-lg w-full text-center py-4"
              >
                Send Message
              </button>

              <p className="italic text-sm pt-2">
                *I will never send you spam emails
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
