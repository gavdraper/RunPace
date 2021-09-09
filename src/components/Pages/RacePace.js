import DistanceInput from '../Controls/DistanceInput'
import DurationInput from '../Controls/DurationInput'
import { useEffect, useState } from 'react'
import ReadOnlyDuration from '../Controls/ReadOnlyDuration'


export default function RacePace() {
    let [seconds, setSeconds] = useState('0');
    let [km, setKm] = useState('0');
    const calculateOutput = () => seconds;

    useEffect(calculateOutput);

    return (
        <div className='container'>
            <h2>Race Pace</h2>
            <form className='paceForm'>
                <DistanceInput Distance={10} DistanceChanged={setKm} />
                <div className="card">
                    <div className="card-header">
                        Target Time
                    </div>
                    <div className="card-body">
                        <DurationInput InputChanged={setSeconds} Minutes={50} Seconds={0} ShowHours={true} />
                    </div>
                </div>
            </form>

            <div className="form-group">
                <ReadOnlyDuration Seconds={seconds / km} />
            </div>
        </div>
    )
}