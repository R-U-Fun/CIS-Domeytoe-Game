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
    let CurrentUserName = props.CurrentUserName;

    fetch(`http://localhost:3214/Server/UserProfile/${CurrentUserName}`)
        .then(response => response.json())
        .then(Data => {
            if(TimeElapsed < Data.BestTime || Data.BestTime === null){
                
                fetch(`http://localhost:3214/Server/BestTime/${CurrentUserName}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        BestTime: TimeElapsed,
                    }),
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                
                fetch('http://localhost:3214/Server/UpdateRanks', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .catch(error => console.error('Error:', error));

                alert("New Best Time = "+ TimeElapsed +" Sec");
            }
        })
        .catch(error => console.error('Error:', error));
    return(null);
}