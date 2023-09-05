import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0)
    
    const updateNews = async () => {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = "News Buzz - " + props.category.charAt(0).toUpperCase() + props.category.slice(1)
        updateNews();
        //eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }

    return (
        <>
            <br />
            <h1 className={`text-center my-5 text-${props.mode === 'light' ? 'dark':'light'}`}>Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem mode = {props.mode} title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author}></NewsItem>
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultPropsdefaultProps = {
    pageSize: 5,
    country: 'in',
    category: 'sports',
    title: 'News-Monkey Top Headlines'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
}

export default News