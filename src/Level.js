import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import HomeLinks from './HomeLinks';
import HomePage from './HomePage';
import Player from './Player';
import Timer from './Timer';
import StartGame from './StartGame';

import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

export default function Level(){
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"400px"}}>Levels</a>
            <br/><br/><br/>
            <button className="btn btn-danger btn-lg m-4 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))} style={{width:"200px"}}>Easy</button><br/>
            <button className="btn btn-danger btn-lg m-4 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))} style={{width:"200px"}}>Medium</button><br/>
            <button className="btn btn-danger btn-lg m-4 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))} style={{width:"200px"}}>Hard</button>
            <br/><br/><br/>
        </div>
    );
}