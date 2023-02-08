const express = require('express')
const cookieParser = require("cookie-parser")
const cors = require("cors")
const connection = require("./config/connectSQL")
const routeUsers = require("./routes/users")
const routePosts = require("./routes/posts")
const routeAuth = require("./routes/auth")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: true,
    credentials: true
}))

//routes api
app.use("/api/users", routeUsers)
app.use("/api/posts", routePosts)
app.use("/api/auth", routeAuth)

//404 api
app.use((req, res) => {
    res.send("dont have api")
})

app.listen(7070, () => {
    connection
    console.log("Connected to port 7070")
    console.log("Connected to db")
})