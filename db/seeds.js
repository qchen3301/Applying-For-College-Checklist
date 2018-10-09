require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const {Student, School, ActionItems } = require('./model')


const actionItem_DevDec = new ActionItems ({
    nameOfSchool: 'DeVry Institue of Decatur',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_DevCobb = new ActionItems ({
    nameOfSchool: 'DeVry Institute of Cobb County',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_Gt = new ActionItems ({
    nameOfSchool: 'Georgia Institute of Technology',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_Uga = new ActionItems ({
    nameOfSchool: 'University Of Georgia',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_Auburn = new ActionItems ({
    nameOfSchool: 'University Of Auburn',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_Yale = new ActionItems ({
    nameOfSchool: 'Yale University',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_Harvard = new ActionItems ({
    nameOfSchool: 'Harvard University',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_ColU = new ActionItems ({
    nameOfSchool: 'University of Columbia in New York City',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_PennU = new ActionItems ({
    nameOfSchool: 'University of Pennsylvania',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_Pton = new ActionItems ({
    nameOfSchool: 'University of Princeton',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_Mit = new ActionItems ({
    nameOfSchool: 'Massachussets Institute of Technology',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_Caltech = new ActionItems ({
    nameOfSchool: 'California Institute of Technology',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_Ucla = new ActionItems ({
    nameOfSchool: 'University of California Los Angeles',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})

const actionItem_Ucs = new ActionItems ({
    nameOfSchool: 'University of California San Diego',
    application: false,
    transcript: false,
    letterOfRecommendation: false,
    apScores: false,
    satScores: false,
    actScores: false,
    essay: false,
    fasfa: false,
    progress: 0
})


const caltech = new School({
    name: 'California Institute of Technology',
    abbreviation: 'Caltech',
    state: 'CA',
    tuition: 45390
})

const ucla = new School({
    name: 'University of California Los Angeles',
    abbreviation: 'UCLA',
    state: 'CA',
    tuition: 37471
})

const ucs = new School({
    name: 'Univeristy of California San Diego',
    abbreviation: 'UCSD',
    state: 'CA',
    tuition: 38238
})

const yale = new School({
    name: 'Yale University',
    abbreviation: 'Yale',
    state: 'CT',
    tuition: 47600
})

const harvard = new School({
    name:'Harvard University',
    abbreviation:'Harvard',
    state:'MA',
    tuition:45278
})

const colU = new School({
    name:'Columbia University in the City of New York',
    abbreviation:'Columbia U',
    state:'NY',
    tuition:53000
})

const pennU = new School({
    name:'University of Pennsylvania',
    abbreviation:'Penn U',
    state:'PA',
    tuition:49536
})

const pton = new School({
    name: 'Princeton University',
    abbreviation: 'Princeton U',
    state: 'NJ',
    tuition: 43450
})

const mit = new School({
    name: 'Massachusetts Institute of Technology',
    abbreviation: 'MIT',
    state: 'MA',
    tuition: 46704
})

const auburn = new School({
    name: 'Auburn University',
    abbreviation: 'AU',
    state: 'AL',
    tuition: 28040
})

const gt = new School({
    name: 'Georgia Institute of Technology',
    abbreviation: 'GT',
    state: 'GA',
    tuition: 12204
})

const uga = new School({
    name: 'University of Georgia',
    abbreviation: 'UGA',
    state: 'GA',
    tuition: 11622
})

const devDec = new School({
    name: 'DeVry University Decatur',
    abbreviation: 'n/a',
    state: 'GA',
    tuition: 15358
})

const devCobb = new School({
    name: 'DeVry University Cobb County',
    abbreviation: 'n/a',
    state: 'GA',
    tuition: 15358
})


const doge = new Student({
    username: 'goodboi1618',
    grade: 12,
    lastName: 'Shibagane',
    firstName: 'Doge',
    highSchool: 'Good Bois Prep',
    actionItems: [actionItem_Caltech, actionItem_Ucla, actionItem_Ucs]
})

const cChen = new Student({
    username: 'cchenxmaseve',
    grade: 11,
    lastName: 'Chen',
    firstName: 'Claire',
    highSchool: "Westminster Academy",
    actionItems: [actionItem_Yale, actionItem_Harvard, actionItem_ColU, actionItem_PennU, actionItem_Pton, actionItem_Mit]
})

const wpWarren = new Student({
    username: 'wpWarren',
    grade: 12,
    lastName: 'Warren',
    firstName: 'Paul',
    highSchool: 'East Coweta High',
    actionItems: [actionItem_Auburn]
})

const mLuongo = new Student({
    username: 'NCGWrongo',
    grade: 12,
    lastName: 'Luongo',
    firstName: 'Matthew',
    highSchool: 'Parkview High',
    actionItems: [actionItem_Gt, actionItem_Uga]
})

const idiot = new Student({
    username: 'monGOD',
    grade: 9,
    lastName: 'Chen',
    firstName: 'Qing',
    highSchool: 'Parkview High',
    actionItems: [actionItem_DevDec, actionItem_DevCobb]
})

Student.remove({})
    .then(()=> idiot.save())
    .then(()=> mLuongo.save())
    .then(()=> wpWarren.save())
    .then(()=> cChen.save())
    .then(()=> doge.save())
    .then(()=> console.log('Successful Save'))
    .then(()=> mongoose.connection.close())