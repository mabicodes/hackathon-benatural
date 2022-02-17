import * as React from "react";
import './popupmodal.css'



function PopupModal(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
                {props.children}
                <form>
                <div className="form">
                <div className="form-element">
                    <div className="form-label">
                        <label htmlFor="email">Email</label></div>
                    <input type="text" id="email" name="email" placeholder="example@benatural.org" autofocus/>
                </div>
                <div className="form-element">
                    <div className="form-label">
                        <label htmlFor="password">Password</label></div>
                    <input type="password" id="password" name="password" placeholder="* * * * *"/>

                </div>
                    <button className="form-login" type="submit" value="login">
                         Log in </button>


                </div>
                </form>
            </div>
        </div>
    ) : "" ;
}

export default PopupModal