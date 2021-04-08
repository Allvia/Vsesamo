import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialoge.module.css'

const DialogeItem = (props) => {
    let path = "/dialoges/" + props.id
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

    let DialogData = [
        { id: 1, name: 'Aleksey' },
        { id: 2, name: 'Matwey' },
        { id: 3, name: 'Armania' },
        { id: 4, name: 'Konstntin' },
        { id: 5, name: 'Mark' },
        { id: 6, name: 'Koraline' },
    ]

    let MessagesData = [
        { id: 1, message: 'I love you!' },
        { id: 2, message: 'You are happy now and forever!' },
        { id: 3, message: 'You are amasing!' },
        { id: 4, message: 'You can everything!' },
        { id: 5, message: 'Oh, yes!!' },
        { id: 6, message: 'Yo!' },
    ]

    return (
        <div className={s.dialoges}>
            <div className={s.dialogeItem}>

                <DialogeItem name={DialogData[0].name} id={DialogData[0].id} />
                <DialogeItem name={DialogData[1].name} id={DialogData[1].id} />
                <DialogeItem name={DialogData[2].name} id={DialogData[2].id} />
                <DialogeItem name={DialogData[3].name} id={DialogData[3].id} />
                <DialogeItem name={DialogData[4].name} id={DialogData[4].id} />
                <DialogeItem name={DialogData[5].name} id={DialogData[5].id} />

            </div>

            <div className={s.messenges}>
                <Message message={MessagesData[0].message} id={MessagesData[0].id} />
                <Message message={MessagesData[1].message} id={MessagesData[1].id} />
                <Message message={MessagesData[2].message} id={MessagesData[2].id} />
                <Message message={MessagesData[3].message} id={MessagesData[3].id} />
                <Message message={MessagesData[4].message} id={MessagesData[4].id} />
                <Message message={MessagesData[5].message} id={MessagesData[5].id} />
            </div>

        </div>

    )
}

export default Dialoge