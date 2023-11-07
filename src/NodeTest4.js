const fs = require('fs');

let Name = "Aaroophan5";
let Password = "AaroophanDT5";
let BestTime = 12;
let GamesPlayed = 10;
let GamesWon = 8;

const path = '../Database/DomeytoeData.json';

if (fs.existsSync(path)) {
    console.log('file exists');
} else {
    console.log('file not found!');
}

function writeDataToFile() {

    let data = {
        Users: 0
    };

    let jsonData = JSON.stringify(data, null, 2);

    fs.writeFile('../Database/DomeytoeData.json', jsonData, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

function readDataFromFile() {
    fs.readFile('../Database/DomeytoeData.json', 'utf8', (err, jsonString) => {
        if (err) {
            writeDataToFile();
            readDataFromFile();
        }
        let data = JSON.parse(jsonString);

        let Username = "Aaroophan4";

        console.log("data[User_Username].UserID = "+data["User_"+Username].UserID);
        console.log("data[User_Username].Name = "+data["User_"+Username].Name);
        console.log("data[User_Username].Password = "+data["User_"+Username].Password);
        console.log("data[User_Username].BestTime = "+data["User_"+Username].BestTime);
        console.log("data[User_Username].GamesPlayed = "+data["User_"+Username].GamesPlayed);
        console.log("data[User_Username].GamesWon = "+data["User_"+Username].GamesWon);

    });
}

function addDataToFile() {
    fs.readFile('../Database/DomeytoeData.json', 'utf8', (err, jsonString) => {
        if (err) {
            writeDataToFile();
        }

        // Parse the JSON data
        let DomeytoeData = JSON.parse(jsonString);

        console.log(DomeytoeData.Users);
        let Users = DomeytoeData.Users;

        let data = {
            UserID: Users+1,
            Name: Name,
            Password: Password,
            BestTime: BestTime,
            GamesPlayed: GamesPlayed,
            GamesWon: GamesWon
        };

        
        if(DomeytoeData["User_"+Name]){
            console.log(JSON.stringify(DomeytoeData["User_"+Name].Name)+" Exists");
        }
        else{
            // Add new data
            DomeytoeData["User_"+Name] = data;
            DomeytoeData.Users = Users+1;

            // Convert the data back to a JSON string
            let jsonData = JSON.stringify(DomeytoeData, null, 2);

            // Write the updated data back to the file
            fs.writeFile('../Database/DomeytoeData.json', jsonData, (err) => {
                if (err) throw err;
                console.log('Data added to file');
            });
        }

        
    });
}

// Call the functions

//writeDataToFile();
readDataFromFile();
//addDataToFile();
