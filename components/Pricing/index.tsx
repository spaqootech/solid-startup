import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      <section id="Pricing" className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `CATALOGUE PRICING`,
                subtitle: `Pricing Based on Tech & Pages`,
                description: `Choose a plan that fits your needs. Pricing is based on the technology and number of pages required.`,
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $100+
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Basic Pack
              </h4>
              <p>Ideal for small projects using basic technology.</p>
              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Tech: HTML, CSS, WordPress
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Pages: Up to 5
                  </li>
                </ul>
              </div>
              <a href="https://wa.me/+92405147909">
              <button className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary" >
                <span className="duration-300 group-hover/btn:pr-2">
                  Send Quote
                </span>
              </button>
              </a>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $150+
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Standard Pack
              </h4>
              <p>Best for medium-scale projects with advanced features.</p>
              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Tech: WordPress, Shopify, Webflow
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Pages: 6-10
                  </li>
                </ul>
              </div>
              <a href="https://wa.me/+92405147909">
              <button className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary" >
                <span className="duration-300 group-hover/btn:pr-2">
                  Send Quote
                </span>
              </button>
              </a>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Custom
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Enterprise Pack
              </h4>
              <p>Tailored solutions based on your specific requirements.</p>
              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Tech: Next.js, React, Custom Solutions
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Pages: 10+
                  </li>
                </ul>
              </div>
              <a href="https://wa.me/+92405147909">
              <button className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary" >
                <span className="duration-300 group-hover/btn:pr-2">
                  Send Quote
                </span>
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
