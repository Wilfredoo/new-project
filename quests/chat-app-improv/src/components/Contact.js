import React from 'react'
import './Contact.css'

export default function Contact({name, avatar, online}) {
    return (
        <div className="contact" >
            <img className="avatar" src={avatar} alt={name} />
            <div>
                <p className="name">{name}</p>
                <div className="status" >
                    <div className={online ? 'status-online' : 'status-offline'} />
                    <p className="status-text">{online ? 'online' : 'offline' }</p>
                </div>
            </div>
        </div>
    )
}