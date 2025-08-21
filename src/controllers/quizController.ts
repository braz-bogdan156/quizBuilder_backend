import { Request, Response } from "express";
import {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  deleteQuiz
} from "../services/quizService.ts";

export async function createQuizController(req: Request, res: Response) {
  try {
    const quiz = await createQuiz(req.body);
    res.status(201).json(quiz);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAllQuizzesController(req: Request, res: Response) {
  try {
    const quizzes = await getAllQuizzes();
    res.status(200).json(quizzes);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getQuizByIdController(req: Request, res: Response) {
  try {
    const quiz = await getQuizById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.status(200).json(quiz);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteQuizController(req: Request, res: Response) {
  try {
    const deleted = await deleteQuiz(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.status(200).json({ message: "Quiz deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}