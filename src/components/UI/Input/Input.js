import React, { useImperativeHandle, useRef } from "react";

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        // 컴포넌트나 컴포넌트 내부에서 오ㄴ 기능들을 명령적으로 사용할 수 있게 해줌
        // 기본적으로 통역해주는 객체 내부 기능과 외부 세계 즉 부모 컴포넌트 사이를
        // 잘 사용안함
        return {
            focus: activate,
        };
    });

    return (
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef} 
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
})

export default Input;