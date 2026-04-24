// 主入口文件 - 初始化页面和交互
import {
  timelineData, videoData, learnPointsData, controlsData,
  rentShopsData, rentTipsData, carTypesData, practiceStagesData,
  routesData, safetyTipsData, emergencyData,
  slopeStopData, slopeStartData, scheduleData
} from './data.js';

import {
  renderTimeline, renderVideos, renderLearnPoints, renderControlTabs,
  renderRentShops, renderRentTips, renderCarTypes, renderPracticeStages,
  renderRoutes, renderSafetyTips, renderEmergency,
  renderSlopeSteps, renderSchedule
} from './render.js';

// 页面初始化
function init() {
  // 渲染所有区块
  const sections = [
    { id: 'timelineGrid', fn: renderTimeline, data: timelineData },
    { id: 'videoList', fn: renderVideos, data: videoData },
    { id: 'learnPoints', fn: renderLearnPoints, data: learnPointsData },
    { id: 'rentShops', fn: renderRentShops, data: rentShopsData },
    { id: 'rentTips', fn: renderRentTips, data: rentTipsData },
    { id: 'carTypes', fn: renderCarTypes, data: carTypesData },
    { id: 'practiceStages', fn: renderPracticeStages, data: practiceStagesData },
    { id: 'routeCards', fn: renderRoutes, data: routesData },
    { id: 'safetyTips', fn: renderSafetyTips, data: safetyTipsData },
    { id: 'emergencyCards', fn: renderEmergency, data: emergencyData },
    { id: 'slopeStopSteps', fn: renderSlopeSteps, data: slopeStopData },
    { id: 'slopeStartSteps', fn: renderSlopeSteps, data: slopeStartData },
    { id: 'scheduleCards', fn: renderSchedule, data: scheduleData },
  ];

  sections.forEach(({ id, fn, data }) => {
    const el = document.getElementById(id);
    if (el) fn(el, data);
  });

  // 按键标签页需要特殊处理（两个容器）
  const tabContainer = document.getElementById('controlTabs');
  const contentContainer = document.getElementById('controlContent');
  if (tabContainer && contentContainer) {
    renderControlTabs(tabContainer, contentContainer, controlsData);
  }

  // 初始化交互
  initMobileMenu();
  initBackToTop();
  initNavHighlight();
  initScrollAnimations();
}

// 移动端菜单
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', !menu.classList.contains('hidden'));
  });

  // 点击菜单项后关闭
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// 回到顶部
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 导航高亮
function initNavHighlight() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['overview', 'learn', 'controls', 'rent', 'practice', 'routes', 'tips'];

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    let currentSection = '';

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollPos) {
        currentSection = id;
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
}

// 滚动动画
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 对所有卡片类元素添加入场动画
  const animateSelectors = [
    '.timeline-card', '.video-card', '.stage-card',
    '.route-card', '.safety-card', '.emergency-card',
    '.car-card', '.rent-card'
  ];

  // 延迟执行以确保DOM已渲染
  setTimeout(() => {
    animateSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.5s ease ${i * 0.05}s`;
        observer.observe(el);
      });
    });
  }, 100);
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

