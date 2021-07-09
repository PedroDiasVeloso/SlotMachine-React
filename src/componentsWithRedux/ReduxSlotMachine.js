import React from 'react'
import '../components/SlotMachine.css'
import { connect } from 'react-redux'
import { setRolling, setSlots, setTheInterval, stopRolling } from './actions'


const ReduxSlotMachine = ({ rolling, interval, slots, icons, setRolling, stopRolling, setTheInterval, setSlots }) => {

    //stops the rolling
    const onClickStop = () => {
        clearInterval(interval)
        stopAnimation()
        stopRolling()
        checkVitory()
    }

    //starts the rolling
    const onClickStart = () => {

        if (!rolling) {
            setRolling()
            startAnimation()

            let count = 0

            var victoryDiv = document.getElementById("victoryDiv");
            var lossDiv = document.getElementById("lossDiv");
            victoryDiv.style.display = "none"
            lossDiv.style.display = "none"

            const x = setInterval(() => {
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

                //stops the rolling when count reaches 30
                if (count >= 30) {
                    clearInterval(x)
                    stopAnimation()
                    stopRolling()
                    checkVitory()
                }
            }, 150)

            setTheInterval(x)
        }
    }

    //checks middle row for 3 equal values
    const checkVitory = () => {
        const firstSlotValue = document.querySelector("#middleSlot").innerHTML
        const secondSlotValue = document.querySelector("#middleSlot2").innerHTML
        const thirdValue = document.querySelector("#middleSlot3").innerHTML

        if (firstSlotValue === secondSlotValue && firstSlotValue === thirdValue) {

            return victory()
        }

        return loss()
    }

    //shows the winning message
    const victory = () => {

        var victoryDiv = document.getElementById("victoryDiv");

        victoryDiv.style.display = "block";

    }

    //shows the loosing message
    const loss = () => {

        var lossDiv = document.getElementById("lossDiv");

        lossDiv.style.display = "block";

    }

    //stops the rolling animation
    const stopAnimation = () => {
        document.getElementById("icon").style.animationDuration = 0 + "s"
        document.getElementById("icon2").style.animationDuration = 0 + "s"
        document.getElementById("icon3").style.animationDuration = 0 + "s"
    }

    //starts the rolling animation
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
            <div style={{ display: "none" }} id="victoryDiv"><h3 className="victoryMessage">You Won!</h3></div>
            <div style={{ display: "none" }} id="lossDiv"><h3 className="victoryMessage">You Lost!</h3></div>
            <i style={{ fontSize: "3rem" }} className="bi bi-arrow-right victoryRowArrow"></i>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        rolling: state.rolling,
        interval: state.interval,
        slots: state.slots,
        icons: state.icons
    }
}

export default connect(mapStateToProps, {
    setRolling: setRolling,
    stopRolling: stopRolling,
    setTheInterval: setTheInterval,
    setSlots: setSlots
})(ReduxSlotMachine)