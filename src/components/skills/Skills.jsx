import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="Skills section" id="skills">
        <h2 className="section__title">Fähigkeiten</h2>
        <span className="section__subtitle">Mein technisches Niveau</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills