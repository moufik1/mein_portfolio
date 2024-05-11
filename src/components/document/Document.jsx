import React from 'react';
import "./document.css";
import Documents from './Documents';

const Document = () => {
  return (
    <section className="document section" id='document'>
        <h2 className="section__title">Unterlagen</h2>
        <span className="section__subtitle">Meine Zertifikate</span>
        <Documents />
    </section>
  )
}

export default Document