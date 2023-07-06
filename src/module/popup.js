const closeModal = () => {
  const commentModal = document.getElementById('commentModal');
  commentModal.style.display = 'none';
  document.getElementById('homepage').classList.remove('disabled');
};

const fetchMealDetails = async (id) => {
  const result = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const data = await result.json();
  return data.meals[0];
};
const displayCommentModal = async (mealId) => {
  document.getElementById('commentModal').classList.add('show');
  document.getElementById('homepage').classList.add('disabled');
  const commentModal = document.getElementById('commentModal');
  const mealdetails = await fetchMealDetails(mealId);
  commentModal.innerHTML = '';
  const modalContent = `
  <button class="close-modal close">X</button>
  <div class="modal-container">
    <div class="details">
      <img src="${mealdetails.strMealThumb}">
      <h3>${mealdetails.strMeal}</h3>
    </div>
    <div class="mealDetails">
      <label>country:</label>${mealdetails.strArea}</h3><br>
      <label>Ingredient:</label>${mealdetails.strIngredient1},${mealdetails.strIngredient2},${mealdetails.strIngredient3}</h3>
      <p class="setInstruct"><b>Set of Instructions: </b>${mealdetails.strInstructions}</p>
      </div>
    <div id="comment-section">
      <h1><span class="count"></span></h1>
      <ul class="comment-box"></ul>
    </div>
    <h2>Add Comment</h2>
    <form class="commentForm">
      <input type="text" class="input_name" name="YourName" placeholder="Your Name"/>
      <textarea name="YourComment" class="comment_input" placeholder="Your insights ..."></textarea>
      <button class="submit_comment">Submit</button>
    </form>
  </div>
`;

  commentModal.insertAdjacentHTML('beforeend', modalContent);
  const closeBtn = commentModal.querySelector('.close');
  const submitBtn = commentModal.querySelector('.submit_comment');
  closeBtn.addEventListener('click', closeModal);
  commentModal.style.display = 'block';

  submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();
  });
};
export default displayCommentModal;
