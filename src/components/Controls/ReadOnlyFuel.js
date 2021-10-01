import { useState, useEffect } from "react"

export default function ReadOnlyduration(props) {
    let [result, setResult] = useState('');

    const secondsToMinuteSecondString = () => {
        var convertedMinutes = Math.floor(props.Seconds / 60);
        var convertedSeconds = Math.floor((props.Seconds - (convertedMinutes * 60)));
        setResult(convertedMinutes + ':' + convertedSeconds);
    }

    useEffect(() => secondsToMinuteSecondString());

    return (
        <div className="card">
            <div className="card-header">
                Fuel
            </div>
            <div className="card-body">
                <span className="result">

                        <div>1.5L Water</div>
                        <div>500 Carbs</div>
                        <div>15 Percy Pigs</div> 
                    {result}
                </span>
            </div>
        </div>
    )
}