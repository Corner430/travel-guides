// 行程时间轴数据
const timeline = [
  {
    time: '08:00 - 08:40',
    title: '南头古城出发 · 早餐',
    type: 'meal',
    typeLabel: '用餐',
    icon: 'ri-cup-line',
    summary: '在古城内吃个简单早餐，肠粉、艇仔粥都不错',
    detail: '推荐：南头古城内有大量本地小吃店，如肠粉、艇仔粥、煎饺、豆浆油条。建议吃 7-8 分饱，避免登山时肠胃不适。带上水和零食上山。<br><b>痛风提示</b>：避免浓豆浆、动物内脏汤粥；可以喝白粥、淡茶，多喝水。',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/4a92e103-4012-4eee-89b1-593129a34827/image_1778341213_1_3.jpg'
  },
  {
    time: '08:40 - 09:00',
    title: '步行/打车前往一嗨租车（马家龙社区店）',
    type: 'drive',
    typeLabel: '出行',
    icon: 'ri-walk-line',
    summary: '距南头古城约 1km，打车 5 分钟约 ¥10',
    detail: '一嗨租车马家龙社区店在南山区马家龙社区，从南头古城步行约 12 分钟，或打车约 5 分钟（¥10 左右）。建议提前在一嗨 App 完成线上下单和支付，到店直接取车更快。'
  },
  {
    time: '09:00 - 09:30',
    title: '办理取车手续 · 大众朗逸新锐',
    type: 'drive',
    typeLabel: '取车',
    icon: 'ri-car-line',
    summary: '9 点准时取车 · 总费用 ¥175 · 含尊享保障',
    detail: '①核对车型（大众朗逸新锐）②环车 360° 拍照/录像存证（车身、轮胎、内饰、里程表、油量）③确认燃油政策（满油提满油还）④确认尊享保障范围 ⑤设置好导航。费用明细：门店服务费¥54 + 基本保障¥50 + 整备费¥20 + 尊享保障¥51 = ¥175。违章押金 ¥2000 已冻结。'
  },
  {
    time: '09:30 - 10:30',
    title: '驾车前往茶溪谷停车场',
    type: 'drive',
    typeLabel: '驾车',
    icon: 'ri-roadster-line',
    summary: '53.6 km · 约 58 分钟 · 跟着导航走即可',
    detail: '直接在导航里搜索 <b>「东部华侨城茶溪谷停车场」</b>，跟着导航走即可，过路费约 ¥4。<br><b>新手提示</b>：①高速段保持 100km/h 以下，注意保持车距 ②不要并线超车 ③隧道内开近光灯 ④如有不熟悉的路口，提前减速看清指示。'
  },
  {
    time: '10:30 - 10:50',
    title: '抵达茶溪谷停车场',
    type: 'rest',
    typeLabel: '休息',
    icon: 'ri-parking-box-line',
    summary: '主停车场停满则转 3 号停车场',
    detail: '茶溪谷停车场是首选，紧邻云海专线公交站。如果车位已满，沿景观路前行至 <b>3 号停车场</b>（云海谷体育公园方向，约 1km）。停好车后到「茶溪谷停车场」公交站候车，整理装备、补水、做拉伸。'
  },
  {
    time: '10:50 - 11:15',
    title: '乘云海专线 → 山海大观站',
    type: 'hike',
    typeLabel: '换乘',
    icon: 'ri-bus-2-line',
    summary: '云海专线 A/B/C/D 均可 · ¥2/人',
    detail: '在「茶溪谷停车场」公交站乘坐 <b>云海专线（A/B/C/D 任意一班）</b>，约 15-20 分钟到达「<b>山海大观站</b>」下车，即为登山口。班次间隔约 20 分钟，建议提前查时刻表。支持微信/羊城通刷码乘车。'
  },
  {
    time: '11:15 - 12:30',
    title: '山海大观登山口 → 梅沙尖山顶',
    type: 'hike',
    typeLabel: '徒步',
    icon: 'ri-mountain-line',
    summary: '1.9km 石阶路 · 1h+ 登顶 · 沿途有海景',
    detail: '从山海大观站下车即可看到登山口指示牌。1.9km 全程石阶，前段较缓，后段陡升，建议每 20 分钟停下补水休息。<b>沿途多个观景点可远眺大鹏湾海景</b>，是这条路线最大的亮点。配速建议：60-70min 登顶。',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/e0c2b5d5-383c-4d7a-9f43-467066d31daa/image_1778341173_1_1.jpg'
  },
  {
    time: '12:30 - 13:00',
    title: '山顶拍照打卡 + 短暂补给 🎉',
    type: 'rest',
    typeLabel: '观景',
    icon: 'ri-camera-3-line',
    summary: '风车、海景、云海，深圳第二高峰',
    detail: '山顶简单补给（能量棒/水果/牛肉干，<b>不正式吃饭</b>），重点拍照打卡。必拍机位：①标志石碑「梅沙尖 753m」②白色大风车 ③朝向大鹏湾的全景 ④东部华侨城茶溪谷俯瞰。建议用广角拍摄，逆光时打开 HDR。停留约 30 分钟即下撤。',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/a6f0b96e-a4bb-463b-a88a-24e68ef48fbe/image_1778341217_1_1.jpg'
  },
  {
    time: '13:00 - 14:30',
    title: '下山到梅沙尖登山口（小三洲水库方向）',
    type: 'hike',
    typeLabel: '徒步',
    icon: 'ri-arrow-down-line',
    summary: '不走回头路 · 沿另一路线下山',
    detail: '从山顶选择 <b>梅沙尖登山口（小三洲水库方向）</b>下山，避免回头路，可看到不同的风景。沿途经过水库，植被茂密。下山约 1.5h。注意：①小步快走，重心向后 ②使用登山杖减轻膝盖压力 ③穿防滑徒步鞋 ④石阶湿滑处放慢速度。'
  },
  {
    time: '14:30 - 15:00',
    title: '步行回茶溪谷停车场取车',
    type: 'hike',
    typeLabel: '徒步',
    icon: 'ri-walk-line',
    summary: '沿盐三路/景观路步行约 20-30 分钟',
    detail: '到达梅沙尖登山口后，沿盐三路、景观路步行约 20-30 分钟回到茶溪谷停车场取车。如果体力不支，也可在登山口拦出租车回停车场（约 ¥15）。取车前再次检查车况。'
  },
  {
    time: '15:00 - 16:30',
    title: '驾车前往晚餐 · 一路返程',
    type: 'drive',
    typeLabel: '驾车',
    icon: 'ri-roadster-line',
    summary: '导航前往痛风友好餐厅 · 避开海鲜街',
    detail: '由于<b>痛风不能吃海鲜</b>，跳过盐田海鲜街，可以直接开车回南山方向，沿途选择客家菜或粤式烧腊。推荐先回到「白石洲 / 华侨城 / 南头古城」附近，离还车点近，吃完直接还车。导航方便、车少不堵。'
  },
  {
    time: '16:30 - 18:30',
    title: '痛风友好晚餐 🍲',
    type: 'meal',
    typeLabel: '用餐',
    icon: 'ri-restaurant-2-line',
    summary: '客家菜 / 烧腊 / 简餐 · 清淡为主',
    detail: '点菜原则：<b>多选蒸/煮/白切，避开浓汤、海鲜、内脏、菌菇豆类</b>。推荐：白切鸡（去皮）、清蒸鱼（淡水鱼）、客家酿豆腐（少量）、青菜、米饭、白粥。<b>切记不要喝啤酒、肉汤、老火汤</b>，多喝白水或淡茶（≥500ml）。下方有具体餐厅推荐。',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/4a55a642-a166-4678-a176-171dc2ff67dc/image_1778341766_1_1.jpg'
  },
  {
    time: '18:30 - 19:30',
    title: '一嗨还车（马家龙店）',
    type: 'drive',
    typeLabel: '还车',
    icon: 'ri-checkbox-circle-line',
    summary: '检查车况、加油凭证、还车确认',
    detail: '还车流程：①确认油量、里程 ②店员环车检查 ③签字确认 ④保留小票和保险解除单 ⑤等待 ¥2000 违章押金解冻通知（一般 30 天后退还）。还车后步行/打车回南头古城，结束完美的一天。'
  }
];

// 拍照打卡点
const photoSpots = [
  {
    title: '梅沙尖山顶石碑',
    icon: 'ri-flag-2-line',
    desc: '海拔 753m 标志，必合影',
    tip: '清晨光线最佳，背景是大鹏湾',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/a6f0b96e-a4bb-463b-a88a-24e68ef48fbe/image_1778341217_1_1.jpg'
  },
  {
    title: '白色大风车',
    icon: 'ri-windy-line',
    desc: '梅沙尖最具辨识度的景观',
    tip: '低角度仰拍，搭配蓝天最出片',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/35a0ac1c-aa9a-4d1f-9c77-33468fb5228b/image_1778341165_2_1.jpg'
  },
  {
    title: '云海日出云海',
    icon: 'ri-cloud-line',
    desc: '运气好可见云海翻涌',
    tip: '雨后晴天上午最佳',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/e63a6e75-a2a4-4983-9a6d-22218b748590/image_1778341190_2_3.jpg'
  },
  {
    title: '鲲鹏径石阶',
    icon: 'ri-stairs-line',
    desc: '苍翠林荫中的登山路',
    tip: '人物在石阶中段，回头一笑',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/e0c2b5d5-383c-4d7a-9f43-467066d31daa/image_1778341173_1_1.jpg'
  },
  {
    title: '茶溪谷俯瞰',
    icon: 'ri-eye-2-line',
    desc: '从山顶俯瞰东部华侨城',
    tip: '广角全景，黄金时刻拍摄',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/e5570985-9c51-4e3a-8355-39af476acfb7/image_1778341182_1_1.jpg'
  },
  {
    title: '大鹏湾海景',
    icon: 'ri-ship-2-line',
    desc: '山顶东南方向远眺',
    tip: '使用长焦压缩远山与海',
    img: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/782efde0-a4db-4635-a00e-e7036d195665/image_1778341190_1_3.jpg'
  }
];

// 装备清单
const checklist = [
  '专业徒步鞋 / 防滑运动鞋',
  '速干透气衣裤（建议长裤防蚊）',
  '冲锋衣或薄外套（山顶风大）',
  '双肩登山包（25-30L）',
  '饮用水 ≥ 2L（痛风多喝水）',
  '能量棒 / 巧克力 / 香蕉',
  '登山杖（推荐）',
  '遮阳帽 + 墨镜',
  '防晒霜 SPF50+',
  '驱蚊液 / 风油精',
  '一次性雨衣',
  '充电宝（拍照耗电快）',
  '医用胶布 / 创可贴',
  '常用降尿酸/止痛药（备用）',
  '驾照（正本）+ 身份证',
  '一嗨租车 App / 取车码',
  '云海专线零钱/微信支付',
  '车载手机支架'
];

// 预算
const budget = [
  { item: '一嗨租车（朗逸新锐）', cost: 175, desc: '门店费54+基本保障50+整备20+尊享51' },
  { item: '油费（往返 ~110km）', cost: 75, desc: '约 7.5L · 92号汽油' },
  { item: '过路费', cost: 4, desc: '清平高速段' },
  { item: '茶溪谷停车', cost: 0, desc: '景区免费停车' },
  { item: '云海专线（往返）', cost: 4, desc: '¥2 × 2 程' },
  { item: '早餐', cost: 25, desc: '南头古城本地小吃' },
  { item: '登山补给', cost: 40, desc: '水、能量棒、水果' },
  { item: '客家菜晚餐', cost: 90, desc: '人均（清淡痛风友好）' },
  { item: '餐厅停车', cost: 15, desc: '商场地下停车 ¥10/h' },
  { item: '其他备用', cost: 50, desc: '应急零花' }
];

// ===== 渲染时间轴 =====
const tlEl = document.getElementById('timeline');
tlEl.innerHTML = timeline.map((t, i) => `
  <div class="timeline-item">
    <div class="timeline-card open bg-white rounded-2xl shadow-md border border-slate-100 p-5" data-idx="${i}">
      <div class="flex items-start justify-between gap-3">
        <div class="flex-1">
          <div class="flex items-center gap-2 flex-wrap mb-1.5">
            <span class="text-sm font-bold text-slate-500">${t.time}</span>
            <span class="px-2 py-0.5 rounded text-xs font-medium tag-${t.type}">${t.typeLabel}</span>
          </div>
          <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2">
            <i class="${t.icon} text-brand-600"></i> ${t.title}
          </h3>
          <p class="text-sm text-slate-600 mt-1">${t.summary}</p>
        </div>
        <i class="ri-arrow-down-s-line arrow text-2xl text-slate-400"></i>
      </div>
      <div class="detail mt-3 pt-3 border-t border-dashed border-slate-200 text-sm text-slate-700 leading-relaxed">
        ${t.img ? `<img src="${t.img}" class="w-full max-h-56 object-cover rounded-xl mb-3" alt="${t.title}" />` : ''}
        ${t.detail}
      </div>
    </div>
  </div>
`).join('');

// 时间轴展开/折叠
tlEl.addEventListener('click', e => {
  const card = e.target.closest('.timeline-card');
  if (card) card.classList.toggle('open');
});

// ===== 渲染打卡点（带真实图片） =====
document.getElementById('photo-spots').innerHTML = photoSpots.map((p, i) => `
  <div class="photo-card rounded-2xl shadow-md overflow-hidden bg-white border border-slate-100">
    <div class="h-44 relative overflow-hidden">
      <img src="${p.img}" class="w-full h-full object-cover hover:scale-110 transition duration-500" alt="${p.title}" />
      <span class="badge px-2 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-slate-700">📍 #${i + 1}</span>
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
        <h3 class="font-bold text-white drop-shadow"><i class="${p.icon}"></i> ${p.title}</h3>
      </div>
    </div>
    <div class="p-4">
      <p class="text-sm text-slate-600">${p.desc}</p>
      <div class="mt-3 pt-3 border-t border-slate-100 text-xs text-amber-700 bg-amber-50 -mx-4 -mb-4 px-4 py-2 rounded-b-2xl">
        <i class="ri-lightbulb-flash-line"></i> ${p.tip}
      </div>
    </div>
  </div>
`).join('');

// ===== 装备清单 =====
const clEl = document.getElementById('checklist');
clEl.innerHTML = checklist.map((c, i) => `
  <label class="checklist-item" data-i="${i}">
    <input type="checkbox" />
    <span class="text-sm">${c}</span>
  </label>
`).join('');
clEl.addEventListener('change', e => {
  if (e.target.matches('input[type=checkbox]')) {
    e.target.closest('.checklist-item').classList.toggle('done', e.target.checked);
  }
});

// ===== 预算 =====
const budgetEl = document.getElementById('budget');
budgetEl.innerHTML = budget.map(b => `
  <div class="flex items-center justify-between py-2 border-b border-amber-100 last:border-0">
    <div>
      <div class="font-medium text-slate-800 text-sm">${b.item}</div>
      <div class="text-xs text-slate-500">${b.desc}</div>
    </div>
    <div class="font-bold text-slate-700">¥${b.cost}</div>
  </div>
`).join('');
const total = budget.reduce((s, b) => s + b.cost, 0);
document.getElementById('total').textContent = total;
