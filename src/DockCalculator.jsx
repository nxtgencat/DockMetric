import {useState} from 'react';
import './DockCalculator.css';

const DockCalculator = () => {
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [results, setResults] = useState({});

    const calculateDockSize = () => {
        const W_new = parseInt(width);
        const H_new = parseInt(height);

        if (!isNaN(W_new) && !isNaN(H_new)) {
            const dockWidth = (830 * W_new) / 922;
            const dockHeight = (190 * H_new) / 2048;
            const cornerClip = (60 * W_new) / 922;

            setResults({
                dockWidth: Math.round(dockWidth),
                dockHeight: Math.round(dockHeight),
                cornerClip: Math.round(cornerClip),
            });
        } else {
            alert("Please enter valid numbers for width and height.");
        }
    };

    return (
        <div className="container">
            <h1>DockMetric</h1>
            <div className="input-group">
                <input
                    type="number"
                    placeholder="New Width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="New Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <button onClick={calculateDockSize}>Calculate</button>
            {results.dockWidth && (
                <div className="results">
                    <h2>Results:</h2>
                    <p>New Dock Width: {results.dockWidth}px</p>
                    <p>New Dock Height: {results.dockHeight}px</p>
                    <p>New Corner Clip: {results.cornerClip}px</p>
                </div>
            )}
        </div>
    );
};

export default DockCalculator;
