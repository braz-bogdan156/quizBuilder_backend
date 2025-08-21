import mongoose from "mongoose";


const QuestionSchema = new mongoose.Schema({
    text: {type: String, required: true},
    type: {type: String, required: true, enum: ['boolean', 'input', 'checkbox'],
},
options: {
    type: [String], default: [],
}
});

const QuizSchema = new mongoose.Schema ({
    title: {type: String, required: true},
    questions: [QuestionSchema]
},
{timestamps: true});

export const Quiz = mongoose.model('Quiz', QuizSchema);

