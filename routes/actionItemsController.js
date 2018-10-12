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
//2nd model update route written with help from John Kim and James Royals
router.put('/:id', (req, res) => {
    Student.findById(req.params.studentId)
    .then ( (student)=> {
        const updatedActionItems = req.body
        const actionItems = student.actionItems.id(req.params.id)
            actionItems.application = updatedActionItems.applicationCheck
            actionItems.transcript = updatedActionItems.transcriptCheck
            actionItems.letterOfRecommendation = updatedActionItems.letterOfRecommendationCheck
            actionItems.apScores = updatedActionItems.apScoresCheck
            actionItems.satScores = updatedActionItems.satScoresCheck
            actionItems.actScores = updatedActionItems.actScoresCheck
            actionItems.essay = updatedActionItems.essayCheck
            actionItems.fasfa = updatedActionItems.fasfaCheck
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