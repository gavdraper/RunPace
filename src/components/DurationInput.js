import { useEffect, useState } from "react"

export default function DurationInput(props) {
    let [seconds, updateSeconds] = useState(props.Seconds);
    let [minutes, updateMinutes] = useState(props.Minutes);
    const updateMinute = (e) => updateMinutes(e.target.value);
    const updateSecond = (e) => updateSeconds(e.target.value);

    useEffect(() => {
        let secondsNumber = Number(seconds);
        let minutesNumber = Number(minutes);
        props.InputChanged(secondsNumber + (minutesNumber * 60));
    }, [seconds, minutes, props]);

    return (
        <div>
            <div className="form-group">
                <label htmlFor="minutesInput">Minutes</label>
                <input id="minutesInput" type='number' className='form-control' onChange={updateMinute} value={minutes}></input>
            </div>
            <div className="form-group">
                <label htmlFor="secondsInput">Seconds</label>
                <input id="secondsInput" type='number' className='form-control' onChange={updateSecond} value={seconds}></input>
            </div>
        </div>
    )
}