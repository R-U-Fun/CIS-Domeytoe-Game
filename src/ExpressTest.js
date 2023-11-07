const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

let Users=0;
let Name = "AaroophanEXPRESS";
let Password = "AaroophanEXRESS";
let BestTime = 12;
let GamesPlayed = 10;
let GamesWon = 8;

app.get('/Server/UserProfile', (req, res) => {
  // Connect to your MongoDB database and get the data

    let Data = {
        UserID: Users+1,
        Name: Name,
        Password: Password,
        BestTime: BestTime,
        GamesPlayed: GamesPlayed,
        GamesWon: GamesWon
    };
    console.log(`YOHOHOHOHO = `+JSON.stringify(Data));
    // Send the data back to the frontend
    res.json(Data);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
