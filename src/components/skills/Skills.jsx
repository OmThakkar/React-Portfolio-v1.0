import React from 'react';
import "./skills.css"
import Technology from './Technology';
import Tools from './Tools';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">What I know</span>
      <div className="skills__container container grid">
        <Technology/>
        <Tools/>
      </div>
    </section>
  )
}

export default Skills