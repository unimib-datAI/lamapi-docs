import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

import {
  Check,
  ArrowRight,
  SquarePen,
  SquareChartGantt,
  Blocks,
} from "lucide-react";

const features = [
  {
    name: "Knowledge Graphs Indexing",
    description: "LamAPI",
    icon: SquareChartGantt,
  },
  {
    name: "API services",
    description: "LamAPI",
    icon: SquarePen,
  },
];

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="LamAPI">
      <main>
        <img
          src="/lamapi-docs/img/bbblurry.svg"
          className="absolute opacity-20 dark:opacity-10 -top-[30rem]"
        />
        <section className="mx-auto max-w-6xl relative z-10">
          <div className="mx-4 place-content-center lg:gap-12 xl:gap-12 lg:grid-cols-12 pb-12 pt-12">
            <div className="justify-center flex flex-col md:flex-row max-w-8xl gap-12 pb-2 mx-auto">
              <div className="place-content-center max-w-lg pl-2">
                <h1 className="pt-12 leading-none text-secondarypink sm:text-4xl md:text-5xl lg:text-6xl dark:text-primarypink font-bold tracking-wide">
                  LamAPI
                </h1>
                <p className=" text-stone-800 dark:text-stone-100 sm:text-xl lg:mb-8 md:text-xl lg:text-2xl">
                  LamAPI supports string-based retrieval but also hard and soft
                  filters based on an input entity type (i.e., rdf:type for
                  DBpedia and Property:P31 for Wikidata). Hard type filters
                  remove non matching results, while soft type filters promote
                  or demote results when an exact match is not feasible.
                </p>
                <a
                  href="/steellm-docs/docs/introduction"
                  className="text-center inline-flex items-center border-none dark:bg-primarypink bg-secondarypink dark:text-gray-800 dark:hover:text-gray-800 hover:text-stone-100 text-stone-100 font-sm rounded-lg text-sm px-5 py-2.5 me-2 mb-2 font-semibold"
                >
                  Learn more <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <img
                alt="Logo"
                src="/lamapi-docs/img/lamapi.svg"
                className="lg:mt-0 lg:col-span-4 lg:flex w-[20rem] object-fit-cover max-w-full"
              />
            </div>
          </div>
        </section>

        <div className="overflow-hidden dark:bg-darkBackground bg-lightBackground py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col justify-center lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-4 text-lg leading-6 text-gray-700 dark:text-gray-100">
                    LamAPI supports string-based retrieval but also hard and
                    soft filters based on an input entity type (i.e., rdf:type
                    for DBpedia and Property:P31 for Wikidata). Hard type
                    filters remove non matching results, while soft type filters
                    promote or demote results when an exact match is not
                    feasible.
                  </p>
                  <p className="mt-4 text-lg leading-6 text-gray-700 dark:text-gray-100">
                    Key Features:
                  </p>
                  <div className="mt-6 max-w-xl space-y-4 text-base leading-5 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-8">
                        <div className="inline font-bold text-gray-900 dark:text-gray-300">
                          <feature.icon
                            aria-hidden="true"
                            className="absolute left-1 top-1 h-5 w-5 text-secondarypink dark:text-primarypink"
                          />
                          {feature.name}
                        </div>
                        <span className="inline pl-3 text-gray-600 dark:text-gray-200">
                          {feature.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <img
                alt="Product screenshot"
                src="/mantistable-ui-docs/img/mantisUI.png"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
