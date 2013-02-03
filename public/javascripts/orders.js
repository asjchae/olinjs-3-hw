$(function () {

  $('#neworder').on('submit', function () {
    $.post("/order/create", $('#neworder').serialize());
    return false;
  })

  $('#delorder').on('click', function () {
    $.post("/order/delete", $('#delorder').serialize());
    $(this).remove();
    return false;
  })
}
