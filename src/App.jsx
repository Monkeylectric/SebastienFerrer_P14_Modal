import { useState } from 'react'
import Modal from './components/Modal/Modal'
import './App.css'

function App() {
    const [modalDisplay, setModalDisplay] = useState(false);

    return (
        <>
            <Modal setDisplay={true}/>
        </>
    )
}

export default App
