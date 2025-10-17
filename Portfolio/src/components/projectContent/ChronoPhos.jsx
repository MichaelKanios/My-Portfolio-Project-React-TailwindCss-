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
                Designed and developed ChronoPhos.com entirely from scratch
              </span>{" "}
              using HTML, Tailwind CSS, and JavaScript. The website showcases my
              instrumental stoner music project Chrono Phos, blending minimal
              aesthetics with a dark atmospheric tone that reflects the mood of
              the album. Focused on smooth navigation, responsive design, and an
              immersive visual experience for listeners.
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
