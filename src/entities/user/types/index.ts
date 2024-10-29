type UserModelType = {
  id: number;
  name: string;
  password: string;
  quizzes: string[] | null;
  createdAt: string;
  updatedAt: string;
};

export type UserType = UserModelType | null;
