var firstX, firstY, down = false;

$(".about").click(function() {
  $(".about").removeClass("focus").removeClass("border");
  $(this).addClass("focus").addClass("border");
}).dblclick(function() {
  location.href = 'about';
});

$(".my-stuff").click(function() {
  $(".my-stuff").removeClass("focus").removeClass("border");
  $(this).addClass("focus").addClass("border");
}).dblclick(function() {
  location.href = 'my-stuff';
});

$(".options").click(function() {
  $(".options").removeClass("focus").removeClass("border");
  $(this).addClass("focus").addClass("border");
}).dblclick(function() {
  location.href = "options"
});