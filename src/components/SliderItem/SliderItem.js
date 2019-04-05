import React from 'react';
import './SliderItem.css';

const SliderItem = (props) => {
    return (
        <div className="slider-item">
            <h1>Title {props.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, neque.</p>
        </div>
    );
};

export default SliderItem;
