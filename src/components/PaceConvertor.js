import { useEffect, useState } from 'react'
import DurationInput from './DurationInput'
import ReadOnlyDuration from './ReadOnlyDuration'
import conversions from '../conversions'

export default function PaceConvertor() {
    let [inputSeconds, setInputSeconds] = useState('0');
    let [conversionIndex, setConversionIndex] = useState(1);
    let [convertedSeconds, setConvertedSeconds] = useState("00:00");
    const durationChanged = (seconds) => setInputSeconds(seconds);
    const handleUnitChange = (e) => setConversionIndex(e.target.value);
    const calculateOutput = () => setConvertedSeconds(inputSeconds * conversions[conversionIndex].conversion);

    useEffect(calculateOutput)

    return (
        <div>
            <h2> Convertor</h2>
            <DurationInput InputChanged={durationChanged} Minutes={8} Seconds={0} />
            <select id='conversionSelector' onChange={handleUnitChange} value={conversionIndex}>
                {conversions.map((c, index) => <option key={c.key} value={index}>{c.name}</option>)}
            </select>
            <ReadOnlyDuration Seconds={convertedSeconds} />
        </div>
    )
}
