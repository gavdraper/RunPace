import { useEffect, useState } from "react"
export default function DistanceInput(props) {

    let [distance, updateDistance] = useState(props.Distance.KM);
    let [units, updateUnits] = useState(props.Distance.Units);
    let changed = props.Changed;

    const distanceChange = (e) => updateDistance(e.target.value);
    const unitChange = (e) => updateUnits(e.target.value);

    useEffect(() => {
        let distanceNumber = Number(distance);
        let km = Number(distanceNumber);
        let result = { KM: km, Units: units };
        changed(result);
    }, [units, distance, changed]);

    let unitTypes = [{ name: 'KM' }, { name: 'Mile' }]

    return (
        <div className="card">
            <div className="card-header">
                Distance
            </div>
            <div className="card-body">
                <div className="input-group">
                    <input id="distanceInput" type='number' className='form-control' onChange={distanceChange} value={distance}></input>
                    <span className="input-group-addon" style={{ width: '30px' }}>-</span>
                    <select style={{ maxWidth: "100px" }} id='unitSelector' className='form-control' onChange={unitChange}>
                        {unitTypes.map((c, index) => <option key={c.name} value={c.name}>{c.name}</option>)}
                    </select>
                </div>
            </div >
        </div>
    )
}