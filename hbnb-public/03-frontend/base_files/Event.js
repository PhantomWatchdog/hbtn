<document.addEventListener("DOMContentLoaded", function() {
  const addReviewButton = document.getElementById("add-review-button");
  const reviewFormContainer = document.getElementById("review-form-container");
    addReviewButton.addEventListener("click", function() {
      if (reviewFormContainer.style.display === "none" || reviewFormContainer.style.display === "") {
        reviewFormContainer.style.display = "block";
      } else {
        reviewFormContainer.style.display = "none";
      }
  });
});
