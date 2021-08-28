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
            Minutes<br />
            <input type='number' onChange={updateMinute} value={minutes}></input><br />
            Seconds<br />
            <input type='number' onChange={updateSecond} value={seconds}></input>
        </div>
    )
}