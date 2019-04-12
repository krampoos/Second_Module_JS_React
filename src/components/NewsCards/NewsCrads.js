import React from 'react';
import {Link} from "react-router-dom";
import './NewsCrads.css';

const NewsCards = (props) => {
    return (
        <div className="card" style={{width: "20rem"}}>
            <div className="img-wrapp card-img-top">
                <img src={props.newsImg} alt="img" className="card-img-top"/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                {/*<p className="card-text">{props.text}</p>*/}
                <Link to={"/news/" + props.id} className="btn btn-primary">Подробнее</Link>
            </div>
        </div>
    );
};

export default NewsCards;
