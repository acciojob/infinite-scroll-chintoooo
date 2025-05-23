const list = document.getElementById("infi-list");

let count = 1;

// Add initial 10 items
function addListItems(num) {
  for (let i = 0; i < num; i++) {
    const item = document.createElement("li");
    item.textContent = `List Item ${count++}`;
    list.appendChild(item);
  }
}

addListItems(10);

// Infinite scroll logic
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  if (scrollTop + windowHeight >= scrollHeight - 5) {
    addListItems(2);
  }
});
