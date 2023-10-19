import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import UserProfile from './UserProfile';

export default function Timer(){
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