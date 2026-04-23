// 行程数据
const itineraryData = [
  {
    day: 1,
    date: "5月24日（周六）",
    title: "深圳 → 西平 · 高铁回家",
    color: "bg-indigo-500",
    borderColor: "border-indigo-400",
    icon: "🚄",
    summary: "乘坐高铁从深圳北出发，约6小时抵达驻马店西站",
    details: [
      {
        time: "07:30",
        activity: "出发前往深圳北站",
        desc: "提前准备好身份证、行李，轻装出行",
        type: "transport"
      },
      {
        time: "08:42",
        activity: "乘坐G74次高铁",
        desc: "深圳北 → 驻马店西，二等座¥652.5，约6小时17分",
        type: "transport"
      },
      {
        time: "14:59",
        activity: "抵达驻马店西站",
        desc: "家人接站，驱车前往西平县（约40分钟）",
        type: "arrive"
      },
      {
        time: "16:00",
        activity: "到家休息",
        desc: "与家人团聚，享受家乡美食，休整调整",
        type: "rest"
      }
    ]
  },
  {
    day: 2,
    date: "5月25日（周日）",
    title: "西平县 · 在家休整",
    color: "bg-emerald-500",
    borderColor: "border-emerald-400",
    icon: "🏠",
    summary: "陪伴家人，准备自驾行程物资",
    details: [
      {
        time: "全天",
        activity: "陪伴家人",
        desc: "享受家乡美食，走亲访友，放松身心",
        type: "rest"
      },
      {
        time: "下午",
        activity: "准备自驾物资",
        desc: "采购路上零食饮料、猫咪用品补给；确认租车订单",
        type: "prepare"
      },
      {
        time: "傍晚",
        activity: "取租车",
        desc: "前往驻马店市区一嗨/神州租车门店取车（建议SUV车型，如丰田RAV4），检查车况、油量、保险",
        type: "transport"
      }
    ]
  },
  {
    day: 3,
    date: "5月26日（周一）",
    title: "西平 → 武汉 · 出发南下",
    color: "bg-yellow-500",
    borderColor: "border-yellow-400",
    icon: "🚗",
    summary: "自驾约348km前往武汉，开启边走边玩之旅",
    details: [
      {
        time: "08:00",
        activity: "从西平出发",
        desc: "走京港澳高速南下，全程约348km，预计3.5小时",
        type: "transport"
      },
      {
        time: "09:30",
        activity: "信阳服务区休息",
        desc: "中途休息，让猫咪活动、喝水，补充能量",
        type: "rest"
      },
      {
        time: "12:00",
        activity: "抵达武汉",
        desc: "入住酒店/民宿（推荐武昌区，靠近景点）",
        type: "arrive"
      },
      {
        time: "12:30",
        activity: "午餐：户部巷",
        desc: "品尝武汉特色美食：热干面、豆皮、鸭脖、汤包等",
        type: "food"
      },
      {
        time: "14:30",
        activity: "游览黄鹤楼",
        desc: "中国四大名楼之一，登楼远眺长江美景。门票¥70/人，老人半价",
        type: "scenic"
      },
      {
        time: "17:00",
        activity: "漫步长江大桥 & 江滩",
        desc: "感受万里长江第一桥的壮观，江滩散步看日落",
        type: "scenic"
      },
      {
        time: "19:00",
        activity: "晚餐：吉庆街/粮道街",
        desc: "武汉夜市美食，烧烤、小龙虾、藕汤",
        type: "food"
      }
    ]
  },
  {
    day: 4,
    date: "5月27日（周二）",
    title: "武汉深度游 · 博物馆之旅",
    color: "bg-orange-500",
    borderColor: "border-orange-400",
    icon: "🏛️",
    summary: "全天游览武汉文化景点，继续陪伴父母",
    details: [
      {
        time: "08:30",
        activity: "湖北省博物馆",
        desc: "免费参观（需预约），必看曾侯乙编钟、越王勾践剑。建议听编钟演奏",
        type: "scenic"
      },
      {
        time: "11:00",
        activity: "东湖绿道骑行/散步",
        desc: "中国最大的城中湖，绿道风景优美，适合全家休闲",
        type: "scenic"
      },
      {
        time: "12:30",
        activity: "午餐",
        desc: "东湖附近餐厅，武昌鱼、排骨藕汤等湖北特色菜",
        type: "food"
      },
      {
        time: "15:00",
        activity: "昙华林文艺街区",
        desc: "百年老街，中西建筑并存，文艺小店、咖啡馆，适合拍照打卡",
        type: "scenic"
      },
      {
        time: "18:00",
        activity: "晚餐 & 休息",
        desc: "回酒店照顾猫咪，早点休息准备明天前往长沙",
        type: "rest"
      }
    ]
  },
  {
    day: 5,
    date: "5月28日（周三）",
    title: "武汉 → 长沙 · 星城之旅",
    color: "bg-red-500",
    borderColor: "border-red-400",
    icon: "🌶️",
    summary: "自驾约328km前往长沙，品尝湘菜美食",
    details: [
      {
        time: "08:00",
        activity: "从武汉出发",
        desc: "走京港澳高速南下，全程约328km，预计3.5小时",
        type: "transport"
      },
      {
        time: "11:30",
        activity: "抵达长沙",
        desc: "入住酒店/民宿（推荐五一广场/太平街附近）",
        type: "arrive"
      },
      {
        time: "12:00",
        activity: "午餐：坡子街/太平老街",
        desc: "长沙美食天堂！臭豆腐、糖油粑粑、小龙虾、口味虾",
        type: "food"
      },
      {
        time: "14:00",
        activity: "橘子洲头",
        desc: "免费景区（需预约），青年毛泽东雕像，湘江风光。观光车¥40往返",
        type: "scenic"
      },
      {
        time: "17:00",
        activity: "岳麓山/岳麓书院",
        desc: "千年学府，中国四大书院之一。书院门票¥40，山上免费",
        type: "scenic"
      },
      {
        time: "19:30",
        activity: "晚餐：文和友/炊烟时代",
        desc: "沉浸式复古美食城 / 正宗湘菜馆，辣椒炒肉、剁椒鱼头",
        type: "food"
      }
    ]
  },
  {
    day: 6,
    date: "5月29日（周四）",
    title: "长沙深度游 · 父母送别",
    color: "bg-pink-500",
    borderColor: "border-pink-400",
    icon: "🎭",
    summary: "上午游览长沙景点，下午送父母乘高铁返回",
    details: [
      {
        time: "09:00",
        activity: "湖南博物院",
        desc: "免费参观（需预约），马王堆汉墓出土文物，辛追夫人、素纱襌衣",
        type: "scenic"
      },
      {
        time: "11:30",
        activity: "午餐：黄兴路步行街",
        desc: "茶颜悦色奶茶、虾呢烧烤、费大厨辣椒炒肉",
        type: "food"
      },
      {
        time: "13:30",
        activity: "潮宗街历史文化街区",
        desc: "长沙保存最完好的历史街区，老建筑与新文创融合，陪父母悠闲漫步",
        type: "scenic"
      },
      {
        time: "15:30",
        activity: "⭐ 送父母至长沙南站",
        desc: "送父母乘坐高铁返回驻马店西（约3小时，二等座¥360/人）。提前购好车票！推荐G502/G556等班次",
        type: "important"
      },
      {
        time: "17:00",
        activity: "自由活动",
        desc: "可选：IFS国金中心看KAWS雕塑、杜甫江阁、天心阁、文和友",
        type: "rest"
      },
      {
        time: "19:00",
        activity: "晚餐 & 夜市",
        desc: "扬帆夜市/四方坪夜市，体验长沙夜生活",
        type: "food"
      }
    ]
  },
  {
    day: 7,
    date: "5月30日（周五）",
    title: "长沙 → 韶关丹霞山",
    color: "bg-rose-500",
    borderColor: "border-rose-400",
    icon: "⛰️",
    summary: "自驾约495km前往韶关丹霞山，欣赏丹霞地貌",
    details: [
      {
        time: "07:30",
        activity: "从长沙出发",
        desc: "走武深高速南下，全程约495km，预计6小时（含休息）",
        type: "transport"
      },
      {
        time: "10:00",
        activity: "郴州服务区休息",
        desc: "中途休息，照顾猫咪，补充食物和水",
        type: "rest"
      },
      {
        time: "14:00",
        activity: "抵达丹霞山景区",
        desc: "入住景区附近民宿/酒店（推荐青湖塘服务区附近）",
        type: "arrive"
      },
      {
        time: "15:00",
        activity: "游览丹霞山",
        desc: "世界自然遗产，门票¥100/人（48小时有效）。推荐长老峰、观日亭路线",
        type: "scenic"
      },
      {
        time: "18:00",
        activity: "晚餐",
        desc: "品尝客家菜：五指毛桃鸡汤、盐焗鸡、酸笋炒河鱼",
        type: "food"
      }
    ]
  },
  {
    day: 8,
    date: "5月31日（周六）",
    title: "丹霞山 → 深圳 · 回家",
    color: "bg-green-500",
    borderColor: "border-green-400",
    icon: "🏙️",
    summary: "上午可继续游览丹霞山，下午自驾约319km返回深圳",
    details: [
      {
        time: "07:00",
        activity: "丹霞山日出（可选）",
        desc: "如果精力充沛，可早起看丹霞日出，非常壮观",
        type: "scenic"
      },
      {
        time: "09:00",
        activity: "游览阳元山/锦江游船（可选）",
        desc: "乘船游览锦江，两岸丹霞美景如画",
        type: "scenic"
      },
      {
        time: "11:00",
        activity: "从韶关出发返深",
        desc: "走武深高速/京港澳高速，全程约319km，预计3.5小时",
        type: "transport"
      },
      {
        time: "12:30",
        activity: "英德服务区午餐",
        desc: "服务区简餐或提前准备路餐",
        type: "food"
      },
      {
        time: "15:00",
        activity: "抵达深圳",
        desc: "前往租车门店还车，检查车辆、结算费用",
        type: "arrive"
      },
      {
        time: "16:00",
        activity: "到家！",
        desc: "安顿猫咪，整理行李，结束愉快的旅程 🎉",
        type: "rest"
      }
    ]
  },
  {
    day: 9,
    date: "6月1日（周日）",
    title: "深圳 · 休整日",
    color: "bg-gray-500",
    borderColor: "border-gray-400",
    icon: "😴",
    summary: "在家休息，整理照片，恢复精力准备上班",
    details: [
      {
        time: "全天",
        activity: "在家休整",
        desc: "睡个懒觉，整理旅行照片和视频，给猫咪恢复日常作息",
        type: "rest"
      },
      {
        time: "下午",
        activity: "采购补给",
        desc: "补充家中日用品和猫粮，为新一周做准备",
        type: "prepare"
      }
    ]
  }
];

// 预算数据
const budgetData = [
  {
    category: "🚄 高铁票",
    items: [
      { name: "深圳北→驻马店西（二等座）", cost: "652.5", note: "G74次，约6小时" }
    ]
  },
  {
    category: "🚗 租车费用",
    items: [
      { name: "SUV车型租金（如丰田RAV4）", cost: "300-400/天 × 6天 = 1,800-2,400", note: "一嗨租车，含基础保险" },
      { name: "异地还车费", cost: "0", note: "一嗨租车免异地还车费" },
      { name: "补充保险（驾无忧）", cost: "50/天 × 6天 = 300", note: "建议购买，长途更安心" }
    ]
  },
  {
    category: "⛽ 油费",
    items: [
      { name: "全程约1,400km", cost: "700-900", note: "按百公里8L、油价8元/L估算" }
    ]
  },
  {
    category: "🛣️ 过路费",
    items: [
      { name: "京港澳高速+武深高速全程", cost: "700-800", note: "系统预估约762元" }
    ]
  },
  {
    category: "🏨 住宿",
    items: [
      { name: "武汉住宿（2晚）", cost: "300-500 × 2 = 600-1,000", note: "民宿/公寓，宠物友好" },
      { name: "长沙住宿（2晚）", cost: "300-500 × 2 = 600-1,000", note: "民宿/公寓，宠物友好" },
      { name: "韶关住宿（1晚）", cost: "200-400", note: "丹霞山附近民宿" }
    ]
  },
  {
    category: "🍜 餐饮",
    items: [
      { name: "自驾途中餐饮（6天）", cost: "150-200/天 × 6 = 900-1,200", note: "含早中晚餐及零食" }
    ]
  },
  {
    category: "🎫 景点门票",
    items: [
      { name: "黄鹤楼", cost: "70 × 2 = 140", note: "老人半价¥35" },
      { name: "丹霞山", cost: "100", note: "48小时有效" },
      { name: "岳麓书院", cost: "40", note: "岳麓山免费" },
      { name: "其他小景点", cost: "50-100", note: "预留" }
    ]
  },
  {
    category: "🚄 父母返程",
    items: [
      { name: "长沙南→驻马店西高铁（2人）", cost: "360 × 2 = 720", note: "二等座，约3小时（G502/G556等）" }
    ]
  },
  {
    category: "📦 其他费用",
    items: [
      { name: "停车费", cost: "20-30/天 × 6 = 120-180", note: "景区+酒店停车" },
      { name: "猫咪用品补给", cost: "100-200", note: "猫砂、零食等" },
      { name: "应急备用金", cost: "300-500", note: "预留意外支出" }
    ]
  }
];

// 贴士数据
const tipsData = [
  {
    icon: "🎫",
    title: "提前订票",
    desc: "五月底是出行旺季，高铁票建议提前15天抢票。景点门票（湖北省博、橘子洲等）需提前在官方平台预约。"
  },
  {
    icon: "🚗",
    title: "租车建议",
    desc: "推荐一嗨租车（免异地还车费），选择SUV车型空间大，适合放行李和猫包。提前3-5天预订价格更优。"
  },
  {
    icon: "🐱",
    title: "猫咪出行",
    desc: "出发前一周做好体外驱虫；准备硬质航空箱更安全；每2小时停车休息；到酒店先布置猫砂盆。"
  },
  {
    icon: "🏨",
    title: "住宿选择",
    desc: '带猫出行优先选民宿/公寓式酒店，提前电话确认可带宠物。推荐在途家、Airbnb搜索"宠物友好"标签。'
  },
  {
    icon: "🌡️",
    title: "天气准备",
    desc: "5月底河南~广东气温25-35°C，注意防晒防暑。车内空调保持适宜温度，备好遮阳帘。"
  },
  {
    icon: "📱",
    title: "实用APP",
    desc: "高德地图（导航+服务区查询）、一嗨租车APP、途家/Airbnb（宠物友好住宿）、大众点评（美食）。"
  },
  {
    icon: "⛽",
    title: "加油策略",
    desc: "高速服务区油价略高，建议在城区加满油再上高速。油量低于1/4时及时加油，避免偏远路段没油。"
  },
  {
    icon: "🔧",
    title: "行车安全",
    desc: "长途驾驶每2小时休息15分钟；避免疲劳驾驶；提前检查轮胎、刹车；备好车载充电器和应急工具。"
  },
  {
    icon: "💳",
    title: "支付准备",
    desc: "高速ETC通行更便捷；部分景区只支持线上购票；备少量现金应对偏远地区。"
  }
];

// 渲染行程卡片
function renderItinerary() {
  const container = document.getElementById('itinerary-cards');
  container.innerHTML = itineraryData.map((day, index) => {
    const typeIcons = {
      transport: '🚗', food: '🍜', scenic: '🏞️', rest: '😴',
      arrive: '📍', prepare: '📦', important: '⭐'
    };
    const typeColors = {
      transport: 'text-blue-600', food: 'text-orange-600', scenic: 'text-green-600',
      rest: 'text-gray-500', arrive: 'text-red-600', prepare: 'text-purple-600',
      important: 'text-yellow-600'
    };

    const detailsHtml = day.details.map(d => `
            <div class="spot-card ${day.borderColor}">
                <div class="flex items-start gap-3">
                    <div class="flex-shrink-0 mt-0.5">
                        <span class="text-lg">${typeIcons[d.type] || '📌'}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-xs font-mono bg-gray-200 text-gray-700 px-2 py-0.5 rounded">${d.time}</span>
                            <span class="font-semibold text-sm ${typeColors[d.type] || ''}">${d.activity}</span>
                        </div>
                        <p class="text-xs text-gray-500 leading-relaxed">${d.desc}</p>
                    </div>
                </div>
            </div>
        `).join('');

    return `
            <div class="day-card" data-day="${index}">
                <div class="day-header" onclick="toggleDay(${index})">
                    <div class="flex items-center gap-4">
                        <div class="day-badge ${day.color}">
                            <span>${day.icon}</span>
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs text-gray-400 font-mono">${day.date}</span>
                                <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Day ${day.day}</span>
                            </div>
                            <h3 class="font-bold text-base mt-0.5">${day.title}</h3>
                            <p class="text-sm text-gray-500 mt-0.5">${day.summary}</p>
                        </div>
                    </div>
                    <div class="flex-shrink-0 text-gray-400 transition-transform duration-300" id="arrow-${index}">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div class="day-body" id="day-body-${index}">
                    <div class="day-body-inner">
                        ${detailsHtml}
                    </div>
                </div>
            </div>
        `;
  }).join('');
}

// 切换行程展开/收起
window.toggleDay = function (index) {
  const body = document.getElementById(`day-body-${index}`);
  const arrow = document.getElementById(`arrow-${index}`);
  const isOpen = body.classList.contains('open');

  if (isOpen) {
    body.classList.remove('open');
    arrow.style.transform = 'rotate(0deg)';
  } else {
    body.classList.add('open');
    arrow.style.transform = 'rotate(180deg)';
  }
};

// 渲染预算表格
function renderBudget() {
  const tbody = document.getElementById('budget-table');
  let totalMin = 0;
  let totalMax = 0;

  tbody.innerHTML = budgetData.map(cat => {
    const rows = cat.items.map((item, i) => {
      // 解析费用范围
      const costStr = item.cost.toString();
      const match = costStr.match(/[\d,]+/g);
      if (match) {
        const nums = match.map(n => parseFloat(n.replace(/,/g, '')));
        if (nums.length >= 2) {
          totalMin += nums[nums.length - 2] || 0;
          totalMax += nums[nums.length - 1] || 0;
        } else if (nums.length === 1) {
          totalMin += nums[0];
          totalMax += nums[0];
        }
      }

      return `
                <tr>
                    ${i === 0 ? `<td class="p-4 font-semibold align-top" rowspan="${cat.items.length}">
                        <span class="text-base">${cat.category}</span>
                    </td>` : ''}
                    <td class="p-4">
                        <div class="text-sm">${item.name}</div>
                        <div class="text-xs text-gray-400 mt-0.5">${item.note}</div>
                    </td>
                    <td class="p-4 text-right font-mono text-sm whitespace-nowrap">¥${item.cost}</td>
                </tr>
            `;
    }).join('');
    return rows;
  }).join('');

  document.getElementById('budget-total').textContent = `¥${totalMin.toLocaleString()} - ¥${totalMax.toLocaleString()}`;
}

// 渲染贴士
function renderTips() {
  const grid = document.getElementById('tips-grid');
  grid.innerHTML = tipsData.map(tip => `
        <div class="tip-card">
            <div class="text-3xl mb-3">${tip.icon}</div>
            <h3 class="font-bold text-base mb-2">${tip.title}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">${tip.desc}</p>
        </div>
    `).join('');
}

// 导航栏高亮
function setupNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(section => observer.observe(section));
}

// 默认展开第一天和第三天
function expandDefaultDays() {
  [0, 2].forEach(i => {
    const body = document.getElementById(`day-body-${i}`);
    const arrow = document.getElementById(`arrow-${i}`);
    if (body && arrow) {
      body.classList.add('open');
      arrow.style.transform = 'rotate(180deg)';
    }
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  renderItinerary();
  renderBudget();
  renderTips();
  setupNavHighlight();
  expandDefaultDays();
});
```
