const mongoose = require('mongoose')
const {StudentSchema, SchoolSchema, ActionItemsSchema} = require('./schema')

const StudentModel = mongoose.model('Student', StudentSchema)
const SchoolModel = mongoose.model('School', SchoolSchema)
const ActionItemsModel = mongoose.model('ActionItems', ActionItemsSchema)

module.exports = {
    Student: StudentModel,
    School: SchoolModel,
    ActionItems: ActionItemsModel
}