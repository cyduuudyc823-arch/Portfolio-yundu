(() => {
  const { createApp, ref, computed, onMounted, nextTick } = Vue;

  const cursorHover = () => document.body.classList.add('hovering');
  const cursorLeave = () => document.body.classList.remove('hovering');

  function enableCursor(dot, outline) {
    window.addEventListener('mousemove', (event) => {
      if (!dot.value || !outline.value) return;
      dot.value.style.left = `${event.clientX}px`;
      dot.value.style.top = `${event.clientY}px`;
      gsap.to(outline.value, { x: event.clientX, y: event.clientY, duration: 0.15 });
    });
  }

  const HOME_STATE_KEY = 'portfolioHomeState';

  window.mountPortfolioHome = () => createApp({
    setup() {
      const profile = ref(window.portfolioData);
      const cursorDot = ref(null);
      const cursorOutline = ref(null);
      const focusedProject = ref(null);
      const serviceProjects = computed(() => profile.value.projects.filter((project) => project.category === 'Service'));
      const visualProjects = computed(() => profile.value.projects.filter((project) => project.category === 'Visual'));
      const growthItems = computed(() => profile.value.growth || []);

      // Restore the drawer state + scroll position the visitor left with, but only when
      // arriving via a dedicated "#return" link (the project pages' back button) — a
      // normal Works/Growth/Contact nav click should still jump to that section as usual.
      const initialHash = (window.location.hash || '').replace(/^#/, '');
      let savedState = null;
      if (initialHash === 'return') {
        try {
          const raw = sessionStorage.getItem(HOME_STATE_KEY);
          if (raw) savedState = JSON.parse(raw);
        } catch (e) { savedState = null; }
      }
      sessionStorage.removeItem(HOME_STATE_KEY);

      // Works/Growth drawers: each category starts collapsed and toggles independently.
      const serviceOpen = ref(!!(savedState && savedState.serviceOpen));
      const visualOpen = ref(!!(savedState && savedState.visualOpen));
      const growthOpen = ref(!!(savedState && savedState.growthOpen));
      // Suppresses the drawer open/close transition while restoring prior state, so the
      // page doesn't visibly animate open before jumping to the saved scroll position.
      const noAnim = ref(!!savedState);

      const openProject = (project) => { window.location.href = project.detailsUrl; };
      const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
      const handleNavClick = (target) => {
        const element = document.getElementById(target + '-anchor') || document.getElementById(target);
        if (target === 'about') scrollToTop();
        else if (element) element.scrollIntoView({ behavior: 'smooth' });
      };

      const saveHomeState = () => {
        try {
          sessionStorage.setItem(HOME_STATE_KEY, JSON.stringify({
            serviceOpen: serviceOpen.value,
            visualOpen: visualOpen.value,
            growthOpen: growthOpen.value,
            scrollY: window.scrollY
          }));
        } catch (e) { /* ignore */ }
      };

      onMounted(() => {
        enableCursor(cursorDot, cursorOutline);
        window.addEventListener('pagehide', saveHomeState);

        if (savedState) {
          history.replaceState(null, '', window.location.pathname + window.location.search);
          nextTick(() => {
            window.scrollTo(0, savedState.scrollY || 0);
            requestAnimationFrame(() => requestAnimationFrame(() => { noAnim.value = false; }));
          });
        } else if (initialHash) {
          nextTick(() => handleNavClick(initialHash));
        }
      });

      return {
        profile, cursorDot, cursorOutline, focusedProject, cursorHover, cursorLeave,
        serviceProjects, visualProjects, growthItems, serviceOpen, visualOpen, growthOpen, noAnim,
        openProject, scrollToTop, handleNavClick
      };
    }
  }).mount('#app');

  window.mountPortfolioProject = (projectId) => createApp({
    setup() {
      const profile = ref(window.portfolioData);
      const cursorDot = ref(null);
      const cursorOutline = ref(null);
      const currentProject = computed(() => profile.value.projects.find((project) => project.id === projectId));
      const setView = () => { window.location.href = '../../index.html#return'; };
      const scrollToTop = () => { window.location.href = '../../index.html'; };
      const handleNavClick = (target) => {
        window.location.href = target === 'about' ? '../../index.html' : `../../index.html#${target}`;
      };
      onMounted(() => {
        enableCursor(cursorDot, cursorOutline);
        if (projectId === 'doggo-go') document.body.style.overflow = 'hidden';
        nextTick(() => window.initProjectInteractions(projectId));
      });
      return { profile, cursorDot, cursorOutline, currentProject, cursorHover, cursorLeave, setView, scrollToTop, handleNavClick };
    }
  }).mount('#app');
})();
