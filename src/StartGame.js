import ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Main from './App';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import HomeLinks from './HomeLinks';
import HomePage from './HomePage';
import Player from './Player';
import Timer, { StopTimer } from './Timer';

import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';
import BestTime from './BestTime';

function UpdateGamesPlayed(CurrentUserName){

    fetch(`http://localhost:3214/Server/UserProfile/${CurrentUserName}`)
        .then(response => response.json())
        .then(Data => {
            let GamesPlayed = Data.GamesPlayed;
            if(GamesPlayed === null){
                GamesPlayed=1;
            }
            else{
                GamesPlayed = GamesPlayed + 1;
            }
            fetch(`http://localhost:3214/Server/GamesPlayed/${CurrentUserName}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        GamesPlayed: GamesPlayed,
                    }),
                })
                .catch((error) => {
                    console.log('Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror:', error);
                });
                
        })
        .catch(error => console.error('Error:', error));
}

export function GameOver(props){
    return(
        <div>
            <i class="bi bi-heartbreak-fill btn btn-danger btn-lg m-4 fs-2 fw-bold" style={{cursor: 'auto'}}></i><br/>
            <button class="bi bi-arrow-clockwise btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<StartGame CurrentUserName={props.CurrentUserName} Level={props.Level} />, document.getElementById('Box'))}></button>
        </div>
    );
}

function GameWon(props){
    return(
        <div>
            <a className="btn btn-danger btn-lg m-4 fw-bold" style={{cursor: 'auto'}}>Correct</a>
            <i class="bi bi-hand-thumbs-up-fill btn btn-danger btn-lg m-4" style={{cursor: 'auto'}}></i><br/>
            <button class="bi bi-arrow-clockwise btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<StartGame CurrentUserName={props.CurrentUserName} Level={props.Level} />, document.getElementById('Box'))}></button>
        </div>
    );
}

function CorrectOrNot(props){
    console.log("CorrectorNot - Correct = "+props.Correct);
    console.log("CorrectorNot - User = "+props.Answer);
    if(props.Answer === props.Correct){
        props.stopTimer();
        ReactDOM.render(<GameWon CurrentUserName={props.CurrentUserName} Level={props.Level} />, document.getElementById('InputAnswer'));
    }
    else{
        props.setHowManyHearts(props.HowManyHearts - 1);
        if(parseInt(props.HowManyHearts) === 1){
            props.stopTimer();
            ReactDOM.render(<Player CurrentUserName={props.CurrentUserName} HowManyHearts={(props.HowManyHearts)-1}/>, document.getElementById('PlayerHere'));
            ReactDOM.render(<GameOver CurrentUserName={props.CurrentUserName} Level={props.Level} />, document.getElementById('InputAnswer'));
        }
        else{
            ReactDOM.render(<Player CurrentUserName={props.CurrentUserName} HowManyHearts={(props.HowManyHearts)-1}/>, document.getElementById('PlayerHere'));
            return(
                <div>
                    <a className="btn btn-danger btn-lg m-4 fw-bold" style={{cursor: 'auto'}}>Incorrect</a>
                    <i class="bi bi-hand-thumbs-down-fill btn btn-danger btn-lg m-4" style={{cursor: 'auto'}}></i>
                </div>
            );
        }
    }
}

function Game(props){
    const inputRef = useRef();
    const [HowManyHearts, setHowManyHearts] = useState(props.HowManyHearts);
    return(
        <div className="card text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px"}} onClick={() => ReactDOM.render(<HomeLinks CurrentUserName={props.CurrentUserName} />, document.getElementById('Box'))}>Game</a>
            <img src={props.question} className="card-img-top" alt="..." style={{objectFit: 'cover'}}/>
            <div id="InputAnswer" className="card-body" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none' }}>
                <div className="input-group mb-3">
                    <span className="input-group-text bi bi-123 btn btn-danger" id="AnswerText" style={{cursor: 'auto'}}></span>
                    <input type="text" className="form-control" placeholder="Answer" aria-label="Answer" aria-describedby="AnswerText" ref={inputRef}/>
                    &nbsp;&nbsp;&nbsp;
                    <button type="button" className="bi bi-arrow-return-right btn btn-danger fw-bold" onClick={() => ReactDOM.render(<CorrectOrNot CurrentUserName={props.CurrentUserName}  Correct={parseInt(props.solution)} Answer={parseInt(inputRef.current.value)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} Level={props.Level} />, document.getElementById('CoN'))}></button>
                </div>
                <div id="CoN"></div>
                <div id="Best"></div>
            </div>
        </div>
    );
}
        
export default function StartGame(props){

    let CurrentUserName = props.CurrentUserName;

    UpdateGamesPlayed(CurrentUserName);

    let TimeLeft;
    let TimeElapsed = 0;
    let Level = parseInt(props.Level);

    if(Level === 1){
        TimeLeft = 60;
    }
    else if(Level === 2){
        TimeLeft = 40;
    }
    else if(Level === 3){
        TimeLeft = 20;
    }
    else{
        TimeLeft = 10;
    }

    let OneSecPass = setInterval(() => {
        if(TimeLeft > 0) {
            TimeLeft = (TimeLeft - 1);
            TimeElapsed = (TimeElapsed + 1);
            console.log(TimeLeft);
            console.log(TimeElapsed);
            ReactDOM.render(<Timer Level={props.Level} TimeLeft={TimeLeft} TimeElapsed={TimeElapsed} />, document.getElementById('TimerHere'));
        } else {
            clearInterval(OneSecPass);
            ReactDOM.render(<GameOver CurrentUserName={props.CurrentUserName} Level={props.Level}/>, document.getElementById('InputAnswer'));
        }
    }, 1000);

    const stopTimer = () => {
        clearInterval(OneSecPass);
        ReactDOM.render(<BestTime CurrentUserName={props.CurrentUserName} TimeElapsed={TimeElapsed} />, document.getElementById('CoN'));
    };
    
    fetch('https://marcconrad.com/uob/tomato/api.php')
        .then(response => response.json())
        .then(data => {
            console.log("API - Question = "+data.question);
            console.log("API - sSolution = "+data.solution);
            ReactDOM.render(<Game CurrentUserName={props.CurrentUserName} question={data.question} solution= {data.solution} HowManyHearts={3} Level={props.Level} stopTimer={stopTimer} />, document.getElementById('Box'));
        })
        .catch(error => console.error('Error:', error));
    return null;
}