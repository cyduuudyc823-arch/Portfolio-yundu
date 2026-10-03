(() => {
  const STORAGE_KEY = 'portfolioLanguage';
  const DEFAULT_LANGUAGE = 'en';

  const ui = {
    en: {
      whoAmI: 'Who Am I', whatIDo: 'What I Do', works: 'Works', growth: 'Growth',
      serviceDesign: 'Service Design', visualDesign: 'Visual Design', graduation: 'RCA Graduation Defence',
      projects: 'Projects', getInTouch: 'Get in Touch', connectLinkedIn: 'Connect on LinkedIn',
      caseStudy: 'Case Study', role: 'Role', year: 'Year', context: 'Context',
      strategy: 'Strategy / Approach', opportunity: 'Opportunity', objective: 'Objective',
      solution: 'Solution', impact: 'Outcome & Impact', backPortfolio: '← Back to portfolio',
      pokerGuide: 'Scroll to spread · Click a card to centre'
    },
    zh: {
      whoAmI: '关于我', whatIDo: '我的方向', works: '项目', growth: '成长',
      serviceDesign: '服务设计', visualDesign: '视觉设计', graduation: 'RCA 毕业答辩',
      projects: '个项目', getInTouch: '联系我', connectLinkedIn: '在 LinkedIn 联系我',
      caseStudy: '项目案例', role: '角色', year: '年份', context: '背景',
      strategy: '策略 / 方法', opportunity: '机会点', objective: '目标',
      solution: '解决方案', impact: '成果与影响', backPortfolio: '← 返回作品集',
      pokerGuide: '滚动展开 · 点击牌面居中展示'
    }
  };

  const chineseData = {
    nav: {
      links: [
        { text: '关于', target: 'about' },
        { text: '项目', target: 'projects' },
        { text: '成长', target: 'growth' },
        { text: '联系', target: 'contact' }
      ]
    },
    hero: {
      whoAmI: '我是一名连接战略服务设计与视觉创意的跨领域设计师。我以策略思维梳理问题，也以艺术视角塑造体验，创造真正有效的设计。',
      whatIDoTags: ['服务与系统设计', '用户体验', '品牌与识别', '视觉叙事'],
      background: '现居伦敦 · 英国皇家艺术学院'
    },
    projects: {
      readyology: {
        name: 'Readyology — 乳腺筛查中的人机分歧治理',
        tags: ['服务设计', '医疗健康', 'AI 治理'],
        details: {
          role: '服务设计研究员',
          context: 'AI 辅助乳腺筛查会将部分病例标记给第二阅片者。由于团队并非医学或 AI 专家，无法直接进入临床现场，项目从文献研究、跨国筛查体系分析、流程梳理，以及对一位 AI 专家和两位放射科医生的访谈展开。',
          opportunity: '问题不是“如何提升 AI 准确率”，而是当人的判断与 AI 建议不一致时，应该发生什么？',
          solution: 'Readyology 是一套涵盖阅片、仲裁与学习的工作流程；它规范放射科医生与 AI 出现分歧时如何达成决定，并始终保留人类临床判断的最终权威。',
          impact: '反馈指出，这仍是一个通用的未来模型，缺少具体实施路径。这提醒我们：没有资金、基础设施和组织支持，再优雅的服务设计也可能停留在象牙塔中。'
        }
      },
      'genz-future': {
        name: 'GenZ4Good — 设计未来公益参与模式', tags: ['服务设计', '策略'],
        details: {
          role: '服务设计研究员 · 策略专员 · 原型负责人',
          context: '慈善机构正面临长期捐赠参与度下降与信任减弱的问题，年轻群体尤为明显。Z 世代虽高度关注社会议题，传统捐赠模式却难以契合他们的行为与期待。',
          opportunity: '慈善机构如何从交易式募款转向以关系为核心、能够培育未来捐赠者的参与模式？',
          strategy: '项目并未另建平台，而是探索现有慈善基础设施如何演进。\n关键洞察：年轻人更愿意通过社群而非机构参与。',
          solution: '一套慈善机构与社群的合作框架：\n在现有慈善网站内嵌合作入口；\n简化学生社团与草根社群的加入流程；\n以活动为核心，逐步建立情感投入。',
          impact: '让公益参与从一次性捐赠走向持续参与；\n建立机构与青年社群之间可扩展的合作渠道；\n强化长期信任机制。'
        }
      },
      'cat-aid': {
        name: 'Paw-to-Paw 猫咪互助 — 宠物献血网络', tags: ['服务设计', '社会创新'],
        details: {
          role: '服务设计研究员 · 策略专员 · 原型负责人',
          context: '中国宠物数量快速增长，兽医输血需求随之上升，但规范化献血体系仍然有限。资源分散、血型匹配复杂，非正规市场也带来安全与伦理风险，使宠物主人在紧急寻找血源时承受巨大压力。',
          opportunity: '如何降低宠物主人在紧急情况下的压力，并建立可持续的捐献网络，而非一次性配对？',
          strategy: '系统不把献血视为单次医疗交易，而是将参与重新定义为关系的建立——以友谊为基础的捐献网络。',
          solution: '一套通过友谊网络，把医疗义务转化为社群互助的社会支持生态。',
          impact: '重塑宠物医疗的协作生态，从被动配对转向以关系为基础的持续支持。'
        }
      },
      'urban-futures': {
        name: 'Co-Vision Chess — 参与式城市未来', tags: ['公共参与', '服务设计', 'AI'],
        details: {
          context: '中国城市规划过程往往缺乏有意义的公众参与，导致居民投入不足，也削弱了社区归属感。',
          opportunity: '让居民主动参与未来发展议题的塑造。',
          solution: '一个协作式未来推演平台，结合实体共创工具、AI 辅助未来模拟和数字参与平台。居民通过游戏探索不同情境，让复杂规划议题变得易于理解。',
          impact: '把抽象规划概念转化为可感知的体验，并强化共同愿景的建立。'
        }
      },
      'doggo-go': { name: 'Doggo Go — 社区宠物照护', tags: ['宠物照护'], details: { context: '共享宠物照护责任平台。' } },
      'star-retro': {
        name: '星辰倒退 — 传统宇宙观的数字转译', tags: ['界面设计', '3D', '文化传承'],
        details: { context: '以互动数字媒体重新诠释中国传统二十八星宿的文化创新项目。', opportunity: '通过数字互动重新讲述古代星宿体系。', strategy: '打造数字“星座花园”：将天体结构转化为三维植物形态。', impact: '连接文化遗产与当代审美。' }
      },
      beicangmen: {
        name: '北仓门艺术区 — 导视系统', tags: ['导视设计'],
        details: { context: '由旧丝绸仓库改造的艺术区缺乏可见度与连贯的导航系统。', strategy: '以环境图形重建空间识别。', solution: '以丝线为灵感，呼应场地的丝绸工业历史，并通过整合式导视提升访客动线的清晰度。', impact: '在改善可用性的同时强化场所身份。' }
      },
      'full-luck': {
        name: '福了 — 惠山泥人扑克牌', tags: ['产品设计'],
        details: { context: '惠山泥人是拥有四百多年历史的无锡传统民间艺术，也是国家级非物质文化遗产。“阿福”等经典形象象征幸福与喜悦。', strategy: '创意思路：\n用泥人儿童形象替换传统扑克牌人物；\n把“服了”与“福了”的谐音融入品牌。', solution: '以当代扑克牌系统把传统人物转化为趣味叙事，并通过文创扑克与骰子配件扩展玩法。' }
      },
      'share-bite': {
        name: 'Share a Bite — 共享厨房', tags: ['品牌设计'],
        details: { context: '大学生需要灵活的烹饪空间，却受到安全与基础设施条件限制。', solution: '一套结合安全烹饪设施、社交用餐体验与平价聚会空间的共享厨房服务模式；品牌概念强调分享食物带来的社会连接。' }
      }
    },
    growth: {
      'service-design-reflection': {
        name: '重新思考服务设计 — 从理想走向行动',
        summary: '通过 Tesco、GenZ4Good 与 Readyology 回顾一年的学习与实践。'
      }
    }
  };

  const staticEnToZh = {
    'Case Study': '项目案例', 'Role': '角色', 'Year': '年份', 'Context': '背景',
    'Strategy / Approach': '策略 / 方法', 'Opportunity': '机会点', 'Objective': '目标',
    'Solution': '解决方案', 'Outcome & Impact': '成果与影响',
    'Who Am I': '关于我', 'What I Do': '我的方向', 'Works': '项目', 'Growth': '成长',
    'Get in Touch': '联系我', 'Connect on LinkedIn': '在 LinkedIn 联系我',
    'Service Design': '服务设计', 'Visual Design': '视觉设计',
    'RCA Graduation Defence': 'RCA 毕业答辩', 'Projects': '个项目',
    'Scroll to spread · Click a card to centre': '滚动展开 · 点击牌面居中展示',
    '← Back to portfolio': '← 返回作品集'
  };
  const staticZhToEn = Object.fromEntries(Object.entries(staticEnToZh).map(([en, zh]) => [zh, en]));
  const nodePairs = new WeakMap();

  function clone(value) { return JSON.parse(JSON.stringify(value)); }

  function getLanguage() {
    try { return localStorage.getItem(STORAGE_KEY) === 'zh' ? 'zh' : DEFAULT_LANGUAGE; }
    catch (error) { return DEFAULT_LANGUAGE; }
  }

  function saveLanguage(language) {
    try { localStorage.setItem(STORAGE_KEY, language); } catch (error) { /* no-op */ }
  }

  function translatedProjectData(language) {
    const data = clone(window.portfolioData);
    if (language !== 'zh') return data;
    data.nav.links = chineseData.nav.links;
    Object.assign(data.hero, chineseData.hero);
    data.projects.forEach((project) => {
      const translation = chineseData.projects[project.id];
      if (!translation) return;
      if (translation.name) project.name = translation.name;
      if (translation.tags) project.tags = translation.tags;
      if (translation.details) Object.assign(project.details, translation.details);
    });
    (data.growth || []).forEach((item) => {
      if (chineseData.growth[item.id]) Object.assign(item, chineseData.growth[item.id]);
    });
    return data;
  }

  function dictionaries() {
    const readyology = window.readyologyTranslations || { enToZh: {}, zhToEn: {} };
    const manual = window.readyologyManualTranslations || { enToZh: {}, zhToEn: {} };
    const projects = window.projectTranslations || { enToZh: {}, zhToEn: {} };
    return {
      enToZh: { ...staticEnToZh, ...projects.enToZh, ...readyology.enToZh, ...manual.enToZh },
      zhToEn: { ...staticZhToEn, ...projects.zhToEn, ...readyology.zhToEn, ...manual.zhToEn }
    };
  }

  function translateStatic(language, root = document.body) {
    if (!root) return;
    const maps = dictionaries();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement && !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.parentElement.tagName)
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    let node;
    while ((node = walker.nextNode())) {
      const current = node.nodeValue;
      const trimmed = current.replace(/\s+/g, ' ').trim();
      if (!trimmed) continue;
      if (!nodePairs.has(node)) {
        if (maps.enToZh[trimmed]) nodePairs.set(node, { en: trimmed, zh: maps.enToZh[trimmed] });
        else if (maps.zhToEn[trimmed]) nodePairs.set(node, { en: maps.zhToEn[trimmed], zh: trimmed });
      }
      const pair = nodePairs.get(node);
      if (!pair) continue;
      const replacement = pair[language];
      const leading = current.match(/^\s*/)[0];
      const trailing = current.match(/\s*$/)[0];
      node.nodeValue = `${leading}${replacement}${trailing}`;
    }
    root.querySelectorAll('[alt], [title], [aria-label]').forEach((element) => {
      ['alt', 'title', 'aria-label'].forEach((attribute) => {
        const current = element.getAttribute(attribute);
        if (!current) return;
        const translated = language === 'zh' ? maps.enToZh[current] : maps.zhToEn[current];
        if (translated) element.setAttribute(attribute, translated);
      });
    });
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }

  function initStandalone() {
    const language = getLanguage();
    translateStatic(language);
    document.querySelectorAll('[data-language-switch]').forEach((switcher) => {
      switcher.querySelectorAll('button[data-language]').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.language === language);
        button.addEventListener('click', () => {
          const next = button.dataset.language;
          saveLanguage(next);
          translateStatic(next);
          switcher.querySelectorAll('button[data-language]').forEach((item) => item.classList.toggle('is-active', item.dataset.language === next));
          const current = switcher.querySelector('[data-language-current]');
          if (current) current.textContent = next === 'en' ? 'English' : '中文';
          switcher.removeAttribute('open');
        });
      });
      const current = switcher.querySelector('[data-language-current]');
      if (current) current.textContent = language === 'en' ? 'English' : '中文';
    });
  }

  window.portfolioI18n = {
    getLanguage, saveLanguage, getPortfolioData: translatedProjectData, translateStatic,
    t(language, key) { return (ui[language] && ui[language][key]) || ui.en[key] || key; },
    initStandalone
  };
})();
