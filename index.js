const express=require("express")
const { connection } = require("./db")
const { boardRoute } = require("./routes/board.routes")
const cors = require('cors')
const app=express()
app.use(express.json())

app.use(cors())

app.use("/user",boardRoute)


app.listen(8080,async()=>{
        try {
            await connection
            console.log("Connected to DB");
        } catch (error) {
            console.log(error);
        }
        console.log("Running...");
})