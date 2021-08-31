import { useState, useEffect } from "react"

export default function ReadOnlyduration(props) {
    let [result, setResult] = useState('');

    const secondsToMinuteSecondString = () => {
        var convertedMinutes = Math.floor(props.Seconds / 60);
        var convertedSeconds = Math.floor((props.Seconds - (convertedMinutes * 60)));
        setResult(convertedMinutes + ' Minutes ' + convertedSeconds + ' Seconds');
    }

    useEffect(() => secondsToMinuteSecondString());

    return <div className="form-group"><span className="result">{result} Per {props.DestinationUnit}</span></div>
}