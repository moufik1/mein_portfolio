import React from 'react';



const DocumentsItem = ({item}) => {
    return (
        <div className="document__card" key={item.id}>
            <img src= {item.image} alt="" className = "document__img"/>
            <h3 className="document__title">{item.title}</h3>
            <a download="" href={item.file} className="document__button button--flex">
            Herunterladen <i className="bx bx-down-arrow-alt document__button-icon "></i>
            </a>
        </div>
      )
}

export default DocumentsItem