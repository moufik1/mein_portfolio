import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section" id="qualification">
         <h2 className="section__title">Qualifikation</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className = {toggleState === 1 ? "qualification__button qualification-active button--flex" : 
                "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className= {toggleState === 2 ? "qualification__button qualification-active button--flex" : 
                "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className= {
                    toggleState === 1 ? "qualification__content qualification__content-active" : 
                    "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Learn German</h3>
                            <span className="qualification__subtitle">Settat - Maghreb Language Center</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Diplome: Specialist in multimedia development</h3>
                            <span className="qualification__subtitle">Institute for Applied Technology 2-Settat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Diplome: Computer network specialist</h3>
                            <span className="qualification__subtitle">Institute for Applied Technology 2-Settat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 -2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Science life and earth</h3>
                            <span className="qualification__subtitle">Al-Amal</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2018
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className= {
                    toggleState === 2 ? "qualification__content qualification__content-active" : 
                    "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Project Creating Website</h3>
                            <span className="qualification__subtitle">Booking Website in Coffe </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Specialist in multimedia development</h3>
                            <span className="qualification__subtitle">Institute for Applied Technology 2-Settat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer network specialist</h3>
                            <span className="qualification__subtitle">Institute for Applied Technology 2-Settat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 -2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Science life and earth</h3>
                            <span className="qualification__subtitle">Al-Amal</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2018
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification