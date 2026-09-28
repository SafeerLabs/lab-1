window.onscroll = function () {
  // How far down are we? (0 to 100)
  let percent = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;

  // Fill the bar
  document.getElementById("bar").style.width = percent + "%";

  // Move the fox away
  document.getElementById("fox").style.left = (40 + percent) + "%";
};
