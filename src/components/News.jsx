import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  MyApiKey = import.meta.env.VITE_MY_API_KEY;

  static defaultProps = {
    pageSize : 18,
    category : "general",
  }  

  static propTypes = {
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }

  constructor() {
    super();
    // console.log("Hello i am a constructor from News Component");
    this.state = {
      article: [],
      loading: false,
      page : 1
    };
  }


  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.MyApiKey}&page=1&pageSize=${this.props.pageSize}`;
    
    this.setState({loading:true})

    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      article : parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    })
    
  }


  handlePreviousClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.MyApiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      article : parsedData.articles,
      page : this.state.page+1,
      loading:false
    })
  }

  handleNextClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.MyApiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article : parsedData.articles,
      page : this.state.page+1,
      loading:false
    })

  }


  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>

        {this.state.loading && <Spinner/>}

        <div className="row">
        {!this.state.loading && this.state.article.map((element) => {
          return (
              <div className="col col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description?element.description:""}
                  imageUrl={element.urlToImage?element.urlToImage:"https://cdn.mos.cms.futurecdn.net/QJmeBQxW8sGqyCQ45vjRs5-1200-80.jpg"}
                  newsUrl={element.url}
                />
              </div>
          )
        })}
        </div>

        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page==Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    );
  }
}

export default News;
