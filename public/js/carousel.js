$(document).ready(function(){
  debugger
  $(".carousel_controls").click(function(event){
    var current_index = $("li#active").index();
    var next_index = current_index + 1 == $('.carousel li').length ? 0 : current_index + 1;
    var previous_index = current_index == 0  ?  $('.carousel li').length - 1 : current_index - 1;

    if (event.target.id === "previous_frame"){
      var previousElement = $('.carousel li').eq(previous_index).addClass('previous')

      if ($("li#active").index() === $("ul li:first-child").index()){
        $("li#active").removeAttr("id");
        $("ul li:last-child").attr("id", "active");
      } else {
        $("li#active").removeAttr("id").prev().attr("id", "active");
      }
      previousElement.animate({left: 0}, 1000, "linear", function(){
        $(this).removeClass("previous")
        $(this).removeAttr("style")
      })
    }
    else if (event.target.id === "next_frame"){
      var nextElement = $('.carousel li').eq(next_index).addClass('next')

      if ($("li#active").index() === $("ul li:last-child").index()){
        $("li#active").removeAttr("id");
        $("ul li:first-child").attr("id", "active");
      } else {
        $("li#active").removeAttr("id").next().attr("id", "active");
      }
      nextElement.animate({left: 0}, 1000, "linear", function(){
        $(this).removeClass("next")
        $(this).removeAttr("style")
      })
    }
  })
});