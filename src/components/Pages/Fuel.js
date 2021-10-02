import DurationInput from '../Controls/DurationInput'
import { useState } from 'react'
import ReadOnlyFuel from '../Controls/ReadOnlyFuel'

export default function RacePace() {
    let [seconds, setSeconds] = useState('0');
    return (
        <div className='container'>
            <form className='paceForm'>
                <DurationInput InputChanged={setSeconds} ShowHours={true} />
                <ReadOnlyFuel Seconds={seconds}/>
            </form >
        </div >
    )
}