const txtElement = ["Web Developer", "Freelancer", "Student"];
let count = 0;
let Txtindex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }
  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++Txtindex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    Txtindex = 0;
  }

  setTimeout(ngetik, 500);
})();
