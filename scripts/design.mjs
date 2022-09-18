import { drawWN8Chart } from "./charts.mjs"

let wn8 = [0, 101, 201, 401, 501, 700, 1001, 800, 600, 200, 700, 1000, 1300, 1200, 900, 1260, 1400, 1601, 1900, 2200, 2501, 3000, 3501, 4000, 4200, 3900, 3600, 3400, 3000, 2700, 2200, 2500, 1900, 1600, 1467, 1800, 2600, 2700, 2680, 2809, 2400, 1999, 1555, 1111, 900, 700, 501, 440, 350, 200, 100, 0]
let data = [];
for (let i = 0; i < wn8.length; i++) data[i] = i;

let chart = "WN8_chart"

export function make_main() {
    $(document).ready(function () {
        $("#player_site").hide()
        $("#tanks_site").hide()
        $("#about_site").hide()

        $("#main_site").show()

        $("#header_text").click(function () {
            $("#main_site").show()

            $("#player_site").hide()
            $("#tanks_site").hide()
            $("#about_site").hide()
        });

        $("#player_stats").click(function () {
            $("#main_site").hide()

            $("#player_site").show()


        });
        $("#header_text").click(function () {
            console.log("klik")
        })
        $("#tanks_stats").click(function () {
            $("#main_site").hide()

            $("#tanks_site").show()

            $("#slots_for_equipment")
                .show()

            $("#equipment")
                .css("background", "white")
                .hide()

            $("#equipment_slot1").click(function () {
                $("#slots_for_equipment")
                    .hide()
                $("#equipment").show();
                drawWN8Chart(wn8, data, chart)
            });
            $("#equipment_slot2").click(function () {
                $("#slots_for_equipment")
                    .hide()
                $("#equipment").show();
                drawWN8Chart(wn8, data, chart)
            });
            $("#equipment_slot3").click(function () {
                $("#slots_for_equipment")
                    .hide()
                $("#equipment").show();
                drawWN8Chart(wn8, data, chart)
            });
            $("#directive_slot").click(function () {
                $("#slots_for_equipment")
                    .hide()
                $("#equipment").show();
                drawWN8Chart(wn8, data, chart)
            });

            $("#equipment").click(function () {
                $("#slots_for_equipment")
                    .show()
                $("#equipment").hide();
            });
        });


    })
}

export function make_tanks_stats() {
    console.log(wn8)
}