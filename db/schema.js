const Schema = require('mongoose').Schema

const ActionItemsSchema = new Schema({
    nameOfSchool: 'String',
    application: { type: Boolean, default: false },
    transcript: {type: Boolean, default: false },
    letterOfRecommendation: {type: Boolean, default: false },
    apScores: {type: Boolean, default: false },
    satScores: {type: Boolean, default: false },
    actScores: {type: Boolean, default: false },
    essay: {type: Boolean, default: false },
    fasfa: {type: Boolean, default: false }
})

const SchoolSchema = new Schema({
    name: String,
    abbreviation: String,
    state: String,
    tuition: Number
})

const StudentSchema = new Schema({
    username: String,
    grade: {
        type: Number,
        min: [9, 'please enter a number between 9-12'],
        max: 12
    },
    lastName: String,
    firstName: String,
    highSchool: String,
    actionItems: [ActionItemsSchema]
})

module.exports = {
    StudentSchema,
    SchoolSchema,
    ActionItemsSchema
}