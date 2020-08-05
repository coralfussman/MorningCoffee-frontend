import React from 'react';
import {NewsCards} from './Themes';

class ArticleCard extends React.Component {
  render() {
    let {title, thumbnail_standard, url} = this.props.article
    // console.log(this.props.article)
    return(

      <NewsCards className="news">
        <h3>{title}</h3>
        <br/>
        <a href={url} >
        <img className="articleImg" src={this.props.article.multimedia[1].url}  alt="nytimage" />
        </a>
        

      </NewsCards>

  
    
    )
}
}
  export default ArticleCard;

