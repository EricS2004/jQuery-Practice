//Task 0
$(".example1").hide();
//Task 1
$(".button1").click(function() {
    $(".example2").hide();
});

//Task 2
$(".button2").click(function() {
    $(".example2-div").text("Welcome to the Code Nation Fellowship");
});
//Task 3
$(".button3").click(function() {
    $(".example3-div").append('<a href="https://gph.is/2dmrkZb">Click the link </a>');

});
//Task 4
$(".button4").click(function() {
    let message = $(".example4-input").val();
    $(".result-div4").text(message);


});

//Task 5
$(".button5").click(function() {
    $(".example5-div").css("background-color", "aqua");

});