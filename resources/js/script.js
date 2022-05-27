$(function() {
    $('#slideshow img:gt(0)').hide();
    setInterval(function() {
    $('#slideshow :first-child')
    .fadeOut(1000)
    .next('img')
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
    }, 4000);
    });

    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }