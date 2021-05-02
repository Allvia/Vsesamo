import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialoge.module.css'

const DialogItem = (props) => {
    let path = "/dialoge/" + props.id
    return (
        <div className={s.dialoge + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}> {props.message} </div>
    )
}

const Dialoge = (props) => {

    let Dialoges = [
        { id: 1, name: 'Aleksey' },
        { id: 2, name: 'Matwey' },
        { id: 3, name: 'Armania' },
        { id: 4, name: 'Konstntin' },
        { id: 5, name: 'Mark' },
        { id: 6, name: 'Koraline' }
    ]

    let Messages = [
        { id: 1, message: 'You аre perfect!' },
        { id: 2, message: 'You will are happy from now and  to forever!' },
        { id: 3, message: 'You are amasing!' },
        { id: 4, message: 'You can everything!' },
        { id: 5, message: 'You are intoxicating!' },
        { id: 6, message: 'You are clever' }
    ]

    let dialogsElements =
        Dialoges.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements =
        Messages.map (m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialoges}>
            <div className={s.DialogItem}>
                {dialogsElements}
            </div>

            <div className={s.Message}>
                {messagesElements}

                {/* <Message message={MessagesData[0].message} id={MessagesData[0].id} />
                <Message message={MessagesData[1].message} id={MessagesData[1].id} />
                <Message message={MessagesData[2].message} id={MessagesData[2].id} />
                <Message message={MessagesData[3].message} id={MessagesData[3].id} />
                <Message message={MessagesData[4].message} id={MessagesData[4].id} />
    <Message message={MessagesData[5].message} id={MessagesData[5].id} />)*/}
            </div>

        </div>

    )
}

export default Dialoge