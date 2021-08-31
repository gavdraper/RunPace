import DistanceInput from '../Controls/DistanceInput'

export default function RacePace() {
    return (
        <div className='container'>
            <h2>Race Pace</h2>
            <form className='paceForm'>
                <DistanceInput DistanceChanged={() => { }} />
            </form>
            <div className="form-group">
                <span className="result">8 Minute 2 Second Mile</span>
            </div>
        </div>
    )
}