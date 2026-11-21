/**
 * Space Background Engine — High-Performance Realistic Celestial Environment
 * Theme-aware (Deep Interstellar Space in Dark Mode, Daylight Observatory in Light Mode)
 * Features:
 * - Multi-tiered logarithmic star distribution (deep cosmic dust, stellar bodies, luminous foreground stars)
 * - Subtle organic nebulae with deep violet, teal, and electric cyan gradients
 * - Gentle inertia-damped mouse parallax and scroll-depth simulation
 * - Orbit telemetry paths with micro orbital markers
 * - Subtle shooting stars with gentle trailing luminescence
 * - Performance throttling: Pauses on tab blur / off-screen, respects prefers-reduced-motion
 */

(function initSpaceEngine() {
  const container = document.getElementById('space-background');
  if (!container) return;

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'space-canvas';
  container.innerHTML = '';
  container.appendChild(canvas);

  // Subtle observatory grid overlay
  const gridOverlay = document.createElement('div');
  gridOverlay.className = 'space-observatory-grid';
  container.appendChild(gridOverlay);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  // Parallax physics state
  let targetMouseX = 0;
  let targetMouseY = 0;
  let mouseX = 0;
  let mouseY = 0;
  let scrollY = 0;
  let targetScrollY = 0;

  // Stars and particle tiers
  const stars = [];
  const cosmicDust = [];
  const shootingStars = [];

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Orbit ring telemetry
  const orbits = [
    { radiusX: 380, radiusY: 160, angle: -0.28, speed: 0.00035, currentAngle: 0.5, dotSize: 2.8 },
    { radiusX: 680, radiusY: 290, angle: 0.42, speed: -0.0002, currentAngle: 3.1, dotSize: 3.2 }
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
    initStarfield();
  }

  function initStarfield() {
    stars.length = 0;
    cosmicDust.length = 0;

    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 80 : 160;
    const dustCount = isMobile ? 40 : 90;

    // 1. Deep cosmic dust particles (far background, slow drift)
    for (let i = 0; i < dustCount; i++) {
      cosmicDust.push({
        x: Math.random() * width,
        y: Math.random() * height * 2,
        radius: Math.random() * 0.8 + 0.3,
        alpha: Math.random() * 0.35 + 0.1,
        layer: 0.5
      });
    }

    // 2. Multi-tier stars
    for (let i = 0; i < starCount; i++) {
      const rand = Math.random();
      let layer = 1;
      let radius = Math.random() * 0.9 + 0.5;
      let baseAlpha = Math.random() * 0.5 + 0.3;

      // 15% bright foreground stars with subtle halos
      if (rand < 0.15) {
        layer = 3;
        radius = Math.random() * 0.8 + 1.4;
        baseAlpha = Math.random() * 0.3 + 0.65;
      } else if (rand < 0.55) {
        layer = 2;
        radius = Math.random() * 0.7 + 0.9;
        baseAlpha = Math.random() * 0.4 + 0.4;
      }

      // Color classification (cool white, cyan/ice blue, warm lavender)
      let hue = 0;
      const hueRand = Math.random();
      if (hueRand < 0.28) hue = 180; // Electric cyan
      else if (hueRand < 0.52) hue = 250; // Deep lavender / violet
      else hue = 0; // Diamond white

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height * 2,
        radius,
        baseAlpha,
        twinkleSpeed: Math.random() * 0.018 + 0.007,
        twinkleOffset: Math.random() * Math.PI * 2,
        layer,
        hue
      });
    }
  }

  function spawnShootingStar() {
    if (Math.random() < 0.007 && shootingStars.length < 2) {
      shootingStars.push({
        x: Math.random() * width * 0.85 + width * 0.05,
        y: Math.random() * height * 0.45,
        length: Math.random() * 70 + 45,
        speed: Math.random() * 6 + 8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.18,
        alpha: 1,
        life: 1
      });
    }
  }

  // Smooth mouse input
  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX - width / 2) * 0.04;
    targetMouseY = (e.clientY - height / 2) * 0.04;
  }, { passive: true });

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
  }, { passive: true });

  window.addEventListener('resize', resize, { passive: true });

  let isRunning = true;

  // Visibility and throttling
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isRunning = false;
    } else {
      isRunning = true;
      requestAnimationFrame(render);
    }
  });

  function render(time) {
    if (!isRunning) return;

    // Inertial lerp
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;
    scrollY += (targetScrollY - scrollY) * 0.08;

    const isDark = document.body.classList.contains('dark');
    ctx.clearRect(0, 0, width, height);

    // 1. Organic Interstellar Nebulae
    if (isDark) {
      // Cosmic Cyan/Teal Nebula (Top Left)
      const g1 = ctx.createRadialGradient(
        width * 0.22 + mouseX * 0.4,
        height * 0.22 + mouseY * 0.4,
        30,
        width * 0.22,
        height * 0.22,
        width * 0.55
      );
      g1.addColorStop(0, 'rgba(45, 225, 209, 0.06)');
      g1.addColorStop(0.45, 'rgba(129, 116, 255, 0.035)');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Deep Violet / Indigo Nebula (Bottom Right)
      const g2 = ctx.createRadialGradient(
        width * 0.82 - mouseX * 0.35,
        height * 0.72 - mouseY * 0.35,
        40,
        width * 0.82,
        height * 0.72,
        width * 0.6
      );
      g2.addColorStop(0, 'rgba(129, 116, 255, 0.065)');
      g2.addColorStop(0.55, 'rgba(34, 197, 94, 0.02)');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);
    } else {
      // Light Mode: Daylight Atmospheric Gradients
      const gLight = ctx.createRadialGradient(
        width * 0.3 + mouseX * 0.2,
        height * 0.25 + mouseY * 0.2,
        30,
        width * 0.3,
        height * 0.25,
        width * 0.5
      );
      gLight.addColorStop(0, 'rgba(99, 102, 241, 0.035)');
      gLight.addColorStop(0.6, 'rgba(2, 132, 199, 0.02)');
      gLight.addColorStop(1, 'transparent');
      ctx.fillStyle = gLight;
      ctx.fillRect(0, 0, width, height);
    }

    // 2. Cosmic Background Dust
    for (let i = 0; i < cosmicDust.length; i++) {
      const d = cosmicDust[i];
      const scrollOffset = scrollY * (0.015 * d.layer);
      let dustY = (d.y - scrollOffset) % (height * 1.5);
      if (dustY < 0) dustY += height * 1.5;
      const dustX = d.x + mouseX * (0.15 * d.layer);

      ctx.beginPath();
      ctx.arc(dustX, dustY, d.radius, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? `rgba(200, 215, 255, ${d.alpha})` : `rgba(40, 50, 75, ${d.alpha * 0.6})`;
      ctx.fill();
    }

    // 3. Orbit Telemetry Paths
    const orbitCenter = {
      x: width * 0.5 + mouseX * 0.25,
      y: height * 0.42 + mouseY * 0.25 - (scrollY * 0.04) % height
    };

    orbits.forEach((orb) => {
      if (!prefersReduced.matches) {
        orb.currentAngle += orb.speed;
      }
      ctx.save();
      ctx.translate(orbitCenter.x, orbitCenter.y);
      ctx.rotate(orb.angle);

      ctx.beginPath();
      ctx.ellipse(0, 0, orb.radiusX, orb.radiusY, 0, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(129, 116, 255, 0.08)' : 'rgba(30, 41, 69, 0.12)';
      ctx.setLineDash([4, 10]);
      ctx.lineWidth = 1;
      ctx.stroke();

      const dotX = Math.cos(orb.currentAngle) * orb.radiusX;
      const dotY = Math.sin(orb.currentAngle) * orb.radiusY;

      ctx.beginPath();
      ctx.arc(dotX, dotY, orb.dotSize, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? '#2de1d1' : '#0284c7';
      ctx.shadowColor = isDark ? '#2de1d1' : '#0284c7';
      ctx.shadowBlur = isDark ? 7 : 3;
      ctx.fill();

      // Satellite pulse ring
      ctx.beginPath();
      ctx.arc(dotX, dotY, orb.dotSize * 2.2, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(45, 225, 209, 0.22)' : 'rgba(2, 132, 199, 0.25)';
      ctx.setLineDash([]);
      ctx.lineWidth = 0.7;
      ctx.stroke();

      ctx.restore();
    });

    // 4. Starfield with Parallax & Sparkle
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const twinkle = Math.sin(time * s.twinkleSpeed + s.twinkleOffset);
      const alpha = Math.max(0.15, s.baseAlpha + twinkle * 0.26);

      const scrollOffset = scrollY * (0.025 * s.layer);
      let starY = (s.y - scrollOffset) % (height * 1.5);
      if (starY < 0) starY += height * 1.5;

      const starX = s.x + mouseX * (0.35 * s.layer);

      ctx.beginPath();
      ctx.arc(starX, starY, s.radius, 0, Math.PI * 2);

      if (isDark) {
        if (s.hue === 180) {
          ctx.fillStyle = `rgba(45, 225, 209, ${alpha})`;
        } else if (s.hue === 250) {
          ctx.fillStyle = `rgba(180, 170, 255, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        }

        if (s.radius > 1.4) {
          ctx.shadowColor = s.hue === 180 ? '#2de1d1' : '#8174ff';
          ctx.shadowBlur = 6;
          // Subtle cross flare for bright foreground stars
          if (s.layer === 3 && s.radius > 1.8) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(starX - s.radius * 2.5, starY);
            ctx.lineTo(starX + s.radius * 2.5, starY);
            ctx.moveTo(starX, starY - s.radius * 2.5);
            ctx.lineTo(starX, starY + s.radius * 2.5);
            ctx.stroke();
          }
        } else {
          ctx.shadowBlur = 0;
        }
      } else {
        // Light mode
        if (s.hue === 180) {
          ctx.fillStyle = `rgba(14, 116, 144, ${Math.min(1, alpha + 0.2)})`;
        } else if (s.hue === 250) {
          ctx.fillStyle = `rgba(67, 56, 202, ${Math.min(1, alpha + 0.2)})`;
        } else {
          ctx.fillStyle = `rgba(30, 41, 69, ${Math.min(1, alpha + 0.25)})`;
        }
        ctx.shadowBlur = 0;
      }
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    // 5. Shooting Stars
    if (!prefersReduced.matches) {
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.alpha -= 0.015;

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

    requestAnimationFrame(render);
  }

  resize();
  requestAnimationFrame(render);
})();
