import { CountryData } from "../models/Country";
import { Option } from "../models/Option";

export const formatPrice = (price?: number): string => {
  if (!price && price !== 0) return "";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export const formatCountriesOptions = (countries: CountryData[]): Option[] => {
  return countries.map((country) => ({
    label: country.name,
    value: country.code,
  }));
};

export const sortOptions = (options: Option[]): Option[] => {
  return options.sort((a, b) => a.label.localeCompare(b.label));
};
