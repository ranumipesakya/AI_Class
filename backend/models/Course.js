const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    language: { type: String, enum: ['Sinhala', 'Tamil', 'English'], default: 'Sinhala' },
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    thumbnail: { type: String }, // URL
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
