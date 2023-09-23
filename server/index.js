const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const UserModel = require('./models/Users');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://andrewkim604:minwoo04@cluster0.ye2bsou.mongodb.net/mernstack?retryWrites=true&w=majority"
    );

    app.get("/getUsers", async(req, res) => {
        await UserModel.find()
          .then((data) => {
            res.send(data);
          })
          .catch((err) => res.send(err));
      }); 

    
      app.post("/createUser", async(req, res) => {
        const user = req.body;
        const newUser = new UserModel(user);
        await newUser.save();

        res.json(user);
  });


app.listen(3001, () => {
    console.log("Server is running!");
});
