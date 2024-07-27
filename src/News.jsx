
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const News = () => {
    const { category } = useParams();
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = '6dc18ef39e0f47349a5eb3eecdf2250c';
            let url = '';

            if (category === 'india') {
                url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
            } else if (category === 'world') {
                url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
            }

            const response = await axios.get(url);
            setNews(response.data.articles);
        };

        fetchNews();
    }, [category]);

    return (
        <div>
            <h1>{category === 'india' ? 'India News' : 'World News'}</h1>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
