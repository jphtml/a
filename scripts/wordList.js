let listA = [
	"ぶんぽう","きそ","おさらい","ぶんしょう","おおい",
	"ならう","だいぶぶん","ほとんど","りかい","ちしき",
	"かいせつ","まとめ","にゅうもん","へん","しゅるい",
	"つなげる","けいご","つかう","しつれい","たんい",
	"にちじょう","せいかつ","さいに","ごどく","もとめる",
	"まちがう","いと","くぎる","はたらく","だんらく",
	"ぶんせつ","あつまる","きじ","くわしい","こうぞう",
	"おさえる","まとまる","こわす","ふしぜん","いち",
	"きのう","あと","ばあい","じっさい","たいけん",
	"ほうもん","しよう","きんし","さいがい","こす",
	"じゅんび","かかる","よくじつ","はこぶ","びょういん",
	"じしん","へんか","かのうせい","せいぶ","じゅうてん",
	"とうめい","ぼくじょう","きんちょう","はんたい","かつどう",
	"ねだん","じこ","じょうほう","けっか","しょうめい",
	"たてもの","ふえる","けいかく","いがい","よてい",
	"しらべる","よわい","ふく","くび","かお",
	"おてあらい","ほそい","せまい","あびる","かた",
	"はやし","もり","ちず","ごうかく","おんど",
	"のうりょく","しゅうかん","へる","げんざい","くすり",
	"わらう","かむ","すわる","きぼう","きたい",
	"こづかい","せつやく","せつめい","こうえん","きかい",
	"ちゅうい","かがく","いしゃ","ふつう","とくべつ",
	"けつごう","うつる","ゆび","きゅう","けいさん",
	"じゅうよう","ひつよう","きそく","ほうりつ","すうじ",
	"すうがく","ふくざつ","はいたつ","べんじょ","きんじょ",
	"ふべん","かいけつ","かかく","さくひん","はんばい",
	"あじ","のち","むね","こし","しょうらい",
	"えきたい","けつえき","こきゅう","しょくぶつ","おかす",
	"くいき","すな","さばく","きげん","きょり",
	"きちょう","かぐ","きぐ","こうりつ","くべつ",
	"けつろん","しゅだい","きゅうそく","がめん","げんきん",
	"くうちゅう","かみなり","はこ","かたい","ごご",
	"ごぜん","えき","みじかい","ひろい","こめ",
	"けす","みせ","きめる","かず","かつ",
	"とけい","きる","きょねん","なおす","せん",
	"まがる","とまる","じてんしゃ","びょうき","いっぱい",
	"ひこうき","にっき","きたない","ふとい","たてる",
	"そば","しめる","からい","すっぱい","うで",
	"まず","せんげつ","せんしゅう","しょうしょう","としうえ",
	"おとな","あける","あく","ひらく","とじる",
]

let listB = [
	"みせる","しごと","がっこう","うたう","おや",
	"あね","あに","むすめ","むすこ","けっこん",
	"りゅうこう","おっと","つま","てら","おこなう",
	"くだる","いっぽう","きゅうじつ","ちから","きょうりょく",
	"じんこう","でぐち","ただ","いりぐち","へた",
	"たりる","たす","いずれ","かいがい","たっする",
	"かない","くうき","にんき","あかるい","ほうこう",
	"むく","ねんかん","あいだ","にんげん","さいだい",
	"はじめて","こんご","うし","はんぶん","かたる",
	"げんご","もじ","なお","ほぼ","つまり",
	"かつて","やっと","おくさん","りょうしん","すがた",
	"たいかい","しばらく","まにあう","しゃかい","しゃいん",
	"しかた","うまい","しょくじ","かじ","だいじ",
	"こうじ","こうじょう","でんき","とおり","かよう",
	"こうつう","しゃどう","どうろ","とち","やむ",
	"ほどう","なんど","さいきん","ちょうなん","ひろがる",
	"まったく","あんぜん","こくない","こっかい","きこく",
	"ぎんこう","ちかてつ","ぎゅうにく","ぶんや","やさい",
	"ほんや","やおや","わん","みらい","しゅうまつ",
	"なくす","さくぶん","もちいる","ようじ","ひ",
	"うりば","ばいてん","にかい","かいだん","だんだん",
	"しき","ねつ","あたたまる","きおん","だい",
	"たいふう","じじょう","ほうこく","しんぶん","ちゅうしん",
	"ゆうびん","きょく","こうばん","ばんち","ばんごう",
	"ばしょ","だいどころ","じゅうしょ","おかしい","みょうじ",
	"しめい","かっこく","まち","つごう","にもつ",
	"しなもの","けんぶつ","ひじょう","とうじ","こえ",
	"のこる","けっきょく","じょうたい","じょうきょう","じだい",
	"たしか","かならず","こんかい","かんする","ないよう",
	"おと","あたえる","りよう","そんざい","たいせつ",
	"しゃしん","じき","ぎゃく","しめす","ていど",
	"えいきょう","ゆうじん","たつ","さきほど","あたる",
	"みとめる","れきし","み","ちいき","しょうかい",
	"こうきょう","あぶない","あめ","あつい","べんり",
	"ぼうし","ちょうど","でかける","ふうとう","げんかん",
	"ぎゅうにゅう","は","はがき","はいざら","はく",
	"はる","はし","ひく","ほんだな","じびき",
	"じしょ","かばん","かびん","かど","かりる",
	"かさ","かす","かてい","けいかん","けっこう",
	"きっぷ","きって","こうさてん","きょうだい","きょうしつ",
]

let listC = [
	"もん","むら","なく","なみ","にぎやか",
	"にわ","ぬぐ","ぬるい","おおぜい","さら",
	"れいぞうこ","ろうか","りょこう","さいふ","さく",
	"さんぽ","さす","さとう","せびろ","せいと",
	"せっけん","せんたく","しお","しょうゆ","そうじ",
	"すう","すずしい","たのむ","たて","とる",
	"つとめる","うすい","うわぎ","よこ","ざっし",
	"うつ","ひっこし","あいさつ","あんない","あやまる",
	"ばい","びじゅつかん","ぼうえき","ぶんか","ちゅうしゃ",
	"ちゅうしゃじょう","だいたい","だんぼう","だんせい","でんぽう",
	"でんとう","どんどん","どろぼう","どうぐ","えだ",
	"えんりょ","ふくしゅう","ふむ","ふね","ふりだす",
	"ふとん","げんいん","ぐあい","は","はっきり",
	"はつおん","へんじ","ひどい","ひやす","ひげ",
	"ひきだす","ひろう","ひるま","ほめる","ほんやく",
	"ほうそう","いがく","いか","いきもの","いない",
	"いなか","いのる","いろんな","いそぐ","いと",
	"じむしょ","じてん","じゆう","かちょう","かがみ",
	"かいがん","かいぎしつ","かいじょう","かんごふ","かわく",
	"かざる","け","けが","けいざい","けんか",
	"けんきゅう","けいき","きびしい","きぶん","きかい",
	"きしゃ","こくさい","こまかい","こむ","ころ",
	"こしょう","こうちょう","こうどう","こうがい","こうぎ",
	"こうぎょう","こうこう","こうむいん","くらべる","くれる",
	"くさ","くうこう","きょういく","きょうみ","きょうそう",
	"きゅうこう","まんなか","まわる","めずらしい","みなと",
	"みそ","みずうみ","もうすぐ","むかえる","むし",
	"なくなる","なれる","なる","ねぼう","にがい",
	"にがす","にんぎょう","におい","にる","のど",
	"のりかえる","のりもの","ぬれる","ぬる","にゅうがく",
	"にゅういん","おどる","おいわい","おこる","おくじょう",
	"おくれる","おくりもの","おまつり","おみやげ","おもて",
	"おれい","おしいれ","おたく","つる","れいぼう",
	"れんらく","りゆう","るす","りょかん","りょうほう",
	"さびしい","さいご","さか","さかん","さんぎょう",
	"さわぐ","せいぶつ","せいじ","せいめい","せいさん",
	"せき","せんそう","し","しあい","しかる",
	"しっかり","しま","しんせつ","しっぱい","したぎ",
	"しょうじる","しょうせつ","そぼ","そだてる","そふ",
	"そろそろ","そつぎょう","そうだん","すべる","すごい",
];

let listD = [
	"すいえい","すっかり","すみ","すむ","すり",
	"すてる","ただしい","たいいん","たいてい","たまに",
	"たな","たたみ","たずねる","てぶくろ","ていねい",
	"てきとう","よほう","てんらんかい","とどける","とっきゅう",
	"とこや","とりかえる","とうとう","つける","つたえる",
	"うえる","うける","うけつけ","うんてんしゅ","うら",
	"うつす","わかれる","わく","われる","わりあい",
	"やくにたつ","やせる","やわらかい","よごす","よろこぶ",
	"よる","よしゅう","ようい","よやく","ゆ",
	"ゆれる","ゆびわ","あかり","あんき","あらた",
	"あらゆる","ぶんめい","ぶんせき","ちい","ちょうき",
	"だんし","であう","どりょく","どういつ","ふり",
	"ふそく","ふたたび","がいこう","どれい","がっき",
	"がくもん","がくしゃ","がくしゅう","ぎちょう","ぎかい",
	"ごがく","はげしい","はくぶつかん","はつめい","はずす",
	"ひとこと","ほんにん","いっち","いがい","いっか",
	"いっぱん","いっしょう","いっしゅ","いっしゅん","いっしょ",
	"よういん","よういく","うわさ","たんき","ぶたにく",
	"からだ","かわ","きっさてん","くだもの","たいしかん",
	"と","とりにく","ようふく","あらう","こまる",
	"つく","ひくい","ちり","ひこうじょう","いちど",
	"かんけい","かわる","けしき","きけん","きぬ",
	"ことり","おそれる","もめん","おみまい","せいよう",
	"しみん","じどうしゃ","つの","ねっしん","せわ",
	"しゅっせき","どく","ふくそう","ふせぐ","ひてい",
	"ほうふ","いふく","じっこう","じしん","じっしゅう",
	"かいぜん","かる","かさい","かてい","きんだい",
	"こうりょ","くばる","きょか","きょうどう","きょうつう",
	"ごちそう","でんとう","もうしわけ","むしば","ねったい",
	"じたく","にっこう","にんずう","のべる","さつ",
	"しずむ","たまたま","ためる","たたかう","ていでん",
	"うらやましい","うしなう","わがや","やりなおす","よさん",
	"よそうがい","ようす","ゆうりょう","むりょう","べんごし",
	"ちきゅう","でんし","どろ","えがお","えんき",
	"ぐんたい","はたけ","ひひょう","ひく","ひたい",
];
