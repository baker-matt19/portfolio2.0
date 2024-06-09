"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { ActiveSectionContext, useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { active, setActive, setTimeOfLastClick  } = useActiveSectionContext();
  
  return (
    <header  className="z-[999] relative opacity-80 ">
      <motion.div
        id="header"
        className="fixed flex justify-center items-center top-0 left-1/2 -translate-x-1/2 h-[3rem] w-[65%] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 30, x: "-50%", opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
      >
        
        <nav id="nav" className="flex items-center fixed h-[100%] top-0">
        <ul id="linklist" className="flex flex-nowrap w-[22rem] items-center -mt-[3rem] justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500  sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="relative rounded-3xl h-[100%] w-[4.5rem] flex items-center justify-center hover:bg-gray-200"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 25, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
            >
              <Link
                href={link.hash}
                className={clsx("group flex w-full items-center justify-center px-3 py-3 hover:text-gray-950  transition text-2xl  ", {
                  "text-gray-950": active === link.name,
                }
                )}
                onClick={() => {
                  setActive(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.icon}
                
                {
                  link.name === active && (
                    <motion.span className="bg-gray-300 rounded-full absolute inset-0 -z-10"
                    layoutId="active"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}
                    ></motion.span>
                  )
                }

                

                <span className="scale-0 group-hover:scale-100 transition-all absolute p-2 bg-gray-600 rounded top-10 text-white">
                    {link.name}
                  </span>
                
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      </motion.div>

      
    </header>
  );
}
