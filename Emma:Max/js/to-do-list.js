$(document).ready(function(){

  var taskCounter = 0;

  $("#todo-form > button").click(function(event){
    event.preventDefault();
    var newTaskNumber = taskCounter;
    var inputtedTask = $("#todo-form > input").val();

    $('div#to-do').append('<div class="todo-task" id="task'+ newTaskNumber +'"><div class="button-holder"><button class="btn move-to-complete" id="move-task'+ newTaskNumber +'">!</button><button class="btn delete-task" id="delete-task'+ newTaskNumber +'">X</button></div>' + inputtedTask + '</div>');

    taskCounter++;

    $("#todo-form > input").val(" ").css("placeholder","Task");

    $("button#delete-task"+ newTaskNumber).click(function(){
      $(this).parent().parent().remove();
    });

    $("button#move-task"+ newTaskNumber).click(function(){
      $(this).parent().parent().remove();
      $("#completed").append($(this).parent().parent());
      $("button#delete-task"+ newTaskNumber).click(function(){
        $(this).parent().parent().remove();
      });
    });


  });
});
