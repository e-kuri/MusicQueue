import React, { Component } from 'react';
import repository from '../../repository/FirebaseImpl/FirebaseSessionRepository';
import Session from '../../model/Session';

class Queue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            session : new Session()
        }
        /*
        repository.getSessionDoc('uFrMniflhUmZuhHjr7Xf').onSnapshot( docSnapshot => {
            this.onDocumentChange(docSnapshot.data());
        }, err => {
            console.log('error');
        });
        */
    }

    componentDidMount(){
        this.createDocument();
    }

    createDocument() {
        repository.createSession(new Session().toJson())
        .then( docRef => {
            this.setState({session: docRef})
        }).catch(err => {
            console.error(err);
        });
    }

    onDocumentChange(docSnapshot) {
        this.setState({session: docSnapshot})
    }

    render() {
        return ( <div>{this.state.session.id ? this.state.session.id : 'Creating...'}</div> )
    }
} 

export default Queue;