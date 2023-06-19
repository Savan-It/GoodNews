import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    //capitiolise function for first letter
    const capitioliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)





    const updatePgae = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        console.log(parseData);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);

    }

    useEffect(() => {
        document.title = `GoodNews | ${capitioliseFirstLetter(props.category)}`;
        updatePgae();
    }, [])


    const fetchMoreData = async () => {
        const nextPage = page + 1;
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
        setPage(nextPage);
    };

    //  const handlePreviousBtn = async () => {
    //     await setPage(page - 1);
    //     await updatePgae();

    // }
    // const handleNexrBtn = async () => {
    //     await setPage(page + 1)
    //     await updatePgae();

    // }
    return (
        <>
            <h2 className='text-center'>GoodNews - Top {capitioliseFirstLetter(props.category)} Headlines</h2>
            {loading && <Loading mode={props.mode} />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading mode={props.mode} />}
            >
                <div className="container">
                    <div className='row'>
                        {articles?.map((element, index) => {
                            if (element.description && element.title) {
                                return <div className='col-lg-4 col-sm-6 my-3' key={index}>
                                    <NewsItem mode={props.mode} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            }
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default News