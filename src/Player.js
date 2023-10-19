import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import UserProfile from './UserProfile';

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
        
export default function Player(){
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