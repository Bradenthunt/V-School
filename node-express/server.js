const express = require("express")
const app = express()

app.use(express.json())

app.use('/users', require("./routes/userRouter.js"))

app.listen(9000, () => {
    console.log('Server running on Port 9000')
})