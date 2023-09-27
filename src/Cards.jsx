import { useState } from "react";

export default function Cards({card,flip,handleChoice}){
    function handleClick(){
        handleChoice(card)
    }
    return(
        <div>
            <div className="card">
                <div className={flip?"flipped-picture":"picture"}>
                   {/* <img className="picture" src={card.img}/>
                    <img 
                        onClick={handleClick}
                        className="back"
                        src="././public/florida-logo.jpg"/> */}
                    <img 
                        src={flip ? card.img : "././public/florida-logo.jpg"}
                        onClick={handleClick}
                    />
                  </div>   
            </div>
        </div>
    )
}