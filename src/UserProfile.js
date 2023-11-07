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
        <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"400px"}}>Profile</a>
        <br/><br/><br/>
            <table className="text-start">
                <tbody>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>User ID</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>{props.UserID}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>Username</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>{props.Name}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>Best Time</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>{props.BestTime}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>Games Played</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>{props.GamesPlayed}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>Games Won</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>{props.GamesWon}</a></td>
                    </tr>
                </tbody>
            </table>
        <br/><br/><br/>
        </div>
    );
}

export default function UserProfile(props){
    ReactDOM.render(<div></div>, document.getElementById('TimerHere'));
    ReactDOM.render(<div></div>, document.getElementById('PlayerHere')); 
    
    fetch('http://localhost:3001/Server/UserProfile')
    .then(response => response.json())
    .then(Data => {
        // Use the Data here
        console.log("DATA Users= "+Data.UserID);
        console.log("DATA Name = "+Data.Name);
        console.log("DATA Password = "+Data.Password);
        console.log("DATA BestTime = "+Data.BestTime);
        console.log("DATA GamesPlayed = "+Data.GamesPlayed);
        console.log("DATA GamesWon = "+Data.GamesWon);

        ReactDOM.render(<UserProfileUI UserID={Data.UserID} Name={Data.Name} BestTime={Data.BestTime} GamesPlayed={Data.GamesPlayed} GamesWon={Data.GamesWon} />, document.getElementById('Box'));

    })
    .catch(error => console.error('Error:', error));
}