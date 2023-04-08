require('dotenv').config()

const express = require('express')
const app = express()
const cors=require('cors')

const mongoose = require('mongoose')

const authRouter=require('./routes/authRoutes')

app.use(cors());
app.use(express.json())
app.use(authRouter);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connection Successful'))
  .catch(err => console.log(err))

const PORT = process.env.PORT || 3001

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Server in running at PORT: ${PORT}`)
)
