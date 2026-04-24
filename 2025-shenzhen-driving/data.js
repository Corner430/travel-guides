// 所有页面数据集中管理
export const IMAGES = {
  carInterior: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/0b4e7c32-8522-4f31-8baa-acf2e7682793/image_1777050814_2_1.jpg',
  carDashboard: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/5d61cd30-a49d-4155-994d-9c812c506249/image_1777050815_1_3.jpg',
  nanshan: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/e549c21d-d33d-48e2-8324-93bbd1c9eb0e/image_1777050821_1_1.jpg',
  dapeng: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/f19bfd7d-6772-499c-9dab-2404f58424fc/image_1777050828_1_1.jpg',
  dapeng2: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/b549e46d-213a-4af6-82a2-10d627d5ba58/image_1777050828_2_1.jpg',
  yantian: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/bb00fd28-ba88-49a1-a7d6-29aa364ed546/image_1777050835_1_1.jpg',
  shuangyuewan: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/6388305b-64f1-4c5f-830c-040c781e4950/image_1777050841_2_1.jpg',
  lightControl: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/0eb9eda6-a5cc-469e-b0c4-44ee26c795b6/image_1777050846_1_1.jpg',
};

export const timelineData = [
  { day: '周一', icon: 'ri-video-line', color: 'bg-red-500', title: '看视频', desc: '在B站/抖音看新手教学视频，了解车内按键和基本操作', tag: '在家' },
  { day: '周二', icon: 'ri-book-open-line', color: 'bg-orange-500', title: '学理论', desc: '复习交规要点，学习常见标志标线，了解深圳限行规则', tag: '在家' },
  { day: '周三', icon: 'ri-smartphone-line', color: 'bg-amber-500', title: '租车预约', desc: '在APP上预约周六取车，选择自动挡小型车', tag: '线上' },
  { day: '周四', icon: 'ri-map-2-line', color: 'bg-green-500', title: '规划路线', desc: '用导航APP提前熟悉周末要走的路线', tag: '在家' },
  { day: '周五', icon: 'ri-shopping-bag-line', color: 'bg-teal-500', title: '准备物品', desc: '准备驾照、手机支架、充电线、墨镜、饮用水', tag: '出门' },
  { day: '周六', icon: 'ri-steering-2-line', color: 'bg-blue-500', title: '取车练习', desc: '上午取车熟悉→停车场练习→下午短途驾驶', tag: '驾驶' },
  { day: '周日', icon: 'ri-road-map-line', color: 'bg-purple-500', title: '自驾出游', desc: '选择一条推荐路线，享受自驾的乐趣！', tag: '出游' },
];

export const videoData = [
  { title: '新手开车第一课：上车前的准备', search: '新手开车 上车准备 座椅后视镜调节', platform: 'B站', duration: '15分钟', priority: '必看', desc: '调座椅、调后视镜、系安全带、熟悉挡位', icon: 'ri-play-circle-fill', color: 'text-red-500', url: 'https://search.bilibili.com/all?keyword=%E6%96%B0%E6%89%8B%E5%BC%80%E8%BD%A6%20%E4%B8%8A%E8%BD%A6%E5%87%86%E5%A4%87%20%E5%BA%A7%E6%A4%85%E5%90%8E%E8%A7%86%E9%95%9C%E8%B0%83%E8%8A%82' },
  { title: '自动挡汽车按键功能详解', search: '自动挡 车内按键 功能详解', platform: 'B站', duration: '20分钟', priority: '必看', desc: '方向盘、灯光、雨刷、空调、中控所有按键', icon: 'ri-play-circle-fill', color: 'text-red-500', url: 'https://search.bilibili.com/all?keyword=%E8%87%AA%E5%8A%A8%E6%8C%A1%20%E8%BD%A6%E5%86%85%E6%8C%89%E9%94%AE%20%E5%8A%9F%E8%83%BD%E8%AF%A6%E8%A7%A3' },
  { title: '自动挡起步与停车全流程', search: '自动挡 起步停车 新手教程', platform: 'B站', duration: '12分钟', priority: '必看', desc: 'P→D起步、D→P停车的完整操作流程', icon: 'ri-play-circle-fill', color: 'text-red-500', url: 'https://search.bilibili.com/all?keyword=%E8%87%AA%E5%8A%A8%E6%8C%A1%20%E8%B5%B7%E6%AD%A5%E5%81%9C%E8%BD%A6%20%E6%96%B0%E6%89%8B%E6%95%99%E7%A8%8B' },
  { title: '新手如何正确打方向盘', search: '新手 打方向盘 技巧', platform: 'B站/抖音', duration: '10分钟', priority: '推荐', desc: '交叉手法、回正技巧、转弯打多少', icon: 'ri-play-circle-fill', color: 'text-orange-500', url: 'https://search.bilibili.com/all?keyword=%E6%96%B0%E6%89%8B%20%E6%89%93%E6%96%B9%E5%90%91%E7%9B%98%20%E6%8A%80%E5%B7%A7' },
  { title: '侧方位停车 & 倒车入库实战', search: '侧方停车 倒车入库 实际道路', platform: 'B站', duration: '18分钟', priority: '必看', desc: '不同于科目二，实际道路的停车技巧', icon: 'ri-play-circle-fill', color: 'text-red-500', url: 'https://search.bilibili.com/all?keyword=%E4%BE%A7%E6%96%B9%E5%81%9C%E8%BD%A6%20%E5%80%92%E8%BD%A6%E5%85%A5%E5%BA%93%20%E5%AE%9E%E9%99%85%E9%81%93%E8%B7%AF' },
  { title: '高速公路驾驶注意事项', search: '新手 高速公路 驾驶技巧', platform: 'B站', duration: '15分钟', priority: '进阶', desc: '匝道汇入、变道、超车、出口提前准备', icon: 'ri-play-circle-fill', color: 'text-blue-500', url: 'https://search.bilibili.com/all?keyword=%E6%96%B0%E6%89%8B%20%E9%AB%98%E9%80%9F%E5%85%AC%E8%B7%AF%20%E9%A9%BE%E9%A9%B6%E6%8A%80%E5%B7%A7' },
];

export const learnPointsData = [
  { icon: 'ri-steering-2-line', color: 'bg-blue-100 text-blue-600', title: '基本操作', items: ['座椅和后视镜调节', '安全带正确系法', '挡位P/R/N/D含义', '油门和刹车位置'] },
  { icon: 'ri-lightbulb-line', color: 'bg-amber-100 text-amber-600', title: '灯光系统', items: ['近光灯/远光灯切换', '转向灯使用时机', '双闪灯何时开启', '雾灯使用场景'] },
  { icon: 'ri-road-map-line', color: 'bg-green-100 text-green-600', title: '交通规则', items: ['深圳限行时间段', '常见标志标线', '让行规则', '违章扣分标准'] },
  { icon: 'ri-shield-check-line', color: 'bg-purple-100 text-purple-600', title: '安全意识', items: ['跟车距离保持', '盲区检查习惯', '恶劣天气驾驶', '紧急情况处理', '欧卡2模拟驾驶辅助练习'] },
];

export const controlsData = {
  '方向盘区域': [
    { name: '方向盘', icon: '🔄', desc: '控制车辆转向。左转向左打，右转向右打。正常行驶保持"9点-3点"握法' },
    { name: '喇叭', icon: '📢', desc: '方向盘中央按压。提醒其他车辆/行人注意，不要长按，城区禁止鸣笛区域注意标志' },
    { name: '左侧拨杆（灯光）', icon: '💡', desc: '上拨=右转向灯，下拨=左转向灯。前端旋转=近光灯/示宽灯。向前推=远光灯' },
    { name: '右侧拨杆（雨刷）', icon: '🌧️', desc: '上拨=加快雨刷速度，下拨=减慢。前端旋转=后雨刷。拨杆末端按钮=喷玻璃水' },
    { name: '多功能按键', icon: '🎵', desc: '方向盘左侧：音量调节、切歌。右侧：定速巡航（新手暂不建议使用）' },
  ],
  '中控台区域': [
    { name: '中控屏幕', icon: '📱', desc: '导航、音乐、倒车影像、车辆设置等。建议开车时用语音控制，不要分心触屏' },
    { name: '空调控制', icon: '❄️', desc: 'A/C按钮=开关压缩机制冷。旋钮调温度和风量。AUTO=自动空调。内循环/外循环切换' },
    { name: '双闪灯按钮', icon: '⚠️', desc: '红色三角形按钮，紧急情况、临时停车、恶劣天气时使用。位置在中控台最显眼处' },
    { name: '电子手刹/AUTOHOLD', icon: '🅿️', desc: '电子手刹：P按钮，停车时拉起。AUTOHOLD：等红灯时自动刹停，绿灯踩油门自动释放' },
    { name: '驾驶模式', icon: '🏎️', desc: 'ECO=省油模式（动力弱），NORMAL=标准，SPORT=运动（油门灵敏）。新手建议用NORMAL' },
  ],
  '挡位区域': [
    { name: 'P挡（驻车）', icon: '🅿️', desc: '停车熄火时使用。挂P挡后车轮锁死，必须在完全停稳后才能挂入' },
    { name: 'R挡（倒车）', icon: '🔙', desc: '倒车时使用。挂入前必须完全停车！倒车时注意看后视镜和倒车影像' },
    { name: 'N挡（空挡）', icon: '⭕', desc: '等红灯时可挂N挡+手刹。拖车时使用。不建议滑行用N挡（危险且不省油）' },
    { name: 'D挡（前进）', icon: '▶️', desc: '正常行驶挡位。挂入D挡松刹车车会缓慢前进（怠速蠕行），踩油门加速' },
    { name: '+/- 或 S挡', icon: '⬆️', desc: '手动模式或运动挡。+升挡-降挡。新手一般用不到，保持D挡即可' },
  ],
  '车门/座椅区域': [
    { name: '后视镜调节', icon: '🪞', desc: '车门上的旋钮/按钮。L=左镜，R=右镜。上下左右调节。调到能看到车身1/4' },
    { name: '车窗控制', icon: '🪟', desc: '车门扶手上的按钮。轻按=手动升降，重按=一键升降。锁定按钮可禁止后排操作' },
    { name: '座椅调节', icon: '💺', desc: '座椅左侧拉杆/电动按钮。前后、靠背角度、高低调节。膝盖微弯、手臂自然伸直为宜' },
    { name: '中央锁', icon: '🔒', desc: '车门上的锁定按钮。行驶中建议锁门。儿童锁在后门侧面，防止后排误开门' },
    { name: '油箱盖开关', icon: '⛽', desc: '通常在驾驶座左下方，或直接按压油箱盖。加油前记得确认油箱在车的哪一侧（看仪表盘油表旁的箭头）' },
  ],
};

export const rentShopsData = [
  { name: '典范租车(南山店)', address: '南山区南海大道西海明珠聚德行名车104号', distance: '253米', platform: '门店直营', phone: '到店咨询', tag: '最近' },
  { name: '哈啰租车(桃园地铁站)', address: '南山区桃园地铁站', distance: '859米', platform: '哈啰出行APP', phone: 'APP下单', tag: '方便' },
  { name: '哈啰租车(南山送车点)', address: '南山区南山科技园东塔楼', distance: '875米', platform: '哈啰出行APP', phone: 'APP下单', tag: '推荐' },
  { name: '深圳壹首租车', address: '南山区南光路73号阳光里雅居', distance: '901米', platform: '门店直营', phone: '到店咨询', tag: '近' },
  { name: '神州租车(宝安机场)', address: '宝安区深圳宝安国际机场', distance: '约12km', platform: '神州租车APP', phone: '400-616-6666', tag: '大品牌' },
  { name: '一嗨租车(沙井店)', address: '宝安区宝安大道鸿荣源禧园', distance: '约25km', platform: '一嗨租车APP', phone: '400-888-6608', tag: '大品牌' },
];

export const rentTipsData = [
  '门店信息可能随时变动，建议出发前在对应APP或电话确认营业状态',
  '提前在APP上比价，周末价格通常比工作日贵20-50%',
  '选择"不计免赔"保险，新手剐蹭概率高，多花几十块省心',
  '取车时绕车一圈拍照/录像，记录已有划痕，避免还车纠纷',
  '检查油量/电量、轮胎状况、灯光是否正常',
  '确认备胎、三角警示牌、灭火器是否齐全',
  '问清楚还车时间和超时费用，一般按小时计费',
  '首次租车建议选择"送车上门"服务，避免不熟悉路况去取车',
  '深圳外地牌工作日7:00-9:00、17:30-19:30限行，周末不限。可在"深圳交警"微信公众号每月申请1次免限行通行证',
  '深圳路边停车须在10分钟内通过"宜停车"APP缴费，否则会被罚款。建议提前下载注册',
  '租的车通常已安装ETC，走高速时可走ETC车道。还车前注意核对ETC扣费记录',
];

export const carTypesData = [
  { name: '丰田卡罗拉', type: '紧凑型轿车', price: '约150-300元/天', reason: '保有量大，操控简单，视野好', emoji: '🚗', difficulty: 'easy' },
  { name: '日产轩逸', type: '紧凑型轿车', price: '约140-280元/天', reason: '座椅舒适，方向盘轻，新手友好', emoji: '🚙', difficulty: 'easy' },
  { name: '大众朗逸', type: '紧凑型轿车', price: '约150-300元/天', reason: '底盘扎实，高速稳定，好停车', emoji: '🚗', difficulty: 'easy' },
  { name: '比亚迪秦PLUS', type: '紧凑型轿车(电/混)', price: '约100-200元/天', reason: '动力平顺，能耗低，科技配置高', emoji: '⚡', difficulty: 'easy' },
];

export const practiceStagesData = [
  {
    stage: '第一阶段',
    title: '停车场熟悉车辆（1-2小时）',
    time: '周六上午 9:00-11:00',
    location: '南山区海岸城/南山智园地下停车场',
    color: 'border-green-500',
    bgColor: 'bg-green-50',
    tagColor: 'difficulty-easy',
    difficulty: '入门',
    items: [
      '坐进车内，调整座椅、后视镜到舒适位置',
      '熟悉所有按键位置：灯光、雨刷、空调、挡位',
      '原地练习挂挡：P→D→N→R→P，感受挡位切换',
      '在空旷区域低速前进、停车，感受油门和刹车力度',
      '练习转向：绕停车场慢速行驶，感受方向盘回正',
      '练习倒车入库：找空车位反复练习',
    ]
  },
  {
    stage: '第二阶段',
    title: '小区/园区道路练习（1-2小时）',
    time: '周六下午 14:00-16:00',
    location: '南山区科技园内部道路（周末车少，适合新手）',
    color: 'border-amber-500',
    bgColor: 'bg-amber-50',
    tagColor: 'difficulty-medium',
    difficulty: '进阶',
    items: [
      '在车少的园区道路练习直线行驶，保持车道居中',
      '练习左转、右转，注意转向灯提前打',
      '练习路边临时停车和起步',
      '尝试坡道起步（地下车库出入口）',
      '练习跟车行驶，保持安全距离',
      '熟悉使用导航，跟着导航指引行驶',
    ]
  },
  {
    stage: '第三阶段',
    title: '城市道路短途驾驶（1-2小时）',
    time: '周六下午 16:00-18:00（避开17:30晚高峰）',
    location: '科技园周边支路 → 深圳湾公园方向',
    color: 'border-blue-500',
    bgColor: 'bg-blue-50',
    tagColor: 'difficulty-medium',
    difficulty: '进阶',
    items: [
      '⚠️ 第一次上路建议有老司机朋友坐副驾指导',
      '先走科技园周边车少的支路，不要直接上南海大道主路',
      '练习红绿灯起步停车、路口转弯',
      '练习变道（先看后视镜→打转向灯→确认安全→变道）',
      '如果感觉紧张随时靠边停车休息，不要勉强',
      '注意观察路牌和地面标线，严格遵守限速',
    ]
  },
  {
    stage: '第四阶段',
    title: '短途自驾出游（不急于本周完成）',
    time: '积累足够信心后再尝试',
    location: '先选简单路线（深圳湾滨海休闲线）',
    color: 'border-purple-500',
    bgColor: 'bg-purple-50',
    tagColor: 'difficulty-hard',
    difficulty: '挑战',
    items: [
      '⚠️ 不要急！前三个阶段至少练习2-3个周末再尝试远途',
      '第一次出游强烈建议选简单路线（深圳湾滨海线，全程城市道路）',
      '⚠️ 第一次上高速务必有老司机陪同坐副驾',
      '提前设好导航，全程保持右侧车道行驶',
      '全程注意休息，每1.5小时停车休息15分钟',
      '如遇紧张/疲劳，立即找安全地方停车，不要硬撑',
    ]
  },
];

export const routesData = [
  {
    name: '深圳湾滨海休闲线',
    image: 'nanshan',
    difficulty: 'easy',
    difficultyText: '简单',
    distance: '约15公里',
    duration: '约40分钟',
    route: '南山 → 深圳湾公园 → 红树林 → 蛇口',
    highlights: ['⭐ 新手第一次自驾首选这条线！', '全程城市道路，车速不快，无高速', '多个停车点可随时靠边休息', '沿海风景优美，心情放松'],
    tips: '周末深圳湾公园停车位紧张，建议早上9点前到达。这是最适合新手的路线',
  },
  {
    name: '盐田海滨栈道线',
    image: 'yantian',
    difficulty: 'medium',
    difficultyText: '中等',
    distance: '约40公里',
    duration: '约1小时',
    route: '南山 → 滨河大道 → 罗沙路 → 盐田海滨栈道',
    highlights: ['体验城市快速路驾驶', '盐田海滨风景绝美', '有隧道驾驶体验', '沿途有多个服务区'],
    tips: '罗沙路有多个隧道，注意开近光灯。建议在深圳湾线走營‘2-3次后再尝试此路线',
  },
  {
    name: '大鹏半岛环海线',
    image: 'dapeng',
    difficulty: 'medium',
    difficultyText: '中等',
    distance: '约67公里',
    duration: '约1小时10分',
    route: '南山 → 滨海大道 → 惠深沿海高速 → 大鹏半岛',
    highlights: ['体验高速公路驾驶', '大鹏半岛海景壮观', '杨梅坑骑行/玩水', '可顺路去较场尾古城'],
    tips: '⚠️ 涉及高速，新手第一次走务必有老司机陪同。惠深沿海高速多隧道，保持车距。大鹏山路弯道多，控制车速',
  },
  {
    name: '惠州双月湾线',
    image: 'shuangyuewan',
    difficulty: 'hard',
    difficultyText: '较难',
    distance: '约150公里',
    duration: '约2小时',
    route: '南山 → 深汕高速 → 惠东 → 双月湾',
    highlights: ['长距离高速驾驶体验', '双月湾海景超美', '可安排两天一夜', '沿途服务区完善'],
    tips: '⚠️ 不建议新手独自尝试！全程高速+山路弯道，难度较大。必须有老司机陪同，建议积累1个月以上驾驶经验后再考虑',
  },
  {
    name: '东莞松山湖线',
    image: 'nanshan',
    difficulty: 'medium',
    difficultyText: '中等',
    distance: '约60公里',
    duration: '约1小时',
    route: '南山 → 广深高速 → 松山湖 → 环湖路',
    highlights: ['松山湖环湖路风景优美', '华为小镇可参观', '沿途有多个休息点', '环湖路车速慢，适合新手'],
    tips: '⚠️ 广深高速车流量大，新手第一次走请有老司机陪同，全程保持右侧车道。松山湖环湖路限速40',
  },
  {
    name: '广州长隆欢乐线',
    image: 'nanshan',
    difficulty: 'hard',
    difficultyText: '较难',
    distance: '约130公里',
    duration: '约1.5-2小时',
    route: '南山 → 广深高速 → 广州环城高速 → 长隆',
    highlights: ['跨城自驾体验', '广深高速+城市高速组合', '长隆游玩一整天', '建议两天一夜行程'],
    tips: '⚠️ 不建议新手独自尝试！跨城+广州城区道路复杂，必须有老司机陪同。建议积累2个月以上驾驶经验后再考虑',
  },
];

export const safetyTipsData = [
  { icon: 'ri-speed-up-line', color: 'bg-blue-100 text-blue-600', title: '控制车速', desc: '新手建议城市道路不超过50km/h，高速保持80-100km/h。宁慢勿快，安全第一。' },
  { icon: 'ri-eye-line', color: 'bg-green-100 text-green-600', title: '多看后视镜', desc: '每隔10-15秒扫一眼后视镜，变道前必看。养成"看镜-打灯-变道"的习惯。' },
  { icon: 'ri-space-ship-line', color: 'bg-amber-100 text-amber-600', title: '保持车距', desc: '与前车保持至少3秒的跟车距离。高速上至少保持100米以上。雨天加倍。' },
  { icon: 'ri-flashlight-line', color: 'bg-purple-100 text-purple-600', title: '正确使用灯光', desc: '转弯变道提前3秒打转向灯。进隧道开近光灯。不要滥用远光灯。' },
  { icon: 'ri-parking-box-line', color: 'bg-red-100 text-red-600', title: '停车要稳', desc: '停车前先观察周围环境，慢慢靠边。熄火前挂P挡拉手刹。坡道停车要打方向。' },
  { icon: 'ri-smartphone-line', color: 'bg-pink-100 text-pink-600', title: '不看手机', desc: '开车时绝对不要看手机！导航用语音播报，电话用蓝牙。这是最重要的安全准则。' },
];

export const emergencyData = [
  { title: '爆胎', icon: '💥', steps: ['握紧方向盘，不要急打方向', '松油门，轻踩刹车减速', '打双闪，靠边停车', '放三角警示牌，打电话求助'] },
  { title: '刹车失灵', icon: '🛑', steps: ['反复快速踩刹车踏板', '拉电子手刹/脚刹', '降挡减速（手动模式）', '利用路边障碍物减速'] },
  { title: '追尾事故', icon: '💢', steps: ['开双闪，放三角牌', '拍照记录现场', '轻微事故走快处快赔', '报警电话：122'] },
  { title: '车辆抛锚', icon: '🔧', steps: ['打双闪靠边停车', '车后150米放三角牌', '人员撤离到护栏外', '拨打救援：12122'] },
];

export const slopeStopData = [
  { step: 1, text: '缓慢踩刹车，让车辆完全停稳' },
  { step: 2, text: '保持踩住刹车，挂入P挡' },
  { step: 3, text: '拉起电子手刹（或踩脚刹）' },
  { step: 4, text: '松开脚刹，确认车辆不会溜车' },
  { step: 5, text: '如果是较陡的坡且路边有马路牙子，将方向盘向路边打一点（上坡左打，下坡右打），防止溜车时冲入车道' },
  { step: 6, text: '熄火，确认车辆稳定后下车' },
];

export const slopeStartData = [
  { step: 1, text: '上车系好安全带，启动车辆' },
  { step: 2, text: '踩住刹车，挂入D挡' },
  { step: 3, text: '如果有AUTOHOLD功能，确认已开启' },
  { step: 4, text: '松开手刹' },
  { step: 5, text: '缓慢松开刹车，同时轻踩油门' },
  { step: 6, text: '感觉车辆开始前进后，逐渐加油门驶离' },
  { step: 7, text: '⚠️ 关键：不要猛踩油门，也不要完全松开刹车后再踩油门' },
];

export const scheduleData = {
  saturday: {
    title: '周六 · 取车 & 练习日',
    icon: '🚗',
    color: 'border-blue-500',
    items: [
      { time: '08:00', event: '出门前检查：驾照、手机、充电宝、墨镜、水', icon: '🎒' },
      { time: '08:30', event: '前往租车点取车（建议选最近的门店或送车上门）', icon: '🏪' },
      { time: '09:00', event: '取到车后不急着走！先在车内坐10分钟，熟悉所有按键', icon: '🎛️' },
      { time: '09:15', event: '调整座椅、后视镜、方向盘到舒适位置', icon: '💺' },
      { time: '09:30', event: '在停车场内低速练习：前进、后退、转弯', icon: '🅿️' },
      { time: '10:30', event: '练习停车：正向停车、倒车入库各练5次', icon: '🎯' },
      { time: '11:30', event: '休息，喝水，回顾上午练习的不足', icon: '☕' },
      { time: '12:00', event: '开车去附近吃午饭（第一次真正上路！选近的地方）', icon: '🍜' },
      { time: '13:30', event: '在科技园周边车少的支路练习，不要急着上主干道', icon: '🚦' },
      { time: '14:30', event: '如果感觉不错，沿车少路段慢慢开往深圳湾公园方向', icon: '🌊' },
      { time: '15:30', event: '在深圳湾公园停车，休息拍照', icon: '📸' },
      { time: '16:30', event: '返程，尝试不同路线回到住处附近', icon: '🔄' },
      { time: '17:30', event: '找个停车场再练习几次停车', icon: '🅿️' },
      { time: '18:00', event: '回家休息，总结今天的驾驶体验', icon: '🏠' },
    ]
  },
  sunday: {
    title: '周日 · 巩固练习 & 还车日',
    icon: '🗺️',
    color: 'border-green-500',
    items: [
      { time: '08:30', event: '出门前检查车辆状况（轮胎、油量/电量）', icon: '🔍' },
      { time: '09:00', event: '复习昨天薄弱环节：停车、转弯、坡道起步', icon: '🔄' },
      { time: '10:00', event: '沿深圳湾滨海线短途驾驶（最简单路线，全程城市道路）', icon: '🚗' },
      { time: '10:30', event: '在深圳湾公园停车，散步休息', icon: '🌅' },
      { time: '11:30', event: '开车去附近吃午餐，练习陌生地点找车位', icon: '🍜' },
      { time: '13:00', event: '如果状态好，可再开一段路巩固信心', icon: '🛣️' },
      { time: '14:30', event: '回到住处附近，找停车场做最后几轮停车练习', icon: '🅿️' },
      { time: '15:30', event: '找加油站加油/充电（还车前加满）', icon: '⛽' },
      { time: '16:00', event: '还车，检查车辆，完成还车手续', icon: '🔑' },
      { time: '16:30', event: '回家总结！下个周末可以再租车继续练 🎉', icon: '🎊' },
    ]
  }
};

