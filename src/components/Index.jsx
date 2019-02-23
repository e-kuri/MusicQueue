import React from 'react';
import '../App.css';
import repository from '../repository/FirebaseImpl/FirebaseSessionRepository';
import { Link } from 'react-router-dom'

const Index = props => (
    <div className="App">
        <header className="App-header">
        <button className="App-link"><Link to='/newSession/'>New session</Link></button>
        <button className="App-link">Existing session</button>
        </header>
    </div>
);

export default Index;