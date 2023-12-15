import React from "react";

interface InputProps {
    placeholder?: string
    info?: string
    type?: string
}


const Input: React.FC<InputProps> = (props) => {

    return (
        <div className="container-input">
            <p>{props.info}</p>
            <div className="input">
                <input type={props.type} placeholder={props.placeholder} />
            </div>

        </div>
    )
}

export default Input
