import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CurrentUserNameSingleton from './UserSingleton';

export default function BestTime(TimeElapsed){

    let UserData = CurrentUserNameSingleton.getUserName();

    if(TimeElapsed < UserData.BestTime || UserData.BestTime === null){

        fetch(`http://localhost:3214/Server/BestTime/${UserData.Name}`, {
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
                    
        fetch('http://localhost:3214/Server/UpdateRanks', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .catch(error => console.error('Error:', error));
        
        alert("New Best Time = "+ TimeElapsed +" Sec");

        fetch(`http://localhost:3214/Server/UserProfile/${UserData.Name}`)
        .then(response => response.json())
        .then(Data => {
            CurrentUserNameSingleton.setUserName(Data);
            console.log("NNNNNNNEEEEEEEEWWWWWWWW BBBBEEEESSSSTTTTTT     "+CurrentUserNameSingleton.getUserName().BestTime);
        })
        .catch(error => console.error('Error:', error));
    }
}