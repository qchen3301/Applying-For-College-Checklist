const router = require('express').Router({mergeParams: true})
const {Student, ActionItems} = require('../db/model')

//Show all/show one will be handled by React on the front end

//Create
router.post('/', (req,res) => {
    const newActionItem = new ActionItems(req.body)
    Student.findById(req.params.studentId)
    .then ( (student) => {
        student.actionItems.push(newActionItem)
        return student.save()
    })
})
    
//Update

//Delete
router.delete('/:id', (req,res) => {
    Student.findById(req.params.studentId)
    .then( (student) => {
        return student.update({ $pull: {actionItems: {_id: req.params.id} } })
    })
    .then( (student) => {
        res.send(student)
    })
})


module.exports = router