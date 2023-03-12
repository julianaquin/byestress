import React from 'react'
import { Article } from '../../components'
import blog1 from '../../assets/img/blog1.png';
import blog2 from '../../assets/img/blog2.png';
import blog3 from '../../assets/img/blog3.png';
import blog4 from '../../assets/img/blog4.png';
import blog5 from '../../assets/img/blog5.png';
import './blog.css'

const blog = () => {
    return (
        <div className="estress__blog section__padding" id="blog">
            <div className="estress__blog-heading">
                <h1 className="gradient__text">
                    Do you want more? read our amazing blog
                </h1>
            </div>
                <div className="estress__blog-container">
                    <div className="estress__blog-container_group1">
                       <Article imageUrl={blog1} date="march 11th" 
                       title="Top 10 best foods that help relax your body"/>
                    </div>
                    <div className="estress__blog-container_group2">
                        <Article imageUrl={blog2} date="march 11th" title="Different ways to express your frustration"/>
                        <Article imageUrl={blog3} date="march 11th" title="Learn the best tips in meditation"/>
                        <Article imageUrl={blog4} date="march 11th" title="5 Yoga positions to relief back pain"/>
                        <Article imageUrl={blog5} date="march 11th" title="Drinkin water is what your body needs"/>
                    </div>
                </div>
        </div>
    )
}

export default blog
