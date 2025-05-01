"use client";
import { useEffect, useRef } from "react";
import { animate } from "motion";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current)
      animate(headingRef.current, { opacity: [0, 1], y: [-30, 0] }, { duration: 0.6 });

    if (subtextRef.current)
      animate(subtextRef.current, { opacity: [0, 1] }, { delay: 0.3, duration: 0.5 });

    if (buttonsRef.current)
      animate(buttonsRef.current, { opacity: [0, 1], y: [20, 0] }, { delay: 0.5, duration: 0.5 });

    if (cardsRef.current)
      animate(cardsRef.current, { scale: [0.9, 1], opacity: [0, 1] }, { delay: 0.6, duration: 0.7 });
  }, []);

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 overflow-hidden">
      <div className="text-center lg:text-start space-y-6">
        <div
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          <h1>
            We help{" "}
            <span className="bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              businesses
            </span>{" "}
            grow with{" "}
            <span className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              authentic
            </span>{" "}
          </h1>
          <h2>
            influencer posts
          </h2>
        </div>

        <p
          ref={subtextRef}
          className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
        >
          We connect select restaurants with handpicked content creators who are trusted by real audiences, not bots. 
        </p>

        <p
          ref={subtextRef}
          className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
        >
          Every post is vetted. Every influencer invited.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"
        >
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 inline-flex items-center justify-center ${buttonVariants({
              variant: "outline",
            })}`}
          >
            GitHub Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      <div ref={cardsRef} className="z-10">
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};