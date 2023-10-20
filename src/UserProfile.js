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


export default function UserProfile(props){
    ReactDOM.render(<div></div>, document.getElementById('TimerHere'));
    return(
        <div>
        <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"400px"}}>Profile</a>
        <br/><br/>
            <table className="text-start">
                <tbody>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>Username</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>{props.Username}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>Best Time</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>{props.Best1} {props.Best2}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>Games Played</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>{props.Played}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>Games Won</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold" style={{width:"200px"}}>{props.Won}</a></td>
                    </tr>
                </tbody>
            </table>
        <br/><br/>
        </div>
    );
}