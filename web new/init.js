
  $(document).ready(function() {
    $(".carousel-item").each(function() {
    var i = $(this).next();
    if (!i.length) {
        i = $(this).siblings(':first');
              }
    i.children(':first-child').clone().appendTo($(this));

      for (var n = 0; n < 4; n++)(i = i.next()).length ||
                  (i = $(this).siblings(":first")),
                  i.children(":first-child").clone().appendTo($(this))
            });			
});
function ans1(){
	  var T = document.getElementById("answer1");
    T.style.display = "block"; 	
}
function ans2(){
	  var T = document.getElementById("answer2");
    T.style.display = "block"; 	
}
function ans3(){
	  var T = document.getElementById("answer3");
    T.style.display = "block"; 	
}
function ans4(){
	  var T = document.getElementById("answer4");
    T.style.display = "block"; 	
}
function ans5(){
	  var T = document.getElementById("answer5");
    T.style.display = "block"; 	
}
