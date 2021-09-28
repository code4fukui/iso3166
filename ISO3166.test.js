import * as t from "https://deno.land/std/testing/asserts.ts";
import { ISO3166 } from "./ISO3166.js";

Deno.test("getAllCountries", () => {
  t.assertEquals(ISO3166.getAllCountries().length, 249);
});
Deno.test("getCountryByCode", () => {
  t.assertEquals(ISO3166.getCountryByCode("JPN").name, "Japan");
  t.assertEquals(ISO3166.getCountryByCode("jpn").name, "Japan");
  t.assertEquals(ISO3166.getCountryByCode("jpn"), {
    alpha3: "JPN",
    alpha2: "JP",
    numeric: "392",
    name: "Japan",
    name_ja: "日本",
    area: "東アジア"
  });
});
Deno.test("searchCountriesByName", () => {
  t.assertEquals(ISO3166.searchCountriesByName("日本")[0].name, "Japan");
  t.assertEquals(ISO3166.searchCountriesByName("Japan")[0].name, "Japan");
  t.assertEquals(ISO3166.searchCountriesByName("アメ").length, 3);
});
Deno.test("getAllAreas", () => {
  t.assertEquals(ISO3166.getAllAreas().length, 21);
});
Deno.test("getCountriesByArea", () => {
  t.assertEquals(ISO3166.getCountriesByArea("東アジア").length, 8);
  t.assertEquals(ISO3166.getCountriesByArea("東アジア").map(d => d.name_ja), [
    "大韓民国",
    "台湾（中華民国）",
    "中華人民共和国",
    "朝鮮民主主義人民共和国",
    "日本",
    "香港",
    "マカオ",
    "モンゴル",
  ]);
});
