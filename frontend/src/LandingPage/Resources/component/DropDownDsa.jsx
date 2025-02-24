import { useState, useRef, useId, useEffect } from "react";
import useOutsideClick from "./ExpandCard.jsx";

import { RiYoutubeFill, RiCloseFill } from "@remixicon/react";
import {motion, AnimatePresence} from 'framer-motion';
const content = [
    {
        title: "DSA",
        subContent : [
            {
                title: "Array",
                desc: "Array is a linear data structure where all elements are arranged sequentially. It is a collection of elements of same data type stored at contiguous memory locations. Arrays at core are of fixed size only, but most of the languages provide dynamic sized arrays using the underlying fixed sized arrays."
            },
            {
                title: "String",
                desc: "Collection of Elements",
            },
            {
                title: "Linked List",
                desc: "Collection of Elements",
            },
            {
                title: "Stack",
                desc: "Collection of Elements",
            },
            {
                title: "Queue",
                desc: "Collection of Elements",
            },
            {
                title: "Map",
                desc: "Collection of Elements",
            },
            {
                title: "Set",
                desc: "Collection of Elements",
            },
        ],

    },
    {
        title: "Development",
        subContent: [
            {
                title: "Web Development",
                subContent: [
                    {
                        title: "HTML",
                        desc: "Hyper text markup language",
                    },
                    {
                        title: "CSS",
                        desc: "Cascading Style Sheets",
                    },
                    {
                        title: "JS",
                        desc: "Javascript",
                    },
                    {
                        title: "React JS",
                        desc: " Framework",
                    },
                    {
                        title: "Bootstrap",
                        desc: "",
                    },
                    {
                        title: "Tailwind CSS",
                        desc: "",
                    },
                ]
            },
            {
                title: "App Development",
                subContent: [
                    {
                        title: "Kotlin",
                        desc: "Hyper text markup language",
                    },
                    {
                        title: "Swift",
                        desc: "Cascading Style Sheets",
                    },
                    {
                        title: "Flutter",
                        desc: "Javascript",
                    },
                    {
                        title: "React Native",
                        desc: " Framework",
                    },
                    {
                        title: "Java",
                        desc: "",
                    },
                    {
                        title: "Xamarin",
                        desc: "",
                    },
                ] 
            },
            {
                title: "Blockchain Development",
                subContent: [
                    {
                        title: "Solidity",
                        desc: "Hyper text markup language",
                    },
                    {
                        title: "Go",
                        desc: "Cascading Style Sheets",
                    },
                    {
                        title: "Javascript",
                        desc: "Javascript",
                    },
                    {
                        title: "Truffle Suite",
                        desc: " Framework",
                    },
                    {
                        title: "OpenZeppelin",
                        desc: "",
                    },
                    {
                        title: "Embark",
                        desc: "",
                    },
                ] 
            },
            {
                title: "Cloud Computing",
                subContent: [
                    {
                        title: "Cloud Service Models",
                        subContent: [
                            {
                                title: "Infrastructure as a Service(IaaS)",
                            },
                            {
                                title: "Platform as a Service(PaaS)",
                            },
                            {
                                title: "Software as a Service{SaaS)",
                            },
                        ]
                    },
                    {
                        title: "Cloud Deployment Models",
                        subContent: [
                            {
                                title: "Public Cloud",
                            },
                            {
                                title: "Private Cloud",
                            },
                            {
                                title: "Hybrid Cloud",
                            },
                        ]
                    },
                    {
                        title: "Cloud Management Platforms",
                        subContent: [
                            {
                                title: "AWS",
                            },
                            {
                                title: "Microsoft Azure",
                            },
                            {
                                title: "Google Cloud Console",
                            },
                            {
                                title: "OpenStack",
                            },
                        ]
                    },
                    {
                        title: "Cloud Security Technologies",
                        subContent: [
                            {
                                title: "Identity and Access Management(IAM)",
                            },
                            {
                                title: "Encryption",
                            },
                            {
                                title: "Firewalls",
                            },
                            
                        ]
                    },
                    {
                        title: "Cloud Storage Technologies",
                        subContent: [
                            {
                                title: "Object Storage",
                            },
                            {
                                title: "Block Storage",
                            },
                            {
                                title: "File Storage",
                            },
                        ]
                    },
                    
                ] 
            }
        ]
    }
]


export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

function DropDown() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

    const toggleSubMenu = (e) => {
        e.stopPropagation();
    
        let subContent = e.target.querySelector("ul");
    
        if (!subContent) return;
    
        if (subContent.style.display === "none" || !subContent.style.display) {
          subContent.style.display = "block";
        } else {
          subContent.style.display = "none";
        }
      };
    
      const renderSubMenu = (subContent) => {
        return (
            <ul className="hidden cursor-pointer">
              {subContent.map((subItem, index) => (
                <li key={index} onClick={toggleSubMenu} className="border border-white rounded-lg p-2 hover:bg-green-700">
                  <span className="cursor-pointer">{subItem.title}</span>
                  {subItem.subContent ? renderSubMenu(subItem.subContent) : <motion.div
                            layoutId={`card-${subItem.title}-${id}`}
                            key={`card-${subItem.title}-${id}`}
                            onClick={() => setActive(subItem)}
                            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
                            <div className="flex gap-4 flex-col md:flex-row ">
                              <div className="">
                                <motion.h3
                                  layoutId={`title-${subItem.title}-${id}`}
                                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                                  {subItem.title}
                                </motion.h3>
                                
                              </div>
                            </div>
                            <motion.button
                              layoutId={`button-${subItem.title}-${id}`}
                              className="px-4 py-2 text-sm rounded-full font-bold bg-transparent text-red-700 mt-4 md:mt-0">
                              {<RiYoutubeFill />}
                            </motion.button>
                          </motion.div>}
                </li>
              ))}
            </ul>
          );
        };
      
        return (
          <div>
            <ul className="cursor-pointer border border-white text-white rounded-lg">
              {content.map((item, index) => (
                <li key={index} onClick={toggleSubMenu} className="bg-green-900 border border-white rounded-lg p-2 m-4">
                  <span className="" onClick={toggleSubMenu}>{item.title}</span>
                  {item.subContent ? renderSubMenu(item.subContent) : <motion.div
                            layoutId={`card-${item.title}-${id}`}
                            key={`card-${item.title}-${id}`}
                            onClick={() => setActive(item)}
                            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
                            <div className="flex gap-4 flex-col md:flex-row ">
                              <div className="">
                                <motion.h3
                                  layoutId={`title-${item.title}-${id}`}
                                  onClick={() => setActive(item)}
                                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                                  {item.title}
                                </motion.h3>
                                
                              </div>
                            </div>
                            <motion.button
                              layoutId={`button-${item.title}-${id}`}
                              className="px-4 py-2 text-sm rounded-full font-bold bg-transparent text-red-700 mt-4 md:mt-0">
                              {<RiYoutubeFill />}
                            </motion.button>
                          </motion.div>}
                </li>
              ))}
            </ul>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/20 h-full w-full z-10" />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                    <motion.button
                        key={`button-${active.title}-${id}`}
                        layout
                        initial={{
                        opacity: 0,
                        }}
                        animate={{
                        opacity: 1,
                        }}
                        exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.05,
                        },
                        }}
                        className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                        onClick={() => setActive(null)}>
                        <CloseIcon />
                    </motion.button>
                    <motion.div
                        layoutId={`card-${active.title}-${id}`}
                        ref={ref}
                        className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
                        

                        <div>
                        <div className="flex justify-between items-start p-4">
                            <div className="">
                            <motion.h3
                                layoutId={`title-${active.title}-${id}`}
                                className="font-bold text-neutral-700 dark:text-neutral-200 text-5xl">
                                {active.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${active.description}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400 m-8">
                                {active.desc} 
                            </motion.p>
                            <motion.button
                                layoutId={`button-${active.title}-${id}`}
                                href={active.ctaLink}
                                className="text-sm font-bold bg-transparent text-red-800 text-xl">
                                
                                {<RiYoutubeFill />}
                            </motion.button>
                            </div>
                            

                            <motion.a
                            layoutId={`button-${active.title}-${id}`}
                            onClick={() => setActive(null)}
                            className="text-sm font-bold bg-transparent text-white text-xl cursor-pointer">
                            {<RiCloseFill />}
                            </motion.a>
                        </div>
                        
                        </div>
                    </motion.div>
                    </div>
                ) : null}
                </AnimatePresence>
            
          </div>
        );
}

export default DropDown;