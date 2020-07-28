$(document).ready(function () {
  //Add Footer to pages

  //Detect page your in

  if (document.URL.includes("notes.html")) {
    $("#notes").addClass("activo-page");
  }
  if (document.URL.includes("mypages.html")) {
    $("#mypages").addClass("activo-page");
  }
  if (document.URL.includes("projects.html")) {
    $("#projects").addClass("activo-page");
  }
});
