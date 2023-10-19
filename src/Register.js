import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Login from './Login';

export default function Register(){
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