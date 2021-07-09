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
    const defaultState = [
        [icons.icons[0], icons.icons[1], icons.icons[2]],
        [icons.icons[0], icons.icons[1], icons.icons[2]],
        [icons.icons[0], icons.icons[1], icons.icons[2]]
    ]


    const [slots, setSlots] = useState(defaultState)
    const [interval, setTheInterval] = useState(null)
    const [isRolling, setIsRolling] = useState(false)


    const onClickStop = () => {
        clearInterval(interval)
        stopAnimation()
        setIsRolling(false)
        checkVitory()
    }

    const onClickStart = () => {

        if (!isRolling) {
            setIsRolling(true)
            startAnimation()
            let count = 0;

            var victoryDiv = document.getElementById("victoryDiv");
            victoryDiv.style.display = "none"

            const x = (setInterval(() => {
                const slot1 = [icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)]]


                const slot2 = [icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)]]


                const slot3 = [icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)],
                icons.icons[Math.floor(Math.random() * 5)]]

                setSlots([slot1, slot2, slot3])
                count++



                if (count >= 30) {
                    clearInterval(x)
                    stopAnimation()
                    setIsRolling(false)
                    checkVitory()
                }

            }, 150))

            setTheInterval(x)
        }
    }

    const checkVitory = () => {
        const firstSlotValue = document.querySelector("#middleSlot").innerHTML
        const secondSlotValue = document.querySelector("#middleSlot2").innerHTML
        const thirdValue = document.querySelector("#middleSlot3").innerHTML

        if (firstSlotValue === secondSlotValue && firstSlotValue === thirdValue) {

            return victory()
        }
    }

    const victory = () => {

        var victoryDiv = document.getElementById("victoryDiv");

        victoryDiv.style.display = "block";

    }

    const stopAnimation = () => {
        document.getElementById("icon").style.animationDuration = 0 + "s"
        document.getElementById("icon2").style.animationDuration = 0 + "s"
        document.getElementById("icon3").style.animationDuration = 0 + "s"
    }

    const startAnimation = () => {
        document.getElementById("icon").style.animationDuration = 0.5 + "s"
        document.getElementById("icon2").style.animationDuration = 0.5 + "s"
        document.getElementById("icon3").style.animationDuration = 0.5 + "s"
    }



    return (
        <div>
            <div id="theFirstSlot" className="slot1">
                <div id="icon" className="icon">
                    <div>{slots[0][0]}</div>
                    <div>{slots[0][1]}</div>
                    <div id="middleSlot">{slots[0][2]}</div>
                    <div>{slots[0][3]}</div>
                    <div>{slots[0][4]}</div>
                </div>
            </div>
            <div id="theSecondSlot" className="slot2">
                <div id="icon2" className="icon2">
                    <div >{slots[1][0]}</div>
                    <div >{slots[1][1]}</div>
                    <div id="middleSlot2">{slots[1][2]}</div>
                    <div >{slots[1][3]}</div>
                    <div >{slots[1][4]}</div>
                </div>
            </div>
            <div id="theThirdSlot" className="slot3">
                <div id="icon3" className="icon3">
                    <div>{slots[2][0]}</div>
                    <div>{slots[2][1]}</div>
                    <div id="middleSlot3">{slots[2][2]}</div>
                    <div>{slots[2][3]}</div>
                    <div>{slots[2][4]}</div>
                </div>
            </div>

            <button className="stopButton" onClick={onClickStop}>Stop</button>
            <button className="startButton" onClick={onClickStart}>Start</button>
            <div style={{ display: "none" }} id="victoryDiv"><h3>You Won!</h3></div>

        </div>

    )
}

export default SlotMachine