$(document).ready(function () {
    $("#equipment")
        .css("background", "black")
        .hide()

    $("svg").click(function () {
        $("#equipment").show();
    });
})