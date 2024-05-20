import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award'></i>
            <h3 className="about__title">Erfahrung</h3>
            <span className="about__subtitle">1 Jahr</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt' ></i>
            <h3 className="about__title">Vollendet</h3>
            <span className="about__subtitle">1 + Projekte</span>
        </div>

        {/* <div className="about__box">
            <h3 className="about__title"></h3>
            <span className="about__subtitle"></span>
        </div> */}
    </div>
  )
}

export default Info