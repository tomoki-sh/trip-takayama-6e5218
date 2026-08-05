/* =========================================================================
   飛騨高山 2026.8.8〜8.12（4泊5日・家族3名＋愛犬2匹・サンクチュアリコート高山）  ―  データ & レンダリング
   情報の追加・変更は基本このファイルの DATA を編集すればOK。
   ========================================================================= */

/* ---------- 定数 ---------- */
const TYPE_LABELS = { spot: "スポット", restaurant: "レストラン", cafe: "カフェ" };
const TYPE_ICONS  = { spot: "🌿", restaurant: "🍽", cafe: "☕" };
const CAT_LABELS  = { confirmed: "確定", backup: "予備", warning: "要確認" };

/* ---------- データ ---------- */
const DATA = {
  /* === スポット === */
  spots: [
    {
      name: "サンクチュアリコート高山（拠点）",
      area: "高山市上岡本町1丁目124-1",
      coords: [36.1366279, 137.2409008],
      category: "confirmed",
      spotKey: "landmark",
      dogKey: "indoor",
      images: ["images/sanctuary.jpg", "images/sanctuary_2.jpg", "images/sanctuary_3.jpg", "images/sanctuary_4.jpg"],
      gmapsPlaceId: "ChIJ_wXHNt-7AmARcVeux1RaQso",
      links: [
        { label: "公式サイト", url: "https://www.rtg.jp/hotels/sac/takayama/" },
        { label: "愛犬同伴利用規程", url: "https://www.rtg.jp/hotels/sac/takayama/kitei/" }
      ],
      badges: [
        { text: "4泊すべての拠点", cls: "priority-top" },
        { text: "犬2匹・各10kg未満", cls: "priority-warn" }
      ],
      ratings: { google: "4.7", googleReviews: "374" },
      desc: "この旅行の主役。観光を詰め込まず、午後はここで休むのが基本方針。ドッグランあり。",
      meta: [
        ["電話", "0577-40-1000"],
        ["犬", "小型室内犬 **1室2頭まで・各10kg未満**。犬種ではなく **実測体重** が条件"],
        ["館内", "指定エリアのみ。**原則キャリー**使用の区分あり。伸縮式・ロングリード不可"],
        ["ケージ", "**貸出なし**。客室備品の台数・サイズ・2匹同居可否を要確認。必要なら持参"],
        ["夕食", "8/8イタリアン・8/9日本料理・8/10イタリアン・8/11鉄板焼き（すべて固定）"],
        ["書類", "狂犬病予防接種証明・鑑札またはマイクロチップ登録情報を持参"],
        ["料金", "犬1頭あたり2,200円または5,500円（会員区分による。予約明細で確定）"]
      ],
      notes: "<strong>出発前の最優先確認:</strong> ホテル規程は「客室に残す場合はケージ内」としつつ「犬を部屋に残しての外出は控える」とも記載しています。<strong>毎晩ホテルレストランを2〜3時間利用する間、犬2匹を客室ケージ内に残してよいか</strong>を電話で明確にしてください。禁止・非推奨ならホテルが指定する代替方法を必ず聞くこと。あわせて客室ケージの台数・サイズ、館内のキャリー必須区間、ドッグランの利用時間・雨天可否も確認します。",
      maps: "サンクチュアリコート高山"
    },
    {
      name: "飛騨の里",
      area: "高山市上岡本町1丁目590",
      coords: [36.1324902, 137.2350898],
      category: "confirmed",
      spotKey: "nature",
      dogKey: "outdoor",
      images: ["images/hidanosato.jpg", "images/hidanosato_2.jpg", "images/hidanosato_3.jpg", "images/hidanosato_4.jpg"],
      gmapsPlaceId: "ChIJmWTYrzm7AmARRPwmwmCypNY",
      links: [
        { label: "公式サイト", url: "https://hidanosato.com/" },
        { label: "犬同伴スポット一覧", url: "https://www.hidatakayama.or.jp/special/petinfo/" }
      ],
      badges: [
        { text: "8/9の主目的", cls: "priority-top" },
        { text: "犬OK・屋外リード", cls: "priority-alt" }
      ],
      ratings: { google: "4.5", googleReviews: "6783" },
      desc: "合掌造りなど飛騨の古民家を移築した野外集落博物館。ホテルから車で約5分と近く、開園直後が最も涼しい。",
      meta: [
        ["営業", "8:30〜17:00・**無休**（8/9は日曜で営業）"],
        ["料金", "大人700円・**犬は無料**"],
        ["電話", "0577-34-4711"],
        ["犬", "**屋外はリードでOK・犬の入場無料**。建物内は抱っこ等の条件あり"],
        ["滞在", "1.5〜2時間（全域を回り切らない前提）"],
        ["ホテルから", "車で約5分"],
        ["注意", "屋外中心。**11時以降は暑さが厳しい**ので開園直後に入る"]
      ],
      maps: "飛騨の里"
    },
    {
      name: "飛騨大鍾乳洞",
      area: "高山市丹生川町日面1147",
      coords: [36.1838158, 137.4248082],
      category: "confirmed",
      spotKey: "museum",
      dogKey: "indoor",
      images: ["images/shonyudo.jpg", "images/shonyudo_2.jpg", "images/shonyudo_3.jpg", "images/shonyudo_4.jpg"],
      gmapsPlaceId: "ChIJb0MG_huzAmARweZPSTFdwU0",
      links: [
        { label: "公式サイト", url: "https://www.syonyudo.com/" },
        { label: "犬同伴スポット一覧", url: "https://www.hidatakayama.or.jp/special/petinfo/" }
      ],
      badges: [
        { text: "8/11の主目的", cls: "priority-top" },
        { text: "犬OK・カート不可", cls: "priority-alt" },
        { text: "雨・猛暑に強い", cls: "priority-alt" }
      ],
      ratings: { google: "4.1", googleReviews: "4274" },
      desc: "洞内は年間を通じて約12℃。真夏と雨に最も強い候補で、8/11の市街地イベント混雑も避けられる。",
      meta: [
        ["営業", "4〜10月 **8:00〜17:30**（飛騨高山旅ガイド）／Googleは8:00〜17:00。**直前に確認**"],
        ["料金", "大人1,100円・**犬は無料**"],
        ["電話", "0577-79-2211"],
        ["犬", "**洞内はリードまたは抱っこ可。カートは不可**"],
        ["洞内", "**約12℃**。薄手の上着必須。階段・濡れた床で滑りやすい"],
        ["注意", "**大橋コレクション館は犬不可**。犬が震える・歩きにくい様子なら早期退出"],
        ["ホテルから", "車で約30分"]
      ],
      maps: "飛騨大鍾乳洞"
    },
    {
      name: "宮川朝市",
      area: "高山市下三之町",
      coords: [36.144704, 137.2579466],
      category: "confirmed",
      spotKey: "nature",
      dogKey: "outdoor",
      images: ["images/asaichi.jpg", "images/asaichi_2.jpg", "images/asaichi_3.jpg", "images/asaichi_4.jpg"],
      gmapsPlaceId: "ChIJE-ywz9a6AmAR1uD5rAwvJkw",
      links: [
        { label: "公式サイト", url: "http://www.asaichi.net/" }
      ],
      badges: [
        { text: "8/10の朝いちばん", cls: "priority-top" },
        { text: "犬はリード短め", cls: "priority-alt" }
      ],
      ratings: { google: "4.1", googleReviews: "10445" },
      desc: "宮川沿いに並ぶ朝市。7時台なら人も気温も落ち着いていて、犬連れでも歩きやすい。",
      meta: [
        ["営業", "毎朝7:00〜12:00"],
        ["犬", "リードは**短く持つ**。混雑してきたら抱っこ・カートに切り替える"],
        ["滞在", "1時間前後（古い町並と合わせて）"],
        ["注意", "**8:45を過ぎると混み始める**。7:30到着が目標"],
        ["ホテルから", "車で約10分"]
      ],
      maps: "宮川朝市"
    },
    {
      name: "古い町並（さんまち通り）",
      area: "高山市上三之町",
      coords: [36.1415725, 137.2595503],
      category: "confirmed",
      spotKey: "nature",
      dogKey: "outdoor",
      images: ["images/furuimachi.jpg", "images/furuimachi_2.jpg", "images/furuimachi_3.jpg", "images/furuimachi_4.jpg"],
      gmapsPlaceId: "ChIJwRFeL6y7AmARVwh7E5OUZjU",
      badges: [
        { text: "朝市とセット", cls: "priority-alt" }
      ],
      ratings: { google: "4.5", googleReviews: "115" },
      desc: "出格子の町家が続く高山らしい通り。朝市から歩いてすぐで、三葉・かつて・CENTER4もこの一帯。",
      meta: [
        ["歩行", "平坦。**散策は1時間前後に限定**する"],
        ["犬", "屋外はリード可。店内条件は店ごとに異なる"],
        ["注意", "石畳と車道が近い。**夏の路面温度**を手の甲で確認してから歩かせる"],
        ["駐車", "周辺の市営駐車場を利用（朝市と共通）"]
      ],
      maps: "さんまち通り 高山"
    },
    {
      name: "JA産直市場 アグリ高山",
      area: "高山市上切町311",
      coords: [36.1658853, 137.2353938],
      category: "confirmed",
      spotKey: "shop",
      dogKey: "ng",
      images: ["images/ja_agri.jpg", "images/ja_agri_2.jpg", "images/ja_agri_3.jpg", "images/ja_agri_4.jpg"],
      gmapsPlaceId: "ChIJl-mE-uykAmARlK_sknlXmYY",
      links: [
        { label: "JAひだ 店舗案内", url: "https://www.ja-hida.or.jp/store/detail/einou_takayama" }
      ],
      badges: [
        { text: "同行者の希望", cls: "priority-top" },
        { text: "犬条件は未確認", cls: "priority-warn" }
      ],
      ratings: { google: "3.7", googleReviews: "97" },
      desc: "飛騨の野菜・果物・花が並ぶJAの産直市場。短時間で寄れるので午前の予定に組み込みやすい。",
      meta: [
        ["営業", "平日8:00〜17:30／土日8:00〜17:00（3〜12月）"],
        ["電話", "0577-34-0352"],
        ["犬", "**同伴可の公式情報なし**。大人が交代で入店する前提"],
        ["注意", "**犬を車内に残さない**。真夏は短時間でも不可。必ず交代で買い物する"],
        ["滞在", "20〜30分"],
        ["ホテルから", "車で約15分"]
      ],
      maps: "JA産直市場アグリ高山"
    },
    {
      name: "山田春慶店",
      area: "高山市大新町1丁目111",
      coords: [36.1478226, 137.2590789],
      category: "warning",
      spotKey: "shop",
      dogKey: "ng",
      images: ["images/shunkei.jpg", "images/shunkei_2.jpg", "images/shunkei_3.jpg", "images/shunkei_4.jpg"],
      gmapsPlaceId: "ChIJc_n34dO6AmARKz-dKlSg_QA",
      links: [
        { label: "公式サイト", url: "https://www.yamada-shunkei.com/" }
      ],
      badges: [
        { text: "同行者の希望", cls: "priority-top" },
        { text: "8/11まで臨時休業", cls: "priority-warn" },
        { text: "前日に電話確認", cls: "priority-warn" }
      ],
      ratings: { google: "4.7", googleReviews: "43" },
      desc: "飛騨春慶塗の老舗。同行者の希望だが臨時休業と重なり、行けるのは8/12午前の一度だけ。",
      meta: [
        ["営業", "10:00〜17:00・日曜定休・不定休あり"],
        ["電話", "0577-32-0396"],
        ["臨時休業", "**2026年7月31日〜8月11日**。8/10案から8/12へ移動済み"],
        ["犬", "**同伴可の公式情報なし**。大人が交代で入店する前提"],
        ["駐車", "**専用駐車場なし**。近隣のコインパーキングを事前に決めておく"],
        ["滞在", "30〜40分"]
      ],
      notes: "<strong>この旅程で行けるのは 8/12（水）午前だけです。</strong>8/13は旅程に含まれないため予備日がありません。<strong>8/11の夕方までに必ず電話で営業再開を確認</strong>し、休業が続く場合はこの日の予定から外して出発を早める判断をしてください。専用駐車場がないため、駐車場所も同時に確認しておくと当日迷いません。",
      maps: "山田春慶店 高山"
    },
    {
      name: "匠館",
      area: "高山市下三之町1-22",
      coords: [36.143711, 137.258495],
      category: "confirmed",
      spotKey: "shop",
      dogKey: "indoor",
      images: ["images/takumikan.jpg", "images/takumikan_2.jpg", "images/takumikan_3.jpg", "images/takumikan_4.jpg"],
      gmapsPlaceId: "ChIJZ7QNs9C6AmARb6XBSJZtXbU",
      links: [
        { label: "公式サイト", url: "http://www.takumikan.com/" }
      ],
      badges: [
        { text: "全フロア犬同伴可", cls: "priority-top" },
        { text: "雨天向き", cls: "priority-alt" }
      ],
      ratings: { google: "4.1", googleReviews: "303" },
      desc: "飛騨の家具・工芸を集めた館。1〜3階すべて犬と一緒に回れて、宮川朝市のすぐ隣。雨の日の逃げ場になる。",
      meta: [
        ["営業", "9:00〜17:00・**火曜定休**"],
        ["電話", "0577-36-2511"],
        ["犬", "**1〜3階すべて同伴可**。館内カフェはテラスのみ"],
        ["8/11", "**通常は火曜定休だが特別営業の予定**（代休8/19）。当日朝に要確認"],
        ["滞在", "40〜60分"],
        ["相性", "朝市から徒歩すぐ。工芸を見たいという希望とも合う"]
      ],
      notes: "<strong>8/11（火・祝）の特別営業は公式の臨時情報が根拠です。</strong>雨天時の予備として当てにする場合は、前日または当日朝に電話で確認してください。なお8/10（月）は通常営業なので、そちらで組んであります。",
      maps: "匠館 高山"
    },
    {
      name: "飛騨高山まちの体験交流館",
      area: "高山市上一之町35-1",
      coords: [36.1421962, 137.2609019],
      category: "backup",
      spotKey: "museum",
      dogKey: "outdoor",
      images: ["images/taiken.jpg", "images/taiken_2.jpg", "images/taiken_3.jpg", "images/taiken_4.jpg"],
      gmapsPlaceId: "ChIJO7GE7bG7AmAR2nJjojewShg",
      links: [
        { label: "高山市の施設案内", url: "http://www.city.takayama.lg.jp/kurashi/1000021/1000119/1010000.html" }
      ],
      badges: [
        { text: "古い町並の休憩に", cls: "priority-alt" }
      ],
      ratings: { google: "4.5", googleReviews: "113" },
      desc: "古い町並のなかにある無料の休憩・体験施設。広場で一息つける。併設のCafe takayama terraceはテラス席が犬可。",
      meta: [
        ["営業", "9:00〜19:00・**無休**"],
        ["電話", "0577-70-8290"],
        ["犬", "広場・館内の**一部エリアのみ可**。工芸体験は犬不可"],
        ["滞在", "20〜40分"],
        ["使い方", "三葉が満席のときの代替。**Cafe takayama terraceは火曜定休**"]
      ],
      maps: "飛騨高山まちの体験交流館"
    },
    {
      name: "アルプス展望公園 スカイパーク",
      area: "高山市上岡本町7丁目417-1",
      coords: [36.1462397, 137.2396645],
      category: "backup",
      spotKey: "nature",
      dogKey: "outdoor",
      images: ["images/skypark.jpg", "images/skypark_2.jpg", "images/skypark_3.jpg", "images/skypark_4.jpg"],
      gmapsPlaceId: "ChIJoRs_ZsykAmARhmGytR1a6QI",
      links: [
        { label: "高山市の施設案内", url: "http://www.city.takayama.lg.jp/shisetsu/1004139/1000036/1001567.html" },
        { label: "飛騨高山旅ガイド", url: "https://www.hidatakayama.or.jp/spot/detail_1185.html" }
      ],
      badges: [
        { text: "夕方の短い散歩", cls: "priority-alt" }
      ],
      ratings: { google: "4.4", googleReviews: "616" },
      desc: "北アルプスを見渡す無料の展望公園。舗装が整っていて歩きやすく、夕方の短い散歩に向く。",
      meta: [
        ["営業", "**24時間・無料**"],
        ["犬", "散歩利用あり。**現地の表示に従う**"],
        ["時間帯", "**夕方17時以降か早朝のみ**。夏の日中は路面が熱く不可"],
        ["滞在", "30〜40分"],
        ["ホテルから", "車で約10分"]
      ],
      maps: "アルプス展望公園スカイパーク"
    },
    {
      name: "飛騨高山 テディベア エコビレッジ",
      area: "高山市西之一色町3丁目829-4",
      coords: [36.1347761, 137.2387813],
      category: "backup",
      spotKey: "museum",
      dogKey: "carry",
      images: ["images/teddy.jpg", "images/teddy_2.jpg", "images/teddy_3.jpg", "images/teddy_4.jpg"],
      gmapsPlaceId: "ChIJd0L6rDC7AmARRrmDkRoO_jg",
      links: [
        { label: "公式サイト", url: "http://www.teddyeco.jp/" }
      ],
      badges: [
        { text: "抱っこ・カート必須", cls: "priority-warn" }
      ],
      ratings: { google: "4.1", googleReviews: "409" },
      desc: "飛騨の里のすぐ隣にある合掌造りのテディベア館。犬は入場無料だが、館内はずっと抱っこかカート。",
      meta: [
        ["営業", "10:00〜17:00（最終16:00）・**水曜定休**（8/12は休み）"],
        ["料金", "大人1,000円・**犬の入場は無料**。併設カフェはテラス席が犬可"],
        ["電話", "0577-37-2525"],
        ["犬", "**館内は抱っこまたはカート**。犬の入場料は無料"],
        ["負担", "**2匹を抱え続けるのは負担が大きい**。カートを持参できるときだけ"],
        ["相性", "飛騨の里の隣なので8/9に足せるが、詰め込みすぎない"]
      ],
      maps: "飛騨高山テディベアエコビレッジ"
    },
    {
      name: "高山昭和館",
      area: "高山市下一之町6",
      coords: [36.1439748, 137.2599215],
      category: "warning",
      spotKey: "museum",
      dogKey: "carry",
      images: ["images/showakan.jpg", "images/showakan_2.jpg", "images/showakan_3.jpg", "images/showakan_4.jpg"],
      gmapsPlaceId: "ChIJAQCsnNC6AmARQM58I5hTRj4",
      links: [
        { label: "公式サイト", url: "https://showakan.jp/takayama/" }
      ],
      badges: [
        { text: "犬の条件を電話確認", cls: "priority-warn" }
      ],
      ratings: { google: "4.4", googleReviews: "2163" },
      desc: "昭和30年代の町を再現した屋内展示。犬歓迎の発信があるが、抱っこ・カート・サイズの条件は要電話。",
      meta: [
        ["営業", "9:00〜17:00・**年中無休**"],
        ["電話", "0577-33-7836"],
        ["犬", "犬歓迎の発信あり。**抱っこ／カート／サイズ条件は要電話**（二次情報）"],
        ["駐車", "**専用駐車場なし**"],
        ["負担", "2匹を長く抱えるなら負担が大きい。レトロミュージアムと**どちらか一方**でよい"]
      ],
      maps: "高山昭和館"
    },
    {
      name: "光ミュージアム",
      area: "高山市中山町175",
      coords: [36.1561725, 137.2344541],
      category: "warning",
      spotKey: "museum",
      dogKey: "ng",
      images: ["images/hikaru.jpg", "images/hikaru_2.jpg", "images/hikaru_3.jpg", "images/hikaru_4.jpg"],
      gmapsPlaceId: "ChIJyW0UYb-kAmAR61qcwFCFu60",
      links: [
        { label: "公式サイト", url: "http://h-am.jp/" },
        { label: "飛騨高山旅ガイド", url: "https://www.hidatakayama.or.jp/spot/detail_1122.html" }
      ],
      badges: [
        { text: "8/10の主目的", cls: "priority-top" },
        { text: "犬は客室で留守番", cls: "priority-warn" }
      ],
      ratings: { google: "4.3", googleReviews: "1173" },
      desc: "ピラミッド型の外観で知られる大型museum。8/10の必須枠として組み込んだ。館内は犬同伴不可のため、見学中は犬2匹をホテルの客室で留守番させる前提。",
      meta: [
        ["営業", "10:00〜17:00（最終入館16:00）・**水曜休館**"],
        ["電話", "0577-34-6511"],
        ["犬", "**同伴可の公式明記を確認できず**。犬の安全な待機方法がない限り利用しない"],
        ["滞在", "**1時間半〜2時間**。犬の留守番は往復を含めて約2時間半になる"],
        ["扱い", "**8/10 10:00〜12:00に訪問**（開館直後に入り留守番を短く）。**犬の客室待機はホテルへの確認が前提**"]
      ],
      maps: "光ミュージアム 高山"
    },
    {
      name: "城山公園",
      area: "高山市城山",
      coords: [36.1400419, 137.263259],
      category: "backup",
      spotKey: "nature",
      dogKey: "outdoor",
      images: ["images/shiroyama.jpg", "images/shiroyama_2.jpg", "images/shiroyama_3.jpg", "images/shiroyama_4.jpg"],
      gmapsPlaceId: "ChIJaTYqu8K6AmARgF9gtVFrRRQ",
      links: [
        { label: "高山市の施設案内", url: "https://www.city.takayama.lg.jp/shisetsu/1004139/1000036/1001575.html" }
      ],
      badges: [
        { text: "坂と暑さで低優先", cls: "priority-warn" }
      ],
      ratings: { google: "4.1", googleReviews: "679" },
      desc: "高山城跡の林の公園。事前調査では犬OKだが、坂と階段が多く真夏の同行者には負担が大きい。",
      meta: [
        ["営業", "**24時間・無料**"],
        ["犬", "事前調査では犬OK。**現行ルールと現地表示を確認**"],
        ["歩行", "**林と坂**。夏の日中は負担が大きい"],
        ["注意", "野生動物の出没情報にも注意"],
        ["扱い", "飛騨の里・朝市を優先し、**今回は低優先**"]
      ],
      maps: "城山公園 高山"
    },
    {
      name: "北山公園",
      area: "高山市大新町4丁目（山田春慶店の北すぐ）",
      coords: [36.1519926, 137.2588212],
      category: "backup",
      spotKey: "nature",
      dogKey: "outdoor",
      images: ["images/kitayama.jpg", "images/kitayama_2.jpg", "images/kitayama_3.jpg", "images/kitayama_4.jpg"],
      gmapsPlaceId: "ChIJKQlb9NG6AmARjfmGlCct4Dc",
      links: [
        { label: "高山市の施設案内", url: "https://www.city.takayama.lg.jp/shisetsu/1004139/1000036/1001576.html" },
        { label: "犬同伴スポット一覧", url: "https://www.hidatakayama.or.jp/special/petinfo/" }
      ],
      badges: [
        { text: "リードで散歩できる", cls: "priority-alt" }
      ],
      ratings: { google: "3.7", googleReviews: "76" },
      desc: "市街の北にある静かな公園。飛騨高山旅ガイドが犬連れの散歩スポットとして挙げている。山田春慶店のすぐ北。",
      meta: [
        ["営業", "**24時間・無料**"],
        ["犬", "**リードで散歩可**（旅ガイド掲載）"],
        ["時間帯", "**朝か夕方**。日中は路面が熱い"],
        ["相性", "**8/12午前の山田春慶店とセットにしやすい**（徒歩圏）"],
        ["ホテルから", "車で約12分"]
      ],
      maps: "北山公園 高山市"
    },
    {
      name: "飛騨高山レトロミュージアム",
      area: "高山市神明町4丁目7",
      coords: [36.1391025, 137.2598451],
      category: "backup",
      spotKey: "museum",
      dogKey: "carry",
      images: ["images/retro.png", "images/retro_2.jpg", "images/retro_3.jpg", "images/retro_4.jpg"],
      gmapsPlaceId: "ChIJg5TjDKO7AmARi_2VPbxE2xE",
      links: [
        { label: "公式サイト", url: "https://retromuseum.jp/" }
      ],
      badges: [
        { text: "抱っこ可の情報・要電話", cls: "priority-warn" }
      ],
      ratings: { google: "4.3", googleReviews: "1395" },
      desc: "昭和の駄菓子屋・教室を再現した屋内施設。小中型犬は抱っこ可との情報があるが未確認。",
      meta: [
        ["営業", "10:00〜17:00・臨時休業を除き**無休**"],
        ["電話", "0577-70-8384"],
        ["犬", "小中型犬は**抱っこ可との二次情報**。要電話確認"],
        ["駐車", "**専用駐車場なし**"],
        ["扱い", "高山昭和館と内容が重なる。**どちらか一方**でよい"]
      ],
      maps: "飛騨高山レトロミュージアム"
    },
    {
      name: "原山市民公園ドッグラン",
      area: "高山市新宮町3423-1",
      coords: [36.1329263, 137.2193586],
      category: "backup",
      spotKey: "nature",
      dogKey: "outdoor",
      images: ["images/harayama_dogrun.jpg", "images/harayama_dogrun_2.jpg", "images/harayama_dogrun_3.jpg", "images/harayama_dogrun_4.jpg"],
      gmapsPlaceId: "ChIJQQOTfFO7AmAR7c-i0UehfhQ",
      links: [
        { label: "高山市の施設案内", url: "https://www.city.takayama.lg.jp/shisetsu/1004139/1000036/1001599.html" }
      ],
      badges: [
        { text: "サイズ別・無料", cls: "priority-alt" }
      ],
      ratings: { google: "4.3", googleReviews: "75" },
      desc: "サイズ別に分かれた無料のドッグラン。ホテルのドッグランで足りないときの予備。隣にDining&cafe 原山がある。",
      meta: [
        ["営業", "7:00〜20:00"],
        ["犬", "**無料・サイズ別に3区画**（飛騨高山旅ガイド）"],
        ["時間帯", "**朝か夕方**。日中は地面が熱い"],
        ["相性", "隣接の**Dining&cafe 原山はテラス犬可**（水・木定休）"],
        ["ホテルから", "車で約10分"]
      ],
      maps: "原山市民公園ドッグラン"
    },
    {
      name: "わんわんパラダイス 高山",
      area: "高山市丹生川町久手470-1",
      coords: [36.1731642, 137.501819],
      category: "warning",
      spotKey: "nature",
      dogKey: "ng",
      images: ["images/wanwan.jpg", "images/wanwan_2.jpg", "images/wanwan_3.jpg", "images/wanwan_4.jpg"],
      gmapsPlaceId: "ChIJ2duhSpFLHWARYtA6Ok02DuQ",
      links: [
        { label: "公式サイト", url: "https://www.izumigo.co.jp/aiken/takayama/" }
      ],
      badges: [
        { text: "日帰り利用は要確認", cls: "priority-warn" }
      ],
      ratings: { google: "4.2", googleReviews: "686" },
      desc: "犬向けの宿泊施設。事前調査からの候補だが、宿泊するホテルにもドッグランがあるため今回は重複する。",
      meta: [
        ["電話", "050-5443-6483"],
        ["犬", "犬向け施設だが**ビジター（日帰り）利用の条件が不明**"],
        ["位置", "**ホテルから車で約40分**（丹生川の奥）"],
        ["扱い", "**明確な目的がなければ不要**。行くなら事前に電話"]
      ],
      maps: "わんわんパラダイス高山"
    },
    {
      name: "新穂高ロープウェイ しらかば平駅",
      area: "高山市奥飛騨温泉郷神坂711-1",
      coords: [36.2825338, 137.5808042],
      category: "warning",
      spotKey: "nature",
      dogKey: "carry",
      images: ["images/shinhotaka.jpg", "images/shinhotaka_2.jpg", "images/shinhotaka_3.jpg", "images/shinhotaka_4.jpg"],
      gmapsPlaceId: "ChIJeZr8jcRPHWARO3mNTGG04CE",
      links: [
        { label: "公式サイト", url: "https://shinhotaka-ropeway.jp/" },
        { label: "犬同伴スポット一覧", url: "https://www.hidatakayama.or.jp/special/petinfo/" }
      ],
      badges: [
        { text: "丸1日かかる遠出", cls: "priority-warn" }
      ],
      ratings: { google: "4.2", googleReviews: "686" },
      desc: "2026年7月1日〜10月25日は愛犬同伴サービスあり。ただしホテルステイ中心の今回の方針とは相性が悪い。",
      meta: [
        ["犬", "**第2ロープウェイ（しらかば平駅発）のみ。15kg以下・1頭1,800円**"],
        ["持参", "キャリー・リード・マナーウェア等。**貸出なし**"],
        ["料金", "ロープウェイ 大人3,700円／**犬1頭1,800円**"],
        ["電話", "0578-89-2252"],
        ["位置", "**ホテルから車で約1時間20分**"],
        ["扱い", "**主計画には入れない**。家族全員が強く希望した場合のみ丸1日案として再設計"]
      ],
      maps: "新穂高ロープウェイ しらかば平駅"
    },
    {
      name: "多賀SA（上り・ドッグラン）",
      area: "名神高速道路・滋賀県犬上郡多賀町",
      coords: [35.2179908, 136.2837351],
      category: "confirmed",
      spotKey: "sapa",
      dogKey: "outdoor",
      images: ["images/taga_sa.jpg", "images/taga_sa_2.jpg", "images/taga_sa_3.jpg", "images/taga_sa_4.jpg"],
      gmapsPlaceId: "ChIJddh4fqrWA2AR7hfWLcwylFI",
      links: [
        { label: "NEXCO中日本 SA情報", url: "https://sapa.c-nexco.co.jp/sapa?sapainfoid=49" },
        { label: "ドッグラン一覧(PDF)", url: "https://sapa.c-nexco.co.jp/Content/storage/pdf/dogrun.pdf" }
      ],
      badges: [
        { text: "往路1回目の休憩", cls: "priority-top" },
        { text: "ドッグランあり", cls: "priority-alt" }
      ],
      ratings: { google: "3.7", googleReviews: "7831" },
      desc: "往路の最初の休憩。八尾から約1.5〜2時間。全犬種エリアと小中型犬エリアが分かれている。",
      meta: [
        ["営業", "**24時間**"],
        ["ドッグラン", "全犬種エリア約198㎡＋小中型約78㎡。水飲み・排泄物用設備あり"],
        ["使い方", "**給水・排泄・短い運動**。路面が熱ければ日陰中心で短く"],
        ["注意", "**当日にNEXCO公式で開放状況を確認**（天候・整備・混雑で一時閉鎖あり）"],
        ["方向", "**上り（東行き）**。ナビ経路が変わったら方向を再確認"]
      ],
      maps: "多賀サービスエリア 上り"
    },
    {
      name: "長良川SA（下り・ドッグラン）",
      area: "東海北陸自動車道・岐阜県関市下有知",
      coords: [35.5091209, 136.8975649],
      category: "confirmed",
      spotKey: "sapa",
      dogKey: "outdoor",
      images: ["images/nagaragawa_sa.jpg", "images/nagaragawa_sa_2.jpg", "images/nagaragawa_sa_3.jpg", "images/nagaragawa_sa_4.jpg"],
      gmapsPlaceId: "ChIJfeS1wl0BA2ARGcdNNkkuo58",
      links: [
        { label: "NEXCO中日本 SA情報", url: "https://sapa.c-nexco.co.jp/sapa?sapainfoid=155" },
        { label: "ドッグラン一覧(PDF)", url: "https://sapa.c-nexco.co.jp/Content/storage/pdf/dogrun.pdf" }
      ],
      badges: [
        { text: "当初から想定していたSA", cls: "priority-top" },
        { text: "ドッグランあり", cls: "priority-alt" }
      ],
      ratings: { google: "3.6", googleReviews: "2979" },
      desc: "高山方面へ向かう往路2回目の休憩。約234㎡のドッグランにシャワーもある。",
      meta: [
        ["営業", "**24時間**"],
        ["ドッグラン", "約234㎡。水飲み・**シャワー**・排泄物用設備、犬向け商品あり"],
        ["使い方", "ここから高山まで残り約1時間30分。**しっかり休ませてから最終区間へ**"],
        ["注意", "**当日にNEXCO公式で開放状況を確認**"],
        ["方向", "**下り（高山方面）**"]
      ],
      maps: "長良川サービスエリア 下り"
    },
    {
      name: "関SA（上り・ドッグラン）",
      area: "東海北陸自動車道・岐阜県関市小瀬",
      coords: [35.4903373, 136.8955272],
      category: "confirmed",
      spotKey: "sapa",
      dogKey: "outdoor",
      images: ["images/seki_sa.jpg", "images/seki_sa_2.jpg", "images/seki_sa_3.jpg", "images/seki_sa_4.jpg"],
      gmapsPlaceId: "ChIJM1qA-awGA2ARd7ZyexPFIBo",
      links: [
        { label: "NEXCO中日本 SA情報", url: "https://sapa.c-nexco.co.jp/sapa?sapainfoid=154" },
        { label: "ドッグラン一覧(PDF)", url: "https://sapa.c-nexco.co.jp/Content/storage/pdf/dogrun.pdf" }
      ],
      badges: [
        { text: "帰路の主休憩", cls: "priority-top" },
        { text: "ドッグランあり", cls: "priority-alt" }
      ],
      ratings: { google: "3.7", googleReviews: "3971" },
      desc: "8/12の帰路で最初に使う休憩。約240㎡と広く、シャワーもある。",
      meta: [
        ["営業", "**24時間**"],
        ["ドッグラン", "約240㎡。水飲み・**シャワー**・排泄物用設備あり"],
        ["使い方", "高山出発から約1時間。**給水と短い運動**"],
        ["注意", "**当日にNEXCO公式で開放状況を確認**"],
        ["方向", "**上り（名古屋・大阪方面）**"]
      ],
      maps: "関サービスエリア 上り"
    },
    {
      name: "尾張一宮PA（下り・ドッグラン）",
      area: "名神高速道路・愛知県一宮市",
      coords: [35.281341, 136.854151],
      category: "backup",
      spotKey: "sapa",
      dogKey: "outdoor",
      images: ["images/ichinomiya_pa.jpg", "images/ichinomiya_pa_2.jpg", "images/ichinomiya_pa_3.jpg", "images/ichinomiya_pa_4.jpg"],
      gmapsPlaceId: "ChIJ8_mKerYLA2ARVBZLDyNM72Q",
      links: [
        { label: "NEXCO中日本 PA情報", url: "https://sapa.c-nexco.co.jp/sapa?sapainfoid=48" },
        { label: "ドッグラン一覧(PDF)", url: "https://sapa.c-nexco.co.jp/Content/storage/pdf/dogrun.pdf" }
      ],
      badges: [
        { text: "帰路2回目・必要時", cls: "priority-alt" }
      ],
      ratings: { google: "3.6", googleReviews: "1611" },
      desc: "彦根方面へ向かう帰路2回目の休憩候補。疲労や渋滞の具合で使うかどうかを決める。",
      meta: [
        ["営業", "**24時間**"],
        ["ドッグラン", "約121㎡。水飲み・シャワー・排泄物用設備あり"],
        ["使い方", "**犬の様子と渋滞次第**。不要なら通過してよい"],
        ["注意", "**当日にNEXCO公式で開放状況を確認**"],
        ["方向", "**下り（西行き）**"]
      ],
      maps: "尾張一宮パーキングエリア 下り"
    },
    {
      name: "近鉄八尾駅（出発・帰着の目安）",
      area: "大阪府八尾市北本町2丁目1",
      coords: [34.6297913, 135.6033559],
      category: "confirmed",
      spotKey: "landmark",
      dogKey: "outdoor",
      images: ["images/yao.jpg", "images/yao_2.jpg", "images/yao_3.jpg", "images/yao_4.jpg"],
      gmapsPlaceId: "ChIJ08SWbqkgAWARSpZ3KxbU75o",
      badges: [
        { text: "起点・終点の参照", cls: "priority-top" }
      ],
      ratings: { google: "3.6", googleReviews: "254" },
      desc: "八尾から自家用車で出発し、8/12の夜に同行者と犬2匹が戻る地点の参照点。実際の発着は自宅。",
      meta: [
        ["8/8 出発", "**10:00〜11:00目安**（お盆の下り混雑を避けて前倒し）"],
        ["高山まで", "約4時間30分〜5時間（休憩2回込み）"],
        ["8/12 帰着", "夕方〜夜（彦根経由）"],
        ["注意", "**昼出発のままなら高山到着後の観光は入れない**"]
      ],
      maps: "近鉄八尾駅"
    },
    {
      name: "彦根城（8/12の目的地の目安）",
      area: "滋賀県彦根市金亀町1-1",
      coords: [35.276452, 136.251846],
      category: "backup",
      spotKey: "landmark",
      dogKey: "outdoor",
      images: ["images/hikone.jpg", "images/hikone_2.jpg", "images/hikone_3.jpg", "images/hikone_4.jpg"],
      gmapsPlaceId: "ChIJw9u_XSsrAmARMIwpeAshKu4",
      links: [
        { label: "公式サイト", url: "https://hikonecastle.com/" }
      ],
      badges: [
        { text: "8/12の立ち寄り", cls: "priority-alt" },
        { text: "彦根での予定は未定", cls: "priority-warn" }
      ],
      ratings: { google: "4.3", googleReviews: "20843" },
      desc: "8/12に高山から向かう彦根の位置の目安。彦根で何をするかは未定なので、地図上の参照点として置いている。",
      meta: [
        ["営業", "8:30〜17:00"],
        ["高山から", "**約3時間30分**（休憩を含めるとさらに）"],
        ["犬", "**城内（有料区域）は犬不可**。周辺の散策のみ"],
        ["注意", "**彦根での具体的な予定は未確定**。夕方に同行者と犬は八尾へ向かう"]
      ],
      maps: "彦根城"
    }
  ],

  /* === レストラン === */
  restaurants: [
    {
      name: "お食事処 大喜",
      area: "高山市西之一色町3丁目768-2（飛騨の里の近く）",
      coords: [36.1350828, 137.2384975],
      category: "confirmed",
      dogKey: "indoor",
      genre: "🥩 飛騨牛・郷土料理",
      genreKey: "hida",
      images: ["images/daiki.jpg", "images/daiki_2.jpg", "images/daiki_3.jpg", "images/daiki_4.jpg"],
      gmapsPlaceId: "ChIJsRtwSze7AmARuk382C9bSCk",
      links: [
        { label: "公式サイト", url: "http://www.hidatakayama.ne.jp/taiki/" },
        { label: "食べログ", url: "https://tabelog.com/gifu/A2104/A210401/21000828/" }
      ],
      badges: [
        { text: "8/9の昼・要予約", cls: "priority-top" },
        { text: "犬と店内テーブル席", cls: "priority-top" }
      ],
      ratings: { tabelog: "3.21", tabelogReviews: "30", google: "4.2", googleReviews: "258" },
      desc: "飛騨の里から車ですぐ。犬と一緒に店内のテーブル席に着ける貴重な店で、飛騨牛握り・朴葉味噌・山菜が名物。",
      meta: [
        ["営業", "10:00〜14:00（Google表示）・不定休。**資料の10:00〜15:00と差があるため予約時に確認**"],
        ["電話", "0577-34-1380"],
        ["犬", "**犬と店内テーブル席が利用可**。犬用メニューはなし"],
        ["予約", "**予約推奨**。8/9 10:30〜11:00で大人3名＋犬2匹と伝える"],
        ["駐車", "**あり**"],
        ["予算", "昼1,000〜1,999円"]
      ],
      notes: "<strong>この旅行で最も相性のよい昼食です。</strong>飛騨の里から近く、犬と店内で座れて、飛騨らしい食事ができます。満席になることがあるので必ず予約してください。営業時間は情報源によって差があるので、予約の電話で当日の営業時間と犬2匹の受け入れ可否をあわせて確認します。",
      maps: "お食事処 大喜 高山"
    },
    {
      name: "coffee & kitchen ぼくんち",
      area: "高山市本町1丁目78",
      coords: [36.1408233, 137.2580421],
      category: "confirmed",
      dogKey: "indoor",
      genre: "🍳 洋食・カフェごはん",
      genreKey: "western",
      images: ["images/bokunchi.jpg", "images/bokunchi_2.jpg", "images/bokunchi_3.jpg", "images/bokunchi_4.jpg"],
      gmapsPlaceId: "ChIJVferrdC6AmAR1DaZ-8oDLD4",
      links: [
        { label: "食べログ", url: "https://tabelog.com/gifu/A2104/A210401/21023033/" },
        { label: "ペット入店OKのお店特集", url: "https://www.hidatakayama.or.jp/blog/detail_80.html" }
      ],
      badges: [
        { text: "8/10の昼・最優先", cls: "priority-top" },
        { text: "犬と店内・大型犬可", cls: "priority-top" },
        { text: "駐車場なし", cls: "priority-warn" }
      ],
      ratings: { tabelog: "3.04", tabelogReviews: "4", google: "4.5", googleReviews: "102" },
      desc: "犬と店内で食事ができて大型犬も入れる、この旅行で最も条件のよい店のひとつ。オムライスやカツ丼など普段のごはん。",
      meta: [
        ["営業", "11:00〜21:00・**木曜定休**（8/10は月曜で営業）"],
        ["電話", "070-2331-8475"],
        ["犬", "**店内可・大型犬可・犬用の飲食物持込可**。混雑時はカートを外に置く場合あり"],
        ["予約", "電話で席と犬2匹の可否を確認しておく"],
        ["駐車", "**なし**。近隣の市営駐車場に停めて歩く"],
        ["位置", "古い町並・朝市から徒歩圏"]
      ],
      maps: "coffee & kitchen ぼくんち 高山"
    },
    {
      name: "自然薯 茶茶 じねんのむら 飛騨高山店",
      area: "高山市丹生川町坊方1064-1（鍾乳洞と同じ方向）",
      coords: [36.1699647, 137.3228231],
      category: "confirmed",
      dogKey: "indoor",
      genre: "🍚 自然薯・とろろ",
      genreKey: "jinenjo",
      images: ["images/kurata.jpg", "images/kurata_2.jpg", "images/kurata_3.jpg", "images/kurata_4.jpg"],
      gmapsPlaceId: "ChIJlwElajCwAmARL3knEGkjbCA",
      links: [
        { label: "公式サイト", url: "https://cha2.co.jp/" },
        { label: "食べログ", url: "https://tabelog.com/gifu/A2104/A210401/21001460/" },
        { label: "ペット入店OKのお店特集", url: "https://www.hidatakayama.or.jp/blog/detail_80.html" }
      ],
      badges: [
        { text: "8/11の昼", cls: "priority-top" },
        { text: "テラス＋蔵太（屋内）", cls: "priority-alt" },
        { text: "予約不可", cls: "priority-warn" }
      ],
      ratings: { tabelog: "3.47", tabelogReviews: "247", google: "4.2", googleReviews: "1589" },
      desc: "自然薯ととろろの店。犬はテラスの Garden Café ICHI か、屋内の蔵太で一緒に食事ができる。鍾乳洞から車で約20分。",
      meta: [
        ["営業", "10:00〜20:00・**無休案内**（土日は11:00〜）"],
        ["電話", "0577-78-2066"],
        ["犬", "**テラス（Garden Café ICHI）または屋内の蔵太**。犬の食事持込可"],
        ["予約", "**不可**。開店直後に行くのが確実"],
        ["雨天", "**雨の日に犬と入れるのは蔵太のみ**。席数が少ない"],
        ["注意", "**夏はどちらのエリアになるか選べないことがある**"]
      ],
      notes: "<strong>1つの施設に2つのエリアがあります。</strong>屋外テラスが Garden Café ICHI、屋内の蔵が 蔵太（くらた）で、犬と入れるのはこの2か所です。晴れならテラス、雨なら蔵太が理想ですが、混雑期はエリアを選べないことがあります。<strong>予約ができないので8/11は鍾乳洞のあと開店直後を狙ってください。</strong>前日に営業と当日の犬席の運用を電話で確認しておくと確実です。",
      maps: "自然薯 茶茶 じねんのむら 飛騨高山店"
    },
    {
      name: "バルフィオーレ Bar Fiore",
      area: "高山市初田町3丁目88-5",
      coords: [36.1506458, 137.2522828],
      category: "backup",
      dogKey: "outdoor",
      genre: "🍝 イタリアン・生パスタ",
      genreKey: "western",
      images: ["images/balfiore.png", "images/balfiore_2.jpg", "images/balfiore_3.jpg", "images/balfiore_4.jpg"],
      gmapsPlaceId: "ChIJ20MabdWkAmARBI8CgQrWBpA",
      links: [
        { label: "公式ブログ", url: "https://barfiore.hida-ch.com/" },
        { label: "食べログ", url: "https://tabelog.com/gifu/A2104/A210401/21011225/" },
        { label: "店舗情報(Hot Pepper)", url: "https://www.hotpepper.jp/strJ001049058/" }
      ],
      badges: [
        { text: "テラス席ペット可(二次情報)", cls: "priority-warn" },
        { text: "月曜定休", cls: "priority-warn" }
      ],
      ratings: { tabelog: "3.10", tabelogReviews: "18", google: "4.6", googleReviews: "215" },
      desc: "事前調査からの候補。緑に囲まれたテラスのあるイタリアン。ただしホテルでイタリアンが2回あるため優先は低め。",
      meta: [
        ["営業", "11:30〜15:00／17:30〜22:00・**月曜定休**（木・日は昼のみ）"],
        ["電話", "0577-34-3282"],
        ["犬", "**テラス席ペット可という二次情報のみ**。現行条件を電話確認"],
        ["注意", "**8/10（月）は定休日**。行くなら8/9か8/11の昼"],
        ["扱い", "ホテル夕食とイタリアンが重なるため**予備**"]
      ],
      maps: "バルフィオーレ 高山"
    },
    {
      name: "丸明 飛騨高山店",
      area: "高山市天満町6丁目8",
      coords: [36.1425437, 137.2541783],
      category: "warning",
      dogKey: "ng",
      genre: "🥩 飛騨牛・焼肉",
      genreKey: "hida",
      images: ["images/maruaki.jpg", "images/maruaki_2.jpg", "images/maruaki_3.jpg", "images/maruaki_4.jpg"],
      gmapsPlaceId: "ChIJAQAQxNe6AmARcMMVA_bBjus",
      links: [
        { label: "公式サイト", url: "https://www.hidagyu-maruaki.co.jp/restaurant/restaurant_hidatakayama" },
        { label: "食べログ", url: "https://tabelog.com/gifu/A2104/A210401/21000041/" }
      ],
      badges: [
        { text: "犬不可（事前調査）", cls: "priority-warn" }
      ],
      ratings: { tabelog: "3.53", tabelogReviews: "746", google: "4.1", googleReviews: "4223" },
      desc: "飛騨牛の有名店。大人だけで行くなら魅力的だが、犬不可でホテル夕食とも内容が重なるため今回は主計画から外している。",
      meta: [
        ["営業", "11:00〜20:30（L.O.20:30）・**年中無休**"],
        ["電話", "0577-35-5858"],
        ["犬", "**不可**（事前調査）"],
        ["駐車", "あり（50台）"],
        ["扱い", "**犬の待機方法が正式に確保できた場合のみ**。ホテル夕食と重複"]
      ],
      maps: "丸明 飛騨高山店"
    },
    {
      name: "CENTER4 HAMBURGERS",
      area: "高山市上一之町94（古い町並）",
      coords: [36.1410627, 137.261005],
      category: "warning",
      dogKey: "ng",
      genre: "🍔 飛騨牛バーガー",
      genreKey: "western",
      images: ["images/center4.jpg", "images/center4_2.jpg", "images/center4_3.jpg", "images/center4_4.jpg"],
      gmapsPlaceId: "ChIJu0g0DNu6AmARjMiC03W7nOc",
      links: [
        { label: "公式サイト", url: "http://www.tiger-center4.com/" },
        { label: "食べログ", url: "https://tabelog.com/gifu/A2104/A210401/21009922/" }
      ],
      badges: [
        { text: "犬不可（事前調査）", cls: "priority-warn" },
        { text: "水曜定休", cls: "priority-warn" }
      ],
      ratings: { tabelog: "3.70", tabelogReviews: "454", google: "4.7", googleReviews: "1488" },
      desc: "飛騨牛100%のバーガーで知られる人気店。点数は今回の候補で最上位だが犬不可。",
      meta: [
        ["営業", "11:00〜14:30／17:30〜20:00・**水曜定休**"],
        ["電話", "0577-36-4527"],
        ["犬", "**不可**（事前調査）"],
        ["注意", "**売り切れで早く受付終了**することがある"],
        ["扱い", "**犬の安全な待機が確保できる場合のみ**"]
      ],
      maps: "CENTER4 HAMBURGERS 高山"
    }
  ],

  /* === カフェ === */
  cafes: [
    {
      name: "福太郎",
      area: "高山市下三之町58（宮川朝市のすぐそば）",
      coords: [36.1461292, 137.2581945],
      category: "confirmed",
      dogKey: "indoor",
      genre: "🍡 みたらし団子・自家焙煎コーヒー",
      genreKey: "sweets",
      images: ["images/fukutaro.jpg", "images/fukutaro_2.jpg", "images/fukutaro_3.jpg", "images/fukutaro_4.jpg"],
      gmapsPlaceId: "ChIJwycuNdG6AmARf-mLI6dThTk",
      links: [
        { label: "公式サイト", url: "https://fukutarou.com/" },
        { label: "紹介記事", url: "https://www.hida-hotelplaza.co.jp/community/gourmet/postid_739/" }
      ],
      badges: [
        { text: "犬と店内OK", cls: "priority-top" },
        { text: "朝市から徒歩すぐ", cls: "priority-alt" }
      ],
      ratings: { google: "4.5", googleReviews: "297" },
      desc: "古民家を改装した町家カフェ。自分で育てた米で作るみたらし団子と自家焙煎コーヒー。犬と店内に入れる。",
      meta: [
        ["営業", "9:00〜17:00（Google表示。9:00〜18:00の案内もあり）・不定休"],
        ["電話", "0577-35-6777"],
        ["犬", "**店内OK**（複数の犬連れ情報あり。当日に念のため確認）"],
        ["駐車", "**なし**。朝市の駐車場から歩く"],
        ["使い方", "**8/10の朝市のあとの一服にちょうどよい**"],
        ["備考", "食べログの点数は取得できなかったため掲載していない"]
      ],
      notes: "<strong>資料で「要確認」だった店ですが、今回の調査で所在地・電話・犬同伴の条件がはっきりしました。</strong>高山市下三之町58・0577-35-6777、宮川朝市のすぐそばの町家カフェで、犬と店内に入れます。8/10は朝市→匠館の動線上にあるので、休憩を入れたくなったらここが第一候補です。",
      maps: "福太郎 高山市下三之町"
    },
    {
      name: "飛騨高山茶寮 三葉",
      area: "高山市上三之町93（古い町並）",
      coords: [36.1415608, 137.2596005],
      category: "backup",
      dogKey: "outdoor",
      genre: "🍵 茶寮・和スイーツ",
      genreKey: "cafe",
      images: ["images/mitsuba.jpg", "images/mitsuba_2.jpg", "images/mitsuba_3.jpg", "images/mitsuba_4.jpg"],
      gmapsPlaceId: "ChIJGQQPTNq6AmARUiXTpvSCG1E",
      links: [
        { label: "公式サイト", url: "https://www.nhc-hd.co.jp/mitsuha-saryo/" },
        { label: "食べログ", url: "https://tabelog.com/gifu/A2104/A210401/21017446/" },
        { label: "飛騨高山旅ガイド", url: "https://www.hidatakayama.or.jp/eat/detail_3030.html" }
      ],
      badges: [
        { text: "テラスのみ・1組限定", cls: "priority-warn" }
      ],
      ratings: { tabelog: "3.42", tabelogReviews: "115", google: "4.2", googleReviews: "457" },
      desc: "古い町並のなかの茶寮。犬と入れるのはテラス席だけで、ペット同伴は1組までの案内。",
      meta: [
        ["営業", "10:00〜17:30・**無休案内**"],
        ["電話", "0577-57-7177"],
        ["犬", "**テラス席のみ。ペット同伴は1組まで**"],
        ["注意", "**真夏と雨に弱い**。当日の気温と空模様で判断"],
        ["扱い", "古い町並を歩いたときの**休憩候補**。満席ならCafe takayama terraceへ"]
      ],
      maps: "飛騨高山茶寮 三葉"
    },
    {
      name: "カフェ櫟 Ichii",
      area: "高山市三福寺町4340（市街を見下ろす高台）",
      coords: [36.1513949, 137.2597312],
      category: "backup",
      dogKey: "outdoor",
      genre: "🌄 眺望カフェ・自家製ケーキ",
      genreKey: "cafe",
      images: ["images/ichii.jpg", "images/ichii_2.jpg", "images/ichii_3.jpg", "images/ichii_4.jpg"],
      gmapsPlaceId: "ChIJ_zYOPtO6AmAR35ujEzMlPbA",
      links: [
        { label: "公式サイト", url: "https://cafeichii.shopinfo.jp/" }
      ],
      badges: [
        { text: "テラスのみ", cls: "priority-warn" },
        { text: "水曜定休", cls: "priority-warn" }
      ],
      ratings: { google: "4.4", googleReviews: "266" },
      desc: "高山の市街を一望できる山の上のカフェ。景色はよいが犬と入れるのはテラス席のみ。",
      meta: [
        ["営業", "11:00〜17:00（土日10:00〜）・**水曜定休**"],
        ["電話", "080-4637-3494"],
        ["犬", "**テラス席のみ同伴可**"],
        ["駐車", "8台"],
        ["注意", "**真夏の日中と雨天は不向き**。涼しい日の夕方向き"]
      ],
      maps: "カフェ櫟 Ichii 高山"
    },
    {
      name: "Cafe takayama terrace",
      area: "高山市上一之町35-1（体験交流館の併設）",
      coords: [36.1417628, 137.2606646],
      category: "backup",
      dogKey: "outdoor",
      genre: "☕ テラスカフェ",
      genreKey: "cafe",
      images: ["images/takayama_terrace.jpg", "images/takayama_terrace_2.jpg", "images/takayama_terrace_3.jpg", "images/takayama_terrace_4.jpg"],
      gmapsPlaceId: "ChIJTRmt-dq6AmARXdisKLuGxlI",
      badges: [
        { text: "三葉が満席のとき", cls: "priority-alt" },
        { text: "火曜定休", cls: "priority-warn" }
      ],
      ratings: { google: "4.5", googleReviews: "26" },
      desc: "まちの体験交流館に併設されたカフェ。古い町並の散策中に犬とテラスで休める。",
      meta: [
        ["営業", "10:00〜15:30・**火曜定休**（8/11は休み）"],
        ["電話", "0577-32-5855"],
        ["犬", "**テラス席のみ**"],
        ["使い方", "**三葉が満席のときの代替**"],
        ["注意", "**8/11（火・祝）は定休日**"]
      ],
      maps: "Cafe takayama terrace 高山"
    },
    {
      name: "Dining&cafe 原山",
      area: "高山市新宮町3391-1（原山市民公園の隣）",
      coords: [36.1337821, 137.2201188],
      category: "backup",
      dogKey: "outdoor",
      genre: "🐾 ドッグラン隣接カフェ",
      genreKey: "cafe",
      images: ["images/harayama_cafe.jpg", "images/harayama_cafe_2.jpg", "images/harayama_cafe_3.jpg", "images/harayama_cafe_4.jpg"],
      gmapsPlaceId: "ChIJb_H8ElO7AmARlI-KH1Zr3Ew",
      links: [
        { label: "店舗情報", url: "https://www.heartnet.biz/harayama" }
      ],
      badges: [
        { text: "ドッグランとセット", cls: "priority-alt" },
        { text: "水・木定休", cls: "priority-warn" }
      ],
      ratings: { google: "4.3", googleReviews: "120" },
      desc: "原山市民公園ドッグランの隣。犬を走らせたあとにテラスで休める組み合わせ。",
      meta: [
        ["営業", "9:00〜15:00・**水曜・木曜定休**（8/12は休み）"],
        ["電話", "0577-35-9506"],
        ["犬", "**テラス席のみ**"],
        ["使い方", "**ドッグランを使う日の予備**"],
        ["ホテルから", "車で約10分"]
      ],
      maps: "Dining&cafe 原山 高山"
    },
    {
      name: "喫茶去かつて",
      area: "高山市上三之町92（古い町並）",
      coords: [36.1416069, 137.2595818],
      category: "warning",
      dogKey: "ng",
      genre: "🍡 古民家カフェ・わらび餅",
      genreKey: "cafe",
      images: ["images/kissako.jpg", "images/kissako_2.jpg", "images/kissako_3.jpg", "images/kissako_4.jpg"],
      gmapsPlaceId: "ChIJ69Q_Sdq6AmAR0x4xJvgovNA",
      links: [
        { label: "公式サイト", url: "http://www.wdo-kao.jp/" },
        { label: "食べログ", url: "https://tabelog.com/gifu/A2104/A210401/21001138/" }
      ],
      badges: [
        { text: "犬不可（事前調査）", cls: "priority-warn" },
        { text: "水曜定休", cls: "priority-warn" }
      ],
      ratings: { tabelog: "3.58", tabelogReviews: "411", google: "4.3", googleReviews: "519" },
      desc: "日本家屋をそのまま生かした落ち着いたカフェ。わらび餅が名物だが犬は不可。",
      meta: [
        ["営業", "10:00〜17:00（L.O.16:30）・**水曜定休**＋木曜不定休"],
        ["電話", "0577-34-1511"],
        ["犬", "**不可**（事前調査）"],
        ["扱い", "**今回は三葉・ぼくんち・福太郎を優先**"]
      ],
      maps: "喫茶去かつて 高山"
    },
    {
      name: "みだらしだんご三川屋",
      area: "高山市上三之町43-1（古い町並）",
      coords: [36.1424129, 137.2591612],
      category: "backup",
      dogKey: "ng",
      genre: "🍡 みたらし団子・さるぼぼアイス",
      genreKey: "sweets",
      images: ["images/mikawaya.png", "images/mikawaya_2.jpg", "images/mikawaya_3.jpg", "images/mikawaya_4.jpg"],
      gmapsPlaceId: "ChIJMfpCjQK7AmARlrq7t1mlf5M",
      links: [
        { label: "公式サイト", url: "https://www.sangawa-ya.co.jp/" },
        { label: "さるぼぼアイス", url: "https://sarubobo-ice.com/" }
      ],
      badges: [
        { text: "犬不可・交代で購入", cls: "priority-warn" }
      ],
      ratings: { google: "4.4", googleReviews: "56" },
      desc: "古い町並のみたらし団子の店。さるぼぼアイスの取扱先のひとつ。店内は犬不可だが交代での買い物はできる。",
      meta: [
        ["営業", "10:30〜14:30"],
        ["電話", "0577-32-0536"],
        ["犬", "**不可**（事前調査）。**大人が交代で購入**すればよい"],
        ["注意", "**さるぼぼアイスは当日の在庫を確認**。飛騨大鍾乳洞など他の取扱先もある"]
      ],
      maps: "みだらしだんご三川屋 高山"
    },
    {
      name: "森のCafe Rabbit hills",
      area: "高山市神明町1丁目29",
      coords: [36.1358867, 137.2585199],
      category: "backup",
      dogKey: "carry",
      genre: "🍝 生パスタ・陶芸体験併設",
      genreKey: "cafe",
      images: ["images/rabbithills.jpg", "images/rabbithills_2.jpg", "images/rabbithills_3.jpg", "images/rabbithills_4.jpg"],
      gmapsPlaceId: "ChIJs9cxO_S7AmARH5298-fH4hw",
      links: [
        { label: "公式サイト", url: "https://kurasi-rabbithills.jp/rabbit-hills/" }
      ],
      badges: [
        { text: "ハードキャリー必須", cls: "priority-warn" },
        { text: "火・水定休（要確認）", cls: "priority-warn" }
      ],
      ratings: { google: "4.9", googleReviews: "27" },
      desc: "2024年開業の高台のカフェ。ペット同伴可だが、店内では犬をハードキャリーやカゴに入れておく必要がある。",
      meta: [
        ["営業", "10:00〜16:00・**火曜・水曜定休**（二次情報。資料の「不定休」と差があるため要確認）"],
        ["電話", "070-2294-6564"],
        ["犬", "**ハードキャリーまたはカゴに入れて入店**。自由に歩かせられない"],
        ["駐車", "5台"],
        ["注意", "**2匹分のキャリーが必要**。予約と2匹可否をあわせて確認"]
      ],
      maps: "森のCafe Rabbit hills 高山"
    },
    {
      name: "コーヒーハウス パロット",
      area: "高山市丹生川町久手1-5（鍾乳洞と同じ方向）",
      coords: [36.1785142, 137.473619],
      category: "warning",
      dogKey: "ng",
      genre: "☕ 喫茶・コーヒーハウス",
      genreKey: "cafe",
      images: ["images/parrot.jpg", "images/parrot_2.jpg", "images/parrot_3.jpg", "images/parrot_4.jpg"],
      gmapsPlaceId: "ChIJyzwMHpxMHWARhjiAVbunaXY",
      badges: [
        { text: "犬の条件が不明", cls: "priority-warn" },
        { text: "水曜定休", cls: "priority-warn" }
      ],
      ratings: { google: "4.7", googleReviews: "227" },
      desc: "事前調査で挙がっていた店。丹生川の山あいにあり、鍾乳洞と同じ方向。過去に犬連れ利用例があるが現行条件は不明。",
      meta: [
        ["営業", "9:00〜17:00・**水曜定休**"],
        ["電話", "0577-79-2257"],
        ["犬", "**現行の同伴条件が不明**。店内かテラスか、2匹可否を電話確認"],
        ["位置", "**ホテルから車で約35分**。鍾乳洞へ向かう途中に寄れる"],
        ["扱い", "**予備候補**。8/11に茶茶が混んでいたときの逃げ場になりうる"]
      ],
      maps: "コーヒーハウスパロット 高山市丹生川町"
    }
  ],

  /* === 当日の調整方針 === */
  branches: [
    { cls: "sun", title: "☀️ 晴れ・猛暑のとき", text: "屋外は開園直後の飛騨の里と朝市だけに限定し、11時以降は歩かせない。昼は犬と店内に入れる大喜・ぼくんちを優先し、テラスだけの三葉・Ichii・Takayama terrace は避ける。スカイパークは夕方だけ。午後はホテルの客室とドッグランで休む。" },
    { cls: "rain", title: "🌧 雨のとき", text: "飛騨大鍾乳洞・匠館・ぼくんち・大喜・茶茶の蔵太を軸にする。傘より、犬が濡れない工夫と足拭きを優先。鍾乳洞は濡れた床で滑りやすいので手すりを使ってゆっくり。強雨・雷なら屋外はすべて中止してホテルステイに切り替える。" },
    { cls: "tired", title: "😪 同行者が疲れているとき", text: "その日の主目的を1つだけ残し、あとは削る。JAや山田春慶店のような短時間で終わる場所に切り替え、散策は省略。大人が交代で入店すれば、犬を連れたままでも用は足りる。無理に予定を追加しない。" },
    { cls: "fun", title: "🐾 犬の様子がよくないとき", text: "呼吸が速い・舌や歯肉の色が悪い・ぐったり・嘔吐があれば、ただちに冷房下へ移動して体を冷やす。改善しなければ動物病院へ。落ち着かない・食欲が落ちているだけでも観光は中止し、静かな客室で休ませる。犬を優先した判断は、この旅行では常に正解。" }
  ],

  /* === 移動区間 === */
  legs: [
    { from: "八尾", to: "多賀SA（上り）", time: "約1時間30分", note: "往路1回目の休憩。8/8は下り方面が混雑する予測" },
    { from: "多賀SA", to: "長良川SA（下り）", time: "約1時間30分", note: "東海北陸道へ。ここが当初から想定していたSA" },
    { from: "長良川SA", to: "サンクチュアリコート高山", time: "約1時間30分", note: "最終区間。到着後は観光を入れない" },
    { from: "ホテル", to: "飛騨の里", time: "約5分", note: "8/9の主目的。徒歩圏ではないので車で" },
    { from: "ホテル", to: "宮川朝市・古い町並", time: "約10分", note: "8/10。市営駐車場に停めて歩く" },
    { from: "宮川朝市", to: "JA産直市場アグリ高山", time: "約10分", note: "匠館は朝市のすぐ隣なので徒歩で移動できる" },
    { from: "ホテル", to: "飛騨大鍾乳洞", time: "約30分", note: "8/11。市街地を通らない経路だと混雑を避けやすい" },
    { from: "飛騨大鍾乳洞", to: "自然薯 茶茶 じねんのむら", time: "約20分", note: "同じ丹生川方面。開店直後を狙う" },
    { from: "ホテル", to: "山田春慶店", time: "約10分", note: "8/12。専用駐車場がないので近隣の駐車場を先に決めておく" },
    { from: "高山", to: "関SA（上り）", time: "約1時間", note: "帰路の主休憩" },
    { from: "関SA", to: "彦根", time: "約1時間30分", note: "尾張一宮PAで2回目の休憩を挟む場合はさらに20分" },
    { from: "彦根", to: "八尾", time: "約1時間30分", note: "8/12の夜。同行者と犬2匹が帰る区間" }
  ],

  /* === 持ち物 === */
  packing: [
    { group: "犬の必須書類・記録", items: [
      "狂犬病予防接種証明書",
      "鑑札またはマイクロチップ登録情報",
      "ホテルが指定する同意書類",
      "2匹それぞれの体重記録（各10kg未満であること）",
      "常用薬・かかりつけ動物病院の連絡先",
      "高山周辺の夜間動物病院の連絡先"
    ]},
    { group: "犬の移動・待機", items: [
      "ホテル規程に合うキャリー（2匹同居不可なら各1台）",
      "持参ケージ（ホテルに貸出なし）",
      "伸縮式ではない短いリード（伸縮・ロングリードは不可）",
      "ハーネス・迷子札・連絡先",
      "市街地用ペットカート（任意・施設ごとに可否を確認）",
      "慣れたベッド／毛布・おもちゃ"
    ]},
    { group: "犬の暑さ・雨対策", items: [
      "水・携帯ボウル",
      "冷却マット／冷却ベスト",
      "保冷剤・携帯扇風機",
      "タオル・足拭き",
      "犬用レインウェア",
      "普段のフード・おやつ・食器・食べ残し用袋"
    ]},
    { group: "犬の衛生用品", items: [
      "ペットシーツ",
      "マナーウェア",
      "排泄物袋",
      "消臭・清掃用品"
    ]},
    { group: "花火の音対策（8/9・8/11）", items: [
      "環境音を流すスピーカーやアプリ",
      "普段使っている毛布・ハウス",
      "落ち着けるおやつ"
    ]},
    { group: "人用（鍾乳洞・真夏）", items: [
      "薄手の上着（洞内は約12℃）",
      "滑りにくい靴（洞内の階段・濡れた床）",
      "帽子・日傘・日焼け止め",
      "飲料・塩分・着替え",
      "折り畳み傘よりレインウェア（リード操作の邪魔になりにくい）"
    ]},
    { group: "車", items: [
      "防水シート",
      "クールボックス",
      "充電器",
      "渋滞用の軽食",
      "ETCカード"
    ]}
  ],

  /* === 注意・要確認 === */
  info: [
    { warn: true, title: "① ホテルへの電話が最優先", text: "**毎晩ホテルレストランを2〜3時間利用する間、犬2匹を客室ケージ内に残してよいか**を必ず確認してください。ホテル規程は「客室に残す場合はケージ内」としつつ「部屋に残しての外出は控える」とも記載しており、そのままでは毎晩の夕食の扱いが決まりません。禁止・非推奨の場合はホテルが指定する代替方法を聞くこと。あわせて客室ケージの台数とサイズ、2匹を同じケージに入れられるか、館内のキャリー必須区間、ドッグランの利用時間と雨天可否、必要書類も確認します。" },
    { warn: true, title: "② 犬2匹の実測体重を出発前に測る", text: "ホテルの条件は「小型室内犬1室2頭まで・**各10kg未満**」です。犬種ではなく**実測体重**が条件なので、出発前に2匹それぞれを測ってください。あわせて、予約に犬種・頭数・体重が正しく登録されているかも確認します。" },
    { warn: true, title: "③ 山田春慶店は8/12午前の一度きり", text: "**2026年7月31日〜8月11日が臨時休業**です。8/13はこの旅程に含まれないため、行けるのは**8/12（水）の午前だけ**で予備日がありません。**8/11の夕方までに電話で営業再開を確認**し、休業が続くようならこの日の予定から外して出発を早めてください。専用駐車場がないので、駐車場所も同時に確認しておくと当日困りません。" },
    { warn: true, title: "④ 匠館の8/11特別営業は当日朝に確認", text: "匠館は通常**火曜定休**で、8/11（火・祝）は**特別営業の予定**とされています（代休は8月19日）。雨天時の逃げ場として当てにするなら、前日か当日の朝に電話で確認してください。なお**8/10（月）は通常営業**なので、この旅程では8/10に組んであります。" },
    { warn: true, title: "⑤ 犬同伴の店は必ず事前に電話する", text: "**大人3名＋ミニチュア・シュナウザー2匹**を同時に受け入れられるか、店内席かテラス席か、カートやキャリーが必要か、雨の場合も利用できるかを確認します。電話の文例：「8月○日の○時頃、大人3名とミニチュア・シュナウザー2匹で伺いたいのですが、犬同伴席は利用できますか。2匹とも10kg未満です。店内席とテラス席のどちらでしょうか。カートまたはキャリーは必要ですか。予約はできますか。雨の場合も利用できますか。」" },
    { warn: true, title: "⑥ 真夏の犬2匹を守る", text: "**路面温度を手の甲で確認**し、熱ければ歩かせないでください。日陰・芝・カート・抱っこを使い分けます。**車内放置は短時間でも不可**で、買い物は必ず大人が交代で行います。呼吸が異常に速い、舌や歯肉の色が悪い、ぐったりする、嘔吐するといった様子があれば、ただちに冷房下へ移動して体を冷やし、改善しなければ動物病院へ。肉球が熱い・赤いときは歩行を中止します。" },
    { warn: true, title: "⑦ 8/9と8/11は花火がある", text: "**8/9 19:30〜20:30頃に宮川周辺で飛騨高山手筒花火**、**8/11 16:30〜22:30に久々野で納涼夏まつりの花火**があります（荒天時は8/22へ延期）。大きな破裂音が出るので、犬は会場へ連れて行かず、ホテルで静かな環境をつくってください。ただし**夕食中の犬の待機方法はホテルへの確認が前提**です。音が届きにくい客室の相談ができるかも聞いておくとよいです。" },
    { warn: false, title: "⑧ 8/11は市街地が混む（山の日全国大会）", text: "**9:30〜11:30に高山市民文化会館で「山の日」全国大会の式典**、**10:00〜17:00に関連の歓迎イベント**があり、高山駅の西側を含む市街地の人と車が増える見込みです。この日は市街地を避けて郊外の鍾乳洞方面へ向かう組み方にしてあります。" },
    { warn: false, title: "⑨ 8/8の出発は前倒しを検討", text: "NEXCO中日本の2026年お盆予測では、**8/8は下り方面の混雑**が見込まれています。当初案の「昼頃出発」より、可能なら**10〜11時頃に前倒し**してください。昼出発のままなら、高山到着後の観光は入れず、ホテルへ安全に着くことを最優先にします。SAのドッグランは天候・整備・混雑で一時閉鎖されることがあるので、当日にNEXCO公式で確認を。" },
    { warn: false, title: "⑩ 8/12（水）は水曜定休の店が多い", text: "光ミュージアム、カフェ櫟 Ichii、CENTER4 HAMBURGERS、喫茶去かつて、テディベアエコビレッジ、コーヒーハウス パロットが**水曜定休**、Dining&cafe 原山は**水・木定休**です。8/12は山田春慶店（水曜は通常営業）と移動が中心なので大きな影響はありませんが、**予定が崩れたときの代替が少ない日**だと覚えておいてください。" },
    { warn: false, title: "⑪ 情報の基準日と再確認", text: "掲載している営業時間・定休日・点数は**2026年8月4日時点**の公式サイトとGoogleマップの情報です。夏の臨時休業・満席・イベント・道路状況は直前に変わります。**各日の前夜と当日の朝に、雨雲・雷・最高気温を再確認**してから屋外を実施するか判断してください。点数は参考値として扱ってください。" },
    { warn: false, title: "⑫ 8/13はこの旅程に含まれません", text: "資料の冒頭では「8/8〜13」とされていましたが、**この旅程は8/8〜12の4泊5日**で確定しています。8/13の延泊案（飛騨古川・瀬戸川の白壁土蔵街など）はこのサイトから外してあります。" }
  ],

  /* === ワンちゃん特集（読み物） ===
     ★店名・営業時間・点数・写真・電話・リンクはここに書き写さない。
       ref（地点id）で DATA の該当地点を指し、記事側は「なぜおすすめか」の一文だけを持つ。
       スケジュールの ref と同じ仕組みで、地点を直したときに特集だけ古いまま残る事故を防ぐ。
     ★本文は **囲むと太字** の軽量記法だけ。生のHTMLは書かない（mdBold を通すため）。 */
  dogFeature: [
    { kind: "note", title: "「犬OK」には4段階あります",
      text: "同じ「ペット可」でも中身はまるで違います。このサイトでは4つに分けました。**🐾 屋内も一緒に**＝店内や館内に犬と入れる。**🌿 屋外・テラスのみ**＝屋外はリードで歩けるが建物の中は不可。**🧺 抱っこ・カート・キャリー**＝入れるが自分で歩かせられない。**⚠️ 不可・要確認**＝犬は入れないので大人が交代で入る。\n\n真夏と雨の予報が出ているこの旅行で効いてくるのは、**「屋内も一緒に」がどれだけあるか**です。テラス席だけの店に頼ると、暑い日と雨の日に行き場がなくなります。" },

    { kind: "picks", title: "犬と店内で食事ができる店", tone: "top",
      lead: "**この旅行でいちばん大事な4軒。** 夕食は4日とも ホテルで固定なので、外で食べるのは昼とおやつだけ。その限られた機会に、犬を外に待たせずに済む店を選びました。",
      items: [
        { ref: "restaurant:お食事処 大喜", tag: "★ 8/9の本命",
          why: "飛騨の里から車ですぐで、**犬と一緒に店内のテーブル席**に着けます。飛騨牛握り・朴葉味噌・山菜と、飛騨らしいものがひと通り揃うのも good。満席になることがあるので**予約を入れておくのが確実**です。" },
        { ref: "restaurant:coffee & kitchen ぼくんち", tag: "★ 8/10の本命",
          why: "**店内可のうえ大型犬もOK**、犬用の飲食物の持ち込みまで許されている、この旅行で最も条件のよい店。オムライスやカツ丼など気取らないごはんなので、朝市を歩いたあとの昼にちょうどいい。**駐車場がない**ので、朝市の市営駐車場に停めて歩く前提で。" },
        { ref: "restaurant:自然薯 茶茶 じねんのむら 飛騨高山店", tag: "★ 8/11の本命",
          why: "鍾乳洞から車で約20分、同じ丹生川方面にあります。**屋内の「蔵太」なら雨でも犬と一緒**に自然薯ととろろが食べられます（晴れていればテラスの Garden Café ICHI）。**予約ができない**ので、鍾乳洞のあと開店直後を狙ってください。" },
        { ref: "cafe:福太郎", tag: "朝市のとなり",
          why: "資料では「要確認」だった店ですが、調べたところ**犬と店内に入れる町家カフェ**でした。自分で育てた米で作るみたらし団子と自家焙煎コーヒー。**宮川朝市のすぐそば**なので、8/10に一服したくなったらここです。" }
      ] },

    { kind: "picks", title: "犬と一緒に屋内へ入れる観光",
      lead: "建物の中まで犬と入れる、数少ない3か所。**雨の日と猛暑の日の逃げ場**になります。",
      items: [
        { ref: "spot:飛騨大鍾乳洞", tag: "雨・猛暑に最強",
          why: "洞内は**年間を通じて約12℃**。リードでも抱っこでも入れます（カートは不可）。真夏にこれ以上ありがたい場所はありません。**薄手の上着とすべりにくい靴**を忘れずに。階段と濡れた床があるので、犬が震えたり歩きにくそうなら早めに引き返してください。**大橋コレクション館は犬不可**です。" },
        { ref: "spot:匠館", tag: "宮川朝市のとなり",
          why: "**1階から3階まで全フロア犬同伴可**という珍しい施設。飛騨の家具と工芸が並びます。宮川朝市の隣なので、8/10の朝市のあとに雨が降ってきてもそのまま流れ込めます。ただし**通常は火曜定休**で、8/11（火・祝）の特別営業は臨時情報が根拠なので、当てにするなら前日に電話を。" },
        { ref: "spot:サンクチュアリコート高山（拠点）", tag: "4泊すべての拠点",
          why: "そもそも4泊すべてここ。**ドッグランがあり、午後はここで休むのが基本方針**です。ただし犬の扱いには条件が多く、**1室2頭まで・各10kg未満**、館内は原則キャリー、**貸出ケージなし**。出発前に必ず電話で詰めてください（下の「真夏と花火」の項も参照）。" }
      ] },

    { kind: "picks", title: "屋外をリードで歩けるところ",
      lead: "建物の中はだめでも、**屋外なら犬と並んで歩ける**場所。どれも朝の涼しい時間帯向きです。",
      items: [
        { ref: "spot:飛騨の里", tag: "8/9の主目的",
          why: "合掌造りを移築した野外集落博物館。**屋外はリードでOK、しかも犬の入場は無料**（人は大人700円）。ホテルから車で5分と近いので、**開園直後の8:30**に入って2時間ほどで切り上げるのが涼しくて安全です。" },
        { ref: "spot:宮川朝市", tag: "8/10の朝いちばん",
          why: "宮川沿いに並ぶ朝市。**7時台なら人も気温も落ち着いていて**、犬連れでも歩きやすい。8:45を過ぎると混み始めるので、**7:30到着**が目標。混んできたら抱っこかカートに切り替えてください。" },
        { ref: "spot:古い町並（さんまち通り）", tag: "朝市とセット",
          why: "出格子の町家が続く高山らしい通り。朝市から歩いてすぐで、平坦なので歩行の負担も軽い。**石畳の照り返しが強い**ので、手の甲で路面温度を確かめてから歩かせてください。" },
        { ref: "spot:アルプス展望公園 スカイパーク", tag: "夕方の散歩に",
          why: "北アルプスを見渡す**無料**の展望公園。舗装が整っていて歩きやすく、ホテルから車で10分。**夕方17時以降**の短い散歩向きです。日中は路面が熱くて不可。" },
        { ref: "spot:北山公園", tag: "旅ガイド掲載",
          why: "飛騨高山旅ガイドが犬連れの散歩スポットとして挙げている、市街北の静かな公園。**山田春慶店のすぐ北**なので、8/12午前に山田春慶店へ寄るなら、その前後に足を伸ばせます。" },
        { ref: "spot:城山公園", tag: "坂に注意",
          why: "高山城跡の林の公園。犬とは歩けますが、**坂と階段が多く真夏の負担が大きい**ので、今回は優先度を下げています。行くなら朝いちばんに。" },
        { ref: "spot:飛騨高山まちの体験交流館", tag: "町並の休憩に",
          why: "古い町並のなかにある**無料**の休憩・体験施設。広場と館内の一部に犬と入れます（**工芸体験のときは犬同伴不可**）。三葉が満席のときの逃げ場に。" }
      ] },

    { kind: "picks", title: "抱っこ・カート・キャリーが要るところ",
      lead: "犬と入れるけれど**自分で歩かせられない**場所。2匹を抱え続けるのは負担が大きいので、**カートを持って行ける日だけ**にするのが現実的です。",
      items: [
        { ref: "spot:飛騨高山 テディベア エコビレッジ", tag: "飛騨の里のとなり",
          why: "合掌造りのテディベア館。**犬の入場は無料**ですが、館内はずっと抱っこかカート。飛騨の里の隣なので8/9に足せますが、詰め込みすぎには注意。**併設カフェのテラス席は犬OK**です。" },
        { ref: "spot:高山昭和館", tag: "要電話",
          why: "昭和30年代の町を再現した屋内展示。犬歓迎の発信はあるものの、**抱っこかカートか、サイズ制限があるかは二次情報のまま**。行くなら事前に電話で条件を確かめてください。" },
        { ref: "spot:飛騨高山レトロミュージアム", tag: "昭和館とどちらか一方",
          why: "駄菓子屋と教室を再現した屋内施設。小中型犬は抱っこ可という情報がありますが未確認。**高山昭和館と内容が重なる**ので、どちらか片方で十分です。" },
        { ref: "cafe:森のCafe Rabbit hills", tag: "ハードキャリー必須",
          why: "2024年開業の高台のカフェ。ペット同伴可ですが、**店内ではハードキャリーやカゴに入れておく必要**があります。2匹ぶんのキャリーを持ち込めるときだけ。定休日が資料と食い違うので要確認。" },
        { ref: "spot:新穂高ロープウェイ しらかば平駅", tag: "丸1日の遠出",
          why: "2026年7月1日〜10月25日は**愛犬同伴サービス**あり（第2ロープウェイのみ・15kg以下・犬1頭1,800円）。キャリーとマナーウェアは持参で貸出なし。ただし**ホテルから片道1時間20分**で、ホテルステイ中心の今回の方針とは相性が悪いので、主計画には入れていません。" }
      ] },

    { kind: "picks", title: "思いきり走らせる場所",
      lead: "リードを外して走らせられるドッグラン。**ホテルにもドッグランがあります**（利用時間・雨天可否はチェックイン時に確認）。それ以外だとこの5か所。",
      items: [
        { ref: "spot:原山市民公園ドッグラン", tag: "無料・3区画",
          why: "**無料でサイズ別に3区画**あるドッグラン。ホテルから車で10分。隣の **Dining&cafe 原山はテラス席が犬OK**なので、走らせたあとに休憩まで済ませられます（水・木定休）。" },
        { ref: "spot:多賀SA（上り・ドッグラン）", tag: "往路1回目",
          why: "8/8の往路、八尾から1時間半ほど。**全犬種エリアと小中型犬エリアが分かれています**。給水と排泄、短い運動を。路面が熱ければ日陰で短めに。" },
        { ref: "spot:長良川SA（下り・ドッグラン）", tag: "往路2回目",
          why: "高山方面へ向かう2回目の休憩。約234㎡と広く、**シャワーもあります**。ここから高山まで残り1時間半なので、しっかり休ませてから最終区間へ。" },
        { ref: "spot:関SA（上り・ドッグラン）", tag: "帰路の主休憩",
          why: "8/12の帰路で最初に使う休憩。約240㎡でシャワーあり。高山を出て1時間ほどの位置です。" },
        { ref: "spot:尾張一宮PA（下り・ドッグラン）", tag: "帰路2回目・必要時",
          why: "彦根へ向かう2回目の休憩候補。犬の様子と渋滞しだいで、不要なら通過してかまいません。" }
      ] },

    { kind: "list", title: "日別のおすすめの組み合わせ",
      lead: "「午前に主目的をひとつ＋犬と入れる昼食＋13時台にはホテルへ戻る」が毎日の型です。",
      items: [
        { label: "8/8（土）", text: "移動だけの日。**多賀SA→長良川SA**でドッグラン休憩を2回。到着後に観光は入れず、ホテルで犬の館内動線とケージを確認する。" },
        { label: "8/9（日）", text: "**飛騨の里**（開園直後）→ **大喜**で犬と店内ランチ。午後はホテル。涼しければ夕方に**スカイパーク**を少しだけ。夜は市街地で手筒花火があるので、犬はホテルで音対策を。" },
        { label: "8/10（月）", text: "**宮川朝市**（7:30）→ **匠館**（全フロア犬OK）→ JA → **ぼくんち**で犬と店内ランチ。一服したければ朝市そばの**福太郎**。" },
        { label: "8/11（火・祝）", text: "市街地は山の日のイベントで混むので郊外へ。**飛騨大鍾乳洞**（約12℃）→ **茶茶の蔵太**。雨でもこの組み合わせは崩れません。" },
        { label: "8/12（水）", text: "**山田春慶店**（前日に営業確認）と、すぐ北の**北山公園**を朝のうちに。あとは**関SA**でドッグラン休憩を挟みながら彦根へ。" }
      ] },

    { kind: "picks", title: "晴れた日のテラス席（予備）",
      lead: "犬と入れるのは**テラス席だけ**の店。景色や雰囲気はよいのですが、**真夏と雨に弱い**ので本命にはしていません。涼しい日に空いていたら寄る、くらいの位置づけで。",
      items: [
        { ref: "cafe:飛騨高山茶寮 三葉", tag: "ペット1組限定",
          why: "古い町並のなかの茶寮。**ペット同伴はテラスに1組まで**なので、先客がいると入れません。満席なら Cafe takayama terrace へ。" },
        { ref: "cafe:カフェ櫟 Ichii", tag: "市街を一望",
          why: "高山の市街を見下ろす山の上のカフェ。景色は抜群ですが**テラスのみ・水曜定休**。涼しい日の夕方向き。" },
        { ref: "cafe:Cafe takayama terrace", tag: "三葉の代替",
          why: "まちの体験交流館に併設。古い町並の散策中に犬とテラスで休めます。**火曜定休なので8/11は不可**。" },
        { ref: "cafe:Dining&cafe 原山", tag: "ドッグランとセット",
          why: "原山市民公園ドッグランの隣。走らせたあとの休憩に。**水・木定休なので8/12は不可**。" },
        { ref: "restaurant:バルフィオーレ Bar Fiore", tag: "情報が古い可能性",
          why: "緑に囲まれたテラスのあるイタリアン。ただし**テラス席ペット可は二次情報のみ**で、現行条件は要確認。ホテルでイタリアンが2回あるので優先度は低めです。**月曜定休なので8/10は不可**。" }
      ] },

    { kind: "note", title: "犬が入れない店とのつき合い方",
      text: "犬不可でも、**大人が交代で入れば用が足りる**ものと、そうでないものがあります。\n\n**交代入店で足りるもの**：JA産直市場アグリ高山、山田春慶店、みだらしだんご三川屋（さるぼぼアイス）。買い物や短時間の用事なので、ひとりが車の外で犬と待てば済みます。ただし**車内に犬を残すのは短時間でも不可**です。\n\n**主計画から外したもの**：丸明 飛騨高山店、CENTER4 HAMBURGERS、喫茶去かつて、光ミュージアム。どれも評判のよい店・施設ですが、**座って食事をする／2時間見学する**タイプなので、その間ずっと犬を待たせることになります。ホテルが客室での待機を正式に認めてくれた場合にだけ検討してください。" },

    { kind: "note", warn: true, title: "真夏と花火 ― これだけは必ず",
      text: "**路面温度を手の甲で確かめてから歩かせてください。** 熱ければ日陰・芝・カート・抱っこに切り替える。**車内放置は短時間でも不可**で、買い物は必ず交代で行きます。呼吸が異常に速い、舌や歯肉の色が悪い、ぐったりする、嘔吐するといった様子があれば、**ただちに冷房下へ移して体を冷やし**、改善しなければ動物病院へ。肉球が熱い・赤いときは歩行を中止します。\n\n**8/9の19:30〜20:30頃に宮川周辺で手筒花火**、**8/11の16:30〜22:30に久々野で花火**があります。大きな破裂音が出るので、犬は会場へ連れて行かず、ホテルで静かな環境をつくってください。**ただし夕食のあいだ犬をどうするかは、ホテルへの確認が前提**です。ホテルの規程は「客室に残す場合はケージ内」としつつ「部屋に残しての外出は控える」とも書かれていて、**毎晩2〜3時間のレストラン利用をどう扱うかが決まっていません**。ここが今回いちばん大事な確認事項です。" },

    { kind: "list", title: "店に電話するときの文例",
      lead: "犬同伴の可否は「ペット可」の一言では足りません。**この5点**を毎回聞いてください。",
      items: [
        { label: "そのまま読める文例", text: "「8月○日の○時頃、**大人3名とミニチュア・シュナウザー2匹**で伺いたいのですが、犬同伴席は利用できますか。2匹とも10kg未満です。**店内席とテラス席のどちらでしょうか。カートまたはキャリーは必要ですか。予約はできますか。雨の場合も利用できますか。**」" },
        { label: "① 2匹同時に受け入れられるか", text: "「ペット可」でも**1組まで**という店があります（三葉がそれ）。頭数を必ず伝えてください。" },
        { label: "② 店内かテラスか", text: "同じ店でもエリアで扱いが違います。**雨の日に犬とどこに座れるか**を具体的に聞きます。" },
        { label: "③ カート・キャリーの要否", text: "必要なら持って行く必要があります。混雑時だけカートは外置き、という店もあります。" },
        { label: "④ 予約できるか", text: "**茶茶は予約不可**です。予約できない店は開店直後を狙うしかありません。" },
        { label: "⑤ 当日の営業", text: "夏の臨時休業があります。**山田春慶店は8/11まで臨時休業**なので、8/11の夕方までに必ず電話を。" }
      ] },

    { kind: "sources", title: "この記事の出典",
      lead: "犬同伴の条件と営業情報は**2026年8月4日時点**のものです。夏の臨時休業や運用の変更があるので、**訪問前に必ず各店へ確認**してください。",
      items: [
        { label: "飛騨高山旅ガイド 愛犬と一緒に楽しめるスポット", url: "https://www.hidatakayama.or.jp/special/petinfo/" },
        { label: "飛騨高山旅ガイド ペット入店OKのお店特集", url: "https://www.hidatakayama.or.jp/blog/detail_80.html" },
        { label: "サンクチュアリコート高山 愛犬同伴利用規程", url: "https://www.rtg.jp/hotels/sac/takayama/kitei/" },
        { label: "NEXCO中日本 ドッグラン一覧（PDF）", url: "https://sapa.c-nexco.co.jp/Content/storage/pdf/dogrun.pdf" },
        { label: "飛騨高山 2026年夏イベント情報（花火）", url: "https://www.hidatakayama.or.jp/special/detail_268.html" }
      ] }
  ],

  weatherPoint: { lat: 36.1408, lon: 137.2520, label: "飛騨高山（サンクチュアリコート周辺）", tripDate: "2026-08-08" },

  /* === 天気タブの日別アドバイス ===
     ★以前は loadWeather() の中に直書きしていたため、旅程を差し替えても取り残された
       （実際に8/10の文言が古い旅程のまま残った）。DATA に置いて差し替え対象を1か所にまとめる。
     日付ごとに [平常, 猛暑（最高33℃以上）, 雨（降水50%以上または天気コード51以上）] の3パターン。
     本文は **囲むと太字**。生のHTMLは書かない。 */
  weatherAdvice: {
    "2026-08-08": [
      "移動日。到着後の観光は入れず、ホテルへ安全に着くことを最優先に。",
      "SAのドッグランは**路面が熱ければ短時間**に。給水をこまめに。",
      "雷雨なら**SAでの外出を最小限**にし、車内で休ませてから走る。"
    ],
    "2026-08-09": [
      "**飛騨の里は開園直後（8:30）**に入り、1時間45分ほどで切り上げる。",
      "屋外中心なので**11時以降は歩かせない**。大喜の店内席で涼む。",
      "飛騨の里を短縮または中止し、**大喜の昼食だけ**に絞る。"
    ],
    "2026-08-10": [
      "JAは**8:35から交代で**。**光ミュージアムは開館直後（10:00）**に入り、犬の留守番を短くする。",
      "犬を車に長く乗せない。**JAは手早く**済ませ、光ミュージアムの館内で涼む。",
      "**光ミュージアムは雨に強い**。JAとぼくんちへの移動だけ足元に注意する。"
    ],
    "2026-08-11": [
      "**鍾乳洞は約12℃**。薄手の上着を忘れずに。市街地のイベント混雑は避ける。",
      "鍾乳洞は暑さに強い。**茶茶はテラスを避けて蔵太**を狙う。",
      "鍾乳洞は実施可だが**足元が滑る**。茶茶は蔵太のみ。雷なら中止しホテルへ。"
    ],
    "2026-08-12": [
      "山田春慶店（前日と当日朝に営業確認）→出発。SAで犬をしっかり休ませる。",
      "出発を早め、**SAの滞在は日陰で短く**。",
      "山田春慶店だけ寄って移動。**路面状況を確認**してから高速へ。"
    ]
  }
};

/* ---------- ユーティリティ ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
// **囲むと太字** だけ使える軽量記法。先にエスケープしてから変換するので、
// 生の < > を打たれても壊れない／XSSにもならない。esc() を通す表示はすべてこれを使う。
const mdBold = (s) => esc(s).replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
const mapsUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
// place_id があれば検索結果ではなく「その地点そのもの」を開く（同名店の取り違えを防ぐ）
const placeMapsUrl = (p) => mapsUrl(p.maps || p.name) +
  (p.gmapsPlaceId ? "&query_place_id=" + encodeURIComponent(p.gmapsPlaceId) : "");
// 食べログURLは links から引く（DATAに二重で持たせない＝食い違いが起きない）
const tabelogUrl = (p) => ((p.links || []).find(l => /食べログ|tabelog/i.test(l.label)) || {}).url || null;

/* 全場所をフラットに（type 付き） */
function allPlaces() {
  return [
    ...DATA.spots.map(p => ({ ...p, type: "spot" })),
    ...DATA.restaurants.map(p => ({ ...p, type: "restaurant" })),
    ...DATA.cafes.map(p => ({ ...p, type: "cafe" }))
  ];
}
const placeId = (type, name) => `${type}:${name}`;
function getPlaceById(id) {
  const i = id.indexOf(":");
  const type = id.slice(0, i), name = id.slice(i + 1);
  return allPlaces().find(p => p.type === type && p.name === name) || null;
}
// 名前から placeId を逆引き（スケジュール項目とカードの紐付け用。名前は一意）
function placeIdByName(name) {
  const p = allPlaces().find(x => x.name === name);
  return p ? placeId(p.type, p.name) : null;
}

/* =========================================================================
   確定/未確定ステート（全タブ共有・localStorage）
   スケジュール・カード・マップが同じ状態を参照し、どのタブで変えても全タブに反映する。
   「共有用に書き出す」で STATUS_DEFAULT に貼り替え＋STATUS_VERSION を +1 すれば全員反映。
   ========================================================================= */
const STATUS_KEY = "takayama-trip-status";
const STATUS_VERSION = 1;   // STATUS_DEFAULT を更新したら必ず +1 する
// 全員に配る初期状態。空なら DATA の category から生成（confirmed→確定 / それ以外→未確定）。
const STATUS_DEFAULT = {};
function baseStatusMap() {
  const o = {};
  allPlaces().forEach(p => { o[placeId(p.type, p.name)] = p.category === "confirmed" ? "confirmed" : "tentative"; });
  return { ...o, ...STATUS_DEFAULT };
}
function loadStatusMap() {
  try {
    const raw = JSON.parse(localStorage.getItem(STATUS_KEY));
    if (raw && raw.v === STATUS_VERSION && raw.map) return { ...baseStatusMap(), ...raw.map };
  } catch (e) {}
  return baseStatusMap();
}
let statusMap = loadStatusMap();
function saveStatusMap() { localStorage.setItem(STATUS_KEY, JSON.stringify({ v: STATUS_VERSION, map: statusMap })); fbPush("status", statusToArray()); }
function getStatus(id) { return statusMap[id] === "confirmed" ? "confirmed" : "tentative"; }
function setStatus(id, s) { statusMap[id] = (s === "confirmed" ? "confirmed" : "tentative"); saveStatusMap(); rerenderStatus(); }
function toggleStatus(id) { setStatus(id, getStatus(id) === "confirmed" ? "tentative" : "confirmed"); }
const STATUS_LABEL = { confirmed: "確定", tentative: "未確定" };
// status に依存する全ビューを再描画（カード・マップのピン・スケジュール）
function rerenderStatus() {
  renderAllCards();
  if (typeof map !== "undefined" && map) refreshMarkers();
  if ($("#sched-list")) renderScheduleEditor();
}
/* ===== カードの絞り込み・並び替え（スポット／レストラン／カフェ共通） =====
   絞り込みは「列」を単位にする。列どうしは AND、列の中のチップは OR。
   例) 種類＝屋内・展示 × 犬＝抱っこ → 抱っこで入れる屋内施設だけが残る。
   ★状態は cardView（メモリ）だけに持つ。localStorage にも Firebase にも保存しない
     ＝見る人ごとの一時的な操作であって、同行者の画面まで絞り込まれると事故になる（追補H-9）。 */

// 表示用の genre は店ごとに細かいので、絞り込みはこの粗い区分（genreKey）で行う
const GENRE_GROUPS = [
  ["hida",    "🥩 飛騨牛・郷土料理"],
  ["western", "🍳 洋食・バーガー"],
  ["jinenjo", "🍚 自然薯・とろろ"],
  ["cafe",    "☕ カフェ・喫茶"],
  ["sweets",  "🍡 甘味・だんご"],
];
// スポットの種類（spotKey）。1地点1区分の排他。
const SPOT_GROUPS = [
  ["nature",   "🌲 屋外・自然"],
  ["museum",   "🏛 屋内・展示"],
  ["shop",     "🛍 買い物・工芸"],
  ["sapa",     "🅿️ SA・PA"],
  ["landmark", "📍 ランドマーク"],
];
// 犬の条件（dogKey）。スポットでも店でも同じ語彙を使い回す。
// ★「種類」とは別の列にするのが要点。飛騨の里は屋外・自然でもあり犬OKでもあるので、
//   1つの列に混ぜると片方で絞ったときにもう片方から消えてしまう。
const DOG_GROUPS = [
  ["indoor",  "🐾 屋内も一緒に"],
  ["outdoor", "🌿 屋外・テラスのみ"],
  ["carry",   "🧺 抱っこ・カート・キャリー"],
  ["ng",      "⚠️ 不可・要確認"],
];
// 列の定義。CARD_TABS の filters から参照する
const FILTER_GROUPS = {
  genre: { label: "ジャンル", field: "genreKey", groups: GENRE_GROUPS },
  spot:  { label: "種類",     field: "spotKey",  groups: SPOT_GROUPS },
  dog:   { label: "犬",       field: "dogKey",   groups: DOG_GROUPS },
};
const CARD_SORTS = [
  ["default", "おすすめ順"],
  ["total",   "合計点数の高い順（食べログ＋Google）"],
  ["tabelog", "食べログ点数の高い順"],
  ["google",  "Google点数の高い順"],
];
// スポットには食べログ点数が無いので、店とは別の選択肢にする
const SPOT_SORTS = [
  ["default", "おすすめ順"],
  ["google",  "Google点数の高い順"],
  ["reviews", "口コミの多い順"],
];
// タブを増やすならここに1行足すだけ。filters は FILTER_GROUPS のキーの配列
const CARD_TABS = {
  spots: {
    target: "#cards-spots", tools: "#tools-spots", table: "#table-spots", type: "spot",
    label: "スポット",
    filters: ["spot", "dog"], sorts: SPOT_SORTS, unit: "か所",
    empty: "条件に合う場所がありません。「すべて表示」で戻せます。",
    items: () => DATA.spots,
  },
  restaurants: {
    target: "#cards-restaurants", tools: "#tools-restaurants", table: "#table-restaurants", type: "restaurant",
    label: "レストラン",
    filters: ["genre", "dog"], sorts: CARD_SORTS, unit: "店",
    empty: "条件に合う店がありません。「すべて表示」で戻せます。",
    items: () => DATA.restaurants,
  },
  cafes: {
    target: "#cards-cafes", tools: "#tools-cafes", table: "#table-cafes", type: "cafe",
    label: "カフェ",
    filters: ["genre", "dog"], sorts: CARD_SORTS, unit: "店",
    empty: "条件に合う店がありません。「すべて表示」で戻せます。",
    items: () => DATA.cafes,
  },
};

/* ===== マップのフィルタ列 =====
   ★値もラベルも、すべてここから作る。index.html には1つも書かない。
     犬のラベルは DOG_GROUPS、日付は TRIP_DAYS が唯一の出どころなので、
     旅行を差し替えるときに index.html を触る必要がない（0-1・追補K-5）。 */
// 「状態」列。CAT_LABELS（確定/予備/要確認）はカードのバッジ用で語彙が違うので使わない
const STATUS_GROUPS = [["confirmed", "確定"], ["tentative", "未確定"]];
// off: true = 初期状態でチェックを入れない（「ルート内のみ」だけ）
const MAP_FILTER_COLUMNS = [
  { group: "day",    label: "日",
    chips: () => TRIP_DAYS.map(d => [d.key, d.label.replace(/（.*?）/, "")]) },
  { group: "type",   label: "種類",
    chips: () => Object.values(CARD_TABS).map(t => [t.type, `${TYPE_ICONS[t.type]} ${t.label}`]) },
  { group: "dog",    label: "犬",
    chips: () => groupsPresentIn(allPlaces(), "dog").map(([k, l]) => [k, l]) },
  { group: "status", label: "状態",   chips: () => STATUS_GROUPS },
  { group: "route",  label: "ルート", chips: () => [["route-only", "ルート内のみ"]], off: true },
];
// sets[列ID] が未設定 = 未初期化（初回に全選択にする）
// open: 一覧表の開閉。★localStorage にも Firebase にも保存しない（見る人ごとの表示状態。追補H-9）
//       ただし renderCardTab() は絞り込み・確定トグル・Firebase受信のたびに走るので、
//       ここに控えておかないとチップを押すたびに表が勝手に閉じる。
const cardView = {
  spots:       { sets: {}, sort: "default", open: false },
  restaurants: { sets: {}, sort: "default", open: false },
  cafes:       { sets: {}, sort: "default", open: false },
};

const numOr = (v) => { const n = parseFloat(v); return isNaN(n) ? null : n; };
// 合計は「片方しか無い店」も比較できるよう、欠けている側を0として足す（＝下に沈む）
function cardScore(p, kind) {
  const t = numOr(p.ratings && p.ratings.tabelog);
  const g = numOr(p.ratings && p.ratings.google);
  if (kind === "tabelog") return t;
  if (kind === "google")  return g;
  if (kind === "reviews") return numOr(p.ratings && p.ratings.googleReviews);
  if (kind === "total")   return (t == null && g == null) ? null : (t || 0) + (g || 0);
  return null;
}
/* その地点が属する区分。キーの付け忘れは "other" になり、どの区分にも含まれないので
   静かに一覧から消える（追補D-2c）。tools/test_cardtools.js の「キー欠落の検出」で拾う。 */
function groupKeyOf(p, gid) { return p[FILTER_GROUPS[gid].field] || "other"; }

function viewedItems(key) {
  const v = cardView[key], t = CARD_TABS[key], all = t.items();
  // 列どうしは AND、列の中は OR。未初期化の列は素通しする
  const list = all.filter(p => t.filters.every(gid => {
    const set = v.sets[gid];
    return !set || set.has(groupKeyOf(p, gid));
  }));
  if (v.sort === "default") return list;
  // 元の並びを保った安定ソート。点数が無い店は末尾へ
  return list.map((p, i) => ({ p, i })).sort((a, b) => {
    const sa = cardScore(a.p, v.sort), sb = cardScore(b.p, v.sort);
    if (sa == null && sb == null) return a.i - b.i;
    if (sa == null) return 1;
    if (sb == null) return -1;
    return (sb - sa) || (a.i - b.i);
  }).map(x => x.p);
}

/* 渡した地点の中に実在する区分だけを [キー, ラベル, 件数] で返す（0件の区分はチップを出さない）。
   ★カードは1タブぶん、マップは allPlaces()（全タブ）を渡す。絞り込みの語彙を二重に持たないため、
     どちらもこの1本を通す。 */
function groupsPresentIn(items, gid) {
  return FILTER_GROUPS[gid].groups
    .map(([k, label]) => [k, label, items.filter(p => groupKeyOf(p, gid) === k).length])
    .filter(x => x[2] > 0);
}
function presentGroups(key, gid) { return groupsPresentIn(CARD_TABS[key].items(), gid); }
/* 全列を全選択に戻す（初期化と「すべて表示」で共用） */
function resetCardFilters(key) {
  const v = cardView[key];
  CARD_TABS[key].filters.forEach(gid => { v.sets[gid] = new Set(presentGroups(key, gid).map(x => x[0])); });
}

function renderCardTools(key) {
  const t = CARD_TABS[key];
  const el = $(t.tools); if (!el) return;
  const all = t.items();
  const v = cardView[key];

  // 列ごとにチップを作る。data-fgroup でどの列のチップかを持たせる（値の重複に依存しない）
  // ★チップは必ず .chip-row で包む。2列グリッドの右カラムに収まるので、
  //   何行に折り返してもラベルの下に回り込まない（ゾーンの境目が見えなくなる原因だった）
  const rows = t.filters.map(gid => {
    const present = presentGroups(key, gid);
    if (!v.sets[gid]) v.sets[gid] = new Set(present.map(x => x[0]));
    const set = v.sets[gid];
    const chips = present.map(([k, label, n]) =>
      `<label class="chip"><input type="checkbox" data-fgroup="${gid}" value="${k}" ${set.has(k) ? "checked" : ""}> ${label}<span class="chip-n">${n}</span></label>`).join("");
    return `<div class="filter-group" data-fgroup="${gid}">
      <span class="filter-label">${esc(FILTER_GROUPS[gid].label)}</span>
      <div class="chip-row">${chips}</div>
    </div>`;
  }).join("");

  const opts = t.sorts.map(([k, l]) => `<option value="${k}"${v.sort === k ? " selected" : ""}>${esc(l)}</option>`).join("");
  const shown = viewedItems(key).length;
  // 「すべて表示」と件数は全ゾーンにかかる操作なので、ゾーンの外＝見出し行に置く
  el.innerHTML = `
    <div class="tools-head">
      <span class="tools-title">絞り込み</span>
      <span class="muted card-tool-count">${shown} / ${all.length}${t.unit}</span>
      <button class="btn-ghost card-tool-all">すべて表示</button>
    </div>` + rows + `
    <div class="filter-group">
      <span class="filter-label">並び替え</span>
      <div class="chip-row">
        <select class="card-tool-sort" aria-label="並び替え">${opts}</select>
      </div>
    </div>`;

  $$(t.tools + " input[type=checkbox]").forEach(i => i.addEventListener("change", e => {
    const gid = e.currentTarget.dataset.fgroup;
    const set = cardView[key].sets[gid], val = e.currentTarget.value;
    e.currentTarget.checked ? set.add(val) : set.delete(val);
    renderCardTab(key);
  }));
  // 「すべて表示」は絞り込みと並び替えの両方を初期化する（片方だけ戻ると迷子になる）
  $(t.tools + " .card-tool-all").addEventListener("click", () => {
    resetCardFilters(key);
    cardView[key].sort = "default";
    renderCardTab(key);
  });
  $(t.tools + " .card-tool-sort").addEventListener("change", e => {
    cardView[key].sort = e.currentTarget.value;
    renderCardTab(key);
  });
}

/* ===== 一覧表（各タブのカードの上に置く折りたたみ式の索引） =====
   ★行は viewedItems() をそのまま描く。絞り込み条件を二重に実装しないので、
     地点を足せば行も増え、チップを押せば表も追随する。 */
// 表の点数欄。狭いので口コミ件数は出さない。数値は p.ratings から引く（書き写さない）
function tableScore(p) {
  const r = p.ratings || {}, out = [];
  if (r.tabelog) out.push(`<span class="ct-tabelog">🍴${esc(r.tabelog)}</span>`);
  if (r.google)  out.push(`<span class="ct-google">⭐${esc(r.google)}</span>`);
  return out.length ? out.join(" ") : `<span class="muted">—</span>`;
}
/* 行 → その地点のカードへ移動。
   地点idは "spot:飛騨の里" のように : と日本語を含むので、CSSセレクタではなく
   data 属性の突き合わせで引く（エスケープ事故を避ける）。 */
function gotoPlaceCard(key, id) {
  const card = $$(CARD_TABS[key].target + " .card").find(c => c.dataset.place === id);
  if (!card) return;   // 表とカードは同じ viewedItems から作るので通常ここには来ない
  card.scrollIntoView({ behavior: "smooth", block: "start" });
  // 連続でタップしてもハイライトが再生されるよう、一度外してリフローを挟む
  card.classList.remove("just-jumped");
  void card.offsetWidth;
  card.classList.add("just-jumped");
}
function renderCardTable(key) {
  const t = CARD_TABS[key];
  const box = $(t.table); if (!box) return;
  const list = viewedItems(key), v = cardView[key];
  // ★viewedItems() が返すのは DATA の生オブジェクトで type を持たない
  //   （type は renderCards() が {...p, type} で足している）。
  //   ここで p.type を使うと data-goto が "undefined:飛騨の里" になり、
  //   飛び先が静かに切れる。タブ定義の t.type を使うこと。
  const rows = list.map(p => {
    const id = placeId(t.type, p.name);
    return `<tr class="ct-row" data-goto="${esc(id)}" tabindex="0" role="button" title="${esc(p.name)}の詳細へ移動">
      <td class="ct-name">${TYPE_ICONS[t.type]} ${esc(p.name)}</td>
      <td class="ct-dog">${dogChip(p)}</td>
      <td class="ct-score">${tableScore(p)}</td>
    </tr>`;
  }).join("");
  box.innerHTML = `<details class="ct-details"${v.open ? " open" : ""}>
    <summary class="ct-summary">一覧で見る<span class="ct-n">${list.length}${esc(t.unit)}</span></summary>
    <div class="ct-wrap">
      <table class="ct">
        <thead><tr><th>名前</th><th>犬</th><th>点数</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="3" class="muted">${esc(t.empty)}</td></tr>`}</tbody>
      </table>
    </div>
  </details>`;

  // 開閉を控える（再描画で閉じてしまわないように）
  $(t.table + " .ct-details").addEventListener("toggle", e => { cardView[key].open = e.currentTarget.open; });
  // 行をタップ／Enter でカードへ移動
  $$(t.table + " .ct-row").forEach(tr => {
    const go = () => gotoPlaceCard(key, tr.dataset.goto);
    tr.addEventListener("click", go);
    tr.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
    });
  });
}

function renderCardTab(key) {
  renderCardTools(key);
  renderCardTable(key);
  const t = CARD_TABS[key], list = viewedItems(key);
  const box = $(t.target); if (!box) return;
  if (list.length) renderCards(t.target, list, t.type);
  else box.innerHTML = `<p class="muted">${esc(t.empty)}</p>`;
}

/* ★カード再描画の唯一の入口。個別に renderCards() を呼ぶとツールバーを通らず、
   器はあるのに中身が空になる（追補F-11でいちばん時間を溶かした落とし穴）。 */
function renderAllCards() {
  Object.keys(CARD_TABS).forEach(renderCardTab);
}

/* =========================================================================
   カードレンダリング
   ========================================================================= */
function renderImageBlock(p) {
  const imgs = p.images || [];
  if (!imgs.length) return `<div class="card-imgwrap"><div class="card-noimg">${TYPE_ICONS[p.type] || "🖼"}</div>${catRibbon(p)}</div>`;
  const data = esc(JSON.stringify(imgs));
  const main = `<button class="card-img-btn" data-images='${data}' data-index="0" aria-label="拡大">
      <img class="card-img" src="${esc(imgs[0])}" alt="${esc(p.name)}" loading="lazy"></button>`;
  let thumbs = "";
  if (imgs.length > 1) {
    thumbs = `<div class="card-thumbs">` + imgs.slice(1, 4).map((src, k) =>
      `<button class="thumb-btn" data-images='${data}' data-index="${k + 1}" aria-label="拡大"><img class="thumb" src="${esc(src)}" alt="" loading="lazy"></button>`
    ).join("") + `</div>`;
  }
  return `<div class="card-imgwrap">${main}${catRibbon(p)}</div>${thumbs}`;
}
function catRibbon(p) {
  const id = placeId(p.type, p.name);
  const st = getStatus(id);
  return `<button type="button" class="cat-ribbon status-${st}" data-status-toggle="${esc(id)}" title="タップで確定／未確定を切替">${STATUS_LABEL[st]}</button>`;
}
function ratingChips(p) {
  if (!p.ratings) return "";
  const r = p.ratings, chips = [];
  const rev = (n) => n ? `（${esc(n)}件）` : "";
  // 点数チップはタップで出典へ飛ぶ。食べログは links の食べログURL、Googleは place_id 付きマップURL。
  // URLが無い地点は <span> のまま（リンク切れを作らない）。
  const chip = (cls, label, url) => url
    ? `<a class="rating-chip ${cls} is-link" href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`
    : `<span class="rating-chip ${cls}">${label}</span>`;
  // 飲食店は食べログ・Googleの両点数を件数つきで併記（§8-2）。google は Places API で取得。
  if (r.tabelog) chips.push(chip("tabelog", `🍴 食べログ ${esc(r.tabelog)}${rev(r.tabelogReviews || r.reviews)}`, tabelogUrl(p)));
  if (r.google)  chips.push(chip("google",  `⭐ Google ${esc(r.google)}${rev(r.googleReviews)}`, placeMapsUrl(p)));
  return chips.length ? `<div class="ratings">${chips.join("")}</div>` : "";
}
function linkPills(p) {
  const pills = [`<a class="pill maps" href="${placeMapsUrl(p)}" target="_blank" rel="noopener">📍 Googleマップ</a>`];
  (p.links || []).forEach(l => {
    const cls = /食べログ|tabelog/i.test(l.label) ? "pill tabelog" : "pill";
    const icon = /食べログ/.test(l.label) ? "🍴" : "🔗";
    pills.push(`<a class="${cls}" href="${esc(l.url)}" target="_blank" rel="noopener">${icon} ${esc(l.label)}</a>`);
  });
  pills.push(`<button class="pill add-route" data-add="${esc(placeId(p.type, p.name))}">＋ ルートに追加</button>`);
  return `<div class="card-links">${pills.join("")}</div>`;
}
function renderCard(p) {
  const badges = (p.badges || []).map(b => `<span class="badge ${esc(b.cls)}">${esc(b.text)}</span>`).join("");
  const meta = (p.meta || []).map(m => `<li><b>${esc(m[0])}</b><span>${mdBold(m[1])}</span></li>`).join("");
  return `<article class="card" data-place="${esc(placeId(p.type, p.name))}">
    ${renderImageBlock(p)}
    <div class="card-body">
      <h3 class="card-title">${esc(p.name)}</h3>
      <div class="card-sub">
        ${p.genre ? `<span class="genre-chip">${esc(p.genre)}</span>` : ""}
        <span class="card-area">${esc(p.area)}</span>
      </div>
      ${badges ? `<div class="badges">${badges}</div>` : ""}
      ${ratingChips(p)}
      <p class="card-desc">${esc(p.desc)}</p>
      ${meta ? `<ul class="card-meta">${meta}</ul>` : ""}
      ${p.notes ? `<div class="card-notes">${p.notes}</div>` : ""}
      ${linkPills(p)}
    </div>
  </article>`;
}
function renderCards(targetId, items, type) {
  $(targetId).innerHTML = items.map(p => renderCard({ ...p, type })).join("");
}

/* =========================================================================
   スケジュール / ルート / 持ち物 / 注意
   ========================================================================= */
/* =========================================================================
   スケジュールの「読む」表示（②形式）

   ★本命プラン（schedule）と予備プラン（plans[].items）は同じ形の行を持つので、
     描画はこの1本だけ。二重に実装しない（0-1）。
     行の形 = { day, time, end, text, status, ref }
   ========================================================================= */

/* 行を日ごとにまとめる（TRIP_DAYS の順。day を持たない行は初日に寄せる） */
function rowsByDay(rows) {
  const m = new Map();
  rows.forEach(it => {
    const d = normalizeDay(it.day);
    if (!m.has(d)) m.set(d, []);
    m.get(d).push(it);
  });
  return DAY_KEYS.filter(d => m.has(d)).map(d => ({ day: d, rows: m.get(d) }));
}

/* 1行ぶんの「読む」表示。★表示専用。入力欄もトグルも出さない（誤タップ対策）。 */
function scheduleRowReadHtml(it) {
  // 確定状態は ref があれば全タブ共有のものを引く（プラン内の文字列ではなく“いまの本物”）
  const st = it.ref ? getStatus(it.ref) : (it.status === "confirmed" ? "confirmed" : "tentative");
  const time = it.time || "—";
  const when = it.end ? `${esc(time)}<span class="tl-end">〜${esc(it.end)}</span>` : esc(time);
  /* ★紐づいている地点は名前を出す。本文からは読み取れないことが多いため
     （例:「彦根 到着見込み」→ 彦根城 / 「八尾を出発」→ 近鉄八尾駅）。
     この ref がマップのピン順を決めているので、見えないと確認できない。
     リンクは地点チップだけにする（本文にも張ると1行にリンクが2つになる）。 */
  /* 地点チップは行き先が2つある。押し分けられるよう1つのピルを区切って並べる。
     ・地点名 → その地点のカード（写真・営業時間・点数・犬の条件）
     ・🗺    → Googleマップのその場所のページ（ナビはユーザーがそこで開始する）
     URLは placeMapsUrl() を使い回す（カードの「📍 Googleマップ」やマップのピンと同じもの）。 */
  const p = it.ref ? getPlaceById(it.ref) : null;
  const place = p
    ? `<span class="tl-links">
        <a class="tl-place" href="#" data-goto-ref="${esc(it.ref)}"
           title="${esc(p.name)}のカードを見る">${TYPE_ICONS[p.type] || "📍"} ${esc(p.name)}</a>
        <a class="tl-maps" href="${placeMapsUrl(p)}" target="_blank" rel="noopener"
           title="Googleマップで開く" aria-label="${esc(p.name)}をGoogleマップで開く">🗺</a>
      </span>`
    : "";
  return `<li>
      <span class="tl-time">${when}</span>
      <span class="tl-body">${esc(it.text || "")}<span class="st-chip ${st}">${st === "confirmed" ? "確定" : "未確定"}</span>${place}</span>
    </li>`;
}

/* 行の集まりを日ごとのカードで描く。opts.editable=true なら日ごとに「編集」ボタンを出す。 */
function scheduleCardsHtml(rows, opts = {}) {
  const groups = rowsByDay(rows);
  if (!groups.length) return `<p class="muted">予定がありません。</p>`;
  return groups.map(g => {
    const edit = opts.editable
      ? `<button class="plan-edit" data-edit-day="${esc(g.day)}">編集</button>` : "";
    return `<div class="plan-card featured" data-day="${esc(g.day)}">
      <div class="plan-head"><h3>${esc(dayLabel(g.day))}</h3>
        <span class="tag top">${g.rows.length}件</span>${edit}</div>
      ${daySub(g.day) ? `<p class="plan-route">${esc(daySub(g.day))}</p>` : ""}
      <ol class="timeline">${g.rows.map(scheduleRowReadHtml).join("")}</ol>
    </div>`;
  }).join("");
}

/* ---- 本命プラン（= schedule そのもの） ---- */
function renderMasterPlan() {
  const box = $("#master-plan"); if (!box) return;
  /* ★編集モード中は出さない。理由は2つある。
     ・編集セクションの入力ハンドラは saveSchedule() しか呼ばない（カーソルとIME変換を
       飛ばさないため、入力のたびに再描画しない）。出したままだと本命の表示だけが取り残され、
       他端末は applyRemote で更新されるのに「編集している本人だけが古い表示を見る」ことになる
     ・隠せば、編集の操作を足すたびに renderMasterPlan() を呼ぶことを覚えておかずに済む（0-3）
     見る人ごとの表示状態なので、同行者の画面は隠れない（追補H-9）。
     隠すことで「編集を終える」がタブの先頭に来るので、編集モードの出口も分かりやすくなる。 */
  if (schedEditing) { box.innerHTML = ""; return; }
  box.innerHTML = `
    <div class="plan-section-head">
      <h3 class="sched-subhead">本命プラン</h3>
      <span class="muted">全員で共有している旅程です。変更は同行者にもすぐ反映されます</span>
    </div>
    <div class="plan-list">${scheduleCardsHtml(schedule, { editable: true })}</div>
    <div class="plan-list-tools">
      <button class="btn-ghost" id="plan-edit-all">全体を編集</button>
      <button class="btn-ghost" id="plan-backup">予備プランへ書き出す</button>
      <button class="btn-ghost" id="sched-export">共有用に書き出す</button>
    </div>`;
  $$("#master-plan .plan-edit").forEach(b =>
    b.addEventListener("click", () => openSchedEditor(b.dataset.editDay)));
  $("#plan-edit-all").addEventListener("click", () => openSchedEditor("all"));
  $("#plan-backup").addEventListener("click", exportScheduleAsBackup);
  $("#sched-export").addEventListener("click", exportSchedule);
  // 地点チップ（.tl-place）のクリックは init() の委任で拾う。本命プランと予備プランの
  // 両方が同じ行の描画関数を使うので、描くたびに配線しない
}

/* 予定行の ref から、その地点のカードタブへ移動して光らせる */
function gotoRefCard(ref) {
  const type = String(ref).split(":")[0];
  const tabOf = { spot: "spots", restaurant: "restaurants", cafe: "cafes" }[type];
  if (!tabOf) return;
  const tab = $$("#tabs .tab").find(t => t.dataset.tab === tabOf);
  if (tab) tab.click();
  setTimeout(() => gotoPlaceCard(tabOf, ref), 60);
}

/* ---- 予備プラン（本命から書き出した控え。ユーザー間で同期する） ---- */
function renderBackupPlans() {
  const box = $("#backup-plans"); if (!box) return;
  const rank = k => { const i = planView.order.indexOf(k); return i < 0 ? Infinity : i; };
  const list = plans.slice().map((p, i) => ({ p, i }))
    .sort((a, b) => (rank("u:" + a.p.id) - rank("u:" + b.p.id)) || (a.i - b.i)).map(x => x.p);
  const cards = list.map(p => `
    <details class="backup-plan" data-id="${p.id}">
      <summary><span class="bp-title">${esc(p.title)}</span>
        <span class="tag alt">${(p.items || []).length}件</span></summary>
      <div class="plan-actions">
        <button class="bp-restore" data-id="${p.id}">本命へ上書き</button>
        <button class="bp-copy" data-id="${p.id}">コピー</button>
        <button class="bp-del" data-id="${p.id}" aria-label="この予備プランを削除">削除</button>
      </div>
      <div class="plan-list">${scheduleCardsHtml(p.items || [])}</div>
    </details>`).join("");
  box.innerHTML = `
    <div class="plan-section-head">
      <h3 class="sched-subhead">予備プラン</h3>
      <span class="muted">本命プランの控え。同行者にも共有されます</span>
    </div>
    ${cards || '<p class="muted">まだありません。本命プランの「予備プランへ書き出す」で控えを残せます。</p>'}`;
  $$("#backup-plans .bp-restore").forEach(b => b.addEventListener("click", () => restoreBackupPlan(+b.dataset.id)));
  $$("#backup-plans .bp-copy").forEach(b => b.addEventListener("click", () => copyBackupPlan(+b.dataset.id, b)));
  $$("#backup-plans .bp-del").forEach(b => b.addEventListener("click", () => deleteBackupPlan(+b.dataset.id)));
}

/* 現在の本命プランを予備プランへ複製する。
   ★日で絞るのは「編集セクションを開いてその日を見ているとき」だけ。
     schedDayView は編集を閉じても最後の日が残るので、これを条件にすると
     全体を控えたつもりが1日ぶんだけ書き出される（静かに間違う）。 */
function exportScheduleAsBackup() {
  const scope = (schedEditing && schedEditing !== "all") ? schedEditing : null;
  const src = scope ? schedule.filter(it => normalizeDay(it.day) === scope) : schedule;
  if (!src.length) { window.alert("本命プランが空です。先に予定を入れてください。"); return; }
  const def = scope ? `${dayLabel(scope)} の控え` : `本命の控え ${plans.length + 1}`;
  const title = (window.prompt("予備プランの名前を入力してください:", def) || "").trim();
  if (!title) return;
  const id = plans.reduce((m, p) => Math.max(m, p.id || 0), 0) + 1;
  // ★行をそのまま複製する（ref・day・end を落とさない。落とすと上書き時に連動が壊れる）
  plans.push({ id, title, items: JSON.parse(JSON.stringify(src)) });
  savePlans();
  renderBackupPlans();
  window.alert(`「${title}」を予備プランに残しました。`);
}

/* 予備プランで本命プランを置き換える（★破壊的。同行者の画面にも即反映される） */
function restoreBackupPlan(id) {
  const p = plans.find(x => x.id === id); if (!p) return;
  if (!window.confirm(
      `「${p.title}」で本命プランを置き換えます。\n\n`
    + `現在の本命プラン（${schedule.length}件）は失われます。\n`
    + `同行者の画面にもすぐ反映されます。よろしいですか？`)) return;
  schedule = JSON.parse(JSON.stringify(p.items || []));
  saveSchedule();
  syncRouteFromSchedule();
  rerenderAll();
  window.alert(`本命プランを「${p.title}」に置き換えました。`);
}

function deleteBackupPlan(id) {
  const p = plans.find(x => x.id === id); if (!p) return;
  if (!window.confirm(`予備プラン「${p.title}」を削除しますか？（同行者の画面からも消えます）`)) return;
  plans = plans.filter(x => x.id !== id);
  planView.order = planView.order.filter(k => k !== "u:" + id);
  savePlanView();
  savePlans();
  renderBackupPlans();
}

/* 予備プランをテキストでコピー（LINE等に貼れる形式） */
function copyBackupPlan(id, btn) {
  const p = plans.find(x => x.id === id); if (!p) return;
  const text = `【${p.title}】\n` + rowsByDay(p.items || []).map(g =>
    `■ ${dayLabel(g.day)}\n` + g.rows.map(it => {
      const st = it.ref ? getStatus(it.ref) : (it.status === "confirmed" ? "confirmed" : "tentative");
      return `${it.time || "—"}${it.end ? "〜" + it.end : ""}  ${it.text || ""}（${st === "confirmed" ? "確定" : "未確定"}）`;
    }).join("\n")).join("\n\n");
  const done = () => { if (btn) { const o = btn.textContent; btn.textContent = "コピー済"; setTimeout(() => { btn.textContent = o; }, 1200); } };
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => window.prompt("コピーしてください:", text));
  else window.prompt("コピーしてください:", text);
}

/* 当日の調整方針（DATA.branches） */
function renderSchedule() {
  renderMasterPlan();
  renderSchedEditorSection();
  renderBackupPlans();
  const box = $("#schedule-content"); if (!box) return;
  box.innerHTML = `<div class="branch-grid">${DATA.branches.map(b =>
    `<div class="branch ${esc(b.cls)}"><h4>${esc(b.title)}</h4><p>${esc(b.text)}</p></div>`).join("")}</div>`;
}

/* ---- 予備プラン（共有）と表示状態（この端末に保存） ---- */
const PLANS_KEY = "takayama-trip-plans";
const PLANS_VERSION = 1;
const PLANVIEW_KEY = "takayama-trip-planview";
function loadPlans() {
  try { const s = JSON.parse(localStorage.getItem(PLANS_KEY)); if (s && Array.isArray(s.items)) return s.items; } catch (e) {}
  return [];
}
function savePlans() { localStorage.setItem(PLANS_KEY, JSON.stringify({ v: PLANS_VERSION, items: plans })); fbPush("plans", plans); }
/* 予備プランの並び順だけ端末に持つ（見る人ごとの表示状態。同期しない。追補H-9） */
function loadPlanView() {
  try { const s = JSON.parse(localStorage.getItem(PLANVIEW_KEY)); if (s && typeof s === "object") return { order: Array.isArray(s.order) ? s.order : [] }; } catch (e) {}
  return { order: [] };
}
function savePlanView() { localStorage.setItem(PLANVIEW_KEY, JSON.stringify(planView)); }
let plans = loadPlans();
let planView = loadPlanView();

/* ---- 編集できるスケジュール（ドラッグ並び替え・時刻入力・確定切替・localStorage保存） ----
   ★共有の初期表示（A仕様）: 下の SCHED_DEFAULT が「全員に配られる初期スケジュール」。
     並びを確定したら「共有用に書き出す」ボタンの出力を SCHED_DEFAULT に貼り替え、
     必ず SCHED_VERSION を +1 して commit すること。
     → 各端末は保存済みバージョンが古いと自動で新しい初期表示に更新される。

   ★4泊5日対応（この旅行で追加）: 各行が day（YYYY-MM-DD）を持つ。
     schedule は全日ぶんを1本の配列で保持し、
       ・「全体」サブタブ … 日付見出し行を挟んで全件を表示
       ・日別サブタブ    … その日の行だけを表示
     と描き分ける。データが1本なので、どちらで編集しても即座に他方へ反映される。
     全体タブで行を別の日の見出しの下へドラッグすると、その行の day が入れ替わる。 */
const SCHED_KEY = "takayama-trip-schedule";
const SCHED_VERSION = 2;   // SCHED_DEFAULT を更新したら必ず +1 する

/* この旅行の日付（8/13は旅程に含まれない）。key は day の値、label はサブタブと見出しの表記 */
const TRIP_DAYS = [
  { key: "2026-08-08", label: "8/8（土）", sub: "13時以降に八尾発・移動だけ" },
  { key: "2026-08-09", label: "8/9（日）", sub: "飛騨の里 ＋ 大喜" },
  { key: "2026-08-10", label: "8/10（月）", sub: "JA・光ミュージアム・ぼくんち" },
  { key: "2026-08-11", label: "8/11（火・祝）", sub: "飛騨大鍾乳洞 ＋ 茶茶" },
  { key: "2026-08-12", label: "8/12（水）", sub: "山田春慶店 → 彦根 → 八尾" },
];
const DAY_KEYS = TRIP_DAYS.map(d => d.key);
const FIRST_DAY = DAY_KEYS[0];
function dayLabel(key) { const d = TRIP_DAYS.find(x => x.key === key); return d ? d.label : key; }
function daySub(key) { const d = TRIP_DAYS.find(x => x.key === key); return d ? d.sub : ""; }
/* 不正・未設定の day は初日に寄せる（古い保存データや手編集への保険） */
function normalizeDay(d) { return DAY_KEYS.includes(d) ? d : FIRST_DAY; }

// ref: 地点カードの placeId（"種別:名前"）。付けるとカード/マップと確定状態・並び順が連動する。
const SCHED_DEFAULT = [
  /* ---- 8/8（土）八尾 → 高山：移動だけの日 ---- */
  { day: "2026-08-08", time: "12:00", text: "八尾で昼食を済ませる（SAでの食事休憩は省き、犬の休憩だけにする）", status: "confirmed" },
  { day: "2026-08-08", time: "13:00", end: "13:30", text: "八尾を出発（13時に近いほどよい。お盆の下り混雑を見込む）", status: "confirmed", ref: "spot:近鉄八尾駅（出発・帰着の目安）" },
  { day: "2026-08-08", time: "15:30", end: "16:30", text: "多賀SA（上り）などで犬の休憩・排泄・給水", status: "tentative", ref: "spot:多賀SA（上り・ドッグラン）" },
  { day: "2026-08-08", time: "17:30", text: "必要なら2回目の排泄・給水休憩（長良川SAを目的地に固定せず、当日の最速ルート優先）", status: "tentative", ref: "spot:長良川SA（下り・ドッグラン）" },
  { day: "2026-08-08", time: "18:30", end: "20:00", text: "サンクチュアリコート高山 到着見込み（犬はキャリーか車内待機。愛犬専用出入口へ）", status: "confirmed", ref: "spot:サンクチュアリコート高山（拠点）" },
  { day: "2026-08-08", time: "20:00", text: "ホテルのイタリアン【固定・渋滞の遅れを見越して開始時刻をホテルに相談】", status: "confirmed" },

  /* ---- 8/9（日）飛騨の里と犬同伴ランチ ---- */
  { day: "2026-08-09", time: "07:30", end: "08:15", text: "ホテル朝食", status: "confirmed" },
  { day: "2026-08-09", time: "08:15", end: "08:30", text: "犬の排泄・給水", status: "confirmed" },
  { day: "2026-08-09", time: "08:30", end: "10:15", text: "飛騨の里（開園直後。合掌造り・池周辺・写真中心で全部は回らない）", status: "confirmed", ref: "spot:飛騨の里" },
  { day: "2026-08-09", time: "10:45", end: "12:00", text: "お食事処 大喜【要予約・犬と店内テーブル席】", status: "tentative", ref: "restaurant:お食事処 大喜" },
  { day: "2026-08-09", time: "12:15", end: "12:30", text: "ホテルへ戻る", status: "confirmed" },
  { day: "2026-08-09", time: "13:00", text: "客室・館内・ドッグランで休憩", status: "confirmed" },
  { day: "2026-08-09", time: "18:30", text: "ホテルの日本料理【固定】", status: "confirmed" },
  { day: "2026-08-09", time: "19:30", text: "手筒花火（宮川・爆音あり）。犬は会場へ連れて行かず、客室で音対策", status: "confirmed" },

  /* ---- 8/10（月）JA と光ミュージアム：必須施設の日 ---- */
  { day: "2026-08-10", time: "07:15", end: "08:00", text: "ホテル朝食", status: "confirmed" },
  { day: "2026-08-10", time: "08:00", end: "08:15", text: "犬の散歩・排泄・給水", status: "confirmed" },
  { day: "2026-08-10", time: "08:20", text: "犬も車に乗せてホテル出発", status: "confirmed" },
  { day: "2026-08-10", time: "08:35", end: "09:05", text: "JA産直市場アグリ高山【同行者の希望】犬は店内不可。1人が犬2匹と待機し途中で交代", status: "confirmed", ref: "spot:JA産直市場 アグリ高山" },
  { day: "2026-08-10", time: "09:05", end: "09:20", text: "ホテルへ戻る", status: "confirmed" },
  { day: "2026-08-10", time: "09:20", end: "09:40", text: "犬の給水・室温調整・ケージ内で待機の準備", status: "confirmed" },
  { day: "2026-08-10", time: "09:40", text: "大人だけでホテル出発【⚠️客室に犬を残す運用はホテルへ要確認。貸出ケージなし】", status: "tentative" },
  { day: "2026-08-10", time: "10:00", end: "12:00", text: "光ミュージアム（大人のみ。開館直後に入り、犬の留守番を短くする）", status: "tentative", ref: "spot:光ミュージアム" },
  { day: "2026-08-10", time: "12:15", text: "ホテルへ戻り、犬を迎える（留守番は約2時間半）", status: "confirmed" },
  { day: "2026-08-10", time: "12:30", end: "13:30", text: "coffee & kitchen ぼくんち【犬と店内・大型犬可。駐車場なし】", status: "tentative", ref: "restaurant:coffee & kitchen ぼくんち" },
  { day: "2026-08-10", time: "14:00", text: "ホテルへ戻る（午後はホテルステイ）", status: "confirmed" },
  { day: "2026-08-10", time: "18:30", text: "ホテルのイタリアン【固定】", status: "confirmed" },

  /* ---- 8/11（火・祝）飛騨大鍾乳洞と自然薯料理 ---- */
  { day: "2026-08-11", time: "07:00", end: "07:45", text: "ホテル朝食", status: "confirmed" },
  { day: "2026-08-11", time: "08:00", text: "ホテル出発（山の日全国大会で高山駅周辺が混むため郊外へ）", status: "confirmed" },
  { day: "2026-08-11", time: "08:30", end: "10:00", text: "飛騨大鍾乳洞（約12℃・上着とすべりにくい靴。カート不可。2匹は別々の大人が担当）", status: "confirmed", ref: "spot:飛騨大鍾乳洞" },
  { day: "2026-08-11", time: "10:30", end: "11:45", text: "じねんのむら茶茶（Garden Café ICHI／蔵太・予約不可。当日朝に犬席の営業を電話確認）", status: "tentative", ref: "restaurant:自然薯 茶茶 じねんのむら 飛騨高山店" },
  { day: "2026-08-11", time: "12:30", text: "ホテルへ戻る（午後はホテルステイ）", status: "confirmed" },
  { day: "2026-08-11", time: "18:30", text: "ホテルの鉄板焼き【固定・同席者が1名増える予定】", status: "confirmed" },
  { day: "2026-08-11", time: "19:30", text: "久々野の花火（〜22:30）。犬の音対策を優先", status: "confirmed" },

  /* ---- 8/12（水）山田春慶店 → 彦根 → 八尾 ---- */
  { day: "2026-08-12", time: "07:30", end: "08:15", text: "ホテル朝食", status: "confirmed" },
  { day: "2026-08-12", time: "08:15", end: "09:00", text: "荷造り・犬の散歩・給水", status: "confirmed" },
  { day: "2026-08-12", time: "09:00", end: "09:20", text: "チェックアウト（犬はキャリーで移動）", status: "confirmed" },
  { day: "2026-08-12", time: "09:20", text: "ホテル出発", status: "confirmed" },
  { day: "2026-08-12", time: "09:40", text: "山田春慶店付近の駐車場へ（専用駐車場なし。屋台会館・松井有料駐車場など徒歩約2分）", status: "confirmed" },
  { day: "2026-08-12", time: "10:00", end: "10:45", text: "山田春慶店【同行者の希望・臨時休業明け初日。前日と当日朝に電話確認。1人が犬2匹と待機】", status: "tentative", ref: "spot:山田春慶店" },
  { day: "2026-08-12", time: "11:00", text: "高山から彦根へ出発（じっくり見た場合でも11:10には出る）", status: "confirmed" },
  { day: "2026-08-12", time: "13:00", end: "13:30", text: "SA・PAで昼食と犬の休憩（ナビの当日案内を優先。遠回りしない）", status: "tentative", ref: "spot:関SA（上り・ドッグラン）" },
  { day: "2026-08-12", time: "14:30", end: "15:30", text: "彦根 到着見込み", status: "confirmed", ref: "spot:彦根城（8/12の目的地の目安）" },
  { day: "2026-08-12", time: "17:00", text: "彦根で休憩後、同行者と犬2匹は八尾へ", status: "confirmed", ref: "spot:近鉄八尾駅（出発・帰着の目安）" }
];
let schedule = loadSchedule();
function loadSchedule() {
  try {
    const raw = JSON.parse(localStorage.getItem(SCHED_KEY));
    // 保存バージョンが現行と一致する場合のみローカル編集を採用。
    // 古い／無い場合は新しい共有初期表示(SCHED_DEFAULT)に更新する。
    if (raw && raw.v === SCHED_VERSION && Array.isArray(raw.items)) {
      return raw.items.map(x => ({ ...x, day: normalizeDay(x.day) }));
    }
  } catch (e) {}
  return SCHED_DEFAULT.map(x => ({ ...x }));
}
function saveSchedule() { localStorage.setItem(SCHED_KEY, JSON.stringify({ v: SCHED_VERSION, items: schedule })); fbPush("schedule", schedule); }

/* 表示中のサブタブ。"all" = 全体、それ以外は TRIP_DAYS の key。
   ★端末ごとの一時的な表示状態なので localStorage にも Firebase にも保存しない
     （同行者の画面まで勝手に切り替わると事故になる。絞り込みと同じ方針） */
let schedDayView = "all";

/* 編集モード。null = 編集していない（＝編集セクションを描かない）。
   ★「隠す」ではなく「描かない」。display:none にしても SortableJS は生きたままで、
     スマホのスクロール中の誤タップで予定が入れ替わる事故が実際に起きていた。
     端末ごとの状態なので保存しない（追補H-9）。 */
let schedEditing = null;

// 候補名から予定行を作る。地点カードに一致すれば ref を付け、確定状態を引き継ぐ。
// day は「いま見ているサブタブの日」。全体タブから足したときは初日に入る。
function schedItemFromName(name, day) {
  const ref = placeIdByName(name) || undefined;
  return { day: normalizeDay(day || (schedDayView === "all" ? FIRST_DAY : schedDayView)),
           time: "", text: name, status: ref ? getStatus(ref) : "tentative", ref };
}
// スケジュールの地点項目（ref）の並び順を、マップのルートに反映する（片方向連動）
// ★全日ぶんをまとめて1本のルートにする。日ごとの絞り込みはマップの「日」フィルタで行う。
function syncRouteFromSchedule() {
  const seen = new Set(), ordered = [];
  schedule.forEach(it => {
    if (it.ref && getPlaceById(it.ref) && !seen.has(it.ref)) { seen.add(it.ref); ordered.push(it.ref); }
  });
  routeIds = ordered;
  saveRoute();
  if ($("#route-list")) renderRouteEditor();
  if (typeof map !== "undefined" && map) { refreshMarkers(); drawRouteLine(); applyFilters(); }
}
/* 地点id → その地点が入っている日の集合（マップの「日」フィルタ用） */
function daysOfPlace(id) {
  const s = new Set();
  schedule.forEach(it => { if (it.ref === id) s.add(normalizeDay(it.day)); });
  return s;
}

/* 現在の並びを SCHED_DEFAULT 用のコード片として書き出す（A仕様の更新を簡単に） */
function exportSchedule() {
  // ① スケジュール（day/ref付き。status は連動項目なら共通ステートの現状を出力）
  const lines = schedule.map(it => {
    const st = it.ref ? getStatus(it.ref) : (it.status || "tentative");
    const parts = [`day: ${JSON.stringify(normalizeDay(it.day))}`, `time: ${JSON.stringify(it.time || "")}`,
                   `text: ${JSON.stringify(it.text || "")}`, `status: ${JSON.stringify(st)}`];
    if (it.end !== undefined && it.end !== null) parts.push(`end: ${JSON.stringify(it.end)}`);
    if (it.ref) parts.push(`ref: ${JSON.stringify(it.ref)}`);
    return `  { ${parts.join(", ")} }`;
  }).join(",\n");
  const schedOut = `const SCHED_DEFAULT = [\n${lines}\n];`;
  // ② 確定/未確定の状態（カード・マップ・スケジュールで変更した分を全員へ）
  const statusLines = Object.keys(statusMap).sort().map(id =>
    `  ${JSON.stringify(id)}: ${JSON.stringify(getStatus(id))}`
  ).join(",\n");
  const statusOut = `const STATUS_DEFAULT = {\n${statusLines}\n};`;
  const out =
    `/* ① app.js の SCHED_DEFAULT に貼り替え、SCHED_VERSION を +1 */\n${schedOut}\n\n` +
    `/* ② app.js の STATUS_DEFAULT に貼り替え、STATUS_VERSION を +1 */\n${statusOut}`;
  if (navigator.clipboard) navigator.clipboard.writeText(out).catch(() => {});
  window.prompt("下記を app.js に貼り替え、SCHED_VERSION と STATUS_VERSION をそれぞれ +1 して commit すると、並び順・確定状態が全員に反映されます（クリップボードにもコピー済み）:", out);
}

/* 1行ぶんのHTML。i は schedule 配列の実インデックス（日別表示でも実インデックスを渡す） */
function schedRowHtml(it, i) {
  // 効果的な確定状態: refがあれば共通ステート、なければ項目ローカルの status
  const st = it.ref ? getStatus(it.ref) : (it.status === "confirmed" ? "confirmed" : "tentative");
  const linked = it.ref ? ` <span class="sched-linked" title="地点カード・マップと連動">📍</span>` : "";
  // 終了時間はオプション。未設定なら「＋終了」ボタン、設定済みなら「〜 終了時刻 ×」
  const endUi = (it.end === undefined || it.end === null)
    ? `<button class="sched-addend" data-i="${i}" title="終了時間を追加">＋終了</button>`
    : `<span class="sched-tilde">〜</span><input class="sched-endtime" type="time" value="${esc(it.end)}" data-i="${i}" aria-label="終了時刻"><button class="sched-rmend" data-i="${i}" title="終了時間を消す">×</button>`;
  // ★時刻と終了UIは .sched-when でひとまとめにする。
  //   「＋終了」1個の行と「〜 終了時刻 ×」3個の行で幅が変わると、
  //   そのぶん右の「予定」の左端が行ごとにズレて縦に読みにくくなるため。
  return `
      <li class="sched-item ${st}" data-i="${i}" data-day="${esc(normalizeDay(it.day))}">
        <span class="sched-handle" aria-label="ドラッグして並び替え" title="ドラッグで並び替え">≡</span>
        <span class="sched-when">
          <input class="sched-time" type="time" value="${esc(it.time || "")}" data-i="${i}" aria-label="開始時刻">${endUi}
        </span>
        <span class="sched-ctrl">${linked}
          <button class="sched-status st-chip ${st}" data-i="${i}" title="確定／未確定を切替${it.ref ? "（カード・マップと連動）" : ""}">${STATUS_LABEL[st]}</button>
          <button class="sched-rm" data-i="${i}" aria-label="この行を削除">✕</button>
        </span>
        <input class="sched-text" type="text" value="${esc(it.text || "")}" data-i="${i}" placeholder="予定を入力" aria-label="予定">
        <select class="sched-ref" data-i="${i}" aria-label="紐づける地点">${placeOptionsHtml("📍 地点なし", it.ref || "")}</select>
      </li>`;
}

/* ===== 編集セクションの組み立て・撤去 =====
   ★編集モードでないときは DOM ごと作らない。隠すだけでは SortableJS が生き残り、
     スマホのスクロール中の誤タップで予定が入れ替わる（実際に頻発していた）。 */
function openSchedEditor(day) {
  schedEditing = day || "all";
  schedDayView = schedEditing;
  renderMasterPlan();          // 編集中の日を示すため描き直す
  renderSchedEditorSection();
  const host = $("#sched-editor-host");
  if (host && host.scrollIntoView) host.scrollIntoView({ behavior: "smooth", block: "start" });
}
function closeSchedEditor() {
  schedEditing = null;
  schedDayView = "all";        // 次に開いたとき前回の日が残らないようにする
  renderSchedEditorSection();  // ここで DOM ごと消える＝Sortable も一緒に捨てられる
  renderMasterPlan();
  renderBackupPlans();
}
function renderSchedEditorSection() {
  const host = $("#sched-editor-host"); if (!host) return;
  if (!schedEditing) {
    // ★空にすると、Sortable が握っていた要素ごと GC される。フラグも戻す
    host.innerHTML = "";
    schedSortInit = false;
    return;
  }
  host.innerHTML = `
    <div class="sched-editor is-editing">
      <div class="sched-edit-head">
        <h3 class="sched-subhead">編集中${schedEditing === "all" ? "（全体）" : `（${esc(dayLabel(schedEditing))}）`}</h3>
        <button class="btn-primary sched-done">編集を終える</button>
      </div>
      <p class="sched-hint muted">変更は<strong>入力した時点で同行者にも反映</strong>されます（保存ボタンはありません）。「編集を終える」で読みやすい表示に戻ります。</p>
      <div class="sched-legend">
        <span class="st-chip confirmed">確定</span><span>タップで未確定に切り替わります</span>
        <span class="st-chip tentative">未確定</span><span>地点に紐づく行（📍）はカード・マップとも連動します</span>
      </div>
      <div class="sched-day-tabs" id="sched-day-tabs" aria-label="日の切替"></div>
      <div class="sched-cols">
        <div class="sched-col">
          <h4 class="sched-col-h">タイムスケジュール <span class="muted">ドラッグ並び替え・時刻入力・確定切替</span></h4>
          <ol class="sched-list" id="sched-list"></ol>
          <div class="sched-toolbar">
            <select id="sched-add-place" class="sched-select"><option value="">＋ 候補から追加…</option></select>
            <button class="btn-ghost" id="sched-add-row">＋ 空の行</button>
            <button class="btn-ghost" id="sched-reset">おすすめ順に戻す</button>
            <button class="btn-ghost" id="sched-clear">空にする</button>
          </div>
          <p class="sched-hint muted">「全体」では日付の見出し行を挟んで5日ぶんを通しで表示します。<strong>行を別の日の見出しの下へドラッグすると、その予定の日付が切り替わります。</strong>「＋ 空の行」「おすすめ順に戻す」「空にする」は、日別タブを開いているときはその日だけに効きます。</p>
        </div>
        <div class="sched-col">
          <h4 class="sched-col-h">候補リスト <span class="muted">ドラッグ or ⊕ で左へ追加</span></h4>
          <div class="sched-cand-tabs" id="sched-cand-tabs">
            <button class="sched-cand-tab active" data-filter="all">すべて</button>
            <button class="sched-cand-tab" data-filter="spots">🌿 スポット</button>
            <button class="sched-cand-tab" data-filter="restaurants">🍽 レストラン</button>
            <button class="sched-cand-tab" data-filter="cafes">☕ カフェ</button>
          </div>
          <ul class="sched-cand-list" id="sched-candidates"></ul>
        </div>
      </div>
      <div class="sched-edit-foot">
        <button class="btn-primary sched-done">編集を終える</button>
      </div>
    </div>`;
  // 中身を作ってから配線する（毎回作り直すので addEventListener の重複は起きない）
  renderSchedDayTabs();
  renderScheduleEditor();
  renderSchedCandidates();
  setupSchedCandTabs();
  populateSchedAddSelect();
  schedSortInit = false;       // 新しい DOM に対して張り直す
  setupScheduleSortable();
  wireSchedToolbar();
  // 編集セクションは縦に長いので、出口は先頭と末尾の2か所に置く
  $$(".sched-done").forEach(b => b.addEventListener("click", closeSchedEditor));
}

/* 編集セクションのツールバー。★日別タブを開いているときはその日だけに効く（追補K-4） */
function wireSchedToolbar() {
  $("#sched-add-row").addEventListener("click", () => {
    const day = schedDayView === "all" ? FIRST_DAY : schedDayView;
    insertSchedItem({ day, time: "", text: "", status: "tentative" });
  });
  $("#sched-reset").addEventListener("click", () => {
    if (schedDayView === "all") {
      schedule = SCHED_DEFAULT.map(x => ({ ...x }));
    } else {
      const others = schedule.filter(it => normalizeDay(it.day) !== schedDayView);
      const restored = SCHED_DEFAULT.filter(x => x.day === schedDayView).map(x => ({ ...x }));
      // 元の日付順を保つため、日付キーで並べ直す
      schedule = others.concat(restored).sort((a, b) => DAY_KEYS.indexOf(normalizeDay(a.day)) - DAY_KEYS.indexOf(normalizeDay(b.day)));
    }
    saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor(); renderMasterPlan();
  });
  $("#sched-clear").addEventListener("click", () => {
    const what = schedDayView === "all" ? "すべての予定" : `${dayLabel(schedDayView)}の予定`;
    if (!confirm(`${what}を消しますか？（同行者の端末にも反映されます）`)) return;
    schedule = schedDayView === "all" ? [] : schedule.filter(it => normalizeDay(it.day) !== schedDayView);
    saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor(); renderMasterPlan();
  });
}

function renderScheduleEditor() {
  const list = $("#sched-list");
  if (!list) return;
  const viewing = schedDayView;                       // "all" or 日付キー
  // 実インデックスを保ったまま、表示対象だけを抜き出す
  const rows = schedule.map((it, i) => ({ it, i }))
                       .filter(r => viewing === "all" || normalizeDay(r.it.day) === viewing);

  if (!rows.length) {
    const where = viewing === "all" ? "" : `${dayLabel(viewing)}の`;
    list.innerHTML = `<li class="sched-empty">${where}予定がありません。「＋ 空の行」や「候補から追加」で作成できます。</li>`;
  } else if (viewing === "all") {
    // 全体表示: 日付見出し行を挟む。見出しは .sched-item ではないのでドラッグ対象にならない
    let html = "", cur = null;
    rows.forEach(({ it, i }) => {
      const d = normalizeDay(it.day);
      if (d !== cur) {
        cur = d;
        html += `<li class="sched-day-head" data-day="${esc(d)}">
          <span class="sched-day-rule"></span>
          <span class="sched-day-name">${esc(dayLabel(d))}</span>
          <span class="sched-day-sub">${esc(daySub(d))}</span>
          <span class="sched-day-rule"></span>
        </li>`;
      }
      html += schedRowHtml(it, i);
    });
    list.innerHTML = html;
  } else {
    list.innerHTML = rows.map(({ it, i }) => schedRowHtml(it, i)).join("");
  }

  // 入力・操作イベント（textはinputで都度保存、フォーカス維持のため再描画しない）
  $$("#sched-list .sched-time").forEach(el => el.addEventListener("change", e => { schedule[+e.currentTarget.dataset.i].time = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-endtime").forEach(el => el.addEventListener("change", e => { schedule[+e.currentTarget.dataset.i].end = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-addend").forEach(el => el.addEventListener("click", e => { schedule[+e.currentTarget.dataset.i].end = ""; saveSchedule(); renderScheduleEditor(); }));
  $$("#sched-list .sched-rmend").forEach(el => el.addEventListener("click", e => { delete schedule[+e.currentTarget.dataset.i].end; saveSchedule(); renderScheduleEditor(); }));
  $$("#sched-list .sched-text").forEach(el => el.addEventListener("input", e => { schedule[+e.currentTarget.dataset.i].text = e.currentTarget.value; saveSchedule(); }));
  $$("#sched-list .sched-status").forEach(el => el.addEventListener("click", e => {
    const it = schedule[+e.currentTarget.dataset.i];
    if (it.ref) { toggleStatus(it.ref); }   // 連動: 共通ステート更新 → rerenderStatus が全タブ再描画
    else { it.status = it.status === "confirmed" ? "tentative" : "confirmed"; saveSchedule(); renderScheduleEditor(); }
  }));
  $$("#sched-list .sched-rm").forEach(el => el.addEventListener("click", e => {
    schedule.splice(+e.currentTarget.dataset.i, 1); saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
  }));
  // 地点の紐づけ。★ここを変えるとマップのピン順（ルート）と確定状態の出どころが変わる
  $$("#sched-list .sched-ref").forEach(el => el.addEventListener("change", e => {
    const it = schedule[+e.currentTarget.dataset.i], v = e.currentTarget.value;
    if (v) {
      // 紐づけると確定状態は共有ステート（getStatus）に従うようになる。表示が切り替わるのは正しい
      it.ref = v;
    } else {
      // 解除するときは、いまの見た目の状態を行に写しておく（勝手に未確定へ落ちないように）
      it.status = it.ref ? getStatus(it.ref) : (it.status === "confirmed" ? "confirmed" : "tentative");
      delete it.ref;
    }
    // select の change なので再描画してよい（テキスト入力と違いカーソルもIME変換も飛ばない）
    saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
  }));
  updateSchedDayCounts();
}

/* 日別サブタブ（全体／8/8…8/12）。件数バッジ付き */
function renderSchedDayTabs() {
  const bar = $("#sched-day-tabs"); if (!bar) return;
  const btn = (key, label, sub) =>
    `<button class="sched-day-tab${schedDayView === key ? " active" : ""}" data-day="${esc(key)}"${sub ? ` title="${esc(sub)}"` : ""}>${esc(label)}<span class="chip-n" data-count="${esc(key)}"></span></button>`;
  bar.innerHTML = btn("all", "全体") + TRIP_DAYS.map(d => btn(d.key, d.label, d.sub)).join("");
  $$(".sched-day-tab", bar).forEach(t => t.addEventListener("click", () => {
    schedDayView = t.dataset.day;
    renderSchedDayTabs();
    renderScheduleEditor();
  }));
  updateSchedDayCounts();
}
function updateSchedDayCounts() {
  $$("#sched-day-tabs .chip-n").forEach(el => {
    const k = el.dataset.count;
    el.textContent = k === "all" ? schedule.length : schedule.filter(it => normalizeDay(it.day) === k).length;
  });
}

/* ===== 地点プルダウンの中身 =====
   ★グループ分けには カードの絞り込みと同じ SPOT_GROUPS / GENRE_GROUPS を使う。
     語彙を2か所に持たない（0-1）ので、区分を直せば絞り込みと選択の両方に効く。
     種類（スポット/レストラン/カフェ）の3つだけで分けるとスポットが25件の一かたまりになり、
     スマホのピッカーで探せない。区分で分けると最大6件になる。 */
function placeOptionGroups() {
  const out = [];
  const push = (label, xs) => { if (xs.length) out.push([label, xs]); };
  SPOT_GROUPS.forEach(([k, label]) =>
    push(label, DATA.spots.filter(p => (p.spotKey || "other") === k).map(p => ({ p, type: "spot" }))));
  const eats = [...DATA.restaurants.map(p => ({ p, type: "restaurant" })),
                ...DATA.cafes.map(p => ({ p, type: "cafe" }))];
  GENRE_GROUPS.forEach(([k, label]) =>
    push(label, eats.filter(x => (x.p.genreKey || "other") === k)));
  // ★区分キーが付いていない地点を必ず拾う。落とすとその地点だけ紐づけられなくなり、
  //   しかもエラーが出ない（このプロジェクトで繰り返し起きた「静かに消える」型）。
  const listed = new Set(out.flatMap(([, xs]) => xs.map(x => placeId(x.type, x.p.name))));
  push("― 区分なし（キーの付け忘れ）―",
       allPlaces().filter(p => !listed.has(placeId(p.type, p.name))).map(p => ({ p, type: p.type })));
  return out;
}
/* <select> の中身（先頭の空項目＋optgroup 群）。値は地点id。
   ★行の紐づけプルダウンと「＋ 候補から追加…」の両方がこれを使う
     （同じ画面で並びが違うと迷うため）。 */
function placeOptionsHtml(blankLabel, selectedRef) {
  const opts = placeOptionGroups().map(([label, xs]) =>
    `<optgroup label="${esc(label)}">` + xs.map(({ p, type }) => {
      const id = placeId(type, p.name);
      return `<option value="${esc(id)}"${id === selectedRef ? " selected" : ""}>${esc(p.name)}</option>`;
    }).join("") + `</optgroup>`).join("");
  // ★消えた地点を指している ref を「地点なし」に見せると、他を触った拍子に紐づけが消える。
  //   選択済みの警告項目として残し、気づけるようにする。
  const missing = (selectedRef && !getPlaceById(selectedRef))
    ? `<option value="${esc(selectedRef)}" selected>⚠️ 見つからない地点（${esc(selectedRef)}）</option>` : "";
  return `<option value=""${selectedRef ? "" : " selected"}>${esc(blankLabel)}</option>${missing}${opts}`;
}

function populateSchedAddSelect() {
  const sel = $("#sched-add-place"); if (!sel) return;
  sel.innerHTML = placeOptionsHtml("＋ 候補から追加…", "");
  sel.addEventListener("change", () => {
    if (!sel.value) return;
    const p = getPlaceById(sel.value);
    if (p) insertSchedItem(schedItemFromName(p.name));
    sel.value = "";
  });
}

/* 予定行を「いま見ている日」の末尾に挿す。全体タブならその日のブロックの末尾へ入る */
function insertSchedItem(item, at) {
  if (typeof at === "number" && at >= 0) {
    schedule.splice(at, 0, item);
  } else {
    // その日の最後の行の直後に入れる（日をまたいで混ざらないようにする）
    let last = -1;
    schedule.forEach((it, i) => { if (normalizeDay(it.day) === item.day) last = i; });
    if (last >= 0) schedule.splice(last + 1, 0, item);
    else schedule.push(item);
  }
  saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
}

/* 右側の候補リスト（スポット/レストラン/カフェ）を描画。ドラッグまたは⊕で左へ追加。
   filter: "all" | "spots" | "restaurants" | "cafes" */
function renderSchedCandidates(filter = "all") {
  const el = $("#sched-candidates"); if (!el) return;
  const groups = [["spots", "🌿 スポット", "spot"], ["restaurants", "🍽 レストラン", "restaurant"], ["cafes", "☕ カフェ", "cafe"]];
  const shown = filter === "all" ? groups : groups.filter(g => g[0] === filter);
  const withHead = filter === "all";  // 「すべて」のときだけ見出しを挟む
  el.innerHTML = shown.map(([key, label, emoji]) => {
    const head = withHead ? `<li class="sched-cand-head">${label}</li>` : "";
    const items = DATA[key].map(p =>
      `<li class="sched-cand-item" data-name="${esc(p.name)}">
        <span class="type-emoji">${TYPE_ICONS[emoji]}</span>
        <span class="nm">${esc(p.name)}</span>
        <button class="cand-add" data-name="${esc(p.name)}" aria-label="左に追加">⊕</button>
      </li>`).join("");
    return head + items;
  }).join("");
  $$("#sched-candidates .cand-add").forEach(b => b.addEventListener("click", () => {
    insertSchedItem(schedItemFromName(b.dataset.name));
  }));
}

/* 候補リストのサブタブ（すべて／スポット／レストラン／カフェ）切替 */
function setupSchedCandTabs() {
  const bar = $("#sched-cand-tabs"); if (!bar) return;
  $$(".sched-cand-tab", bar).forEach(t => t.addEventListener("click", () => {
    $$(".sched-cand-tab", bar).forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    renderSchedCandidates(t.dataset.filter);
  }));
}

/* 並び替え後、DOMの順番どおりに schedule を組み直す。
   全体表示では日付見出し行を境に day を振り直すので、
   別の日の見出しの下へドラッグするとその行の所属日が切り替わる。 */
function rebuildScheduleFromDom() {
  const kids = Array.prototype.slice.call($("#sched-list").children);
  if (schedDayView === "all") {
    let cur = FIRST_DAY;
    const next = [];
    kids.forEach(li => {
      if (li.classList.contains("sched-day-head")) { cur = normalizeDay(li.dataset.day); return; }
      if (!li.classList.contains("sched-item")) return;
      const it = schedule[+li.dataset.i];
      if (it) next.push({ ...it, day: cur });
    });
    schedule = next;
  } else {
    // 日別表示: この日の行だけを並べ替え、他の日の行は元の位置のまま据え置く
    const order = kids.filter(li => li.classList.contains("sched-item")).map(li => +li.dataset.i);
    const reordered = order.map(i => ({ ...schedule[i], day: schedDayView }));
    const slots = [];
    schedule.forEach((it, i) => { if (normalizeDay(it.day) === schedDayView) slots.push(i); });
    const next = schedule.slice();
    slots.forEach((slot, n) => { next[slot] = reordered[n]; });
    schedule = next;
  }
}

let schedSortInit = false;
function setupScheduleSortable() {
  if (schedSortInit || typeof Sortable === "undefined" || !$("#sched-list")) return;
  schedSortInit = true;
  // タイムスケジュール: 内部並び替え＋候補からの受け入れ
  Sortable.create($("#sched-list"), {
    group: { name: "sched-shared", pull: false, put: true },
    animation: 150, handle: ".sched-handle", draggable: ".sched-item",
    ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    onAdd: (evt) => {
      // 候補リストから落ちてきた要素を予定に変換
      const name = evt.item.dataset.name;
      const kids = Array.prototype.slice.call($("#sched-list").children);
      const at = kids.indexOf(evt.item);
      // 落とした位置より上にある日付見出しが、その行の所属日になる
      let day = schedDayView === "all" ? FIRST_DAY : schedDayView;
      if (schedDayView === "all") {
        for (let k = at - 1; k >= 0; k--) {
          if (kids[k].classList.contains("sched-day-head")) { day = normalizeDay(kids[k].dataset.day); break; }
        }
      }
      // 直前の予定行の実インデックスの次に挿す
      let insertAt = -1;
      for (let k = at - 1; k >= 0; k--) {
        if (kids[k].classList.contains("sched-item")) { insertAt = +kids[k].dataset.i + 1; break; }
      }
      if (at === 0 || insertAt < 0) insertAt = schedule.findIndex(it => normalizeDay(it.day) === day);
      evt.item.remove();
      if (name != null) {
        const item = schedItemFromName(name, day);
        insertSchedItem(item, insertAt >= 0 ? insertAt : undefined);
      }
    },
    onUpdate: () => {
      rebuildScheduleFromDom();
      saveSchedule(); syncRouteFromSchedule(); renderScheduleEditor();
    }
  });
  // 候補リスト: クローンを引き出すだけ
  Sortable.create($("#sched-candidates"), {
    group: { name: "sched-shared", pull: "clone", put: false },
    sort: false, animation: 150, draggable: ".sched-cand-item"
  });
}

function renderRoutes() {
  $("#routes-content").innerHTML = DATA.legs.map(l =>
    `<div class="leg">
      <div class="leg-route"><b>${esc(l.from)}</b><span class="leg-arrow">→</span><b>${esc(l.to)}</b></div>
      <div class="leg-time">${esc(l.time)}</div>
      ${l.note ? `<div class="leg-note">${esc(l.note)}</div>` : ""}
    </div>`).join("");
}
function renderPacking() {
  const KEY = "takayama-trip-packing";
  const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
  $("#packing-content").innerHTML = DATA.packing.map(g =>
    `<div class="pack-group"><h3>${esc(g.group)}</h3><ul class="pack-list">${
      g.items.map(it => {
        const id = g.group + "::" + it;
        return `<li><label><input type="checkbox" data-pack="${esc(id)}" ${saved[id] ? "checked" : ""}><span>${esc(it)}</span></label></li>`;
      }).join("")
    }</ul></div>`).join("");
  $$("#packing-content input[data-pack]").forEach(cb => {
    cb.addEventListener("change", () => {
      saved[cb.dataset.pack] = cb.checked;
      localStorage.setItem(KEY, JSON.stringify(saved));
    });
  });
}
/* ===== 注意・要確認（ブラウザから編集できる。誤タップ防止に編集モード制） ===== */
const INFO_KEY = "takayama-trip-info";
const INFO_VERSION = 1;   // INFO_DEFAULT を更新したら必ず +1 する
const INFO_DEFAULT = DATA.info;
let infoItems = loadInfo();
// 編集モードは保存しない：読み込み直後は必ず閲覧モード＝誤タップで書き換わらない
let infoEditing = false;
let infoSortable = null;

function loadInfo() {
  try {
    const raw = JSON.parse(localStorage.getItem(INFO_KEY));
    if (raw && raw.v === INFO_VERSION && Array.isArray(raw.items)) return raw.items;
  } catch (e) {}
  return INFO_DEFAULT.map(x => ({ ...x }));
}
function saveInfo() {
  localStorage.setItem(INFO_KEY, JSON.stringify({ v: INFO_VERSION, items: infoItems }));
  fbPush("info", infoItems);
}
// 注意タブの本文も同じ軽量記法（定義は mdBold）。
const infoText = mdBold;

/* =========================================================================
   ワンちゃん特集（読み物）
   ★記事は ref で地点を指すだけ。写真・営業時間・点数・リンクは DATA から引くので、
     地点を直したときに特集だけ古いまま残ることがない。
   ========================================================================= */
// 空行で段落を分ける（本文は **囲む** の軽量記法のみ。生HTMLは書かない）
function featureText(s) {
  return String(s || "").split(/\n{2,}/).map(t => `<p>${mdBold(t)}</p>`).join("");
}
// 犬の条件チップ。ラベルは絞り込みと同じ DOG_GROUPS を使い回す
function dogChip(p) {
  const g = DOG_GROUPS.find(([k]) => k === p.dogKey);
  return g ? `<span class="dog-chip dog-${esc(p.dogKey)}">${esc(g[1])}</span>` : "";
}
// meta から指定ラベルの行を引く（営業時間や犬条件を記事側に書き写さないため）
function metaOf(p, label) {
  const row = (p.meta || []).find(m => m[0] === label);
  return row ? row[1] : "";
}
function renderDogPick(it) {
  const p = getPlaceById(it.ref);
  if (!p) return "";   // ★ref切れは何も描かずエラーも出ない。tools/test_days.js が検出する
  const imgs = p.images || [];
  const img = imgs.length
    ? `<button class="dog-pick-img card-img-btn" data-images='${esc(JSON.stringify(imgs))}' data-index="0" aria-label="${esc(p.name)}の写真を拡大">
         <img src="${esc(imgs[0])}" alt="${esc(p.name)}" loading="lazy"></button>`
    : "";
  const dog = metaOf(p, "犬"), hours = metaOf(p, "営業");
  return `<article class="dog-pick">
    ${img}
    <div class="dog-pick-body">
      <div class="dog-pick-head">
        ${it.tag ? `<span class="dog-pick-tag">${esc(it.tag)}</span>` : ""}
        ${dogChip(p)}
      </div>
      <h4 class="dog-pick-name">${TYPE_ICONS[p.type]} ${esc(p.name)}</h4>
      <p class="dog-pick-why">${mdBold(it.why)}</p>
      ${(dog || hours) ? `<ul class="dog-pick-meta">
        ${dog ? `<li><b>犬</b><span>${mdBold(dog)}</span></li>` : ""}
        ${hours ? `<li><b>営業</b><span>${mdBold(hours)}</span></li>` : ""}
      </ul>` : ""}
      ${ratingChips(p)}
      ${linkPills(p)}
    </div>
  </article>`;
}
function renderDogFeature() {
  const box = $("#dog-content"); if (!box) return;
  box.innerHTML = (DATA.dogFeature || []).map(b => {
    const head = `<h3 class="dog-section-h">${esc(b.title)}</h3>` +
      (b.lead ? `<div class="dog-section-lead">${featureText(b.lead)}</div>` : "");
    if (b.kind === "picks") {
      return `<section class="dog-section${b.tone === "top" ? " top" : ""}">${head}
        <div class="dog-picks">${(b.items || []).map(renderDogPick).join("")}</div>
      </section>`;
    }
    if (b.kind === "list") {
      return `<section class="dog-section">${head}
        <dl class="dog-list">${(b.items || []).map(i =>
          `<dt>${esc(i.label)}</dt><dd>${mdBold(i.text)}</dd>`).join("")}</dl>
      </section>`;
    }
    if (b.kind === "sources") {
      return `<section class="dog-section">${head}
        <ul class="dog-sources">${(b.items || []).map(i =>
          `<li><a href="${esc(i.url)}" target="_blank" rel="noopener">🔗 ${esc(i.label)}</a></li>`).join("")}</ul>
      </section>`;
    }
    // kind: "note"
    return `<div class="info-card dog-note${b.warn ? " warn" : ""}">
      <h3>${esc(b.title)}</h3>${featureText(b.text)}</div>`;
  }).join("");
}

function renderInfo() {
  const box = $("#info-content"); if (!box) return;
  const panel = $("#panel-info");
  if (panel) panel.classList.toggle("editing", infoEditing);
  const btn = $("#info-edit-toggle");
  if (btn) {
    btn.textContent = infoEditing ? "✓ 編集を終える" : "✏️ 編集する";
    btn.classList.toggle("on", infoEditing);
  }

  if (!infoEditing) {
    box.innerHTML = infoItems.length
      ? infoItems.map(i =>
          `<div class="info-card ${i.warn ? "warn" : ""}"><h3>${esc(i.title)}</h3><p>${infoText(i.text)}</p></div>`).join("")
      : `<p class="muted">項目がありません。「✏️ 編集する」→「＋ 項目を追加」で作成できます。</p>`;
    if (infoSortable) { infoSortable.destroy(); infoSortable = null; }
    return;
  }

  box.innerHTML = infoItems.map((it, i) => `
    <div class="info-card edit ${it.warn ? "warn" : ""}" data-i="${i}">
      <div class="info-edit-head">
        <span class="info-handle" title="ドラッグで並び替え" aria-label="ドラッグして並び替え">≡</span>
        <input class="info-title" type="text" data-i="${i}" value="${esc(it.title || "")}" placeholder="見出し" aria-label="見出し">
        <button class="info-warn ${it.warn ? "on" : ""}" data-i="${i}" title="重要マーク（左の線が赤くなります）">${it.warn ? "⚠️ 重要" : "重要にする"}</button>
        <button class="info-del" data-i="${i}" aria-label="この項目を削除" title="削除">✕</button>
      </div>
      <textarea class="info-text" data-i="${i}" rows="4" placeholder="内容を入力（**で囲むと太字）" aria-label="内容">${esc(it.text || "")}</textarea>
    </div>`).join("")
    || `<p class="muted">項目がありません。「＋ 項目を追加」で作成できます。</p>`;

  // 入力中は再描画しない（カーソル位置とIME変換が飛ぶため）
  $$("#info-content .info-title").forEach(el => el.addEventListener("input", e => {
    infoItems[+e.currentTarget.dataset.i].title = e.currentTarget.value; saveInfo();
  }));
  $$("#info-content .info-text").forEach(el => el.addEventListener("input", e => {
    infoItems[+e.currentTarget.dataset.i].text = e.currentTarget.value; saveInfo();
  }));
  $$("#info-content .info-warn").forEach(el => el.addEventListener("click", e => {
    const it = infoItems[+e.currentTarget.dataset.i]; it.warn = !it.warn; saveInfo(); renderInfo();
  }));
  $$("#info-content .info-del").forEach(el => el.addEventListener("click", e => {
    const i = +e.currentTarget.dataset.i;
    if (!confirm(`「${infoItems[i].title || "（無題）"}」を削除しますか？`)) return;
    infoItems.splice(i, 1); saveInfo(); renderInfo();
  }));
  setupInfoSortable();
}

function setupInfoSortable() {
  if (typeof Sortable === "undefined" || !$("#info-content")) return;
  if (infoSortable) infoSortable.destroy();
  infoSortable = Sortable.create($("#info-content"), {
    animation: 150, handle: ".info-handle", draggable: ".info-card",
    ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    onEnd: () => {
      infoItems = $$("#info-content .info-card").map(el => infoItems[+el.dataset.i]);
      saveInfo(); renderInfo();
    }
  });
}

/* 現在の注意項目を INFO_DEFAULT 用のコード片として書き出す */
function exportInfo() {
  const lines = infoItems.map(it =>
    `  {\n    warn: ${it.warn ? "true" : "false"},\n    title: ${JSON.stringify(it.title || "")},\n    text: ${JSON.stringify(it.text || "")}\n  }`
  ).join(",\n");
  const out = `/* app.js の DATA.info に貼り替え、INFO_VERSION を +1 */\ninfo: [\n${lines}\n],`;
  if (navigator.clipboard) navigator.clipboard.writeText(out).catch(() => {});
  window.prompt("下記を app.js の DATA.info に貼り替え、INFO_VERSION を +1 して commit すると、全員の初期表示が更新されます（クリップボードにもコピー済み）:", out);
}

/* =========================================================================
   ライトボックス
   ========================================================================= */
const lb = { images: [], index: 0 };
function openLightbox(images, index) {
  lb.images = images; lb.index = index;
  $("#lightbox").classList.remove("hidden");
  $("#lightbox").setAttribute("aria-hidden", "false");
  updateLightbox();
}
function updateLightbox() {
  $("#lb-img").src = lb.images[lb.index];
  $("#lb-counter").textContent = `${lb.index + 1} / ${lb.images.length}`;
  const multi = lb.images.length > 1;
  $("#lb-prev").style.display = multi ? "" : "none";
  $("#lb-next").style.display = multi ? "" : "none";
}
function closeLightbox() {
  $("#lightbox").classList.add("hidden");
  $("#lightbox").setAttribute("aria-hidden", "true");
}
function lbNext() { lb.index = (lb.index + 1) % lb.images.length; updateLightbox(); }
function lbPrev() { lb.index = (lb.index - 1 + lb.images.length) % lb.images.length; updateLightbox(); }
function setupLightbox() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-img-btn, .thumb-btn");
    if (btn) {
      const imgs = JSON.parse(btn.dataset.images);
      openLightbox(imgs, parseInt(btn.dataset.index, 10) || 0);
    }
  });
  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-next").addEventListener("click", lbNext);
  $("#lb-prev").addEventListener("click", lbPrev);
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") lbNext();
    else if (e.key === "ArrowLeft") lbPrev();
  });
}

/* =========================================================================
   ルート状態（localStorage）
   ========================================================================= */
const ROUTE_KEY = "takayama-trip-route";
const DEFAULT_ROUTE = [
  "spot:近鉄八尾駅（出発・帰着の目安）",
  "spot:多賀SA（上り・ドッグラン）",
  "spot:長良川SA（下り・ドッグラン）",
  "spot:サンクチュアリコート高山（拠点）",
  "spot:飛騨の里",
  "restaurant:お食事処 大喜",
  "spot:JA産直市場 アグリ高山",
  "spot:光ミュージアム",
  "restaurant:coffee & kitchen ぼくんち",
  "spot:飛騨大鍾乳洞",
  "restaurant:自然薯 茶茶 じねんのむら 飛騨高山店",
  "spot:山田春慶店",
  "spot:関SA（上り・ドッグラン）",
  "spot:彦根城（8/12の目的地の目安）"
];
let routeIds = loadRoute();
function loadRoute() {
  try {
    const s = JSON.parse(localStorage.getItem(ROUTE_KEY));
    if (Array.isArray(s)) return s.filter(getPlaceById);
  } catch (e) {}
  return DEFAULT_ROUTE.slice();
}
function saveRoute() { localStorage.setItem(ROUTE_KEY, JSON.stringify(routeIds)); fbPush("route", routeIds); }
function addToRoute(id) { if (!routeIds.includes(id)) { routeIds.push(id); syncRoute(); } }
function removeFromRoute(id) { routeIds = routeIds.filter(x => x !== id); syncRoute(); }
function routeIndex(id) { return routeIds.indexOf(id); }

/* =========================================================================
   地図（Leaflet）
   ========================================================================= */
let map, markerLayer, routeLine;
const markers = {}; // id -> marker

function makeIcon(p, id) {
  const idx = routeIndex(id);
  let ring = "";
  if (idx >= 0) ring = "ring-route";
  else if (getStatus(id) === "confirmed") ring = "ring-confirmed";
  const num = idx >= 0 ? `<span class="pin-num">${idx + 1}</span>` : "";
  return L.divIcon({
    className: "",
    html: `<div class="pin pin-${p.type} ${ring}"><span>${TYPE_ICONS[p.type]}</span>${num}</div>`,
    iconSize: [30, 30], iconAnchor: [15, 28], popupAnchor: [0, -28]
  });
}
function popupHtml(p, id) {
  const img = (p.images && p.images[0]) ? `<img src="${esc(p.images[0])}" alt="">` : "";
  return `<div class="popup-card">
    ${img}
    <h4>${esc(p.name)}</h4>
    ${p.genre ? `<div class="p-genre">${esc(p.genre)}</div>` : ""}
    <div class="p-area">📍 ${esc(p.area)}</div>
    <p class="p-desc">${esc(p.desc)}</p>
    <div class="p-actions">
      <button class="p-btn add" data-add="${esc(id)}">＋ルートに追加</button>
      <a class="p-btn maps" href="${placeMapsUrl(p)}" target="_blank" rel="noopener">📍マップ</a>
    </div>
  </div>`;
}
/* マップのフィルタ列を描く。★中身は MAP_FILTER_COLUMNS だけが決める（index.html には書かない）。
   呼ぶ場所に注意: setupMap() はマップタブを初めて開くまで走らないが、currentFilters() は
   init() の renderRouteEditor() から即座に呼ばれる。ここで #map-filters が空だと
   ルート列の .checked を読めずページ全体が落ちるので、init() の早い段階で呼ぶこと。 */
function renderMapFilters() {
  const el = $("#map-filters"); if (!el) return;
  const rows = MAP_FILTER_COLUMNS.map(c => {
    const chips = c.chips();
    if (!chips.length) return "";   // その旅行に該当が無い列は丸ごと出さない
    // ★チップは必ず .chip-row で包む。2列グリッドの右カラムに収まるので、
    //   何行に折り返してもラベルの下に回り込まない（カード側と同じ理由）
    return `<div class="filter-group" data-group="${esc(c.group)}">
      <span class="filter-label">${esc(c.label)}</span>
      <div class="chip-row">${chips.map(([v, l]) =>
        `<label class="chip"><input type="checkbox" value="${esc(v)}"${c.off ? "" : " checked"}> ${esc(l)}</label>`
      ).join("")}</div>
    </div>`;
  }).join("");
  // 件数バッジ #map-filter-count は applyFilters() の書き込み先。消さないこと
  el.innerHTML = `
    <div class="tools-head">
      <span class="tools-title">地図に出すピン</span>
      <span class="muted map-filter-count" id="map-filter-count"></span>
    </div>` + rows;
}
function currentFilters() {
  const get = g => $$(`.filter-group[data-group="${g}"] input:checked`).map(i => i.value);
  // ★「日」フィルタ（4泊5日対応）。閲覧者ごとのローカル操作なので同期しない。
  //   グループが無い場合（テスト等）は全日選択とみなす。
  const dayInputs = $$(`.filter-group[data-group="day"] input`);
  const days = dayInputs.length ? get("day") : DAY_KEYS.slice();
  // 「犬」フィルタ。列が無ければ null＝素通し（犬連れでない旅行では列ごと外せる）
  const dogInputs = $$(`.filter-group[data-group="dog"] input`);
  const routeInput = $(`.filter-group[data-group="route"] input`);
  return { type: get("type"), status: get("status"),
           dog: dogInputs.length ? get("dog") : null,
           routeOnly: !!(routeInput && routeInput.checked),
           days, dayFilterOn: dayInputs.length > 0 && days.length < DAY_KEYS.length };
}
/* いま表示対象になっている日の地点だけを、スケジュール順に並べて返す
   （点線・Googleマップのナビはこれを使う）

   ★ここが見ているのは「日」だけ。種類・状態・犬で絞ってもルートは変わらない。
     書き忘れではなく仕様。犬で絞ってナビの経由地が減ると、
     「犬不可の場所を外したらルートが途中で切れた」という事故になるため。
     日だけが例外なのは、Googleマップの経由地が9件までで5日ぶんを1本に渡せないから（追補K-5）。 */
function visibleRouteIds() {
  const f = currentFilters();
  if (!f.dayFilterOn) return routeIds.slice();
  // ★日で絞ったときは routeIds の順ではなく「その日のスケジュール順」に並べ直す。
  //   八尾のように往路と復路の両方に出てくる地点があると、routeIds は先頭の1回しか
  //   持たないため、そのままでは 8/12 のナビが「八尾発→彦根着」と逆向きになってしまう。
  const seen = new Set(), out = [];
  schedule.forEach(it => {
    if (!it.ref || !getPlaceById(it.ref)) return;
    if (!f.days.includes(normalizeDay(it.day))) return;
    if (seen.has(it.ref)) return;
    seen.add(it.ref); out.push(it.ref);
  });
  // スケジュールに無いのに手でルートへ足した地点は、日で隠さず末尾に残す
  routeIds.forEach(id => { if (!seen.has(id) && daysOfPlace(id).size === 0) { seen.add(id); out.push(id); } });
  return out;
}
function applyFilters() {
  const f = currentFilters();
  const all = allPlaces();
  let shown = 0;
  all.forEach(p => {
    const id = placeId(p.type, p.name);
    const m = markers[id];
    if (!m) return;
    const inRoute = routeIndex(id) >= 0;
    const pdays = daysOfPlace(id);
    const dayOk = !f.dayFilterOn || pdays.size === 0 || f.days.some(x => pdays.has(x));
    // 犬の条件はカードと同じ groupKeyOf() で引く。dogKey の付け忘れは "other" になり
    // どの区分にも入らないので静かに消える（test_cardtools.js が全件を検査している）
    const dogOk = !f.dog || f.dog.includes(groupKeyOf(p, "dog"));
    const show = f.type.includes(p.type) && f.status.includes(getStatus(id)) && dayOk && dogOk && (!f.routeOnly || inRoute);
    if (show) { shown++; if (!markerLayer.hasLayer(m)) m.addTo(markerLayer); }
    else { if (markerLayer.hasLayer(m)) markerLayer.removeLayer(m); }
  });
  // カードのツールバーの件数表示と対にする（日で絞ったとき何地点残るか分かる）
  const c = $("#map-filter-count");
  if (c) c.textContent = `${shown} / ${all.length}地点`;
}
function routeCoords() {
  return visibleRouteIds().map(getPlaceById).filter(Boolean).map(p => p.coords);
}
// 現在のルート（経由地の順）をGoogleマップのナビURLにする。スマホではGoogleマップアプリが起動する。
function googleMapsDirUrl() {
  // ★経由地はURL仕様上9件が上限。4泊5日を1本にすると必ず溢れるので、
  //   マップの「日」フィルタで絞られた地点だけを対象にする。
  const pts = visibleRouteIds().map(getPlaceById).filter(Boolean);
  if (!pts.length) return null;
  const c = p => `${p.coords[0]},${p.coords[1]}`;
  if (pts.length === 1) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c(pts[0]))}`;
  const origin = c(pts[0]), destination = c(pts[pts.length - 1]);
  // 経由地はURL仕様上ほどほどに（先頭=出発, 末尾=目的地, 中間=waypoints）
  const mid = pts.slice(1, -1).map(c).slice(0, 9);
  let url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
  if (mid.length) url += `&waypoints=${encodeURIComponent(mid.join("|"))}`;
  return url;
}
function drawRouteLine() {
  const coords = routeCoords();
  if (routeLine) map.removeLayer(routeLine);
  routeLine = L.polyline(coords, { color: "#1f9c9c", weight: 3, dashArray: "7 7", opacity: .85 }).addTo(map);
}
function refreshMarkers() {
  allPlaces().forEach(p => {
    const id = placeId(p.type, p.name);
    if (markers[id]) markers[id].setIcon(makeIcon(p, id));
  });
}
function setupMap() {
  map = L.map("map", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18, attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);

  const pts = [];
  allPlaces().forEach(p => {
    const id = placeId(p.type, p.name);
    const m = L.marker(p.coords, { icon: makeIcon(p, id) });
    m.bindPopup(popupHtml(p, id));
    markers[id] = m;
    m.addTo(markerLayer);
    pts.push(p.coords);
  });
  drawRouteLine();
  applyFilters();
  map.fitBounds(L.latLngBounds(pts).pad(0.15));

  // フィルタ
  $$("#map-filters input").forEach(i => i.addEventListener("change", () => {
    applyFilters();
    drawRouteLine();      // 日で絞ったら点線も追随させる
    renderRouteEditor();  // 「Googleマップでルートを開く」のURLを組み直す
  }));

  // ポップアップ内「追加」
  map.on("popupopen", (e) => {
    const btn = e.popup._contentNode.querySelector("[data-add]");
    if (btn) btn.addEventListener("click", () => { addToRoute(btn.dataset.add); map.closePopup(); });
  });
}

/* =========================================================================
   ルート編集 UI（SortableJS）
   ========================================================================= */
function renderRouteEditor() {
  const list = $("#route-list");
  if (!routeIds.length) {
    list.innerHTML = `<li class="route-empty">ルートが空です。候補から追加してください。</li>`;
  } else {
    list.innerHTML = routeIds.map(id => {
      const p = getPlaceById(id); if (!p) return "";
      return `<li class="route-item" data-id="${esc(id)}">
        <span class="num"></span>
        <span class="type-emoji">${TYPE_ICONS[p.type]}</span>
        <span class="nm">${esc(p.name)}</span>
        <button class="rm" data-rm="${esc(id)}" aria-label="削除">✕</button>
      </li>`;
    }).join("");
  }
  const cand = $("#candidates-list");
  cand.innerHTML = allPlaces().map(p => {
    const id = placeId(p.type, p.name);
    const inRoute = routeIndex(id) >= 0;
    return `<li class="cand-item ${inRoute ? "in-route" : ""}" data-id="${esc(id)}">
      <span class="type-emoji">${TYPE_ICONS[p.type]}</span>
      <span class="nm">${esc(p.name)}</span>
      <button class="add" data-addcand="${esc(id)}" aria-label="追加">⊕</button>
    </li>`;
  }).join("");

  $$("#route-list .rm").forEach(b => b.addEventListener("click", () => removeFromRoute(b.dataset.rm)));
  $$("#candidates-list .add").forEach(b => b.addEventListener("click", () => addToRoute(b.dataset.addcand)));

  // Googleマップでルートを開くボタンのリンクを更新（空なら無効化）
  const g = $("#route-gmaps");
  if (g) {
    const url = googleMapsDirUrl();
    const n = visibleRouteIds().length;
    // ★経由地は9件が上限。件数を出して「多すぎる」ことがその場で分かるようにする
    g.textContent = n ? `🗺 Googleマップでルートを開く（${n}地点）` : "🗺 Googleマップでルートを開く";
    if (n > 11) g.title = "経由地は9件までしか渡せません。マップの「日」フィルタで1日だけに絞ってください。";
    else g.removeAttribute("title");
    g.classList.toggle("too-many", n > 11);
    if (url) { g.href = url; g.classList.remove("disabled"); g.removeAttribute("aria-disabled"); }
    else { g.removeAttribute("href"); g.classList.add("disabled"); g.setAttribute("aria-disabled", "true"); }
  }
}

/* ルート全体の再同期 */
function syncRoute() {
  saveRoute();
  renderRouteEditor();
  refreshMarkers();
  if (map) { drawRouteLine(); applyFilters(); }
}

/* ドラッグ&ドロップ（並び替え + 候補→ルート追加）。
   コンテナに一度だけバインドすればよい（innerHTML差し替え後も有効）。 */
let sortableInited = false;
function setupSortableCross() {
  if (sortableInited || typeof Sortable === "undefined") return;
  sortableInited = true;
  // ルートリスト: 並び替え可・候補からの受け入れ可
  Sortable.create($("#route-list"), {
    group: { name: "shared", pull: true, put: true },
    animation: 150, ghostClass: "sortable-ghost", chosenClass: "sortable-chosen",
    draggable: ".route-item",
    onAdd: (evt) => {
      const id = evt.item.dataset.id;
      evt.item.remove();          // 落ちてきたクローンを除去（モデルから再描画）
      addToRoute(id);             // syncRoute 内で再描画される
    },
    onUpdate: () => {
      routeIds = $$("#route-list .route-item").map(li => li.dataset.id).filter(Boolean);
      syncRoute();
    }
  });
  // 候補リスト: クローンを引き出すだけ（並び替え・受け入れなし）
  Sortable.create($("#candidates-list"), {
    group: { name: "shared", pull: "clone", put: false },
    sort: false, animation: 150,
    draggable: ".cand-item"
  });
}

/* =========================================================================
   天気（Open-Meteo, APIキー不要）
   ========================================================================= */
const WX_ICONS = { 0:"☀️",1:"🌤",2:"⛅",3:"☁️",45:"🌫",48:"🌫",51:"🌦",53:"🌦",55:"🌧",61:"🌧",63:"🌧",65:"🌧",71:"🌨",80:"🌦",81:"🌧",82:"⛈",95:"⛈",96:"⛈",99:"⛈" };
async function loadWeather() {
  const wp = DATA.weatherPoint;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${wp.lat}&longitude=${wp.lon}` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FTokyo&forecast_days=7`;
  const box = $("#weather-content"), alert = $("#weather-alert");
  try {
    const r = await fetch(url);
    const d = await r.json();
    const dl = d.daily;
    const dows = ["日","月","火","水","木","金","土"];
    // ★4泊5日対応: 旅行期間中の日はすべて強調する（tripDate だけでなく DAY_KEYS 全部）
    const tripDays = (typeof DAY_KEYS !== "undefined") ? DAY_KEYS : [wp.tripDate];
    box.innerHTML = dl.time.map((iso, i) => {
      const dt = new Date(iso + "T00:00:00+09:00");
      const isTrip = tripDays.includes(iso);
      return `<div class="wx-day ${isTrip ? "is-trip" : ""}">
        <div class="wx-dow">${dows[dt.getDay()]}${isTrip ? " ★" : ""}</div>
        <div class="wx-date">${dt.getMonth()+1}/${dt.getDate()}</div>
        <div class="wx-icon">${WX_ICONS[dl.weather_code[i]] || "❔"}</div>
        <div class="wx-temp"><span class="hi">${Math.round(dl.temperature_2m_max[i])}°</span> / <span class="lo">${Math.round(dl.temperature_2m_min[i])}°</span></div>
        <div class="wx-pop">☔ ${dl.precipitation_probability_max[i] ?? "–"}%</div>
      </div>`;
    }).join("") + `<p class="wx-note muted">
      ☔ は <b>Open-Meteo</b>（欧米の数値予報モデル）の<b>1時間ごとの降水確率の最大値</b>です。
      気象庁・tenki.jp などの降水確率（<b>6時間区切りで1mm以上</b>）とは定義が違うため、<b>高めに出ます</b>。
      気温もモデルによって数℃変わります。<b>出発の判断は気象庁系の予報もあわせて</b>確認してください。
    </p>`;

    // 日付ラベルは weatherPoint.tripDate / DAY_KEYS から生成する（日付をハードコードしない）
    const fmt = iso => {
      const d = new Date(iso + "T00:00:00+09:00");
      return `${d.getMonth()+1}/${d.getDate()}（${dows[d.getDay()]}）`;
    };
    // その日の主目的に合わせた分岐文言。★中身は DATA.weatherAdvice にある（ここに直書きしない）
    const adviceFor = (iso, rain, hot) => {
      const plan = (DATA.weatherAdvice || {})[iso];
      if (!plan) return "";
      return mdBold(rain ? plan[2] : (hot ? plan[1] : plan[0]));
    };

    const rows = tripDays.map(iso => {
      const i = dl.time.indexOf(iso);
      if (i < 0) return null;
      const pop = dl.precipitation_probability_max[i];
      const wc = dl.weather_code[i];
      const hi = Math.round(dl.temperature_2m_max[i]);
      const rain = wc >= 51 || (pop ?? 0) >= 50;
      const hot = hi >= 33;
      return `<p class="wx-advice"><b>${fmt(iso)}:</b> ${WX_ICONS[wc] || ""} 最高${hi}° / 最低${Math.round(dl.temperature_2m_min[i])}° ・ 降水${pop ?? "–"}%。 ${adviceFor(iso, rain, hot)}</p>`;
    }).filter(Boolean);

    if (rows.length) {
      const anyBad = rows.some(r => r.includes("中止") || r.includes("短縮"));
      const missing = tripDays.filter(iso => dl.time.indexOf(iso) < 0);
      const note = missing.length
        ? `<p class="muted">${missing.map(fmt).join("・")}はまだ7日予報の範囲外です。出発が近づいたら、このページを開くだけで自動更新されます。</p>`
        : "";
      alert.innerHTML = `<div class="alert-box ${anyBad ? "" : "ok"}">
        <b>旅行期間（8/8〜8/12）の見込みと当日の動き方</b>
        ${rows.join("")}
        <p class="muted">予報は直前まで変わります。<b>各日の前夜と当日の朝に、雨雲・雷・最高気温を必ず再確認</b>してから屋外を実施するか決めてください。</p>
        ${note}
      </div>`;
    } else {
      alert.innerHTML = `<div class="alert-box ok">旅行期間（8/8〜8/12）はまだ7日予報の範囲外です。出発が近づいたら再確認を（このページを開くだけで自動更新されます）。</div>`;
    }
  } catch (e) {
    box.innerHTML = `<p class="muted">天気情報を取得できませんでした（オフライン時など）。Open-Meteoに接続できる環境で再読み込みしてください。</p>`;
  }
}

/* =========================================================================
   タブ切替
   ========================================================================= */
function setupTabs() {
  let weatherLoaded = false, mapReady = false;
  $$("#tabs .tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$("#tabs .tab").forEach(t => t.classList.remove("active"));
      $$(".panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const name = tab.dataset.tab;
      $("#panel-" + name).classList.add("active");
      if (name === "map") {
        if (!mapReady) { setupMap(); setupSortableCross(); mapReady = true; }
        setTimeout(() => map && map.invalidateSize(), 60);
      }
      if (name === "weather" && !weatherLoaded) { loadWeather(); weatherLoaded = true; }
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* =========================================================================
   初期化
   ========================================================================= */
/* =========================================================================
   Firebase リアルタイム同期（スケジュール・確定状態・ルートを全員で共有）
   ・Firebase未接続でも localStorage で通常どおり動く（オフラインファースト）
   ・window.FB は index.html の module スクリプトが用意する
   ========================================================================= */
let fbReady = false, applyingRemote = false;
function fbPush(key, value) {
  if (!fbReady || applyingRemote || !window.FB) return;
  // JSON往復で undefined プロパティを除去（Firebaseは undefined を拒否する）
  // set() は Promise を返すため .catch() が必須。同期 try/catch だけだと
  // permission denied（旅行終了後にDBルールで deny したとき）が未処理拒否になる。
  try {
    window.FB.set(window.FB.ref(window.FB.db, "takayama-trip/" + key), JSON.parse(JSON.stringify(value ?? null)))
      .catch(e => console.warn("Firebase 書き込み失敗（ローカル保存は成功）:", e.code || e));
  } catch (e) { console.warn("Firebase 書き込み失敗:", e); }
}
// Firebaseのキーは "." 等を使えないため、status は配列 [{id, s}] にして id を値側に持たせる
function statusToArray() { return Object.keys(statusMap).map(id => ({ id, s: getStatus(id) })); }
// リモート（DB）の変更をローカルへ反映
function applyRemote(d) {
  if (!d) return;
  applyingRemote = true;
  let changed = false;
  if (d.schedule && JSON.stringify(d.schedule) !== JSON.stringify(schedule)) {
    schedule = d.schedule; localStorage.setItem(SCHED_KEY, JSON.stringify({ v: SCHED_VERSION, items: schedule })); changed = true;
  }
  if (Array.isArray(d.status)) {
    const incoming = {};
    d.status.forEach(x => { if (x && x.id) incoming[x.id] = (x.s === "confirmed" ? "confirmed" : "tentative"); });
    // ★DBのstatusは「書き込まれた時点にあった地点」しか持たない。あとから地点を足すと
    //   そのidが欠けたまま届くので、丸ごと置き換えると新しい地点が statusMap から消える。
    //   DATA の category 由来の既定値に上書きする形で合成し、欠けた地点が
    //   （category が confirmed でも）未確定に落ちるのを防ぐ。
    const merged = { ...baseStatusMap(), ...incoming };
    if (JSON.stringify(merged) !== JSON.stringify(statusMap)) {
      statusMap = merged; localStorage.setItem(STATUS_KEY, JSON.stringify({ v: STATUS_VERSION, map: statusMap })); changed = true;
    }
  }
  if (d.route && JSON.stringify(d.route) !== JSON.stringify(routeIds)) {
    routeIds = d.route; localStorage.setItem(ROUTE_KEY, JSON.stringify(routeIds)); changed = true;
  }
  if (Array.isArray(d.info) && JSON.stringify(d.info) !== JSON.stringify(infoItems)) {
    infoItems = d.info; localStorage.setItem(INFO_KEY, JSON.stringify({ v: INFO_VERSION, items: infoItems })); changed = true;
  }
  if (Array.isArray(d.plans) && JSON.stringify(d.plans) !== JSON.stringify(plans)) {
    plans = d.plans; localStorage.setItem(PLANS_KEY, JSON.stringify({ v: PLANS_VERSION, items: plans })); changed = true;
  }
  applyingRemote = false;
  if (changed) rerenderAll();
}
// status/並び順/ルートに依存する全ビューを再描画
function rerenderAll() {
  renderAllCards();
  if ($("#info-content")) renderInfo();
  // renderSchedule() が本命・編集セクション・予備プランをまとめて描き直す。
  // ★編集中に他端末の変更が届いても、編集セクションは作り直さない
  //   （入力中のカーソルとIME変換が飛ぶため）。本命と予備だけ更新する。
  if ($("#master-plan")) {
    renderMasterPlan();
    renderBackupPlans();
    if (schedEditing) { renderSchedDayTabs(); renderScheduleEditor(); }
    else renderSchedule();
  }
  if ($("#route-list")) renderRouteEditor();
  if (typeof map !== "undefined" && map) { refreshMarkers(); drawRouteLine(); applyFilters(); }
}
// 匿名ログイン完了後に module から呼ばれる
window.startFirebaseSync = async function () {
  if (!window.FB || fbReady) return;
  fbReady = true;
  try {
    const tripRef = window.FB.ref(window.FB.db, "takayama-trip");
    const snap = await window.FB.get(tripRef);
    const d = snap.val();
    // コード側の初期バージョンが新しい（SCHED_DEFAULT/STATUS_DEFAULT を更新した）ら、
    // DB を現在のコードの初期値で作り直す（＝全員に配る初期表示の更新）。
    // ★★ここに新しいキーのバージョン条件を足してはいけない。★★
    //    FB.set(tripRef, …) は「ノード全体」を置き換えるので、
    //    たとえば plans を配るために条件を足すと、schedule も巻き添えで初期値に戻り、
    //    ブラウザで編集した旅程が消える。新しいキーは必ず下のように単独で用意する。
    if (!d || (d.schedVersion || 0) < SCHED_VERSION || (d.statusVersion || 0) < STATUS_VERSION
           || (d.infoVersion || 0) < INFO_VERSION) {
      await window.FB.set(tripRef, JSON.parse(JSON.stringify({
        schedule, schedVersion: SCHED_VERSION,
        status: statusToArray(), statusVersion: STATUS_VERSION,
        route: routeIds,
        info: infoItems, infoVersion: INFO_VERSION,
        plans, plansVersion: PLANS_VERSION
      })));
    } else if (!Array.isArray(d.plans)) {
      // 予備プランはあとから足したキー。既存のDBには無いので、ここだけ単独で用意する
      // （上の一括リセットには絶対に混ぜない）
      fbPush("plans", plans);
      fbPush("plansVersion", PLANS_VERSION);
    }
    window.FB.onValue(tripRef, s => applyRemote(s.val()));
    console.log("Firebase 同期を開始しました");
  } catch (e) { console.warn("Firebase 同期の開始に失敗:", e); fbReady = false; }
};

function init() {
  // ★最初に呼ぶ。setupMap() はマップタブを開くまで走らないが、下の renderRouteEditor() が
  //   currentFilters() 経由でルート列の .checked を読むため、ここで無いとページ全体が落ちる。
  renderMapFilters();
  // ★スケジュールタブは「本命プラン（読む）＋ 予備プラン」。編集セクションは
  //   renderSchedule() の中で schedEditing を見て作られる（既定は作られない＝誤タップ防止）
  renderSchedule();
  renderAllCards();   // スポット＋（絞り込み・並び替え付きの）レストラン／カフェ
  renderRoutes();
  renderPacking();
  renderInfo();
  renderDogFeature();   // ワンちゃん特集（読み物）
  syncRouteFromSchedule();   // スケジュールの地点順を初期ルートに反映（片方向連動）
  renderRouteEditor();
  setupLightbox();
  setupTabs();

  // カード内「ルートに追加」
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]");
    if (b && b.classList.contains("add-route")) addToRoute(b.dataset.add);
  });

  // 確定／未確定バッジ（カード・スケジュール共通）: どこで押しても全タブに反映
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-status-toggle]");
    if (t) toggleStatus(t.dataset.statusToggle);
  });

  // 予定行の地点チップ → その地点のカードへ移動。本命プランと予備プランで共通なので委任で拾う
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-goto-ref]");
    if (a) { e.preventDefault(); gotoRefCard(a.dataset.gotoRef); }
  });

  // ルート編集ボタン
  $("#route-reset").addEventListener("click", () => { routeIds = DEFAULT_ROUTE.slice(); syncRoute(); });
  $("#route-clear").addEventListener("click", () => { routeIds = []; syncRoute(); });

  // 注意タブの編集モード（誤タップ防止：既定は閲覧モード）
  $("#info-edit-toggle").addEventListener("click", () => { infoEditing = !infoEditing; renderInfo(); });
  $("#info-add").addEventListener("click", () => {
    infoItems.push({ warn: false, title: "", text: "" });
    saveInfo(); infoEditing = true; renderInfo();
    const last = $$("#info-content .info-title").pop(); if (last) last.focus();
  });
  $("#info-reset").addEventListener("click", () => {
    if (!confirm("注意タブを初期状態に戻しますか？（同行者の端末にも反映されます）")) return;
    infoItems = INFO_DEFAULT.map(x => ({ ...x })); saveInfo(); renderInfo();
  });
  $("#info-export").addEventListener("click", exportInfo);
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();
