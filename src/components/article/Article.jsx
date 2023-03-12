import React from 'react'
import './article.css'

const Article = ( {imageUrl, date, title}) => {
    return (
        <div className="estress__blog-container_article">
            <div className="estress__blog-container-article-image">
                <img src={imageUrl} alt="blogimage" />
            </div>
            <div className="estress__blog-container-article-content">
             <div>
                 <p>{date}</p>
                <h3>{title}</h3>
            </div>
             <p>Read More..</p>
            </div>
        </div>
    )
}

export default Article
