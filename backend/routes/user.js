const express = require("express");
const router = express.Router();
const authController = require("../controllers/user");
const MongoClient = require('mongodb').MongoClient
require("dotenv").config();

let db,
dbName = 'users'

MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
    .then(client => {
        db = client.db(dbName)
    })


//Main Routes - simplified for now
// router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
// router.get("/signup", authController.getSignup);
router.post("/register", authController.postSignup);

router.get('/api',(req,res)=>{
    db.collection('users').find().toArray()
    .then(data=>{
        res.json(data)
    })
})

module.exports = router;