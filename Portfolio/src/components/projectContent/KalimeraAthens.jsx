const KalimeraAthens = () => {
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
                Built and launched the Athens page of Kalimera Wholesale
              </span>{" "}
              from scratch using WordPress and Elementor. Handled the entire
              process — from installation and configuration to design, layout,
              and final production deployment — ensuring a responsive and
              polished presentation aligned with the brand’s identity.
            </p>
            <div className="flex justify-center ">
              <a
                href="https://kalimerawholesale.gr/athens/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block all_button transition m-4 text-m md:text-xl"
              >
                Live Preview
              </a>
            </div>

            <img
              src=".././images/Kalimerawholesale_Project.jpg"
              alt="Kalimera Photo"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain "
            />
          </div>
        );
      })}
    </>
  );
};

export default KalimeraAthens;
