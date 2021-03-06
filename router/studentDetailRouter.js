var express = require('express')
var router = express.Router()

const { studentDetailController } = require('../controller')

router.get('/get-student-detail/:id', studentDetailController.getStudentDetail)
router.post('/add-student-detail/:id', studentDetailController.addStudentDetail)
router.post('/delete-student-detail/:id', studentDetailController.deleteStudentDetail)
router.post('/edit-student-detail/:id', studentDetailController.editStudentDetail)

module.exports = router