import { drawWN8Chart } from "./charts.mjs"
import { getapi } from "./wg_api.mjs"

let wn8 = [0, 101, 201, 401, 501, 700, 1001, 800, 600, 200, 700, 1000, 1300, 1200, 900, 1260, 1400, 1601, 1900, 2200, 2501, 3000, 3501, 4000, 4200, 3900, 3600, 3400, 3000, 2700, 2200, 2500, 1900, 1600, 1467, 1800, 2600, 2700, 2680, 2809, 2400, 1999, 1555, 1111, 900, 700, 501, 440, 350, 200, 100, 0]
let data = [];
for (let i = 0; i < wn8.length; i++) data[i] = i;

let chart = "WN8_chart"

const all_tanks = 'https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=98e129430b80fda39a161c7a200261cf&limit=10'
const all_equipment = 'https://api.worldoftanks.eu/wot/encyclopedia/provisions/?application_id=98e129430b80fda39a161c7a200261cf'

let api_data = (await getapi(all_equipment))["data"]
console.log(api_data)
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

let equipment_name = []
let images = {}
for (let i = 0; i < Object.keys(api_data).length; i++) {
    if (Object.values(api_data)[i]["type"] == "optionalDevice" && !Object.values(api_data)[i]["type"].endsWith("2") && !Object.values(api_data)[i]["type"].endsWith("3")) {

        if (Object.values(api_data)[i]['image'].endsWith(".png.png")) {
            images[Object.values(api_data)[i]['name']] = Object.values(api_data)[i]['image'].substr(0, Object.values(api_data)[i]['image'].length - 4)
        } else {
            images[Object.values(api_data)[i]['name']] = Object.values(api_data)[i]['image']
        }

        equipment_name.push(Object.values(api_data)[i]['name'] + "")
    }
}

//console.log(equipment_name)
console.log(images)

for (let i = 0; i < equipment_name.length; i++) {
    if (!equipment_name[i].endsWith('1') && !equipment_name[i].endsWith('2') && !equipment_name[i].startsWith('Bounty') && !equipment_name[i].startsWith('Enchanced')) {
        console.log(equipment_name[i])
        document.getElementById("equipment").innerHTML += "<img src=" + images[equipment_name[i]] + "></img>"
    }

}


export function make_main() {
    $(document).ready(function () {
        $("#player_site").hide()
        $("#tanks_site").hide()
        $("#about_site").hide()

        $("#main_site").show()

        $(".header_text").click(function () {
            $("#main_site").show()

            $("#player_site").hide()
            $("#tanks_site").hide()
            $("#about_site").hide()
        });

        $("#player_stats").click(function () {
            $("#main_site").hide()

            $("#player_site").show()
        });

        $("#tanks_stats").click(function () {
            $("#main_site").hide()

            $("#tanks_site").show()

            $("#slots_for_equipment")
                .show()

            $("#equipment")
                .css("background", "white")
                .hide()

            for (let i = 1; i <= 3; i++) {
                $("#equipment_slot" + i).click(function () {
                    $("#equipment").show();
                    make_tanks_stats()
                });
                $("#consumable_slot" + i).click(function () {
                    $("#equipment").show();
                    make_tanks_stats()
                });
                $("#ammunition_slot" + i).click(function () {
                    $("#equipment").show();
                    make_tanks_stats()
                });
            }
            $("#directive_slot").click(function () {
                $("#equipment").show();
            });
            $("#equipment").click(function () {
                $("#equipment").hide();
            });
        });
    })
}

export function make_tanks_stats() {
    $("#slots_for_equipment").on("mousedown", function () {
        $("#slots_for_equipment").on("mousemove", function (e) {
            console.log("x: " + e.clientX + ", y: " + e.clientY)
        })
        $("#slots_for_equipment").on("mouseup", function () {
            $("#slots_for_equipment").off("mousemove")
        })
    })
}