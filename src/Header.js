import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header(){
    return(
        <div className="container-fluids">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{cursor:'default', background: 'rgba(10, 0, 0, 0)' }}>
                <a className="navbar-brand fs-2 fw-bold font-arial " id="PageNameA" style={{ color:'rgba(117, 0, 0, 0.9)' }} >&nbsp;&nbsp;&nbsp;<img src="https://cdn-icons-png.flaticon.com/512/1202/1202125.png" id="AaroophanIMG" height="35px" width="35px" className="rounded-5" /> Domeytoe</a>
            </nav>
        </div>
    );
}