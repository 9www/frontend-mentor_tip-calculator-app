import React, { useState } from "react";
import "./TipCalculator.scss";
import { useEffect } from "react";
function TipCalculator() {
    const [tipPercentage, setTipPercentage] = useState(0);

    return (
        <div className="tip-calculator-container">
            <div className="left-container">
                <div className="bill-container">
                    <div className="bill-title">Bill</div>
                    <div className="bill-container">
                        <img
                            className="dollar-icon"
                            src="./images/icon-dollar.svg"
                            alt="dollar"
                        ></img>

                        <input type="number" value="0" className="bill-count" />
                    </div>
                </div>
                <div className="select-tip-container">
                    <div className="select-tip-title">
                        Select Tip %{tipPercentage}
                    </div>
                    <div className="select-tip-box-container">
                        <button
                            className="select-tip-box"
                            onClick={() => setTipPercentage(5)}
                        >
                            5%
                        </button>
                        <button
                            className="select-tip-box"
                            onClick={() => setTipPercentage(10)}
                        >
                            10%
                        </button>
                        <button
                            className="select-tip-box"
                            onClick={() => setTipPercentage(15)}
                        >
                            15%
                        </button>
                        <button
                            className="select-tip-box"
                            onClick={() => setTipPercentage(25)}
                        >
                            25%
                        </button>
                        <button
                            className="select-tip-box"
                            onClick={() => setTipPercentage(50)}
                        >
                            50%
                        </button>
                        <input
                            className="select-tip-box"
                            placeholder="Custom"
                            onInput={(e) => setTipPercentage(e.target.value)}
                            min={0}
                            max={1000}
                            pattern="[0-9]{4}"
                            value={tipPercentage}
                        ></input>
                    </div>
                </div>
                <div className="number-of-people-container">
                    <div className="number-of-people-title">
                        Number of People
                    </div>
                    <div className="number-of-people-input-container">
                        <img
                            className="person-icon"
                            src="./images/icon-person.svg"
                            alt="person"
                        ></img>
                        <input
                            type="number"
                            value="0"
                            className="number-of-people-count"
                        />
                    </div>
                </div>
            </div>
            <div className="right-container">
                <div className="tip-amount-container">
                    <div className="tip-amount">
                        Tip Amount<p></p>
                        <div className="tip-person">/ person</div>
                    </div>
                    <div className="tip-count">$0.00</div>
                </div>
                <div className="total-container">
                    <div className="total">
                        Total<p></p>
                        <div className="total-person"> / person</div>
                    </div>
                    <div className="total-count">$0.00</div>
                </div>
                <button className="reset-button">RESET</button>
            </div>
        </div>
    );
}

export default TipCalculator;
