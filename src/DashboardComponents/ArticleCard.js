import React from 'react';


class ArticleCard extends React.Component {
  render() {
    let {title, thumbnail_standard, url} = this.props.article
  
    return(
      <div className="articleCard">
        <h3>{title}</h3>
        <br/>
        <img className="articleCard" src={thumbnail_standard} alt="nytimage" />
         <a href={url} > Link Here</a>
        

      </div>

  
    
    )
}
}
  export default ArticleCard;

