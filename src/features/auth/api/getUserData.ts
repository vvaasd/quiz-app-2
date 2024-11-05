export const getUserData = async (name: string, password: string) => {
  const user = { name, password };
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + '/api/3-quiz/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    });

    if (!res) {
      console.log(res);
      return Promise.reject('response was not ok');
    }

    return res.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
