import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresArray =[
    {title: 'Release your emotions',
    text: 'We are aware that teraphy can be very expensive and not everyone can afford it, nonetheless it is important to find alternative ways to express your emotions.'
    },
    {title: 'Practice a physical activity',
    text: 'Studies have proved that regular exercise does indeed decrease levels of tension and stabilizes and improves mood and sleep continuity.'
    },
    {title: 'Don´t be hard on yourself',
    text: 'When a persons suffers from anxiety or depression, thoughts can become very negative, try to be objective and understanding with yourself.'
    },
    {title: 'Acquire healthy habits',
    text: 'Drinking water and eating some foods a certain amount of times per day will make your body feel and work better, learn this and use it in your favor.'
    }
]

const Features = () => (
        <div className="estress__features section__padding" id="HealthFeatures">
            <div className="estress__features-heading">
                <h1 className="gradient__text">
                    Wealth being requires knowledge and commitment, but don't worry we're here
                    to help! Learn with us and we'll help you in the best way we can.
                </h1>
                <p>Get into it now!</p>
            </div>
            <div className="estess__features-container2">
                {featuresArray.map((item,index) =>(
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
        </div>
    )


export default Features
