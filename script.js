const body = document.body;
const toggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const header = document.querySelector('.site-header');
const progress = document.getElementById('scroll-progress');
const toTop = document.getElementById('to-top');
const projectShowcase = document.getElementById('project-showcase');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');
const avatarVideo = document.getElementById('avatar-video');
const avatarImage = document.getElementById('avatar-image');
const videoStatus = document.querySelector('.video-status');
const projects = [
  {
    id: 'music',
    title: 'Offline Music Player',
    tag: 'Featured • Play Store Project',
    device: 'phone',
    accentColor: 'var(--primary)',
    problem:
      'Users need uninterrupted music playback when network connectivity is poor or unavailable. Most mobile apps focus on streaming and fail to provide a polished offline-first experience.',
    solution:
      'Developed a Flutter-based offline music player focused on stable local playback, clean navigation, and fast media library rendering for real daily usage.',
    implementation: [
      'Implemented an audio playback system tuned for local file handling',
      'Added a background service so playback continues across app lifecycle changes',
      'Built storage-aware indexing to keep metadata and playlists synced',
      'Optimized UI rendering and transitions to remain smooth across large libraries'
    ],
    features: ['Background playback', 'Smooth UI', 'Offline support'],
    tech: ['Flutter', 'Dart'],
    playstore: 'https://play.google.com/store/apps/details?id=com.gengadharan.musicplayer',
    screens: [
      {
        id: 'music-library',
        name: 'Music Library',
        file: 'assets/projects/music-1.png',
        desc: 'Local audio indexing with real-time metadata rendering and fast track search'
      },
      {
        id: 'music-player',
        name: 'Now Playing',
        file: 'assets/projects/music-2.png',
        desc: 'Audio playback controls, background audio service and seek bar progression'
      },
      {
        id: 'music-playlists',
        name: 'Playlists',
        file: 'assets/projects/music-3.png',
        desc: 'User playlists, favorite tracks and most-played artist collections'
      }
    ],
    images: ['assets/projects/music-1.png', 'assets/projects/music-2.png', 'assets/projects/music-3.png']
  },
  {
    id: 'farmlink',
    title: 'FarmLink',
    tag: 'FEATURED • AI AGRITECH PROJECT',
    isFarmLink: true,
    subtitle: 'AI-Powered Agricultural Supply & Demand Platform',
    device: 'phone',
    showSatellites: true,
    accentColor: 'var(--farm-accent)',
    problem:
      'Fragmented farmer supply and disconnected buyer demand make it difficult for small farmers to reach larger markets, understand demand, and make informed pricing decisions.',
    solution:
      'FarmLink provides a digital marketplace and agricultural intelligence layer that connects farmer supply with buyer demand while supporting district-level insights, AI-assisted pricing, crop intelligence, and order coordination.',
    capabilities: [
      'Flutter marketplace connecting farmers and buyers',
      'FastAPI backend with PostgreSQL and SQLAlchemy',
      'District-level supply and demand intelligence',
      'AI-assisted dynamic pricing',
      'Crop disease detection and agricultural guidance',
      'Multilingual AI assistance with Tamil interaction'
    ],
    tech: [
      'Flutter',
      'Dart',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'SQLAlchemy',
      'REST APIs',
      'AI Integration'
    ],
    screens: [
      { id: 'dashboard', name: 'Dashboard', file: 'assets/projects/farmlink-dashboard.png', desc: 'District Supply & Demand Intelligence Overview' },
      { id: 'marketplace', name: 'Marketplace', file: 'assets/projects/farmlink-marketplace.png', desc: 'Buyer Catalog & Farmer Crop Listings' },
      { id: 'pricing', name: 'AI Pricing', file: 'assets/projects/farmlink-pricing.png', desc: 'Context-Aware Pricing Engine & Crop Registration' },
      { id: 'assistant', name: 'Navina Vivasayi AI', file: 'assets/projects/farmlink-ai.png', desc: 'Multilingual Farming Copilot & Disease Diagnosis' },
      { id: 'orders', name: 'Orders', file: 'assets/projects/farmlink-orders.png', desc: 'Fulfillment Tracking: Pending, Accepted, Completed' }
    ],
    images: [
      'assets/projects/farmlink-dashboard.png',
      'assets/projects/farmlink-marketplace.png',
      'assets/projects/farmlink-pricing.png',
      'assets/projects/farmlink-ai.png',
      'assets/projects/farmlink-orders.png'
    ]
  },
  {
    id: 'farmgen',
    title: 'FarmGen AI CLI',
    tag: 'CLI Application • OpenHands AI',
    device: 'terminal',
    deviceTitle: 'farmgen-ai — cli',
    accentColor: 'var(--accent)',
    problem:
      'Farmers and agricultural professionals often lack quick access to reliable farming guidance and technical assistance through simple command-line tools, making information retrieval slower and less accessible.',
    solution:
      'Developed FarmGen AI CLI, an AI-powered command-line assistant built with OpenHands AI that enables farmers to interact using natural language commands. The application provides farming guidance, crop management support, development assistance, report generation, and AI-driven recommendations directly from the terminal.',
    implementation: [
      'Built a Python-based command-line interface (CLI)',
      'Integrated OpenHands AI for intelligent natural language interactions',
      'Implemented modular command handling for farming and development queries',
      'Designed an extensible architecture supporting future AI skills and plugins'
    ],
    features: [
      'Interactive CLI interface',
      'Natural language AI assistance',
      'Crop and irrigation guidance',
      'AI-generated reports',
      'Development support',
      '54+ integrated AI skills'
    ],
    tech: [
      'Python',
      'OpenHands AI',
      'LLM',
      'CLI',
      'Prompt Engineering'
    ],
    screens: [
      {
        id: 'terminal',
        name: 'Terminal',
        file: 'assets/projects/farmgen-1.png',
        desc: 'FarmGen AI command-line assistant loaded with 54+ agricultural skills'
      },
      {
        id: 'farming-query',
        name: 'Farming Query',
        file: 'assets/projects/farmgen-2.png',
        desc: 'Natural language summer irrigation guidance with active CLI tool execution'
      },
      {
        id: 'ai-response',
        name: 'AI Response',
        file: 'assets/projects/farmgen-3.png',
        desc: 'Step-by-step crop cultivation guide with structured planting methods'
      }
    ],
    images: [
      'assets/projects/farmgen-1.png',
      'assets/projects/farmgen-2.png',
      'assets/projects/farmgen-3.png'
    ]
  },
  {
    id: 'photo',
    title: 'AI Photo Enhancer',
    tag: 'Desktop Application • Real-ESRGAN AI',
    device: 'desktop',
    deviceTitle: 'AI Photo Enhancer — Real-ESRGAN',
    accentColor: 'var(--primary-2)',
    problem:
      'Traditional image scaling methods produce blurry and low-quality results when enlarging images, making them unsuitable for high-resolution restoration.',
    solution:
      'Developed an AI-powered desktop application that enhances image quality using the Real-ESRGAN deep learning model. The application restores details, reduces noise, sharpens images, and upscales low-resolution images while preserving natural textures.',
    implementation: [
      'Built the desktop application using Flutter',
      'Integrated the Real-ESRGAN AI model for image enhancement',
      'Implemented a Python-based image processing pipeline',
      'Optimized AI inference for faster processing and improved output quality'
    ],
    features: [
      'AI image enhancement',
      '2× & 4× upscaling',
      'Noise reduction',
      'Image sharpening',
      'High-resolution export'
    ],
    tech: [
      'Flutter',
      'Python',
      'Real-ESRGAN',
      'NCNN'
    ],
    github: 'https://github.com/gengadharan4656/ai_photo_enhancer',
    screens: [
      {
        id: 'enhancement',
        name: 'Enhancement Result',
        file: 'assets/projects/photo-1.png',
        desc: 'Real-ESRGAN deep learning 4× upscaling with detail restoration & noise reduction'
      }
    ],
    images: [
      'assets/projects/photo-1.png'
    ]
  },
  {
    id: 'blog',
    title: 'Blog Application',
    tag: 'Full-stack Mobile + API',
    device: 'phone',
    accentColor: 'var(--primary)',
    problem:
      'Users need a secure blogging platform that supports account protection, reliable authentication, and scalable content management workflows.',
    solution:
      'Delivered a complete blog system with a Flutter client and Flask backend, enabling secure posting, account management, and API-driven architecture.',
    implementation: [
      'Implemented Flutter frontend flows for post publishing and feed consumption',
      'Developed Flask REST APIs for authentication and content operations',
      'Integrated SQL persistence for users, posts, and session data',
      'Added OTP-based recovery to harden account restoration and login safety'
    ],
    features: ['Secure login', 'REST API', 'Cloud deployment'],
    tech: ['Flutter', 'Flask', 'MySQL', 'Dart'],
    github: 'https://github.com/gengadharan4656/blog-app',
    screens: [
      {
        id: 'login',
        name: 'Login',
        file: 'assets/projects/blog-1.png',
        desc: 'Secure user authentication with credential validation and account recovery',
        fit: 'contain',
        bg: '#ebf4fb'
      },
      {
        id: 'feed',
        name: 'Blog Feed',
        file: 'assets/projects/blog-2.png',
        desc: 'Searchable article feed with category tags, interaction metrics and post creation',
        fit: 'contain',
        bg: '#ebf4fb'
      }
    ],
    images: ['assets/projects/blog-1.png', 'assets/projects/blog-2.png']
  },
  {
    id: 'bus',
    title: 'Bus Tracking',
    tag: 'Realtime Experience Simulation',
    device: 'phone',
    accentColor: 'var(--primary-2)',
    problem:
      'Users cannot reliably understand bus movement or expected arrival without a tracking interface, causing delays and poor trip planning.',
    solution:
      'Built a simulated real-time bus tracking application with map-based visualization and location updates to mimic production tracking flows.',
    implementation: [
      'Integrated location tracking pipeline for route-aware updates',
      'Connected map UI for live bus position visualization',
      'Created backend-driven simulation for movement and timing data'
    ],
    features: ['Location tracking', 'Map integration', 'Backend simulation'],
    tech: ['Flutter', 'Python'],
    github: 'https://github.com/gengadharan4656/live_bus_tracking',
    screens: [
      {
        id: 'map',
        name: 'Live Map',
        file: 'assets/projects/bus-1.png',
        desc: 'Interactive map visualization showing real-time bus positions and nearby transit'
      },
      {
        id: 'route',
        name: 'Fleet Route',
        file: 'assets/projects/bus-2.png',
        desc: 'Smart bus route search with distance estimates and multi-vehicle status cards'
      }
    ],
    images: ['assets/projects/bus-1.png', 'assets/projects/bus-2.png']
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    tag: 'Operations Productivity',
    device: 'desktop',
    layout: 'landscape',
    deviceTitle: 'n8n — Email Scheduling Automation',
    accentColor: 'var(--primary)',
    problem:
      'Manual repetitive operations consume team bandwidth and introduce inconsistencies in communication workflows.',
    solution:
      'Designed and deployed automated email workflows to reduce manual effort, improve consistency, and trigger communication on schedule.',
    implementation: [
      'Mapped routine tasks into deterministic workflow steps',
      'Configured trigger-based scheduling for timed automation',
      'Implemented template-driven email delivery with operational logging'
    ],
    features: [
      'Automated scheduling',
      'Email workflow orchestration',
      'Reduced manual effort'
    ],
    tech: ['n8n', 'Python', 'Cloud'],
    screens: [
      {
        id: 'workflow',
        name: 'Automation Flow',
        file: 'assets/projects/automation-1.png',
        desc: 'Automated email scheduling and trigger-based workflow orchestration in n8n'
      }
    ],
    images: [
      'assets/projects/automation-1.png'
    ]
  }
];

function setTheme(isDark) {
  body.classList.toggle('dark', isDark);
  toggle?.setAttribute('aria-pressed', String(isDark));
  toggle?.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#070a12' : '#f5f7fb');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

setTheme(localStorage.getItem('theme') !== 'light');
toggle?.addEventListener('click', () => setTheme(!body.classList.contains('dark')));

function closeMenu() {
  body.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation');
}

menuToggle?.addEventListener('click', () => {
  const willOpen = !body.classList.contains('menu-open');
  body.classList.toggle('menu-open', willOpen);
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  menuToggle.setAttribute('aria-label', willOpen ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', closeMenu));

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  lightboxClose.focus();
  body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  body.style.overflow = '';
}

lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
lightboxClose?.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { closeLightbox(); closeMenu(); } });

function listBlock(title, items) {
  if (!items || !items.length) return '';
  return `<div class="content-block"><h4>${title}</h4><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul></div>`;
}

function textBlock(title, content) {
  return `<div class="content-block"><h4>${title}</h4><p>${content}</p></div>`;
}

function renderFarmLinkLeftContent(project, index) {
  return `
    <div class="left-content">
      <span class="project-index">PROJECT / ${String(index + 1).padStart(2, '0')}</span>
      <p class="project-tag tag-farmlink">${project.tag}</p>
      <h3 class="farmlink-title">${project.title}</h3>
      <p class="project-subtitle">${project.subtitle}</p>

      <div class="project-details farmlink-details">
        ${textBlock('The Challenge', project.problem)}
        ${textBlock('The Solution', project.solution)}

        <!-- District Market Intelligence -->
        <div class="farmlink-district-card">
          <div class="district-header">
            <span>District Market Intelligence</span>
            <span class="district-signal">Real-Time Signals</span>
          </div>
          <div class="district-grid">
            <div class="district-metric high-demand">
              <div class="metric-city">
                <span>Chennai</span>
                <span class="metric-status-tag">High Demand</span>
              </div>
              <div class="metric-val">Supply: <strong>0 kg</strong> &nbsp;|&nbsp; Demand: <strong>714 kg</strong> (1 buyer)</div>
            </div>
            <div class="district-metric high-supply">
              <div class="metric-city">
                <span>Madurai</span>
                <span class="metric-status-tag">High Supply</span>
              </div>
              <div class="metric-val">Supply: <strong>607 kg</strong> (2 farmers) &nbsp;|&nbsp; Demand: <strong>0 kg</strong></div>
            </div>
          </div>
        </div>

        <!-- AI Dynamic Pricing -->
        <div class="ai-pricing-card">
          <div class="pricing-top">
            <div class="pricing-title">
              <span>🌱 AI Dynamic Pricing</span>
            </div>
            <span class="pricing-confidence">Confidence: HIGH</span>
          </div>
          <div class="pricing-hero">
            <div class="recommended-amount">₹38.00</div>
            <div class="recommended-label">Recommended Price / kg</div>
          </div>
          <div class="pricing-factors-grid">
            <div class="factor-chip">
              <span class="f-label">Market Price</span>
              <span class="f-val">₹30.00</span>
            </div>
            <div class="factor-chip positive">
              <span class="f-label">Quality Bonus</span>
              <span class="f-val">+₹5.00</span>
            </div>
            <div class="factor-chip positive">
              <span class="f-label">Demand Bonus</span>
              <span class="f-val">+₹4.00</span>
            </div>
            <div class="factor-chip">
              <span class="f-label">Season Bonus</span>
              <span class="f-val">₹0.00</span>
            </div>
            <div class="factor-chip positive">
              <span class="f-label">Weather Bonus</span>
              <span class="f-val">+₹2.00</span>
            </div>
            <div class="factor-chip deduct">
              <span class="f-label">Transport Cost</span>
              <span class="f-val">-₹3.00</span>
            </div>
          </div>
          <div class="pricing-disclaimer">
            <i>ℹ</i> <span>AI-assisted decision support. The farmer retains full control over the final selling price.</span>
          </div>
        </div>

        ${listBlock('What I Built', project.capabilities)}

        <!-- Technology Stack -->
        <div class="content-block">
          <h4>Technology</h4>
          <div class="tech-tags">
            ${project.tech.map((tech) => {
              const isCore = ['Flutter', 'Dart', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy'].includes(tech);
              return `<span class="${isCore ? 'tech-highlight' : ''}">${tech}</span>`;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderStandardLeftContent(project, index) {
  return `
    <div class="left-content">
      <span class="project-index">PROJECT / ${String(index + 1).padStart(2, '0')}</span>
      <p class="project-tag">${project.tag}</p>
      <h3>${project.title}</h3>
      <p class="project-intro">A story-driven product showcase focused on clarity, architecture, and meaningful user value.</p>
      <div class="project-details">
        ${textBlock('The challenge', project.problem)}
        ${textBlock('The solution', project.solution)}
        ${listBlock('What I Built', project.capabilities || project.implementation || [])}
        <div class="content-block">
          <h4>Technology</h4>
          <div class="tech-tags">
            ${project.tech.map((tech) => `<span>${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            ${
              project.playstore
                ? `
                <a href="${project.playstore}"
                   target="_blank"
                   class="project-btn playstore-btn">
                   📱 View on Play Store
                </a>
                `
                : ''
            }
            ${
              project.github
                ? `
                <a href="${project.github}"
                   target="_blank"
                   class="project-btn github-btn">
                   💻 View GitHub
                </a>
                `
                : ''
            }
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDeviceCard(project, screen, sIdx, posClass) {
  const deviceType = project.device || 'phone';
  const isLandscape = project.layout === 'landscape';
  const fitStyle = screen.fit ? `object-fit: ${screen.fit};` : '';
  const bgStyle = screen.bg ? `background: ${screen.bg};` : '';
  const inlineImgStyle = (fitStyle || bgStyle) ? `style="${fitStyle} ${bgStyle}"` : '';

  let innerMockup = '';
  if (deviceType === 'terminal') {
    innerMockup = `
      <div class="device-terminal-primary">
        <div class="terminal-window-header">
          <div class="window-controls" aria-hidden="true">
            <span class="window-dot dot-close"></span>
            <span class="window-dot dot-min"></span>
            <span class="window-dot dot-max"></span>
          </div>
          <span class="terminal-window-title">${project.deviceTitle || `${project.title.toLowerCase().replace(/\s+/g, '-')} — cli`}</span>
        </div>
        <div class="terminal-screen-wrapper">
          <img class="terminal-screen-img screen-showcase-img" 
               src="${screen.file}" 
               alt="${project.title} - ${screen.name}: ${screen.desc}"
               loading="lazy"
               ${inlineImgStyle} />
        </div>
      </div>
    `;
  } else if (deviceType === 'desktop') {
    innerMockup = `
      <div class="device-desktop-primary ${isLandscape ? 'device-landscape' : ''}">
        <div class="desktop-window-header">
          <div class="window-controls" aria-hidden="true">
            <span class="window-dot dot-close"></span>
            <span class="window-dot dot-min"></span>
            <span class="window-dot dot-max"></span>
          </div>
          <span class="desktop-window-title">${project.deviceTitle || project.title}</span>
        </div>
        <div class="desktop-screen-wrapper">
          <img class="desktop-screen-img screen-showcase-img" 
               src="${screen.file}" 
               alt="${project.title} - ${screen.name}: ${screen.desc}"
               loading="lazy"
               ${inlineImgStyle} />
        </div>
      </div>
    `;
  } else {
    // Phone mockup
    innerMockup = `
      <div class="device-phone-primary">
        <div class="phone-camera-notch" aria-hidden="true"></div>
        <img class="phone-screen-img screen-showcase-img" 
             src="${screen.file}" 
             alt="${project.title} - ${screen.name}: ${screen.desc}"
             loading="lazy"
             ${inlineImgStyle} />
      </div>
    `;
  }

  return `
    <div class="stage-card ${posClass}" 
         data-screen-index="${sIdx}"
         data-project-id="${project.id}"
         role="button"
         tabindex="0"
         aria-label="${screen.name}">
      ${innerMockup}
      <span class="stage-card-tag">${screen.name}</span>
    </div>
  `;
}

function renderProjectScreens(project, index) {
  const projectId = project.id || `proj-${index}`;
  const screens = project.screens || [];
  const hasScreens = screens.length > 0;

  // IMPORTANT: Leave Workflow Automation / n8n completely alone
  if (projectId === 'automation' || project.title === 'Workflow Automation') {
    const shot = screens[0] || { file: 'assets/projects/automation-1.png', name: 'Automation Flow', desc: 'Automated email scheduling' };
    return `
      <div class="workflow-shot" style="align-self:center;">
        <img class="screen-showcase-img" 
             src="${shot.file}" 
             alt="${shot.name}: ${shot.desc}" 
             loading="lazy" />
      </div>
    `;
  }

  if (!hasScreens) {
    return `
      <div class="project-device-stage farmlink-device-stage" data-project-id="${projectId}">
        <div class="github-project">
          <div class="github-icon">💻</div>
          <h3>Source Code Available</h3>
          <p>This project is available on GitHub.</p>
          ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-primary">View GitHub Repository</a>` : ''}
        </div>
      </div>
    `;
  }

  const firstScreen = screens[0];
  const hasMultipleScreens = screens.length > 1;
  const deviceType = project.device || 'phone';
  const isLandscape = project.layout === 'landscape';
  const accentColor = project.accentColor || (project.isFarmLink ? 'var(--farm-accent)' : 'var(--primary)');
  const isFarmLink = Boolean(project.isFarmLink);

  // Screen selection tabs (generated ONLY if project has multiple screens)
  const selectorTabsHtml = hasMultipleScreens ? `
    <div class="screen-selector-tabs" role="tablist" aria-label="${project.title} Screens">
      ${screens.map((s, sIdx) => `
        <button class="screen-tab-btn ${sIdx === 0 ? 'active' : ''}" 
                data-project-id="${projectId}"
                data-screen-index="${sIdx}" 
                id="tab-${projectId}-${sIdx}"
                role="tab" 
                aria-controls="panel-${projectId}"
                aria-selected="${sIdx === 0 ? 'true' : 'false'}"
                tabindex="${sIdx === 0 ? '0' : '-1'}">
          ${s.name}
        </button>
      `).join('')}
    </div>
  ` : '';

  // FARMLINK: Retain reference showcase implementation (center phone + satellites)
  if (isFarmLink) {
    const mainImgId = 'farmlink-main-screen';
    const satellitesHtml = (screens.length >= 3) ? `
      <div class="device-satellite device-satellite-left" data-project-id="${projectId}" data-target-screen="1" title="Click to view ${screens[1].name}">
        <img src="${screens[1].file}" alt="${screens[1].name} screen preview" loading="lazy" />
        <span class="satellite-tag">${screens[1].name}</span>
      </div>
      <div class="device-phone-primary">
        <div class="phone-camera-notch" aria-hidden="true"></div>
        <img id="${mainImgId}" 
             class="phone-screen-img screen-showcase-img" 
             src="${firstScreen.file}" 
             alt="${project.title} - ${firstScreen.name}: ${firstScreen.desc}"
             loading="lazy" />
      </div>
      <div class="device-satellite device-satellite-right" data-project-id="${projectId}" data-target-screen="2" title="Click to view ${screens[2].name}">
        <img src="${screens[2].file}" alt="${screens[2].name} screen preview" loading="lazy" />
        <span class="satellite-tag">${screens[2].name}</span>
      </div>
    ` : `
      <div class="device-phone-primary">
        <div class="phone-camera-notch" aria-hidden="true"></div>
        <img id="${mainImgId}" 
             class="phone-screen-img screen-showcase-img" 
             src="${firstScreen.file}" 
             alt="${project.title} - ${firstScreen.name}: ${firstScreen.desc}"
             loading="lazy" />
      </div>
    `;

    return `
      <div class="project-device-stage farmlink-device-stage" 
           data-project-id="${projectId}" 
           style="--proj-accent: ${accentColor};"
           aria-label="${project.title} interactive showcase">
        ${selectorTabsHtml}

        <div class="device-stage-viewport viewport-phone" 
             id="panel-${projectId}" 
             role="tabpanel" 
             aria-labelledby="tab-${projectId}-0">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          ${satellitesHtml}
        </div>

        <div class="stage-caption" id="caption-${projectId}">
          <strong id="farmlink-screen-title" class="screen-caption-title">${firstScreen.name}</strong>: 
          <span id="farmlink-screen-desc" class="screen-caption-desc">${firstScreen.desc}</span>
        </div>
      </div>
    `;
  }

  // MULTI-SCREEN ADAPTIVE CAROUSEL STAGE (Music Player, FarmGen, Blog, Bus Tracking, etc.)
  let stageCardsHtml = '';
  if (screens.length === 3) {
    // 3 screens: LEFT tilted, CENTER active, RIGHT tilted
    stageCardsHtml = `
      <div class="stage-cards-container" data-project-id="${projectId}">
        ${renderDeviceCard(project, screens[0], 0, 'pos-center')}
        ${renderDeviceCard(project, screens[1], 1, 'pos-right')}
        ${renderDeviceCard(project, screens[2], 2, 'pos-left')}
      </div>
    `;
  } else if (screens.length === 2) {
    // 2 screens: CENTER active, SIDE-RIGHT tilted preview
    stageCardsHtml = `
      <div class="stage-cards-container" data-project-id="${projectId}">
        ${renderDeviceCard(project, screens[0], 0, 'pos-center')}
        ${renderDeviceCard(project, screens[1], 1, 'pos-side-right')}
      </div>
    `;
  } else {
    // 1 screen: Single center card
    stageCardsHtml = `
      <div class="stage-cards-container" data-project-id="${projectId}">
        ${renderDeviceCard(project, screens[0], 0, 'pos-single')}
      </div>
    `;
  }

  return `
    <div class="project-device-stage farmlink-device-stage" 
         data-project-id="${projectId}" 
         style="--proj-accent: ${accentColor};"
         aria-label="${project.title} interactive showcase">
      ${selectorTabsHtml}

      <div class="device-stage-viewport viewport-${deviceType}" 
           id="panel-${projectId}" 
           role="tabpanel" 
           aria-labelledby="tab-${projectId}-0">
        <div class="device-ambient-glow" aria-hidden="true"></div>
        ${stageCardsHtml}
      </div>

      <div class="stage-caption" id="caption-${projectId}">
        <strong id="caption-title-${projectId}" class="screen-caption-title">${firstScreen.name}</strong>: 
        <span id="caption-desc-${projectId}" class="screen-caption-desc">${firstScreen.desc}</span>
      </div>
    </div>
  `;
}

function switchProjectScreen(projectId, screenIndex) {
  const project = projects.find(p => (p.id || p.title) === projectId);
  if (!project || !project.screens || !project.screens[screenIndex]) return;

  const screen = project.screens[screenIndex];
  const stage = document.querySelector(`.project-device-stage[data-project-id="${projectId}"]`);
  if (!stage) return;

  const tabs = stage.querySelectorAll('.screen-tab-btn');
  const titleElem = stage.querySelector('.screen-caption-title');
  const descElem = stage.querySelector('.screen-caption-desc');

  // Update tabs active state and aria attributes
  tabs.forEach((tab, i) => {
    const isActive = i === screenIndex;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
    tab.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  // 1. Farmlink reference showcase switching
  if (project.isFarmLink) {
    const mainImg = stage.querySelector('#farmlink-main-screen');
    const satellites = stage.querySelectorAll('.device-satellite');

    if (mainImg) {
      mainImg.style.opacity = '0.25';
      mainImg.style.transform = 'scale(0.985)';
      setTimeout(() => {
        mainImg.src = screen.file;
        mainImg.alt = `${project.title} - ${screen.name}: ${screen.desc}`;
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
      }, 160);
    }

    if (satellites.length >= 2 && project.screens.length > 2) {
      const otherIndices = project.screens.map((_, i) => i).filter(i => i !== screenIndex);
      const leftIdx = otherIndices[0];
      const rightIdx = otherIndices[1];
      const leftSat = satellites[0];
      const rightSat = satellites[1];

      if (leftSat && project.screens[leftIdx]) {
        leftSat.dataset.targetScreen = leftIdx;
        const leftImg = leftSat.querySelector('img');
        const leftTag = leftSat.querySelector('.satellite-tag');
        if (leftImg) leftImg.src = project.screens[leftIdx].file;
        if (leftTag) leftTag.textContent = project.screens[leftIdx].name;
      }

      if (rightSat && project.screens[rightIdx]) {
        rightSat.dataset.targetScreen = rightIdx;
        const rightImg = rightSat.querySelector('img');
        const rightTag = rightSat.querySelector('.satellite-tag');
        if (rightImg) rightImg.src = project.screens[rightIdx].file;
        if (rightTag) rightTag.textContent = project.screens[rightIdx].name;
      }
    }
  } else {
    // 2. Adaptive Multi-Card Carousel rearrangement
    const cards = stage.querySelectorAll('.stage-card');
    const total = project.screens.length;

    if (total === 3) {
      // Arrangement for 3 screens:
      // Active screen -> pos-center
      // Next screen -> pos-right
      // Prev screen -> pos-left
      cards.forEach((card) => {
        const cIdx = parseInt(card.dataset.screenIndex, 10);
        card.classList.remove('pos-center', 'pos-left', 'pos-right');
        if (cIdx === screenIndex) {
          card.classList.add('pos-center');
        } else if (cIdx === (screenIndex + 1) % 3) {
          card.classList.add('pos-right');
        } else {
          card.classList.add('pos-left');
        }
      });
    } else if (total === 2) {
      // Arrangement for 2 screens:
      // Active screen -> pos-center
      // Other screen -> pos-side-right (or side-left depending on index for dynamic feeling)
      cards.forEach((card) => {
        const cIdx = parseInt(card.dataset.screenIndex, 10);
        card.classList.remove('pos-center', 'pos-side-right', 'pos-side-left');
        if (cIdx === screenIndex) {
          card.classList.add('pos-center');
        } else {
          card.classList.add(screenIndex === 0 ? 'pos-side-right' : 'pos-side-left');
        }
      });
    }
  }

  // Update caption
  if (titleElem) titleElem.textContent = screen.name;
  if (descElem) descElem.textContent = screen.desc;
}

function handleTabKeydown(event, projectId, currentIndex, totalTabs) {
  let newIndex = currentIndex;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault();
    newIndex = (currentIndex + 1) % totalTabs;
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault();
    newIndex = (currentIndex - 1 + totalTabs) % totalTabs;
  } else if (event.key === 'Home') {
    event.preventDefault();
    newIndex = 0;
  } else if (event.key === 'End') {
    event.preventDefault();
    newIndex = totalTabs - 1;
  } else {
    return;
  }

  const stage = document.querySelector(`.project-device-stage[data-project-id="${projectId}"]`);
  if (!stage) return;
  const targetTab = stage.querySelector(`.screen-tab-btn[data-screen-index="${newIndex}"]`);
  if (targetTab) {
    targetTab.focus();
    switchProjectScreen(projectId, newIndex);
  }
}

function initProjectShowcases() {
  document.querySelectorAll('.project-device-stage').forEach((stage) => {
    const projectId = stage.dataset.projectId;
    const tabs = stage.querySelectorAll('.screen-tab-btn');
    const satellites = stage.querySelectorAll('.device-satellite');
    const cards = stage.querySelectorAll('.stage-card');

    // Tab buttons
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        switchProjectScreen(projectId, index);
      });

      tab.addEventListener('keydown', (e) => {
        handleTabKeydown(e, projectId, index, tabs.length);
      });
    });

    // FarmLink satellites
    satellites.forEach((sat) => {
      sat.addEventListener('click', () => {
        const targetIdx = parseInt(sat.dataset.targetScreen, 10);
        if (!isNaN(targetIdx)) {
          switchProjectScreen(projectId, targetIdx);
        }
      });
    });

    // Side cards in 3-screen / 2-screen carousel (clicking side card activates it or opens lightbox if center)
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const targetIdx = parseInt(card.dataset.screenIndex, 10);
        if (card.classList.contains('pos-center') || card.classList.contains('pos-single')) {
          // If clicked center card, open lightbox with this card's image
          const img = card.querySelector('.screen-showcase-img');
          if (img) openLightbox(img.src, img.alt);
        } else {
          // Side card clicked -> activate it
          switchProjectScreen(projectId, targetIdx);
        }
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const targetIdx = parseInt(card.dataset.screenIndex, 10);
          switchProjectScreen(projectId, targetIdx);
        }
      });
    });
  });

  // Attach lightbox listeners to remaining standalone showcase images (e.g. n8n workflow-shot)
  document.querySelectorAll('.workflow-shot img, #farmlink-main-screen').forEach((image) => {
    image.addEventListener('click', () => openLightbox(image.src, image.alt));
  });
}

function initFarmLinkDeviceSwitcher() {
  initProjectShowcases();
}

function renderFarmLink(project, index) {
  return `
    <article class="project-slide reveal" id="project-farmlink">
      <div class="container">
        <div class="panel project-section farmlink-panel">
          ${renderFarmLinkLeftContent(project, index)}
          ${renderProjectScreens(project, index)}
        </div>
      </div>
    </article>
  `;
}

function renderProjects() {
  projectShowcase.innerHTML = projects.map((project, index) => {
    const isFarmLink = Boolean(project.isFarmLink);
    const leftContentHtml = isFarmLink 
      ? renderFarmLinkLeftContent(project, index) 
      : renderStandardLeftContent(project, index);
    const rightShowcaseHtml = renderProjectScreens(project, index);

    return `
      <article class="project-slide reveal" id="${isFarmLink ? 'project-farmlink' : `project-${project.id || index}`}">
        <div class="container">
          <div class="panel project-section ${isFarmLink ? 'farmlink-panel' : ''}">
            ${leftContentHtml}
            ${rightShowcaseHtml}
          </div>
        </div>
      </article>
    `;
  }).join('');

  initProjectShowcases();
}

function updateOnScroll() {
  const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = maxHeight > 0 ? (window.scrollY / maxHeight) * 100 : 0;
  progress.style.width = `${percentage}%`;
  toTop.classList.toggle('show', window.scrollY > 500);
  header.classList.toggle('scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', updateOnScroll, { passive: true });
toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

renderProjects();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px' });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-40% 0px -50%', threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

function showProfileImage() {
  if (!avatarVideo || !avatarImage || avatarVideo.classList.contains('fade-out')) return;
  avatarImage.classList.add('visible');
  avatarVideo.classList.add('fade-out');
  if (videoStatus) videoStatus.textContent = 'Introduction complete';
  window.setTimeout(() => { avatarVideo.hidden = true; }, 850);
}

const playIntroBtn =
document.getElementById("play-intro-btn");

if (playIntroBtn && avatarVideo) {

  playIntroBtn.addEventListener("click", () => {

    // Hide button while video plays
    playIntroBtn.style.display = "none";

    avatarVideo.hidden = false;

    avatarVideo.classList.remove("fade-out");

    avatarImage.classList.remove("visible");

    avatarVideo.currentTime = 0;

    avatarVideo.muted = false;

    avatarVideo.play()
      .then(() => {

        if (videoStatus) {
          videoStatus.textContent =
            "Playing introduction";
        }

      })
      .catch(err => {

        console.log(err);

        // Show button again if video fails
        playIntroBtn.style.display = "block";

      });

  });

  avatarVideo.addEventListener("ended", () => {

    avatarImage.classList.add("visible");

    avatarVideo.classList.add("fade-out");

    setTimeout(() => {
      avatarVideo.hidden = true;
    }, 800);

    // Show button again after video finishes
    playIntroBtn.style.display = "block";

    if (videoStatus) {
      videoStatus.textContent =
        "Watch introduction again";
    }

  });

}
document.getElementById('year').textContent = new Date().getFullYear();
updateOnScroll();
