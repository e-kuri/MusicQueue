import React, { Component } from 'react';
import repository from '../../repository/FirebaseRepository';

class Queue extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'none'
        }
        repository.getSessionDoc('queso').onSnapshot( docSnapshot => {
            this.onDocumentChange(docSnapshot.data());
        }, err => {
            console.log('error');
        });
    }

    onDocumentChange(docSnapshot) {
        this.setState({name: docSnapshot.papas})
    }

    render() {
        return ( <div>{this.state.name}</div> )
    }
} 

export default Queue;