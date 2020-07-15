import React, { Component } from 'react';
import ArticleCard from './ArticleCard';

export default class NewsContainer extends Component {
    
    render() {
        const arrayofArticles = this.props.results.map(newsObj => {
            return <ArticleCard key={newsObj.id} article={newsObj}  />
           })


        return (
            <div>
                {arrayofArticles}
            </div>
        )
    }
}
