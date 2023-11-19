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

import Timer from './Timer';
import StartGame from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

import CurrentUserNameSingleton from './UserSingleton';

export default function Player(props){

    const Hearts = {
        H1 : true,
        H2 : true,
        H3 : true
    }
    let HowManyHearts = parseInt(props.HowManyHearts);
    if(HowManyHearts === 3){
        Hearts.H1 = true;
        Hearts.H2 = true;
        Hearts.H3 = true;
    }
    else if(HowManyHearts === 2){
        Hearts.H1 = true;
        Hearts.H2 = true;
        Hearts.H3 = false;
    }
    else if(HowManyHearts === 1){
        Hearts.H1 = true;
        Hearts.H2 = false;
        Hearts.H3 = false;
    }
    else if(HowManyHearts === 0){
        Hearts.H1 = false;
        Hearts.H2 = false;
        Hearts.H3 = false;
    }
    else{
        Hearts.H1 = true;
        Hearts.H2 = true;
        Hearts.H3 = true;
    }

    let UserData = CurrentUserNameSingleton.getUserName();

    return(
        <div className="container-fluids">
            <a className="btn btn-danger btn-lg m-3" onClick={() => ReactDOM.render(<UserProfile />, document.getElementById('Box'))}>
                &nbsp;&nbsp;&nbsp;
                <p className="fw-bold"><i className="bi bi-person-fill"></i></p>
                <p className="fw-bold">{UserData.Name}</p>
                <p className="fw-bold">
                    {Hearts.H1 ? <i className="bi bi-suit-heart-fill"> </i> : <i className="bi bi-suit-heart"> </i>}
                    {Hearts.H2 ? <i className="bi bi-suit-heart-fill"> </i> : <i className="bi bi-suit-heart"> </i>}
                    {Hearts.H3 ? <i className="bi bi-suit-heart-fill"> </i> : <i className="bi bi-suit-heart"> </i>}
                </p>
            </a>
        </div>
    );
    
}