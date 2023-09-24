import React from 'react'
import Footer from '../Footer'
import Card from '../Card'
import Carousal from '../Carousal'

const Home = () => {
    return (
        <div>

            
            <div>
            <Carousal/>
            </div>
            <div className='m-3'><Card /></div>
            <div><Footer/></div>
        </div>
    )
}

export default Home