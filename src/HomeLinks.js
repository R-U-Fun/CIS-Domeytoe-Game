import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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

export default function HomeLinks(){
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"400px"}}>Domeytoe</a><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))} style={{width:"200px"}}>Start Game</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Level />, document.getElementById('Box'))} style={{width:"200px"}}>Levels</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Leaderboard />, document.getElementById('Box'))} style={{width:"200px"}}>Leaderboard</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<UserProfile Username="Aaroophan" Best1={1} Best2={2} Played={10} Won={8} />, document.getElementById('Box'))} style={{width:"200px"}}>Profile</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Login />, document.getElementById('Box'))} style={{width:"200px"}}>Logout</button><br/>
        </div>
    );
}