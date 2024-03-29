export interface Hit {
  creationDate: string;
  title: string;
  body: string;
  questionId?: number;
  answerId?: number;
  type: "question" | "answer";
}
