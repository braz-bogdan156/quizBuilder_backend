import express from 'express';
import {
  createQuizController,
  getAllQuizzesController,
  getQuizByIdController,
  deleteQuizController
} from '../controllers/quizController.ts';

const router = express.Router();


router.post('/', createQuizController);


router.get('/', getAllQuizzesController);


router.get('/:id', getQuizByIdController);


router.delete('/:id', deleteQuizController);

export default router;