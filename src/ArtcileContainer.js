import React from 'react'; 
import './ArtcileContainer.css'; 
import Article from './Article'; 
import match1 from './images/match-1.jpg'; 
import match2 from './images/match-2.jpg'; 
import match3 from './images/match-3.jpg'; 



function ArtcileContainer(){
    return (
        <div className="ArtcileContainer">
            <Article src={match1} alt={"matc-1"} 
            title={
                "Mercato - Les transferts en direct du lundi 13 juin 2022"
                } 
            text={
                "On ouvre ce lundi par le plus gros transfert \
                de l'été jusqu'à présent. Darwin Nuñez à Liverpool, \
                c'est officiel, et cela va coûter cher aux Reds. \
                Mais cela bouge partout sur la scène européenne, \
                suivez toutes les infos en direct."
                }/> 
            <Article src={match2} alt={"matc-2"} title={"Match2"} text={
                "On ouvre ce lundi par le plus gros transfert \
                de l'été jusqu'à présent. Darwin Nuñez à Liverpool, \
                c'est officiel, et cela va coûter cher aux Reds. \
                Mais cela bouge partout sur la scène européenne, \
                suivez toutes les infos en direct."
                }/> 
            <Article src={match3} alt={"matc-3"} title={"Match3"} text={
                "On ouvre ce lundi par le plus gros transfert \
                de l'été jusqu'à présent. Darwin Nuñez à Liverpool, \
                c'est officiel, et cela va coûter cher aux Reds. \
                Mais cela bouge partout sur la scène européenne, \
                suivez toutes les infos en direct."
                }/> 
        </div>
    )
}

export default ArtcileContainer;         

