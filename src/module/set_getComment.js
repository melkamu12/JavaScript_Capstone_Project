import { APICommentURL } from './api.js';

const setComment = async (id, CommenterUsername, userComment) => {
  if (CommenterUsername && userComment) {
    const Usercomment = {
      item_id: id,
      username: CommenterUsername,
      comment: userComment,
    };
    await fetch(APICommentURL, {
      method: 'POST',
      body: JSON.stringify(Usercomment),
      headers: {
        'Content-type': 'application/json',
      },
    });
  } else if (!CommenterUsername || !userComment) {
    // alert('Please fill all the fields.');
  }
};
const getComments = async (itemID) => {
  let data = await fetch(`${APICommentURL}?item_id=${itemID}`);
  data = await data.json();
  return data;
};
export { setComment, getComments };
