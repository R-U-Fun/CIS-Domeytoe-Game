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

import StartGame, { GameOver } from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

export default function Timer(props){
    return(
        <div className="container-fluids" >
            <a className="btn btn-danger btn-lg m-3" style={{cursor: 'auto'}}>
                &nbsp;&nbsp;&nbsp;
                <p className="fs-1 fw-bold">{props.TimeLeft}</p>
                <p className="fs-1 fw-bold"><i className="bi bi-hourglass-split"></i></p>
                <p className="fs-1 fw-bold">{props.TimeElapsed}</p>
            </a>
            <div id="SoN"></div>
        </div>
    );
}