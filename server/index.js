require ('dotenv').config();
const express = require("express");
const cors = require ("cors");
const {MongoClient} = require('mongodb')

const app = express();
const port = 8080;
const URI = process.env.URI;

const client = new MongoClient(URI)

app.use(cors());
app.use(express.json());


app.get("/user", async (req,res) =>{
    try{
        const con = await client.connect();
        const data = await con.db('project_cafe3').collection('register_user').find().toArray();
        await con.close(); 
        res.send (data);
    }catch (err){
        res.status(500).send({error});
    }
});

app.post("/user", async(req, res)=>{
    try{
        const con = await client.connect();
        const data = await con
            .db("project_cafe3")
            .collection("register_user")
            .find()
            .toArray()
        await con.close();
        res.send(data);
    }catch(err){
        res.status(500).send({error})
    }
    //{title:"Do homework"} =>{id:5555, title:"Do homework"}
    // const newTodo = {id: Date.now(), ...req.body};
    // todos.push(newTodo);
    // res.send (newTodo);
})

app.listen(port, () => {
    console.log(`It works on ${port} port`);
});

//127.0.0.1