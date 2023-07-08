import loadComments from '../module/LoadComment.js';
import { getComments } from '../module/set_getComment.js';

jest.mock('../module/set_getComment.js', () => ({
  getComments: jest.fn(),
}));

describe('loadComments', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="comment-box"></div>
      <div class="count"></div>
    `;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should load comments and update UI correctly', async () => {
    const mockComments = [
      { creation_date: '2023-07-05', username: 'User1', comment: 'Comment 1' },
      { creation_date: '2023-07-06', username: 'User2', comment: 'Comment 2' },
    ];
    const mockCommentLength = mockComments.length;
    getComments.mockResolvedValueOnce(mockComments);

    await loadComments(123);

    expect(getComments).toHaveBeenCalledWith(123);

    const commentBox = document.querySelector('.comment-box');
    const commentCount = document.querySelector('.count');

    expect(commentBox.innerHTML).toBe(
      '<p class="each-comment">2023-07-05 User1: Comment 1</p><p class="each-comment">2023-07-06 User2: Comment 2</p>',
    );

    expect(commentCount.textContent).toBe(
      `Total comments (${mockCommentLength})`,
    );
  });

  test('should handle no comments case', async () => {
    const mockComments = [];
    getComments.mockResolvedValueOnce(mockComments);

    await loadComments(123);

    const commentBox = document.querySelector('.comment-box');
    const commentCount = document.querySelector('.count');

    expect(commentBox.innerHTML).toBe('');
    expect(commentCount.textContent).toBe('Total comments (0)');
  });
  test('should handle error loading comments', async () => {
    const mockError = new Error('Failed to load comments');
    getComments.mockRejectedValueOnce(mockError);

    try {
      await loadComments(123);
    } catch (error) {
      expect(error.message).toBe('error');
    }
  });
});
