$(document).ready(function(){

  var tanya = function(){
    var name = 'Tanya';
    var dress_color = 'blue';
    alert("popup text");
    var inner_doll = arya = function(){
      var name = 'Arya';
      var dress_color = 'green';
      var inner_doll = ana = function(){
        var name= 'Ana';
        var dress_color = 'yellow';
        var inner_doll = maria = function(){
          var name = 'Maria';
          var dress_color = 'orange';
          var inner_doll = rosa = function() {
            var name = 'Rosa';
            var dress_color = 'red';
            var inner_doll = null;
          };
        };
      };
    };
  };

  $("#start").click(function(){
    return tanya;
    $("#name").append(name);
    $("#dresscolor").apppend(dress_color);
    $("#advance").click(function(){
      return inner_doll;
    });
  });

});
