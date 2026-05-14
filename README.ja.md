# iso3166

ISO 3166-1 (JIS X 0304) 国コードのデータセットおよびJavaScriptライブラリです。249の国と地域のデータを提供します。

## データ

国データは以下の形式で利用可能です:

- [iso3166-1.csv](https://code4fukui.github.io/iso3166/iso3166-1.csv)
- [iso3166-1.json](https://code4fukui.github.io/iso3166/iso3166-1.json)

## JavaScriptライブラリ

Deno、ブラウザ、その他のモダンなJavaScript環境で簡単にデータへアクセスできる、シンプルなESモジュールを提供しています。

### 使い方

```js
import { ISO3166 } from "https://code4fukui.github.io/iso3166/ISO3166.js";

// alpha-3、alpha-2、または数値コードで国を取得
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

// 英語または日本語の名前で国を検索
console.log(ISO3166.searchCountriesByName("United"));
// [
//   { alpha3: "USA", ... },
//   { alpha3: "ARE", ... },
//   { alpha3: "GBR", ... },
//   { alpha3: "UMI", ... },
//   { alpha3: "TZA", ... }
// ]

// 特定の地理的地域に属するすべての国を取得
console.log(ISO3166.getCountriesByArea("東アジア").length);
// 8
```

### API

- **`ISO3166.getAllCountries()`**
  全249の国・地域オブジェクトの配列を返します。

- **`ISO3166.getCountryByCode(code)`**
  `alpha-2`、`alpha-3`、または `numeric` コードで単一の国を検索します。検索は大文字小文字を区別しません。見つからない場合は `null` を返します。

- **`ISO3166.searchCountriesByName(name)`**
  英語（`name`）または日本語（`name_ja`）の名前で検索文字列に一致する国の配列を返します。

- **`ISO3166.getAllAreas()`**
  重複のない地理的地域名の配列を返します。

- **`ISO3166.getCountriesByArea(area)`**
  指定された地理的地域に属するすべての国の配列を返します。

### データスキーマ

各国・地域オブジェクトは以下の構造を持ちます:

- `alpha3`: (string) ISO 3166-1 alpha-3コード。
- `alpha2`: (string) ISO 3166-1 alpha-2コード。
- `numeric`: (string) ISO 3166-1 数値コード。
- `name`: (string) 公式の英語名。
- `name_ja`: (string) 日本語名。
- `area`: (string) 地理的地域（日本語）。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
