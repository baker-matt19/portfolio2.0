"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  // console.log(experiencesData[0].title);

  return (
    <section id="experience" className="scroll-mt-28" ref={ref}>
      <SectionHeading>Experience</SectionHeading>

      <Timeline position="alternate">

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className="bg-gray-500"/> 
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="bg-gray-300 rounded flex-col ">
          <h3 className="font-semibold">{experiencesData[0].title}</h3>
          <p>{experiencesData[0].icon}</p>
          <p>{experiencesData[0].location}</p>
          <p className="flex justify-center items-center p-3 rounded bg-gray-400 font-mono">{experiencesData[0].description}</p>
          <p>{experiencesData[0].date}</p>
          
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className="bg-gray-500"/> 
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="bg-gray-300 rounded ">
          <h3 className="font-semibold">{experiencesData[1].title}</h3>
          <p className="flex justify-end">{experiencesData[1].icon}</p>
          <p>{experiencesData[1].location}</p>
          <p className="flex justify-center items-center p-3 rounded bg-gray-400 font-mono">{experiencesData[1].description}</p>
          <p>{experiencesData[1].date}</p>
          
        </TimelineContent>
      </TimelineItem>

      
    </Timeline>

    </section>
  );
}
