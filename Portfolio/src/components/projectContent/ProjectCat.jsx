const ProjectCart = () => {
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
                Developed a responsive shopping cart
              </span>{" "}
              interface with React and Vite, styled using Tailwind CSS.
              Implemented efficient state management with Zustand for cart
              operations and totals, focusing on clean component structure and
              reusability.Deploy on Vercel.
            </p>
            <div className="flex justify-center ">
              <a
                href="https://react-cart-frontend-mentor.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block all_button transition m-4 text-m md:text-xl"
              >
                Live Preview
              </a>
              <a
                href="https://www.frontendmentor.io/solutions/cart-with-react-tailwind-zustand-ysAfo0dEzG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block all_button transition m-4 text-m md:text-xl"
              >
                Profile
              </a>
            </div>

            <img
              src=".././images/Cart.png"
              alt="Cart Photo"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain "
            />
          </div>
        );
      })}
    </>
  );
};
export default ProjectCart;
