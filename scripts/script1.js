import { getapi } from "./wg_api.mjs"
import { drawChart } from "./chart1.js"

const all_tanks = 'https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=98e129430b80fda39a161c7a200261cf&limit=10'
const all_equipment = 'https://api.worldoftanks.eu/wot/encyclopedia/provisions/?application_id=98e129430b80fda39a161c7a200261cf'


//tak = tak['data']



$(document).ready(function () {
    $("#slots_for_equipment")
        .show()

    $("#equipment")
        .css("background", "lightgray")
        .hide()

    $("#equipment_slot1").click(function () {
        $("#slots_for_equipment")
            .hide()
        $("#equipment").show();
    });
    $("#equipment_slot2").click(function () {
        $("#slots_for_equipment")
            .hide()
        $("#equipment").show();
    });
    $("#equipment_slot3").click(function () {
        $("#slots_for_equipment")
            .hide()
        $("#equipment").show();
    });
    $("#directive_slot").click(function () {
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

let wn8 = [1299, 1900, 2300, 500, 1165, 3100]
let data = [86, 114, 106, 106, 107, 111, 133, 221]

document.write(drawChart(wn8, data))


let tak = (await getapi(all_tanks))["data"]
console.log(tak)