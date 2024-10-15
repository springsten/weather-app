export interface IWeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
  };
  condition: {
    text: string;
    icon: string;
  };
}
