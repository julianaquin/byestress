import React from 'react'
import merquep from '../../assets/img/merqueplace.png'
import xhops from '../../assets/img/xhop.png'
import wrelease from '../../assets/img/wrelease.png'
import './brand.css'

const Brand = () => {
    return (
        <div className="estress__brand section__padding">
           <div>
               <img src={wrelease} alt="wrelease" />
           </div>
           <div>
               <img src={xhops} alt="xhopstore" />
           </div>
           <div>
               <img src={merquep} alt="merqueplace" />
           </div>
        </div>
    )
}

export default Brand
