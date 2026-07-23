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

  window.mountPortfolioHome = () => createApp({
    setup() {
      const profile = ref(window.portfolioData);
      const cursorDot = ref(null);
      const cursorOutline = ref(null);
      const focusedProject = ref(null);
      const serviceProjects = computed(() => profile.value.projects.filter((project) => project.category === 'Service'));
      const visualProjects = computed(() => profile.value.projects.filter((project) => project.category === 'Visual'));
      const maxProjectRows = computed(() => Math.max(serviceProjects.value.length, visualProjects.value.length));
      const getProjectByRow = (category, index) => (category === 'Service' ? serviceProjects.value : visualProjects.value)[index] || null;
      const openProject = (project) => { window.location.href = project.detailsUrl; };
      const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
      const handleNavClick = (target) => {
        const element = document.getElementById(target + '-anchor') || document.getElementById(target);
        if (target === 'about') scrollToTop();
        else if (element) element.scrollIntoView({ behavior: 'smooth' });
      };
      onMounted(() => {
        enableCursor(cursorDot, cursorOutline);
        const hash = (window.location.hash || '').replace(/^#/, '');
        if (hash) nextTick(() => handleNavClick(hash));
      });
      return { profile, cursorDot, cursorOutline, focusedProject, cursorHover, cursorLeave, maxProjectRows, getProjectByRow, openProject, scrollToTop, handleNavClick };
    }
  }).mount('#app');

  window.mountPortfolioProject = (projectId) => createApp({
    setup() {
      const profile = ref(window.portfolioData);
      const cursorDot = ref(null);
      const cursorOutline = ref(null);
      const currentProject = computed(() => profile.value.projects.find((project) => project.id === projectId));
      const setView = () => { window.location.href = '../../index.html#projects'; };
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
