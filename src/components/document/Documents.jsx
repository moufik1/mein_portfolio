import React, { useEffect, useState } from 'react';
import { documentsData } from './Data';
import { documentsNav } from './Data';
import DocumentsItem from './DocumentsItem';

const Documents = () => {
    const [item, setItem] = useState ({name: "all"});
    const [documents, setDocuments] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "all") {
            setDocuments(documentsData);
        }

        else {
            const newDocuments = documentsData.filter((document) => {
                return document.category.toLowerCase() === item.name;
            });
            setDocuments(newDocuments);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name : e.target.textContent.toLowerCase() });
        setActive(index);
    };
  return (
    <div>
        <div className='document__filters'>
        {documentsNav.map((item, index) => {
            return (
                <span onClick={(e) => {handleClick(e, index);
                }} 
                className={`${active === index ? 'active-document' :  ''} document__item`} key={index}>{item.name}</span>
            )
        })}
        </div>
        <div className="document__container container grid">
            {documents.map((item) => {
                return <DocumentsItem item = {item} key={item.id}/>
            })}
        </div>
    </div>
  )
}

export default Documents