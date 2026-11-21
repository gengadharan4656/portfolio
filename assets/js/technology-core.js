/**
 * Technology Core — TRUE 3D Exploded View
 * Futuristic exploded developer stack using Three.js & WebGL
 * Camera at angular perspective, layers with XZ spread, staggered scroll explosion
 */

(function initTechnologyCore() {
  'use strict';

  const container = document.getElementById('tech-core-viewport');
  const canvas    = document.getElementById('tech-core-canvas');
  const fallback  = document.getElementById('tech-core-fallback');
  const explodeBtn= document.getElementById('tech-explode-btn');
  const hudTag    = document.getElementById('hud-layer-tag');
  const hudName   = document.getElementById('hud-layer-name');
  const hudPills  = document.getElementById('hud-tech-pills');
  const hudDesc   = document.getElementById('hud-layer-desc');
  const statusEl  = document.getElementById('tech-core-status');

  if (!container || !canvas) return;

  function isWebGLAvailable() {
    try {
      const testCanvas = document.createElement('canvas');
      return Boolean(
        window.WebGL2RenderingContext && testCanvas.getContext('webgl2')
      ) || Boolean(
        window.WebGLRenderingContext && (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl'))
      );
    } catch (e) { return false; }
  }

  const webglSupported = isWebGLAvailable();

  if (typeof THREE === 'undefined' || !webglSupported) {
    if (fallback) {
      fallback.hidden = false;
      fallback.style.display = 'flex';
    }
    canvas.style.display = 'none';
    if (statusEl) statusEl.textContent = '6 Layers · Static View';
    return;
  }

  // WebGL is confirmed working: hide fallback and ensure canvas is visible
  if (fallback) {
    fallback.hidden = true;
    fallback.style.display = 'none';
  }
  canvas.style.display = 'block';

  // ─── Layer Definitions ────────────────────────────────────────────────────
  const LAYERS = [
    {
      id: 'foundation', index: '01',
      tag: 'LAYER 01 // FOUNDATION',
      name: 'Systems & DevOps',
      color: 0x94a3b8, accentHex: '#94a3b8',
      tech: ['Git', 'GitHub', 'Linux', 'CI/CD'],
      desc: 'Deterministic version control, production build workflows, and disciplined release hygiene.',
      // Y positions: baseY (assembled), explodeY (separated)
      baseY: -0.60, explodeY: -2.8,
      // XZ offset so layers appear at different depths — key to 3D feel
      baseX: 0.0,   baseZ: 0.0,
    },
    {
      id: 'cloud', index: '02',
      tag: 'LAYER 02 // CLOUD',
      name: 'Cloud & Infrastructure',
      color: 0x38bdf8, accentHex: '#38bdf8',
      tech: ['AWS', 'Firebase', 'Docker', 'Railway'],
      desc: 'Containerised deployment, serverless APIs, reliable cloud hosting and domain management.',
      baseY: -0.36, explodeY: -1.72,
      baseX: 0.0,   baseZ: 0.0,
    },
    {
      id: 'data', index: '03',
      tag: 'LAYER 03 // DATA',
      name: 'Data & Persistence',
      color: 0xfbbf24, accentHex: '#fbbf24',
      tech: ['PostgreSQL', 'SQLAlchemy', 'MySQL'],
      desc: 'Normalised schema modelling, robust ORM query optimisation, structured relational persistence.',
      baseY: -0.12, explodeY: -0.72,
      baseX: 0.0,   baseZ: 0.0,
    },
    {
      id: 'backend', index: '04',
      tag: 'LAYER 04 // ENGINE',
      name: 'Backend Engine',
      color: 0x4ade80, accentHex: '#4ade80',
      tech: ['Python', 'FastAPI', 'Flask', 'REST'],
      desc: 'High-throughput async endpoints, resilient RESTful API architecture, microservice integration.',
      baseY: 0.12, explodeY: 0.62,
      baseX: 0.0,   baseZ: 0.0,
    },
    {
      id: 'application', index: '05',
      tag: 'LAYER 05 // CLIENT',
      name: 'Application Deck',
      color: 0x8174ff, accentHex: '#8174ff',
      tech: ['Flutter', 'Dart', 'HTML5', 'CSS3', 'JS'],
      desc: 'Fluid responsive UI, offline-first mobile apps, clean state management and accessible interfaces.',
      baseY: 0.36, explodeY: 1.62,
      baseX: 0.0,   baseZ: 0.0,
    },
    {
      id: 'intelligence', index: '06',
      tag: 'LAYER 06 // APEX',
      name: 'AI & Intelligence',
      color: 0x2de1d1, accentHex: '#2de1d1',
      tech: ['OpenHands AI', 'Real-ESRGAN', 'LLMs'],
      desc: 'Autonomous coding agents, deep learning image upscaling, multilingual conversational copilots.',
      baseY: 0.60, explodeY: 2.72,
      baseX: 0.0,   baseZ: 0.0,
    },
  ];

  // Stagger thresholds: each layer starts exploding at a different scroll progress
  const LAYER_THRESHOLDS = [0.08, 0.20, 0.32, 0.44, 0.56, 0.68];

  // ─── Three.js Core ────────────────────────────────────────────────────────
  let renderer, scene, camera;
  let layerGroups = [];
  let centralBeam, particleField;
  let ambientLight, dirLight, accentLightA, accentLightB;

  const isMobile = () => window.innerWidth <= 768;
  let width  = container.clientWidth  || 340;
  let height = container.clientHeight || 400;

  // Per-layer explosion progress (0=assembled, 1=fully exploded)
  const layerExplosion = [0, 0, 0, 0, 0, 0];
  let globalScrollProgress = 0;   // 0–1 from scroll

  // Manual override: user pressed the explode button
  let manuallyExploded   = false;
  let manualTargetExplosion = 0;  // 0=assembled, 1=exploded (for button)

  // Rotation
  let isPointerDown     = false;
  let prevPointerX      = 0;
  let prevPointerY      = 0;
  let targetRotY        = -0.35;
  let currentRotY       = -0.35;
  let targetRotX        = 0.28;
  let currentRotX       = 0.28;
  const AUTO_ROT_SPEED  = 0.0028;

  // Selection
  let selectedLayer = 5;

  const raycaster = new THREE.Raycaster();
  const pointer   = new THREE.Vector2(-999, -999);
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ─── Init ─────────────────────────────────────────────────────────────────
  function init() {
    scene = new THREE.Scene();

    // Angular perspective camera — shows genuine XYZ depth
    const fov = isMobile() ? 58 : 52;
    camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 200);
    // Position: slightly right, above, in front → real 3D angle
    camera.position.set(isMobile() ? 1.2 : 2.2, isMobile() ? 3.0 : 3.6, isMobile() ? 9.0 : 8.2);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = false;

    setupLighting();
    buildLayers();
    buildCentralBeam();
    buildParticles();
    updateTheme(document.body.classList.contains('dark'));
    selectLayer(5);
    setupEvents();
    startRenderLoop();
  }

  // ─── Lighting ─────────────────────────────────────────────────────────────
  function setupLighting() {
    ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    dirLight = new THREE.DirectionalLight(0xffffff, 1.6);
    dirLight.position.set(6, 10, 7);
    scene.add(dirLight);

    // Blue-purple left accent
    accentLightA = new THREE.PointLight(0x8174ff, 2.2, 14);
    accentLightA.position.set(-5, -2, 4);
    scene.add(accentLightA);

    // Teal right accent
    accentLightB = new THREE.PointLight(0x2de1d1, 2.4, 14);
    accentLightB.position.set(5, 3, 3);
    scene.add(accentLightB);
  }

  // ─── Layer Geometry ───────────────────────────────────────────────────────
  function buildLayers() {
    const dark = document.body.classList.contains('dark');
    const metal = dark ? 0x0e1628 : 0x172033;

    LAYERS.forEach((data, idx) => {
      const group = new THREE.Group();
      group.userData = { index: idx, data };

      const col  = data.color;
      const emit = data.color;

      let primaryMesh;

      switch (data.id) {

        case 'foundation': {
          // Wide octagonal base plate — broadest, heaviest
          const geo = new THREE.CylinderGeometry(1.72, 1.82, 0.18, 8);
          const mat = new THREE.MeshStandardMaterial({ color: metal, roughness: 0.3, metalness: 0.92 });
          primaryMesh = new THREE.Mesh(geo, mat);
          group.add(primaryMesh);

          // Perimeter highlight ring
          const ringG = new THREE.TorusGeometry(1.78, 0.03, 8, 8);
          const ringM = new THREE.MeshStandardMaterial({ color: col, emissive: emit, emissiveIntensity: 0.55, metalness: 0.5 });
          const ring  = new THREE.Mesh(ringG, ringM);
          ring.rotation.x = Math.PI / 2;
          group.add(ring);

          // 4 corner mounting brackets
          for (let i = 0; i < 4; i++) {
            const angle = (i * Math.PI) / 2 + Math.PI / 8;
            const bG = new THREE.BoxGeometry(0.2, 0.28, 0.2);
            const bM = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.95, roughness: 0.15 });
            const b  = new THREE.Mesh(bG, bM);
            b.position.set(Math.cos(angle) * 1.58, 0.06, Math.sin(angle) * 1.58);
            group.add(b);
          }

          // Alignment rail strips
          for (let i = 0; i < 2; i++) {
            const railG = new THREE.BoxGeometry(3.2, 0.04, 0.06);
            const railM = new THREE.MeshStandardMaterial({ color: col, emissive: emit, emissiveIntensity: 0.3 });
            const rail  = new THREE.Mesh(railG, railM);
            rail.position.set(0, 0.1, i === 0 ? 0.5 : -0.5);
            group.add(rail);
          }
          break;
        }

        case 'cloud': {
          // Open hexagonal ring manifold with 6 satellite nodes
          const geo = new THREE.CylinderGeometry(1.45, 1.5, 0.13, 6, 1, true);
          const mat = new THREE.MeshStandardMaterial({ color: metal, roughness: 0.28, metalness: 0.82, side: THREE.DoubleSide });
          primaryMesh = new THREE.Mesh(geo, mat);
          group.add(primaryMesh);

          // Outer torus ring
          const torusG = new THREE.TorusGeometry(1.5, 0.04, 10, 6);
          const torusM = new THREE.MeshStandardMaterial({ color: col, emissive: emit, emissiveIntensity: 0.6 });
          const torus  = new THREE.Mesh(torusG, torusM);
          torus.rotation.x = Math.PI / 2;
          group.add(torus);

          // 6 satellite cloud pods distributed around perimeter
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI * 2) / 6;
            const podG = new THREE.SphereGeometry(0.1, 10, 10);
            const podM = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, emissive: 0x0ea5e9, emissiveIntensity: 0.5 });
            const pod  = new THREE.Mesh(podG, podM);
            pod.position.set(Math.cos(angle) * 1.72, 0, Math.sin(angle) * 1.72);
            group.add(pod);
          }
          break;
        }

        case 'data': {
          // Concentric magnetic storage platters — like disk array
          const platterG = new THREE.CylinderGeometry(1.32, 1.32, 0.16, 32);
          const platterM = new THREE.MeshStandardMaterial({ color: metal, roughness: 0.15, metalness: 0.98 });
          primaryMesh    = new THREE.Mesh(platterG, platterM);
          group.add(primaryMesh);

          // Two concentric glowing sector rings
          [1.1, 0.72].forEach((radius, ri) => {
            const rG = new THREE.TorusGeometry(radius, 0.025, 8, 36);
            const rM = new THREE.MeshStandardMaterial({ color: col, emissive: emit, emissiveIntensity: ri === 0 ? 0.75 : 0.45 });
            const r  = new THREE.Mesh(rG, rM);
            r.rotation.x = Math.PI / 2;
            group.add(r);
          });

          // Radial read-arm fins
          for (let i = 0; i < 3; i++) {
            const angle = (i * Math.PI * 2) / 3 + 0.3;
            const finG = new THREE.BoxGeometry(0.9, 0.04, 0.08);
            const finM = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.85 });
            const fin  = new THREE.Mesh(finG, finM);
            fin.position.set(Math.cos(angle) * 0.5, 0.1, Math.sin(angle) * 0.5);
            fin.rotation.y = angle;
            group.add(fin);
          }
          break;
        }

        case 'backend': {
          // CPU-style rectangular substrate with heat-sink fins
          const geo = new THREE.BoxGeometry(2.8, 0.16, 2.2);
          const mat = new THREE.MeshStandardMaterial({ color: metal, roughness: 0.22, metalness: 0.9 });
          primaryMesh = new THREE.Mesh(geo, mat);
          group.add(primaryMesh);

          // Heat-sink fins along the top
          for (let i = 0; i < 7; i++) {
            const finG = new THREE.BoxGeometry(0.06, 0.22, 2.0);
            const finM = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.95, roughness: 0.12 });
            const fin  = new THREE.Mesh(finG, finM);
            fin.position.set(-0.9 + i * 0.3, 0.18, 0);
            group.add(fin);
          }

          // Two green CPU core pads
          [-0.55, 0.55].forEach(ox => {
            const cG = new THREE.BoxGeometry(0.62, 0.1, 0.62);
            const cM = new THREE.MeshStandardMaterial({ color: 0x14532d, emissive: 0x22c55e, emissiveIntensity: 0.5, metalness: 0.8 });
            const c  = new THREE.Mesh(cG, cM);
            c.position.set(ox, 0.14, 0);
            group.add(c);
          });

          // PCB edge highlight strips
          [[1.42, 0, 0, 0.04, 2.2], [-1.42, 0, 0, 0.04, 2.2]].forEach(([x,y,z,w,d]) => {
            const eG = new THREE.BoxGeometry(w, 0.18, d);
            const eM = new THREE.MeshStandardMaterial({ color: col, emissive: emit, emissiveIntensity: 0.4 });
            const e  = new THREE.Mesh(eG, eM);
            e.position.set(x, y, z);
            group.add(e);
          });
          break;
        }

        case 'application': {
          // Hexagonal glass panel with UI grid lines
          const geo = new THREE.CylinderGeometry(1.28, 1.3, 0.12, 6);
          const mat = new THREE.MeshStandardMaterial({ color: metal, roughness: 0.18, metalness: 0.78 });
          primaryMesh = new THREE.Mesh(geo, mat);
          group.add(primaryMesh);

          // Translucent glass top face
          const glassG = new THREE.CylinderGeometry(1.06, 1.06, 0.04, 6);
          const glassM = new THREE.MeshPhysicalMaterial({
            color: 0x8174ff, emissive: 0x4f46e5, emissiveIntensity: 0.4,
            transparent: true, opacity: 0.7,
            roughness: 0.06, metalness: 0.15,
          });
          const glass = new THREE.Mesh(glassG, glassM);
          glass.position.y = 0.08;
          group.add(glass);

          // Hexagonal outer edge glow ring
          const hexR = new THREE.TorusGeometry(1.3, 0.035, 6, 6);
          const hexM = new THREE.MeshStandardMaterial({ color: col, emissive: emit, emissiveIntensity: 0.65 });
          const hexMesh = new THREE.Mesh(hexR, hexM);
          hexMesh.rotation.x = Math.PI / 2;
          group.add(hexMesh);

          // Small UI nubs on glass
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI * 2) / 6;
            const nG = new THREE.BoxGeometry(0.1, 0.05, 0.04);
            const nM = new THREE.MeshStandardMaterial({ color: col, emissive: emit, emissiveIntensity: 0.8 });
            const n  = new THREE.Mesh(nG, nM);
            n.position.set(Math.cos(angle) * 0.68, 0.12, Math.sin(angle) * 0.68);
            n.rotation.y = angle;
            group.add(n);
          }
          break;
        }

        case 'intelligence': {
          // Crystalline icosahedral neural core inside a levitating ring manifold
          const ringG = new THREE.TorusGeometry(0.92, 0.055, 12, 36);
          const ringM = new THREE.MeshStandardMaterial({
            color: 0x155e75, emissive: emit, emissiveIntensity: 0.72,
            metalness: 0.7, roughness: 0.18,
          });
          const ring = new THREE.Mesh(ringG, ringM);
          ring.rotation.x = Math.PI / 2;
          group.add(ring);

          // Secondary tilted ring for depth
          const ring2G = new THREE.TorusGeometry(0.92, 0.025, 8, 36);
          const ring2M = new THREE.MeshStandardMaterial({ color: col, emissive: emit, emissiveIntensity: 0.5, transparent: true, opacity: 0.7 });
          const ring2  = new THREE.Mesh(ring2G, ring2M);
          ring2.rotation.x = Math.PI / 4;
          ring2.rotation.z = Math.PI / 6;
          group.add(ring2);

          // Icosahedral crystal core — the centrepiece
          const crystalG = new THREE.IcosahedronGeometry(0.42, 0);
          const crystalM = new THREE.MeshStandardMaterial({
            color: 0xffffff, emissive: emit, emissiveIntensity: 1.1,
            roughness: 0.1, metalness: 0.15,
          });
          primaryMesh = new THREE.Mesh(crystalG, crystalM);
          primaryMesh.name = 'apex-crystal';
          group.add(primaryMesh);

          // 4 orbiting micro-octahedra
          for (let i = 0; i < 4; i++) {
            const angle = (i * Math.PI) / 2 + Math.PI / 4;
            const oG = new THREE.OctahedronGeometry(0.09, 0);
            const oM = new THREE.MeshStandardMaterial({ color: col, emissive: emit, emissiveIntensity: 0.9 });
            const o  = new THREE.Mesh(oG, oM);
            o.position.set(Math.cos(angle) * 1.28, 0, Math.sin(angle) * 1.28);
            group.add(o);
          }
          break;
        }
      }

      // Add edge wireframe to the primary mesh for crisp technical look
      if (primaryMesh && primaryMesh.geometry) {
        const wG = new THREE.EdgesGeometry(primaryMesh.geometry);
        const wM = new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.72 });
        const w  = new THREE.LineSegments(wG, wM);
        primaryMesh.add(w);
      }

      // Assembled position — layers very close together (compact core)
      group.position.set(data.baseX, data.baseY, data.baseZ);
      scene.add(group);
      layerGroups.push(group);
    });
  }

  // ─── Central Energy Beam ──────────────────────────────────────────────────
  function buildCentralBeam() {
    const geo = new THREE.CylinderGeometry(0.055, 0.055, 6.5, 14);
    const mat = new THREE.MeshBasicMaterial({ color: 0x2de1d1, transparent: true, opacity: 0.6 });
    centralBeam = new THREE.Mesh(geo, mat);
    scene.add(centralBeam);
  }

  // ─── Floating Particle Field ──────────────────────────────────────────────
  function buildParticles() {
    const count = isMobile() ? 28 : 56;
    const geo   = new THREE.BufferGeometry();
    const pos   = new Float32Array(count * 3);
    const cols  = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r     = 1.6 + Math.random() * 2.0;
      const angle = Math.random() * Math.PI * 2;
      const y     = (Math.random() - 0.5) * 6.5;
      pos[i * 3]     = Math.cos(angle) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * r;
      // Alternating teal / purple
      if (i % 2 === 0) { cols[i*3]=0.18; cols[i*3+1]=0.88; cols[i*3+2]=0.82; }
      else              { cols[i*3]=0.51; cols[i*3+1]=0.45; cols[i*3+2]=1.00; }
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color',    new THREE.BufferAttribute(cols, 3));

    const mat = new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.6 });
    particleField = new THREE.Points(geo, mat);
    scene.add(particleField);
  }

  // ─── Layer Selection ──────────────────────────────────────────────────────
  function selectLayer(index) {
    if (index < 0 || index >= LAYERS.length) return;
    selectedLayer = index;
    const layer = LAYERS[index];

    if (hudTag)   hudTag.textContent   = layer.tag;
    if (hudName)  { hudName.textContent = layer.name; hudName.style.color = layer.accentHex; }
    if (hudPills) hudPills.innerHTML   = layer.tech.map(t => `<span>${t}</span>`).join('');
    if (hudDesc)  hudDesc.textContent  = layer.desc;

    layerGroups.forEach((grp, i) => {
      const sel = i === index;
      grp.scale.set(sel ? 1.07 : 1.0, sel ? 1.07 : 1.0, sel ? 1.07 : 1.0);
    });
  }

  // ─── Scroll-Driven Explosion ───────────────────────────────────────────────
  function computeScrollProgress() {
    const rect = container.getBoundingClientRect();
    const wH   = window.innerHeight;
    // 0 when section top is at bottom of viewport, 1 when section is well above center
    const raw  = 1 - Math.min(Math.max((rect.top - wH * 0.05) / (wH * 0.75), 0), 1);
    return raw;
  }

  function onScroll() {
    if (manuallyExploded) return;
    globalScrollProgress = computeScrollProgress();
  }

  // ─── Toggle Button ────────────────────────────────────────────────────────
  function toggleExploded() {
    manuallyExploded = true;
    manualTargetExplosion = manualTargetExplosion < 0.5 ? 1.0 : 0.0;

    const isExp = manualTargetExplosion > 0.5;
    if (explodeBtn) {
      explodeBtn.classList.toggle('active', isExp);
      const lbl = explodeBtn.querySelector('.ctrl-label');
      const ico = explodeBtn.querySelector('.ctrl-icon');
      if (lbl) lbl.textContent = isExp ? 'Assemble Core' : 'Explode View';
      if (ico) ico.textContent = isExp ? '⤡' : '⤢';
    }
    if (statusEl) statusEl.textContent = isExp ? 'Exploded Stack' : 'Unified Core';
  }

  // ─── Events ───────────────────────────────────────────────────────────────
  function setupEvents() {
    canvas.addEventListener('mousedown',  onPointerDown, { passive: true });
    window.addEventListener('mousemove',  onPointerMove, { passive: true });
    window.addEventListener('mouseup',    onPointerUp,   { passive: true });
    canvas.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove',  onPointerMove, { passive: true });
    window.addEventListener('touchend',   onPointerUp,   { passive: true });
    window.addEventListener('scroll',     onScroll,      { passive: true });

    explodeBtn?.addEventListener('click', (e) => { e.stopPropagation(); toggleExploded(); });

    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    const mo = new MutationObserver(() => updateTheme(document.body.classList.contains('dark')));
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  function onPointerDown(e) {
    isPointerDown = true;
    const c = e.touches ? e.touches[0] : e;
    prevPointerX = c.clientX;
    prevPointerY = c.clientY;
    // Also record normalised coords for click detection
    const rect = canvas.getBoundingClientRect();
    pointer.x =  ((c.clientX - rect.left) / rect.width)  * 2 - 1;
    pointer.y = -((c.clientY - rect.top)  / rect.height) * 2 + 1;
  }

  // Store pointer at mousedown for click detection
  let _downPointer = new THREE.Vector2();

  function onPointerMove(e) {
    const c = e.touches ? e.touches[0] : e;
    const rect = canvas.getBoundingClientRect();
    pointer.x =  ((c.clientX - rect.left) / rect.width)  * 2 - 1;
    pointer.y = -((c.clientY - rect.top)  / rect.height) * 2 + 1;

    if (isPointerDown) {
      const dx = c.clientX - prevPointerX;
      const dy = c.clientY - prevPointerY;
      prevPointerX = c.clientX;
      prevPointerY = c.clientY;
      targetRotY  += dx * 0.007;
      targetRotX  += dy * 0.005;
      targetRotX   = Math.max(-0.55, Math.min(0.75, targetRotX));
    } else {
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(layerGroups, true);
      canvas.style.cursor = hits.length > 0 ? 'pointer' : 'grab';
    }
  }

  function onPointerUp(e) {
    isPointerDown = false;
    const c = e.changedTouches ? e.changedTouches[0] : e;
    const rect = canvas.getBoundingClientRect();
    pointer.x =  ((c.clientX - rect.left) / rect.width)  * 2 - 1;
    pointer.y = -((c.clientY - rect.top)  / rect.height) * 2 + 1;
    hitTestLayer();
  }

  function hitTestLayer() {
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(layerGroups, true);
    if (!hits.length) return;
    let obj = hits[0].object;
    while (obj && obj !== scene) {
      if (obj.userData && typeof obj.userData.index === 'number') {
        selectLayer(obj.userData.index);
        return;
      }
      obj = obj.parent;
    }
  }

  function onResize() {
    width  = container.clientWidth  || 340;
    height = container.clientHeight || 400;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  // ─── Theme ────────────────────────────────────────────────────────────────
  function updateTheme(isDark) {
    if (!scene) return;
    if (isDark) {
      ambientLight.intensity = 0.82;
      dirLight.intensity     = 1.6;
    } else {
      ambientLight.intensity = 1.4;
      dirLight.intensity     = 2.0;
      dirLight.color.setHex(0xf1f5ff);
    }
  }

  // ─── Render Loop ──────────────────────────────────────────────────────────
  let isActive = true;
  const visObs = new IntersectionObserver(entries => {
    isActive = entries[0].isIntersecting;
  }, { threshold: 0.04 });
  visObs.observe(container);

  document.addEventListener('visibilitychange', () => { isActive = !document.hidden; });

  let lastT = performance.now();

  function startRenderLoop() {
    function animate(t) {
      requestAnimationFrame(animate);
      if (!isActive) return;

      const dt = Math.min((t - lastT) * 0.001, 0.05);
      lastT = t;

      // Auto-rotate unless interacting
      if (!isPointerDown && !prefersReduced.matches) {
        targetRotY += AUTO_ROT_SPEED;
      }

      // Smooth rotation damping
      currentRotY += (targetRotY - currentRotY) * 0.08;
      currentRotX += (targetRotX - currentRotX) * 0.08;

      // Determine per-layer target explosion
      LAYERS.forEach((data, idx) => {
        let target;
        if (manuallyExploded) {
          // Manual button toggle: target full 1.0 or 0.0 with staggered arrival
          target = manualTargetExplosion;
        } else {
          // Scroll: each layer has its own threshold before it starts moving
          const threshold = LAYER_THRESHOLDS[idx];
          const layerProg = Math.max(0, (globalScrollProgress - threshold) / (1 - threshold + 0.01));
          target = Math.min(1, layerProg);
        }
        // Staggered smooth lerp per layer
        const speed = manuallyExploded ? (0.05 + idx * 0.012) : 0.09;
        layerExplosion[idx] += (target - layerExplosion[idx]) * speed;
      });

      // Apply positions and rotation to each layer group
      layerGroups.forEach((grp, idx) => {
        const data   = LAYERS[idx];
        const exp    = layerExplosion[idx];
        const targetY = data.baseY + (data.explodeY - data.baseY) * exp;

        // Lerp to target Y
        grp.position.y += (targetY - grp.position.y) * 0.13;
        // X/Z stay at 0 (stacked on central axis, perspective camera shows depth naturally)
        grp.position.x += (data.baseX - grp.position.x) * 0.1;
        grp.position.z += (data.baseZ - grp.position.z) * 0.1;

        // Rotate whole layer group — slight per-layer offset so they look independent
        grp.rotation.y = currentRotY + idx * 0.06;
        grp.rotation.x = currentRotX;
      });

      // Apex crystal spin
      const apexGrp = layerGroups[5];
      if (apexGrp) {
        const crystal = apexGrp.getObjectByName('apex-crystal');
        if (crystal) {
          crystal.rotation.y += 0.018;
          crystal.rotation.x += 0.009;
        }
      }

      // Orbiting micro-octahedra around AI layer
      if (apexGrp && !prefersReduced.matches) {
        apexGrp.children.forEach((child, ci) => {
          if (child.geometry && child.geometry.type === 'OctahedronGeometry') {
            const orbitAngle = t * 0.0007 + ci * (Math.PI / 2);
            child.position.set(
              Math.cos(orbitAngle) * 1.28,
              Math.sin(orbitAngle * 0.7) * 0.18,
              Math.sin(orbitAngle) * 1.28
            );
          }
        });
      }

      // Central beam scale based on overall explosion
      if (centralBeam) {
        const avgExp = layerExplosion.reduce((a, b) => a + b, 0) / 6;
        const breath  = Math.sin(t * 0.0025) * 0.07 + 1.0;
        centralBeam.scale.set(breath, 0.35 + avgExp * 0.65, breath);
        centralBeam.rotation.y = currentRotY;
        centralBeam.rotation.x = currentRotX * 0.5;
        centralBeam.material.opacity = 0.35 + avgExp * 0.35;
      }

      // Slowly drift particle field
      if (particleField && !prefersReduced.matches) {
        particleField.rotation.y += 0.0009;
        particleField.rotation.x  = currentRotX * 0.15;
      }

      renderer.render(scene, camera);
    }
    requestAnimationFrame(animate);
  }

  // ─── Bootstrap ────────────────────────────────────────────────────────────
  init();
})();
