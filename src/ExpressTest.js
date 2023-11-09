const express = require('express');
const cors = require('cors');
const app = express();
const port = 3214;
const mongoose = require('mongoose');

app.use(cors());

mongoose.connect('mongodb+srv://Aaroophan:AaroophanMongoDB@cluster0.9y1xdpc.mongodb.net/cis-domeytoe-game', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('************************************************************* Current database:', mongoose.connection.db.databaseName);
})
.catch(err => console.log(err));

let User = mongoose.model('User', new mongoose.Schema({
    //User_Aaroophan4:{
        UserID: Number,
        Name: String,
        Password: String,
        DailyStreaks: Number,
        Rank: Number,
        BestTime: Number,
        GamesPlayed: Number,
        GamesWon: Number
    //}
}));

app.get('/Server/UserProfile', (req, res) => {
    User.find({ "User_Aaroophan4.Name": "Aaroophan4" })
    .then(user => {
        if (user) {
            console.log(user);
            console.log("HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHA USER IS  FOUND");
            res.json(user);
        } else {
            console.log("######################################################### USER NOT FOUND");
            res.json(user);
        }
    })
    .catch(err => {
        console.log(err);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
