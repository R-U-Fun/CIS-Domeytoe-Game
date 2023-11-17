import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Main from './App';
import Header from './Header';

import Login from './Login';
import Register from './Register';
import HomeLinks from './HomeLinks';
import HomePage from './HomePage';
import Player from './Player';
import Timer from './Timer';
import StartGame from './StartGame';
import Level from './Level';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';

export default function Footer(){
  return(
    <footer className="footer text-light py-1 bottom" style={{ background: 'linear-gradient(to bottom, transparent 0%, #290101 100%)' }}>
      <div className="container">
        <br/><br/><hr />
        <div className="text-center">
          <a href="http://aaroophan-com.stackstaging.com" style={{ cursor:'default', color:'rgba(250, 210, 210, 0.9)', textDecoration:'none' }}>&copy; 2023 | Aaroophan | 2323492</a>
          <br/>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="https://www.instagram.com/aaroophan/?theme=dark" style={{ cursor:'default', fontsize: '20px', color:'rgba(250, 210, 210, 0.9)' }}><i className="bi bi-instagram"></i></a></li>
            <li className="list-inline-item"><a href="https://www.snapchat.com/add/aaroophan?share_id=Zw1jLmcQoDQ&locale=en-GB" style={{ cursor:'default', fontsize: '20px', color:'rgba(250, 210, 210, 0.9)' }}><i className="bi bi-snapchat"></i></a></li>
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/aaroophan" style={{ cursor:'default', fontsize: '20px', color:'rgba(250, 210, 210, 0.9)' }}><i className="bi bi-linkedin"></i></a></li>
            <li className="list-inline-item"><a href="https://github.com/R-U-Fun" style={{ cursor:'default', fontsize: '20px', color:'rgba(250, 210, 210, 0.9)' }}><i className="bi bi-github"></i></a></li>
            <li className="list-inline-item"><a href="https://twitter.com/Aaroophan" style={{ cursor:'default', fontsize: '20px', color:'rgba(250, 210, 210, 0.9)' }}><i className="bi bi-twitter-x"></i></a></li>
            <li className="list-inline-item"><a href="https://web.facebook.com/Aaroophan" style={{ cursor:'default', fontsize: '20px', color:'rgba(250, 210, 210, 0.9)' }}><i className="bi bi-facebook"></i></a></li>
            <li className="list-inline-item"><a href="https://www.reddit.com/user/R-U-Fun" style={{ cursor:'default', fontsize: '20px', color:'rgba(250, 210, 210, 0.9)' }}><i className="bi bi-reddit"></i></a></li>
            <li className="list-inline-item"><a href="https://discord.com/channels/@rufun" style={{ cursor:'default', fontsize: '20px', color:'rgba(250, 210, 210, 0.9)' }}><i className="bi bi-discord"></i></a></li>
            <li className="list-inline-item"><a href="https://open.spotify.com/user/31pv6crykkffsjedpzdu37jdwg24" style={{ cursor:'default', fontsize: '20px', color:'rgba(250, 210, 210, 0.9)' }}><i className="bi bi-spotify"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}