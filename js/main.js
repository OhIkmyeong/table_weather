import { start_making_table } from "./table.js";

async function make_table_all(){
    await start_making_table('00_korea');
    await start_making_table('01_temper');
    await start_making_table('02_rain');
    await start_making_table('03_wind');
    await start_making_table('04_snow');
    await start_making_table('05_air_press');
    await start_making_table('06_demp');
    await start_making_table('07_vapor_pressure');
    await start_making_table('08_vapor');
    await start_making_table('09_sunshine');
    await start_making_table('10_radiation');
    await start_making_table('11_cloud');
    await start_making_table('12_temp_ground');
    await start_making_table('13_meteorological');
    await start_making_table('14_seasonal_value');
    await start_making_table('15_climate_index');
    await start_making_table('16_distribution');
}

make_table_all();