import express from 'express'
import auth from './src/router/auth.router.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express()
const port = process.env.PORT

app.use(express.json());
app.use('/auth', auth)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})