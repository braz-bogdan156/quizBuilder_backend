import express from 'express';
import quizzesRoute from './quizzes.ts';

const router = express.Router();
router.use('/quizzes', quizzesRoute);

export const routes = router;