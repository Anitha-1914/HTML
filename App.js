import React from 'react';
import './App.css';
import  universitylogo  from './annamachaya-university-logo.png';
function App(){
    return(
        <div className="App">
            <header className="App-header">
                img src={universitylogo} className="App-logo" alt="Annamacharya logo"
                <p>Annamacharya University</p>
                <a className="App=link"
                href="https://annamacharyaUniversity.com"
                target="_blank"
                rel="noopener noreferrer"></a>
            </header>
        </div>
    );
}
export default App;