import { CSV } from "https://js.sabae.cc/CSV.js";
import { assert } from "https://js.sabae.cc/assert.js";

const csv = await CSV.fetch("iso3166-1_temp.csv");
const csv2 = csv.filter(l => l[1].length);
console.log(csv2.length - 1);

const data = CSV.toJSON(csv2);
const notmatch = data.filter(d => !d["各行政区分"].endsWith(d["alpha-2"]))
console.log(notmatch);
assert(notmatch.length == 0);
data.forEach(d => d["各行政区分"]);
const data2 = data.map(d => ({ alpha3: d["alpha-3"], alpha2: d["alpha-2"], numeric: d.numeric, name: d["ISO 3166-1における英語名"], name_ja: d["国・地域名"], area: d["場所"] }));

const makeDataJS = (name, json) => `export const ${name} = ${json};\n`;

await Deno.writeTextFile("iso3166-1.csv", CSV.stringify(data2));
await Deno.writeTextFile("iso3166-1.json", JSON.stringify(data2));
await Deno.writeTextFile("iso3166_1.js", makeDataJS("iso3166_1", JSON.stringify(data2)));
