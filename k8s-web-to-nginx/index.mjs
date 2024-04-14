import express from 'express'
import os from 'os'
import fetch from 'node-fetch'

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    // Sending hostname of the server sending response
    const helloMessage = `Hello from the ${os.hostname()}`
    console.log(helloMessage)
    res.send(`<h1>${helloMessage}</h1>`)
})

app.get('/nginx', async(req, res) => {
    // Connect to one of nginx server using service name
    const url = 'http://nginx'
    const response = await fetch(url)
    const body = await response.text()
    res.send(body)
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})
