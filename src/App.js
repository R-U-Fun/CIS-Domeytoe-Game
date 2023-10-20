import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import backgroundImage from './Tomato-BG-01.jpeg';

import Header from './Header';
import Footer from './Footer';
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

function Main() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`}}>
      <br/><br/><br/>  
      <Header/>
      <div id="PlayerHere"></div>
      <div id="TimerHere"></div>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default Main;
