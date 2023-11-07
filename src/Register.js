import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Main from './App';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

import HomeLinks from './HomeLinks';
import HomePage from './HomePage';
import Player from './Player';
import Timer from './Timer';
import StartGame from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

export default function Register(){
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px", cursor: 'auto'}}>Register</a>
            <br/><br/><br/>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-danger" id="basic-addon1"><i className="bi bi-at"></i></span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-danger" id="basic-addon1"><i className="bi bi-asterisk"></i></span>
                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-danger" id="basic-addon1"><i className="bi bi-asterisk"></i></span>
                <input type="password" className="form-control" placeholder="Confirm Password" aria-label="ConfirmPassword" aria-describedby="basic-addon1"/>
            </div>
            <button type="button" className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Login />, document.getElementById('Box'))}><i className="bi bi-door-closed"></i> Register</button>
            <br/><br/><br/><br/>
        </div>
    );
}