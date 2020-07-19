import React from 'react';


class ArticleCard extends React.Component {
  render() {
    let {title, thumbnail_standard, url} = this.props.article
    console.log(this.props.article)
    return(

      <div className="news">
        <h3>{title}</h3>
        <br/>
        <img className="articleImg" src={thumbnail_standard} width="150px" height="150px" alt="nytimage" />
         <a href={url} > Link Here</a>
        

      </div>

  
    
    )
}
}
  export default ArticleCard;

