function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  //document.getElementById("header").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  //document.getElementById("header").style.marginLeft= "0";
};
/*---Top pAGE UP--*/
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




