const express = require('express');
const cors = require('cors');
const app = express();
const port = 3214;
const mongoose = require('mongoose');

app.use(cors());

mongoose.connect('mongodb+srv://Aaroophan:AaroophanMongoDB@cluster0.9y1xdpc.mongodb.net/cis-domeytoe-game', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA Current database:', mongoose.connection.db.databaseName);
})
.catch(err => console.log(err));


//let Users=0;
let Name = "AaroophanLocal";
let Password = "AaroophanLocal";
let DailyStreaks = 4;
let Rank = 2;
let BestTime = 12;
let GamesPlayed = 10;
let GamesWon = 8;

// Create a model from the schema
/*let User = mongoose.model('User', new mongoose.Schema({
    User_Aaroophan4: {
        UserID: Number,
        Name: String,
        Password: String,
        DailyStreaks: Number,
        Rank: Number,
        BestTime: Number,
        GamesPlayed: Number,
        GamesWon: Number
    }
}));*/

let User2 = mongoose.model('User', new mongoose.Schema({ Name: String }));

app.get('/Server/UserProfile', (req, res) => {
    User2.find({ "Name": "Aaroophan4"})
    .then(user => {
        if (user) {
            console.log(user);
            console.log("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHA");
            res.json(user);
        } else {
            console.log("USER NOT FOUND ########################################################");
            let Data = {
                UserID: 1,
                Name: Name,
                Password: Password,
                DailyStreaks: DailyStreaks,
                Rank: Rank,
                BestTime: BestTime,
                GamesPlayed: GamesPlayed,
                GamesWon: GamesWon
            };
            res.json(Data);
        }
    })
    .catch(err => {
        console.log(err);
    });
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
