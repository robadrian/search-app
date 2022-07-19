import React from "react";
import './images.css'

const RenderImg = (props) => {
    return (
        <img alt='' src={props.src}></img>
    )
}

export default RenderImg;