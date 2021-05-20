const express  = require('express');
require("./db/conn");
const jwt = require("jsonwebtoken")
const User =require("./models/user");
const app   = express();
const port = process.env.PORT||3001;

app.use(express.json());

app.post("/User",(req,res) => {
    console.log(req.body);
    const user = new User(req.body)

    user.save().then(() =>{
        res.send(user); 
     }).catch((e) =>{
         res.send(e);
     })
    
})

const createToken = async()=>{
    const token =await jwt.sign({_id:"60966f2b70bc932b943cef9b"}, "secretkeyforleeywayworkworkshoptenok")
    console.log(token);

    const userVer= await jwt.verify(token,"secretkeyforleeywayworkworkshoptenok")
    console.log(userVer);
}

createToken();

app.listen(port, () => { 
    console.log(`We are live on  ${port}`);
   });
