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

/*app.post('/Server/NewProfile/:NEWUSER', (req, res) => {
    let NEWUSER = req.params.NEWUSER;
    let newUser = new User({
        UserID: 6,
        Name: "NEWUSER",
        Password: "NEWPASSWORD",
        DailyStreaks: 0,
        Rank: 0,
        BestTime: 0,
        GamesPlayed: 0,
        GamesWon: 0
    });

    newUser.save((err, savedUser) => {
        if (err) return console.error(err);
        console.log("User saved to collection:", savedUser);
    });
});*/

let User = mongoose.model('User', new mongoose.Schema({
        UserID: Number,
        Name: String,
        Password: String,
        DailyStreaks: Number,
        Rank: Number,
        BestTime: Number,
        GamesPlayed: Number,
        GamesWon: Number
    }));

app.get('/Server/UserProfile/:CurrentUserName', (req, res) => {
    let CurrentUserName = req.params.CurrentUserName;
    console.log(CurrentUserName);
    User.findOne({ "Name": CurrentUserName })
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
