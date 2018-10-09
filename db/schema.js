const Schema = require('mongoose').Schema

const ActionItemsSchema = new Schema({
    nameOfSchool: 'String',
    application: Boolean,
    transcript: Boolean,
    letterOfRecommendation: Boolean,
    apScores: Boolean,
    satScores: Boolean,
    actScores: Boolean,
    essay: Boolean,
    fasfa: Boolean,
    progess: Number

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