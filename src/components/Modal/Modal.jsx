import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Styled component for modal container
 * 
 * @returns modal container component
 */
const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
`;

/**
 * Styled component for modal overlay
 * 
 * @returns modal overlay component
 */
const ModalOverlay = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, ${props => props.$opacity ?? ".4"});
    display: flex;
    justify-content: center;
    align-items: center;
`;

/**
 * Styled component for modal box
 * 
 * @returns modal box component
 */
const ModalBox = styled.div`
    position: relative;
    width: 30%;
    height: 10%;
    background: ${props => props.$background ?? "#FFF"};
    border-radius: 10px;
`;

/**
 * Styled component for modal box content
 * 
 * @param {String} $color
 * 
 * @returns modal box content component
 */
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

/**
 * Styled component for modal close button
 * 
 * @returns modal close button component
 */
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

/**
 * Modal component which display modal
 * on click button
 * 
 * @param {Function} handleCloseModal 
 * @param {String} message 
 * @param {Number} overlayOpacity 
 * @param {String} modalBackground 
 * @param {String} modalColor 
 * 
 * @returns modal component
 */
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

Modal.propTypes = {
    handleCloseModal: PropTypes.func,
    message: PropTypes.string.isRequired,
    overlayOpacity: PropTypes.number,
    modalBackground: PropTypes.string,
    modalColor: PropTypes.string,
}

export default Modal;