export const setRolling = () => {
    return {
        type: "SET_ROLLING",
        payload: true
    }
}

export const stopRolling = () => {
    return {
        type: "STOP_ROLLING",
        payload: false
    }
}

export const setTheInterval = (num) => {
    return {
        type: "SET_THE_INTERVAL",
        payload: num
    }
}

export const setSlots = (array) => {
    return {
        type: "SET_SLOTS",
        payload: array
    }
}