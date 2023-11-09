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
import Leaderboard from './Leaderboard';


function UserProfileUI(props){
    return(
        <div>
        <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px"}} onClick={() => ReactDOM.render(<HomeLinks CurrentUserName={props.CurrentUserName} />, document.getElementById('Box'))}>Profile</a>
        <br/>
            <table className="text-start">
                <tbody>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>User ID</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{props.UserID}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Username</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{props.Name}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Longest Streaks</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{props.DailyStreaks}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Rank</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{props.Rank}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Best Time</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{props.BestTime}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Games Played</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{props.GamesPlayed}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Games Won</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{props.GamesWon}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default function UserProfile(props){
    ReactDOM.render(<div></div>, document.getElementById('TimerHere'));
    ReactDOM.render(<div></div>, document.getElementById('PlayerHere')); 
    
    let CurrentUserName= props.CurrentUserName;
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

        ReactDOM.render(<UserProfileUI CurrentUserName={props.CurrentUserName} UserID={Data.UserID} Name={Data.Name} DailyStreaks={Data.DailyStreaks} Rank={Data.Rank} BestTime={Data.BestTime} GamesPlayed={Data.GamesPlayed} GamesWon={Data.GamesWon} />, document.getElementById('Box'));

    })
    .catch(error => console.error('Error:', error));
}