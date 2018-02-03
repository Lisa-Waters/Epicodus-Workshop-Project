$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-group-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})
