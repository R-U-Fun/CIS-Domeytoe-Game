import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//import Footer from './Footer';

function CorrectOrNot(){
    return null;
}

function Game(props){
    console.log(props.question);
    console.log(props.solution);
    return(
        <div class="card text-white" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a className="btn btn-danger m-4 fs-2 fw-bold">Game</a>
            <img src={props.question} class="card-img-top" alt="..." style={{objectFit: 'cover'}}/>
            <div class="card-body" style={{ background: 'rgba(0, 0, 0, 0)', border: 'none' }}>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-123"></i></span>
                    <input type="text" class="form-control" placeholder="Answer" aria-label="Answer" aria-describedby="basic-addon1"/>
                    &nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-danger" onClick={() => ReactDOM.render(<CorrectOrNot Correct={props.solution} Answer= {null} />, document.getElementById('Box'))}><i class="bi bi-arrow-return-right"></i></button>
                </div>
            </div>
        </div>
    );
}
        
function StartGame(){
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

function Level(){
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold">Levels</a>
            <br/><br/><br/><br/>
            <button className="btn btn-danger btn-lg m-4 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))}>Easy</button>
            <button className="btn btn-danger btn-lg m-4 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))}>Medium</button>
            <button className="btn btn-danger btn-lg m-4 fw-bold" onClick={() => ReactDOM.render(<StartGame />, document.getElementById('Box'))}>Hard</button>
            <br/><br/><br/><br/><br/><br/>
        </div>
    );
}

function UsersOfLeaderboard(props){
    return(
        <tr>
            <th><a className="btn btn-danger m-1 fw-bold"><i className={`bi bi-${props.Rank}-square-fill`}></i></a></th>
            <td><a className="btn btn-danger m-1 fw-bold">{props.Username}</a></td>
            <td>
                <a className="btn btn-danger m-1 fw-bold">
                    <i className={`bi bi-${props.Best1}-square-fill`}></i>
                    &nbsp;
                    <i className={`bi bi-${props.Best2}-square-fill`}></i>
                </a>
            </td>
        </tr>
    );
}

function Leaderboard(props){
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold">Leaderboard</a>
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

function UserProfile(props){
    return(
        <div>
        <a className="btn btn-danger m-4 fs-2 fw-bold">Profile</a>
            <table className="text-start">
                <tbody>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold">Username</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold">{props.Username}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold">Best Time</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold">{props.Best1} {props.Best2}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold">Games Played</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold">{props.Played}</a></td>
                    </tr>
                    <tr>
                        <th><a className="btn btn-danger m-2 fw-bold">Games Won</a></th>
                        <td><a className="btn btn-danger m-2 fw-bold">{props.Won}</a></td>
                    </tr>
                </tbody>
            </table>
        <br/>
        </div>
    );
}

function HomeLinks(){
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
              
function HomePage(){
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
        </div>
    );
}
        
function HomePageCall(){
    return(<HomePage/>);
}
         
function Register(){
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold">Login</a>
            <br/><br/><br/>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-at"></i></span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-asterisk"></i></span>
                <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-asterisk"></i></span>
                <input type="password" class="form-control" placeholder="Confirm Password" aria-label="ConfirmPassword" aria-describedby="basic-addon1"/>
            </div>
            <button type="button" class="btn btn-danger m-3" onClick={() => ReactDOM.render(<Login />, document.getElementById('Box'))}><i class="bi bi-door-closed"></i> Register</button>
            <br/><br/><br/><br/>
        </div>
    );
}

function Login(){
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold">Login</a>
            <br/><br/><br/>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-at"></i></span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="bi bi-asterisk"></i></span>
                <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
            </div>
            <button type="button" class="btn btn-danger m-3" onClick={() => ReactDOM.render(<Register />, document.getElementById('Box'))}><i class="bi bi-pen"></i> Register</button>
            <button type="button" class="btn btn-danger m-3" onClick={() => ReactDOM.render(<HomeLinks />, document.getElementById('Box'))}><i class="bi bi-door-closed"></i> Login</button>
            <br/><br/><br/><br/>
        </div>
    );
}

function Hearts(HeartsProps){
    if(HeartsProps.Fill==true){
        return(
            <i class="bi bi-suit-heart-fill"> </i>
        );
    }
    else{
        return(
            <i class="bi bi-suit-heart"> </i>
        );
    }
}
        
function Player(){
    let H1 = true;
    let H2 = true;
    let H3 = false;
    return(
        <div className="container-fluids">
            <a className="btn btn-danger btn-lg" style={{ position: 'absolute', top: '100px', left: '100px'}} onClick={() => ReactDOM.render(<UserProfile Username="Aaroophan" Best1={1} Best2={2} Played={10} Won={8} />, document.getElementById('Box'))}>
                &nbsp;&nbsp;&nbsp;
                <p className="fw-bold"><i class="bi bi-person-fill"></i></p>
                <p className="fw-bold">Username</p>
                <p className="fw-bold">
                    <Hearts Fill={H1}/>
                    <Hearts Fill={H2}/>
                    <Hearts Fill={H3}/>
                </p>
            </a>
        </div>
    );
}

function Timer(){
    let H1 = true;
    let H2 = true;
    let H3 = false;
    return(
        <div className="container-fluids" >
            <a className="btn btn-danger btn-lg" style={{ position: 'absolute', top: '100px', left: '1200px'}} onClick={() =>  ReactDOM.render(<UserProfile Username="Aaroophan" Best1={1} Best2={2} Played={10} Won={8} />, document.getElementById('Box'))}>
                &nbsp;&nbsp;&nbsp;
                <p className="fw-bold">
                    <i class="bi bi-4-square"></i>
                        &nbsp;
                    <i class="bi bi-9-square"></i>
                </p>
                <p className="fw-bold"><i class="bi bi-hourglass-split"></i></p>
                <p className="fw-bold">
                    <i class="bi bi-1-square"></i>
                    &nbsp;
                    <i class="bi bi-1-square"></i>
                </p>
            </a>
        </div>
    );
}

function Header(){
    return(
        <div className="container-fluids">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ background: 'rgba(10, 0, 0, 0)', cursor:'default' }} onClick={() => ReactDOM.render(<HomeLinks />, document.getElementById('Box'))}>
                &nbsp;&nbsp;&nbsp;
                <a style={{cursor:'default'}}><img src="https://cdn-icons-png.flaticon.com/512/1202/1202125.png" id="AaroophanIMG" height="35px" width="35px" className="rounded-5" /></a>
                &nbsp;&nbsp;&nbsp;
                <a className="navbar-brand fs-2 fw-bold font-arial" id="PageNameA" style={{ cursor:'default', color:'rgba(117, 0, 0, 0.9)' }}>Domeytoe</a>
            </nav>
        </div>
    );
}

function Footer(){
  return(
    <footer className="footer text-light py-1 bottom" style={{ background: 'linear-gradient(to bottom, transparent 0%, #290101 100%)' }}>
      <div className="container">
        <br/><hr />
        <div className="text-center">
          <a href="http://aaroophan-com.stackstaging.com" style={{ cursor:'default', color:'rgba(250, 210, 210, 0.9)', textDecoration:'none' }}>&copy; 2023 Aaroophan | 2323492</a>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="https://www.instagram.com/aaroophan/?theme=dark" style={{ cursor:'default', fontsize: '20px' }}><i className="bi bi-instagram"></i></a></li>
            <li className="list-inline-item"><a href="https://twitter.com/Aaroophan" style={{ cursor:'default', fontsize: '20px' }}><i className="bi bi-twitter"></i></a></li>
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/aaroophan" style={{ cursor:'default', fontsize: '20px' }}><i className="bi bi-linkedin"></i></a></li>
            <li className="list-inline-item"><a href="https://github.com/R-U-Fun" style={{ cursor:'default', fontsize: '20px' }}><i className="bi bi-github"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Timer/>
      <Player/>
      <HomePageCall/>
      <Footer/>
    </div>
  );
}

export default App;
