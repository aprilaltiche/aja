$(document).ready(function(){
    
    var grid_one = $(".grid-area-one > button");
    var grid_two = $(".grid-area-two > button");
    var grid_three = $(".grid-area-three > button");

    grid_one.on("click",function(){
        $(".expand-one").show("slow");
        grid_one.hide();
      }); 

      grid_two.click(function(){
        $(".expand-two").show("slow");
        grid_two.hide();
      });

      grid_three.click(function(){
        $(".expand-three").show("slow");
        grid_three.hide();
      });
      }); 
