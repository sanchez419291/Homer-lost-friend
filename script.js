$(".reply-yes").click(function() {
    $(".homers-reply").text("Yes!");
    $(".reply-yes").css("background-color", "green");
});
$(".sad").hide();
$(".reply-no").click(function() {
    $(".sad").fadeToggle();
});
$(".reply-no").click(function() {
    $(".homers-reply").text("no");
    $(".reply-no").css("background-color", "red");
});
$(".letsgo").click(function() {
    $(".homers-reply").text("let's go!");
    $(".letsgo").css("background-color", "green");

});
$(".alien").hide();
$(".door").click(function() {});
$(".door").click(function() {
    $(".alien").fadeToggle();
    $(".door").css("background-color", "black");
});
$(".abe").hide();
$(".yes").click(function() {
    $(".abe").fadeToggle();
    $(".yes").css("background-color", "green");
});
$(".pizza").hide();
$(".period").dblclick(function() {
    $(".pizza").fadeToggle();
});
$(".lazy").hide();
$(".no").dblclick(function() {
    $(".lazy").fadeToggle();
    $(".no").css("background-color", "red");
});
$(".hehe").hide();
$(".anger").click(function() {
    $(".hehe").fadeToggle();
    $(".anger").css("background-color", "red");
});