import DurationInput from '../Controls/DurationInput'
import { useState } from 'react'
import ReadOnlyFuel from '../Controls/ReadOnlyFuel'

export default function RacePace() {
    let [seconds, setSeconds] = useState('0');
    let [distance] = useState({ KM: 42, Units: 'KM' });
    return (
        <div className='container'>
            <form className='paceForm'>
                <DurationInput InputChanged={setSeconds} Hours={4} Minutes={0} Seconds={0} ShowHours={true} />
                <ReadOnlyFuel Seconds={seconds / distance.KM}/>
            </form >
        </div >
    )
}