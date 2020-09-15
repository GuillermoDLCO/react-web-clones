import React from 'react';
import Banner from './Banner';
import './Home.css';
import Stores from './Stores';

function Home() {
    return (
        <div className="home">
            <div className="content__home">
                <Banner />
                <Stores />
                {/* <Features /> */}
                {/* <AdApp />  */}
                {/* <Faq /> */}
                {/* <Locations /> */}
            </div>
        </div>
    )
}

export default Home
