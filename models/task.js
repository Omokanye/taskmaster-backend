const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['urgent-important', 'schedule-lessurgent', 'lessimportant-delegate', 'dontdo-discover'],
        required: true
    },
    deadline: {
        type: Date,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
