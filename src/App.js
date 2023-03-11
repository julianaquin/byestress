import React from 'react'

import { Footer, Blog, Header, Features, New, Publicity  } from './containers'
import { Brand, CTA, Navbar} from './components'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <New />
            <Features />
            <Publicity />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
