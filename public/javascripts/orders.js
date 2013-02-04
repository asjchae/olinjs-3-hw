$(function () {

  $('#neworder').on('submit', function () {
    $.post("/order/create", $('#neworder').serialize());
    return false;
  });

  $('.deletething').on('submit', function () {
    $.post("/order/delete", $(this).serialize());
    $(this).remove();
    return false;
  });
});