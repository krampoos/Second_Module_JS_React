import React from 'react';

const NewsItem = (props) => {
    return (
        <div className="list-group">
            <a href="#" className="newsList__item list-group-item list-group-item-action flex-column align-items-start">
                <img src={props.newsImg} alt="img" className="newsList__img"/>
                <div>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{props.title}</h5>
                        <small>3 days ago</small>
                    </div>
                    <p className="mb-1">{props.text}</p>
                </div>
            </a>
        </div>
    );
};

export default NewsItem;
