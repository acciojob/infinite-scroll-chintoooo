//your code here!

const list = document.getElementById("infinite-list");

let count = 1;

// Function to create and append list items
function addListItems(num) {
  for (let i = 0; i < num; i++) {
    const item = document.createElement("li");
    item.textContent = `List Item ${count++}`;
    list.appendChild(item);
  }
}

// Add initial 10 items
addListItems(10);

// Detect when user scrolls to the bottom
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const scrollHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= scrollHeight - 5) {
    addListItems(2);
  }
});
