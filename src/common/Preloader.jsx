import React from 'react';
import fetchingImg from "../assets/images/Spinner-1s-200px.svg";

let Preloader = () => {
    return  (
            <div>
                <img src={fetchingImg}/>
            </div>
    )
}

export default Preloader;