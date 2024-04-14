import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    // Sending hostname of the server sending response
    const helloMessage = `Hello from the ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})
