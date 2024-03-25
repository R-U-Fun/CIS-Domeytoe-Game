import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, {  useRef } from 'react';
import Register from './Register';
import HomeLinks from './HomeLinks';
import CurrentUserNameSingleton from './UserSingleton';

function LoginHandle(CurrentUserName, CurrentPassword){
    if(CurrentUserName && CurrentPassword){
        fetch(`https://cis-domeytoe-server.onrender.com/Server/UserProfile/${CurrentUserName}`)
        .then(response => response.json())
        .then(Data => {
            if(Data && CurrentPassword === Data.Password){
                CurrentUserNameSingleton.setUserName(Data);
                ReactDOM.render(<HomeLinks />, document.getElementById('Box'));
            }
            else{
                alert("Invalid Username & Password");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Can Not Connect At The Moment: Server Update On Progress.");
        });
    }
    else{
        alert("Please fill Username & Password");
    }
}

export default function Login(){
    const usernameRef = useRef();
    const passwordRef = useRef();
    return(
        <div>
            <a className="btn btn-danger m-4 fs-2 fw-bold" style={{width:"225px", cursor: 'auto'}} onClick={() => ReactDOM.render(<Login />, document.getElementById('Box'))}>Login</a>
            <br/><br/><br/><br/>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-danger" id="basic-addon1"><i className="bi bi-at"></i></span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" ref={usernameRef}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text btn btn-danger" id="basic-addon1"><i className="bi bi-asterisk"></i></span>
                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" ref={passwordRef}/>
            </div>
            <button type="button" className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => LoginHandle(usernameRef.current.value, passwordRef.current.value)}><i className="bi bi-door-closed"></i> Login</button>
            <br/>
            <button type="button" className="btn btn-danger btn-lg m-2 fw-bold" onClick={() => ReactDOM.render(<Register />, document.getElementById('Box'))}><i className="bi bi-pen"></i> Register</button>
            <br/><br/><br/><br/><br/>
        </div>
    );
}