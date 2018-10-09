const Schema = require('mongoose').Schema

const ActionItemsSchema = new Schema({
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
    tuition: Number,
    actionItems: ActionItemsSchema
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
    universities: [SchoolSchema]
})

module.exports = {
    StudentSchema,
    SchoolSchema,
    ActionItemsSchema
}