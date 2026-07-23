(() => {
class PokerInteractiveSystem {
    constructor() {
        this.canvas = document.getElementById('pkrCanvas');
        this.section = document.getElementById('pkrSection');
        if (!this.canvas || !this.section) return;
        this.cards = [];
        this.selectedCards = [];
        this.assets = {
            numbers: [
                "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491898/%E6%96%B9%E5%9D%971_ocm2iz.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491901/%E6%96%B9%E5%9D%972_ubw80p.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491902/%E6%96%B9%E5%9D%973_wuby0k.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491897/%E6%96%B9%E5%9D%974_chresf.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491897/%E6%96%B9%E5%9D%975_tgnc1z.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491897/%E6%96%B9%E5%9D%976_cxxazk.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491897/%E6%96%B9%E5%9D%977_ur7rnt.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491929/%E6%96%B9%E5%9D%978_loa5gg.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491929/%E6%96%B9%E5%9D%979_dkokhh.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491904/%E6%96%B9%E5%9D%9710_seibqy.png",
                "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491911/%E6%A2%85%E8%8A%B11_nucsjm.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491914/%E6%A2%85%E8%8A%B12_vx49fu.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491914/%E6%A2%85%E8%8A%B13_v1krwd.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491925/%E6%A2%85%E8%8A%B14_yayhst.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491925/%E6%A2%85%E8%8A%B15_s3dksg.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491920/%E6%A2%85%E8%8A%B16_wcjnaa.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491918/%E6%A2%85%E8%8A%B17_ei48fr.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491903/%E6%A2%85%E8%8A%B18_vvi9qp.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491904/%E6%A2%85%E8%8A%B19_zp5mq9.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491903/%E6%A2%85%E8%8A%B110_b4iecz.png",
                "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491925/%E7%BA%A2%E6%A1%831_jomolw.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491918/%E7%BA%A2%E6%A1%832_knektf.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491919/%E7%BA%A2%E6%A1%833_kd6moy.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491905/%E7%BA%A2%E6%A1%834_%E7%94%BB%E6%9D%BF_1_%E5%89%AF%E6%9C%AC_30_jt09c0.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491913/%E7%BA%A2%E6%A1%835_hcaxkn.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491917/%E7%BA%A2%E6%A1%836_nqivv8.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491913/%E7%BA%A2%E6%A1%837_khe1nh.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491908/%E7%BA%A2%E6%A1%838_geiomi.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491909/%E7%BA%A2%E6%A1%839_bmvjwi.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491902/%E7%BA%A2%E6%A1%8310_mumfoc.png",
                "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491906/%E9%BB%91%E6%A1%831_nsd85n.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491904/%E9%BB%91%E6%A1%832_vujit5.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491903/%E9%BB%91%E6%A1%833_nwm9qg.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491907/%E9%BB%91%E6%A1%834_bfyput.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491907/%E9%BB%91%E6%A1%835_wsz69a.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491907/%E9%BB%91%E6%A1%836_w7fym9.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491909/%E9%BB%91%E6%A1%837_drtes2.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491917/%E9%BB%91%E6%A1%838_ovmp2l.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491913/%E9%BB%91%E6%A1%839_hxmxar.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491897/%E9%BB%91%E6%A1%8310_frnnad.png"
            ],
            jqk: [
                "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491918/%E6%96%B9%E5%9D%97J%E9%98%BF%E5%96%9C_asqa5e.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491918/%E6%96%B9%E5%9D%97Q%E9%98%BF%E5%96%9C_ednyxx.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491930/%E6%96%B9%E5%9D%97K%E9%98%BF%E5%96%9C_ntv6h1.png",
                "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491913/%E6%A2%85%E8%8A%B1J%E9%98%BF%E7%A6%8F_aiwitf.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491913/%E6%A2%85%E8%8A%B1Q%E9%98%BF%E7%A6%8F_wl7nxo.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491928/%E6%A2%85%E8%8A%B1K%E9%98%BF%E7%A6%8F_yqtsua.png",
                "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491908/%E7%BA%A2%E6%A1%83J%E9%A6%8B%E7%8C%AB_ogbtue.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491910/%E7%BA%A2%E6%A1%83Q%E9%A6%8B%E7%8C%AB_u7jasg.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491898/%E7%BA%A2%E6%A1%83K%E9%A6%8B%E7%8C%AB_hpbdfk.png",
                "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491912/%E9%BB%91%E6%A1%83J%E9%9D%92%E9%A5%95%E5%85%BD_wfrl7o.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491898/%E9%BB%91%E6%A1%83Q%E9%9D%92%E9%A5%95%E5%85%BD_a5j3kc.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491897/%E9%BB%91%E6%A1%83K%E9%9D%92%E9%A5%95%E5%85%BD_nnij3a.png"
            ],
            jokers: [
                "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491925/%E5%B0%8F%E7%8E%8B_gfdl0t.png", "https://res.cloudinary.com/dhonki8qe/image/upload/v1772491925/%E5%B0%8F%E5%A4%A7%E7%8E%8B_qqvc3c.png"
            ]
        };
        this.init();
    }

    init() { this.createCards(); this.setupGSAP(); }

    createCards() {
        const layout = [{ key: 'numbers', range: [0, 20], row: 0 }, { key: 'numbers', range: [20, 40], row: 1 }, { key: 'jqk', range: [0, 12], row: 2 }, { key: 'jokers', range: [0, 2], row: 3 }];
        layout.forEach(config => {
            const subset = this.assets[config.key].slice(config.range[0], config.range[1]);
            subset.forEach((url, i) => {
                const wrapper = document.createElement('div');
                wrapper.className = 'pkr-card-wrapper';
                const inner = document.createElement('div');
                inner.className = 'pkr-card-inner';
                inner.style.backgroundImage = `url('${url}')`;
                wrapper.appendChild(inner);
                const initRot = (Math.random() - 0.5) * 15;
                const initX = (Math.random() - 0.5) * 8;
                const initY = (Math.random() - 0.5) * 8;
                gsap.set(wrapper, { x: initX, y: initY, rotation: initRot, zIndex: i + config.row * 20 });
                this.canvas.appendChild(wrapper);
                const cardObj = { wrapper, inner, row: config.row, index: i, total: subset.length, initRot, initX, initY, isSelected: false };
                wrapper.onclick = () => this.handleCardClick(cardObj);
                this.cards.push(cardObj);
            });
        });
    }

    handleCardClick(card) {
        if (card.isSelected) {
            card.isSelected = false;
            card.wrapper.classList.remove('is-selected');
            this.selectedCards = this.selectedCards.filter(c => c !== card);
            gsap.to(card.inner, { x: 0, y: 0, scale: 1, rotation: 0, duration: 0.6, ease: "power2.inOut" });
            gsap.set(card.wrapper, { zIndex: card.index + card.row * 20 });
        } else {
            card.isSelected = true;
            card.wrapper.classList.add('is-selected');
            this.selectedCards.push(card);
            this.updateSelectedLayout();
        }
    }

    updateSelectedLayout() {
        this.selectedCards.forEach((card, i) => {
            let targetX = 0, targetY = 0;
            if (this.selectedCards.length === 1) targetX = 0;
            else if (this.selectedCards.length === 2) targetX = i === 0 ? -18 : 18;
            else if (this.selectedCards.length === 3) { const offsets = [-30, 0, 30]; targetX = offsets[i]; }
            else { const lastIndex = this.selectedCards.length - 1; targetX = (i - lastIndex) * 3; targetY = (i - lastIndex) * 2; }
            gsap.set(card.wrapper, { zIndex: 2000 + i });
            gsap.to(card.inner, { x: `${targetX}vw`, y: `${targetY}vh`, scale: 1.4, rotation: 0, duration: 0.8, ease: "expo.out" });
        });
    }

    setupGSAP() {
        const tl = gsap.timeline({ scrollTrigger: { trigger: this.section, start: "top top", end: "+=2600", pin: true, scrub: 1.2, anticipatePin: 1 } });
        this.cards.forEach(card => {
            const rowY = [-32, -10, 12, 34];
            let spread = card.row === 0 ? 115 : (card.row === 1 ? 95 : 85);
            if (card.row === 3) spread = 35;
            const targetX = ((card.index / (card.total - 1)) - 0.5) * spread;
            const targetRot = ((card.index / (card.total - 1)) - 0.5) * (card.total * 2.5);
            tl.to(card.wrapper, { x: `${targetX}vw`, y: `${rowY[card.row]}vh`, rotation: targetRot, duration: 1, ease: "none" }, 0);
        });
        tl.to(".pkr-card-wrapper", { x: (i) => this.cards[i].initX, y: (i) => this.cards[i].initY, rotation: (i) => this.cards[i].initRot, duration: 1, ease: "power2.inOut" }, 1.5);
        tl.to({}, { duration: 0.8 });
    }
}


  function initBeicangmen() {
    const section = document.getElementById('bc-parallax-section');
    const image = document.getElementById('bc-parallax-img');
    if (!section || !image) return;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      if (rect.top < viewHeight && rect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, (viewHeight - rect.top) / (viewHeight + rect.height)));
        const available = section.offsetWidth - parseFloat(window.getComputedStyle(section).paddingLeft);
        const maxTranslate = image.offsetWidth - available;
        if (maxTranslate > 0) image.style.transform = `translateX(${-maxTranslate * progress}px)`;
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  function initStarRetrocession() {
    const container = document.getElementById('logoContainer');
    const logo = document.getElementById('shakingLogo');
    const video = document.getElementById('p9Video');
    if (!container || !logo || !video) return;
    container.addEventListener('mousemove', (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      logo.style.transform = `translate(${x * 60}px, ${y * 60}px)`;
      video.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    });
  }

  window.initProjectInteractions = (id) => {
    if (id === 'full-luck') new PokerInteractiveSystem();
    if (id === 'beicangmen') initBeicangmen();
    if (id === 'star-retro') initStarRetrocession();
  };
})();
