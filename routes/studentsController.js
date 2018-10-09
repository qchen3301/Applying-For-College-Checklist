const router = require('express').Router()
const {Student} = require.apply('../db/model')

//SHOW ALL
router.get('/', async (req,res)=>{
  const students = await Student.find()
  res.send(students)
})

//SHOW ONE
router.get('/:id', async (req,res) => {
  const student = await Student.findbyId(req.params.id)
  res.send(student)
})

//CREATE
router.post('/', async (req,res) => {
  const newStudent = await Student.create(req.body)
  res.send(newStudent)
})

//UPDATE
router.put('/:id', async (req,res) => {
  const student = await Student.findbyIdAndUpdate(req.params.id, req.body, {new: true})
  res.send(student)
})

//DELETE
router.delete(':/id', async (req,res) => {
  const student = await Student.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})

module.exports = router