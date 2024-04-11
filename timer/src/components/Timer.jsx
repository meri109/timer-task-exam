import React, { memo } from "react";
import { useState, useEffect } from "react";
import './Timer.scss'

function Timer() {

const [seconds, setSeconds] = useState(0)
const [minutes, setMinutes] = useState(0)

var timer;
useEffect(() => {
    timer = setInterval(() => {
    setSeconds(seconds + 1);
    if (seconds === 59) {
            setMinutes(minutes + 1);
            setSeconds(0);
        }
    }, 1000);
    return () => clearInterval(timer)
});

const pause = () => {
    clearInterval(timer)
}

const restart = () => {
    setMinutes(0);
    setSeconds(0);
}


    return (
        <div className="timer">
            <div className="container">
                <div className="timer-container">
                    <h1>Timer</h1>
                    <h1>{(minutes > 9 ? minutes : '0' + minutes)}:{seconds > 9 ? seconds : '0' + seconds}</h1>
                </div>
                    <div className="pause-stop">
                        <span onClick={pause}>Pause</span> <span onClick={restart}>Restart</span>
                    </div>
            </div>
        </div>
    )
}

export default Timer;