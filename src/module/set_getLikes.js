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

export default setLikes;
