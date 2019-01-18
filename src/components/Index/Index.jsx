import React from 'react';
import '../../App.css';
import repository from '../../repository/FirebaseRepository';

const Index = props => (
    <div className="App">
        <header className="App-header">
        <button className="App-link">New session</button>
        <button className="App-link">Existing session</button>
        </header>
    </div>
);

export default Index;