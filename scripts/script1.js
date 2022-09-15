import { getapi } from "./wg_api.mjs"
import { drawChart } from "./chart1.mjs"

const all_tanks = 'https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=98e129430b80fda39a161c7a200261cf&limit=10'
const all_equipment = 'https://api.worldoftanks.eu/wot/encyclopedia/provisions/?application_id=98e129430b80fda39a161c7a200261cf'


let wn8 = [0, 101, 201, 401, 501, 700, 1001, 1300, 1601, 1900, 2200, 2501, 3000, 3501, 4000]
let data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
let chart = "myChart"

$(document).ready(function () {
    $("#slots_for_equipment")
        .show()

    $("#equipment")
        .css("background", "white")
        .hide()

    $("#equipment_slot1").click(function () {
        $("#slots_for_equipment")
            .hide()
        $("#equipment").show();
        drawChart(wn8, data, chart)
    });
    $("#equipment_slot2").click(function () {
        $("#slots_for_equipment")
            .hide()
        $("#equipment").show();
        drawChart(wn8, data, chart)
    });
    $("#equipment_slot3").click(function () {
        $("#slots_for_equipment")
            .hide()
        $("#equipment").show();
        drawChart(wn8, data, chart)
    });
    $("#directive_slot").click(function () {
        $("#slots_for_equipment")
            .hide()
        $("#equipment").show();
        drawChart(wn8, data, chart)
    });

    $("#equipment").click(function () {
        $("#slots_for_equipment")
            .show()
        $("#equipment").hide();
    });
})





let tak = (await getapi(all_tanks))["data"]
console.log(tak)