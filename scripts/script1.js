$(document).ready(function () {
    $("#slots_for_equipment")
        .show()

    $("#equipment")
        .css("background", "black")
        .hide()

    $("#slot1").click(function () {
        $("#slots_for_equipment")
            .hide()
        $("#equipment").show();
    });
    $("#slot2").click(function () {
        $("#slots_for_equipment")
            .hide()
        $("#equipment").show();
    });
    $("#slot3").click(function () {
        $("#slots_for_equipment")
            .hide()
        $("#equipment").show();
    });

    $("#equipment").click(function () {
        $("#slots_for_equipment")
            .show()
        $("#equipment").hide();
    });
})