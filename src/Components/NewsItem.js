import React from 'react';
import './News.css';

const NewsItem = (props) => {
    return (
        <>
            <div className="card" style={{width:"20rem"}} >
                <img src={props.imageUrl} className="card-img-top" alt="..." style={{width:"18rem",height:"15rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title} </h5><br/>
                    <p className="card-text">{props.description}</p>
                    <br/>
                    <h6 className="card-subtitle mb-2 text-muted">Author : {props.author}</h6>
                    <br/>
                    <a rel="noreferrer" href={props.newsUrl} className='btn btn-primary'  target="_blank">Read More</a>
                </div>
            </div>
        </>
    );
}

export default NewsItem;
