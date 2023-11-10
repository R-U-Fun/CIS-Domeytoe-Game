const express = require('express');
const cors = require('cors');
const app = express();
const port = 3214;
const mongoose = require('mongoose');

app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

mongoose.connect('mongodb+srv://Aaroophan:AaroophanMongoDB@cluster0.9y1xdpc.mongodb.net/cis-domeytoe-game', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('************************************************************* Current database:', mongoose.connection.db.databaseName);
})
.catch(err => console.log(err));

app.post('/Server/Register', (req, res) => {
    let newUser = new User({
        UserID: req.body.userID,
        Name: req.body.username,
        Password: req.body.password,
        DailyStreaks: req.body.dailyStreaks,
        Rank: req.body.rank,
        BestTime: req.body.bestTime,
        GamesPlayed: req.body.gamesPlayed,
        GamesWon: req.body.gamesWon
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

app.put('/Server/UpdateRanks', (req, res) => {
  // Fetch all users from the database
  User.find()
    .then(AllUsers => {
      // Sort users based on BestTime in ascending order
      const SortedUsers = AllUsers.sort((a, b) => {
        if (a.BestTime === b.BestTime) {
          // If BestTime is equal, sort by UserId
          return a.UserId > b.UserId ? 1 : -1;
        }
        // Otherwise, sort by BestTime
        return a.BestTime - b.BestTime;
      });

      // Update the Rank property for each user
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
