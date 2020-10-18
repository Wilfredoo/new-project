import React from 'react'
import './Contact.css'

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            online: props.online,
        }
    };

    render(){
    return (
        <div className="contact" >
            <img className="avatar" src={this.props.avatar} alt={this.props.name} 
            />
            <div>
                <p className="name">{this.props.name}</p>
                <div className="status"
                            onClick = {event => {
                                const newOnlineStat = !this.state.online;
                                this.setState({online: newOnlineStat});
                                 }}>
                    <div className={this.state.online ? 'status-online' : 'status-offline'}/>
                    <p className="status-text">{this.state.online ? 'online' : 'offline' }</p>
                </div>
            </div>
        </div>
    )
}
}

export default Contact;