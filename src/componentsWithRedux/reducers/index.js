import { combineReducers } from "redux";

const iconsReducer = () => {
    return {
        icons: [<i id="icon" style={{ fontSize: "4rem", color: "red" }} className="bi bi-globe"></i>,
        <i id="icon" style={{ fontSize: "4rem", color: "cornflowerblue" }} className="bi bi-truck"></i>,
        <i id="icon" style={{ fontSize: "4rem", color: "green" }} className="bi bi-tree-fill"></i>,
        <i id="icon" style={{ fontSize: "4rem", color: "yellow" }} className="bi bi-emoji-smile"></i>,
        <i id="icon" style={{ fontSize: "4rem", color: "cornflowerblue" }} className="bi bi-flag-fill"></i>]
    };
}

const defaultStateReducer = () => {
    return [
        [iconsReducer().icons[0], iconsReducer().icons[1], iconsReducer().icons[2]],
        [iconsReducer().icons[0], iconsReducer().icons[1], iconsReducer().icons[2]],
        [iconsReducer().icons[0], iconsReducer().icons[1], iconsReducer().icons[2]]
    ]
}

const rollingReducer = (rolling = false, action) => {

    if(action.type === "SET_ROLLING"){
        return action.payload
    }
    else if (action.type === "STOP_ROLLING"){
        return action.payload
    }

    return rolling
}

const intervalReducer = (interval = 0, action) => {

    if(action.type === "SET_THE_INTERVAL"){
        return action.payload
    }

    return interval
}

const slotsReducer = (slots = defaultStateReducer(), action) => {

    if(action.type === "SET_SLOTS"){
        return action.payload
    }

    return slots
}

export default combineReducers({
    rolling: rollingReducer,
    interval: intervalReducer,
    slots: slotsReducer,
    icons: iconsReducer
})