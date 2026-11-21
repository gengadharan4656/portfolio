/**
 * Space Background Engine
 * High-performance, canvas-based continuous celestial environment
 * Theme-aware (Deep Space in Dark Mode, Daylight Observatory in Light Mode)
 * Features:
 * - Multi-layered parallax starfield with twinkle
 * - Distant nebula glow & deep space dust
 * - Orbit rings with subtle orbital movement
 * - Constellation line connections
 * - Interactive mouse parallax & subtle shooting stars
 * - Automatically pauses when window is blurred or prefers-reduced-motion is active
 */

(function initSpaceEngine() {
  const container = document.getElementById('space-background');
  if (!container) return;

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'space-canvas';
  container.innerHTML = '';
  container.appendChild(canvas);

  // Add subtle HUD overlay
  const gridOverlay = document.createElement('div');
  gridOverlay.className = 'space-observatory-grid';
  container.appendChild(gridOverlay);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  // Mouse parallax state
  let targetMouseX = 0;
  let targetMouseY = 0;
  let mouseX = 0;
  let mouseY = 0;
  let scrollY = 0;
  let targetScrollY = 0;

  // Stars state
  const STAR_COUNT = window.innerWidth < 768 ? 65 : 140;
  const stars = [];
  const shootingStars = [];

  // Orbit ring configs
  const orbits = [
    { radiusX: 320, radiusY: 140, angle: -0.3, speed: 0.0004, currentAngle: 0, dotSize: 3 },
    { radiusX: 580, radiusY: 260, angle: 0.45, speed: -0.00025, currentAngle: 2, dotSize: 3.5 }
  ];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);
    initStars();
  }

  function initStars() {
    stars.length = 0;
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height * 2, // extend beyond viewport for parallax
        radius: Math.random() * 1.5 + 0.5,
        baseAlpha: Math.random() * 0.7 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
        layer: Math.random() < 0.3 ? 3 : Math.random() < 0.6 ? 2 : 1, // parallax depth
        hue: Math.random() < 0.25 ? 180 : Math.random() < 0.4 ? 250 : 0 // cyan, purple, or crisp white
      });
    }
  }

  function spawnShootingStar() {
    if (Math.random() < 0.008 && shootingStars.length < 2) {
      shootingStars.push({
        x: Math.random() * width * 0.8 + width * 0.1,
        y: Math.random() * height * 0.5,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 7 + 9,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        alpha: 1,
        life: 1
      });
    }
  }

  // Smooth mouse tracker
  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX - width / 2) * 0.05;
    targetMouseY = (e.clientY - height / 2) * 0.05;
  }, { passive: true });

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
  }, { passive: true });

  window.addEventListener('resize', resize, { passive: true });

  let animationFrameId = null;
  let isRunning = true;

  // Page visibility check for battery/performance savings
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
    } else {
      isRunning = true;
      lastTime = performance.now();
      requestAnimationFrame(render);
    }
  });

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  let lastTime = performance.now();

  function render(time) {
    if (!isRunning) return;

    // Smooth lerp
    mouseX += (targetMouseX - mouseX) * 0.06;
    mouseY += (targetMouseY - mouseY) * 0.06;
    scrollY += (targetScrollY - scrollY) * 0.08;

    const isDark = document.body.classList.contains('dark');

    ctx.clearRect(0, 0, width, height);

    // 1. Distant ambient nebulae / soft cosmic lighting
    if (isDark) {
      // Midnight cosmic nebula top-left (electric cyan/blue)
      const g1 = ctx.createRadialGradient(
        width * 0.2 + mouseX * 0.5,
        height * 0.25 + mouseY * 0.5,
        20,
        width * 0.2,
        height * 0.25,
        width * 0.55
      );
      g1.addColorStop(0, 'rgba(45, 225, 209, 0.05)');
      g1.addColorStop(0.5, 'rgba(129, 116, 255, 0.035)');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Deep space nebula bottom-right (subtle indigo/violet + farm green hint)
      const g2 = ctx.createRadialGradient(
        width * 0.8 - mouseX * 0.4,
        height * 0.7 - mouseY * 0.4,
        40,
        width * 0.8,
        height * 0.7,
        width * 0.6
      );
      g2.addColorStop(0, 'rgba(129, 116, 255, 0.055)');
      g2.addColorStop(0.6, 'rgba(34, 197, 94, 0.025)');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);
    } else {
      // LIGHT MODE: Subtle cool daylight observatory nebula (soft sky-blue & cool lavender wash)
      // Must NOT be a dark patch — very subtle light cool hue
      const gLight1 = ctx.createRadialGradient(
        width * 0.25 + mouseX * 0.3,
        height * 0.2 + mouseY * 0.3,
        30,
        width * 0.25,
        height * 0.2,
        width * 0.5
      );
      gLight1.addColorStop(0, 'rgba(4, 191, 196, 0.035)');
      gLight1.addColorStop(0.6, 'rgba(102, 87, 247, 0.025)');
      gLight1.addColorStop(1, 'transparent');
      ctx.fillStyle = gLight1;
      ctx.fillRect(0, 0, width, height);

      const gLight2 = ctx.createRadialGradient(
        width * 0.75 - mouseX * 0.3,
        height * 0.65 - mouseY * 0.3,
        30,
        width * 0.75,
        height * 0.65,
        width * 0.55
      );
      gLight2.addColorStop(0, 'rgba(102, 87, 247, 0.03)');
      gLight2.addColorStop(0.5, 'rgba(22, 163, 74, 0.018)');
      gLight2.addColorStop(1, 'transparent');
      ctx.fillStyle = gLight2;
      ctx.fillRect(0, 0, width, height);
    }

    // 2. Orbit lines with moving telemetry dots
    const orbitCenter = {
      x: width * 0.5 + mouseX * 0.3,
      y: height * 0.45 + mouseY * 0.3 - (scrollY * 0.05) % height
    };

    orbits.forEach((orb) => {
      if (!prefersReduced.matches) {
        orb.currentAngle += orb.speed;
      }
      ctx.save();
      ctx.translate(orbitCenter.x, orbitCenter.y);
      ctx.rotate(orb.angle);

      // Orbit ellipse line (dark navy/grey in light mode, faint lavender in dark mode)
      ctx.beginPath();
      ctx.ellipse(0, 0, orb.radiusX, orb.radiusY, 0, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(129, 116, 255, 0.07)' : 'rgba(30, 41, 69, 0.14)';
      ctx.setLineDash([4, 9]);
      ctx.lineWidth = 1;
      ctx.stroke();

      // Satellite/telemetry marker dot moving along orbit
      const dotX = Math.cos(orb.currentAngle) * orb.radiusX;
      const dotY = Math.sin(orb.currentAngle) * orb.radiusY;

      ctx.beginPath();
      ctx.arc(dotX, dotY, orb.dotSize, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#2de1d1' : '#0284c7';
      ctx.shadowColor = isDark ? '#2de1d1' : '#0284c7';
      ctx.shadowBlur = isDark ? 8 : 4;
      ctx.fill();

      // Satellite ping halo
      ctx.beginPath();
      ctx.arc(dotX, dotY, orb.dotSize * 2.4, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(45, 225, 209, 0.25)' : 'rgba(2, 132, 199, 0.28)';
      ctx.setLineDash([]);
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    });

    // 3. Constellation lines between nearby stars (sparingly for elegance)
    const maxDist = 85;
    ctx.lineWidth = 0.6;
    for (let i = 0; i < stars.length; i += 3) {
      for (let j = i + 1; j < Math.min(i + 4, stars.length); j++) {
        const s1 = stars[i];
        const s2 = stars[j];
        if (s1.layer !== s2.layer) continue;

        const y1 = (s1.y - scrollY * (0.04 * s1.layer)) % height;
        const y2 = (s2.y - scrollY * (0.04 * s2.layer)) % height;
        const normY1 = y1 < 0 ? y1 + height : y1;
        const normY2 = y2 < 0 ? y2 + height : y2;

        const dx = (s1.x + mouseX * s1.layer) - (s2.x + mouseX * s2.layer);
        const dy = normY1 - normY2;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDist) {
          const lineAlpha = (1 - dist / maxDist) * (isDark ? 0.12 : 0.10);
          ctx.strokeStyle = isDark ? `rgba(129, 116, 255, ${lineAlpha})` : `rgba(30, 41, 69, ${lineAlpha})`;
          ctx.beginPath();
          ctx.moveTo(s1.x + mouseX * s1.layer, normY1);
          ctx.lineTo(s2.x + mouseX * s2.layer, normY2);
          ctx.stroke();
        }
      }
    }

    // 4. Render Stars with parallax and twinkle
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const twinkle = Math.sin(time * s.twinkleSpeed + s.twinkleOffset);
      const alpha = Math.max(0.12, s.baseAlpha + twinkle * 0.28);

      // Parallax scroll position
      const scrollOffset = scrollY * (0.03 * s.layer);
      let starY = (s.y - scrollOffset) % (height * 1.5);
      if (starY < 0) starY += height * 1.5;

      // Mouse parallax shift
      const starX = s.x + mouseX * (0.4 * s.layer);

      ctx.beginPath();
      ctx.arc(starX, starY, s.radius, 0, Math.PI * 2);

      if (isDark) {
        // DARK MODE: Bright sparkling stars
        if (s.hue === 180) {
          ctx.fillStyle = `rgba(45, 225, 209, ${alpha})`;
        } else if (s.hue === 250) {
          ctx.fillStyle = `rgba(180, 170, 255, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        }

        if (s.radius > 1.4) {
          ctx.shadowColor = s.hue === 180 ? '#2de1d1' : '#8174ff';
          ctx.shadowBlur = 5;
        } else {
          ctx.shadowBlur = 0;
        }
      } else {
        // LIGHT MODE: Dark stars and particles (dark navy, charcoal, with subtle teal/indigo accents)
        // Clearly visible on white/light background, perfectly elegant
        if (s.hue === 180) {
          // Subtle deep teal/cyan particle
          ctx.fillStyle = `rgba(14, 116, 144, ${Math.min(1, alpha + 0.15)})`;
        } else if (s.hue === 250) {
          // Subtle deep indigo/violet particle
          ctx.fillStyle = `rgba(67, 56, 202, ${Math.min(1, alpha + 0.15)})`;
        } else {
          // Dark charcoal/navy stars
          ctx.fillStyle = `rgba(30, 41, 69, ${Math.min(1, alpha + 0.2)})`;
        }
        ctx.shadowBlur = 0;
      }

      ctx.fill();
    }
    ctx.shadowBlur = 0;

    // 5. Shooting stars
    if (!prefersReduced.matches) {
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.alpha -= 0.016;

        if (ss.alpha <= 0 || ss.x > width || ss.y > height) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(1, isDark ? `rgba(45, 225, 209, ${ss.alpha})` : `rgba(2, 132, 199, ${ss.alpha * 0.75})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }
    }

    lastTime = time;
    animationFrameId = requestAnimationFrame(render);
  }

  // Initialize
  resize();
  animationFrameId = requestAnimationFrame(render);
})();
