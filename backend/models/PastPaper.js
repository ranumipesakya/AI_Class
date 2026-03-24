const mongoose = require('mongoose');

const pastPaperSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subject: { type: String, required: true },
    year: { type: Number, required: true },
    paperUrl: { type: String, required: true },
    markingSchemeUrl: { type: String },
    language: { type: String, enum: ['Sinhala', 'Tamil', 'English'], default: 'Sinhala' },
}, { timestamps: true });

const PastPaper = mongoose.model('PastPaper', pastPaperSchema);
module.exports = PastPaper;
