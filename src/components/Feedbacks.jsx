import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Education data
const educationData = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    institution: "Sri Sairam Engineering College",
    year: "2021 - 2025",
    icon: "🎓",
    details: [
      "Focused on computer science fundamentals, programming, and software engineering.",
      "Worked on academic projects related to web development and AI systems.",
      "Served as project team lead for final-year AI-Wardrobe Management project.",
    ],
  },
  {
    degree: "High School",
    field: "Computer Science",
    institution: "Thiruthangal Nadar Vidyalaya",
    year: "2019 - 2021",
    icon: "🏫",
    details: [
      "Specialized in Mathematics, Physics, Computer Science.",
      "Participated in coding and science competitions.",
    ],
  },
];

// Timeline Card
const EducationCard = ({ degree, field, institution, year, icon, details }) => (
  <div className="flex items-start relative">
    {/* Timeline line */}
    <div className="absolute left-[25px] top-0 bottom-0 w-[2px] bg-purple-500/40"></div>

    {/* Icon Circle */}
    <div className="z-10 relative w-[55px] h-[55px] flex items-center justify-center rounded-full border-4 border-purple-500 bg-black text-2xl">
      {icon}
    </div>

    {/* Card Content + Year */}
    <motion.div
      className="ml-6 bg-[#1f0832] border border-purple-700/40 p-6 rounded-2xl shadow-lg shadow-purple-900/50 w-full flex justify-between items-start"
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex-1">
        <h3 className="text-purple-400 font-bold text-xl">{degree}</h3>
        <p className="text-purple-300 font-semibold">{field}</p>
        <p className="text-white mt-1">{institution}</p>

        <ul className="list-disc ml-5 text-gray-300 space-y-2 mt-3">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>

      {/* Year aligned right side */}
      <div className="text-purple-400 font-semibold text-sm ml-6 whitespace-nowrap">
        {year}
      </div>
    </motion.div>
  </div>
);

const Education = () => {
  return (
    <div className="cosmic-section-large">
      {/* Top-left Title */}
      <motion.div variants={textVariant()} className="mb-12">
        <h2 className="text-4xl font-extrabold text-purple-400">Education</h2>
      </motion.div>

      {/* Timeline */}
      <div className="mt-6 flex flex-col gap-12 relative">
        {educationData.map((edu, idx) => (
          <EducationCard key={idx} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
