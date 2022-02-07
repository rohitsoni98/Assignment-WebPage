var buttons = document.querySelectorAll(".headBar .headItem");
var sections = document.querySelectorAll(".cards");
var card1 = document.querySelectorAll(".card1");
var card2 = document.querySelectorAll(".card2");
var card3 = document.querySelectorAll(".card3");
var notches = document.querySelectorAll(".notch");
function showPanel(index) {
  buttons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  buttons[index].style.backgroundColor = "#ff8d1a";
  buttons[index].style.color = "#fff";

  sections.forEach(function (node) {
    node.style.display = "none";
  });
  sections[index].style.display = "flex";
  card1[index].animate(
    [
      // keyframes
      { opacity: "0%" },
      { opacity: "100%" },
    ],
    {
      // timing options
      duration: 1100,
    }
  );
  card2[index].animate(
    [
      // keyframes
      { opacity: "0%" },
      { opacity: "100%" },
    ],
    {
      // timing options
      duration: 1100,
    }
  );
  card3[index].animate(
    [
      // keyframes
      { opacity: "0%" },
      { opacity: "100%" },
    ],
    {
      // timing options
      duration: 1100,
    }
  );

  notches.forEach(function (node) {
    node.style.display = "none";
  });
  notches[index].style.display = "block";
}
showPanel(0);
