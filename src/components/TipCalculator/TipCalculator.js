import React from "react";
import "./TipCalculator.scss";

function TipCalculator() {
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
                        <div className="bill-count">0</div>
                    </div>
                </div>
                <div className="select-tip-container">
                    <div className="select-tip-title">Select Tip %</div>
                    <div className="select-tip-box-container">
                        <button className="select-tip-box">5%</button>
                        <button className="select-tip-box">10%</button>
                        <button className="select-tip-box">15%</button>
                        <button className="select-tip-box">25%</button>
                        <button className="select-tip-box">50%</button>
                        <button className="select-tip-box">Custom</button>
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
                        <div className="number-of-people-count">0</div>
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
