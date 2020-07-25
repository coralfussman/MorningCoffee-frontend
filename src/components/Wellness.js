import React, { Component } from 'react'
import loader from '../loader.svg';

export default class Wellness extends Component {
    state = {
        minutes: 3,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div className="timer" >
                <h1>Daily Breathing Exercise</h1>
                { minutes === 0 && seconds === 0
                    ? <h1> Great Work! </h1>
                    : <h1> Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds} </h1>
                }

                  <h3>Breathe In </h3>
                <div>

                  <img src={loader} className="loader" alt="loader" />
                  
                   <p> When timer gap reaches this point exhale</p>
                 
                </div>
                  {/* <iframe src="https://i.gifer.com/3juk.gif" width="480" height="480" frameBorder="0" allowFullScreen></iframe> */}


            </div>
        )
    }
}

