import { useEffect, useState } from "react"

export default function DistanceInput(props) {
    let [distance, updateDistance] = useState(props.Distance);
    let [units, updateUnits] = useState(props.Units);
    const distanceChange = (e) => updateDistance(e.target.value);
    const unitChange = (e) => updateUnits(e.target.value);

    useEffect(() => {
        let distanceNumber = Number(distance);
        //TODO : Convert to KM from any other unit type
        let km = Number(distance);
        props.DistanceChanged(km);
    }, [units, distance, props]);

    return (
        <div>
            <div className="form-group">
                <label htmlFor="distanceInput">Distance</label>
                <input id="distanceInput" type='number' className='form-control' onChange={distanceChange} value={distance}></input>
            </div>
            <div className="form-group">
                <label htmlFor="secondsInput">Unit Type</label>

            </div>
        </div>
    )
}