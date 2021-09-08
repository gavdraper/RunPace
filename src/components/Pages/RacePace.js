import DistanceInput from '../Controls/DistanceInput'
import DurationInput from '../Controls/DurationInput'
import { useEffect, useState } from 'react'


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

                <div class="card">
                    <div class="card-header">
                        Target Time
                    </div>
                    <div class="card-body">
                        <DurationInput InputChanged={setSeconds} Minutes={8} Seconds={0} />
                    </div>
                </div>
            </form>

            <div className="form-group">
                <span className="result">{seconds / km}</span>
            </div>
        </div>
    )
}