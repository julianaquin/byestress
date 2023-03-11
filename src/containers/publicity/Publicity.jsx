import React from 'react'
import './publicity.css'
import publicityimg from '../../assets/img/publicityimg.jpeg'

const Publicity = () => {
    return (
        <div className="estress__publicity section__padding" id="publicity">
            <div className="estress__publicity-image" alt="publicity-img">
                <img src={publicityimg}/>
            </div>
            <div className="estress__publicity-content">
                <h4>Request this book</h4>
                <h1 className="gradient__text">
                Untangle Your ANXIETY: a guide by two people who 
                    have been through it
                </h1>
                <p>Do you struggle to understand your anxiety? 
                    Are your days often consumed by worries that have no clear 
                    answers? Perhaps you don't feel like your usual self? UNTANGLE YOUR ANXIETY 
                    was written by Psychotherapist and Best-Selling Author, Joshua Fletcher, and the owner of Instagram's largest anxiety community, 
                    Dean Stott, to help you overcome excessive anxiety. This honest and powerful self-help book will be of aid in your recovery.</p>
                <h4>Order it and start reading now!</h4>
            </div>
        </div>
    )
}

export default Publicity
