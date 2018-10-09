const router = require('express').Router({mergeParams: true})
const {School} = require('../db/model')

//create
router.post('/', (req,res) => {
  const newSchool = new School( )
  Student.findbyId(req.params.studentId)
  .then( (student) => {
    student.schools.push(newSchool)
    return student.save()
  })
  .then((student) =>{
    res.send(student)
  })
})
//delete
//update


module.exports = router
