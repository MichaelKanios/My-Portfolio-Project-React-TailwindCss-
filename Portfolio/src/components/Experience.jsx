const Experience = () => {
  return (
    <>
      <h1 id="experience" className="titles ">
        My Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="skill_style  glass grid grid-cols-1 xl:grid-cols-2 ">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kalimerawholesale.gr/athens"
            >
              <div className="w-full h-[30%] overflow-auto touch-pan-y">
                <img
                  className="w-[100%] max-w-none h-auto"
                  src="images/Kalimerawholesale_Screen.jpg"
                  alt="Kalimera"
                />
              </div>
            </a>
          </div>
          <div>
            <ul className="experience font-monts text-center">
              <p className="font-semibold text-center pb-3">
                Wordpress Support Specialist.
              </p>
              <p className="font-semibold text-center pb-3">
                (Athens Sep 2017-Present)
              </p>
              <p className="font-semibold underline">Responsibilities</p>
              <li>Setup Wordpress via Plesk</li>
              <li>Setup SSL</li>
              <li>Configure Theme and pluging</li>
              <li>Customize pages with Elementor</li>
              <li>Design photos and banners</li>
              <li>Backup via Ftp</li>
              <li>Troubleshooting and Support </li>
              <li>Google analytics</li>
              <div className="flex flex-col">
                <li className="">Basic SEO perfomance</li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="all_button px-10 mt-5 mr-8 text-base "
                  href="https://kalimerawholesale.gr/athens"
                >
                  Explore
                </a>
              </div>
            </ul>
          </div>
        </div>

        <div className="skill_style glass ">
          <a target="_blank" rel="noopener noreferrer" href="https://pinkup.gr">
            <div className="w-full h-96 overflow-auto touch-pan-y">
              <img
                className="w-[100%]  max-w-none h-auto "
                src="./images/Pinkup_Screen.jpg"
                alt="Pinkup"
              />
            </div>
          </a>
          <ul className="experience font-monts ">
            <p className="font-semibold text-center pb-3">
              Wordpress Support Specialist.
            </p>
            <p className="font-semibold text-center pb-3">
              (Athens-Sep 2018-Present)
            </p>
            <p className="font-semibold underline ">Responsibilities</p>
            <li>Setup Wordpress via Plesk</li>
            <li>Setup SSL</li>
            <li>Configure Theme and pluging</li>
            <li>Configure Woocommerce</li>
            <li>Customize pages with Elementor</li>
            <li>Design photos and banners</li>
            <li>Backup via Ftp</li>
            <li>Troubleshooting and Support </li>
            <li>Google analytics</li>
            <li>Facebook-Instagram shop</li>
            <li>Basic SEO perfomance</li>
            <div className="flex flex-col ">
              <li>Basic Social media Marketing</li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="all_button px-10 mt-5 mr-8 text-base "
                href="https://pinkup.gr"
              >
                Explore
              </a>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
