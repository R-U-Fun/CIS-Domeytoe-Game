import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
        
export default function StartGame(){
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