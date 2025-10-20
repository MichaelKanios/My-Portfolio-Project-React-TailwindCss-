import { useState } from "react";

const projects = [
  {
    id: 1,
    year: "Athens Sep 2017-Present",
    title: "Wordpress Support Specialist",
    description: [
      "Setup WordPress via Plesk",
      "Setup SSL",
      "Configure Theme and plugins",
      "Customize pages with Elementor",
      "Design photos and banners",
      "Backup via FTP",
      "Troubleshooting and Support",
      "Google Analytics setup",
      "Basic SEO performance",
    ],
    image: "./images/Kalimera.jpg",
    link: "https://kalimerawholesale.gr/athens",
  },
  {
    id: 2,
    year: "Athens-Sep 2018-2022",
    title: "Wordpress Support Specialist",
    description: [
      "Setup WordPress via Plesk",
      "Setup SSL",
      "Configure Woocommerce",
      "Configure Theme and plugins",
      "Customize pages with Elementor",
      "Design photos and banners",
      "Backup via FTP",
      "Troubleshooting and Support",
      "Google Analytics setup",
      "Facebook-Instagram shop",
      "Basic SEO performance",
      "Basic Social Media Marketing",
    ],
    image: "./images/Pinkup_myProject.jpg",
    link: "",
  },
];

const MyExperience = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <>
      <h1 id="experience" className="titles">
        My Experience
      </h1>
      <section className="mt-24 py-32 text-white rounded-xl glass">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-6xl font-bold mb-10">
              Freelance <span className="text-gray-200">Role</span>
            </h2>

            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer mb-8 group"
              >
                <p className="text-yellow-400 text-lg mb-2">{project.year}</p>
                <h3
                  className={`text-3xl font-semibold group-hover:text-rose-400 transition-colors
                    ${
                      selectedProject.id === project.id ? "text-gray-100" : ""
                    } duration-300`}
                >
                  {project.title}
                </h3>

                {selectedProject.id === project.id && (
                  <>
                    <div className="border-b-2 border-gray-200 my-4"></div>
                    <div className="text-gray-100 transition-all duration-500 ease-in-out space-y-2">
                      {project.description.map((item, index) => (
                        <p key={index}>• {item}</p>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-yellow-200 hover:text-rose-400 transition-colors underline"
                      >
                        Visit project →
                      </a>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
          />
        </div>
      </section>
    </>
  );
};

export default MyExperience;
