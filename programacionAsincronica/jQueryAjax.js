<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="app.js"></script>

$(document).on("keyup", function () {
    (".circle").hide();
  });

$(".blue").click(function () {
  $(this).css("background", "yellow");
});

$("#append").click(function () {
  $(".squares").append('<div class="square"></div>');
});


$("#input").on("keyup", function () {
  $("h1 ").text("Hola " + $("#input").val() + "!");
  if ($(this).val() === 0) {
    $("h1").text("¿Cómo te llamas?");
  }
});

$('.container').on("keyup", function(e) {
  
  let count = $("textarea").val().length;
  $(".counter").text(count);
  if(count > 80) {
    $(".container").addClass("error");
    $(".counter").addClass("counter");
  } else {
    $(".counter").removeClass("error");
    $(".container").removeClass("error");
  }
});

$("#add").on("click", function(e) {
  let count = $("li").length;
  $(".elements").append("<li>Elemento " + count + "</li>");
});

$(".elements").on("click", 'li', function(e) {
  $(e.currentTarget).toggleClass("marked");
});
    