import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomeLinks from './HomeLinks';

function LeaderboardUI(props){
    return(
        <tr>
            <td><a className="btn btn-danger m-1 fw-bold" style={{width:"40px", cursor: 'auto'}}><i className={`bi bi-${props.Data.Rank}-square-fill`}></i></a></td>
            <td><a className="btn btn-danger m-1 fw-bold" style={{width:"150px", cursor: 'auto'}}>{props.Data.Name}</a></td>
            <td><a className="btn btn-danger m-1 fw-bold" style={{width:"50px", cursor: 'auto'}}>{props.Data.BestTime}</a></td>
            <td><a className="btn btn-danger m-1 fw-bold" style={{width:"50px", cursor: 'auto'}}>{props.Data.DailyStreaks}</a></td>
        </tr>
    );
}

function UsersOfLeaderboard(props){
    let Rank = props.Rank;
    fetch(`https://cis-domeytoe-game.onrender.com/Server/Leaderboard/${Rank}`)
    .then(response => response.json())
    .then(Data => {
        console.table(Data);
        ReactDOM.render(<LeaderboardUI Data={Data} />, document.getElementById('tr'+props.Rank));
    })
    .catch(error => console.error('Error:', error));
}

export default function Leaderboard(){
    fetch('https://cis-domeytoe-game.onrender.com/Server/UpdateRanks', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .catch(error => console.error('Error:', error));
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px"}} onClick={() => ReactDOM.render(<HomeLinks />, document.getElementById('Box'))}>Leaderboard</a>
            <table className="text-start">
                <tbody>
                    <tr>
                        <tr>
                        <th><a className="btn btn-danger m-1 fw-bold" style={{width:"40px" , cursor: 'auto'}}><i className="bi bi-trophy-fill"></i></a></th>
                        <th><a className="btn btn-danger m-1 fw-bold" style={{width:"150px", cursor: 'auto'}}><i className="bi bi-person-fill"></i></a></th>
                        <th><a className="btn btn-danger m-1 fw-bold" style={{width:"50px" , cursor: 'auto'}}><i className="bi bi-hourglass-split"></i></a></th>
                        <th><a className="btn btn-danger m-1 fw-bold" style={{width:"50px" , cursor: 'auto'}}><i className="bi bi-fire"></i></a></th>
                        </tr>
                    </tr>
                    <tr id="tr1">
                        <UsersOfLeaderboard Rank={1} />
                    </tr>
                    <tr id="tr2">
                        <UsersOfLeaderboard Rank={2} />
                    </tr>
                    <tr id="tr3">
                        <UsersOfLeaderboard Rank={3} />
                    </tr> 
                    <tr id="tr4">
                        <UsersOfLeaderboard Rank={4} />
                    </tr> 
                    <tr id="tr5">
                        <UsersOfLeaderboard Rank={5} />
                    </tr> 
                    <tr id="tr6">
                        <UsersOfLeaderboard Rank={6} />
                    </tr> 
                    <tr id="tr7">
                        <UsersOfLeaderboard Rank={7} />
                    </tr> 
                    <tr id="tr8">
                        <UsersOfLeaderboard Rank={8} />
                    </tr> 
                    <tr id="tr9">
                        <UsersOfLeaderboard Rank={9} />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}