import React from 'react'
import Feature from '../../components/feature/Feature'
import './new.css'

const New = () =>  (
        <div className="estress__new section__margin" id="StudiesNews">
            <div className="estress__new-heading">
                <h1 className="gradient__text">
                    Read the top articles and discover more about stress
                </h1>
                <p>Read now</p>
            </div>
            <div className="estress__new-feature">
                <Feature title="Explaining stress" 
                text="According to the World Health Organization, stress can be defined as a mental state of worry that is caused by difficult situations. It is a natural response and we all experience it,
                nevertheless, the way we respond to it is what makes a difference in our health."/>
            </div>
            <div className="estress__new-container">
                <Feature title="The power of exercise" text="Our mental and physical health are strongly related
                to one another, which is why exercising can be key in order to improve..." />
                <Feature title="Organic food's Benefits" text="The impact food has on us is bigger than what people think, processed
                food can cause health issues such as...
                "/>
                <Feature title="Breath tecniques" text="Respiratory control has showned to be a way to help patients
                deal with anxiety and panic attacks"/>
            </div>
        </div>
    )


export default New
