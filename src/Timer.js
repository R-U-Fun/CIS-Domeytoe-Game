import ReactDOM from 'react-dom';
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

import StartGame, { GameOver } from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

//import GameOver from './StartGame';

function TimerUI(props){
    return(
        <div className="container-fluids" >
            <a className="btn btn-danger btn-lg" style={{ position: 'absolute', top: '100px', left: '1200px'}} onClick={() =>  ReactDOM.render(<UserProfile Username="Aaroophan" Best1={1} Best2={2} Played={10} Won={8} />, document.getElementById('Box'))}>
                &nbsp;&nbsp;&nbsp;
                <p className="fs-1 fw-bold">{props.TimeLeft}</p>
                <p className="fs-1 fw-bold"><i className="bi bi-hourglass-split"></i></p>
                <p className="fs-1 fw-bold">{props.TimeElapsed}</p>
            </a>
        </div>
    );
}

export default function Timer(props){
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
            ReactDOM.render(<TimerUI TimeLeft={TimeLeft} TimeElapsed={TimeElapsed} />, document.getElementById('TimerHere'));
        } else {
            clearInterval(OneSecPass);
            ReactDOM.render(<GameOver />, document.getElementById('InputAnswer'));
        }
    }, 1000);

    return null;
}