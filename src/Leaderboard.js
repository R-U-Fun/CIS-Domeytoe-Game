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
import Timer from './Timer';
import StartGame from './StartGame';
import Level from './Level';

import UserProfile from './UserProfile';

function LeaderboardUI(props){
    return(
        <tr>
            <th><a className="btn btn-danger m-1 fw-bold" style={{width:"40px", cursor: 'auto'}}><i className={`bi bi-${props.Rank}-square-fill`}></i></a></th>
            <td><a className="btn btn-danger m-1 fw-bold" style={{width:"200px", cursor: 'auto'}}>{props.Name}</a></td>
            <td>
                <a className="btn btn-danger m-1 fw-bold" style={{width:"50px", cursor: 'auto'}}>
                    {props.BestTime}
                </a>
            </td>
        </tr>
    );
}

function UsersOfLeaderboard(props){
    let Rank = props.Rank;
    fetch(`http://localhost:3214/Server/Leaderboard/${Rank}`)
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

        ReactDOM.render(<LeaderboardUI Rank={props.Rank} Name={Data.Name} BestTime={Data.BestTime} />, document.getElementById('tr'+props.Rank));
    })
    .catch(error => console.error('Error:', error));
}

export default function Leaderboard(props){
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px"}} onClick={() => ReactDOM.render(<HomeLinks CurrentUserName={props.CurrentUserName} />, document.getElementById('Box'))}>Leaderboard</a>
            <table className="text-start">
                <tbody>
                    <tr id="tr1">
                        <UsersOfLeaderboard CurrentUserName={props.CurrentUserName} Rank={1} />
                    </tr>
                    <tr id="tr2">
                        <UsersOfLeaderboard CurrentUserName={props.CurrentUserName} Rank={2} />
                    </tr>
                    <tr id="tr3">
                        <UsersOfLeaderboard CurrentUserName={props.CurrentUserName} Rank={3} />
                    </tr> 
                    <tr id="tr4">
                        <UsersOfLeaderboard CurrentUserName={props.CurrentUserName} Rank={4} />
                    </tr> 
                    <tr id="tr5">
                        <UsersOfLeaderboard CurrentUserName={props.CurrentUserName} Rank={5} />
                    </tr> 
                    <tr id="tr6">
                        <UsersOfLeaderboard CurrentUserName={props.CurrentUserName} Rank={6} />
                    </tr> 
                    <tr id="tr7">
                        <UsersOfLeaderboard CurrentUserName={props.CurrentUserName} Rank={7} />
                    </tr> 
                    <tr id="tr8">
                        <UsersOfLeaderboard CurrentUserName={props.CurrentUserName} Rank={8} />
                    </tr> 
                    <tr id="tr9">
                        <UsersOfLeaderboard CurrentUserName={props.CurrentUserName} Rank={9} />
                    </tr> 
                </tbody>
            </table>
        </div>
    );
}