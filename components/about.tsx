import React from "react";
import Image from "next/image";
import pic from "../public/me-slc-10122023.jpg";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="flex flex-col justify-center items-center max-w-[45rem] text-center leading-8 scroll-mt-28 w-[60%]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.75 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      {/* <div className="flex"> */}
        <Image
          id="me"
          src={pic}
          alt="A picture of Matt Baker"
          width={200}
          height={200}
          quality={90}
          priority={true}
          className="h-50 w-50 object-cover shadow-xl rounded-full"
        />
        <p className="m-10 font-medium">
          I am Matthew Baker, a results-driven software developer with over a
          year of hands-on coding experience. I have cultivated expertise in
          JavaScript, React.js, and Node.js, demonstrating proficiency in
          creating and building unique and appealing web sites and applications.{" "}
        </p>
      {/* </div> */}
    </motion.section>
  );
}

export default About;
