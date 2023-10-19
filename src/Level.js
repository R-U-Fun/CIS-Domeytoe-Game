import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import StartGame from './StartGame';

export default function Level(){
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