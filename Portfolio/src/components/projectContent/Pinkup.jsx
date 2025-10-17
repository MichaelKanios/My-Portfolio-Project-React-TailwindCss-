const Pinkup = () => {
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
                Developed a full WooCommerce online store
              </span>{" "}
              using WordPress, handling everything from installation and
              configuration to design, product setup, and launch. Focused on
              creating a smooth shopping experience with a clean, responsive
              layout.
              <span className="italic text-pink-500 font-bold text-m">
                Unfortunately, this website has since ceased operation.
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <img
                src=".././images/Pinkup_Screen1.jpg"
                alt="Pinkup Photo"
                className=" h-full w-full mx-auto object-contain "
              />
              <img
                src=".././images/Pinkup_Screen2.jpg"
                className=" h-full w-full mx-auto object-contain "
              />
              <img
                src=".././images/Pinkup_Screen3.jpg"
                className=" h-full w-full mx-auto object-contain "
              />
              <img
                src=".././images/Pinkup_Screen4.jpg"
                className=" h-full w-full mx-auto object-contain "
              />
            </div>
            <img
              src=".././images/Pinkup_Screen5.jpg"
              className=" h-full w-full mx-auto object-contain "
            />
          </div>
        );
      })}
    </>
  );
};
export default Pinkup;
