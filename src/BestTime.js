import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

import Main from './App';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import HomeLinks from './HomeLinks';
import HomePage from './HomePage';
import Player from './Player';
import Timer from './Timer';
import StartGame, { GameOver } from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';


export default function BestTime(props){
    let TimeElapsed = parseInt(props.TimeElapsed);
    let BestTime = 40;
    if(TimeElapsed < BestTime){
        BestTime = TimeElapsed;
        alert("New Best = "+ BestTime);
    }
    return(null);
}