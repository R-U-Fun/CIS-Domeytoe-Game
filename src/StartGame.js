import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomeLinks from './HomeLinks';
import Player from './Player';
import Timer from './Timer';
import BestTime from './BestTime';
import CurrentUserNameSingleton from './UserSingleton';
import CurrentLevelSingleton from './LevelSingleton';
import CurrentDailyChallengesSingleton from './DailyChallengesSingleton';
import CurrentDailyStreaksSingleton from './DailyStreaksSingleton';

async function UpdateGamesWon(){
    let UserData = CurrentUserNameSingleton.getUserName();
    let GamesWon = UserData.GamesWon;
    if(GamesWon === null){
        GamesWon=1;
    }
    else{
        GamesWon = GamesWon + 1;
    }

    await fetch(`http://localhost:3214/Server/GamesWon/${UserData.Name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            GamesWon: GamesWon,
        }),
    })
    .catch((error) => {
        console.log('Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror:', error);
    });

    await fetch(`http://localhost:3214/Server/UserProfile/${UserData.Name}`)
    .then(response => response.json())
    .then(Data => {
        CurrentUserNameSingleton.setUserName(Data);
        console.log("GGGGGGGGGAAAAAMEEEEEEESSSS WWWWWWWOOOOOOONNNNNNNN     "+CurrentUserNameSingleton.getUserName().GamesWon);
    })
    .catch(error => console.error('Error:', error));
}

async function UpdateGamesPlayed(){
    let UserData = CurrentUserNameSingleton.getUserName();
    let GamesPlayed2 = UserData.GamesPlayed;
    if(GamesPlayed2 === null){
        GamesPlayed2=1;
    }
    else{
        GamesPlayed2 = GamesPlayed2 + 1;
    }
    await fetch(`http://localhost:3214/Server/GamesPlayed/${UserData.Name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            GamesPlayed: GamesPlayed2,
        }),
    })
    .then(response => response.json())
    .then(Data => {
        console.table(Data);
    })
    .catch((error) => {
        console.log('Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror:', error);
    });

    await fetch(`http://localhost:3214/Server/UserProfile/${UserData.Name}`)
    .then(response => response.json())
    .then(Data => {
        CurrentUserNameSingleton.setUserName(Data);
        console.log("GGGGGGGGGAAAAAMEEEEEEESSSS PPPPLLLAAAAYYYYEEEEDDDDD     "+CurrentUserNameSingleton.getUserName().GamesPlayed);
    })
    .catch(error => console.error('Error:', error));
}

async function UpdateDailyStreaks(){
    let UserData = CurrentUserNameSingleton.getUserName();
    let DailyStreaks = CurrentDailyStreaksSingleton.getDailyStreaks();
    console.log("DailyStreaks = "+parseInt(DailyStreaks));
    console.log("UserData.DailyStreaks = "+parseInt(UserData.DailyStreaks));
    if((parseInt(DailyStreaks) > parseInt(UserData.DailyStreaks)) || (parseInt(UserData.DailyStreaks) === null)){
        console.log("UserData.Name "+UserData.Name);
        console.log("UserData.DailyStreaks = "+parseInt(UserData.DailyStreaks));
        console.log("DailyStreaks "+parseInt(DailyStreaks));

        await fetch(`http://localhost:3214/Server/DailyStreaks/${UserData.Name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                DailyStreaks: DailyStreaks,
            }),
        })
        .then(response => response.json())
        .then(data => 
            console.table(data)
        )
        .catch((error) => {
            console.error('Error:', error);
        });

        console.log("CHECK2");
        
        await fetch(`http://localhost:3214/Server/UserProfile/${UserData.Name}`)
        .then(response => response.json())
        .then(Data => {
            CurrentUserNameSingleton.setUserName(Data);
            console.log("NNNNNNNEEEEEEEEWWWWWWWW DDDDDDAAAAAAIIIIIILLLLYYYYYYY SSSSTTTTRRRREEEEAAAAKKKKKS     "+CurrentUserNameSingleton.getUserName().DailyStreaks);
            alert("New Daily Streaks = "+ CurrentUserNameSingleton.getUserName().DailyStreaks);
        })
        .catch(error => console.error('Error:', error));
    }
}

async function UpdateChallengeDate(){
    let UserData = CurrentUserNameSingleton.getUserName();
    const CurrentDate = new Date();
    let ChallengeDate = ""+CurrentDate.getFullYear()+(CurrentDate.getMonth()+1)+CurrentDate.getDate()+"";
    await fetch(`http://localhost:3214/Server/ChallengeDate/${UserData.Name}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ChallengeDate: ChallengeDate,
        }),
    })
    .then(response => response.json())
    .then(Data => {
        console.table(Data);
    })
    .catch((error) => {
        console.log('Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror:', error);
    });

    await fetch(`http://localhost:3214/Server/UserProfile/${UserData.Name}`)
    .then(response => response.json())
    .then(Data => {
        CurrentUserNameSingleton.setUserName(Data);
        console.log("CCCCCCHHHHHAAALLLLEEENNNGGEERRR DDDAAATTTTEEEE    "+CurrentUserNameSingleton.getUserName().ChallengeDate);
    })
    .catch(error => console.error('Error:', error));
}

export function GameOver(){
    return(
        <div>
            <i className="bi bi-heartbreak-fill btn btn-danger btn-lg m-4 fs-2 fw-bold" style={{cursor: 'auto'}}></i><br/>
            <button className="bi bi-arrow-clockwise btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))}></button>
        </div>
    );
}

function GameWon(){
    return(
        <div>
            <a className="btn btn-danger btn-lg m-4 fw-bold" style={{cursor: 'auto'}}>Correct</a>
            <i className="bi bi-hand-thumbs-up-fill btn btn-danger btn-lg m-4" style={{cursor: 'auto'}}></i><br/>
            <button className="bi bi-arrow-clockwise btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))}></button>
        </div>
    );
}

function GameIncorrect(){
    return(
        <div>
            <a className="btn btn-danger btn-lg m-4 fw-bold" style={{cursor: 'auto'}}>Incorrect</a>
            <i className="bi bi-hand-thumbs-down-fill btn btn-danger btn-lg m-4" style={{cursor: 'auto'}}></i>
        </div>
    );
}

function CorrectOrNot(props){
    console.log("CorrectorNot - Correct = "+props.Correct);
    console.log("CorrectorNot - User = "+props.Answer);
    
    if(props.Answer === props.Correct){
        props.stopTimer();
        CurrentDailyStreaksSingleton.setDailyStreaks(CurrentDailyStreaksSingleton.getDailyStreaks()+1);
        UpdateGamesWon();
        ReactDOM.render(<GameWon />, document.getElementById('InputAnswer'));
    }
    else{
        props.setHowManyHearts(props.HowManyHearts - 1);
        ReactDOM.render(<Player HowManyHearts={(props.HowManyHearts)-1}/>, document.getElementById('PlayerHere'));
        if(parseInt(props.HowManyHearts) === 1){
            props.stopTimer();
            ReactDOM.render(<GameOver />, document.getElementById('InputAnswer'));
        }
        else{
            ReactDOM.render(<GameIncorrect />, document.getElementById('CoN'));
        }
    }

    if(CurrentDailyChallengesSingleton.getDailyChallenges()){
        console.log("CurrentDailyChallengesSingleton.getDailyChallenges() = true                     UpdateDailyStreaks() "+CurrentDailyStreaksSingleton.getDailyStreaks());
        UpdateDailyStreaks();
    }

}

function Game(props){
    const inputRef = useRef();
    const [HowManyHearts, setHowManyHearts] = useState(props.HowManyHearts);
    return(
        <div className="card text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px"}} onClick={() => ReactDOM.render(<HomeLinks />, document.getElementById('Box'))}>Game</a>
            <img src={props.Tomato.question} className="card-img-top" alt="Tomato API Failed" style={{objectFit: 'cover'}}/>
            <div id="InputAnswer" className="card-body" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none' }}>
                <div className="input-group mb-3">
                    <span className="input-group-text bi bi-123 btn btn-danger" id="AnswerText" style={{cursor: 'auto'}}></span>
                    <input type="text" className="form-control" placeholder="Answer" aria-label="Answer" aria-describedby="AnswerText" ref={inputRef}/>
                    &nbsp;&nbsp;&nbsp;
                    <button type="button" className="bi bi-arrow-return-right btn btn-danger fw-bold" onClick={() => ReactDOM.render(<CorrectOrNot Correct={parseInt(props.Tomato.solution)} Answer={parseInt(inputRef.current.value)} HowManyHearts={HowManyHearts} setHowManyHearts={setHowManyHearts} stopTimer={props.stopTimer} />, document.getElementById('CoN'))}></button>
                </div>
                <div id="CoN"></div>
                <div id="Best"></div>
            </div>
        </div>
    );
}
        
export default function StartGame(){

    UpdateGamesPlayed();
    
    if(CurrentDailyChallengesSingleton.getDailyChallenges()){
        console.log("CurrentDailyChallengesSingleton.getDailyChallenges() = true           UpdateChallengeDate()");
        UpdateChallengeDate();
    }

    let TimeLeft;
    let TimeElapsed = 0;
    
    let Level = CurrentLevelSingleton.getLevel();

    if(Level === 1){
        TimeLeft = 60;
    }
    else if(Level === 2){
        TimeLeft = 40;
    }
    else if(Level === 3){
        TimeLeft = 20;
    }
    else if(Level === 4){
        TimeLeft = 10;
    }
    else{
        TimeLeft = 5;
    }

    let OneSecPass = setInterval(() => {
        if(TimeLeft > 0) {
            TimeLeft = (TimeLeft - 1);
            TimeElapsed = (TimeElapsed + 1);
            if(document.getElementById('AnswerText')){
                ReactDOM.render(<Timer TimeLeft={TimeLeft} TimeElapsed={TimeElapsed} />, document.getElementById('TimerHere'));
            }
            else{
                clearInterval(OneSecPass);
            }
        } else {
            clearInterval(OneSecPass);
            ReactDOM.render(<GameOver />, document.getElementById('InputAnswer'));
        }
    }, 1000);

    const stopTimer = () => {
        clearInterval(OneSecPass);
        BestTime(TimeElapsed);
    };
    
    fetch('https://marcconrad.com/uob/tomato/api.php')
        .then(response => response.json())
        .then(Tomato => {
            console.log("TOMATO API - Question = "+Tomato.question);
            console.log("TOMATO API - Solution = "+Tomato.solution);
            ReactDOM.render(<Game Tomato={Tomato} HowManyHearts={3} stopTimer={stopTimer} />, document.getElementById('Box'));
        })
        .catch(error => console.error('Error:', error));
    return null;
}