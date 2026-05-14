# iso3166

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A dataset and JavaScript library for ISO 3166-1 (JIS X 0304) country codes, providing data for 249 countries and regions.

## Data

The country data is available in the following formats:

- [iso3166-1.csv](https://code4fukui.github.io/iso3166/iso3166-1.csv)
- [iso3166-1.json](https://code4fukui.github.io/iso3166/iso3166-1.json)

## JavaScript Library

A simple ES module is provided for easy data access in Deno, browsers, and other modern JavaScript environments.

### Usage

```js
import { ISO3166 } from "https://code4fukui.github.io/iso3166/ISO3166.js";

// Get a country by its alpha-3, alpha-2, or numeric code
console.log(ISO3166.getCountryByCode("JPN"));
// {
//   alpha3: "JPN",
//   alpha2: "JP",
//   numeric: "392",
//   name: "Japan",
//   name_ja: "日本",
//   area: "東アジア"
// }

console.log(ISO3166.getCountryByCode("US"));
// {
//   alpha3: "USA",
//   alpha2: "US",
//   numeric: "840",
//   name: "United States of America",
//   name_ja: "アメリカ合衆国",
//   area: "北アメリカ"
// }

// Search for countries by name (English or Japanese)
console.log(ISO3166.searchCountriesByName("United"));
// [
//   { alpha3: "USA", ... },
//   { alpha3: "ARE", ... },
//   { alpha3: "GBR", ... },
//   { alpha3: "UMI", ... },
//   { alpha3: "TZA", ... }
// ]

// Get all countries in a specific geographic area
console.log(ISO3166.getCountriesByArea("東アジア").length);
// 8
```

### API

- **`ISO3166.getAllCountries()`**
  Returns an array of all 249 country/region objects.

- **`ISO3166.getCountryByCode(code)`**
  Finds a single country by its `alpha-2`, `alpha-3`, or `numeric` code. The search is case-insensitive. Returns `null` if not found.

- **`ISO3166.searchCountriesByName(name)`**
  Returns an array of countries that match the search string in their English (`name`) or Japanese (`name_ja`) names.

- **`ISO3166.getAllAreas()`**
  Returns an array of unique geographic area names.

- **`ISO3166.getCountriesByArea(area)`**
  Returns an array of all countries belonging to the specified geographic area.

### Data Schema

Each country/region object has the following structure:

- `alpha3`: (string) ISO 3166-1 alpha-3 code.
- `alpha2`: (string) ISO 3166-1 alpha-2 code.
- `numeric`: (string) ISO 3166-1 numeric code.
- `name`: (string) The official English name.
- `name_ja`: (string) The Japanese name.
- `area`: (string) The geographic region (in Japanese).

## License

MIT License — see [LICENSE](LICENSE).