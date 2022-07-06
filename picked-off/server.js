const express = require('express')
const app = express()

app.use(express.json())

app.use("/", require("./routes/addRouter.js"))

app.get("/", (req, res, next) => {
    res.send(req.body)
})


app.listen(8000, () => {
    console.log('Running on 8000')
})