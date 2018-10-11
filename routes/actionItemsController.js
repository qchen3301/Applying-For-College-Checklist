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
//2nd model update route written with help from John Kim
router.put('/:id', (req, res) => {
    Student.findById(req.params.studentId)
    .then ( (student)=> {
        const actionItemsForm = student.actionItems.id(req.params.id)
        //take all keys off req.body and store as array
        const attr = Object.keys(req.body)
        //iterate through keys from req.body
        attr.forEach( checkedBox => {
            //set the value in actionItemsForms
            actionItemsForm[checkedBox] = req.body[checkedBox]
        })
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