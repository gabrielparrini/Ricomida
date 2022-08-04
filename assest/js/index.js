$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $("#enviarcorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });
});

$("#ingredientes").on({
  dblclick: function () {
    $(this).css("color", "red");
  },
});

$("#preparacion").on({
  dblclick: function () {
    $(this).css("color", "red");
  },
});

$(".card-title").click(function () {
  $(".card-text").toggle();
});
