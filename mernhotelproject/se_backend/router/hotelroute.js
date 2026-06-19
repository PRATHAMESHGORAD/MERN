const express = require('express');
const { addHotel, showhotels, updateHotel, deleteHotel } = require('../controller/hotelcontroller');

const router = express.Router()

router.post("/addHotel",addHotel)
router.get("/showhotels", showhotels)

router.get("/showHotel/:id", showHotel)
router.put("/updateHotel/:id",updateHotel)
router.delete("/deleteHotel/:id",deleteHotel)

module.exports = router