const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var a = 1;
    for (a; a<10; ++a){
        console.log(a);
    }
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})