# 飛騨高山 4泊5日 共有サイト（2026.8.8〜8.12・愛犬2匹と）

> **重要:** `git init` するのは **`site/` の中だけ**。旅行計画の docx や private/ を含む親フォルダをリポジトリにしないこと（個人情報が公開されます）。

日帰りドライブ計画を同行者と共有するための1ページサイト。外部ビルド不要の **素のHTML/CSS/JS** ＋ **Firebase（リアルタイム同期）**。GitHub Pages に置けば公開できます。

> これは引き継ぎテンプレートの README です。新しい旅行では、タイトル・地名・`DATA`・`firebaseConfig` 等を差し替えてください（進め方は「はじめにお読みください.md」、詳細は「旅行サイト完全実装リファレンス.md」）。

## ファイル構成

```
.
site/                公開するのはこのフォルダだけ（個人情報を含む資料と分離する）
├─ index.html        メインページ（タブUI）＋ Firebase初期化
├─ style.css         デザイン（和風。:root の色で旅行ごとに変える）
├─ app.js            データ＆描画ロジック ← 情報の追加・変更は基本ここの DATA
├─ images/           各地点の写真（Place Photos で取得）＋ 意匠SVG
├─ secrets/          APIキー（.gitignore で除外。絶対にコミットしない）
└─ .gitignore

tools/               旅行先に依存しない再利用スクリプト（公開リポには入れなくてよい）
├─ places.py         座標・点数・営業情報・写真名を一括取得
├─ photos.py         Place Photo を各地点4枚DL＋クレジット生成
├─ test_site.js      チェックリストA〜Pを自動検証（56項目）
├─ test_cardtools.js 絞り込み・並び替えを自動検証（33項目。店名の期待値は要書き換え）
├─ test_info.js      注意タブの編集モード・XSSを自動検証（37項目）
├─ check_rules.py    FirebaseのDBルールを実測検証（7項目）
├─ credits.py        写真の投稿者クレジットをフッターへマージ（冪等）
└─ targets.json      places.py の入力（新しい旅行ではここを書き換える）
```

## サイトの機能

- **タブUI**: スケジュール / マップ / スポット / レストラン / カフェ / ルート / 持ち物 / 天気 / 注意
- **マップ**（Leaflet + OpenStreetMap）: 種別/状態（確定・未確定）でピンをフィルタ・ルート編集（ドラッグ&ドロップ、番号バッジ）。「**Googleマップでルートを開く**」ボタンでナビアプリ起動
- **スケジュール**: ドラッグ並び替え／開始・終了（任意）時刻／確定・未確定トグル。**並び順はマップのルートに自動連動**
- **確定/未確定の全タブ同期**: カード・スケジュール・マップで共有。どこで変えても全タブに反映
- **リアルタイム共有（Firebase）**: スケジュール・確定状態・ルートを**同行者と即共有**（保存・コミット不要）
- **カード**: メイン写真＋サムネ → ライトボックス拡大。飲食店は**食べログ＋Google点数**を併記（タップで出典へ）
- **レストラン／カフェの絞り込み・並び替え**: ジャンルで絞り、**合計点／食べログ点／Google点**で並べ替え。
  状態は共有せず端末ごと（同行者の画面は絞り込まれない）
- **天気**: Open-Meteo の7日予報を自動取得（当日は `DATA.weatherPoint.tripDate` から自動判定して強調）
- **持ち物チェック**: チェック状態は端末に保存

## 事前設定（新しい旅行で最初に行う）

このサイトは2つの外部サービスを使います。設定手順は「旅行サイト完全実装リファレンス.md」の**追補A / 追補C**に詳述。

**2回目以降の旅行は、どちらも設定済みなので新規作成は不要**（リファレンス追補G）。

1. **Google Places API (New)**（点数・写真の取得用）
   - 汎用GCPプロジェクト `travel-itinerary-sites` で有効化済み。**前の旅行のキーをコピーして使う**
   - **キーはコードに入れず `site/secrets/gmaps_key.local` に置く**（`.gitignore` で除外済み）
2. **Firebase**（リアルタイム同期用）— 同じ `travel-itinerary-sites`
   - Realtime Database・匿名認証・承認済みドメイン（`<ユーザー名>.github.io`）は設定済み
   - `firebaseConfig` は `index.html` に**同梱済み。差し替え不要**
   - **旅行ごとに行うのは次の2つだけ**：
     1. `app.js` のDBパスを変える（`trip`=大阪 / `nara-trip`=奈良 / **`takayama-trip`=飛騨高山（この旅行）**）
     2. **DBルールにそのパスのブロックを1つ追加**（allow列挙式。リファレンス追補G-1）
        ```json
        { "rules": { "kyoto-trip": { ".read": "auth != null", ".write": "auth != null" } } }
        ```
   - 旅行が終わったらそのブロックを**削除**する（データは消えず Console に残る）

## 情報の編集方法

すべてのデータは [`app.js`](app.js) 冒頭の `DATA` オブジェクトに集約しています。
場所を足す・直すときは、該当の配列（`spots` / `restaurants` / `cafes`）にカードを追加するだけ。

```js
{
  name: "店名／スポット名",
  area: "エリア表記",
  coords: [34.50, 136.79],        // [緯度, 経度]。places.py の location をそのまま使う
  gmapsPlaceId: "ChIJ...",         // places.py の places.id（マップリンクが地点そのものを開く）
  category: "confirmed",           // confirmed=確定 / backup=予備 / warning=要確認
  genre: "🍜 三輪そうめん",         // 飲食店のみ・表示用
  genreKey: "noodle",              // 飲食店のみ・絞り込み用（付け忘れると絞り込みから消える）
  images: ["images/x.jpg"],        // images/ に置いた写真（目標4枚）
  links: [{ label: "公式サイト", url: "https://..." }],
  badges: [{ text: "確定", cls: "priority-top" }],
  desc: "30〜80字の短い説明",
  meta: [["営業時間", "..."]],     // 強調は **囲む**（HTMLは書けない）
  notes: "<strong>注意:</strong> ...",  // ★HTMLを書けるのはここだけ
  maps: "Googleマップ検索クエリ"
}
```

座標・点数の取り方:
- **`python3 tools/places.py site tools/targets.json` が最も正確**（返ってきた `location` をそのまま使う）。
  `formattedAddress` で誤マッチを目視確認する
- Googleマップの共有リンク（`maps.app.goo.gl/...`）を渡されたときは、展開すれば店名と座標が読める:
  ```bash
  curl -sIL "https://maps.app.goo.gl/xxxx" -o /dev/null -w "%{url_effective}\n"
  ```
- あとから1件だけ足す手順は リファレンス **追補I**

---

# GitHub Pages 公開手順（はじめての方向け）

> **GitHub Pages とは?** GitHub のリポジトリに置いた HTML/CSS/JS を、そのまま Web サイトとして無料公開してくれる仕組みです。サーバー契約不要。`https://ユーザー名.github.io/リポジトリ名/` というURLで見られるようになります。

## 公開方針: URL推測困難方式

今回は「検索には出したくないが、URLを知っている二人だけが見られればよい」という方針です。

- **Public リポジトリ**（GitHub Pages を無料で使うため）
- **推測されにくいリポジトリ名**（例: `trip-takayama-7yq3k8`）
- **`noindex` メタタグ**（`index.html` に設定済み → 検索エンジンに載りにくい）

> ⚠️ これは「鍵付き」ではなく「見つかりにくくする」方式です。URLを知っていれば誰でも見られます。完全に非公開にしたい場合は、リポジトリを Private にして GitHub Pages を使わず、ローカルやパスワード付きホスティングで共有してください（個人名等を入れていないのはこのためです）。

## 手順 ①: GitHub で空のリポジトリを作る

1. GitHub にログイン →右上「＋」→ **New repository**
2. **Repository name**: 推測されにくい名前（例 `trip-takayama-7yq3k8`）。下のコマンドで乱数案を作れます:
   ```bash
   echo "trip-takayama-$(openssl rand -hex 3)"
   ```
3. **Public** を選択
4. README/.gitignore/license は **追加しない**（このフォルダに既にあるため）
5. **Create repository**

## 手順 ②: ローカルを Git 化して push

> ⚠️ **iCloud Drive 配下の注意**: このフォルダは iCloud Drive 内にあります。iCloud の同期と `.git` フォルダが競合してまれに不具合が出ることがあります。安全策として、**作業用にローカル（例 `~/Projects/`）へコピーしてから git 操作する**のがおすすめです。
> ```bash
> cp -R site ~/Projects/trip-takayama && cd ~/Projects/trip-takayama
> ```
> そのまま iCloud 配下で作業する場合は、push 中に他端末で同フォルダを編集しないよう注意してください。

ターミナルでこのフォルダに移動してから:

```bash
git init
git add .
git commit -m "飛騨高山 4泊5日 共有サイト 初版"
git branch -M main
# ↓ URL は手順①で作ったものに置き換え（HTTPS の例）
git remote add origin https://github.com/ユーザー名/trip-takayama-7yq3k8.git
git push -u origin main
```

> 初回 push 時に認証を求められます。HTTPS なら **Personal Access Token**（GitHub → Settings → Developer settings → Tokens）をパスワード代わりに入力します。SSH 鍵を設定済みなら `git@github.com:ユーザー名/リポジトリ名.git` 形式でもOK。

## 手順 ③: GitHub Pages を有効化

1. リポジトリの **Settings** → 左メニュー **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / フォルダ `/ (root)` → **Save**
4. 1〜2分待つと、上部に公開URLが表示されます:

```
https://ユーザー名.github.io/trip-takayama-7yq3k8/
```

このURLを同行者に共有すれば完成です（スマホでそのまま開けます）。

## 手順 ④: 内容を更新したいとき

`app.js` などを編集したら、同じフォルダで:

```bash
git add .
git commit -m "スポットを追加"
git push
```

push から数十秒〜数分で公開サイトに反映されます。

---

# 二端末運用ルール（Mac ⇄ iPhone）

このフォルダは **iCloud Drive 上に置いたまま、Mac 側の作業コピー**として使います。
**正本（バックアップ・公開・AI修正の基準）は GitHub** です。iPhone では **Working Copy** アプリで
GitHub から pull し、同じ iCloud Drive のフォルダへ反映する運用を想定しています。

> ⚠️ iCloud 同期と Git は別の仕組みです。**二重同期による競合**を避けるため、
> 「どの端末が最新を持っているか」を常に Git（commit/push/pull）で一本化します。
> iCloud の自動同期に頼らず、端末切替の前後で必ず Git 操作を挟むのがコツです。

## 黄金ルール

1. **端末を切り替える前に、必ず `git status` を確認する**（未コミットの変更がないか）。
2. **Mac で作業したら → `commit` して `push` してから** iPhone 作業に移る。
3. **iPhone で AI 修正や PR merge をしたら → Working Copy で `pull`** し、iCloud Drive のフォルダへ反映する。
4. **Mac に戻ったら → まず `git status`、必要に応じて `git pull`** してから作業を始める。
5. **未コミットの変更がある状態で、別端末から上書きしない**（競合・消失の元）。
6. **公開してはいけない情報（予約番号・個人情報・詳細住所・私的メモ）は repo に入れない**。
   → `private/` フォルダや `*.local.md` に置けば `.gitignore` で除外されます。

## Mac での1サイクル（例）

```bash
git status            # ① まず状態確認
git pull              # ② リモートが進んでいれば取り込む
# … 編集 …
git add .
git commit -m "内容を更新"
git push              # ③ iPhoneに移る前に必ず push
```

## iPhone（Working Copy）での1サイクル（例）

1. Working Copy でリポジトリを開き **Pull**（最新を取得）
2. 編集 / AI修正 / PR merge
3. **Commit → Push**
4. 必要なら Working Copy の同期先（iCloud Drive の本フォルダ）へ反映

> 競合が出たら、慌てて上書きせず `git status` / `git stash` で退避してから `git pull` し、
> 差分を確認してマージしてください。

---

## よくあるつまずき

| 症状 | 対処 |
|---|---|
| ページが 404 | Pages の Branch が `main` / `(root)` か確認。反映に数分かかることも |
| 画像が出ない | `images/` をコミットし忘れ。`git status` で確認して `git add images` |
| 地図が出ない | ネット接続を確認（Leaflet/タイルはCDN・オンライン必須） |
| 天気が出ない | Open-Meteo にオンライン接続が必要。圏外では表示されません |
| 検索に出てしまう | `noindex` 済みだが完全防止は不可。URL自体を限られた相手にだけ共有 |

## クレジット

- 地図: © OpenStreetMap contributors（タイル: openstreetmap.org）
- 写真: Wikimedia Commons／食べログ／Googleマップ投稿者 等（各出典ライセンス・投稿者に従う。私的共有の範囲で参照用）
- ライブラリ/サービス: Leaflet 1.9.4 / SortableJS 1.15.2 / Open-Meteo / Google Fonts / **Firebase (Realtime Database) SDK v10** / **Google Places API (New)**（CDN・各サービス規約に従う）

---

# この旅行だけの追加機能（4泊5日対応）

日帰り旅行用のテンプレートを4泊5日に広げるため、次の3つを足してあります。
**次の旅行がまた日帰りなら、この節の変更は取り込まなくて構いません。**

## 1. スケジュールの「日」

`app.js` の `TRIP_DAYS` が旅行日の一覧です。**日付を変えるときはここだけ**を書き換えます。

```js
const TRIP_DAYS = [
  { key: "2026-08-08", label: "8/8（土）", sub: "八尾 → 高山・移動日" },
  ...
];
```

`SCHED_DEFAULT` の各行は `day: "2026-08-08"` を持ちます。`schedule` は
**全日ぶんを1本の配列**で保持し、

- **「全体」サブタブ** … 日付見出し行（`.sched-day-head`）を挟んで全件を表示
- **日別サブタブ** … その日の行だけを表示

と描き分けます。データが1本なので、どちらで編集しても即座にもう一方へ反映されます。
`schedDayView`（表示中のサブタブ）は **localStorage にも Firebase にも保存しません**。
同行者の画面まで勝手に切り替わると事故になるためで、カードの絞り込みと同じ方針です（リファレンス追補H-9）。

全体タブで行を**別の日の見出しの下へドラッグすると、その行の `day` が入れ替わります**
（`rebuildScheduleFromDom()` が見出しを境に day を振り直しています）。

## 2. マップの「日」フィルタ

`index.html` の `#map-filters` に `data-group="day"` を追加してあります。
**Googleマップの経由地付きURLは経由地9件が上限**で、5日ぶん（約17地点）を1本にすると
「Googleマップでルートを開く」が壊れます。そのため:

- `visibleRouteIds()` が、選んだ日の地点を**その日のスケジュール順**に並べて返す
- 地図の点線・ピン・ナビURLはこれを使う
- ルート本体（Firebase共有）は全日程の並び順を保持する

八尾のように往路と復路の両方に出てくる地点があるため、`routeIds` の順ではなく
**スケジュール順に組み直している**点が要です（そうしないと8/12のナビが逆向きになります）。

## 3. 天気タブ

`loadWeather()` は `DAY_KEYS`（＝`TRIP_DAYS` の日付）すべてを★強調し、
**日ごとに違う分岐アドバイス**を出します。文言は `loadWeather()` 内の `adviceFor()` にあり、
**`DATA` の外なので旅行を変えるときは必ず grep してください**（リファレンス追補F-2）。

## 検証

```bash
node --check site/app.js
node tools/test_site.js site        # 56項目（A〜Q の配線）
node tools/test_cardtools.js site   # 34項目（絞り込み・並び替え。店名は直書き）
node tools/test_info.js site        # 37項目（注意タブの編集・XSS）
node tools/test_days.js site        # 44項目（★この旅行で追加。日別タブ・日フィルタ）
```

`tools/test_days.js` の期待値は `TRIP_DAYS` / `SCHED_DEFAULT` から導出するので、
**日付や行数を変えても書き換え不要**です。
