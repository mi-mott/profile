import ProgressBar from "./ProgressBar.js"

const Progress = ({ text, x, id }) => {
    if (x === id && x !== 0) {
        return (
            <div>
                <label>Confidence</label>
                <ProgressBar done="70"/>
                <div>{text}</div>
            </div>
        )
    }
}

export default Progress