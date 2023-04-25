import express from 'express'
import {FetchData, insertData} from '../controller/enviormentController.js'
const router = express.Router()

router.route('/insertData').post(insertData)
router.route('/getAllData').get(FetchData)

export default router