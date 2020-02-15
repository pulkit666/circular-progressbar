import React from 'react';
import './App.scss';
import CircularProgressBar from './circular-progress-bar/CircularProgressBar';

const App = () => (
    <React.Fragment>
        <CircularProgressBar progress={69} backgroundColor={'#3C5185'} textColor={'#3C5185'}></CircularProgressBar>
    </React.Fragment>
)

export default App;