import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialoge.module.css'
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'

const Dialoge = (props) => {


    let dialogsElements =
        props.state.Dialoges.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements =
        props.state.Messages.map(m => <Message message={m.message} id={m.id} />)

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