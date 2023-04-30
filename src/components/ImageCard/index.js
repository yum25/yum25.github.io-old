import React, { useState } from "react";
import "./style.css"

const ImageCard = () => {
    const [flip, setFlip] = useState(false);

    return (
        <div className={`card ${flip ? "flip" : ""}`}>
            <div className="front" 
                onClick={() => setFlip(!flip)}
                style={{ height: "100%"}}
                >
                     <img 
                    style={{ height: "100%"}} 
                    src={require("../../assets/pic-me.jpeg")} 
                    alt="logo"/>
            </div>
            <div className="back" onClick={() => setFlip(!flip)}>
                <p style={{marginLeft: 15, marginRight: 15}}>
                    Nice to meet you! <br/><br/>

                    I'm Marie Yu - <br/><br/>
                    
                    a student at the University of 〽️ichigan studying Computer Science. 🤖👾 <br/><br/>

                    I'm a mobile developer and product manager at the Michigan Daily 🗞📰 <br/><br/>

                    and a Software Engineer at Avenu. <img style={{height: 20}} src={require("../../assets/avenualogo.png")} alt=""/> <br/><br/>

                    I do both Frontend and Backend Dev, using HTML, Javascript, CSS, and React ⚛️ along with NoSQL, SQL, C/C++, Python, and Java. ☕️ <br/><br/>

                    Scroll down to see what I'm up to! ⬇️
                </p>
            </div>
        </div>
    )
    ;
}

export default ImageCard;