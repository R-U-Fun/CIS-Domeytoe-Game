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
import Level from './Level';

import UserProfile from './UserProfile';

function UsersOfLeaderboard(props){
    return(
        <tr>
            <th><a className="btn btn-danger m-1 fw-bold" style={{width:"50px"}}><i className={`bi bi-${props.Rank}-square-fill`}></i></a></th>
            <td><a className="btn btn-danger m-1 fw-bold" style={{width:"300px"}}>{props.Username}</a></td>
            <td>
                <a className="btn btn-danger m-1 fw-bold" style={{width:"100px"}}>
                    <i className={`bi bi-${props.Best1}-square-fill`}></i>
                    &nbsp;
                    <i className={`bi bi-${props.Best2}-square-fill`}></i>
                </a>
            </td>
        </tr>
    );
}

export default function Leaderboard(props){
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"400px"}}>Leaderboard</a>
            <table className="text-start">
                <tbody>
                    <UsersOfLeaderboard Rank={1} Username="Userdfdfdfname1" Best1={1} Best2={1} />
                    <UsersOfLeaderboard Rank={2} Username="Username2" Best1={2} Best2={1} />
                    <UsersOfLeaderboard Rank={3} Username="Username3" Best1={3} Best2={2} />
                    <UsersOfLeaderboard Rank={4} Username="Username4" Best1={4} Best2={3} />
                    <UsersOfLeaderboard Rank={5} Username="Username4" Best1={5} Best2={4} />
                    <UsersOfLeaderboard Rank={6} Username="Username4" Best1={6} Best2={5} />
                    <UsersOfLeaderboard Rank={7} Username="Username4" Best1={7} Best2={6} />
                    <UsersOfLeaderboard Rank={8} Username="Username4" Best1={8} Best2={7} />
                    <UsersOfLeaderboard Rank={9} Username="Username4" Best1={9} Best2={8} />
                </tbody>
            </table>
        </div>
    );
}