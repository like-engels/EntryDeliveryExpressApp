import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_request, response) => {
    console.log("Someone reached this endpoint")
    response.send('pong owo')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})