const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
//const mongoose = require('mongoose');

app.use(cors());

// mongoose.connect('mongodb+srv://Aaroophan:AaroophanMongoDB@cluster0.9y1xdpc.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('MongoDB Connected...'))
// .catch(err => console.log(err));

let Users=0;
let Name = "Aaroophan1";
let Password = "AaroophanEXRESS";
let DailyStreaks = 4;
let Rank = 2;
let BestTime = 12;
let GamesPlayed = 10;
let GamesWon = 8;

app.get('/Server/UserProfile', (req, res) => {
    // Connect to your MongoDB database and get the data

    let Data = {
        UserID: Users+1,
        Name: Name,
        Password: Password,
        DailyStreaks: DailyStreaks,
        Rank: Rank,
        BestTime: BestTime,
        GamesPlayed: GamesPlayed,
        GamesWon: GamesWon
    };
    console.log(`YOHOHOHOHO = `+JSON.stringify(Data, null, 2));
    // Send the data back to the frontend
    res.json(Data);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
