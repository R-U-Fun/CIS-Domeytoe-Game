const express = require('express');
const cors = require('cors');
const app = express();
const port = 3214;
const mongoose = require('mongoose');

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://Aaroophan:AaroophanMongoDB@cluster0.9y1xdpc.mongodb.net/cis-domeytoe-game', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('************************************************************* Current database:', mongoose.connection.db.databaseName);
})
.catch(err => console.log(err));

app.post('/Server/Register', (req, res) => {
    let newUser = new User({
        UserID: req.body.UserID,
        Name: req.body.Name,
        Password: req.body.Password,
        ChallengeDate: req.body.ChallengeDate,
        DailyStreaks: req.body.DailyStreaks,
        Rank: req.body.Rank,
        BestTime: req.body.BestTime,
        GamesPlayed: req.body.GamesPlayed,
        GamesWon: req.body.GamesWon
    });

    newUser.save()
    .then(savedUser => {
        console.log("User saved to collection:", savedUser);
        res.status(200).json(savedUser);
    })
    .catch(err => {
        console.error(err);
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa "+err);
        res.status(500).json({ error: err.toString() });
    });
});

let User = mongoose.model('User', new mongoose.Schema({
        UserID: Number,
        Name: String,
        Password: String,
        ChallengeDate: String,
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
        let Dummy = {
                UserID: "000000",
                Name: "DUMMY",
                Password: "DUMMY",
                DailyStreaks: 0,
                Rank: 0,
                BestTime: 60,
                GamesPlayed: 0,
                GamesWon: 0
        };
        res.json(Dummy);
        console.log(err);
    });
});

app.get('/Server/Leaderboard/:Rank', (req, res) => {
    let Rank = req.params.Rank;
    console.log(Rank);
    User.findOne({ "Rank": Rank })
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

app.put('/Server/BestTime/:CurrentUserName', (req, res) => {
    let CurrentUserName = req.params.CurrentUserName;
    let newBestTime = req.body.BestTime;
    User.findOneAndUpdate({ "Name": CurrentUserName }, { BestTime: newBestTime }, { new: true })
    .then(user => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! BEST TIME UPDATED");
    })
    .catch(err => {
        console.log(err);
    });
});

app.put('/Server/GamesPlayed/:CurrentUserName', (req, res) => {
    let CurrentUserName = req.params.CurrentUserName;
    let newGamesPlayed = req.body.GamesPlayed;
    User.findOneAndUpdate({ "Name": CurrentUserName }, { GamesPlayed: newGamesPlayed }, { new: true })
    .then(user => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! GAMES PLAYED UPDATED");
    })
    .catch(err => {
        console.log(err);
    });
});

app.put('/Server/GamesWon/:CurrentUserName', (req, res) => {
    let CurrentUserName = req.params.CurrentUserName;
    let newGamesWon = req.body.GamesWon;
    User.findOneAndUpdate({ "Name": CurrentUserName }, { GamesWon: newGamesWon }, { new: true })
    .then(user => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! GAMES WON UPDATED");
    })
    .catch(err => {
        console.log(err);
    });
});

app.put('/Server/DailyStreaks/:CurrentUserName', (req, res) => {
    let CurrentUserName = req.params.CurrentUserName;
    let newDailyStreaks = req.body.DailyStreaks;
    User.findOneAndUpdate({ "Name": CurrentUserName }, { DailyStreaks: newDailyStreaks }, { new: true })
    .then(user => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Daily Streaks UPDATED");
    })
    .catch(err => {
        console.log(err);
    });
});

app.put('/Server/ChallengeDate/:CurrentUserName', (req, res) => {
    let CurrentUserName = req.params.CurrentUserName;
    let newChallengeDate = req.body.ChallengeDate;
    User.findOneAndUpdate({ "Name": CurrentUserName }, { ChallengeDate: newChallengeDate }, { new: true })
    .then(user => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Challenge Date UPDATED");
    })
    .catch(err => {
        console.log(err);
    });
});

app.put('/Server/UpdateRanks', (req, res) => {
  User.find()
    .then(AllUsers => {
      const SortedUsers = AllUsers.sort((a, b) => {
        if (a.BestTime === b.BestTime) {
          return a.UserId > b.UserId ? 1 : -1;
        }
        return a.BestTime - b.BestTime;
      });

      for (let i = 0; i < SortedUsers.length; i++) {
        const user = SortedUsers[i];
        User.updateOne({ _id: user._id }, { Rank: i + 1 })
          .then(() => console.log("User rank updated successfully"))
          .catch(err => console.log("Error updating user rank: " + err));
      }
      console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRrRanks updated successfully");
    })
    .catch(err => {
      console.error(err);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
