const express = require('express')
const app = express()
const port = 4050

app.use(express.static('dist'))
app.use(function(request, response){
    response.status(404)
    response.json({error:'Page Not Found'})
})

app.listen(port, () => {
    console.log(`ScratchPhp static listening on port ${port}`)
})