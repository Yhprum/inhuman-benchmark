let target = document.getElementsByClassName("e18o0sx0")[0];
let down = new MouseEvent("mousedown", { bubbles: true, cancelable: true });

// If statement
setInterval(() => {
  if (target.classList[0] === "view-go") {
    target.dispatchEvent(down);
  }
});

// Logical operator chaining
setInterval(function () {
  target.className.startsWith("view-go") && target.dispatchEvent(down);
});
