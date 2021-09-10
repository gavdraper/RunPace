import { useEffect, useState } from 'react'
import DurationInput from '../Controls/DurationInput'
import ReadOnlyDuration from '../Controls/ReadOnlyDuration'
import conversions from '../../conversions'

export default function PaceConvertor() {
    let [inputSeconds, setInputSeconds] = useState('0');
    let [conversionIndex, setConversionIndex] = useState(1);
    let [convertedSeconds, setConvertedSeconds] = useState("00:00");
    const durationChanged = (seconds) => setInputSeconds(seconds);
    const handleUnitChange = (e) => setConversionIndex(e.target.value);
    const calculateOutput = () => setConvertedSeconds(inputSeconds * conversions[conversionIndex].conversion);

    useEffect(calculateOutput)

    return (
        <div className='container'>
            <h2>Pace Convertor</h2>
            <form className="paceForm">
                <DurationInput InputChanged={durationChanged} Minutes={8} Seconds={0} />
                <div className='card'>
                    <div className='card-header'>Units</div>
                    <div className='card-body'>
                        <div className="form-group">
                            <select id='conversionSelector' className='form-control' onChange={handleUnitChange} value={conversionIndex}>
                                {conversions.map((c, index) => <option key={c.key} value={index}>{c.name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>


                <ReadOnlyDuration
                    Seconds={convertedSeconds}
                    Suffix={'Per ' + conversions[conversionIndex].destination}
                />
            </form>
        </div >
    )
}
