import { useState } from 'react';
import { ModalContainer, ModalOverlay, ModalBox, ModalCloseBtn } from '../StyledComponents/StyledComponents';

function Modal({setDisplay, overlayOpacity}) {
    // const [count, setCount] = useState(0);

    const handleCloseModal = () => {
        console.log("close");
    }

    return (
        <ModalContainer $display={setDisplay}>
            <ModalOverlay $opacity={overlayOpacity}>
                <ModalBox>
                    <ModalCloseBtn onClick={handleCloseModal}>X</ModalCloseBtn>
                </ModalBox>
            </ModalOverlay>
        </ModalContainer>
    )
}

export default Modal
