import React, { Component } from 'react';
import repository from '../repository/FirebaseRepository';

class Queue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            queue: []
        }
        repository.getSessionDoc('uFrMniflhUmZuhHjr7Xf').onSnapshot( docSnapshot => {
            this.onDocumentChange(docSnapshot.data());
        }, err => {
            console.log('error');
        });
    }

    onDocumentChange(docSnapshot) {
        this.setState(docSnapshot)
    }

    render() {
        return ( <div>{this.state.queue[0] ? this.state.queue[0] : ''}</div> )
    }
} 

export default Queue;