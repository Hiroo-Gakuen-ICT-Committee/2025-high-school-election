"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const candidates = [
  {
    "id": 1,
    "name": "山藤緑夏",
    "photo": "/./会長_山藤.webp",
    "position": "会長",
    "course": "インターコース",
    "class": "H2-7",
    "electionsWon": 0,
    "supporters": "H2-8 宮崎大雅(2025年度演出部門長)",
    "slogan": "楽しく、無駄なく、わかりやすく",
    "statement": "生徒会会長に立候補しました、山藤です。\n私は、生徒会を「楽しく、無駄なく、わかりやすく」することを目標にしています。\nまず、生徒会の活動をもっとわかりやすく伝えるために、定期的な報告や資料の見直しを行い、皆さんにしっかりと情報が届くようにします。\nまた、意見や不満を自由に出せる「文句箱」を設置し、皆さんの声を学校づくりに活かしていきます。\n新しい部活や同好会を作りたい方のためにサポート窓口も設け、「やりたい」を応援していきます。\nさらに、けやき祭以外にもイベントを増やし、学校生活をもっと楽しく、充実させていきたいです。\nそして、生徒と学校をつなぐ「架け橋」として、管理職の先生方と意見交換できる場を作り、皆さんの声をしっかり学校へ届けます。\n一緒に、より良い学校を目指していきましょう。どうぞよろしくお願いします。\n最後に、ここまで読んでいただいた皆さんのために、なぞなぞを一つ用意しました：\n「私は存在していますが見えません。私について口に出すと消えます。」\n答えはスピーチで！それまで答えは秘密です。",
    "manifestoVideo": "https://drive.google.com/file/d/19RoDGGj-WdsV0yw-AmtIw1IRrVOeAXFa/preview"
  },
  {
    "id": 2,
    "name": "須賀凪紗",
    "photo": "/./H2副会長_須賀.webp",
    "position": "h2副会長",
    "course": "本科コース",
    "class": "H2-2",
    "electionsWon": 0,
    "slogan": "けやき祭を盛り上げる",
    "statement": "私は中学生の頃から計三年間、生徒会副会長を務めさせていただいています。\n今までの生徒会活動で培った知識や経験などを活かし、行事の運営や学校生活の改善など、楽しく充実した学校づくりを目指します。\nまた、全校生徒が心から楽しめるようなけやき祭の開催に努めたいです。\n副会長として、生徒会長を支えるだけでなく、自らも積極的に行動していきます。\n皆さんの思いをしっかり受け止め、信頼される副会長として誠実に取り組みます。どうぞよろしくお願いいたします。",
    "manifestoVideo": ""
  },
  {
    "id": 3,
    "name": "加藤清之介",
    "photo": "/./H2副会長_加藤.webp",
    "position": "h2副会長",
    "course": "本科コース",
    "class": "H2-3",
    "electionsWon": 0,
    "slogan": "けやき祭プレゼン見直し",
    "statement": "私が副会長に立候補したのは、けやき祭におけるプレゼンテーションの義務化を見直すためです。\n文化祭は、生徒が主体的に取り組む行事であり、本来、自由で創造的な活動が尊重される場であるべきです。\nしかし、現在の制度では、すべての生徒に対してプレゼンの作成・発表が事実上義務付けられています。\nその結果、多くの生徒が準備に追われ、けやき祭当日の活動時間や自由な発想が圧迫されるという矛盾が生じています。\n私はこの問題に対し、友人と共に改善案をまとめ、生徒会に提出しました。\nそこでは、プレゼンを廃止するのではなく、希望制または選抜制によって発表の場を設けること、また発表しない生徒も、LHRや授業内で発表の機会を設けるといった現実的な代替案を提案しました。\nさらに、必要な手続きを踏んだうえで、生徒会則に基づく署名活動の申請も行いました。\nしかし、申請は受理されず、対話も実現しませんでした。\nこのことに関して現生徒会を責め立てる意図は全くありませんが、外部から変化を促すことに限界を強く感じました。\nまた、「生徒の疑問や提案が、制度の中に入りにくい」という現実を強く実感しました。\nだからこそ、制度の外から声を上げるだけでなく、制度の内側から変える必要があると考え、副会長選への立候補を決めました。\n私は、対立を煽るために立候補したのではありません。\nむしろ、冷静で対話的な方法で制度を見直し、より柔軟で多様な表現が可能な文化祭を実現したいです。\n校長先生やPTA役員の方々との意見交換を重ね、建設的な対話に基づく制度改革を目指します。\nまた、保護者がプレゼンテーションの実施を真に望んでいるのかについても、実態を把握するためのアンケート調査などを実施します。\n経験の有無ではなく、問題意識と提案力、そしてそれを行動に移す力こそが、副会長に求められる資質だと信じています。\n皆さんの自由な発想と時間を守るために、どうかご支援をよろしくお願いいたします。",
    "manifestoVideo": ""
  },
  {
    "id": 4,
    "name": "東田歩真",
    "photo": "/./H2書記_東田.webp",
    "position": "h2書記",
    "course": "医進サイエンスコース",
    "class": "H2-6",
    "electionsWon": 0,
    "slogan": "持続可能なけやき祭",
    "statement": "私は生徒会役員として持続可能かつ常に前に進み続けるけやき祭およびスポーツフェスティバル運営を約束する。\nそのためにはまず常態化しているその場しのぎの安定性に欠けた運営方針を見直し、無謀な構造的改革への不必要な挑戦を排除する必要があるのではないだろうか。\n現在の学校行事は主にパンデミック以降に行われたいくつかの改革により以前のそれとは大きく様相を変えていて、未だにそれらの変化を当然のものとして安定化できていない。\nそれは決してその変化がネガティブなものであるという否定ではなく、引継ぎにおける不十分な技術継承や個人依存の組織体制など殆どの人間が改革の結果としての構造をツールとして使いこなす段階に至っていないからであろう。\n具体例に言及すると、新しく誕生した組織である演出部門や広報部門をはじめとする高い技術力を持つ「部門」やEsports大会などが行われた前夜祭などの新しい存在は、無限の可能性を持っているにも関わらずその不安定性から例年と同じ運用をするのが限界である。\nそのため、私はこれらの新たな構造の継承を明確化して可能性に飛び込める程度の安定性の確保を目指す。\nその安定性がこれを読んでいるあなたのような大衆を可能性が惹きつけ、未来の広尾学園をよりよい方向に導くと信じている。\n以上の思想に共感しようがしまいが、これからの学園のために是非私東田歩真に投票していただきたい。",
    "manifestoVideo": ""
  },
  {
    "id": 5,
    "name": "松澤あさと",
    "photo": "/./H2書記_松澤.webp",
    "position": "h2書記",
    "course": "医進サイエンスコース",
    "class": "H2-5",
    "electionsWon": 0,
    "slogan": "公明正大",
    "statement": "このたび、生徒会書記を務めさせていただくことになりました松澤明慧です。書記というと、記録を取るだけの役割に思われがちかもしれませんが、実は会議や行事の運営を支える大切なポジションだと考えています。正確でわかりやすい議事録を残すのはもちろん、全体がスムーズに動けるように、裏方としてしっかり支えていきたいと思います。\nまた、生徒一人ひとりの声を大事にしながら、より良い学校生活をつくっていくための橋渡し役にもなりたいです。まだまだ未熟な部分もありますが、責任感を持って、できることをひとつずつ丁寧に取り組んでいきます。みなさんと一緒に、もっと楽しく、もっと前向きな学校にしていけたらうれしいです。どうぞよろしくお願いします。",
    "manifestoVideo": ""
  },
  {
    "id": 6,
    "name": "山辺馨子",
    "photo": "/./H2会計_山辺.webp",
    "position": "h2会計",
    "course": "医進サイエンスコース",
    "class": "H2-6",
    "electionsWon": 0,
    "slogan": "医サイの底力",
    "statement": "学校行事で部活や委員会の仕事をする中で、生徒会の方々と関わる機会が多く、業務に興味を持ちました。けやき祭の際に、予算の削減や、売り上げの使い道の調整を強いられた団体も少なくありません。正確な会計業務に取り組み、限られた予算を有効に使い、多くの生徒にとって透明な予算運営を目指します。",
    "manifestoVideo": ""
  },
  {
    "id": 7,
    "name": "山口泰",
    "photo": "/./H2会計_山口.webp",
    "position": "h2会計",
    "course": "医進サイエンスコース",
    "class": "H2-5",
    "electionsWon": 0,
    "slogan": "財政の透明化",
    "statement": "この度、2年生になり再び生徒会本部役員に立候補しようと思ったのは、昨年度の活動を通して、学校生活をより良くするために自分ができることをもっと広げたいと感じたからです。昨年は多くの学校行事や生徒会活動に関わる中で、仲間と協力して一つの目標に向かう楽しさを知りました。今年はその経験を活かして、より積極的に意見を出し、全校生徒が過ごしやすい学校生活を支えていきたいと思います。また、会計としての役割をしっかりと果たし、透明性と信頼性のある会計業務を行い、皆が安心して活動できる環境作りに貢献したいです。",
    "manifestoVideo": ""
  },
  {
    "id": 8,
    "name": "尾崎太郎",
    "photo": "/./H1副会長_尾崎.webp",
    "position": "h1副会長",
    "course": "インターコース",
    "class": "H1-8",
    "electionsWon": 0,
    "slogan": "Make Hiroo Gakuen Great Again! Students FIRST!",
    "statement": "このたび生徒会副会長に立候補する1年8組の尾崎 太郎です。私は、多くの生徒が学校生活に満足している一方で、日常にはまだ解消されていない課題や小さな不便が残っていると感じています。生徒会役員の役割は、そうした声を丁寧に受け止め、現実的かつ論理的に改善策を考え、学校全体の環境をより良くしていくことだと考えています。登校時のエレベーター混雑の問題については、特に高層階に教室がある生徒にとって大きな負担となっている現状を踏まえ、単なる利用制限ではなく、データ収集やシミュレーション、実証実験など科学的な手法を用いて、最適な運用方法を模索したいと考えています。制服については、現実的かつ合理的な範囲で多様性や快適さを尊重し、クールビズ期間のローファー着用義務の見直しや、女子生徒のスカートとネクタイの組み合わせの許可など、既存の枠組みにとらわれない柔軟な運用を目指します。また、主に試験期間などにおける学習環境の向上にも取り組みたいと考えています。すでに十分な環境が整っていると感じる人もいる一方で、集中できないと感じている生徒もいるため、全体の学習意欲を高めるための環境整備を進めていきます。これらの取り組みを通じて、生徒会役員としての責任を果たすだけでなく、自分自身も一人の人間として成長したいと考えています。どうか、私にご支援をよろしくお願いいたします。",
    "manifestoVideo": ""
  },
  {
    "id": 9,
    "name": "三宅柊平",
    "photo": "/./H1副会長_三宅.webp",
    "position": "h1副会長",
    "course": "医進サイエンスコース",
    "class": "H1-5",
    "electionsWon": 0,
    "supporters": "H1-8丸上璃十(2025年度広報部門幹部), H1-6堀内水月(2025年度広報部門幹部), H1-5池田悠之丞(2025年度食品部門幹部), H1-5藤田四葉(2025年度演出部門幹部)",
    "slogan": "全く新しい広尾学園へ、根底から覆す。",
    "statement": "みなさん、こんにちは！生徒会副会長に立候補しました、三宅柊平です。僕が副会長に立候補した理由は2つあります。1つは、生徒会への関心を高め、生徒との距離をより近づけたい。もう1つは、みなさんが感じる日常の小さな不便を解消したい。この二つを、生徒会で働く友人たちと実現したいと思ったからです。\n今の生徒は生徒会役員と距離があり、活動への関心も低いように感じます。\nそこで、生徒会の業務内容を見直し、生徒の意見を反映させる活動に積極的に力を入れられるようにします。そして、毎学期の終業式で、生徒会がその学期に活動した成果を発表し、生徒の皆さんから意見やアイデアを集めます。そうすることで生徒と生徒会をダイレクトに繋げ、生徒会に新風を吹かせたいと考えています。\nまた、小さな不便を解消するために、お昼の食堂の混雑解消に着手します。列の混雑を防ぐためにポールなどを置き、スムーズな移動を実現します。\n僕は昨年、選挙管理委員会の副委員長として、生徒会選挙の投票方法を大きく変えることを委員と共に実現しました。また、けやき祭の前夜祭では、e-sports大会の運営にも携わりました。行動力には自信があります。\n副会長として積極的に動き、生徒と距離が最も近い役員としてみなさんの意見を聞き入れ、生徒会と生徒の橋渡し役になります。\nこの1年間を皆さんとともにかけがえのない日々にしたいです。ご投票よろしくお願いします！",
    "manifestoVideo": ""
  },
  {
    "id": 10,
    "name": "古川貫太",
    "photo": "/./H1副会長_古川.webp",
    "position": "h1副会長",
    "course": "インターコース",
    "class": "H1-7",
    "electionsWon": 0,
    "slogan": "初志貫徹",
    "statement": "副会長に立候補したダンス部に所属している数少ない男子の高校一年七組古川貫太です。私は学級委員を3回やり、この学校で過ごす生活の日々に不満を抱えてる人は沢山いることにきずきました。よく耳にするのが制服の話。日曜日を除いて週6回は着ないといけない制服、こんな毎日を過ごす服装に不満をもっていては学校生活を楽しんでるとは言い切れないでしょう。そこで、私は副会長になったら最初に制服改変、ネクタイに結べてきつさを調整できるものを選択肢として追加し、暑い時期にも楽にネクタイをつけられるようにします。女子にはネクタイとスカートの組み合わせも可能にし、制服の着方を増やします。また、学校行事も改善して、球技大会の実施や欅際の予算変更を行います。",
    "manifestoVideo": ""
  },
  {
    "id": 11,
    "name": "海老原和虎",
    "photo": "/./H1副会長_海老原.webp",
    "position": "h1副会長",
    "course": "本科コース",
    "class": "H1-3",
    "electionsWon": 0,
    "slogan": "前代未聞",
    "supporters": "H2-2 須賀凪紗(2024年度生徒会副会長), H1-3 梅影優那, H1-3 伊藤結大, H1-3 佐藤蒼弥",
    "statement": "生徒会副会長に立候補した海老原和虎です。\n僕は生徒会に入り、自ら掲げた公約を実現し、生徒の皆さんが学校に来ることをもっと楽しみに感じられるよう、全力で取り組んでいきたいと思っています。\n僕の公約は大きく二つあります。\n 一つ目は学食の充実、二つ目は授業アンケートの仕組み改善についてです。\nまず学食について。\n 僕は生徒会に入ったら、学食に新たな商品を追加する取り組みを進めたいと考えています。外部のさまざまなお店と協力し、期間限定商品や数量限定商品など、バリエーション豊かなメニューを導入していきます。もちろん、導入する商品は生徒の皆さんの意見を募り、皆さんの声を反映して決めていきます。さらに、人気が高い商品については、期間限定ではなく、恒常メニューとして定着させることにも挑戦したいです。\n次に、授業アンケートについて。\n 僕は、毎回アンケートに番号や名前を入力しなければならないことに、とても手間がかかっていると感じていました。小さなことかもしれませんが、「もっと簡単にならないのか」と、ずっと思っていました。\nそこで、授業アンケートの手順を見直し、より手軽に回答できる仕組みに改善していきたいと考えています。手間を減らすことで、生徒一人ひとりがもっと気軽に本音を書けるようにし、授業の質向上にもつなげたいと思います。\n学校生活をもっと楽しく、もっとワクワクできるものにするために、僕は全力で取り組みます。\nどうぞ、海老原和虎に皆さんの一票をよろしくお願いします！",
    "manifestoVideo": ""
  },
  {
    "id": 12,
    "name": "臼田奈緒",
    "photo": "/./H1副会長_臼田.webp",
    "position": "h1副会長",
    "course": "本科コース",
    "class": "H1-1",
    "electionsWon": 0,
    "supporters": "H1-1 大迫里帆, H1-1 川崎真奈, H2-6 山辺馨子, H1-1 石原沙彩",
    "slogan": "楽しい学園生活を!!",
    "statement": "私は生徒がもっと楽しいと感じる学校生活にしたいと思い、生徒会に立候補しました。中学3年間を通してたくさんのことを学び楽しい思い出も多く作りましたが、その中で「もっとこうしたい！！」と感じることがあり、自分から行動を起こそうと思いました。私は学校の行事やイベントが好きです。中でもスポーツフェスティバルは団結力や学年を超えた交流ができる大切な場なのでさらに盛り上げたいと思っています。たとえば、クラスTシャツをクラスごとで自由にデザインすることを学校に働きかけます。クラスカラーが何年も被ってしまってもデザインが変われば記憶も鮮明に残るでしょう。他にも、これまでの広尾学園の伝統や歴史を大切にしながら、私たち生徒が今やりたいと思う新しいアイディアをどんどん取り入れ、より楽しく、より居心地のよい学校生活のために貢献し、みんなで青春したいです！！",
    "manifestoVideo": "https://drive.google.com/drive/folders/1iQEj_1MfQShkAFJw2o5bScy4z89RN0Hd/preview"
  },
  {
    "id": 13,
    "name": "伴亜理沙",
    "photo": "/./H1書記_伴.webp",
    "position": "h1書記",
    "course": "インターコース",
    "class": "H1-7",
    "electionsWon": 0,
    "supporters": "H1-6 富岡茉莉英(2025年度広報部門幹部), H1-7 山口楚奈(2024年度生徒会書記), H3-7 谷有咲(2024年度ICT委員会委員長), H3-8 増井南々子",
    "slogan": "気付行動",
    "statement": "みなさんこんにちは！高校一年七組の伴亜理紗です！唐突ですが、私が書記に立候補した理由は 自分が昔から静かな人だったことです。しかし、私が自信持って言えることは自分は人の話をよく聞いたり、まわりをよく見たりするのが得意なことです。そんな観察力を活かして、みなさんが安心して気持ちよく過ごせるように全力にサポートしたいと思い、書記に立候補させていただきました。そこで、正確には三つアイデアがあります。具体的には「学校で履ける靴をもっと自由にすること」「広尾学園の生徒専用ホームページに、先生方のお写真や担当階とともにメールアドレスなどをまとめて掲載すること」「もしものときのための安全ワークショップの開催、また防災委員会の活動を増やす」ことです。特に三つ目のワークショップでは、地元の警察官をお招きし、怖いときでも声を出せる方法などを学ぶ1日限りのイベントを想定しています。\nこの三つは全て私の意見と私が学校で聞いた友達やクラスメートなどの意見をまとめ、考えた案です。私はこれからも、みなさんの声に耳を傾け、実現に向けて行動していきます。どうぞ、伴亜理紗に一票をお願いします！",
    "manifestoVideo": ""
  },
  {
    "id": 14,
    "name": "梅景優那",
    "photo": "/./H1書記_梅景.webp",
    "position": "h1書記",
    "course": "本科コース",
    "class": "H1-3",
    "electionsWon": 0,
    "supporters": "H1-3 齋藤優佳子, H1-3 野村一華, H1-3 張佑沢, H1-3 王麒和",
    "slogan": "生徒全員が全力で楽しめる学校へ!",
    "statement": "みなさんこんにちは！\n生徒会書記に立候補した高校1年3組の梅景優那です！\n私はこれまで部活に入っていなかったため、先輩や後輩と関わる機会が少なく、上下関係もあまり感じないまま学校生活を送ってきました。だからこそ、生徒会に入って、もっといろんな学年の人と繋がりながら、先輩後輩で楽しめる場をつくっていきたいと思っています。\nもし、私が生徒会に入ったら学校行事をもっと増やして学園生活をより楽しくしたいと思っています！\n例えば、クラスカラーで分けたチームでの球技大会など3学年が協力して盛り上がれる行事、けやき祭では各クラスごとにカフェなどが開けるように飲食の販売をできるようにしたり、装飾規定の見直しを行い、より本格的な出し物ができるようにするなど、より楽しく行える行事を提案したいです。また、広尾学園の特徴でもあるプレゼンをプレゼン大会と文化祭で独立させプレゼン大会では｢学ぶ場｣、文化祭では生徒主導で｢楽しむ場｣を作っていきたいと思っています。\n書記としてしっかりと役割を果たしながら、リーダーシップも身につけて、この学校をもっと明るく、楽しくしていきたいです。よろしくお願いします！",
    "manifestoVideo": ""
  },
  {
    "id": 15,
    "name": "早乙女千尋",
    "photo": "/./H1書記_早乙女.webp",
    "position": "h1書記",
    "course": "本科コース",
    "class": "H1-4",
    "supporters": "H2-2 須賀凪紗(2024年度生徒会副会長), H1-4 吉良日向",
    "electionsWon": 0,
    "slogan": "生徒と学校の~架け橋~",
    "statement": "高校生徒会、書記に立候補致しました。高校一年四組早乙女千尋です。\n私は中学で約二年間、生徒会に所属し沢山の力を養ってきました。高校生徒会は中学生徒会よりも主体的に取り組んでいきます。その中で、生徒の｢もっとこうしたい｣という声を学校に届けます。もちろん、一部の人の提案だけでも学校は良い場所になっていますが、それ以上のよりよい学校を目指すためには皆さんの考えや声が必要です。私が書記になることが出来たら、今までの経験と知識を活かし、生徒と学校の｢架け橋｣となることができるように最大の努力をします。生徒会として学校を更に楽しく環境の整った場にするために尽くしていくため、ご投票よろしくお願いします。",
    "manifestoVideo": ""
  },
  {
    "id": 16,
    "name": "市瀬由宇",
    "photo": "/./H1書記_市瀬.webp",
    "position": "h1書記",
    "course": "インターコース",
    "class": "H1-8",
    "electionsWon": 0,
    "supporters": "H3-8 岩田純麗(2024年度広報部門長), H3-8 李穎多(2024年度装飾部門長)",
    "slogan": "もっと話そう。もっと動こう。",
    "statement": "こんにちは！書記立候補の市瀬由宇です。中学三年生の時に生徒会書記を一年間務めさせていただきました。活動として一番心に残っているのはけやき祭です。生徒会の皆さんと一生懸命に「どうやって、けやき祭をもっと楽しくできるか」を考えた日々は大変であると同時に、学びも多かったです。\n一方で、「もっとできたのでは？」という思いもあります。複数の準備を同時並行で行う中では、チームワークが欠かせません。実際に、いつでも先輩や後輩に声をかけてもらって、アドバイスをもらったりあげたりして、次に進めたことは大変ありがたかったです。\n高校ではその体験を生かし、生徒会内でのコミュニケーションをさらに円滑にしていきたいと思います。進捗の見える化や、定期的な課題の共有の場を設定して、時間がかかっている作業を手が空いている人がサポートできる環境を作り、生徒会やけやき祭の通営に貢献したいと考えています。\n高校１年８組の市瀬由宇に清き一票をよろしくお願いいたします！",
    "manifestoVideo": ""
  },
  {
    "id": 17,
    "name": "宮本朱理",
    "photo": "/./H1書記_宮本.webp",
    "position": "h1書記",
    "course": "医進サイエンスコース",
    "class": "H1-5",
    "electionsWon": 0,
    "slogan": "不安のない楽しい学校生活に",
    "statement": "このたび生徒会書記に立候補させていただく1年5組の宮本朱理です。\n私は中学生の頃にも生徒会活動に参加していました。当時から、行事の準備や運営を「裏側」から支えることにやりがいを感じていました。目立たなくても、誰かの笑顔や「楽しかった！」という声の裏に、自分の小さな働きがあると感じられることが、私にとっての喜びでした。今回、生徒会書記という役割を通じて、そんな“裏方の力”をさらに発揮していきたいと思っています。\nそして、私はこの学校で過ごすみなさん一人ひとりに、「一度きりの青春」を不安なく、楽しく過ごしてほしいと心から願っています。そのために、書記としてできることがあるなら、どんな小さなことでも全力で取り組んでいく覚悟です。\nもしこれを読んでいいなと思っていただけた方は私に票を投じてくださると嬉しいです。",
    "manifestoVideo": ""
  },
  {
    "id": 18,
    "name": "酒巻仁",
    "photo": "/./H1会計_酒巻.webp",
    "position": "h1会計",
    "course": "インターコース",
    "class": "H1-8",
    "electionsWon": 0,
    "slogan": "納得できる収入と支出",
    "statement": "生徒会会計に立候補します、酒巻仁です。\n私は、生徒の皆さんが主体となって活動する部活動や文化祭を存続できるよう、貴重な生徒会費を適切に管理し、財政の透明化を徹底することを公約に掲げます。\n財政の透明化を徹底 :\n生徒の皆さんの生徒会予算を管理する以上、生徒会（会計）は、\n・執行状況\n・財政状況\n・予算, 決算の過程, 根拠\nを正確かつ、広く一般に公開するべきです。そこで、生徒の皆さんがアクセスしやすく、迅速な情報の更新が可能なウェブサイトを運営します。ここでは、情報の開示だけでなく、生徒の皆さんが理解しやすい様、図やグラフなどを用いた説明をします。また、ウェブサイトであるという特性を活かし、生徒の皆さんからの意見や疑問に対し、早くにレスポンスをすることで、生徒会と生徒の間の双方向の意見交換が活発に行われると考えます。\n私は透明性のある適切な会計運営により、これ以上の財政赤字を防ぎます。健全な財政管理を通じて、生徒の皆さんが活動しやすい、より良い学校にしていきます。",
    "manifestoVideo": ""
  },
  {
    "id": 19,
    "name": "花田純之介",
    "photo": "/./H1会計_花田.webp",
    "position": "h1会計",
    "course": "本科コース",
    "class": "H1-2",
    "electionsWon": 0,
    "slogan": "生徒全員が充実した学校生活を!",
    "statement": "現在の会計の最大の課題は生徒会費の繰越金の減少です。生徒会費は部活動やけやき祭など自由な生徒活動のために全生徒から頂いている大切なお金です。この学校は年度末に生徒会費の納入があり、それまで繰越金という貯金で賄う会社員の月給生活のような財政運用を行っているため、繰越金を予算より十分多く確保する必要がありますが、実際は直近2年間の平均支出の約735万円を下回る約722万円しかありません。つまり今年度中に財源が底をつき財政破綻に陥る可能性が非常に高いのです。財政難による活動制限を避けるために、偏る部活動への助成を含めた現在の予算配分を見直し、生徒全員にとって公正に還元できるような財政運用の提案と実行をすることを宣言し、会計として立候補いたします。また全員でこの危機的状況に取り組むための透明性のある情報共有、会計会報の作成や総会資料の明瞭化を目指します。難しい課題ですが、全生徒一丸となって取り組めば必ず解決されるものです。これまでの会計役員としての経験を生かして、生徒会費の財政を持続可能なものとし、生徒全員の自由で快適な学校生活をお金の面で支えるために、日々全力で活動していきます。応援よろしくお願いします。",
    "manifestoVideo": ""
  }
];

interface Candidate {
  id: number;
  name: string;
  photo: string;
  position: string;
  course: string;
  supporters?: string;
  class: string;
  electionsWon: number;
  slogan: string;
  statement: string;
  manifestoVideo: string;
}


// 政策文(statement)の \n を <br /> に変換する関数
function formatStatement(statement: string) {
  return statement.split("\n").map((line, idx) =>
    <span key={idx}>
      {line}
      <br />
    </span>
  );
}

const CandidateDetail = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const params = useParams();
  const id = params.id as string; // 型を明示的に `string` に

  useEffect(() => {
    if (id) {
      const foundCandidate = candidates.find(
        (c) => c.id.toString() === id
      );
      setCandidate(foundCandidate || null);
    }
  }, [id]);

  if (!candidate) {
    return <div>立候補者ページが見つかりませんでした。</div>;
  }

  return (
    <div className="p-5 bg-[#F1F1F1] mt-20 min-h-screen">
      <Header />
      <div className="w-full md:w-4/5 mx-auto bg-white p-6 rounded-lg shadow-lg">
        <Link href="/candidates">
          <button className="flex items-center text-green-700 mb-4">
            <FaArrowLeft className="mr-2" /> 候補者一覧へ戻る
          </button>
        </Link>

        <div className="flex flex-col md:flex-row items-start">
          <div className="flex-1">
            <p className="text-lg text-gray-700 font-bold mb-2">{candidate.position}立候補者</p>
            <h1 className="text-4xl text-green-700 font-bold">{candidate.name}</h1>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold border-b pb-2">プロフィール</h2>
                <ul className="mt-4 text-lg space-y-2">
                <li>
                  <strong>所属コース:</strong> {candidate.course}
                </li>
                <li>
                  <strong>所属クラス:</strong> {candidate.class}
                </li>
                <li>
                  <strong>キャッチフレーズ:</strong> {candidate.slogan}
                </li>
                <li>
                  <strong>推薦人:</strong> {candidate.supporters || "なし"}
                </li>

              </ul>
            </div>
          </div>
          <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-6">
            <img
              src={candidate.photo}
              alt={candidate.name}
              className="w-full md:w-80 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center w-full mb-4">
            <div className="bg-green-700 text-white font-bold py-1 px-4 relative inline-block align-middle flex justify-center items-center">
              <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
              <h2 className="text-3xl ml-6 mb-2 inline-block align-middle mt-2 mr-3">所信表明</h2>
            </div>
          </div>
          <p className="mt-2 text-lg">{formatStatement(candidate.statement)}</p>
        </div>

        <div className="mt-6">
          <div className="flex items-center w-full mb-4">
          <div className="bg-green-700 text-white font-bold py-1 px-4 relative inline-block align-middle flex justify-center items-center">
              <div className="absolute left-0 top-0 bottom-0 bg-white ml-1 mr-5 w-2 h-full"></div>
              <h2 className="text-3xl ml-6 mb-2 inline-block align-middle mt-2 mr-3">政見放送</h2>
            </div>
          </div>
          <div className="mt-4 w-full md:w-3/4 mx-auto">
            <iframe
              src={candidate.manifestoVideo}
              className="w-full h-64 md:h-96 border rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      </div>
  );
};

export default CandidateDetail;
