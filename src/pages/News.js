import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../App';

const News = () => {
    const { newsId } = useParams();
    const [uudis, setUudis] = useState(null);

    useEffect(() => {
        client.getEntry(newsId).then((response) => {
            console.log(response);
            setUudis(response);
        });
    }, []);

    if (!uudis) {
        return <div>Unable to retrieve news with ID {newsId}</div>;
    }

    const createdAt = new Date(uudis.sys.createdAt).toLocaleString('et-EE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });
    // console.log(uudis); 

    return (
        <div className="news-container">
            <div className="news-header">
                <h1>{uudis.fields.title}</h1>
            </div>
            <div className="news-details">
                <div className="news-meta body">
                    <p>Author:
                        <br />{uudis.fields.author}</p>
                    <p>Published:<br /> {createdAt}</p>
                </div>
                <div className="news-content body">
                    {uudis.fields.image && (
                        <img
                            src={uudis.fields.image.fields.file.url}
                            alt={uudis.fields.image.fields.title}
                            className="news-image"
                        />
                    )}
                    <p>{uudis.fields.body}</p>
                </div>
            </div>
        </div>
    );
};

export default News;