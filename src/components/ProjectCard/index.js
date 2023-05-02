import React, { useState } from "react";
import "./style.css";

const ProjectCard = (props) => {
    const [hover, setHover] = useState(false);

    const onHoverStart = () => {
        setHover(true);
    }
    const onHoverEnd = () => {
        setHover(false);
    }

    return (
        <div className="project">
            <p>{props.title}</p>
            <div 
            style={{backgroundColor: props.backgroundColor, backgroundImage: props.backgroundImage}} 
            onMouseEnter={() => onHoverStart()}
            onMouseLeave={() => onHoverEnd()}
            className="project-card">
                <img style={props.style} src={props.image} alt={props.altText}/>
                {hover ? <>
                <img className="img-shadow" src={require("../../assets/card-shadow.png")} alt=""/>
                <p className="img-desc">{props.description}</p></> : null}
            </div>
        </div>
    );
}

export default ProjectCard;