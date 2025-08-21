import { Quiz } from "../models/Quiz.ts";
import { QuizData } from "../types/types.ts";


export async function createQuiz(data: QuizData) {
  const { title, questions } = data;

  if (!title || !Array.isArray(questions) || questions.length === 0) {
    throw new Error("Invalid quiz data");
  }

  return await Quiz.create({ title, questions });
}

export async function getAllQuizzes() {
  const quizzes = await Quiz.find().sort({ createdAt: -1 });

  return quizzes.map(q => ({
    id: q._id,
    title: q.title,
    questionCount: q.questions.length,
  }));
}

export async function getQuizById(id: string) {
  return await Quiz.findById(id);
}

export async function deleteQuiz(id: string) {
  return await Quiz.findByIdAndDelete(id);
}