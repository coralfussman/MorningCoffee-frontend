import React, { Component } from 'react';
import ArticleCard from './ArticleCard';

export default class NewsContainer extends Component {
    
    render() {
        console.log(this.props.results)
        //const artys = this.props.results
       
        let arrayofArticles = this.props.results.map(( article, index) => {
            return <ArticleCard className="news" key={index.id} article={article} />
           })


        return (
            <div className="newsContainer">
                {arrayofArticles}
            </div>
        )
    }
}
