import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialoge.module.css'

const DialogeItem = (props) => {
    let path = "/dialoge/" + props.id;

    return (
        <div className={s.dialoge + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>

        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.messege}> {props.message} </div>
    )
}


const Dialoge = (props) => {
    return (
        <div className={s.dialoges}>
            <div className={s.dialogeItem}>

                <DialogeItem name="Aleksey" id="1" />
                <DialogeItem name="Matwey" id="2" />
                <DialogeItem name="Armania" id="3" />
                <DialogeItem name="Konstntin" id="4" />
                <DialogeItem name="Mark" id="5" />
                <DialogeItem name="Koraline" id="6" />
            </div>

            <div className={s.messenges}>
                <Message message = "I love you!" />
                <Message message = "You are happy now and forever!" />
                <Message message = "You are amasing!" />
            </div>

        </div>

    )
}

export default Dialoge