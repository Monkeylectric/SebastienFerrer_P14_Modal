import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
`;

const ModalOverlay = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, ${props => props.$opacity ?? ".4"});
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalBox = styled.div`
    position: relative;
    width: 30%;
    height: 10%;
    background: ${props => props.$background ?? "#FFF"};
    border-radius: 10px;
`;

const ModalBoxContent = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1em .5em;
    font-weight: bold;
    color: ${props => props.$color ?? "#000"};
`;

const ModalCloseBtn = styled.div`
    position: relative;
    bottom: 12px;
    left: 97%;
    width: 24px;
    height: 24px;
    background: #000;
    border-radius: 50%;
    text-align: center;
    color: #FFF;
    font-weight: bold;
    cursor: pointer;
    z-index: 99;
`;

function Modal({handleCloseModal, message, overlayOpacity, modalBackground, modalColor}) {
    return (
        <ModalContainer>
            <ModalOverlay $opacity={overlayOpacity}>
                <ModalBox $background={modalBackground}>
                    <ModalCloseBtn onClick={handleCloseModal}>X</ModalCloseBtn>
                    {message && <ModalBoxContent $color={modalColor}>{message}</ModalBoxContent>}
                </ModalBox>
            </ModalOverlay>
        </ModalContainer>
    )
}

export default Modal;