import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CurrentUserNameSingleton from './UserSingleton';

export default function BestTime(TimeElapsed){

    let UserData = CurrentUserNameSingleton.getUserName();

    if(TimeElapsed < UserData.BestTime || UserData.BestTime === null){

<<<<<<< HEAD
        fetch(`https://cis-domeytoe-server.onrender.com/Server/BestTime/${UserData.Name}`, {
=======
        fetch(`https://cis-domeytoe-game.onrender.com/Server/BestTime/${UserData.Name}`, {
>>>>>>> 452ceb41586246f5e9cca2bdd1da089b1d858c33
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                BestTime: TimeElapsed,
            }),
        })
        .catch((error) => {
            console.error('Error:', error);
        });
                    
<<<<<<< HEAD
        fetch('https://cis-domeytoe-server.onrender.com/Server/UpdateRanks', {
=======
        fetch('https://cis-domeytoe-game.onrender.com/Server/UpdateRanks', {
>>>>>>> 452ceb41586246f5e9cca2bdd1da089b1d858c33
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .catch(error => console.error('Error:', error));
        
        alert("New Best Time = "+ TimeElapsed +" Sec");

<<<<<<< HEAD
        fetch(`https://cis-domeytoe-server.onrender.com/Server/UserProfile/${UserData.Name}`)
=======
        fetch(`https://cis-domeytoe-game.onrender.com/Server/UserProfile/${UserData.Name}`)
>>>>>>> 452ceb41586246f5e9cca2bdd1da089b1d858c33
        .then(response => response.json())
        .then(Data => {
            CurrentUserNameSingleton.setUserName(Data);
            console.log("NNNNNNNEEEEEEEEWWWWWWWW BBBBEEEESSSSTTTTTT     "+CurrentUserNameSingleton.getUserName().BestTime);
        })
        .catch(error => console.error('Error:', error));
    }
}