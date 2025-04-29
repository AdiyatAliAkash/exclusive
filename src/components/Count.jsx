import React, { Children } from 'react'
// import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

const Count = ({Children}) => {
    return (
        <div>
            <Countdown date={Date.now() + 266990000} >
                {Children}
            </Countdown>
        </div>
    )
}

export default Count