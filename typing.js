let target = document.getElementsByClassName("letters")[0];
let letters = [];
document.getElementsByClassName("letters")[0].children.forEach(a => letters.push(a.innerText))
events = letters.map(letter => new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: letter }));

// For Loop
for (e of events) target.dispatchEvent(e)

// While loop
var len = events.length;
while (len--) {
  target.dispatchEvent(events[len])
}
