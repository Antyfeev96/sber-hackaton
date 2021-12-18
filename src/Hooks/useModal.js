import {useState} from "react";

export const useModal = (initialMode = false) => {
    const [modalOpen, setModalOpen] = useState(initialMode)
    return [modalOpen, setModalOpen]
}
