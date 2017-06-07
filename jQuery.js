



$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});


//Selectors------------

$("p").hide()
//Demonstrates the jQuery hide() method, hiding all <p> elements.

$("#test").hide()
//Demonstrates the jQuery hide() method, hiding the element with id="test".

$(".test").hide()
//Demonstrates the jQuery hide() method, hiding all elements with class="test".

$(this).hide()
//Demonstrates the jQuery hide() method, hiding the current HTML element.