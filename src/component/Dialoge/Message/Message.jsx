import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialoge.module.css'

const Message = (props) => {

let windowMessang = React.createRef ()

let addText = ()=>{
    let textMess = windowMessang.current.value
    alert ( textMess );

}

    return (
        <div className={s.message}> {props.message} 
          <textarea ref={windowMessang}>    </textarea>
        <button onClick={addText}> OK </button>  
        </div>
                         
    )
}

export default Message