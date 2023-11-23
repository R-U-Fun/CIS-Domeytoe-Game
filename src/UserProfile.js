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

import CurrentUserNameSingleton from './UserSingleton';

export default function UserProfile(){
    ReactDOM.render(<div></div>, document.getElementById('TimerHere'));
    ReactDOM.render(<div></div>, document.getElementById('PlayerHere')); 
    
    let UserData = CurrentUserNameSingleton.getUserName();

    return(
        <div>
        <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px"}} onClick={() => ReactDOM.render(<HomeLinks />, document.getElementById('Box'))}>Profile</a>
        <br/>
            <table className="text-start">
                <tbody>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Username</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.Name}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Longest Streaks</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.DailyStreaks}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Rank</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.Rank}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Best Time</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.BestTime}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Games Played</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.GamesPlayed}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>Games Won</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"150px", cursor: 'auto'}}>{UserData.GamesWon}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}