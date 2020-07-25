import React from 'react'

import beans from '../beans.svg';

const About = () => {
   
    return(
   
            <div className="about">
                <div className="overBeans">
                <hr/>
                <h2>Morning Coffee</h2>

                <p>Morning Coffee is Designed (by you) to help kick start your day. 
                    Catching up on all your apps when you're bombarded first thing in the morning is stressful.
                    We get it! Instead design a page that has everything you need to know over, a cup of coffee!
                    Doesn’t that sound nice?</p>
                    <hr/>
                </div>
                <div className="beans"> 
                <img src={beans}  alt="beans" />
                </div>
            </div>
    )       
} 
export default About;