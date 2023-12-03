import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from './Login';
import Player from './Player';
import StartGame from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';
import CurrentUserNameSingleton from './UserSingleton';
import CurrentDailyChallengesSingleton from './DailyChallengesSingleton';
import CurrentDailyStreaksSingleton from './DailyStreaksSingleton';
import CurrentLevelSingleton from './LevelSingleton';

function DailyChallenges(){
    let UserData = CurrentUserNameSingleton.getUserName();
    const CurrentDate = new Date();
    if((""+CurrentDate.getFullYear()+(CurrentDate.getMonth()+1)+CurrentDate.getDate()+"") === UserData.ChallengeDate){
        return(true);
    }
    else{
        return(false);
    }
}

export default function HomeLinks(){
    ReactDOM.render(<Player/>, document.getElementById('PlayerHere'));
    ReactDOM.render(<div></div>, document.getElementById('TimerHere'));
    console.log(DailyChallenges());
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px"}} onClick={() => ReactDOM.render(<HomeLinks />, document.getElementById('Box'))}>Domeytoe</a><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => {
                ReactDOM.render(<Level />, document.getElementById('Box'));
                CurrentDailyChallengesSingleton.setDailyChallenges(false);
            }} style={{width:"200px"}}>Start Game</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => {
                ReactDOM.render(<StartGame />, document.getElementById('Box'));
                CurrentDailyChallengesSingleton.setDailyChallenges(true);
                CurrentDailyStreaksSingleton.setDailyStreaks(0);
                CurrentLevelSingleton.setLevel(4);
            }} style={{width:"200px"}} disabled={DailyChallenges() ? true : null}>Daily Challenges</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Leaderboard />, document.getElementById('Box'))} style={{width:"200px"}}>Leaderboard</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<UserProfile />, document.getElementById('Box'))} style={{width:"200px"}}>Profile</button><br/>
            <button className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => {
                ReactDOM.render(<div></div>, document.getElementById('PlayerHere')); 
                ReactDOM.render(<div></div>, document.getElementById('TimerHere'));
                ReactDOM.render(<Login />, document.getElementById('Box'));
            }} style={{width:"200px"}}>Logout</button><br/>
        </div>
    );
}