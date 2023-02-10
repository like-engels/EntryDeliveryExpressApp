import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Fetching all entry dairie s')
})

router.post('/', (req, res) => {
    res.send('Saving diary!')
})

export default router