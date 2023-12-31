import SplashImage from "@/components/SplashImage";
import { Location } from "./lib/enums";

export default function Home(): JSX.Element {
  return (
    <main className="relative pt-20 md:pt-24 text-neutral-800 flex-grow">
      <SplashImage location={Location.Rome} />
      <section>
        <h1 className="px-4 py-6 mx-auto text-4xl font-black tracking-wide text-center shadow-lg bg-neutral-50 -skew-y-2 sm:text-5xl max-w-max sm:px-12 md:rounded-md opacity-90 xl:text-7xl ">
          Hey, I&#39;m Steven Brown
        </h1>
        <h2 className="px-4 py-2 mx-auto mb-8 -mt-2 text-2xl font-medium text-center transform bg-yellow-500 rounded-sm shadow-xl md:px-8 max-w-max -skew-y-2 xl:text-4xl">
          I bring your ideas to the web!
        </h2>
        <div className="max-w-5xl px-4 py-6 mx-auto text-lg bg-neutral-50 md:px-8 md:my-12 lg:rounded-md md:leading-relaxed md:text-xl md:opacity-90 xl:max-w-7xl xl:text-2xl text-slate-900">
          <p className="pb-4">
            I&#39;m a Full Stack Javascript developer from the US. Web Design &
            Development is my passion and I love working with Javascript. After
            finishing off 9 years as a Russian Cryptologic Linguist for the US
            Army, I have been on a mission to become an expert in all areas of
            software engineering. On the frontend, I have experience working
            with Angular and React. On the backend, I prefer NestJS and Express,
            but have been recently working more with Go. I have my AWS Solutions
            Architect and CompTia SEC+ Certifications and work almost daily in
            the cloud. I love building effective CI/CD pipelines using Github
            Actions and Jenkins and am constantly looking for ways to improve
            processes. Speaking of processes, I currently work as a Systems
            Engineer and SIGINT/EW SME, subcontracting for General Dynamics
            Mission Systems. For the remainder of this year, I am focused on
            continuing to learn MBSE, C++, Golang, and building more products on
            AWS.
          </p>

          <p className="pb-4">
            In the military, I worked in Signals Intelligence. I recently earned
            my HAM Amateur Radio License and enjoy working on projects that
            connect the EMS world to cloud computing. Oh, I also love to travel
            and make videos so check out my blog to see some of my latest
            adventures!
          </p>

          <p>
            I believe in being part of something bigger than myself, so
            let&#39;s work together! If you are interested in knowing more about
            my professional skills, take a gander at my portfolio, or contact me
            for my resume.
          </p>

          <p>
            I built this site with love using NextJS and Tailwind CSS. I hope
            you like it!
          </p>
        </div>
      </section>
    </main>
  );
}
