function myScript() {
  var x = document.getElementById("mySecondnav");
  if (x.className === "second-nav") {
    x.className += " responsive";
  } else {
    x.className = "second-nav";
  }
}