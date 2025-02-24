import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
// Replace with your utility or install a library like clsx for classNames

import { cn } from "../utils/cn"; 
import createGlobe from "cobe";
import { EventSlider } from "./EventSlider";
 // Corrected import path
// import img3 from "../utils/img3.jpg"; // Corrected import path

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Upcoming Coding Events and Highlights from the Past",
      description:"Stay Updated on Upcoming Challenges and Relive Our Greatest Moments.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Showcasing innovation that matters.",
      description:
        "Discover the innovative projects crafted during hackathons and explore the one-of-a-kind creations by our talented college team.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Where Coders Connect and Collaborate",
      description:
        "Join the conversation, share ideas, solve challenges, and build lasting connections with fellow coders in our vibrant community.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Be a Part of the Future of Code",
      description:
        "Unlock exclusive membership opportunities, access premium content, and join a community of like-minded individuals who share your passion for coding.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];

  return (
    <div className="relative z-20  lg:py-10 max-w-7xl mx-auto">
      <div className="px-8">
        <h1 className="text-5xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white dark:text-white">
          Explore Our World of Code.
        </h1>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          
        Join us to explore exciting events, showcase innovative projects, connect with the community, and unlock exclusive membership opportunities—all in one place.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return <div className={cn("p-4", "sm:p-8", "relative", "overflow-hidden", className)}>{children}</div>;
};

const FeatureTitle = ({ children }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-white dark:text-white text-xl md:text-3xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 font-normal dark:text-neutral-300",
        "max-w-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

const SkeletonOne = () => (
  <div className="relative flex py-8 px-2 gap-10 h-full">
    <div className="w-full p-5 mx-auto  dark:bg-neutral-900  group h-full">
      
        <EventSlider/>
      
    </div>
   
  </div>
);



const SkeletonTwo = () => {
  const images = [
   
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* First Row of Images */}
      <div>
        <p>Explore the cutting-edge projects born from our hackathons and the creative brilliance of our college's talented minds. From rapid prototypes to unique student innovations, see how our team brings ideas to life and pushes boundaries.</p>
      </div>
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            key={`images-first-${idx}`}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt={`Image ${idx + 1}`}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Second Row of Images */}
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={`images-second-${idx}`}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt={`Image ${idx + 1}`}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-300/20 text-white mx-auto text-center rounded-full">
        <span className="bg-transparent">Projects Page →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
      </div>
      
    </div>
  );
};

export default SkeletonTwo;


const SkeletonThree = () => (
  <a
    href="https://discord.com/channels/1311292544222761021/1311292544658706542"
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex gap-10 h-full group/image"
  >
    <div className="w-full mx-auto bg-transparent group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
        <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
        <img
          src="https://assets.aceternity.com/fireship.jpg"
          alt="header"
          className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
        />
      </div>
    </div>
  </a>
);

const SkeletonFour = () => (
  <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
    <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-300/20 text-white mx-auto text-center rounded-full">
        <span className="bg-transparent">Membership →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
   
    <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
  </div>
);


export const Globe = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400 * 2,
      height: 400 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0, 0.5, 0],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 400, // Display size
        height: 400, // Display size
        aspectRatio: 1,
         // Positioned relative to the viewport
       
        }}
      className={className}
    />
  );
};
