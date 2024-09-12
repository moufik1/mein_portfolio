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
        <span className="section__subtitle">Persönlicher wiedergang</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className = {toggleState === 1 ? "qualification__button qualification-active button--flex" : 
                "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Bildung
                </div>

                <div className= {toggleState === 2 ? "qualification__button qualification-active button--flex" : 
                "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Erfahrung
                </div>
            </div>
            <div className="qualification__sections">
                <div className= {
                    toggleState === 1 ? "qualification__content qualification__content-active" : 
                    "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Deutsch lernen</h3>
                            <span className="qualification__subtitle">Maghreb Language Center - Settat </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 09.2023 - Laufend
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
                            <h3 className="qualification__title">Diplom: TECHNIKEN DER MULTIMEDIA-ENTWICKLUNG</h3>
                            <span className="qualification__subtitle">Amt für Berufsbildung und Arbeitsförderung 2 - Settat</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2022
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Diplom: TECHNIKEN DER COMPUTERNETZWERKE</h3>
                            <span className="qualification__subtitle">Amt für Berufsbildung und Arbeitsförderung 2 - Settat</span>
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
                            <h3 className="qualification__title">Experimentelle wissenschaften, Schwerpunk, Lebens-und Geowissenschaften</h3>
                            <span className="qualification__subtitle">Al-Amal - Settat</span>
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
                            <h3 className="qualification__title">Projekt zur Erstellung einer Website</h3>
                            <span className="qualification__subtitle">Buchungswebsite in Coffee </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 12.2023 - 02.2024
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
                            <h3 className="qualification__title">Praktikum im Rathaus von settat</h3>
                            <span className="qualification__subtitle">Erstellen einer Benutzeroberflächefür eine Website</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 03.2022 - 04.2022
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Praktikum im Rathaus von settat</h3>
                            <span className="qualification__subtitle">Netzwerkinfrastrukturen konfiguriert und gewartet, um die Effizienz und Sicherheit zu verbessern</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 01.2020 -02.2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
