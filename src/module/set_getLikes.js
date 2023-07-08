import { APILikeURL } from './api.js';

const setLikes = async (id) => {
  const response = await fetch(APILikeURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return response.text();
};

const getLikes = async () => {
  try {
    const result = await fetch(APILikeURL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await result.json();
    return data;
  } catch (error) {
    return [];
  }
};

export { setLikes, getLikes };
