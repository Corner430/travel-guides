/* ===== 行程数据（数据驱动，统一维护，模板渲染） ===== */
const STOPS = [
  {
    type: "stop", time: "07:00 出发", icon: "🚦",
    title: "深圳·南头古城 启程",
    meta: "集合 / 加油 / 检查胎压",
    desc: "清晨从南头古城出发，趁早高峰前上高速。建议提前加满油、备好高速通行（ETC/粤通卡），车上带一两瓶水。",
    tags: [{ t: "早出发避堵", c: "tip" }, { t: "备好ETC", c: "tip" }],
    info: []
  },
  {
    type: "drive", text: "自驾约 130~165km · 走深中通道 / 广深沿江高速 · 约 2 小时"
  },
  {
    type: "stop", time: "09:30 早餐", icon: "🥢",
    title: "永叔小食 · 老江门早味",
    meta: "蓬江区 · 三十三墟街/长堤一带老字号",
    desc: "江门人从小吃到大的传统小食店，主打鸡蛋仔、糯米糍、糖不甩、绿豆饼等怀旧小吃。份量适中，作为开胃早餐刚刚好，别吃太饱，后面还有得吃。",
    tags: [{ t: "鸡蛋仔", c: "eat" }, { t: "糯米糍", c: "eat" }, { t: "老字号", c: "fun" }],
    info: [["💰 人均", "¥15~25"], ["⏱ 用时", "约 40 分钟"], ["🅿️ 停车", "老城区车位紧张，建议停就近收费停车场后步行"]]
  },
  {
    type: "stop", time: "10:30 打卡", icon: "🏘️",
    title: "启明里 + 三十三墟街",
    meta: "蓬江区兴宁路一带 · 《狂飙》取景地",
    desc: "启明里是百年华侨古村落，中西合璧的南洋骑楼、侨批馆、文创店与网红咖啡;紧邻的三十三墟街是《狂飙》'旧厂街'原型，青石板路、骑楼老街，随手一拍都是复古大片。两个点步行可达，连着逛最顺。",
    tags: [{ t: "南洋骑楼", c: "fun" }, { t: "侨批馆", c: "fun" }, { t: "出片圣地", c: "fun" }, { t: "喜茶创始店", c: "eat" }],
    info: [["💰 门票", "免费开放"], ["⏱ 用时", "1.5~2 小时"], ["🅿️ 停车", "周边有公共停车场，旺日较满，可停中山公园/地王广场附近"]]
  },
  {
    type: "stop", time: "12:30 午餐", icon: "🍲",
    title: "松记饭店 · 地道五邑小炒",
    meta: "蓬江区老城 · 本地人气小馆",
    desc: "接地气的本地饭店，主打镬气十足的家常小炒与煲仔菜。逛完老街正好走过去，点几个招牌小炒配白饭，性价比高、味道正。人多可早点到避开排队。",
    tags: [{ t: "镬气小炒", c: "eat" }, { t: "煲仔菜", c: "eat" }, { t: "高性价比", c: "tip" }],
    info: [["💰 人均", "¥50~70"], ["⏱ 用时", "约 1 小时"], ["🅿️ 停车", "门店周边路边/小型停车场"]]
  },
  {
    type: "drive", text: "市区前往新会茶坑村 · 约 15~20km · 约 30 分钟"
  },
  {
    type: "stop", time: "14:30 慢享", icon: "☕",
    title: "茶坑村 · 森米艺术空间",
    meta: "新会区会城街道茶坑村（梁启超故居所在地）",
    desc: "茶坑村是'广东十大最美乡村'，也是梁启超故居所在地，村旁葵山凌云塔很出片。先逛逛故居与村落，再到森米艺术空间点一杯招牌'陈皮美式'——新会陈皮 + 美式咖啡，醇香微苦带柑香，是这趟旅程最有仪式感的一杯。",
    tags: [{ t: "陈皮美式", c: "eat" }, { t: "梁启超故居", c: "fun" }, { t: "最美乡村", c: "fun" }, { t: "出片", c: "fun" }],
    info: [["💰 人均", "咖啡 ¥30~45"], ["⏱ 用时", "1.5 小时"], ["🅿️ 停车", "村口及故居纪念馆有停车场"]]
  },
  {
    type: "stop", time: "16:30 逛吃", icon: "🍊",
    title: "新会陈皮村",
    meta: "新会区银湖大道东 9 号",
    desc: "国家地理标志产品主题园区，集陈皮文化体验馆、交易市场、餐饮于一体。可逛陈皮多媒体展馆（竹光隧道、超大玻璃屏、闻香区），再到市场挑选陈皮、陈皮糖、柑普茶等手信带回家。后备箱在这里派上用场。",
    tags: [{ t: "陈皮文化馆", c: "fun" }, { t: "买手信", c: "tip" }, { t: "柑普茶", c: "eat" }],
    info: [["💰 门票", "园区免费，部分展馆/体验另收费"], ["⏱ 用时", "1~1.5 小时"], ["🅿️ 停车", "园区大型免费停车场"]]
  },
  {
    type: "drive", text: "陈皮村前往五洞 · 约 20~30km · 约 35 分钟"
  },
  {
    type: "stop", time: "18:30 晚餐", icon: "🥩",
    title: "五洞大众牛餐馆",
    meta: "江门·五洞村 · 现宰牛肉自助火锅",
    desc: "江门超火爆的现宰牛肉打边炉，几百张桌子热闹非凡。自助式：自己推车选肉（吊龙、雪花、嫩牛、胸口油、牛舌、牛百叶、牛肉丸……），先结账再开涮，新鲜鲜甜。别忘了招牌咖喱牛肉菠萝包。免费停车，吃饱再启程回深。",
    tags: [{ t: "现宰牛肉", c: "eat" }, { t: "打边炉", c: "eat" }, { t: "咖喱菠萝包", c: "eat" }, { t: "免费停车", c: "tip" }],
    info: [["💰 人均", "¥80~120"], ["⏱ 用时", "约 1.5 小时"], ["🅿️ 停车", "餐馆自带大型免费停车场"]]
  },
  {
    type: "stop", time: "21:30 到家", icon: "🏠",
    title: "返回深圳·南头古城",
    meta: "晚餐后启程，约 2~2.5 小时到家",
    desc: "沿江门大道接深中通道（或虎门大桥）回深，到南头古城约 21:30~22:00。圆满收官，行李箱里是满满的陈皮香。",
    tags: [{ t: "深中通道", c: "tip" }, { t: "安全驾驶", c: "tip" }],
    info: []
  }
];

const BUDGET = [
  { ic: "⛽", t: "油费（往返约330km）", v: "¥160" },
  { ic: "🛣️", t: "高速过路费（往返）", v: "¥190" },
  { ic: "🅿️", t: "停车费（多处）", v: "¥40" },
  { ic: "🥢", t: "早餐·永叔小食", v: "¥20" },
  { ic: "🍲", t: "午餐·松记饭店", v: "¥60" },
  { ic: "☕", t: "陈皮美式·森米", v: "¥40" },
  { ic: "🥩", t: "晚餐·五洞牛餐馆", v: "¥100" },
  { ic: "🎟️", t: "门票/体验（多为免费）", v: "¥0~50" }
];

const TIPS = [
  {
    ic: "🅿️", h: "停车攻略", items: [
      "蓬江老城（永叔/松记/老街）车位最紧张，建议停中山公园、地王广场等公共停车场后步行。",
      "茶坑村、陈皮村、五洞牛餐馆均有较大停车场，其中陈皮村与牛餐馆基本免费。",
      "旺季周末提前到，热门点位 11 点后容易满。"
    ]
  },
  {
    ic: "⏰", h: "时间与排队", items: [
      "早茶别吃太饱，后面还有午餐、咖啡和重磅牛肉晚餐。",
      "松记饭店、五洞牛餐馆高峰需排队，建议错峰（午餐 12 点前到、晚餐 18:30 前到）。",
      "梁启超故居纪念馆周一闭馆，周二至周日 09:00–17:00。"
    ]
  },
  {
    ic: "🚗", h: "自驾提示", items: [
      "出发前加满油、检查胎压，备好 ETC/粤通卡。",
      "优先走深中通道（2024 通车）更快；车流大时改虎门大桥。",
      "开车不喝酒，火锅店若想喝酒请安排代驾或不饮酒。"
    ]
  },
  {
    ic: "🛍️", h: "手信推荐", items: [
      "新会陈皮、陈皮糖、柑普茶（陈皮村可一站买齐）。",
      "三十三墟街的郑师傅绿豆饼、各类传统手信。",
      "后备箱预留空间，陈皮村购物记得保留小票。"
    ]
  }
];

/* ===== 模板渲染 ===== */
function renderTimeline() {
  const tl = document.getElementById("timeline");
  tl.innerHTML = STOPS.map(s => {
    if (s.type === "drive") {
      return `<div class="stop drive"><div class="pill"><span class="car">🚗💨</span>${s.text}</div></div>`;
    }
    const tags = (s.tags || []).map(t => `<span class="chip ${t.c}">${t.t}</span>`).join("");
    const info = (s.info || []).map(i => `<div><b>${i[0]}</b><br>${i[1]}</div>`).join("");
    return `
    <div class="stop">
      <div class="dot">${s.icon}</div>
      <div class="card">
        <span class="time">🕐 ${s.time}</span>
        <h3>${s.title}</h3>
        <div class="meta">📍 ${s.meta}</div>
        <p>${s.desc}</p>
        <div class="tags">${tags}</div>
        ${info ? `<div class="info-row">${info}</div>` : ""}
      </div>
    </div>`;
  }).join("");
}

function renderBudget() {
  document.getElementById("budget-grid").innerHTML = BUDGET.map(b => `
    <div class="bcard fade">
      <div class="ic">${b.ic}</div>
      <div class="bt">${b.t}</div>
      <div class="bv">${b.v}</div>
    </div>`).join("");
}

function renderTips() {
  document.getElementById("tips-grid").innerHTML = TIPS.map(t => `
    <div class="tip-card fade">
      <div class="th"><span class="ti">${t.ic}</span>${t.h}</div>
      <ul>${t.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>`).join("");
}

/* ===== 滚动进入动画 ===== */
function observe() {
  const io = new IntersectionObserver((es) => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
  }, { threshold: .18 });
  document.querySelectorAll(".stop, .fade").forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  renderBudget();
  renderTips();
  observe();
});
