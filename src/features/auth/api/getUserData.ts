export const getUserData = async (name: string, password: string) => {
  const user = { name, password };
  const res = await fetch(import.meta.env.VITE_API_URL + '/api/3-quiz/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });
  return res.json();
};
