import React from 'react'; 
import './Article.css'; 


function Article(props){
    return (
        <div className="Article">
            <div className="articleImgCtn"> 
                <img src={props.src} alt={props.alt} className="articleImg" />
            </div>
            <h2 className="articleTitle">{props.title}</h2>
            <p className="articleText">{props.text}</p>
        </div>
    )
}

export default Article;    