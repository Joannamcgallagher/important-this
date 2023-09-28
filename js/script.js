$(document).ready(function () {
    $(".box").on("click", function () {
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "red") {
            //if object is already red, change it to black
            $("." + className).css("background-color", "#000");
        } else {
            //turn all ements with a box class black
            //and then change the color of all elements
            //with the same class name to red
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});