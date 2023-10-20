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
import Timer from './Timer';

import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

function GameOver(props){
    return(
        <div>
            <i class="bi bi-heartbreak-fill btn btn-danger btn-lg m-4 fs-2 fw-bold"></i><br/>
            <a className="btn btn-danger btn-lg m-4 fw-bold">Answer is {props.Correct}</a>
        </div>
    );
}

function CorrectOrNot(props){
    console.log("CorrectorNot - Correct = "+props.Correct);
    console.log("CorrectorNot - User = "+props.Answer);
    if(props.Answer === props.Correct){
        return(
            <div>
                <a className="btn btn-danger btn-lg m-4 fw-bold">Correct</a>
                <i class="bi bi-hand-thumbs-up-fill btn btn-danger btn-lg m-4"></i>
            </div>
        );
    }
    else{
        props.setHowManyHearts(props.HowManyHearts - 1);
        if(parseInt(props.HowManyHearts) === 1){
            ReactDOM.render(<Player HowManyHearts={(props.HowManyHearts)-1}/>, document.getElementById('PlayerHere'));
            ReactDOM.render(<GameOver Correct={props.Correct} />, document.getElementById('InputAnswer'));
        }
        else{
            ReactDOM.render(<Player HowManyHearts={(props.HowManyHearts)-1}/>, document.getElementById('PlayerHere'));
            return(
                <div>
                    <a className="btn btn-danger btn-lg m-4 fw-bold">Incorrect</a>
                    <i class="bi bi-hand-thumbs-down-fill btn btn-danger btn-lg m-4"></i>
                </div>
            );
        }
    }
}

function Game(props){
    ReactDOM.render(<Timer/>, document.getElementById('TimerHere'));
    const inputRef = useRef();
    const [HowManyHearts, setHowManyHearts] = useState(props.HowManyHearts);
    return(
        <div className="card text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"400px"}}>Game</a>
            <img src={props.question} className="card-img-top" alt="..." style={{objectFit: 'cover'}}/>
            <div className="card-body" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none' }}>
                <div id="InputAnswer" className="input-group mb-3">
                    <span className="input-group-text bi bi-123 btn btn-danger" id="AnswerText"></span>
                    <input type="text" className="form-control" placeholder="Answer" aria-label="Answer" aria-describedby="AnswerText" ref={inputRef}/>
                    &nbsp;&nbsp;&nbsp;
                    <button type="button" className="bi bi-arrow-return-right btn btn-danger fw-bold" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.solution)} Answer={parseInt(inputRef.current.value)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts}/>, document.getElementById('CoN'))}></button>
                </div>
                <div id="CoN"></div>
                <button class="bi bi-arrow-clockwise btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))}></button>
            </div>
        </div>
    );
}
        
export default function StartGame(){
    fetch('https://marcconrad.com/uob/tomato/api.php')
        .then(response => response.json())
        .then(data => {
            console.log("API - Question = "+data.question);
            console.log("API - Solution = "+data.solution);
            ReactDOM.render(<Game question={data.question} solution= {data.solution} HowManyHearts={3} />, document.getElementById('Box'));
        })
        .catch(error => console.error('Error:', error));
    return null;
}