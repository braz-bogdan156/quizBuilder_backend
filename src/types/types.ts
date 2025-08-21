export interface Question {
  text: string;
  enum: ["boolean", "input", "checkbox"];
  options: string[];
}

export interface QuizData {
  title: string;
  questions: Question[];
}