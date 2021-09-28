import { iso3166_1 } from "./iso3166_1.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

class ISO3166 {
  static getAllCountries() {
    return iso3166_1;
  }
  static getCountryByCode(code) {
    if (parseInt(code) == code) {
      return iso3166_1.find(d => d.numeric == code);
    } else if (code.length == 2) {
      code = code.toUpperCase();
      return iso3166_1.find(d => d.alpha2 == code);
    } else if (code.length == 3) {
      code = code.toUpperCase();
      return iso3166_1.find(d => d.alpha3 == code);
    }
    return null;
  }
  static searchCountriesByName(name) {
    return iso3166_1.filter(d => d.name.indexOf(name) >= 0 || d.name_ja.indexOf(name) >= 0);
  }
  static getAllAreas() {
    return ArrayUtil.toUnique(iso3166_1.map(d => d.area));
  }
  static getCountriesByArea(area) {
    return iso3166_1.filter(d => d.area == area);
  }
}

export { ISO3166 };
