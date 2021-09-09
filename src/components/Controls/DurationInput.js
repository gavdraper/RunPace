import { useEffect, useState } from "react"

export default function DurationInput(props) {
    let [seconds, updateSeconds] = useState(props.Seconds);
    let [minutes, updateMinutes] = useState(props.Minutes);
    let [hours, updateHours] = useState(props.Hours || 0);
    let [showHours] = useState(props.ShowHours || false);

    console.log(showHours);

    useEffect(() => {
        let secondsNumber = Number(seconds);
        let minutesNumber = Number(minutes);
        props.InputChanged(secondsNumber + (minutesNumber * 60) + (Number(hours) * 60 * 60));
    }, [seconds, minutes, hours, props]);

    return (
        <div>
            {showHours &&
                <div className="form-group">
                    <label htmlFor="minutesInput">Hours</label>
                    <input id="minutesInput" type='number' className='form-control'
                        onChange={e => updateHours(e.target.value)} value={hours}></input>
                </div>
            }
            <div className="form-group">
                <label htmlFor="minutesInput">Minutes</label>
                <input id="minutesInput" type='number' className='form-control'
                    onChange={e => updateMinutes(e.target.value)} value={minutes}></input>
            </div>
            <div className="form-group">
                <label htmlFor="secondsInput">Seconds</label>
                <input id="secondsInput" type='number' className='form-control'
                    onChange={e => updateSeconds(e.target.value)} value={seconds}></input>
            </div>
        </div >
    )
}