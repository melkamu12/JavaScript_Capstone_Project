import { getComments } from './set_getComment.js';

const loadComments = async (id) => {
  try {
    const result = await getComments(id);
    const commentLength = 10;
    const comments = document.querySelector('.comment-box');
    const commentCount = document.querySelector('.count');

    comments.innerHTML = '';
    if (result[0]) {
      result.forEach((item) => {
        const element = document.createElement('p');
        element.setAttribute('class', 'each-comment');
        element.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;
        comments.appendChild(element);
      });
    }
    if (commentCount) {
      if (commentLength === undefined) {
        commentCount.textContent = 'Total comments (0)';
      } else {
        commentCount.textContent = `Total comments (${commentLength})`;
      }
    }
  } catch (err) {
    throw new Error('error');
  }
};

export default loadComments;
