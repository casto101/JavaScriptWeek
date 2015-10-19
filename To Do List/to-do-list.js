$(document).ready(function(){

  var taskCounter = 0;

  $("#todo-form > button").click(function(event){
    event.preventDefault();
    var newTaskNumber = taskCounter;
    var inputtedTask = $("#todo-form > input").val();

    $('div#to-do').append('<div class="todo-task" id="task'+ newTaskNumber +'"><p>' + inputtedTask + '</p><button class="btn move-to-complete" id="move-task'+ newTaskNumber +'">!</button><button class="btn delete-task" id="delete-task'+ newTaskNumber +'">X</button></div>');

    taskCounter++;

    $("#todo-form > input").val(" ").css("placeholder","Task");

    $("button#delete-task"+ newTaskNumber).click(function(){
      $(this).parent().remove();
    });

    $("button#move-task"+ newTaskNumber).click(function(){
      $(this).parent().remove();
      $("#completed").append($(this).parent());
      $("button#delete-task"+ newTaskNumber).click(function(){
        $(this).parent().remove();
      });
    });


  });
});
