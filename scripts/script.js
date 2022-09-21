import { getapi } from "./wg_api.mjs"
import { make_main, make_tanks_stats } from "./design.mjs"

const all_tanks = 'https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=98e129430b80fda39a161c7a200261cf&limit=10'
const all_equipment = 'https://api.worldoftanks.eu/wot/encyclopedia/provisions/?application_id=98e129430b80fda39a161c7a200261cf'

make_main()

//make_tanks_stats()

//console.log((await getapi(all_equipment))["data"])