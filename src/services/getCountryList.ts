import { CountryApiData, CountryData } from "../models/Country";

const COUNTRY_API = "https://restcountries.com/v3.1/all";

const getCountryList = (): Promise<CountryData[]> => {
  return fetch(COUNTRY_API)
    .then((res) => res.json())
    .then((data: CountryApiData[]) =>
      data.map((country) => ({
        name: country.name.common,
        code: country.cca3,
      }))
    );
};

export default getCountryList;
