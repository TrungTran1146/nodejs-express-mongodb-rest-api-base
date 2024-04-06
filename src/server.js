//Trung Tran 

import express from 'express'


const app = express()

const hostname = 'localhost'
const port = 8000



app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello Trung Tran, I am running at http://${hostname}:${port}/`)
})
