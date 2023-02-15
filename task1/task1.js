
let textClick = [];
function showText(event) {
  const target = event.target;
  const text = target.textContent;

  textClick.push(text);
  alert(textClick.join("\n"));
}

document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    box.addEventListener("click", showText);
  });
});   
