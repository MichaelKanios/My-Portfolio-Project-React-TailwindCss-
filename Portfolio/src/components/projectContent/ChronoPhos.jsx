const ChronoPhos = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content1" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 cursor-pointer"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
               Migrated ChronoPhos.com from a static HTML/Tailwind/JS stack to a modern React + Vite architecture
              </span>{" "}
              with React Router v7 for optimized routing. Implemented reusable components, responsive design, and Tailwind styling to maintain the project’s dark atmospheric identity while significantly improving performance and long-term maintainability.
            </p>
            <div className="flex justify-center ">
              <a
                href="https://chronophos.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block all_button transition m-4 text-m md:text-xl"
              >
                Live Preview
              </a>
            </div>

            <img
              src=".././images/chronophos.jpg"
              alt="Kalimera Photo"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain "
            />
          </div>
        );
      })}
    </>
  );
};
export default ChronoPhos;
