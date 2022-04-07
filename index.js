// run `node index.js` in the terminal

const express = require('express');
const app = express()

app.listen(3000, () => { // arg is port # 
  console.log('listening on port 3000')
  }) // server is actively listening
      

  app.use(() => {
    console.log('Received new request!')
    }) // method to show all requests coming in on console, happens if I reload localhost:3000
    