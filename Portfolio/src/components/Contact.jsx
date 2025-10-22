import { CometCard } from "../components/ui/comet-card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import emailjs from "emailjs-com";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Στέλνουμε email μέσω EmailJS
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      setSuccessMessage("Message sent successfully! ✅");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSuccessMessage("Something went wrong ❌");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };
  return (
    <>
      <h1 id="contact" className="titlesmini">
        Contact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-6 mb-20 gap-10 font-monts m-2">
        {/* Left Column */}
        <div className=" glass drop-shadow-xl rounded-lg col-span-4 md:col-span-2 p-4 text-center">
          <CometCard>
            <button
              type="button"
              className="my-6 flex w-full max-w-md md:max-w-l xl:max-w-xl cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2"
              aria-label="View invite F7RA"
            >
              <div className="mx-2 flex-1">
                <div className="relative aspect-[3/4] w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] object-cover contrast-90"
                    alt="Invite background"
                    src="./images/Contact.png"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                    }}
                  />
                </div>
              </div>
              <div className="text-xs">...put your cursor here</div>
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
        <div className="mt-10 md:mt-0 drop-shadow-2xl col-span-4  rounded-xl glass">
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
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="font-semibold" htmlFor="your-name">
                Your Name
              </label>
              <input
                {...register("name")}
                className="border-b-4 rounded-lg py-2 w-full"
              />
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
            </div>

            <div className="mt-4">
              <label className="font-semibold" htmlFor="email">
                Your Email*
              </label>
              <input
                className="border-b-4 rounded-lg py-2 w-full"
                {...register("email")}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}

              <label className="font-semibold mt-4 block" htmlFor="subject">
                Subject
              </label>
              <input
                {...register("subject")}
                className="border-b-4 rounded-lg py-2 w-full"
              />

              <label className="font-semibold mt-4 block" htmlFor="message">
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows="8"
                placeholder="Your message..."
                className="border-b-4 rounded-lg w-full italic py-2"
              />
              {errors.message && (
                <p style={{ color: "red" }}>{errors.message.message}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`mt-5 ease-in-out duration-300 rounded-lg text-lg w-full text-center py-4 text-white ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-400 hover:bg-stone-800"
                }`}
              >
                Send Message
              </button>
              {successMessage && (
                <p className="text-green-600 font-semibold mt-3 text-center">
                  {successMessage}
                </p>
              )}
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
