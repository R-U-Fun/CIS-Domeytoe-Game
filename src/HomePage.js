import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import HomeLinks from './HomeLinks';

import Player from './Player';
import Timer from './Timer';
import StartGame from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

export default function HomePage(){
    return(
        <div>
            <div className="container text-center">
                <div className="row gx-3 text-center justify-content-center">
                    <div className="col-sm-4 col-md-4 col-lg-6 rounded-4 border border-danger border-5">
                        <div className="card my-4 text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex', justifyContent: 'center', alignItems: 'center'}} id="Box">
                            <Login/>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    );
}