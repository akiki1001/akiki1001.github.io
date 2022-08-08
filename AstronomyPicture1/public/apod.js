$(document).ready(function () {
  $("#view_button").click(getPicture);
  console.log('apod');
});
function getPicture() {
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    type: "GET",
    data: { api_key: "qE9rRMxMcwGraEpqosaSyuusdHzCKBnSm0JdC21L", date: $("#date").val() },
    dataType: "json",
    success: showPicture,
    error: noPicture,
  });
console.log('getpic');
}
function showPicture(data) {
  $("#pic").attr("src", data.url);
  $("#title").text(data.title);
}
function noPicture(error) {
  alert(error.responseText);
}
