import axios from 'axios';
import { v4 } from 'uuid'
import { propTypes } from 'react-bootstrap/esm/Image';
import './News.css';
import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem'

const News = (props) => {

    const [articles, setArticles] = useState([]);

    // const [loader, setLoader] =  useState(true);

    const FirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        axios.get(`https://inshorts.deta.dev/news?category=${props.category}`)
            .then((res) => {
                // setLoader(false);
                setArticles(res.data.data)
                console.log(res.data);
            });
    }, []);

    return (
        <div className='main'>
            <div className='container my-3' >
                <h1 class="heading">Top - News {FirstLetter(props.category)} Heading</h1>
                <br />
                {/* calling map function */}
                <div className='row'>
                    {articles.map((val) => {
                        return (
                            <NewsItem
                                key={v4()}
                                title={val.title}
                                description={val.content}
                                imageUrl={val.imageUrl}
                                newsUrl={val.url}
                                author={val.author}
                                date={val.publishedAt} />
                        )
                    })}
                </div>
                {/* map div close */}
            </div>
            <div className="container d-flex justify-content-between"></div>
        </div>
    );
}
News.defaultProps = {
    country: "in",
    category: "general",
};

News.prototype = {
    country: propTypes.string,
    category: propTypes.string,
};

export default News;
