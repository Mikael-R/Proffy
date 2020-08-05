import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import routes from './routes'

const app = express()

app.use(cors({ origin: 'https://proffy-online.netlify.app' }))
app.use(express.json())
app.use(routes)

const port = process.env.PORT || '3333'

app.listen(port, () => console.log(`Listening on ${port}`))
