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
router.put('/:id', (req, res) => {
    Student.findById(req.params.studentId)
    .then ( (student)=> {
        const actionItems = student.actionItems.id(req.params.id)
        const checkboxTrue = req.body

        if(checkboxTrue.application = true) {
            actionItems.application = true
        }
        else {
            actionItems.application = false
        }

        return student.save()
    })
    .then((student)=> {
        res.send(student)
    })
})

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