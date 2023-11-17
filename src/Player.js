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

import CurrentUserNameSingleton from './UserSingleton';

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
    let CurrentUserName = CurrentUserNameSingleton.getUserName();
    return(
        <div className="container-fluids">
            <a className="btn btn-danger btn-lg m-3" onClick={() => ReactDOM.render(<UserProfile />, document.getElementById('Box'))}>
                &nbsp;&nbsp;&nbsp;
                <p className="fw-bold"><i className="bi bi-person-fill"></i></p>
                <p className="fw-bold">{CurrentUserName}</p>
                <p className="fw-bold">
                    <Hearts Fill={props.Hearts.H1}/>
                    <Hearts Fill={props.Hearts.H2}/>
                    <Hearts Fill={props.Hearts.H3}/>
                </p>
            </a>
        </div>
    );
}

        
export default function Player(props){

    const Hearts = {
        H1 : true,
        H2 : true,
        H3 : true
    }
    let HowManyHearts = parseInt(props.HowManyHearts);
    if(HowManyHearts === 3){
        Hearts.H1 = true;
        Hearts.H2 = true;
        Hearts.H3 = true;
    }
    else if(HowManyHearts === 2){
        Hearts.H1 = true;
        Hearts.H2 = true;
        Hearts.H3 = false;
    }
    else if(HowManyHearts === 1){
        Hearts.H1 = true;
        Hearts.H2 = false;
        Hearts.H3 = false;
    }
    else if(HowManyHearts === 0){
        Hearts.H1 = false;
        Hearts.H2 = false;
        Hearts.H3 = false;
    }
    else{
        Hearts.H1 = true;
        Hearts.H2 = true;
        Hearts.H3 = true;
    }

    let CurrentUserName = CurrentUserNameSingleton.getUserName();
    console.log("PPPPPPLLLLLAAAAYYYYEEEERRRR     "+CurrentUserName);

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

        ReactDOM.render(<PlayerUI Hearts={Hearts} />, document.getElementById('PlayerHere'));

    })
    .catch(error => console.error('Error:', error));
    
}