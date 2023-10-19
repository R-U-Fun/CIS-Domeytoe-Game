import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function UserProfile(props){
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