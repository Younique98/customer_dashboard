const express = require('express')
const app = express()
const PORT = 8383

let data = ['placeholder']

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
    console.log('Home', req.method)
    res.send(`
        <body style="background:pink;color: blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('This is my script')</script>
        `)
})

app.get('/dashboard', (req, res) => {
    console.log('Dashboard')
    res.send(`
        <body>
        <h1>Dashboard</h1>
        <a href="/">home</a>
        </body> 
        `)
})

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`)
})
