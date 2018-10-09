require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const {Student, School, ActionItems } = require('./model')

const actItemsForIdiotSchooldevDec = new ActionItems ({
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

const actItemsForIdiotSchooldevCobb = new ActionItems ({
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

const actItemsForDogeSchoolcaltech = new ActionItems ({
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

const actItemsForDogeSchoolucla = new ActionItems ({
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

const actItemsForDogeSchoolucsan = new ActionItems ({
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

const actItemsForCChenSchoolyale = new ActionItems ({
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

const actItemsForCChenSchoolharvard = new ActionItems ({
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

const actItemsForCChenSchoolcolU = new ActionItems ({
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

const actItemsForCChenSchoolpennU = new ActionItems ({
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

const actItemsForCChenSchoolpton = new ActionItems ({
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

const actItemsForCChenSchoolmit = new ActionItems ({
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

const actItemsForWpWarrenSchoolauburn = new ActionItems ({
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

const actItemsForMLuongoSchoolgt = new ActionItems ({
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

const actItemsForMLuongoSchooluga = new ActionItems ({
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
    tuition: 45390,
    actionItems: actItemsForDogeSchoolcaltech
})

const ucla = new School({
    name: 'University of California Los Angeles',
    abbreviation: 'UCLA',
    state: 'CA',
    tuition: 37471,
    actionItems: actItemsForDogeSchoolucla
})

const ucsan = new School({
    name: 'Univeristy of California San Diego',
    abbreviation: 'UCSD',
    state: 'CA',
    tuition: 38238,
    actionItems: actItemsForDogeSchoolucsan
})

const yale = new School({
    name: 'Yale University',
    abbreviation: 'Yale',
    state: 'CT',
    tuition: 47600,
    actionItems: actItemsForCChenSchoolyale
})

const harvard = new School({
    name:'Harvard University',
    abbreviation:'Harvard',
    state:'MA',
    tuition:45278,
    actionItems: actItemsForCChenSchoolharvard
})

const colU = new School({
    name:'Columbia University in the City of New York',
    abbreviation:'Columbia U',
    state:'NY',
    tuition:53000,
    actionItems: actItemsForCChenSchoolcolU
})

const pennU = new School({
    name:'University of Pennsylvania',
    abbreviation:'Penn U',
    state:'PA',
    tuition:49536,
    actionItems: actItemsForCChenSchoolpennU
})

const pton = new School({
    name: 'Princeton University',
    abbreviation: 'Princeton U',
    state: 'NJ',
    tuition: 43450,
    actionItems: actItemsForCChenSchoolpton
})

const mit = new School({
    name: 'Massachusetts Institute of Technology',
    abbreviation: 'MIT',
    state: 'MA',
    tuition: 46704,
    actionItems: actItemsForCChenSchoolmit
})

const auburn = new School({
    name: 'Auburn University',
    abbreviation: 'AU',
    state: 'AL',
    tuition: 28040,
    actionItems: actItemsForWpWarrenSchoolauburn
})

const gt = new School({
    name: 'Georgia Institute of Technology',
    abbreviation: 'GT',
    state: 'GA',
    tuition: 12204,
    actionItems: actItemsForMLuongoSchoolgt
})

const uga = new School({
    name: 'University of Georgia',
    abbreviation: 'UGA',
    state: 'GA',
    tuition: 11622,
    actionItems: actItemsForMLuongoSchooluga
})

const devDec = new School({
    name: 'DeVry University Decatur',
    abbreviation: 'n/a',
    state: 'GA',
    tuition: 15358,
    actionItems: actItemsForIdiotSchooldevDec
})

const devCobb = new School({
    name: 'DeVry University Cobb County',
    abbreviation: 'n/a',
    state: 'GA',
    tuition: 15358,
    actionItems: actItemsForIdiotSchooldevCobb
})


const doge = new Student({
    username: 'goodboi1618',
    grade: 12,
    lastName: 'Shibagane',
    firstName: 'Doge',
    highSchool: 'Good Bois Prep',
    universities: [caltech, ucla, ucsan]
})

const cChen = new Student({
    username: 'cchenxmaseve',
    grade: 11,
    lastName: 'Chen',
    firstName: 'Claire',
    highSchool: "Westminster Academy",
    universities: [yale, harvard, colU, pennU, pton, mit]
})

const wpWarren = new Student({
    username: 'wpWarren',
    grade: 12,
    lastName: 'Warren',
    firstName: 'Paul',
    highSchool: 'East Coweta High',
    universities: [auburn]
})

const mLuongo = new Student({
    username: 'NCGWrongo',
    grade: 12,
    lastName: 'Luongo',
    firstName: 'Matthew',
    highSchool: 'Parkview High',
    universities: [gt, uga]
})

const idiot = new Student({
    username: 'monGOD',
    grade: 9,
    lastName: 'Chen',
    firstName: 'Qing',
    highSchool: 'Parkview High',
    universities: [devDec, devCobb]
})

Student.remove({})
    .then(()=> idiot.save())
    .then(()=> mLuongo.save())
    .then(()=> wpWarren.save())
    .then(()=> cChen.save())
    .then(()=> doge.save())
    .then(()=> console.log('Successful Save'))
    .then(()=> mongoose.connection.close())