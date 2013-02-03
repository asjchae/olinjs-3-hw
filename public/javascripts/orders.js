$(function () {
  $('.newOrder').on('submit', function () {
    $.post("/order/create", $(this).serialize());
    return false;
  })

  $('.deleteOrder').on('submit', function () {
    $.post("/order/delete", $(this).serialize());
    $(this).remove();
    return false;
  })
})