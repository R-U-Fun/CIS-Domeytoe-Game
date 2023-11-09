import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Main from './App';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';

import HomePage from './HomePage';
import Player from './Player';
import Timer from './Timer';
import StartGame from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

function LogOut(){
    ReactDOM.render(<Login />, document.getElementById('Box'));
    ReactDOM.render(<div></div>, document.getElementById('PlayerHere')); 
    ReactDOM.render(<div></div>, document.getElementById('TimerHere'));
}

export default function HomeLinks(props){
    ReactDOM.render(<Player CurrentUserName={props.CurrentUserName}/>, document.getElementById('PlayerHere'));
    ReactDOM.render(<div></div>, document.getElementById('TimerHere'));
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px"}} onClick={() => ReactDOM.render(<HomeLinks CurrentUserName={props.CurrentUserName} />, document.getElementById('Box'))}>Domeytoe</a><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Level CurrentUserName={props.CurrentUserName} />, document.getElementById('Box'))} style={{width:"200px"}}>Start Game</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<StartGame CurrentUserName={props.CurrentUserName} />, document.getElementById('Box'))} style={{width:"200px"}}>Daily Challenges</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Leaderboard CurrentUserName={props.CurrentUserName} />, document.getElementById('Box'))} style={{width:"200px"}}>Leaderboard</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<UserProfile CurrentUserName={props.CurrentUserName} />, document.getElementById('Box'))} style={{width:"200px"}}>Profile</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<LogOut />, document.getElementById('Box'))} style={{width:"200px"}}>Logout</button><br/>
        </div>
    );
}