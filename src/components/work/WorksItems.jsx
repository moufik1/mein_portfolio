import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src= {item.image} alt="" className = "work__img"/>
        <h3 className="work__title">{item.title}</h3>
        <a href="https://github.com/moufik1/openspace" className="work__button">
            Github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorksItems