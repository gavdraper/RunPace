import { useEffect, useState } from "react"
export default function DistanceInput(props) {
    let [distance, updateDistance] = useState(props.Distance);
    let [units, updateUnits] = useState(props.Units);
    const distanceChange = (e) => updateDistance(e.target.value);
    const unitChange = (e) => updateUnits(e.target.value);

    useEffect(() => {
        let distanceNumber = Number(distance);
        let km = Number(distanceNumber);
        props.DistanceChanged(km);
    }, [units, distance, props]);

    let unitTypes = [
        { name: 'KM', key: 0 },
        { name: 'Mile', key: 1 }
    ]

    return (
        <div>
            <div className="form-group">
                <label htmlFor="distanceInput">Distance</label>
                <input id="distanceInput" type='number' className='form-control' onChange={distanceChange} value={distance}></input>
            </div>
            <div className="form-group">
                <label htmlFor="unitSelector">Units</label>
                <select id='unitSelector' className='form-control' onChange={unitChange}>
                    {unitTypes.map((c, index) => <option key={c.key} value={index}>{c.name}</option>)}
                </select>
            </div>
        </div>
    )
}