const express = require('express')
const {BookingController} = require('../../controller/index')
const router = express.Router()
//console.log(BookingController)
router.post('/bookings',BookingController.create)

module.exports = router