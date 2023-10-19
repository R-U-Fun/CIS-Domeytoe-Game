import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import HomeLinks from './HomeLinks';

export default function Header(){
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