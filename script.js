const essaysButton = document.getElementById("essaysButton");
const essaysList = document.getElementById("essaysList");
const contactBox = document.getElementById("contactBox");
const contactMessage = document.getElementById("contactMessage");
const contactSubmit = document.getElementById("contactSubmit");
const wordCount = document.getElementById("wordCount");
const contactFeedback = document.getElementById("contactFeedback");

essaysButton.addEventListener("click", function () {
  essaysList.classList.toggle("hidden");
  contactBox.classList.toggle("hidden");
});

contactMessage.addEventListener("input", function () {
  const words = contactMessage.value.trim() === ""
    ? 0
    : contactMessage.value.trim().split(/\s+/).length;
  wordCount.textContent = words + " / 100";
  if (words > 100) {
    wordCount.style.color = "red";
    contactSubmit.disabled = true;
  } else {
    wordCount.style.color = "#000";
    contactSubmit.disabled = false;
  }
});

contactSubmit.addEventListener("click", async function () {
  const message = contactMessage.value.trim();
  if (!message) return;

  const response = await fetch("https://formspree.io/f/xeaqpkey", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: message })
  });

  if (response.ok) {
    contactMessage.value = "";
    wordCount.textContent = "0 / 100";
    contactFeedback.classList.remove("hidden");
  }
});
