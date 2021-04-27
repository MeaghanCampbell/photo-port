import React from 'react'

function Modal({onClose, currentPhoto}) {

    // destructure currentPhoto props into constants to assign their values into the modal
    const {name, category, description, index} = currentPhoto

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />
                <p>{description}</p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    )
}

export default Modal;