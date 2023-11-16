import { useState } from 'react'
import Modal from './components/Modal/Modal'
import './App.css'

function App() {
    const [displayModal, setDisplayModal] = useState(false);

    const handleDisplayedModal = () => {
        setDisplayModal(!displayModal);
    }

    return (
        <div className="container" style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <button onClick={handleDisplayedModal}>Open Modal</button>
            <Modal 
                displayModal={displayModal} 
                setDisplayModal={setDisplayModal}
                overlayOpacity={.8}
                message="Test message beaucoup trop long pour entrer dans la modal"
            />
        </div>
    )
}

export default App
