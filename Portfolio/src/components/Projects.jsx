
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        className="titlesmini">
        My Project's
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 cursor-pointer">
            <p
              className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain " />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Cart Page",
    title: "React-Zustand-TailwindCss",
    src: "./images/Cart.png",
    content: <DummyContent />,
  },
  {
    category: "Business page",
    title: "Made with Wordpress and Elementor",
    src: "./images/Kalimera.jpg",
    content: <DummyContent />,
  },
  {
    category: "E-Shop",
    title: "Wordpress and WooCommerce",
    src: "./images/Pinkup_myProject.jpg",
    content: <DummyContent />,
  },
  

  {
    category: "Band Page",
    title: "ChronoPhos metal Band",
    src: "./images/chronophos.jpg",
    content: <DummyContent />,
  },
  {
    category: "Front End Mentor",
    title: "Pure Html,Css,Javascript,React Projects",
    src: "./images/frontendmentor.jpg",
    content: <DummyContent />,
  },
  {
    category: "CodeWell Page",
    title: "TailwindCss Landing Page",
    src: "./images/Codewell_Project.jpg",
    content: <DummyContent />,
  },
];
