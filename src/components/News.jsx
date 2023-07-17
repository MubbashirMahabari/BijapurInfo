import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';




export class News extends Component {

    // default props are used when their is no props
    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    // constructor should have super() method compulsory 
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `Bijapur Info - ${this.capitalizeFirstLetter(this.props.category)}`;
    }
    // this function is used to capitalise the starting letter of category on the title
    capitalizeFirstLetter = (props) => {
        return props.charAt(0).toUpperCase() + props.slice(1);
    }

    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=585d28122bb94ef2ab49c904c8e532df&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            loading: false
        })

    }

    // it will run immediately after the render method ,if there is constructor then constructor will run after the render method
    async componentDidMount() {
        this.updateNews();
    }

    //function for next button 
    handleNext = () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    //function for previous button 
    handlePre = () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    render() {
        return (

            <div className='container my-3'>
                <h1>Bijapur - Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 25) : "News Headline"} description={element.description ? element.description.slice(0, 30) : "colorful and detailed descriptio.."} imgUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                            </div>
                            //giving the props with respect to there needs and used by the newsitem 
                        )
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-sm btn-dark" onClick={this.handlePre}>Previous &larr;</button>
                    <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-sm btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </div>



        )
    }
}

export default News;
