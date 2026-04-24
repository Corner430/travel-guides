// 渲染模块 - 负责所有DOM渲染逻辑
import { IMAGES } from './data.js';

// 渲染时间线
export function renderTimeline(container, data) {
  container.innerHTML = data.map((item, i) => `
    <div class="timeline-card bg-white rounded-2xl shadow-md p-5 border-t-4 ${item.color.replace('bg-', 'border-')}" style="animation-delay: ${i * 0.1}s">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold text-gray-400">${item.day}</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">${item.tag}</span>
      </div>
      <div class="w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white text-lg mb-3">
        <i class="${item.icon}"></i>
      </div>
      <h3 class="font-bold text-dark text-sm mb-1">${item.title}</h3>
      <p class="text-xs text-gray-500 leading-relaxed">${item.desc}</p>
    </div>
  `).join('');
}

// 渲染视频列表
export function renderVideos(container, data) {
  container.innerHTML = data.map(v => `
    <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="video-card block bg-white rounded-2xl shadow-md p-6 border border-gray-100 no-underline text-inherit">
      <div class="flex items-start justify-between mb-3">
        <div class="flex items-center gap-2">
          <i class="${v.icon} text-2xl ${v.color}"></i>
          <span class="text-xs px-2 py-0.5 rounded-full ${v.priority === '必看' ? 'bg-red-100 text-red-600' : v.priority === '推荐' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'} font-medium">${v.priority}</span>
        </div>
        <span class="text-xs text-gray-400">${v.duration}</span>
      </div>
      <h4 class="font-bold text-dark mb-2">${v.title}</h4>
      <p class="text-sm text-gray-500 mb-3">${v.desc}</p>
      <div class="flex items-center justify-between">
        <span class="text-xs text-gray-400"><i class="ri-search-line mr-1"></i>搜索：${v.search}</span>
        <span class="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-500">${v.platform}</span>
      </div>
    </a>
  `).join('');
}

// 渲染学习要点
export function renderLearnPoints(container, data) {
  container.innerHTML = data.map(p => `
    <div class="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <div class="w-12 h-12 ${p.color} rounded-xl flex items-center justify-center text-2xl mb-4">
        <i class="${p.icon}"></i>
      </div>
      <h4 class="font-bold text-dark mb-3">${p.title}</h4>
      <ul class="space-y-2">
        ${p.items.map(item => `
          <li class="flex items-center gap-2 text-sm text-gray-600">
            <i class="ri-checkbox-circle-fill text-green-500 text-xs"></i>
            ${item}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// 渲染按键标签页
export function renderControlTabs(tabContainer, contentContainer, data) {
  const categories = Object.keys(data);

  tabContainer.innerHTML = categories.map((cat, i) => `
    <button class="control-tab px-4 py-2 rounded-full text-sm font-medium border border-gray-200 ${i === 0 ? 'active' : 'bg-white text-gray-600 hover:bg-gray-50'}" data-tab="${cat}">
      ${cat}
    </button>
  `).join('');

  function renderContent(category) {
    const items = data[category];
    contentContainer.innerHTML = items.map((item, i) => `
      <div class="control-item flex items-start gap-4 p-4 rounded-xl border border-gray-100" style="animation-delay: ${i * 0.05}s">
        <span class="text-2xl flex-shrink-0">${item.icon}</span>
        <div>
          <h4 class="font-bold text-dark text-sm mb-1">${item.name}</h4>
          <p class="text-sm text-gray-500 leading-relaxed">${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  renderContent(categories[0]);

  tabContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.control-tab');
    if (!btn) return;
    tabContainer.querySelectorAll('.control-tab').forEach(b => {
      b.classList.remove('active');
      b.classList.add('bg-white', 'text-gray-600');
    });
    btn.classList.add('active');
    btn.classList.remove('bg-white', 'text-gray-600');
    renderContent(btn.dataset.tab);
  });
}

// 渲染租车店铺
export function renderRentShops(container, data) {
  container.innerHTML = data.map(shop => `
    <div class="rent-card bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div class="flex items-start justify-between mb-2">
        <h4 class="font-bold text-dark text-sm">${shop.name}</h4>
        <span class="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 font-medium">${shop.tag}</span>
      </div>
      <p class="text-xs text-gray-500 mb-2"><i class="ri-map-pin-line mr-1"></i>${shop.address}</p>
      <div class="flex items-center justify-between text-xs text-gray-400">
        <span><i class="ri-route-line mr-1"></i>${shop.distance}</span>
        <span><i class="ri-smartphone-line mr-1"></i>${shop.platform}</span>
      </div>
    </div>
  `).join('');
}

// 渲染租车注意事项
export function renderRentTips(container, data) {
  container.innerHTML = data.map(tip => `
    <div class="rent-tip-item text-sm text-gray-600 leading-relaxed">${tip}</div>
  `).join('');
}

// 渲染推荐车型
export function renderCarTypes(container, data) {
  container.innerHTML = data.map(car => `
    <div class="car-card bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <div class="text-4xl mb-3">${car.emoji}</div>
      <h4 class="font-bold text-dark mb-1">${car.name}</h4>
      <p class="text-xs text-gray-400 mb-2">${car.type}</p>
      <p class="text-sm font-semibold text-primary mb-2">${car.price}</p>
      <p class="text-xs text-gray-500">${car.reason}</p>
      <div class="mt-3">
        <span class="text-xs px-2 py-0.5 rounded-full difficulty-${car.difficulty}">新手友好</span>
      </div>
    </div>
  `).join('');
}

// 渲染练车阶段
export function renderPracticeStages(container, data) {
  container.innerHTML = data.map((stage, i) => `
    <div class="stage-card bg-white rounded-2xl shadow-md border-l-4 ${stage.color} overflow-hidden">
      <div class="${stage.bgColor} px-6 py-4 flex flex-wrap items-center gap-4">
        <span class="font-bold text-dark">${stage.stage}</span>
        <h3 class="font-bold text-dark text-lg">${stage.title}</h3>
        <span class="${stage.tagColor} text-xs px-2 py-0.5 rounded-full font-medium">${stage.difficulty}</span>
      </div>
      <div class="p-6">
        <div class="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
          <span><i class="ri-time-line mr-1"></i>${stage.time}</span>
          <span><i class="ri-map-pin-line mr-1"></i>${stage.location}</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          ${stage.items.map((item, j) => `
            <div class="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
              <span class="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">${j + 1}</span>
              <span class="text-sm text-gray-700">${item}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// 渲染自驾路线
export function renderRoutes(container, data) {
  container.innerHTML = data.map(route => `
    <div class="route-card bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <div class="relative h-44 overflow-hidden">
        <img src="${IMAGES[route.image]}" alt="${route.name}" class="route-img w-full h-full object-cover">
        <div class="absolute top-3 left-3">
          <span class="difficulty-${route.difficulty} text-xs px-3 py-1 rounded-full font-medium">${route.difficultyText}</span>
        </div>
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 class="text-white font-bold text-lg">${route.name}</h3>
        </div>
      </div>
      <div class="p-5">
        <div class="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <span><i class="ri-route-line mr-1"></i>${route.distance}</span>
          <span><i class="ri-time-line mr-1"></i>${route.duration}</span>
        </div>
        <p class="text-sm text-gray-600 mb-3"><i class="ri-road-map-line mr-1 text-primary"></i>${route.route}</p>
        <div class="space-y-1.5 mb-3">
          ${route.highlights.map(h => `
            <div class="flex items-center gap-2 text-xs text-gray-500">
              <i class="ri-check-line text-green-500"></i>${h}
            </div>
          `).join('')}
        </div>
        <div class="bg-amber-50 rounded-lg p-3 text-xs text-amber-700">
          <i class="ri-error-warning-line mr-1"></i>${route.tips}
        </div>
      </div>
    </div>
  `).join('');
}

// 渲染安全贴士
export function renderSafetyTips(container, data) {
  container.innerHTML = data.map(tip => `
    <div class="safety-card bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      <div class="w-12 h-12 ${tip.color} rounded-xl flex items-center justify-center text-2xl mb-4">
        <i class="${tip.icon}"></i>
      </div>
      <h4 class="font-bold text-dark mb-2">${tip.title}</h4>
      <p class="text-sm text-gray-500 leading-relaxed">${tip.desc}</p>
    </div>
  `).join('');
}

// 渲染紧急情况
export function renderEmergency(container, data) {
  container.innerHTML = data.map(item => `
    <div class="emergency-card bg-white rounded-xl shadow-md p-5">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-2xl">${item.icon}</span>
        <h4 class="font-bold text-dark">${item.title}</h4>
      </div>
      <ol class="space-y-2">
        ${item.steps.map((step, i) => `
          <li class="flex items-start gap-2 text-sm text-gray-600">
            <span class="w-5 h-5 rounded-full bg-red-100 text-red-600 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">${i + 1}</span>
            ${step}
          </li>
        `).join('')}
      </ol>
    </div>
  `).join('');
}

// 渲染坡道步骤
export function renderSlopeSteps(container, data) {
  container.innerHTML = data.map(item => `
    <div class="step-item flex items-start gap-3 p-3">
      <span class="w-7 h-7 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0">${item.step}</span>
      <span class="text-sm text-gray-700 leading-relaxed pt-1">${item.text}</span>
    </div>
  `).join('');
}

// 渲染行程表
export function renderSchedule(container, data) {
  container.innerHTML = Object.values(data).map(day => `
    <div class="bg-white rounded-2xl shadow-lg border-t-4 ${day.color} overflow-hidden">
      <div class="px-6 py-4 bg-gray-50 flex items-center gap-3">
        <span class="text-2xl">${day.icon}</span>
        <h3 class="font-bold text-dark text-lg">${day.title}</h3>
      </div>
      <div class="p-6 space-y-1">
        ${day.items.map(item => `
          <div class="schedule-item flex items-start gap-4 p-3">
            <div class="flex-shrink-0 w-16 text-right">
              <span class="text-sm font-bold text-primary">${item.time}</span>
            </div>
            <span class="text-lg flex-shrink-0">${item.icon}</span>
            <span class="text-sm text-gray-700">${item.event}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

