import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <div className='w-full'>
    <div
      className='w-full cosmic-card cosmic-card-hover cursor-pointer'
      onClick={() => {
        console.log(`Clicked on ${title}`);
        // Example: Navigate to a specific section or show more details
      }}
    >
      <div
        className='py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-all duration-300'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='cosmic-section-large'>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        style={{ color: 'var(--content-color)' }}
        className='mt-4 text-secondary text-[17px] mx-auto leading-[30px] text-justify w-full max-w-4xl'
      >
        I'm Arulsiddarthan S, a passionate Full Stack Developer and recent graduate in Computer Science and Engineering from Sri Sairam Engineering College (Class of 2025). From an early age, I was captivated by how technology solves problems — not just with code, but with creativity. That passion has driven me to blend backend development, AI, cloud infrastructure, and DevOps into meaningful, real-world projects.
        <br /><br />
        One of my proudest achievements is leading the development of GarbAI, an AI-powered wardrobe management system. As the team lead and full-stack developer, I engineered a seamless user experience powered by advanced AI tools like the LLaMA model via Ollama for outfit recommendations and Stable Diffusion for image generation. I also deployed the project using AWS EC2 and managed DNS with Route 53 — proving my skills across the full stack, from front-end UI to cloud deployment. GarbAI wasn't just a project — it was a breakthrough in applying AI to everyday lifestyle tech.
        <br /><br />
        I also interned at Chennai Metro Rail Corporation, where I built a secure web portal for the HR department to manage passenger details and integrate real-time station maps — sharpening my ability to build reliable, data-driven platforms with real-world value.
        <br /><br />
        Currently, I'm working on LogicLens, a futuristic IDE that assists developers with logic-based feedback, edge case detection, and optimization tips — aiming to redefine how coders think, not just what they write.
        <br /><br />
        What sets me apart? It's my ability to merge logic with imagination, and engineer not just systems — but intelligent experiences.
      </p>

      <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-6'>
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");