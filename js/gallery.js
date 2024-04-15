function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c === "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.indexOf(c) > -1) {
      addClass(x[i], "show");
    } else {
      removeClass(x[i], "show");
    }
  }
}

function addClass(element, name) {
  var arr = element.className.split(" ");
  if (arr.indexOf(name) === -1) {
    element.className += " " + name;
  }
}

function removeClass(element, name) {
  var arr = element.className.split(" ");
  while (arr.indexOf(name) > -1) {
    arr.splice(arr.indexOf(name), 1);
  }
  element.className = arr.join(" ");
}

filterSelection("all"); // Show all by default
