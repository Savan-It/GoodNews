import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    //capitiolise function for first letter
    capitioliseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            nullValue: 0
        }
        document.title = `${this.capitioliseFirstLetter(this.props.category)} | GoodNews`;

    }



    async updatePgae() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json();
        this.props.setProgress(70);
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false,
        })
        this.props.setProgress(100);

    }


    async componentDidMount() {
        this.updatePgae();
    }

    fetchMoreData = async () => {
        const nextPage = this.state.page + 1;
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            page: nextPage
        })
    };

    // handlePreviousBtn = async () => {
    //     await this.setState({ page: this.state.page - 1 })
    //     await this.updatePgae();

    // }
    // handleNexrBtn = async () => {
    //     await this.setState({ page: this.state.page + 1 })
    //     await this.updatePgae();

    // }
    render() {
        return (
            <>
                <h2 className='text-center'>GoodNews - Top {this.capitioliseFirstLetter(this.props.category)} Headlines</h2>
                {this.state.loading && <Loading mode={this.props.mode} />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loading mode={this.props.mode} />}
                >
                    <div className="container">
                        <div className='row'>
                            {this.state.articles?.map((element, index) => {
                                if (element.description && element.title) {
                                    return <div className='col-lg-4 col-sm-6 my-3' key={index}>
                                        <NewsItem mode={this.props.mode} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                    </div>
                                }
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News