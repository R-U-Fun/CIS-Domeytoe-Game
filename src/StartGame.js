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

import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

function CorrectOrNot(){
    return null;
}

function Game(props){
    console.log(props.question);
    console.log(props.solution);
    return(
        <div className="card text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"400px"}}>Game</a>
            <img src={props.question} className="card-img-top" alt="..." style={{objectFit: 'cover'}}/>
            <div className="card-body" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none' }}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className="bi bi-123"></i></span>
                    <input type="text" className="form-control" placeholder="Answer" aria-label="Answer" aria-describedby="basic-addon1"/>
                    &nbsp;&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => ReactDOM.render(<CorrectOrNot Correct={props.solution} Answer= {null} />, document.getElementById('Box'))}><i className="bi bi-arrow-return-right"></i></button>
                </div>
            </div>
        </div>
    );
}
        
export default function StartGame(){
    fetch('https://marcconrad.com/uob/tomato/api.php')
        .then(response => response.json())
        .then(data => {
            console.log(data.question);
            console.log(data.solution);
            ReactDOM.render(<Game question={data.question} solution= {data.solution} />, document.getElementById('Box'));
        })
        .catch(error => console.error('Error:', error));
    return null;
}