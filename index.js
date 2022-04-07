// run `node index.js` in the terminal

const express = require('express');
const app = express()

app.listen(3000, () => { // arg is port # 
  console.log('listening on port 3000')
  }) // server is actively listening
      

  // app.use((req, res) => {
  //   console.log('Received new request!');
  //   res.send('Here is your http response')
  //   }) 
  // method to show all requests coming in on console, happens if I reload localhost:3000
    // ^ everythign I need to start first server

    app.get('/cats', (req, res) => {
      console.log('meow, cat request')
      res.send('meow');
    } 
      // comment out res.send above to prevent that from stopping the app.get
app.get('/', (req, res) => {
  res.send('This is homepage')
})
//this is called root-route, pretty much the homepage

app.post('/cats’', (req, res) => {
  res.send('Post request to /cats! not a get request');
  })
  //used to send a post/form or something similar
  
  app.get('/r/:subreddit', (req, res) => {
    cosnt { subreddit } = req.params;
console.log(`you are now in subreddit ${subreddit}`);
    })
    // above uses params to create object which can be set into a variable

    