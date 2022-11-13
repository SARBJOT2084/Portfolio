import React from 'react'
// problem solving 
import ProgressProvider from './ProgressProvider'

import { CircularProgressbar } from 'react-circular-progressbar';
const App = () => {
    const [valueEnd, setValueEnd] = React.useState(66);
    return (
        <div style={{ padding: "40px 40px 40px 40px", margin: "auto" }}>
            <Example label="Initial animation upon mount with ProgressProvider wrapper">
                <ProgressProvider valueStart={10} valueEnd={valueEnd}>
                    {value => <CircularProgressbar value={value} text={`${value}%`} />}
                </ProgressProvider>
            </Example>
           
        </div>
    );
};

function Example(props) {
    return (
        <div style={{ marginBottom: 80 }}>
            <hr style={{ border: "2px solid #ddd" }} />
            <div style={{ marginTop: 30, display: "flex" }}>
                <div style={{ width: 100 }}>{props.children}</div>
                <div style={{ marginLeft: 30 }}>
                    <h3 className="h5">{props.label}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
function Hobbies() {
    return (
        <div>
            <h1 className="text-center text-white">PROBLEM SOLVING </h1>

            <App />
        </div>
    )
}

export default Hobbies
