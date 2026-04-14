const essaysButton = document.getElementById("essaysButton");
const essaysList = document.getElementById("essaysList");

essaysButton.addEventListener("click", function () {
  essaysList.classList.toggle("hidden");
});