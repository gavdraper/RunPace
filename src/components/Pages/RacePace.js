import DistanceInput from '../Controls/DistanceInput'
import DurationInput from '../Controls/DurationInput'
import { useState } from 'react'
import ReadOnlyDuration from '../Controls/ReadOnlyDuration'

export default function RacePace() {
    let [seconds, setSeconds] = useState('0');
    let [distance, setDistance] = useState({ KM: 11, Units: 'KM' });
    return (
        <div className='container'>
            <h2>Race Pace</h2>
            <form className='paceForm'>
                <DistanceInput Distance={distance} Changed={setDistance} />
                <div className="card">
                    <div className="card-header">
                        Target Time
                    </div>
                    <div className="card-body">
                        <DurationInput InputChanged={setSeconds} Minutes={50} Seconds={0} ShowHours={true} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        Required Pace
                    </div>
                    <ReadOnlyDuration Seconds={seconds / distance.KM} Suffix={'Per ' + distance.Units} />
                </div>
            </form>


        </div>
    )
}