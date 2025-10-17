import frontendmentor from "./frontendmentorData.json";
import { SiFrontendmentor } from "react-icons/si";
const Frontendmentor = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content1" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 cursor-pointer"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="inline-flex items-center justify-center mr-2 w-10 h-10 rounded-full bg-rose-400 text-neutral-700 hover:bg-neutral-200 transition">
                <SiFrontendmentor className="text-xl" />
              </span>
              <span className="font-bold text-neutral-700">
                Completed 16 + (The legend continues…) frontend projects on
                Frontend Mentor
              </span>{" "}
              , focusing on responsive layouts, semantic HTML, and clean,
              maintainable CSS. Some challenges were styled with Tailwind CSS,
              exploring modern utility-first design principles. Each project
              helped refine my frontend skills and attention to visual and
              structural detail.
            </p>
            <div className="flex justify-center ">
              <a
                href="https://www.frontendmentor.io/profile/MichaelKanios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block all_button transition m-4 text-m md:text-xl"
              >
                Profile
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {frontendmentor.map((pro) => (
                <div key={pro.id} className="text-center">
                  <p className="text-neutral-600 font-semibold md:text-m font-sans mb-4">
                    {pro.title}
                  </p>
                  <a href={pro.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={pro.photo}
                      alt={pro.title}
                      className="mx-auto rounded-lg border-solid border-2 border-amber-400 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Frontendmentor;
