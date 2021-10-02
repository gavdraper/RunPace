import { useEffect, useState } from "react"

export default function DurationInput(props) {
    let [seconds, updateSeconds] = useState(props.Seconds);
    let [minutes, updateMinutes] = useState(props.Minutes);
    let [hours, updateHours] = useState(props.Hours || 0);
    let [showHours] = useState(props.ShowHours !== undefined ? props.ShowHours : false);
    let [showSeconds] = useState(props.ShowSeconds !== undefined ? props.ShowSeconds :  false);

    useEffect(() => {
        let secondsNumber = Number(seconds);
        let minutesNumber = Number(minutes);
        props.InputChanged(secondsNumber + (minutesNumber * 60) + (Number(hours) * 60 * 60));
    }, [seconds, minutes, hours, props]);

    return (
        <div className="card">
            <div className="card-header">
                {showHours && 'Hours :'} Minutes {showSeconds && ': Seconds'}
            </div>
            <div className="card-body">
                <div className="input-group">
                    {showHours &&
                        <>
                            <input id="hoursInput" type='number' className='form-control' onChange={e => updateHours(e.target.value)} value={hours} />
                            <span className="input-group-addon" style={{ width: '30px' }}>:</span>
                        </>
                    }

                    <input id="minutesInput" type='number' className='form-control' onChange={e => updateMinutes(e.target.value)} value={minutes} />
                    <span className="input-group-addon" style={{ width: '30px' }}>:</span>
                    
                    { showSeconds &&
                        <>
                        <input id="secondsInput" type='number' className='form-control' onChange={e => updateSeconds(e.target.value)} value={seconds} />
                        </>
                    }                      
                </div >
            </div>
        </div>

    )
}