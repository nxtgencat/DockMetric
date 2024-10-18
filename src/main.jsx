import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import DockCalculator from "./DockCalculator.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DockCalculator/>
    </StrictMode>,
)
