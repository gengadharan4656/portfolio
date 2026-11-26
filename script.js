/**
 * Gengadharan S — Master Developer Portfolio Engine
 * Portrait Smartphone Showcase System (FarmLink Structural Reference Standard across all projects),
 * Balanced Left/Right Column Heights, Compact Real-Time Telemetry & Pricing Widgets,
 * Social Media Meme Generator Redesign, and Strict 11-Project Sequential Architecture.
 */

'use strict';

const body = document.body;
const toggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const header = document.querySelector('.site-header');
const progress = document.getElementById('scroll-progress');
const toTop = document.getElementById('to-top');

// Showcase DOM Mounts
const projectShowcaseContainer = document.getElementById('project-showcase');
const filterBarContainer = document.getElementById('project-filter-bar');
const projectModal = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalContentMount = document.getElementById('modal-content-mount');

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

// Hero Avatar Video Introduction Controller (Reference 1)
const avatarVideo = document.getElementById('avatar-video');
const avatarImage = document.getElementById('avatar-image');
const videoStatus = document.querySelector('.video-status');
const playIntroBtn = document.getElementById('play-intro-btn');

if (playIntroBtn && avatarVideo) {
  playIntroBtn.addEventListener('click', () => {
    playIntroBtn.style.display = 'none';
    avatarVideo.hidden = false;
    avatarVideo.classList.remove('fade-out');
    if (avatarImage) avatarImage.classList.remove('visible');
    avatarVideo.currentTime = 0;
    avatarVideo.muted = false;
    avatarVideo.play().then(() => {
      if (videoStatus) videoStatus.textContent = 'Playing introduction';
    }).catch(err => {
      console.log('Video playback note:', err);
      playIntroBtn.style.display = 'flex';
    });
  });

  avatarVideo.addEventListener('ended', () => {
    if (avatarImage) avatarImage.classList.add('visible');
    avatarVideo.classList.add('fade-out');
    setTimeout(() => {
      avatarVideo.hidden = true;
    }, 800);
    playIntroBtn.style.display = 'flex';
    if (videoStatus) videoStatus.textContent = 'Watch introduction again';
  });
}

// ============================================================================
// DATA REPOSITORY: 11 COMPLETE PROJECTS (STRICT USER SPECIFIED ORDER)
// ============================================================================
const projects = [
  // --------------------------------------------------------------------------
  // 01. Offline Music Player
  // --------------------------------------------------------------------------
  {
    id: 'music',
    title: 'Offline Music Player',
    subtitle: 'Local Audio Engine & Media Library',
    tag: 'PROJECT / 01 • PLAY STORE PUBLISHED',
    category: 'mobile-native',
    device: 'phone-portrait',
    accentColor: '#6366f1',
    badge: 'Google Play Store',
    problem:
      'Users need uninterrupted local playback in poor network conditions without background audio stutters or battery-draining polling. Most mobile audio players prioritize cloud streaming and fail to deliver a polished offline-first experience.',
    solution:
      'Developed a Flutter mobile music player with an Android foreground audio service that ensures continuous playback across lifecycle events. Powered by Riverpod state management and low-latency local storage indexing for rapid track navigation.',
    technicalDetails: {
      audioLifecycle: 'Android Audio Service running in an isolated foreground process with lock-screen notification controls.',
      stateManagement: 'Flutter Riverpod for declarative, reactive state flow across track queues and playlist mutations.',
      storageIndexing: 'Local storage-aware media scanner extracting ID3 tags, album art bitmaps, and track taxonomy with zero UI stutter.',
      releaseHygiene: 'Signed with production keystore and deployed directly to the Google Play Store.'
    },
    capabilities: [
      'Background audio playback service continuing across Android lifecycle states',
      'Local storage-aware metadata indexing and fast real-time track search',
      'Dynamic user playlists, favorites collection, and artist album grouping',
      'Smooth 60 FPS media library scrolling with low memory footprint'
    ],
    tech: ['Flutter', 'Dart', 'Riverpod', 'Android Audio Service', 'Android SDK'],
    metrics: [
      { label: 'Distribution', val: 'Google Play Store' },
      { label: 'Architecture', val: 'Riverpod State' },
      { label: 'Audio Service', val: 'Foreground Process' },
      { label: 'Mode', val: '100% Offline' }
    ],
    playstore: 'https://play.google.com/store/apps/details?id=com.gengadharan.musicplayer',
    screens: [
      {
        id: 'music-lib',
        name: 'Music Library',
        file: 'assets/projects/music-1.webp',
        fallback: 'assets/projects/music-1.png',
        desc: 'Local audio indexing with real-time metadata rendering, album categories, and instant track search.'
      },
      {
        id: 'music-now',
        name: 'Now Playing',
        file: 'assets/projects/music-2.webp',
        fallback: 'assets/projects/music-2.png',
        desc: 'Audio playback controls, background audio service progression, and interactive seek bar.'
      },
      {
        id: 'music-play',
        name: 'Playlists',
        file: 'assets/projects/music-3.webp',
        fallback: 'assets/projects/music-3.png',
        desc: 'Custom playlist management, favorite tracks collection, and most-played artist collections.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 02. FarmLink
  // --------------------------------------------------------------------------
  {
    id: 'farmlink',
    title: 'FarmLink',
    subtitle: 'AI-Powered Agricultural Supply & Demand Platform',
    tag: 'PROJECT / 02 • AI AGRITECH PLATFORM',
    isFarmLink: true,
    category: 'mobile-native',
    device: 'phone-portrait',
    accentColor: '#10b981',
    badge: 'AI Agritech Platform',
    problem:
      'Fragmented agricultural supply chains and localized price opacity prevent smallholder farmers from capturing fair market value. Speculative intermediaries exploit information gaps, leaving growers with unsold harvest during peak crop cycles.',
    solution:
      'Built a full-stack agricultural marketplace pairing farmer crop supply with wholesale buyer demand in real time. Features a dynamic AI pricing engine, district-level mandi signals, and multilingual crop disease diagnosis with Tamil support.',
    technicalDetails: {
      backendEngine: 'FastAPI microservices backed by PostgreSQL and SQLAlchemy with async database pooling.',
      pricingModel: 'Multi-factor regression pricing engine evaluating quality, demand-supply balance, season, and transit costs.',
      telemetrySignals: 'Live district-level commodity aggregation tracking wholesale volumes across Chennai and Madurai mandis.',
      multilingualCopilot: 'Navina Vivasayi AI conversational agent delivering agronomic advice and crop disease guidance.'
    },
    capabilities: [
      'Direct digital marketplace connecting verified farmers and wholesale buyers',
      'District-level supply and demand intelligence tracking Chennai & Madurai mandis',
      'Dynamic AI pricing engine factoring crop quality, season, and transport',
      'Multilingual agricultural copilot supporting Tamil conversation and disease scanning'
    ],
    tech: ['Flutter', 'Dart', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'REST APIs', 'AI Integration'],
    metrics: [
      { label: 'Platform Core', val: 'FastAPI + Flutter' },
      { label: 'Relational DB', val: 'PostgreSQL' },
      { label: 'Decision Engine', val: 'AI Dynamic Pricing' },
      { label: 'Language', val: 'English + Tamil' }
    ],
    github: 'https://github.com/gengadharan4656/farmlink',
    screens: [
      {
        id: 'fl-dash',
        name: 'Dashboard',
        file: 'assets/projects/farmlink-dashboard.webp',
        fallback: 'assets/projects/farmlink-dashboard.png',
        desc: 'District supply-demand telemetry and harvest volume metrics across regional agricultural centers.'
      },
      {
        id: 'fl-market',
        name: 'Marketplace',
        file: 'assets/projects/farmlink-marketplace.webp',
        fallback: 'assets/projects/farmlink-marketplace.png',
        desc: 'Direct wholesale digital marketplace connecting verified farmer crop listings with commercial buyers.'
      },
      {
        id: 'fl-pricing',
        name: 'AI Pricing',
        file: 'assets/projects/farmlink-pricing.webp',
        fallback: 'assets/projects/farmlink-pricing.png',
        desc: 'Dynamic AI pricing decision support engine calculating baseline recommendations from live market signals.'
      },
      {
        id: 'fl-assistant',
        name: 'Navina Vivasayi AI',
        file: 'assets/projects/farmlink-ai.webp',
        fallback: 'assets/projects/farmlink-ai.png',
        desc: 'Multilingual conversational farming assistant providing agronomic guidance and crop disease diagnosis.'
      },
      {
        id: 'fl-orders',
        name: 'Orders',
        file: 'assets/projects/farmlink-orders.webp',
        fallback: 'assets/projects/farmlink-orders.png',
        desc: 'Real-time order lifecycle tracking managing crop reservations, dispatch confirmation, and delivery fulfillment.'
      },
      {
        id: 'fl-crops',
        name: 'Crops Catalog',
        file: 'assets/projects/farmlink-crops.png',
        fallback: 'assets/projects/farmlink-crops.png',
        desc: 'Registered crop varieties inventory with harvest timelines and yield predictions.'
      },
      {
        id: 'fl-disease',
        name: 'Disease Diagnosis',
        file: 'assets/projects/farmlink-disease-crop.png',
        fallback: 'assets/projects/farmlink-disease-crop.png',
        desc: 'Computer vision crop leaf pathology scanner identifying early-stage agricultural disease symptoms.'
      },
      {
        id: 'fl-tamil',
        name: 'Tamil Copilot',
        file: 'assets/projects/farmlink-tamil-chat.png',
        fallback: 'assets/projects/farmlink-tamil-chat.png',
        desc: 'Localized conversational AI copilot providing regional advisory and weather-aware farming guidance in Tamil.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 03. Social Media Meme Generator
  // --------------------------------------------------------------------------
  {
    id: 'trendpilot',
    title: 'Social Media Meme Generator',
    subtitle: 'AI-Powered Social Media Content Generation & Trend Automation',
    tag: 'PROJECT / 03 • AI CONTENT AUTOMATION',
    category: 'ai-automation',
    device: 'phone-portrait',
    accentColor: '#06b6d4',
    badge: 'Autonomous AI Agent',
    problem:
      'Digital content creators and regional brands lose hours manually tracking trends, identifying templates, and adapting humor to local contexts. Disparate generation tools lack regional language nuance and automated workflow orchestration.',
    solution:
      'Engineered an automated agent pipeline combining n8n workflow automation with Google Gemini LLMs and Python rendering. Tailored for Indian and Tamil regional audiences with Tanglish humor, persistent brand memory, and PostgreSQL storage.',
    technicalDetails: {
      orchestration: 'n8n workflow automation coordinating trend scraping, prompt engineering, image synthesis, and verification queues.',
      llmIntegration: 'Google Gemini multimodal models analyzing current events, sentiment, and vernacular comedic timing in Tanglish.',
      canvasRendering: 'Python PIL graphic automation dynamically rendering typography, subtitles, and template overlays.',
      storageMemory: 'PostgreSQL database persisting brand style profiles, trend history, candidate memes, and engagement telemetry.'
    },
    capabilities: [
      'Autonomous multi-stage trend scraping and viral topic analysis',
      'Gemini LLM prompt synthesis producing culturally contextual Tanglish humor',
      'Automated PIL image rendering with verified meme template alignment',
      'PostgreSQL persistent brand memory with human verification checkpoints'
    ],
    tech: ['n8n', 'Python', 'Google Gemini LLM', 'PostgreSQL', 'JavaScript', 'REST APIs'],
    metrics: [
      { label: 'Workflow Engine', val: 'n8n Enterprise' },
      { label: 'Relational DB', val: 'PostgreSQL' },
      { label: 'Schedules', val: '3x Daily Automation' },
      { label: 'Tone', val: 'Tanglish & English' }
    ],
    github: 'https://github.com/gengadharan4656/TrendPilotAI',
    screens: [
      {
        id: 'tp-wf1',
        name: 'Workflow Analysis',
        file: 'assets/projects/trendpilot/workflow/trendpilot-wf-template.webp',
        fallback: 'assets/projects/trendpilot/workflow/trendpilot-wf-template.png',
        fit: 'contain',
        desc: 'Automated trend discovery workflow scraping social streams and identifying high-engagement template candidates.'
      },
      {
        id: 'tp-wf2',
        name: 'Content Generation',
        file: 'assets/projects/trendpilot/workflow/trendpilot-wf-render.webp',
        fallback: 'assets/projects/trendpilot/workflow/trendpilot-wf-render.png',
        fit: 'contain',
        desc: 'Google Gemini multimodal prompt evaluation, Tanglish caption synthesis, and PIL canvas rendering pipeline.'
      },
      {
        id: 'tp-meme1',
        name: 'Generated Memes',
        file: 'assets/projects/trendpilot/memes/trendpilot-meme-rcb.webp',
        fallback: 'assets/projects/trendpilot/memes/trendpilot-meme-rcb.png',
        fit: 'contain',
        desc: 'Culturally contextual sports and IPL cricket meme automatically formatted with Tanglish caption overlays.'
      },
      {
        id: 'tp-meme2',
        name: 'Meme Gallery',
        file: 'assets/projects/trendpilot/memes/trendpilot-meme-deploy.webp',
        fallback: 'assets/projects/trendpilot/memes/trendpilot-meme-deploy.png',
        fit: 'contain',
        desc: 'Developer reality meme addressing software release friction and production bug management.'
      },
      {
        id: 'tp-dash1',
        name: 'Trend Monitoring',
        file: 'assets/projects/trendpilot/dashboard/trendpilot-dash-ramayana.webp',
        fallback: 'assets/projects/trendpilot/dashboard/trendpilot-dash-ramayana.png',
        fit: 'contain',
        desc: 'Cinema and pop-culture trend tracker scoring audience sentiment spikes across entertainment topics.'
      },
      {
        id: 'tp-dash2',
        name: 'Automation Dashboard',
        file: 'assets/projects/trendpilot/dashboard/trendpilot-dash-cricket.webp',
        fallback: 'assets/projects/trendpilot/dashboard/trendpilot-dash-cricket.png',
        fit: 'contain',
        desc: 'Operational dashboard logging execution batches, approval checkpoints, and database storage telemetry.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 04. GaNg RaCe
  // --------------------------------------------------------------------------
  {
    id: 'gang-race',
    title: 'GaNg RaCe',
    subtitle: '3D Kart Racing with 6-Player Local Wi-Fi Multiplayer',
    tag: 'PROJECT / 04 • C++ ENGINE & GAME DEV',
    category: 'game-dev',
    device: 'phone-portrait',
    accentColor: '#f59e0b',
    badge: 'C++ NDK Game Engine',
    problem:
      'Most mobile multiplayer racing games require continuous internet access, invasive account creation, or cloud servers that fail in low-connectivity campus environments. Peer-to-peer mobile multiplayer without cellular data remains rare.',
    solution:
      'Customized a C++ 3D racing game engine for Android via CMake and the NDK, delivering 60 FPS OpenGL ES graphics. Implemented ad-hoc POSIX socket networking for zero-configuration 6-player local Wi-Fi and hotspot multiplayer.',
    technicalDetails: {
      engineCore: 'C++ game engine ported to Android NDK with CMake build chains and custom native lifecycle handling.',
      graphicsPipeline: 'OpenGL ES 3.0 rendering with dynamic track lighting, shadow maps, and particle drift effects.',
      networking: 'Ad-hoc POSIX socket networking facilitating instant 6-player discovery over mobile hotspots without internet access.',
      scriptingState: 'Embedded Squirrel scripting engine governing track physics, game state machines, and HUD logic.'
    },
    capabilities: [
      '60 FPS native C++ Android NDK engine with OpenGL ES 3.0 shaders',
      'Zero-config 6-player local Wi-Fi and mobile hotspot peer-to-peer networking',
      'Real-time kart physics, drift mechanics, and dynamic particle effects',
      'Responsive on-screen touch HUD controls and vehicle customization garage'
    ],
    tech: ['C++', 'Android NDK', 'OpenGL ES 3.0', 'POSIX Sockets', 'CMake', 'Squirrel Scripting'],
    metrics: [
      { label: 'Engine Architecture', val: 'C++ Native NDK' },
      { label: 'Graphics API', val: 'OpenGL ES' },
      { label: 'Multiplayer', val: '6P Local Wi-Fi' },
      { label: 'Scripting', val: 'Squirrel Engine' }
    ],
    github: 'https://github.com/gengadharan4656/GaNgRaCe',
    screens: [
      {
        id: 'gr-video',
        name: 'Gameplay',
        type: 'video',
        file: 'assets/projects/gang-race/video/gang-race-gameplay.mp4',
        poster: 'assets/projects/gang-race/video/gang-race-poster.jpg',
        desc: 'Real-time 60 FPS Android gameplay footage showing 3D drift physics, OpenGL ES rendering, and local Wi-Fi sync.'
      },
      {
        id: 'gr-menu',
        name: 'Multiplayer Hub',
        file: 'assets/projects/gang-race/branding/gang-race-01-menu.webp',
        fallback: 'assets/projects/gang-race/branding/gang-race-01-menu.png',
        fit: 'contain',
        desc: 'Native lobby interface configuring 6-player ad-hoc Wi-Fi and mobile hotspot multiplayer racing sessions.'
      },
      {
        id: 'gr-garage',
        name: 'Kart Garage',
        file: 'assets/projects/gang-race/branding/gang-race-02-karts.webp',
        fallback: 'assets/projects/gang-race/branding/gang-race-02-karts.jpg',
        fit: 'contain',
        desc: 'Real-time 3D vehicle selection, shader customization, and dynamic lighting inspection garage.'
      },
      {
        id: 'gr-tracks',
        name: 'Race Tracks',
        file: 'assets/projects/gang-race/gameplay/gang-race-04-drift.webp',
        fallback: 'assets/projects/gang-race/gameplay/gang-race-04-drift.png',
        fit: 'contain',
        desc: 'High-speed mountain drift circuit rendering procedural terrain textures and weather particle systems.'
      },
      {
        id: 'gr-network',
        name: 'Local Wi-Fi Multiplayer',
        file: 'assets/projects/gang-race/gameplay/gang-race-03-network.webp',
        fallback: 'assets/projects/gang-race/gameplay/gang-race-03-network.jpg',
        fit: 'contain',
        desc: 'Ad-hoc POSIX socket network discovery synchronizing vehicle transforms and position states across 6 devices.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 05. FarmGen AI CLI
  // --------------------------------------------------------------------------
  {
    id: 'farmgen',
    title: 'FarmGen AI CLI',
    subtitle: 'Terminal AI Assistant with 54+ Agricultural Skills',
    tag: 'PROJECT / 05 • AUTONOMOUS CLI AGENT',
    category: 'ai-automation',
    device: 'phone-portrait',
    accentColor: '#10b981',
    badge: 'Terminal AI Assistant',
    problem:
      'Agricultural developers and field researchers lack fast, lightweight terminal tools to query agronomic data, crop schedules, and soil parameters. Web dashboards often suffer high latency and unnecessary overhead in low-bandwidth field environments.',
    solution:
      'Developed a high-efficiency command-line agronomy assistant built with OpenHands AI and Python. Loaded with 54+ domain-specific agricultural skills to deliver instant cultivation advice, fertilizer schedules, and diagnostics.',
    technicalDetails: {
      cliCore: 'Python Click and Rich library terminal interface delivering formatted ANSI tables, syntax trees, and status spinners.',
      agentCore: 'OpenHands AI orchestration executing multi-turn autonomous reasoning, tool invocations, and code evaluations.',
      skillsRegistry: '54+ domain agricultural skill modules covering soil chemistry, pest mitigation, and irrigation models.',
      outputPipeline: 'Generates structured terminal output, diagnostic telemetry logs, and exportable markdown field reports.'
    },
    capabilities: [
      'Terminal interface loaded with 54+ domain-specific agricultural skills',
      'Natural-language soil queries, seed preparation schedules, and crop diagnostics',
      'OpenHands AI integration enabling multi-turn autonomous problem solving',
      'Zero-latency local CLI operation with structured markdown report generation'
    ],
    tech: ['Python', 'OpenHands AI', 'LLM Integration', 'CLI Architecture', 'Prompt Engineering'],
    metrics: [
      { label: 'Architecture', val: 'Python Click CLI' },
      { label: 'AI Agent', val: 'OpenHands AI' },
      { label: 'Capabilities', val: '54+ Agri Skills' },
      { label: 'Execution', val: 'Instant Terminal' }
    ],
    github: 'https://github.com/gengadharan4656/farmgen-ai',
    screens: [
      {
        id: 'fg-main',
        name: 'Terminal Interface',
        file: 'assets/projects/farmgen-1.webp',
        fallback: 'assets/projects/farmgen-1.png',
        fit: 'contain',
        desc: 'Terminal banner and skill engine initializing OpenHands AI with 54+ loaded agricultural domain modules.'
      },
      {
        id: 'fg-query',
        name: 'Farming Query',
        file: 'assets/projects/farmgen-2.webp',
        fallback: 'assets/projects/farmgen-2.png',
        fit: 'contain',
        desc: 'Interactive terminal query executing natural language soil queries and crop cultivation recommendations.'
      },
      {
        id: 'fg-report',
        name: 'Cultivation Report',
        file: 'assets/projects/farmgen-3.webp',
        fallback: 'assets/projects/farmgen-3.png',
        fit: 'contain',
        desc: 'Automated harvest scheduling, disease mitigation strategies, and structured markdown report generation.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 06. ShareLink
  // --------------------------------------------------------------------------
  {
    id: 'sharelink',
    title: 'ShareLink',
    subtitle: 'High-Speed Offline-First Cross-Platform File Transfer',
    tag: 'PROJECT / 06 • P2P PROTOCOL & SECURITY',
    category: 'mobile-native',
    device: 'phone-portrait',
    accentColor: '#10b981',
    badge: 'P2P File Transfer',
    problem:
      'Cross-platform file sharing between mobile and desktop typically requires internet access, cloud intermediary servers, or cumbersome account setup. Existing offline tools are plagued by advertising or incompatible proprietary protocols.',
    solution:
      'Engineered an offline-first file transfer app using Flutter with an embedded Dart HTTP server and AES-256-GCM encryption. Receivers connect via browser without installing software, downloading streamed files over high-speed local Wi-Fi.',
    technicalDetails: {
      embeddedServer: 'Custom Dart HTTP server binding dynamically to available local IP addresses on local Wi-Fi networks.',
      securityProtocol: 'AES-256-GCM AEAD encryption exchanging one-time ephemeral keys via QR hash fragments.',
      webReceiver: 'Zero-install browser client utilizing Web Crypto API for client-side stream decryption and integrity checks.',
      streamingEngine: 'Supports HTTP byte-range requests for chunked transfer and automatic transfer resumption.'
    },
    capabilities: [
      'Zero-install browser receiver supporting Chrome, Safari, and Firefox via QR code',
      'End-to-end authenticated encryption using AES-256-GCM and WebCrypto API',
      'High-speed local network streaming with HTTP byte-range resume support',
      'Cross-platform engine running natively on Android, iOS, Windows, macOS, and Linux'
    ],
    tech: ['Flutter', 'Dart', 'Local HTTP Server', 'AES-256-GCM', 'Web Crypto API', 'QR Pairing'],
    metrics: [
      { label: 'Protocol', val: 'Direct HTTP Stream' },
      { label: 'Security', val: 'AES-256-GCM' },
      { label: 'Receiver', val: 'Zero-Install Web' },
      { label: 'Discovery', val: 'QR Pair Key' }
    ],
    live: 'https://gengadharan4656.github.io/sharelink/',
    github: 'https://github.com/gengadharan4656/sharelink',
    screens: [
      {
        id: 'sl-proto',
        name: 'Protocol Architecture',
        file: 'assets/projects/sharelink/sharelink-protocol.webp',
        fallback: 'assets/projects/sharelink/sharelink-protocol.png',
        fit: 'contain',
        desc: 'Bidirectional streaming protocol with ephemeral port binding, QR handshake, and WebCrypto decryption.'
      },
      {
        id: 'sl-icon',
        name: 'Production Branding',
        file: 'assets/projects/sharelink/sharelink-icon.webp',
        fallback: 'assets/projects/sharelink/sharelink-icon.png',
        fit: 'contain',
        desc: 'Official ShareLink icon branding and Android application launcher identity designed for Gen Soft Tech.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 07. AI Photo Enhancer
  // --------------------------------------------------------------------------
  {
    id: 'photo',
    title: 'AI Photo Enhancer',
    subtitle: 'Real-ESRGAN Deep Learning Image Upscaling',
    tag: 'PROJECT / 07 • DESKTOP & NEURAL NETWORKS',
    category: 'fullstack-cloud',
    device: 'phone-portrait',
    accentColor: '#38bdf8',
    badge: 'Desktop AI Studio',
    problem:
      'Traditional photo editors require expensive subscription software or send private images to remote cloud servers for enhancement. Low-resolution photographs suffer severe artifacting when scaled with standard interpolation.',
    solution:
      'Created a cross-platform desktop application powered by Real-ESRGAN and OpenCV for on-device super-resolution upscaling. Reconstructs sharp textures, edge clarity, and color balance at 2x and 4x scale without cloud dependency.',
    technicalDetails: {
      neuralEngine: 'Real-ESRGAN generative super-resolution models running through PyTorch and NCNN inference pipelines.',
      desktopClient: 'Flutter desktop application featuring smooth cross-platform rendering on Windows and macOS.',
      processingQueue: 'Background worker thread architecture enabling asynchronous batch processing of large image catalogs.',
      privacyArchitecture: '100% on-device local computation ensuring zero image uploads or external network telemetry.'
    },
    capabilities: [
      'Real-ESRGAN deep neural network inference for 2x and 4x super-resolution',
      '100% private on-device processing using local GPU/CPU hardware acceleration',
      'Batch image processing pipeline with side-by-side interactive preview',
      'Native desktop GUI built with Flutter and optimized for low memory usage'
    ],
    tech: ['Flutter Desktop', 'Python', 'Real-ESRGAN', 'PyTorch', 'OpenCV'],
    metrics: [
      { label: 'Client Framework', val: 'Flutter Desktop' },
      { label: 'AI Model', val: 'Real-ESRGAN' },
      { label: 'Upscaling', val: '2x / 4x Super-Res' },
      { label: 'Privacy', val: '100% On-Device' }
    ],
    github: 'https://github.com/gengadharan4656/ai_photo_enhancer',
    screens: [
      {
        id: 'pe-main',
        name: 'Real-ESRGAN Studio',
        file: 'assets/projects/photo-1.webp',
        fallback: 'assets/projects/photo-1.png',
        fit: 'contain',
        desc: 'Desktop interface demonstrating neural network model selection, parameter tuning, and image magnification.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 08. genEditor
  // --------------------------------------------------------------------------
  {
    id: 'geneditor',
    title: 'genEditor',
    subtitle: 'Offline Android Video Editor & Media3 Pipeline',
    tag: 'PROJECT / 08 • NATIVE ANDROID MEDIA ENGINE',
    category: 'mobile-native',
    device: 'phone-portrait',
    accentColor: '#ec4899',
    badge: 'AndroidX Media3 Editor',
    problem:
      'Mobile video editing applications frequently suffer from frame drops, slow rendering, and audio desynchronization during multi-track timeline preview. Native Android media hardware pipelines are complex to orchestrate reliably.',
    solution:
      'Built an offline Android video editor utilizing Flutter for the UI and Kotlin AndroidX Media3 with ExoPlayer for playback. Backed by an OpenGL ES 3.0 shader processing engine and an automated test suite with 35 passing unit tests.',
    technicalDetails: {
      mediaPipeline: 'Kotlin AndroidX Media3 Transformer with ExoPlayer handling smooth frame-accurate playback and trimming.',
      glShaders: 'Custom OpenGL ES 3.0 fragment shaders rendering real-time video color grading, filters, and layer transitions.',
      hardwareEncoder: 'Hardware MediaCodec accelerated H.264/HEVC encoding pipeline maximizing battery efficiency.',
      automatedTests: 'Rigorous test suite comprising 35 passing unit and integration tests across timeline mutations and exports.'
    },
    capabilities: [
      'Multi-track video and audio timeline with frame-accurate trim and split',
      'Hardware-accelerated MediaCodec video export pipeline with OpenGL shaders',
      'AndroidX Media3 transformer architecture ensuring rock-solid playback stability',
      'Automated test suite with 35 unit and integration tests verifying rendering pipelines'
    ],
    tech: ['Flutter', 'Kotlin', 'AndroidX Media3', 'OpenGL ES 3.0', 'ExoPlayer', 'JUnit Tests'],
    metrics: [
      { label: 'Media Engine', val: 'AndroidX Media3' },
      { label: 'Shader Tech', val: 'OpenGL ES 3.0' },
      { label: 'Test Suite', val: '35 Tests Passing' },
      { label: 'Encoding', val: 'MediaCodec HW' }
    ],
    github: 'https://github.com/gengadharan4656/genEditor',
    screens: [
      {
        id: 'ge-home',
        name: 'Home & Project Hub',
        file: 'assets/projects/geneditor/screenshots/geneditor-01-home.webp',
        fallback: 'assets/projects/geneditor/screenshots/geneditor-01-home.png',
        desc: 'Project workspace management, media asset browser, and video draft initialization dashboard.'
      },
      {
        id: 'ge-timeline',
        name: 'Multi-Track Timeline',
        file: 'assets/projects/geneditor/screenshots/geneditor-02-timeline.webp',
        fallback: 'assets/projects/geneditor/screenshots/geneditor-02-timeline.png',
        desc: 'Interactive multi-track video timeline with real-time waveform preview, clip trimming, and split operations.'
      },
      {
        id: 'ge-export',
        name: 'Export Settings',
        file: 'assets/projects/geneditor/screenshots/geneditor-03-export.webp',
        fallback: 'assets/projects/geneditor/screenshots/geneditor-03-export.png',
        desc: 'Hardware-accelerated MediaCodec export configuration selecting target resolution, bitrate, and FPS.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 09. Blog Application
  // --------------------------------------------------------------------------
  {
    id: 'blog',
    title: 'Blog Application',
    subtitle: 'Full-Stack Mobile & Web Publishing Platform',
    tag: 'PROJECT / 09 • FULL-STACK WEB ARCHITECTURE',
    category: 'fullstack-cloud',
    device: 'phone-portrait',
    accentColor: '#8b5cf6',
    badge: 'Full-Stack Cloud Web',
    problem:
      'Modern content publishing systems often combine bloated client bundles with complex microservices, leading to poor mobile page speed and sluggish CRUD performance on constrained networks.',
    solution:
      'Architected a lightweight full-stack publishing platform with a Flutter client and a Python Flask REST API backed by MySQL. Deployed on Railway with JWT authentication and responsive caching for instant article reading.',
    technicalDetails: {
      frontendClient: 'Flutter Web application designed for responsive cross-device layout and instant mobile typography.',
      backendAPI: 'Python Flask REST API with SQLAlchemy ORM, modular Blueprints, and JWT access token validation.',
      databaseSchema: 'Normalized MySQL database schema optimized for fast full-text article indexing and relational tags.',
      cloudDeployment: 'Containerized deployment hosted on Railway with automated environment secrets management.'
    },
    capabilities: [
      'Responsive Flutter web and mobile interface with clean typographic layout',
      'Modular Flask REST API with secure JWT token authentication and RBAC',
      'Relational MySQL database schema tuned for fast full-text article indexing',
      'Production cloud deployment on Railway with CI/CD pipeline automation'
    ],
    tech: ['Flutter Web', 'Python', 'Flask', 'MySQL', 'JWT Auth', 'Railway'],
    metrics: [
      { label: 'Client Framework', val: 'Flutter Web' },
      { label: 'API Backend', val: 'Python Flask' },
      { label: 'Database', val: 'MySQL Relational' },
      { label: 'Hosting', val: 'Railway Cloud' }
    ],
    github: 'https://github.com/gengadharan4656/blog_app',
    screens: [
      {
        id: 'ba-feed',
        name: 'Feed Dashboard',
        file: 'assets/projects/blog-1.webp',
        fallback: 'assets/projects/blog-1.png',
        fit: 'contain',
        desc: 'Article publication feed with responsive category filtering, metadata cards, and reading progress indicators.'
      },
      {
        id: 'ba-article',
        name: 'Mobile View',
        file: 'assets/projects/blog-2.webp',
        fallback: 'assets/projects/blog-2.png',
        desc: 'Mobile-optimized article reading interface with markdown rendering, author credits, and community comments.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 10. Live Bus Tracking
  // --------------------------------------------------------------------------
  {
    id: 'bus',
    title: 'Live Bus Tracking Simulation',
    subtitle: 'Real-Time Transit & Map Telemetry System',
    tag: 'PROJECT / 10 • REAL-TIME TELEMETRY & MAPS',
    category: 'mobile-native',
    device: 'phone-portrait',
    accentColor: '#0ea5e9',
    badge: 'Real-Time Telemetry',
    problem:
      'Commuters in regional transit networks lack reliable live vehicle locations, resulting in unpredictable wait times and missed connections. Heavy proprietary map SDKs consume excessive device memory and battery.',
    solution:
      'Developed a real-time transit telemetry simulator using Flutter, CustomPainter canvas rendering, and OpenStreetMap data. Simulates live GPS vehicle coordinates, dynamically calculating route ETAs and stop arrivals.',
    technicalDetails: {
      mapRendering: 'Flutter CustomPainter canvas drawing high-performance vector polyline routes over OpenStreetMap raster tiles.',
      telemetrySimulator: 'Stateful GPS coordinate interpolator simulating realistic vehicle velocity, stops, and turn angles.',
      etaEngine: 'Dynamic ETA calculation factoring remaining track distances, average speeds, and simulated dwell times.',
      lowOverhead: 'Zero proprietary SDK runtime dependencies, keeping app bundle size under 8 MB.'
    },
    capabilities: [
      'Smooth GPS vehicle movement simulation using low-overhead Canvas interpolation',
      'Live ETA calculation based on real-time distance and simulated traffic density',
      'Interactive route stop manifest with passenger count telemetry',
      'Lightweight OpenStreetMap integration eliminating expensive proprietary SDKs'
    ],
    tech: ['Flutter', 'Dart', 'OpenStreetMap', 'CustomPainter', 'GPS Telemetry'],
    metrics: [
      { label: 'Framework', val: 'Flutter Native' },
      { label: 'Mapping Tech', val: 'OpenStreetMap' },
      { label: 'Rendering', val: 'CustomPainter Canvas' },
      { label: 'Simulation', val: 'Real-Time GPS' }
    ],
    github: 'https://github.com/gengadharan4656/bus_tracking',
    screens: [
      {
        id: 'bt-map',
        name: 'Live Transit Map',
        file: 'assets/projects/bus-1.webp',
        fallback: 'assets/projects/bus-1.png',
        fit: 'contain',
        desc: 'Interactive live transit map tracking simulated bus positions along designated regional transportation corridors.'
      },
      {
        id: 'bt-detail',
        name: 'Route ETA Manifest',
        file: 'assets/projects/bus-2.webp',
        fallback: 'assets/projects/bus-2.png',
        desc: 'Detailed transit route dashboard calculating arrival estimates, upcoming stop lists, and passenger density metrics.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 11. Existing Workflow Automation
  // --------------------------------------------------------------------------
  {
    id: 'automation',
    title: 'Operations Workflow Automation',
    subtitle: 'Scheduled Communications & Email Orchestration',
    tag: 'PROJECT / 11 • WORKFLOW & INTEGRATION',
    category: 'ai-automation',
    device: 'phone-portrait',
    accentColor: '#10b981',
    badge: 'Enterprise Automation',
    problem:
      'Repetitive business communications and alert routing consume developer time and are prone to manual execution errors. Lack of structured audit logging makes tracking failed notifications difficult.',
    solution:
      'Implemented an automated operations workflow in n8n orchestrating scheduled email dispatches, webhook ingestion, and database telemetry. Features automated retry logic, error alerting, and execution audit logging.',
    technicalDetails: {
      n8nOrchestration: 'Enterprise n8n workflow with cron schedules, webhook listeners, and conditional node branch routing.',
      emailDelivery: 'Configured automated transactional and digest email dispatches with dynamic HTML templating.',
      telemetryTracking: 'PostgreSQL audit tables recording execution timestamps, payload sizes, and response status codes.',
      incidentAlerts: 'Automated error handlers dispatching instant webhook alerts upon delivery failures or exceptions.'
    },
    capabilities: [
      'Scheduled cron-triggered email dispatch workflows with dynamic templating',
      'Incoming webhook listener routing event payloads to PostgreSQL storage',
      'Deterministic error-handling nodes with automatic retry and incident alerts',
      'Audit trail logging execution timestamps, delivery status, and payload sizes'
    ],
    tech: ['n8n', 'PostgreSQL', 'Webhooks', 'REST APIs', 'Automation'],
    metrics: [
      { label: 'Platform Core', val: 'n8n Enterprise' },
      { label: 'Persistence', val: 'PostgreSQL DB' },
      { label: 'Execution', val: 'Cron Scheduled' },
      { label: 'Routing', val: 'Webhook Triggers' }
    ],
    github: 'https://github.com/gengadharan4656/n8n-workflow-automation',
    screens: [
      {
        id: 'wa-flow',
        name: 'Email Dispatch Flow',
        file: 'assets/projects/automation-1.webp',
        fallback: 'assets/projects/automation-1.png',
        fit: 'contain',
        desc: 'Visual n8n automation canvas orchestrating cron-scheduled customer email dispatches with dynamic templates.'
      },
      {
        id: 'wa-telemetry',
        name: 'Execution Telemetry',
        file: 'assets/projects/automation-2.webp',
        fallback: 'assets/projects/automation-2.png',
        fit: 'contain',
        desc: 'Deterministic node execution logic, conditional validation, and real-time error alert nodes.'
      }
    ]
  }
];


// ============================================================================
// TAXONOMY: 5 ENGINEERING CATEGORIES
// ============================================================================
const CATEGORIES = [
  { id: 'all', label: 'All Projects', count: 11 },
  { id: 'mobile-native', label: 'Mobile & Native Systems', count: 5 },
  { id: 'ai-automation', label: 'AI & Automation', count: 3 },
  { id: 'fullstack-cloud', label: 'Full-Stack & Cloud', count: 2 },
  { id: 'game-dev', label: 'Game Development', count: 1 }
];

let currentFilter = 'all';

// ============================================================================
// HELPER FORMATTERS & LINK BUILDERS
// ============================================================================
function buildMetricsStrip(metrics) {
  if (!metrics || metrics.length === 0) return '';
  return `
    <div class="project-metrics-strip">
      ${metrics
        .map(
          (m) => `
        <div class="metric-pill">
          <span class="m-val">${m.val}</span>
          <span class="m-label">${m.label}</span>
        </div>
      `
        )
        .join('')}
    </div>
  `;
}

function buildTechTags(techList, highlightTags = []) {
  if (!techList || techList.length === 0) return '';
  return `
    <div class="tech-tags">
      ${techList
        .map((t) => {
          const isHighlight = highlightTags.includes(t);
          return `<span class="${isHighlight ? 'tech-highlight' : ''}">${t}</span>`;
        })
        .join('')}
    </div>
  `;
}

function buildProjectLinks(project) {
  const links = [];
  if (project.playstore) {
    links.push(`
      <a href="${project.playstore}" target="_blank" rel="noopener" class="project-btn playstore-btn" aria-label="View ${project.title} on Google Play Store">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.61-.925V2.739c0-.362.22-.705.61-.925zM15.207 13.414l2.793-2.793c.39-.39 1.024-.39 1.414 0l1.986 1.986a1 1 0 0 1 0 1.414l-4.193 4.193-2-2zM4.613.814l10.594 10.593-2 2L2.614 2.814a1 1 0 0 1 1.999-2zM4.613 23.186l8.594-8.593 2 2-10.594 10.593a1 1 0 0 1-2-2z"/></svg>
        Play Store ↗
      </a>
    `);
  }
  if (project.live) {
    links.push(`
      <a href="${project.live}" target="_blank" rel="noopener" class="project-btn live-demo-btn" aria-label="Open Live Demo for ${project.title}">
        <span>●</span> Live Demo ↗
      </a>
    `);
  }
  if (project.github) {
    links.push(`
      <a href="${project.github}" target="_blank" rel="noopener" class="project-btn github-btn" aria-label="View Source Code on GitHub for ${project.title}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        GitHub ↗
      </a>
    `);
  }
  links.push(`
    <button class="project-btn detail-btn" data-project-id="${project.id}" aria-label="Open Full Engineering Case Study for ${project.title}">
      Case Study ⚙
    </button>
  `);
  return `<div class="project-links">${links.join('')}</div>`;
}

function getCategoryLabel(catId) {
  const match = CATEGORIES.find((c) => c.id === catId);
  return match ? match.label : catId;
}

// ============================================================================
// LIGHTBOX CONTROLLER
// ============================================================================
function openLightbox(src, alt) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt || 'Enlarged project preview';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox?.classList.contains('open')) {
    closeLightbox();
  }
});

// ============================================================================
// REUSABLE PORTRAIT SMARTPHONE SHOWCASE (FARMLINK REFERENCE STANDARD)
// ============================================================================
function renderProjectShowcase(project, index) {
  const isFarmLink = Boolean(project.isFarmLink);
  const isGangRace = project.id === 'gang-race';
  const isMemeGen = project.id === 'trendpilot';

  const screens = project.screens || [];
  const firstScreen = screens[0] || { name: project.title, desc: project.subtitle, file: '' };
  const secondScreen = screens[1] || firstScreen;
  const thirdScreen = screens[2] || secondScreen;

  // Tabs for switching screens/media
  const tabsHtml = screens.length > 1 ? `
    <div class="screen-selector-tabs" role="tablist" aria-label="${project.title} Media Tabs">
      ${screens.map((s, sIdx) => `
        <button class="screen-tab-btn ${sIdx === 0 ? 'active' : ''}" 
                data-project-id="${project.id}"
                data-screen-index="${sIdx}" 
                role="tab" 
                aria-selected="${sIdx === 0 ? 'true' : 'false'}"
                tabindex="${sIdx === 0 ? '0' : '-1'}">
          ${s.name}
        </button>
      `).join('')}
    </div>
  ` : '';

  // Left Column Custom Telemetry Widgets (Compact & Balanced)
  let customWidgetsHtml = '';
  if (isFarmLink) {
    customWidgetsHtml = `
      <div class="farmlink-compact-telemetry">
        <div class="market-intel-strip">
          <div class="intel-item demand">
            <div class="intel-top">
              <span class="city">Chennai Mandi</span>
              <span class="status-badge high-demand">High Demand</span>
            </div>
            <div class="intel-detail">Supply: <strong>0 kg</strong> · Demand: <strong>714 kg</strong></div>
          </div>
          <div class="intel-item supply">
            <div class="intel-top">
              <span class="city">Madurai Farmer</span>
              <span class="status-badge high-supply">High Supply</span>
            </div>
            <div class="intel-detail">Supply: <strong>607 kg</strong> · Demand: <strong>0 kg</strong></div>
          </div>
        </div>
        <div class="pricing-summary-pill">
          <div class="pricing-badge">
            <span class="pricing-val">₹38.00 / kg</span>
            <span class="pricing-status">Baseline (High Conf.)</span>
          </div>
          <div class="pricing-breakdown">
            <span>Market ₹30</span>
            <span>+Qual ₹5</span>
            <span>+Dem ₹4</span>
            <span>-Trans ₹3</span>
          </div>
        </div>
      </div>
    `;
  } else if (isGangRace) {
    customWidgetsHtml = `
      <div class="gaming-telemetry-compact">
        <div class="telemetry-header">
          <span>Engine &amp; Socket Telemetry</span>
          <span class="badge-pill">60 FPS Native</span>
        </div>
        <div class="telemetry-grid">
          <div class="telemetry-item">
            <strong>C++ NDK Engine</strong>
            <small>ARM64 native activity</small>
          </div>
          <div class="telemetry-item">
            <strong>6-Player Wi-Fi Sockets</strong>
            <small>Zero-config ad-hoc LAN</small>
          </div>
          <div class="telemetry-item">
            <strong>OpenGL ES Pipeline</strong>
            <small>Dynamic lighting &amp; particles</small>
          </div>
          <div class="telemetry-item">
            <strong>Squirrel Scripting</strong>
            <small>Game loops &amp; HUD state</small>
          </div>
        </div>
      </div>
    `;
  } else if (isMemeGen) {
    customWidgetsHtml = `
      <div class="agent-telemetry-compact">
        <div class="telemetry-header">
          <span>Autonomous Agent Pipeline</span>
          <span class="badge-pill" style="color:#06b6d4;background:rgba(6,182,212,0.15);border-color:rgba(6,182,212,0.3);">n8n + Gemini</span>
        </div>
        <div class="agent-pipeline-steps">
          <span class="step-chip">01 Trend Scrape</span>
          <span class="step-arrow">→</span>
          <span class="step-chip">02 Gemini LLM</span>
          <span class="step-arrow">→</span>
          <span class="step-chip">03 Python PIL</span>
          <span class="step-arrow">→</span>
          <span class="step-chip highlight">04 Human Verify</span>
        </div>
      </div>
    `;
  }

  // Left Column HTML (Concise, Balanced, 2-3 sentences each)
  const leftContentHtml = `
    <div class="left-content">
      <div class="flagship-topline">
        <span class="project-index">PROJECT / ${String(index + 1).padStart(2, '0')}</span>
        ${project.badge ? `<span class="flagship-badge">${project.badge}</span>` : ''}
      </div>
      <p class="project-tag" style="--tag-accent: ${project.accentColor};">${project.tag}</p>
      <h3 class="flagship-title">${project.title}</h3>
      <p class="project-subtitle" style="color: ${project.accentColor};">${project.subtitle}</p>
      
      ${buildMetricsStrip(project.metrics)}

      <div class="project-details">
        <div class="content-block">
          <h4>The Challenge</h4>
          <p>${project.problem}</p>
        </div>
        <div class="content-block">
          <h4>The Architecture &amp; Solution</h4>
          <p>${project.solution}</p>
        </div>

        ${customWidgetsHtml}

        <div class="content-block">
          <h4>Key Implemented Capabilities</h4>
          <ul class="capabilities-list">
            ${(project.capabilities || []).map((c) => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div class="content-block">
          <h4>Engineering Stack</h4>
          ${buildTechTags(project.tech, ['Flutter', 'Dart', 'Kotlin', 'AndroidX Media3', 'C++', 'n8n', 'FastAPI', 'PostgreSQL', 'OpenGL ES 3.0', 'AES-256-GCM', 'OpenHands AI', 'Google Gemini LLM'])}
        </div>

        ${buildProjectLinks(project)}
      </div>
    </div>
  `;

  // Right Column Media Viewport HTML (Portrait Smartphone Presentation with Satellites)
  // First screen mount content: video or image
  let mountContent = '';
  if (firstScreen.type === 'video') {
    mountContent = `
      <video id="player-${project.id}" 
             class="phone-screen-video" 
             controls 
             playsinline 
             preload="metadata" 
             poster="${firstScreen.poster || ''}"
             aria-label="${project.title} - ${firstScreen.name}">
        <source src="${firstScreen.file}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    const isContain = firstScreen.fit === 'contain';
    mountContent = `
      <img class="phone-screen-img screen-showcase-img ${isContain ? 'contain-fit' : ''}"
           src="${firstScreen.fallback || firstScreen.file}"
           alt="${project.title} - ${firstScreen.name}: ${firstScreen.desc}"
           loading="lazy" />
    `;
  }

  // Left & Right satellite setup
  const hasMultipleScreens = screens.length > 1;
  const leftScreenObj = screens.length >= 3 ? screens[screens.length - 1] : secondScreen;
  const rightScreenObj = screens.length >= 2 ? secondScreen : firstScreen;
  const leftIdx = screens.length >= 3 ? screens.length - 1 : 1;
  const rightIdx = screens.length >= 2 ? 1 : 0;

  const satellitesHtml = hasMultipleScreens ? `
    <div class="device-satellite device-satellite-left" data-target-screen="${leftIdx}" title="Click to view ${leftScreenObj.name}">
      <img src="${leftScreenObj.fallback || leftScreenObj.file}" class="${leftScreenObj.fit === 'contain' ? 'contain-fit' : ''}" alt="${leftScreenObj.name} preview" loading="lazy" />
      <span class="satellite-tag">${leftScreenObj.name}</span>
    </div>
    <div class="device-phone-primary">
      <div class="phone-camera-notch" aria-hidden="true"></div>
      <div class="phone-screen-mount" id="screen-mount-${project.id}">
        ${mountContent}
      </div>
    </div>
    <div class="device-satellite device-satellite-right" data-target-screen="${rightIdx}" title="Click to view ${rightScreenObj.name}">
      <img src="${rightScreenObj.fallback || rightScreenObj.file}" class="${rightScreenObj.fit === 'contain' ? 'contain-fit' : ''}" alt="${rightScreenObj.name} preview" loading="lazy" />
      <span class="satellite-tag">${rightScreenObj.name}</span>
    </div>
  ` : `
    <div class="device-phone-primary">
      <div class="phone-camera-notch" aria-hidden="true"></div>
      <div class="phone-screen-mount" id="screen-mount-${project.id}">
        ${mountContent}
      </div>
    </div>
  `;

  const rightMediaHtml = `
    <div class="project-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
      ${tabsHtml}
      
      <div class="device-stage-viewport viewport-phone" id="panel-${project.id}">
        <div class="device-ambient-glow" aria-hidden="true"></div>
        ${satellitesHtml}
      </div>
      
      <div class="stage-caption" id="caption-${project.id}">
        <strong class="screen-caption-title">${firstScreen.name}</strong>: 
        <span class="screen-caption-desc">${firstScreen.desc}</span>
      </div>
    </div>
  `;

  return `
    <article class="project-slide reveal" id="project-${project.id}" data-category="${project.category}">
      <div class="container">
        <div class="panel project-section ${isFarmLink ? 'farmlink-panel' : ''}">
          ${leftContentHtml}
          ${rightMediaHtml}
        </div>
      </div>
    </article>
  `;
}

// ============================================================================
// INTERACTIVE MEDIA SWITCHING LOGIC (SEAMLESS IN-FRAME SWITCHER)
// ============================================================================
function switchProjectScreen(projectId, screenIndex) {
  const project = projects.find((p) => p.id === projectId);
  if (!project || !project.screens || !project.screens[screenIndex]) return;

  const screens = project.screens;
  const screen = screens[screenIndex];
  const stage = document.querySelector(`.project-device-stage[data-project-id="${projectId}"]`);
  if (!stage) return;

  // 1. Update tab active states
  const tabs = stage.querySelectorAll('.screen-tab-btn');
  tabs.forEach((tab, idx) => {
    const isActive = idx === screenIndex;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
    tab.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  // 2. Central phone screen mount
  const mount = stage.querySelector('.phone-screen-mount');
  if (mount) {
    mount.style.opacity = '0.25';
    mount.style.transform = 'scale(0.98)';
    setTimeout(() => {
      if (screen.type === 'video') {
        mount.innerHTML = `
          <video id="player-${projectId}" 
                 class="phone-screen-video" 
                 controls 
                 playsinline 
                 preload="metadata" 
                 poster="${screen.poster || ''}"
                 aria-label="${project.title} - ${screen.name}">
            <source src="${screen.file}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      } else {
        const isContain = screen.fit === 'contain';
        mount.innerHTML = `
          <img class="phone-screen-img screen-showcase-img ${isContain ? 'contain-fit' : ''}"
               src="${screen.fallback || screen.file}" 
               alt="${project.title} - ${screen.name}: ${screen.desc}" 
               loading="lazy" />
        `;
        const newImg = mount.querySelector('img');
        if (newImg) {
          newImg.addEventListener('click', () => openLightbox(newImg.src, newImg.alt));
        }
      }
      mount.style.opacity = '1';
      mount.style.transform = 'scale(1)';
    }, 150);
  }

  // 3. Dynamic Satellites Update (Left = prev, Right = next)
  const satellites = stage.querySelectorAll('.device-satellite');
  if (satellites.length >= 2 && screens.length >= 2) {
    const N = screens.length;
    const leftIdx = (screenIndex - 1 + N) % N;
    const rightIdx = (screenIndex + 1) % N;
    const leftSat = stage.querySelector('.device-satellite-left');
    const rightSat = stage.querySelector('.device-satellite-right');

    if (leftSat && screens[leftIdx]) {
      leftSat.dataset.targetScreen = leftIdx;
      leftSat.title = `Click to view ${screens[leftIdx].name}`;
      const leftImg = leftSat.querySelector('img');
      const leftTag = leftSat.querySelector('.satellite-tag');
      const isContain = screens[leftIdx].fit === 'contain';
      if (leftImg) {
        leftImg.src = screens[leftIdx].fallback || screens[leftIdx].file;
        leftImg.className = isContain ? 'contain-fit' : '';
      }
      if (leftTag) leftTag.textContent = screens[leftIdx].name;
    }

    if (rightSat && screens[rightIdx]) {
      rightSat.dataset.targetScreen = rightIdx;
      rightSat.title = `Click to view ${screens[rightIdx].name}`;
      const rightImg = rightSat.querySelector('img');
      const rightTag = rightSat.querySelector('.satellite-tag');
      const isContain = screens[rightIdx].fit === 'contain';
      if (rightImg) {
        rightImg.src = screens[rightIdx].fallback || screens[rightIdx].file;
        rightImg.className = isContain ? 'contain-fit' : '';
      }
      if (rightTag) rightTag.textContent = screens[rightIdx].name;
    }
  }

  // 4. Update descriptive captions
  const titleElem = stage.querySelector('.screen-caption-title');
  const descElem = stage.querySelector('.screen-caption-desc');
  if (titleElem) titleElem.textContent = screen.name;
  if (descElem) descElem.textContent = screen.desc;
}

// ============================================================================
// EVENT LISTENERS INITIALIZATION
// ============================================================================
function initShowcaseEventListeners() {
  // Tabs click
  document.querySelectorAll('.screen-tab-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.dataset.projectId;
      const sIdx = parseInt(btn.dataset.screenIndex, 10);
      switchProjectScreen(pId, sIdx);
    });
  });

  // Satellites click
  document.querySelectorAll('.device-satellite').forEach((sat) => {
    sat.addEventListener('click', (e) => {
      const stage = sat.closest('.project-device-stage');
      const pId = stage?.dataset.projectId;
      const targetIdx = parseInt(sat.dataset.targetScreen, 10);
      if (pId && !isNaN(targetIdx)) {
        switchProjectScreen(pId, targetIdx);
      }
    });
  });

  // Lightbox for main screen images
  document.querySelectorAll('.phone-screen-img').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  // Case study modal triggers
  document.querySelectorAll('.detail-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pId = btn.dataset.projectId;
      const project = projects.find((p) => p.id === pId);
      if (project) openProjectModal(project);
    });
  });
}

// ============================================================================
// ENGINEERING CASE STUDY MODAL CONTROLLER
// ============================================================================
function openProjectModal(project) {
  if (!projectModal || !modalContentMount) return;

  const techRows = project.technicalDetails
    ? Object.entries(project.technicalDetails)
        .map(
          ([key, val]) => `
      <div class="tech-detail-box">
        <strong>${key.replace(/([A-Z])/g, ' $1').toUpperCase()}</strong>
        <p>${val}</p>
      </div>
    `
        )
        .join('')
    : '';

  const screenshotsHtml = (project.screens || [])
    .map(
      (s) => `
    <div class="modal-screen-item" onclick="openLightbox('${s.fallback || s.file}', '${project.title} - ${s.name}')">
      <img src="${s.fallback || s.file}" alt="${s.name}" loading="lazy" />
      <div class="modal-screen-caption">
        <strong>${s.name}</strong>
        <small>${s.desc}</small>
      </div>
    </div>
  `
    )
    .join('');

  modalContentMount.innerHTML = `
    <div class="modal-hero">
      <span class="modal-tag">${project.tag}</span>
      <h2>${project.title}</h2>
      <p class="modal-subtitle">${project.subtitle}</p>
      ${buildMetricsStrip(project.metrics)}
    </div>

    <div class="modal-section">
      <h3>The Challenge &amp; Engineering Problem</h3>
      <p>${project.problem}</p>
    </div>

    <div class="modal-section">
      <h3>Architecture &amp; System Solution</h3>
      <p>${project.solution}</p>
    </div>

    ${
      techRows
        ? `
      <div class="modal-section">
        <h3>Technical Deep-Dive &amp; Architecture Decisions</h3>
        <div class="tech-details-grid">
          ${techRows}
        </div>
      </div>
    `
        : ''
    }

    <div class="modal-section">
      <h3>Production Capabilities</h3>
      <ul class="modal-list">
        ${(project.capabilities || []).map((c) => `<li>${c}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h3>Core Technology Stack</h3>
      ${buildTechTags(project.tech, ['Flutter', 'Dart', 'Kotlin', 'AndroidX Media3', 'C++', 'n8n', 'FastAPI', 'PostgreSQL', 'OpenGL ES 3.0', 'AES-256-GCM', 'OpenHands AI', 'Google Gemini LLM'])}
    </div>

    ${
      screenshotsHtml
        ? `
      <div class="modal-section">
        <h3>Verified Interface &amp; Architecture Evidence</h3>
        <div class="modal-screenshots-grid">
          ${screenshotsHtml}
        </div>
      </div>
    `
        : ''
    }

    <div class="modal-footer-actions">
      ${buildProjectLinks(project)}
    </div>
  `;

  projectModal.classList.add('open');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove('open');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalCloseBtn?.addEventListener('click', closeProjectModal);
projectModal?.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-modal-backdrop')) closeProjectModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && projectModal?.classList.contains('open')) {
    closeProjectModal();
  }
});

// ============================================================================
// FILTERING CONTROLLER (PRESERVES STRICT ORDER)
// ============================================================================
function renderFilters() {
  if (!filterBarContainer) return;
  filterBarContainer.innerHTML = CATEGORIES.map(
    (cat) => `
    <button class="filter-pill ${cat.id === currentFilter ? 'active' : ''}" 
            data-filter="${cat.id}"
            role="tab"
            aria-selected="${cat.id === currentFilter ? 'true' : 'false'}">
      ${cat.label} <span class="filter-count">${cat.count}</span>
    </button>
  `
  ).join('');

  filterBarContainer.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      applyFilter(filter);
    });
  });
}

function applyFilter(filter) {
  currentFilter = filter;
  filterBarContainer?.querySelectorAll('.filter-pill').forEach((btn) => {
    const isActive = btn.dataset.filter === filter;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });

  const projectArticles = document.querySelectorAll('.project-slide');
  projectArticles.forEach((article) => {
    const cat = article.dataset.category;
    const shouldShow = filter === 'all' || cat === filter;
    article.style.display = shouldShow ? '' : 'none';
  });
}

// ============================================================================
// MASTER INITIALIZER
// ============================================================================
function renderAllProjects() {
  if (projectShowcaseContainer) {
    projectShowcaseContainer.innerHTML = projects
      .map((project, idx) => renderProjectShowcase(project, idx))
      .join('');
  }

  renderFilters();
  initShowcaseEventListeners();
  observeRevealElements();
}

// ============================================================================
// SCROLL, REVEAL, & INTERSECTION OBSERVERS
// ============================================================================
function updateOnScroll() {
  const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = maxHeight > 0 ? (window.scrollY / maxHeight) * 100 : 0;
  if (progress) progress.style.width = `${percentage}%`;
  if (toTop) toTop.classList.toggle('show', window.scrollY > 500);
  if (header) header.classList.toggle('scrolled', window.scrollY > 20);
}

window.addEventListener('scroll', updateOnScroll, { passive: true });
toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

function observeRevealElements() {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px' });

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
}

// Active Nav Link Observer
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-30% 0px -50%', threshold: 0 });

sections.forEach((sec) => sectionObserver.observe(sec));

// Dynamic footer copyright year
const yearElem = document.getElementById('year');
if (yearElem) yearElem.textContent = new Date().getFullYear();

// Initialize on DOM load
renderAllProjects();
updateOnScroll();
