const express = require('express');
const { showemps, addEmp, showEmp, updateEmp, deleteEmp } = require('../controller/empcontroller');

const router = express.Router()

router.get("/",showemps)
router.post("/add",addEmp)
router.get("/showEmp/:id",showEmp)
router.put("/updateEmp/:id",updateEmp)
router.delete("/deleteEmp/:id",deleteEmp)

module.exports = router