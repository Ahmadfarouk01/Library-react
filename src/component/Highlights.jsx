import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './ul/Highlight';

const Highlights = () =>{
    return (
        <section id="highlights">
            <div className="container">
                <h2 className="section__tittle">
                    Why choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight 
                    icon ={<FontAwesomeIcon icon ="bolt" />} 
                    title= "Easy and Quick" 
                    para = "Get access to the book you purchased online instantly."
                    />
                    <Highlight 
                    icon ={<FontAwesomeIcon icon ="book-open" />} 
                    title= "10,000+ books" 
                    para = "Library had books in all your favourite categories."
                    />
                    <Highlight 
                    icon ={<FontAwesomeIcon icon ="tags" />} 
                    title= "Affordable" 
                    para = "Get your hands on popular books for a lifetime for just $10."
                    />
                </div>
            </div>
        </section>
    )
}

export default Highlights