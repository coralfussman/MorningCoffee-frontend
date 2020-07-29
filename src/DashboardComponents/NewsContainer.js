import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import {SearchBar} from './Themes';
//import {themes} from './Themes';


export default class NewsContainer extends Component {
    
    handleType = e => {
       // console.log(e.target.value)
        this.props.changeSearchTerm(e.target.value)
    }


    render() {
        //  console.log(this.props.results)
        const artys = this.props.results()
       
        let arrayofArticles = artys.map(( article, index) => {
            return <ArticleCard className="news" key={index} article={article} />
           })


        return (
            <div>
                <SearchBar className="searchBar"
                type="text" 
                placeholder="Search Headline"
                value={this.props.searchTerm}
                onChange={this.handleType}
                ></SearchBar>
            <div className="newsContainer">
                
                {arrayofArticles}
            </div>
            </div>
        )
    }
}
