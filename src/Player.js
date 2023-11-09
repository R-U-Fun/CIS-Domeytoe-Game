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

import Timer from './Timer';
import StartGame from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

function Hearts(HeartsProps){
    if(HeartsProps.Fill==true){
        return(
            <i className="bi bi-suit-heart-fill"> </i>
        );
    }
    else{
        return(
            <i className="bi bi-suit-heart"> </i>
        );
    }
}

function PlayerUI(props){
    return(
        <div className="container-fluids">
            <a className="btn btn-danger btn-lg m-3"  onClick={() => ReactDOM.render(<UserProfile CurrentUserName={props.CurrentUserName} />, document.getElementById('Box'))}>
                &nbsp;&nbsp;&nbsp;
                <p className="fw-bold"><i className="bi bi-person-fill"></i></p>
                <p className="fw-bold">{props.Username}</p>
                <p className="fw-bold">
                    <Hearts Fill={props.H1}/>
                    <Hearts Fill={props.H2}/>
                    <Hearts Fill={props.H3}/>
                </p>
                <br/>
                <p className="fw-bold"><i className="bi bi-trophy-fill"></i> : {props.Rank}</p>
                <p className="fw-bold"><i className="bi bi-fire"></i> : {props.DailyStreaks}</p>
            </a>
        </div>
    );
}

        
export default function Player(props){

    let H1 = true;
    let H2 = true;
    let H3 = true;
    let HowManyHearts = parseInt(props.HowManyHearts);
    if(HowManyHearts === 3){
        H1 = true;
        H2 = true;
        H3 = true;
    }
    else if(HowManyHearts === 2){
        H1 = true;
        H2 = true;
        H3 = false;
    }
    else if(HowManyHearts === 1){
        H1 = true;
        H2 = false;
        H3 = false;
    }
    else if(HowManyHearts === 0){
        H1 = false;
        H2 = false;
        H3 = false;
    }
    else{
        H1 = true;
        H2 = true;
        H3 = true;
    }

    let CurrentUserName=props.CurrentUserName;
    fetch(`http://localhost:3214/Server/UserProfile/${CurrentUserName}`)
    .then(response => response.json())
    .then(Data => {
        // Use the Data here
        console.log("DATA Users= "+Data.UserID);
        console.log("DATA Name = "+Data.Name);
        console.log("DATA Password = "+Data.Password);
        console.log("DATA DailyStreaks = "+Data.DailyStreaks);
        console.log("DATA Rank = "+Data.Rank);
        console.log("DATA BestTime = "+Data.BestTime);
        console.log("DATA GamesPlayed = "+Data.GamesPlayed);
        console.log("DATA GamesWon = "+Data.GamesWon);

        ReactDOM.render(<PlayerUI CurrentUserName={props.CurrentUserName} Username={Data.Name} DailyStreaks={Data.DailyStreaks} Rank={Data.Rank} H1={H1} H2={H2} H3={H3} />, document.getElementById('PlayerHere'));

    })
    .catch(error => console.error('Error:', error));
    
}