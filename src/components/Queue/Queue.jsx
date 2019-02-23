import React, { Component } from 'react';
import repository from '../../repository/FirebaseImpl/FirebaseSessionRepository';
import Session from '../../model/Session';
import '../../styles/Queue.css';
import QueueList from './QueueList';

class Queue extends Component {

    constructor(props) 
    {
        super(props);
        this.getSessionId = this.getSessionId.bind(this);
        this.state = {
            session: {
                queue: []
            }
        }
        /*
        repository.getSessionDoc('uFrMniflhUmZuhHjr7Xf').onSnapshot( docSnapshot => {
            this.onDocumentChange(docSnapshot.data());
        }, err => {
            console.log('error');
        });
        */
    }

    componentDidMount()
    {
        this.getSession();
    }

    getSession() {
        const {
            match: { params }
        } = this.props;
        console.log(params.sessionId);
        repository.getSessionDoc(params.sessionId).onSnapshot( docSnapshot => {
            this.onDocumentChange(docSnapshot, docSnapshot.id);
        }, err => {
            console.log('error');
        });
    }

    getSessionId = () => ( <p> Your session id is: <h2>{this.state.session.id}</h2> </p> );

    onDocumentChange(docSnapshot, id) 
    {
        console.log(docSnapshot);
        if(docSnapshot.exists){
            const session = {
                id: id,
                queue: docSnapshot.data().queue
            }
            this.setState({session: session});
        }
        console.log(this.state);
    }

    render() 
    {
        return ( <div className="wrapper">
            <div className="header">
                {this.getSessionId()}
            </div>
            <div className="list">
                <QueueList 
                urls={this.state.session.queue}
                />
            </div>
        </div> )
    }
} 

export default Queue;