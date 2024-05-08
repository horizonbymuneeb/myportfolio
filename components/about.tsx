"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
    After establishing a strong foundation in software engineering,{" "}
    <span className="font-medium">I decided to pivot towards AI and ML</span>.
    Transitioning from a software engineer to an AI and ML developer, I
    underwent intensive training, including a coding bootcamp, to master{" "}
    <span className="font-medium">full-stack web development</span>.{" "}
    <span className="italic">I find immense satisfaction in problem-solving</span>{" "}
    and thrive on the challenges AI and ML present. My core technology stack
    includes{" "}
    <span className="font-medium">
        Python, TensorFlow, PyTorch, Flask, and Docker
    </span>
    . I am eager to continue expanding my expertise and am currently seeking a{" "}
    <span className="font-medium">full-time position</span> as an AI and ML
    developer.
</p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">working of human brain</span>.
      </p>
    </motion.section>
  );
}
