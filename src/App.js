import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Footer from './Footer';
import Header from './Header';
import HomePage from './HomePage';
import Player from './Player';
import Timer from './Timer';
import HomeLinks from './HomeLinks';
import UserProfile from './UserProfile';
import Leaderboard from './Leaderboard';
import StartGame from './StartGame';
import Level from './Level';
import Login from './Login';
import Register from './Register';


function App() {
  return (
    <div className="App">
      <Header/>
      <Timer/>
      <Player/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
