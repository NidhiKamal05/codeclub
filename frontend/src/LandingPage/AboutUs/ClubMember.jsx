import { useLayoutEffect, useRef, useState, useEffect } from "react";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiArrowLeftCircleFill,
  RiArrowRightCircleFill,
} from "@remixicon/react";
import {motion} from 'framer-motion'
import img1 from "../AboutUs/pictures/contest.jpeg";
import img2 from "../AboutUs/pictures/community.jpeg";
// import MemberCard from './MemberCard';
import { gsap } from "gsap";

const Information = [
  {
    name: "Swati Suman",
    designation: "Software developer",
    description: "",
    image: img1,
    gitLink: "",
    linkedinLink: "",
  },
  {
      name: "Payal Kumari",
      designation: "Software developer",
      description: "",
      image: img1,
      gitLink: "",
      linkedinLink: "",
  },
  {
    name: "Divya Kumari",
    designation: "Software developer",
    description: "",
    image: img1,
    gitLink: "",
    linkedinLink: "",
  },
  {
    name: "Akanksha Kumari",
    designation: "Software developer",
    description: "",
    image: img2,
    gitLink: "",
    linkedinLink: "",
  },
  {
    name: "Nidhi Kamal",
    designation: "Software developer",
    description: "",
    image: img1,
    gitLink: "",
    linkedinLink: "",
  },
  {
    name: "Pooja Kumari",
    designation: "Software developer",
    description: "",
    image: img2,
    gitLink: "",
    linkedinLink: "",
  },
  {
    name: "Anjali Kumari",
    designation: "Software developer",
    description: "",
    image: img1,
    gitLink: "",
    linkedinLink: "",
  },
  {
    name: "Kanchan Kumari",
    designation: "Software developer",
    description: "",
    image: img2,
    gitLink: "",
    linkedinLink: "",
  },
  {
    name: "Sania Khan",
    designation: "Software developer",
    description: "",
    image: img1,
    gitLink: "",
    linkedinLink: "",
  },
  
];

function ClubMember() {
  const [active, setActive] = useState(Information[0]);
  const handleNext = () => {
    setActive(
      (prev) =>
        Information[(Information.indexOf(prev) + 1) % Information.length]
    );
  };
  const handlePrev = () => {
    setActive(
      (prev) =>
        Information[
          (Information.length -
            1 + Information.indexOf(prev)) % Information.length
        ]
    );
  };
  const randomRotate = () => Math.floor(Math.random() * 21) - 10;
  const isActive = (idx) => idx === Information.indexOf(active);
  return (
    <div>
      <h2 className="m-8 text-5xl p-8 ">Club Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto ">
        <div className="relative h-80 w-full mt-8">
            {Information.map((Information, idx) => (
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotate(),
                        y: 0,
                    }}
                    animate={{
                        opacity: isActive(idx) ? 1 : 0.7,
                        scale: isActive(idx) ? 1 : 0.95,
                        rotate: isActive(idx) ? 0 : randomRotate(),
                        zIndex: isActive(idx) ? 999 : Information.length + 2 - idx,
                        y: isActive(idx) ? [0, 80, 0] : 0,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.9,
                        rotate: randomRotate(),
                    }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                    key={active.name}
                    className="absolute inset-0 origin-bottom"
                >
                    <img
                        src={Information.image}
                        className="rounded-3xl h-full w-ful"
                        height="300"
                        width="300"
                        alt={Information.name}
                    ></img>
                </motion.div>
            ))}
        </div>
        <div>
          <div>
            <h2 className={` font-bold text-3xl mt-8`}>{active.name}</h2>
            <p className="text-base text-neutral-400">{active.designation}</p>
            <p className="text-lg pt-10">{active.description}</p>
            <div
              className={`font-bold flex gap-8 mt-5 items-center justify-center`}
            >
              <RiGithubFill className="size-8" />
              <RiLinkedinBoxFill className="size-8" />
            </div>
          </div>
          <div className="flex gap-10 pt-10 bottom-0 items-center justify-center">
            <button
              onClick={handlePrev}
              className="h-6 w-6 rounded-full bg-red-200 flex items-center justify-center"
            >
              {" "}
              <RiArrowLeftCircleFill className="font-bold text-black" />
            </button>
            <button
              onClick={handleNext}
              className="h-6 w-6 rounded-full bg-red-200 flex items-center justify-center"
            >
              {" "}
              <RiArrowRightCircleFill className="font-bold text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubMember;
