import React, { useEffect, useState } from 'react'
import './SlotMachine.css'


const SlotMachine = () => {

    //icons to be used
    const icons = {
        icons: [<i id="icon" style={{ fontSize: "4rem", color: "red" }} className="bi bi-globe"></i>,
        <i id="icon" style={{ fontSize: "4rem", color: "cornflowerblue" }} className="bi bi-truck"></i>,
        <i id="icon" style={{ fontSize: "4rem", color: "green" }} className="bi bi-tree-fill"></i>,
        <i id="icon" style={{ fontSize: "4rem", color: "yellow" }} className="bi bi-emoji-smile"></i>,
        <i id="icon" style={{ fontSize: "4rem", color: "cornflowerblue" }} className="bi bi-flag-fill"></i>]
    };

    //initial slots state
    const defaultState = [icons.icons[0], icons.icons[1], icons.icons[2]]


    const [slots, setSlots] = useState(defaultState)
    const [interval, setTheInterval] = useState(null)
    const [hasStoped, setHasStoped] = useState(false)
    const [hasRendered, setHasRendered] = useState(false)


    const onClickStop = () => {
        clearInterval(interval)
        setHasStoped(true)
        checkVitory()
    }

    const onClickStart = () => {

        setHasStoped(false)
        setHasRendered(true)
        let count = 0;

        var victoryDiv = document.getElementById("victoryDiv");
        victoryDiv.style.display = "none"

        const x = (setInterval(() => {
            const slot1 = icons.icons[Math.floor(Math.random() * 5)]
            const slot2 = icons.icons[Math.floor(Math.random() * 5)]
            const slot3 = icons.icons[Math.floor(Math.random() * 5)]

            setSlots([slot1, slot2, slot3])
            count++


            if (count >= 100) {
                clearInterval(x)
                setHasStoped(true)
                checkVitory()
            }

        }, 150))

        setTheInterval(x)

    }

    const checkVitory = () => {
        console.log("on check vitory")
        const firstSlotValue = document.querySelector("#theFirstSlot").innerHTML
        const secondSlotValue = document.querySelector("#theSecondSlot").innerHTML
        const thirdValue = document.querySelector("#theThirdSlot").innerHTML

        if (firstSlotValue === secondSlotValue && firstSlotValue === thirdValue) {

            return victory()
        }
    }

    const victory = () => {

        var victoryDiv = document.getElementById("victoryDiv");

        victoryDiv.style.display = "block";

    }

    const setTop = () => {
        document.getElementById("victoryDiv").style.top = 3
    }



    return (
        <div>
            <div id="theFirstSlot" className="slot1">
                <div className="icon">
                    {slots[0]}
                </div>
            </div>
            <div id="theSecondSlot" className="slot2">
                <div className="icon">
                    {slots[1]}
                </div>
            </div>
            <div id="theThirdSlot" className="slot3">
                <div className="icon">
                    {slots[2]}
                </div>
            </div>

            <button className="stopButton" onClick={onClickStop}>Stop</button>
            <button className="startButton" onClick={onClickStart}>Start</button>
            <div style={{ display: "none" }} id="victoryDiv"><h3>You Won!</h3></div>

        </div>

    )
}

export default SlotMachine