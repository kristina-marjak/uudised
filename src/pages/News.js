import React from 'react';
import { useLocation } from 'react-router-dom';

const News = () => {
    const location = useLocation();
    const uudis = location.state;

    return (
        <div className="news-detail">
            <h1>{uudis && uudis.pealkiri}</h1>
            <img src={uudis && uudis.pilt} alt={uudis && uudis.pealkiri} />
            <p>{uudis && uudis.sisu}</p>
        </div>
    );
};

export default News;