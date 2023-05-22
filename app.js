const express = require("express");
require('dotenv').config({path:"./config/.env"});
const { json, urlencoded } = require('body-parser');   
const cors = require('cors');
const routes = require('./routeurs/routeurUser');

const app = express();

const PORT = process.env.PORT||8088;
const corsOptions = {                                        
    origin: ['http://localhost:3000', 'https://citd-c9b1d.web.app'],   
    credentials: true,      
}     
app.use(cors(corsOptions)); 
app.use(json()) 
app.use(urlencoded({extended:true}))
require('./config/db');

app.use('/api/citdquiz', routes);
app.get("/", (req, res)=>{
    res.send('Home of backend');
})

app.listen(PORT, ()=>{
    console.log(`localhost:${PORT} lancé`);
})