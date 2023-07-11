interface WeatherConditions {
  code: string;
}

interface CloudData {
  code: string;
  base_feet_agl: number;
  base_meters_agl: number;
}

interface WindData {
  degrees: number;
  speed_kts: number;
  speed_mps: number;
  gust_kts: number;
  gust_mps: number;
}

interface VisibilityData {
  miles: string;
  miles_float: number;
  meters: string;
  meters_float: number;
}

interface TemperatureData {
  celsius: number;
  fahrenheit: number;
}

interface DewpointData {
  celsius: number;
  fahrenheit: number;
}

interface BarometerData {
  hg: number;
  kpa: number;
  mb: number;
}

interface WeatherReport {
  raw_text: string;
  raw_parts: string[];
  icao: string;
  observed: string;
  wind: WindData;
  visibility: VisibilityData;
  conditions: WeatherConditions[];
  clouds?: CloudData[];
  temperature: TemperatureData;
  dewpoint: DewpointData;
  humidity_percent: number;
  barometer: BarometerData;
  flight_category: string;
}

interface WindLayerReport {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: number,
  hourly_units: {
      time: "iso8601",
      windspeed_950hPa: "kn",
      windspeed_925hPa: "kn",
      windspeed_900hPa: "kn",
      windspeed_850hPa: "kn",
      windspeed_800hPa: "kn",
      windspeed_700hPa: "kn",
      windspeed_600hPa: "kn",
      windspeed_500hPa: "kn",
      windspeed_400hPa: "kn",
      windspeed_300hPa: "kn",
      windspeed_250hPa: "kn",
      windspeed_200hPa: "kn",
      windspeed_150hPa: "kn",
      windspeed_100hPa: "kn",
      winddirection_950hPa: "°",
      winddirection_925hPa: "°",
      winddirection_900hPa: "°",
      winddirection_850hPa: "°",
      winddirection_800hPa: "°",
      winddirection_700hPa: "°",
      winddirection_600hPa: "°",
      winddirection_500hPa: "°",
      winddirection_400hPa: "°",
      winddirection_300hPa: "°",
      winddirection_250hPa: "°",
      winddirection_200hPa: "°",
      winddirection_150hPa: "°",
      winddirection_100hPa: "°",
      geopotential_height_950hPa: "m",
      geopotential_height_925hPa: "m",
      geopotential_height_900hPa: "m",
      geopotential_height_850hPa: "m",
      geopotential_height_800hPa: "m",
      geopotential_height_700hPa: "m",
      geopotential_height_600hPa: "m",
      geopotential_height_500hPa: "m",
      geopotential_height_400hPa: "m",
      geopotential_height_300hPa: "m",
      geopotential_height_250hPa: "m",
      geopotential_height_200hPa: "m",
      geopotential_height_150hPa: "m",
      geopotential_height_100hPa: "m"
  },
  hourly: {
      time: string[],
      windspeed_950hPa: number[],
      windspeed_925hPa: number[],
      windspeed_900hPa: number[],
      windspeed_850hPa: number[],
      windspeed_800hPa: number[],
      windspeed_700hPa: number[],
      windspeed_600hPa: number[],
      windspeed_500hPa: number[],
      windspeed_400hPa: number[],
      windspeed_300hPa: number[],
      windspeed_250hPa: number[],
      windspeed_200hPa: number[],
      windspeed_150hPa: number[],
      windspeed_100hPa: number[],
      winddirection_950hPa: number[],
      winddirection_925hPa: number[],
      winddirection_900hPa: number[],
      winddirection_850hPa: number[],
      winddirection_800hPa: number[],
      winddirection_700hPa: number[],
      winddirection_600hPa: number[],
      winddirection_500hPa: number[],
      winddirection_400hPa: number[],
      winddirection_300hPa: number[],
      winddirection_250hPa: number[],
      winddirection_200hPa: number[],
      winddirection_150hPa: number[],
      winddirection_100hPa: number[],
      geopotential_height_950hPa: number[],
      geopotential_height_925hPa: number[],
      geopotential_height_900hPa: number[],
      geopotential_height_850hPa: number[],
      geopotential_height_800hPa: number[],
      geopotential_height_700hPa: number[],
      geopotential_height_600hPa: number[],
      geopotential_height_500hPa: number[],
      geopotential_height_400hPa: number[],
      geopotential_height_300hPa: number[],
      geopotential_height_250hPa: number[],
      geopotential_height_200hPa: number[],
      geopotential_height_150hPa: number[],
      geopotential_height_100hPa: number[],
  }
}

interface ParsedWindLayer {
  time: Date
  layers: Array<{
      altitude: number
      windDirection: number
      windSpeed: number
  }>
}
