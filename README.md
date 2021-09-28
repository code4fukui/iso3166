# iso3166

- ISO3166 (JIS X 0304)
- 249 countries

## data

- [iso3166-1.csv](iso3166-1.csv)
- [iso3166-1.json](iso3166-1.json)

## library for JavaScript

```js
import { ISO3166 } from "https://code4fukui.github.io/iso3166/ISO3166.js";

console.log(ISO3166.getCountryByCode("JPN"));
/*
{
  alpha3: "JPN",
  alpha2: "JP",
  numeric: "392",
  name: "Japan",
  name_ja: "日本",
  area: "東アジア"
}
*/
```

## how to make

1. copy a table in Wikipedia ISO 3166-1 to the spread sheet
2. save as CSV "iso3166-1_temp.csv"
3. deno run -A make.js


## reference

- https://www.iso.org/iso-3166-country-codes.html
- https://ja.wikipedia.org/wiki/ISO_3166-1
- https://en.wikipedia.org/wiki/ISO_3166-1
- https://fukuno.jig.jp/3352
