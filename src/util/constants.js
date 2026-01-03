export const gameTitleMap = {
  aion2: "아이온2",
  land: "메이플랜드",
  sp: "서든",
  dp: "던파",
  lostark: "로스트아크",
};

// trade?gm=15&sv=112&krgame=메이플스토리&krserver=전체서버&type=sell
export const gameCodeMap = {
  aion2: 64,
  land: 3, // TODO: 실제 게임 코드로 업데이트 필요
  sp: 17,
  dp: 16, // TODO: 실제 게임 코드로 업데이트 필요
  lostark: 14,
};

// 게임별 메타데이터 설정
export const gameMetadata = {
  aion2: {
    title: "아이온2 키나거래소 | 빠르고 안전한 아이온2 아이템 거래",
    description:
      "아이온2 거래소 - 24시간 안전하고 빠른 아이온2 아이템, 키나, 계정 거래 플랫폼",
    keywords: [
      "아이온2",
      "아이온2 거래",
      "아이온2 아이템거래",
      "아이온2 키나",
      "아이온2 키나거래",
      "아이온2 키나 거래소",
      "아이온2 키나 구매",
      "아이온2 키나 판매",
      "아이온2 큐나 거래소",
      "아이온2 큐나 구매",
      "아이온2 큐나 판매",
      "키나 거래소",
      "아이온2 계정거래",
      "아이온2 아이템",
      "아이온2 거래사이트",
      "아이온2 아이템 판매",
      "아이온2 골드",
      "AION2 Kina",
      "AION2 거래소",
    ],
    canonical: "https://www.chanong.kr/aion2",
    ogTitle: "아이온2 키나거래소",
    ogDescription:
      "아이온2 거래소 - 24시간 안전하고 빠른 아이온2 아이템, 키나, 계정 거래 플랫폼",
    ogUrl: "https://www.chanong.kr/aion2",
    twitterTitle: "아이온2 키나거래소",
    twitterDescription: "아이온2 아이템 거래, 안전한 거래 플랫폼",
  },
  land: {
    title: "메랜메소거래소 | 빠르고 안전한 메랜메소아이템 거래",
    description:
      "메랜메소거래소 - 24시간 안전하고 빠른 메랜메소아이템, 골드, 계정 거래 플랫폼",
    keywords: [
      "메랜메소",
      "메랜메소거래",
      "메랜메소아이템거래",
      "메랜메소골드",
      "메랜메소골드거래",
      "메랜메소골드 거래소",
      "메랜메소골드 구매",
      "메랜메소골드 판매",
      "메랜메소계정거래",
      "메랜메소아이템",
      "메랜메소거래사이트",
      "메랜메소아이템 판매",
    ],
    canonical: "https://www.chanong.kr/land",
    ogTitle: "메랜메소거래소",
    ogDescription:
      "메랜메소거래소 - 24시간 안전하고 빠른 메랜메소아이템, 골드, 계정 거래 플랫폼",
    ogUrl: "https://www.chanong.kr/land",
    twitterTitle: "메랜메소거래소",
    twitterDescription: "메랜메소아이템 거래, 안전한 거래 플랫폼",
  },
  sp: {
    title: "서든SP거래소 | 빠르고 안전한 서든어택 아이템 거래",
    description:
      "서든SP거래소 - 24시간 안전하고 빠른 서든어택 아이템, 계정 거래 플랫폼",
    keywords: [
      "서든",
      "서든어택",
      "서든SP거래",
      "서든 아이템거래",
      "서든 계정거래",
      "서든 아이템",
      "서든SP거래사이트",
      "서든 아이템 판매",
      "서든어택SP거래소",
    ],
    canonical: "https://www.chanong.kr/sp",
    ogTitle: "서든SP거래소",
    ogDescription:
      "서든SP거래소 - 24시간 안전하고 빠른 서든어택 아이템, 계정 거래 플랫폼",
    ogUrl: "https://www.chanong.kr/sp",
    twitterTitle: "서든SP거래소",
    twitterDescription: "서든어택 아이템 거래, 안전한 거래 플랫폼",
  },
  dp: {
    title: "던파골드거래소 | 빠르고 안전한 던전앤파이터 아이템 거래",
    description:
      "던파골드거래소 - 24시간 안전하고 빠른 던전앤파이터 아이템, 골드, 계정 거래 플랫폼",
    keywords: [
      "던파",
      "던전앤파이터",
      "던파 거래",
      "던파 아이템거래",
      "던파 골드",
      "던파 골드거래",
      "던파 골드 거래소",
      "던파 골드 구매",
      "던파 골드 판매",
      "던파 계정거래",
      "던파 아이템",
      "던파 거래사이트",
      "던파 아이템 판매",
      "던전앤파이터 거래소",
    ],
    canonical: "https://www.chanong.kr/dp",
    ogTitle: "던파골드거래소",
    ogDescription:
      "던파골드거래소 - 24시간 안전하고 빠른 던전앤파이터 아이템, 골드, 계정 거래 플랫폼",
    ogUrl: "https://www.chanong.kr/dp",
    twitterTitle: "던파골드거래소",
    twitterDescription: "던전앤파이터 아이템 거래, 안전한 거래 플랫폼",
  },
};

// 게임별 거래목록 기본 URL
export const gameTradeUrl = {
  aion2:
    "https://www.gamemarket.kr/page/trade?gm=64&sv=310&krgame=아이온2&krserver=전체서버&type=sell",
  land: `https://www.gamemarket.kr/page/trade?gm=${gameCodeMap.land}&sv=9&krgame=메이플스토리월드&krserver=메이플랜드&type=sell`,
  sp: `https://www.gamemarket.kr/page/trade?gm=${gameCodeMap.sp}&sv=0&krgame=서든어택&krserver=전체서버&type=sell`,
  dp: `https://www.gamemarket.kr/page/trade?gm=${gameCodeMap.dp}&sv=36&krgame=던전앤파이터&krserver=전체서버&type=sell`,
};

// 게임별 네비게이션 키워드 설정
export const gameKeywords = {
  aion2: [
    {
      label: "거래목록",
      value: "trade",
      href: (game) =>
        `https://www.gamemarket.kr/page/trade?gm=64&sv=310&krgame=%EC%95%84%EC%9D%B4%EC%98%A82&krserver=%EC%A0%84%EC%B2%B4%EC%84%9C%EB%B2%84&type=sell`,
    },
    { label: "아이온2키나", value: "gold", href: (game) => `/${game}/gold` },
    {
      label: "아이온2키나거래",
      value: "loa-gold",
      href: (game) => `/${game}/gold`,
    },
    {
      label: "아이온2시세",
      value: "loa-gold-price",
      href: (game) => `/${game}/gold-price`,
    },
    {
      label: "아이온2키나시세",
      value: "lostark-gold-price",
      href: (game) => `/${game}/gold-price`,
    },
    {
      label: "아이온2레이드키나",
      value: "loa-raid-gold",
      href: (game) => `/${game}/raid-gold`,
    },
    {
      label: "아이온2현질",
      value: "lostark-cash",
      href: (game) => `/${game}/cash`,
    },
    {
      label: "아이온2모바일시세",
      value: "loa-mobile-price",
      href: (game) => `/${game}/mobile-price`,
    },
  ],
  land: [
    {
      label: "거래목록",
      value: "trade",
      href: (game) =>
        `https://www.gamemarket.kr/page/trade?gm=${gameCodeMap.land}&sv=9&krgame=메이플스토리월드&krserver=메이플랜드&type=sell`,
    },
    { label: "메이플랜드메소", value: "gold", href: (game) => `/${game}/gold` },
    {
      label: "메이플랜드메소거래",
      value: "land-gold",
      href: (game) => `/${game}/gold`,
    },
    {
      label: "메이플랜드시세",
      value: "land-gold-price",
      href: (game) => `/${game}/gold-price`,
    },
    {
      label: "메이플랜드메소시세",
      value: "land-meso-price",
      href: (game) => `/${game}/gold-price`,
    },
    {
      label: "메이플랜드레이드메소",
      value: "land-raid-meso",
      href: (game) => `/${game}/raid-gold`,
    },
    {
      label: "메이플랜드현질",
      value: "land-cash",
      href: (game) => `/${game}/cash`,
    },
    {
      label: "메이플랜드모바일시세",
      value: "land-mobile-price",
      href: (game) => `/${game}/mobile-price`,
    },
  ],
  sp: [
    {
      label: "거래목록",
      value: "trade",
      href: (game) =>
        `https://www.gamemarket.kr/page/trade?gm=${gameCodeMap.sp}&sv=0&krgame=서든어택&krserver=전체서버&type=sell`,
    },
    { label: "서든아이템", value: "item", href: (game) => `/${game}/trade` },
    {
      label: "서든아이템거래",
      value: "sp-item-trade",
      href: (game) => `/${game}/trade`,
    },
    {
      label: "서든시세",
      value: "sp-price",
      href: (game) => `/${game}/gold-price`,
    },
    {
      label: "서든아이템시세",
      value: "sp-item-price",
      href: (game) => `/${game}/gold-price`,
    },
    {
      label: "서든계정",
      value: "account",
      href: (game) => `/${game}/trade`,
    },
    {
      label: "서든현질",
      value: "sp-cash",
      href: (game) => `/${game}/cash`,
    },
    {
      label: "서든모바일시세",
      value: "sp-mobile-price",
      href: (game) => `/${game}/mobile-price`,
    },
  ],
  dp: [
    {
      label: "거래목록",
      value: "trade",
      href: (game) =>
        `https://www.gamemarket.kr/page/trade?gm=${gameCodeMap.dp}&sv=36&krgame=던전앤파이터&krserver=전체서버&type=sell`,
    },
    { label: "던파골드", value: "gold", href: (game) => `/${game}/gold` },
    {
      label: "던파골드거래",
      value: "dp-gold",
      href: (game) => `/${game}/gold`,
    },
    {
      label: "던파시세",
      value: "dp-gold-price",
      href: (game) => `/${game}/gold-price`,
    },
    {
      label: "던파골드시세",
      value: "dp-gold-price-detail",
      href: (game) => `/${game}/gold-price`,
    },
    {
      label: "던파레이드골드",
      value: "dp-raid-gold",
      href: (game) => `/${game}/raid-gold`,
    },
    {
      label: "던파현질",
      value: "dp-cash",
      href: (game) => `/${game}/cash`,
    },
    {
      label: "던파모바일시세",
      value: "dp-mobile-price",
      href: (game) => `/${game}/mobile-price`,
    },
  ],
};

// 게임별 페이지 설정
export const gamePageConfig = {
  aion2: {
    gameName: "아이온2",
    currencyName: "키나",
    currencyDisplay: "아이온2키나",
    tradeButtonText: "키나 거래하기",
    heroImage: "/aion2/1.png",
    heroTitle: "아이템 판매/구매를 안전하게",
    heroSubtitle: "지금 아이온2 아이템 거래를 통해",
    heroDescription: "게임 경험을 한 단계 끌어올리세요",
    productTitle: "아이온2키나 거래소",
    productAlt: "아이온2키나",
    statsTitle: "아이온2 아이템거래",
    rankingTitle: "아이온2 랭킹",
    stats: [
      { title: "아이온2키나", percent: 30.0 },
      { title: "아이온2키나", percent: 9.5 },
      { title: "아이온2키나시세", percent: 10.0 },
      { title: "아이온2키나판매", percent: 12.0 },
      { title: "아이온2키나구매", percent: 16.33 },
      { title: "아이온2현질", percent: 16.33 },
      { title: "아이온2누적현질", percent: 30.0 },
    ],
  },
  land: {
    gameName: "메이플랜드",
    currencyName: "골드",
    currencyDisplay: "메이플랜드 메소",
    tradeButtonText: "메소 거래하기",
    heroImage: "/land/1.jpg",
    heroTitle: "아이템 판매/구매를 안전하게",
    heroSubtitle: "지금 메이플랜드 아이템 거래를 통해",
    heroDescription: "게임 경험을 한 단계 끌어올리세요",
    productTitle: "메이플랜드메소 거래소",
    productAlt: "메이플랜드메소",
    statsTitle: "메이플랜드 아이템거래",
    rankingTitle: "메이플랜드 랭킹",
    stats: [
      { title: "메이플랜드메소", percent: 30.0 },
      { title: "메이플랜드메소", percent: 9.5 },
      { title: "메이플랜드메소시세", percent: 10.0 },
      { title: "메이플랜드메소판매", percent: 12.0 },
      { title: "메이플랜드메소구매", percent: 16.33 },
      { title: "메이플랜드현질", percent: 16.33 },
      { title: "메이플랜드누적현질", percent: 30.0 },
    ],
  },
  sp: {
    gameName: "서든",
    currencyName: "아이템",
    currencyDisplay: "서든아이템",
    tradeButtonText: "SP 거래하기",
    heroImage: "/sp/1.jpg",
    heroTitle: "아이템 판매/구매를 안전하게",
    heroSubtitle: "지금 서든어택 아이템 거래를 통해",
    heroDescription: "게임 경험을 한 단계 끌어올리세요",
    productTitle: "서든아이템 거래소",
    productAlt: "서든아이템",
    statsTitle: "서든 아이템거래",
    rankingTitle: "서든 랭킹",
    stats: [
      { title: "서든아이템", percent: 30.0 },
      { title: "서든계정", percent: 9.5 },
      { title: "서든아이템시세", percent: 10.0 },
      { title: "서든아이템판매", percent: 12.0 },
      { title: "서든아이템구매", percent: 16.33 },
      { title: "서든현질", percent: 16.33 },
      { title: "서든누적현질", percent: 30.0 },
    ],
  },
  dp: {
    gameName: "던파",
    currencyName: "골드",
    currencyDisplay: "던파골드",
    tradeButtonText: "골드 거래하기",
    heroImage: "/dp/1.jpg",
    heroTitle: "아이템 판매/구매를 안전하게",
    heroSubtitle: "지금 던전앤파이터 아이템 거래를 통해",
    heroDescription: "게임 경험을 한 단계 끌어올리세요",
    productTitle: "던파골드 거래소",
    productAlt: "던파골드",
    statsTitle: "던파 아이템거래",
    rankingTitle: "던파 랭킹",
    stats: [
      { title: "던파골드", percent: 30.0 },
      { title: "던파골드", percent: 9.5 },
      { title: "던파골드시세", percent: 10.0 },
      { title: "던파골드판매", percent: 12.0 },
      { title: "던파골드구매", percent: 16.33 },
      { title: "던파현질", percent: 16.33 },
      { title: "던파누적현질", percent: 30.0 },
    ],
  },
};
