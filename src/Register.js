import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import React, { useState, useRef } from 'react';
import axios from 'axios';

import Main from './App';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

import HomeLinks from './HomeLinks';
import HomePage from './HomePage';
import Player from './Player';
import Timer from './Timer';
import StartGame from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

function RegisterHandle(NewUserName, NewPassword, NewConfirmPassword){
    if( NewUserName && NewPassword && NewConfirmPassword){
        if(NewPassword === NewConfirmPassword){
        fetch(`http://localhost:3214/Server/UserProfile/${NewUserName}`)
        .then(response => response.json())
        .then(Data => {
            if(!Data){
                fetch('http://localhost:3214/Server/Register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            UserID: null,
                            Name: NewUserName,
                            Password: NewPassword,
                            ChallengeDate: "00000000",
                            DailyStreaks: 0,
                            Rank: 0,
                            BestTime: 60,
                            GamesPlayed: 0,
                            GamesWon: 0
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log("REGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGg");
                        console.log(data);
                        ReactDOM.render(<Login />, document.getElementById('Box'));
                    })
                    .catch(error => {
                        console.error(error);
                        console.log("Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror registering new user     "+error);
                    });
            }
            else{
                alert("Username Already Exists");
            }
        
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Can Not Connect At The Moment: Server Update On Progress.");
        });
        
        }
        else{
            alert("Password & Confirm Password doesn't match");
        }
    }
    else{
        alert("Please fill Username, Password & Confirm Password");
    }
}

export default function Register(){
    const usernameRef = useRef();
    const passwordRef = useRef();
    const ConfirmpasswordRef = useRef();
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px"}} onClick={() => ReactDOM.render(<Login />, document.getElementById('Box'))}>Register</a>
            <br/><br/><br/>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-danger" id="basic-addon1"><i className="bi bi-at"></i></span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" ref={usernameRef}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-danger" id="basic-addon1"><i className="bi bi-asterisk"></i></span>
                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" ref={passwordRef}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-danger" id="basic-addon1"><i className="bi bi-asterisk"></i></span>
                <input type="password" className="form-control" placeholder="Confirm Password" aria-label="ConfirmPassword" aria-describedby="basic-addon1" ref={ConfirmpasswordRef}/>
            </div>
            <button type="button" className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => RegisterHandle(usernameRef.current.value, passwordRef.current.value, ConfirmpasswordRef.current.value)}><i className="bi bi-pen"></i> Register</button>
            <br/><br/><br/><br/>
        </div>
    );
}