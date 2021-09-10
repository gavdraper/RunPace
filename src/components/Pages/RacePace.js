import DistanceInput from '../Controls/DistanceInput'
import DurationInput from '../Controls/DurationInput'
import { useState } from 'react'
import ReadOnlyDuration from '../Controls/ReadOnlyDuration'

export default function RacePace() {
    let [seconds, setSeconds] = useState('0');
    let [distance, setDistance] = useState({ KM: 42, Units: 'KM' });
    return (
        <div className='container'>
            <h2>Race Pace</h2>
            <form className='paceForm'>
                <DistanceInput Distance={distance} Changed={setDistance} />

                <DurationInput InputChanged={setSeconds} Hours={4} Minutes={0} Seconds={0} ShowHours={true} />

                <ReadOnlyDuration Seconds={seconds / distance.KM} Suffix={'Per ' + distance.Units} />
            </form >


        </div >
    )
}