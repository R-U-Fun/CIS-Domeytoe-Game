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

import StartGame from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

export default function Timer(){
    let TimeLeft = 49;
    let TimeElapsed = 11;
    return(
        <div className="container-fluids" >
            <a className="btn btn-danger btn-lg" style={{ position: 'absolute', top: '100px', left: '1200px'}} onClick={() =>  ReactDOM.render(<UserProfile Username="Aaroophan" Best1={1} Best2={2} Played={10} Won={8} />, document.getElementById('Box'))}>
                &nbsp;&nbsp;&nbsp;
                <p className="fs-1 fw-bold">{TimeLeft}</p>
                <p className="fs-1 fw-bold"><i className="bi bi-hourglass-split"></i></p>
                <p className="fs-1 fw-bold">{TimeElapsed}</p>
            </a>
        </div>
    );
}