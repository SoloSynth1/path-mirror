const express = require('express')
const app = express()
const port = 3000

app.all('*', (req, res) => {
    res.send(req.path)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    process.exit();
});