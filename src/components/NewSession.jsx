import React, {Component} from 'react';
import repository from '../repository/FirebaseImpl/FirebaseSessionRepository';
import { withRouter } from 'react-router-dom';
import Session from '../model/Session';
import '../styles/Queue.css';

class NewSession extends Component 
{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        repository.createSession(new Session().toJson())
        .then( docRef => {
            console.log(this.props.history);
            this.props.history.push(`/session/${docRef.id}`);
        }).catch(err => {
            console.error(err);
        });
    }

    render()
    {
        return (
            <div className="wrapper">
                <div className="header">
                    <p><h1>Creating Session...</h1></p>
                </div>
            </div>
        )
    } 
}

export default NewSession;