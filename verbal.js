// Array
let seen = []
setInterval(() => {
  let word = document.getElementsByClassName("word")[0].innerText
  if (seen.includes(word)) document.getElementsByClassName("css-de05nr e19owgy710")[0].click()
  else {
    seen.push(word)
    document.getElementsByClassName("css-de05nr e19owgy710")[1].click()
  }
});

// Set
let seen = new Set()
setInterval(() => {
  let word = document.getElementsByClassName("word")[0].innerText
  if (seen.has(word)) document.getElementsByClassName("css-de05nr e19owgy710")[0].click()
  else {
    seen.add(word)
    document.getElementsByClassName("css-de05nr e19owgy710")[1].click()
  }
});