import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import UserProfile from './UserProfile';
import Leaderboard from './Leaderboard';
import StartGame from './StartGame';
import Level from './Level';
import Login from './Login';

export default function HomeLinks(){
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold">Domeytoe</a><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))}>Start Game</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Level />, document.getElementById('Box'))}>Levels</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Leaderboard />, document.getElementById('Box'))}>Leaderboard</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<UserProfile Username="Aaroophan" Best1={1} Best2={2} Played={10} Won={8} />, document.getElementById('Box'))}>Profile</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Login />, document.getElementById('Box'))}>Logout</button><br/>
        </div>
    );
}