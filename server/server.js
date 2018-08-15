const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient

app.get('/question', (req, res) => {
    MongoClient.connect(
        'mongodb://localhost:27017/ae',
        (err, client) => {
            if (err) throw err

            const db = client.db('ae')
            const n = db.collection('questions').count()
            const r = Math.floor(Math.random() * n)

            db.collection('questions').find().limit(1).skip(r).toArray(
                (err, result) => {
                    if (err) throw err

                    res.send(result)
                })
        }
    )
})

app.listen(3000, () => console.log('Server running on port 3000.'))