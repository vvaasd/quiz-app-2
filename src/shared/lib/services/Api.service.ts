const RAW_URL = import.meta.env.VITE_API_URL;
const URL_PAGES = {
  auth: '/api/3-quiz/auth',
};

export type AuthUserType = {
  id: number;
  name: string;
  password: string;
  quizzes: string[];
  createdAt: string;
  updatedAt: string;
} | null;

export class Api {
  static async fetchAuth(
    name: string,
    password: string,
  ): Promise<AuthUserType> {
    const url = encodeURI(RAW_URL + URL_PAGES.auth);
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        return Promise.reject(
          'Network response was not ok ' + response.statusText,
        );
      }

      const data = await response.json();

      return data?.user || data;
    } catch (error) {
      console.log('There was a problem with the fetch operation:', error);
      return Promise.reject('There was a problem with the fetch operation');
    }
  }
}
