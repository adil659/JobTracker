import { useState } from 'react'
export const useModal = () => {
    const [show, setShow] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => setShow(true);

    return {
        show,
        setShow,
        closeModal,
        showModal
    }
}

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }


    return {
        type,
        value,
        onChange
    }
}