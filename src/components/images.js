import React from "react";
import './images.css'

const RenderImg = (props) => {
    return (
        <img alt='' src={props.src} width="300px" height="300px"></img>
    )
}

export default RenderImg;