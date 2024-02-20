declare module global {
    interface Store {
        active: boolean
        sync_clouds: boolean
        only_metar: boolean
        scale: number
    }
    var store: Store
}

this.store = {
    sync_clouds: false,
    only_metar: false,
    scale: '100'
};
this.$api.datastore.import(this.store);

const self2 = this;

let active = false;

let updateInterval: number|undefined;

settings_define({
    only_metar: {
        label: 'Only surface winds',
        description: 'Only sync surface winds, skip winds aloft',
        type: "checkbox",
        value: this.store.only_metar as boolean,
        changed(value) {
            this.store.only_metar = value as boolean;
            this.$api.datastore.export(this.store);
        },
    },
    scale: {
        label: 'Wind scaling (%)',
        description: "Allows you to scale down the wind, set as a percentage (example, '50' would be 50% of the current winds). 0 - 100 are valid values",
        type: "text",
        value: this.store.scale as string,
        changed(value) {
            let val = `${value}`.replace(/\D+/g, '');
            if (!val || isNaN(+val)) {
                val = '100';
            }
            
            let val2 = +value;
            val2 = Math.min(100, Math.max(0, val2));
            
            this.store.scale = val2;
            this.$api.datastore.export(this.store);
        },
    }
})

style(() => {
    return active ? 'active' : null;
})

run(() => {
    active = !active;
    
    if (!active) {
        if (updateInterval) {
            console.log("stopping wx updates");
            
            clearInterval(updateInterval);
        }
        return;
    }

    this.$api.datastore.export(this.store);
    
    let lon = this.$api.variables.get<number>("PLANE LONGITUDE", "Degrees");
    let lat = this.$api.variables.get<number>("PLANE LATITUDE", "Degrees");

    if (!lon || !lat) {
        return;
    }
    
    triggerUpdate(lat, lon);

    if (updateInterval === undefined) {
        updateInterval = setInterval(() => {
            lon = this.$api.variables.get<number>("PLANE LONGITUDE", "Degrees");
            lat = this.$api.variables.get<number>("PLANE LATITUDE", "Degrees");

            if (!lon || !lat) {
                return;
            }

            void triggerUpdate(lat, lon, true);
        }, 1000 * 60 * 15 /* 15 minutes */);
    }
});

exit(() => {
    console.log("stopping wx updates");
    clearInterval(updateInterval);
});

const triggerUpdate = async (lat: number, lon: number, doInterpolate: boolean = false) => {
    let vatsimWx: WeatherReport|undefined;
    let meteoWx: ParsedWindLayer|undefined;

    try {
        vatsimWx = await updateVatsim(lat, lon);
    } catch (err) {
        console.log("Failed fetching VATSIM wx");
        console.log((err as Error).message);
    }
    try {
        meteoWx = await updateMeteo(lat, lon)
    } catch (err) {
        console.log("error updating meteo wx");
        console.log((err as Error).message);
    }
    updateWx(vatsimWx, meteoWx, doInterpolate);
};

const updateWx = (vatsim: WeatherReport|undefined, meteo: ParsedWindLayer|undefined, doInterpolate: boolean = false) => {
    const currentWx = this.$api.weather.get_weather();
    console.log(`updating weather near ${vatsim?.icao}`);
    
    if (vatsim !== undefined) {
        let groundWind = currentWx.tWindLayers[0];
        currentWx.tWindLayers[0] = {
            ...groundWind,
            dvAltitude: {
                "__Type": "RangeDataValue",
                "ID": 0,
                "icon": "",
                "name": "ALTITUDE",
                "valueStr": "",
                "value": 0,
                "type": "",
                "unit": "Ft",
                "quality": 0,
                "html": "",
                "userTag": 0,
                "min": -1640,
                "max": 60000,
                "step": 10,
                "clamp_min": -1640,
                "clamp_max": 60000,
                "percent": 0
            },
            "dvAngleRad": {
                "__Type": "RangeDataValue",
                "ID": 0,
                "icon": "",
                "name": "TT:MENU.WEATHER_WIND_FROM",
                "valueStr": "",
                "value": degToRad(vatsim.wind.degrees),
                "type": "",
                "unit": "°",
                "quality": 0,
                "html": "",
                "userTag": 0,
                "min": 0,
                "max": 6.2831854820251465,
                "step": 0.01745329238474369,
                "clamp_min": 0,
                "clamp_max": 6.2831854820251465,
                "percent": 0
            },
            "dvSpeed": {
                "__Type": "RangeDataValue",
                "ID": 0,
                "icon": "",
                "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_SPEED",
                "valueStr": "",
                "value": vatsim.wind.speed_kts * (parseInt(self2.store.scale as string) / 100),
                "type": "",
                "unit": "Kts",
                "quality": 0,
                "html": "",
                "userTag": 0,
                "min": 0,
                "max": 150.0064697265625,
                "step": 1,
                "clamp_min": 0,
                "clamp_max": 150.0064697265625,
                "percent": 0
            },
            gustWaveData: {
                __Type: "GustWaveData",
                "dvAngleRad": {
                    "__Type": "RangeDataValue",
                    "ID": 0,
                    "icon": "",
                    "name": "TT:MENU.WEATHER_WIND_FROM",
                    "valueStr": "",
                    "value": 0,
                    "type": "",
                    "unit": "°",
                    "quality": 0,
                    "html": "",
                    "userTag": 0,
                    "min": 0,
                    "max": 6.2831854820251465,
                    "step": 0.01745329238474369,
                    "clamp_min": 0,
                    "clamp_max": 6.2831854820251465,
                    "percent": 0
                },
                "dvIntervalS": {
                    "__Type": "RangeDataValue",
                    "ID": 0,
                    "icon": "",
                    "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_GUST_PER_MINUTE",
                    "valueStr": "",
                    "value": 0,
                    "type": "",
                    "unit": "",
                    "quality": 0,
                    "html": "",
                    "userTag": 0,
                    "min": 1,
                    "max": 18,
                    "step": 1,
                    "clamp_min": 1,
                    "clamp_max": 18,
                    "percent": 0
                },
                "dvSpeedMultiplier": {
                    "__Type": "RangeDataValue",
                    "ID": 0,
                    "icon": "",
                    "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_SPEED",
                    "valueStr": "",
                    "value": 0,
                    "type": "",
                    "unit": "Kts",
                    "quality": 0,
                    "html": "",
                    "userTag": 0,
                    "min": 0,
                    "max": 2,
                    "step": 0.009999999776482582,
                    "clamp_min": 0,
                    "clamp_max": 2,
                    "percent": 0
                }
            }
        }
        currentWx.oSettings.dvMSLGLTemperature = {
            "__Type": "RangeDataValue",
            "ID": 0,
            "icon": "",
            "name": "Temperature MSL / ISA + 10",
            "valueStr": "",
            "value": vatsim.temperature.fahrenheit,
            "type": "",
            "unit": "°F",
            "quality": 0,
            "html": "",
            "userTag": 0,
            "min": -130,
            "max": 140,
            "step": 32.900001525878906,
            "clamp_min": -130,
            "clamp_max": 140,
            "percent": 0
        }
        currentWx.oSettings.dvMSLPressure = {
            "__Type": "RangeDataValue",
            "ID": 0,
            "icon": "",
            "name": "Pressure MSL",
            "valueStr": "",
            "value": vatsim.barometer.hg,
            "type": "",
            "unit": "inHg",
            "quality": 0,
            "html": "",
            "userTag": 0,
            "min": 27.994535446166992,
            "max": 32.01062774658203,
            "step": 0.007382525131106377,
            "clamp_min": 27.994535446166992,
            "clamp_max": 32.01062774658203,
            "percent": 0
        }

        if (meteo) {
            currentWx.tWindLayers = [currentWx.tWindLayers[0]];
            meteo.layers.forEach((layer) => {
                currentWx.tWindLayers.push({
                    "__Type": "WindLayerData",
                    "dvAltitude": {
                        "__Type": "RangeDataValue",
                        "ID": 0,
                        "icon": "",
                        "name": "ALTITUDE",
                        "valueStr": "",
                        "value": layer.altitude,
                        "type": "",
                        "unit": "Ft",
                        "quality": 0,
                        "html": "",
                        "userTag": 0,
                        "min": -1640,
                        "max": 60000,
                        "step": 10,
                        "clamp_min": -1640,
                        "clamp_max": 60000,
                        "percent": 0
                    },
                    "dvAngleRad": {
                        "__Type": "RangeDataValue",
                        "ID": 0,
                        "icon": "",
                        "name": "TT:MENU.WEATHER_WIND_FROM",
                        "valueStr": "",
                        "value": degToRad(layer.windDirection),
                        "type": "",
                        "unit": "°",
                        "quality": 0,
                        "html": "",
                        "userTag": 0,
                        "min": 0,
                        "max": 6.2831854820251465,
                        "step": 0.01745329238474369,
                        "clamp_min": 0,
                        "clamp_max": 6.2831854820251465,
                        "percent": 0
                    },
                    "dvSpeed": {
                        "__Type": "RangeDataValue",
                        "ID": 0,
                        "icon": "",
                        "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_SPEED",
                        "valueStr": "",
                        "value": layer.windSpeed * (parseInt(self2.store.scale as string) / 100),
                        "type": "",
                        "unit": "Kts",
                        "quality": 0,
                        "html": "",
                        "userTag": 0,
                        "min": 0,
                        "max": 150.0064697265625,
                        "step": 1,
                        "clamp_min": 0,
                        "clamp_max": 150.0064697265625,
                        "percent": 0
                    },
                    "gustWaveData": {
                        "__Type": "GustWaveData",
                        "dvAngleRad": {
                            "__Type": "RangeDataValue",
                            "ID": 0,
                            "icon": "",
                            "name": "TT:MENU.WEATHER_WIND_FROM",
                            "valueStr": "",
                            "value": 0,
                            "type": "",
                            "unit": "°",
                            "quality": 0,
                            "html": "",
                            "userTag": 0,
                            "min": 0,
                            "max": 6.2831854820251465,
                            "step": 0.01745329238474369,
                            "clamp_min": 0,
                            "clamp_max": 6.2831854820251465,
                            "percent": 0
                        },
                        "dvIntervalS": {
                            "__Type": "RangeDataValue",
                            "ID": 0,
                            "icon": "",
                            "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_GUST_PER_MINUTE",
                            "valueStr": "",
                            "value": 0,
                            "type": "",
                            "unit": "",
                            "quality": 0,
                            "html": "",
                            "userTag": 0,
                            "min": 1,
                            "max": 18,
                            "step": 1,
                            "clamp_min": 1,
                            "clamp_max": 18,
                            "percent": 0
                        },
                        "dvSpeedMultiplier": {
                            "__Type": "RangeDataValue",
                            "ID": 0,
                            "icon": "",
                            "name": "TT:MENU.WEATHER_TOOLBAR_PANEL_WIND_LAYER_SETTINGS_SPEED",
                            "valueStr": "",
                            "value": 0,
                            "type": "",
                            "unit": "Kts",
                            "quality": 0,
                            "html": "",
                            "userTag": 0,
                            "min": 0,
                            "max": 2,
                            "step": 0.009999999776482582,
                            "clamp_min": 0,
                            "clamp_max": 2,
                            "percent": 0
                        }
                    }
                });
            });
        }
    }

    this.$api.weather.set_weather(currentWx);
    console.log(`updated weather near ${vatsim?.icao}`);
};

const updateMeteo = async (lat: number, lon: number) => {
    if (self2.store.only_metar) {
        return undefined;
    }

    const d = new Date();
    const date = `${d.getUTCFullYear()}-${leftPad(d.getUTCMonth() + 1, 2)}-${leftPad(d.getUTCDate(), 2)}`;
    console.log("update meteo");
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=windspeed_950hPa,windspeed_925hPa,windspeed_900hPa,windspeed_850hPa,windspeed_800hPa,windspeed_700hPa,windspeed_600hPa,windspeed_500hPa,windspeed_400hPa,windspeed_300hPa,windspeed_250hPa,windspeed_200hPa,windspeed_150hPa,windspeed_100hPa,winddirection_950hPa,winddirection_925hPa,winddirection_900hPa,winddirection_850hPa,winddirection_800hPa,winddirection_700hPa,winddirection_600hPa,winddirection_500hPa,winddirection_400hPa,winddirection_300hPa,winddirection_250hPa,winddirection_200hPa,winddirection_150hPa,winddirection_100hPa,geopotential_height_950hPa,geopotential_height_925hPa,geopotential_height_900hPa,geopotential_height_850hPa,geopotential_height_800hPa,geopotential_height_700hPa,geopotential_height_600hPa,geopotential_height_500hPa,geopotential_height_400hPa,geopotential_height_300hPa,geopotential_height_250hPa,geopotential_height_200hPa,geopotential_height_150hPa,geopotential_height_100hPa&windspeed_unit=kn&&start_date=${date}&end_date=${date}`;

    return fetch(url)
        .then(res => res.json() as Promise<WindLayerReport>)
        .then(data => {
            const aloft = data.hourly.time.reduce((acc, dateTime, idx) => {
                const row: ParsedWindLayer = {
                    time: new Date(dateTime),
                    layers: []
                };

                row.layers = [
                    // "950hPa",
                    // "925hPa",
                    "900hPa",
                    "850hPa",
                    "800hPa",
                    "700hPa",
                    "600hPa",
                    "500hPa",
                    "400hPa",
                    "300hPa",
                    "250hPa",
                    "200hPa",
                    "150hPa",
                    "100hPa"
                ].map(pres => {
                    let altKey = `geopotential_height_${pres}`;
                    let dirKey = `winddirection_${pres}`;
                    let speedKey = `windspeed_${pres}`;
                    
                    return {
                        // @ts-ignore
                        altitude: metersToFeet(data.hourly[altKey][idx] as number),
                        // @ts-ignore
                        windDirection: data.hourly[dirKey][idx] as number,
                        // @ts-ignore
                        windSpeed: data.hourly[speedKey][idx] as number,
                    }
                });

                acc.push(row);

                return acc;
            }, [] as Array<ParsedWindLayer>);
            
            const nearestTime = aloft.reduce((acc, item) => {
                if (acc === null) {
                    return item;
                }

                if (Math.abs(+d - +item.time) < Math.abs(+d - +acc.time)) {
                    acc = item;
                }

                return acc;
            }, null as null|ParsedWindLayer);
            
            return nearestTime || undefined;
        });
}

const updateVatsim = async (lat: number, lon: number): Promise<WeatherReport|undefined> => {
    return new Promise((resolve, reject) => {

        self2.$api.airports.find_airports_by_coords(
            "ranbogmord-vatsim-winds",
            lon,
            lat,
            1000 * 1000 /* 100Km */,
            100,
            (airports) => {
                if (airports.length === 0) {
                    console.log("no aiports");
                    return resolve(undefined);
                }
    
                console.log("update vatsim");
                
                airports.sort((a, b) => {
                    return getDistance(lat, lon, a.lat, a.lon) < getDistance(lat, lon, b.lat, b.lon) ? -1 : 1;
                });
    
                const icaos = airports.map(airport => airport.icao).join(",");
                const url = `https://metar.ranbogmord.com/metar/${icaos}`;
    
                fetch(url, {
                    method: 'GET'
                })
                .then(async res => {
                    return await res.json();
                })
                .then(data => {
                    if (data.length === 0) {
                        console.log("no metars found");
                        return resolve(undefined);
                    }
    
                    resolve(data[0]);
                })
                .catch(err => {
                    reject(err);
                })
    
            },
            (airports) => {},
            (airports) => {},
            true
        );
    });
}

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const earthRadius = 6371; // Radius of the Earth in kilometers
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
  
    return distance;
}
  
function degToRad(degrees: number) {
    return degrees * (Math.PI / 180);
}

const leftPad = (val: number, length: number) => {
    return ("00000000" + `${val}`).slice(-length);
}

const metersToFeet = (meters: number): number => {
    const feetPerMeter = 3.28084;
    return meters * feetPerMeter;
};
