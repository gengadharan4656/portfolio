/**
 * Gengadharan S — Master Developer Portfolio Engine
 * Multi-Screenshot Showcases (Music Player 3D Carousel Standard),
 * Strict 11-Project Sequential Architecture, Unified Media Viewports,
 * Hero Avatar Video Controller, and Full-Width Two-Column Showcases.
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
      'Users need uninterrupted local music playback in poor network conditions without background audio stutters, battery-draining polling, or reliance on streaming subscriptions.',
    solution:
      'Developed a Flutter offline music player app tuned for stable local media playback, background audio lifecycle execution, and fast indexed track search on Android. Implemented with Riverpod reactive state management and foreground audio services.',
    technicalDetails: {
      audioLifecycle:
        'Integrated Android Audio Service running in an isolated foreground process, ensuring uninterrupted background audio playback and lock-screen notification media controls.',
      stateManagement:
        'Built with Flutter Riverpod for declarative, reactive state flow across track queues, playlist mutations, and playback duration progress bars.',
      storageIndexing:
        'Local storage-aware media scanning extracting ID3 tags, album art bitmaps, artist taxonomy, and track duration with zero UI stutter.',
      releaseHygiene:
        'Optimized for Android SDK release builds, signed with production keystore, and deployed directly to the Google Play Store.'
    },
    capabilities: [
      'Background audio playback service continuing across Android lifecycle states',
      'Local storage-aware metadata indexing and fast real-time track search',
      'Dynamic user playlists, favorites collection, and artist album categorization',
      'Smooth 60 FPS media library scrolling with low memory footprint',
      'Interactive notification and lock screen playback controls'
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
        desc: 'Local audio indexing with real-time metadata rendering, album categories, and instant search.'
      },
      {
        id: 'music-now',
        name: 'Now Playing',
        file: 'assets/projects/music-2.webp',
        fallback: 'assets/projects/music-2.png',
        desc: 'Playback controls, background service progression, and audio seek waveform slider.'
      },
      {
        id: 'music-play',
        name: 'Playlists',
        file: 'assets/projects/music-3.webp',
        fallback: 'assets/projects/music-3.png',
        desc: 'Custom playlist management, favorite tracks collection, and artist albums.'
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
    tag: 'PROJECT / 02 • AI AGRITECH ECOSYSTEM',
    category: 'mobile-native',
    isFarmLink: true,
    device: 'phone-portrait',
    accentColor: '#22c55e',
    badge: 'Regional Market Intelligence',
    problem:
      'Fragmented agricultural supply chains, speculative intermediaries, and localized information asymmetry prevent smallholder farmers from pricing crops accurately and accessing high-demand regional buyer markets.',
    solution:
      'Architected FarmLink as an agricultural intelligence marketplace that directly connects farmer supply with wholesale buyer demand, providing district-level supply-demand telemetry, dynamic AI pricing decision support, crop health diagnosis, and multilingual Tamil conversational assistance.',
    technicalDetails: {
      architecture:
        'Flutter mobile client communicating with high-performance FastAPI asynchronous backend; PostgreSQL persistence layer with SQLAlchemy ORMs for normalized catalog indexing.',
      aiPricing:
        'Context-aware dynamic pricing engine analyzing wholesale mandis rates, seasonal yield indicators, transit overhead, and local buyer density to recommend profitable price bounds.',
      multilingual:
        'Domain-specific agricultural AI copilot (Navina Vivasayi AI) supporting native Tamil voice and text conversational queries for localized crop disease treatment.',
      fulfillment:
        'End-to-end transactional order workflow managing lifecycle states across Pending, Accepted, and Completed dispatch stages.'
    },
    capabilities: [
      'District-level market intelligence (real-time supply/demand signals between Chennai and Madurai)',
      'AI Dynamic Pricing engine with transparent factor breakdown (Quality, Demand, Weather, Transport)',
      'Direct buyer catalog and farmer crop registration workflows',
      'Multilingual conversational assistant (Navina Vivasayi AI) with disease diagnosis',
      'End-to-end fulfillment coordination: Pending, Accepted, Completed orders'
    ],
    tech: ['Flutter', 'Dart', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'REST APIs', 'AI Integration'],
    metrics: [
      { label: 'Backend', val: 'FastAPI Async' },
      { label: 'Database', val: 'PostgreSQL' },
      { label: 'Pricing Engine', val: 'Context-Aware' },
      { label: 'Languages', val: 'English + Tamil' }
    ],
    screens: [
      { id: 'dashboard', name: 'Dashboard', file: 'assets/projects/farmlink-dashboard.webp', fallback: 'assets/projects/farmlink-dashboard.png', desc: 'District Supply & Demand Intelligence Overview (Chennai Mandi vs Madurai Farmer)' },
      { id: 'marketplace', name: 'Marketplace', file: 'assets/projects/farmlink-marketplace.webp', fallback: 'assets/projects/farmlink-marketplace.png', desc: 'Buyer Catalog & Farmer Crop Listings' },
      { id: 'pricing', name: 'AI Pricing', file: 'assets/projects/farmlink-pricing.webp', fallback: 'assets/projects/farmlink-pricing.png', desc: 'Context-Aware Dynamic Pricing Engine & Crop Registration' },
      { id: 'assistant', name: 'Navina Vivasayi AI', file: 'assets/projects/farmlink-ai.webp', fallback: 'assets/projects/farmlink-ai.png', desc: 'Multilingual Farming Copilot & Disease Diagnosis' },
      { id: 'orders', name: 'Orders', file: 'assets/projects/farmlink-orders.webp', fallback: 'assets/projects/farmlink-orders.png', desc: 'Fulfillment Tracking: Pending, Accepted, Completed' }
    ]
  },
  // --------------------------------------------------------------------------
  // 03. TrendPilot AI – Social Media Meme Generator
  // --------------------------------------------------------------------------
  {
    id: 'trendpilot',
    title: 'TrendPilot AI',
    subtitle: 'Autonomous Meme Generator & Trend Monitoring Agent',
    tag: 'PROJECT / 03 • AI AGENTS & N8N ORCHESTRATION',
    category: 'ai-automation',
    device: 'desktop-landscape',
    accentColor: '#06b6d4',
    badge: 'Multi-Stage n8n Pipeline',
    problem:
      'Digital content creators and regional brands lose hours manually scanning social streams, brainstorming culturally relevant captions, finding templates, and formatting images across disparate publishing channels.',
    solution:
      'Engineered TrendPilot AI, an end-to-end autonomous content generation agent orchestrating trend discovery, LLM-driven prompt crafting, meme image generation, and persistent brand memory storage using n8n, Python, and PostgreSQL. Tailored specifically for Indian and Tamil Nadu regional demographics, supporting witty Tanglish and English relatable humor.',
    technicalDetails: {
      problemStatement:
        'Digital content creators and regional brands spend excessive manual hours monitoring social media streams, brainstorming witty captions, finding templates, and formatting images across fragmented channels.',
      proposedSolution:
        'TrendPilot AI autonomously discovers viral trends, analyzes humor dynamics, crafts culturally relatable captions in Tanglish and English, and produces high-resolution branded creatives via structured automation.',
      workflowArchitecture:
        'Orchestrated through multi-stage n8n workflows: WF01 handles trend discovery and template analysis; WF03 executes scheduled generation cycles (10:30 AM, 2:30 PM, 6:30 PM IST) and rendering verification.',
      trendProcessing:
        'Ingests viral topics from social feeds and news webhooks; passes data to Google Gemini LLM with custom prompt guidelines to extract humor angles, sarcasm, and cultural references.',
      memeGeneration:
        'Python rendering engine calculates dynamic text layout, typography metrics, and watermark branding, compositing final 1080x1080 social media graphics ready for review.',
      databaseIntegration:
        'PostgreSQL database maintains normalized tables for active trend candidates, scored prompts, generated asset metadata, engagement logs, and template registries.',
      brandMemory:
        'Persistent brand guidelines database ensures jokes align with tone, avoid prohibited terminology, maintain consistent font styling, and incorporate Gen Soft Tech branding watermarks.',
      humanApproval:
        'Deliberate human-in-the-loop verification node in n8n where generated drafts are previewed and approved before queueing for distribution, guaranteeing quality.',
      engineeringDecisions:
        'Selected n8n for visual, auditable orchestration; Python for deterministic image layout; and PostgreSQL for robust relational indexing. (Automatic Instagram publishing intentionally omitted until API verification).'
    },
    capabilities: [
      'Automated multi-stage workflow orchestration in n8n with scheduled execution timers',
      'Contextual trend analysis using Google Gemini LLM API with custom JavaScript output parsers',
      'PostgreSQL persistent storage for brand voice memory, trend history, and draft staging',
      'Integrated Python rendering pipeline generating branded 1080x1080 social media graphics',
      'Human-in-the-loop review and approval node ensuring verified content quality'
    ],
    tech: ['n8n', 'Python', 'PostgreSQL', 'JavaScript', 'LLM Integration', 'REST APIs'],
    metrics: [
      { label: 'Orchestrator', val: 'n8n Workflow Engine' },
      { label: 'Storage', val: 'PostgreSQL Relational' },
      { label: 'Schedules', val: '3x Daily Automated' },
      { label: 'Tone', val: 'Tanglish & English' }
    ],
    screens: [
      {
        id: 'wf-template',
        name: 'Workflow 1: Analysis',
        file: 'assets/projects/trendpilot/workflow/trendpilot-wf-template.webp',
        fallback: 'assets/projects/trendpilot/workflow/trendpilot-wf-template.png',
        desc: 'n8n workflow pipeline reading trend files, querying Google Gemini LLM API, executing JavaScript parsers, and querying PostgreSQL.'
      },
      {
        id: 'wf-render',
        name: 'Workflow 2: Generation',
        file: 'assets/projects/trendpilot/workflow/trendpilot-wf-render.webp',
        fallback: 'assets/projects/trendpilot/workflow/trendpilot-wf-render.png',
        desc: 'WF03 scheduled generation pipeline (10:30 AM, 2:30 PM, 6:30 PM IST), draft selection, Python rendering endpoint verification, and human approval node.'
      },
      {
        id: 'meme-rcb',
        name: 'Meme: Cricket / IPL',
        file: 'assets/projects/trendpilot/memes/trendpilot-meme-rcb.webp',
        fallback: 'assets/projects/trendpilot/memes/trendpilot-meme-rcb.png',
        desc: 'Context-aware Tanglish cricket meme generated from live IPL trend candidate data with Gen Soft Tech branding watermark.'
      },
      {
        id: 'meme-deploy',
        name: 'Meme: Developer Humor',
        file: 'assets/projects/trendpilot/memes/trendpilot-meme-deploy.webp',
        fallback: 'assets/projects/trendpilot/memes/trendpilot-meme-deploy.png',
        desc: 'Relatable client deployment humor automatically composed from software engineering prompt templates.'
      },
      {
        id: 'dash-cricket',
        name: 'Telemetry: Ingestion',
        file: 'assets/projects/trendpilot/dashboard/trendpilot-dash-cricket.webp',
        fallback: 'assets/projects/trendpilot/dashboard/trendpilot-dash-cricket.png',
        desc: 'Tanglish content telemetry dashboard displaying post metadata and hashtag taxonomy (#TamilComedy, #Cricket).'
      },
      {
        id: 'dash-ramayana',
        name: 'Telemetry: Trend Tracker',
        file: 'assets/projects/trendpilot/dashboard/trendpilot-dash-ramayana.webp',
        fallback: 'assets/projects/trendpilot/dashboard/trendpilot-dash-ramayana.png',
        desc: 'Real-time cinema and social media trend tracker logging audience sentiment (#Ramayana, #Trend).'
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 04. GaNg RaCe – Racing Game
  // --------------------------------------------------------------------------
  {
    id: 'gang-race',
    title: 'GaNg RaCe',
    subtitle: '3D Kart Racing with 6-Player Local Wi-Fi Multiplayer',
    tag: 'PROJECT / 04 • C++ & ANDROID NDK GRAPHICS',
    category: 'game-dev',
    device: 'phone-landscape',
    accentColor: '#f59e0b',
    badge: '6-Player Local Sockets',
    problem:
      'Most mobile multiplayer racing games enforce heavy microtransactions, invasive always-online DRM, or external cloud logins that fail in low-connectivity environments and classroom/campus local networks.',
    solution:
      'Ported and customized a C++ 3D racing game engine (based on the SuperTuxKart engine) for Android using CMake and the Android NDK. Designed a distinctive custom gaming identity ("GaNg RaCe"), built responsive mobile touch HUD controls, and implemented ad-hoc zero-configuration 6-player local Wi-Fi and mobile hotspot multiplayer networking without requiring cloud servers.',
    technicalDetails: {
      gameOverview:
        '3D arcade kart racing title featuring offline Grand Prix, Battle Mode, custom vehicle handling, and ad-hoc 6-player local Wi-Fi multiplayer engineered for Android.',
      engineFoundation:
        'Built upon the open-source C++ SuperTuxKart engine foundation. Re-architected with custom visual branding ("GaNg RaCe"), mobile touch controls, and customized vehicle assets.',
      cppArchitecture:
        'Modular C++ systems architecture separating track physics simulation, spatial audio, AI opponent pathfinding, collision detection, and rendering loops.',
      squirrelScripting:
        'Embedded Squirrel scripting engine bridges high-level game logic, race rules, menu state transitions, and UI event handling to compiled C++ routines.',
      openglRendering:
        'OpenGL ES 3D rendering pipeline optimized for mobile GPUs, featuring dynamic track illumination, particle drift effects, mipmapped textures, and smooth 60 FPS frame rates.',
      androidNdkIntegration:
        'Direct Android NDK native activity integration using JNI bindings for touch screen event dispatching, sensor telemetry, and audio buffer callbacks.',
      buildSystem:
        'Cross-platform CMake build configuration integrated with Gradle and Android NDK toolchain targeting ARM64-v8a and armeabi-v7a application binaries.',
      offlineGameplay:
        '100% offline-first architecture allowing full access to Single Race, Grand Prix championships, Time Trials, and Battle Arenas without internet connection.',
      localWifiMultiplayer:
        'Zero-configuration ad-hoc local Wi-Fi hotspot and LAN multiplayer networking via custom UDP/TCP socket broadcasting, enabling instant 6-player room discovery and low-latency racing.',
      challengesAndRoadmap:
        'Solved Android-specific challenges including touch HUD latency, low-power GPU thermal throttling, and local broadcast socket drops. Roadmap distinguishes verified completed local multiplayer from future online lobbies.'
    },
    capabilities: [
      '6-Player Cross-Platform Local Wi-Fi and Hotspot Multiplayer racing',
      'Zero-configuration ad-hoc local server discovery and room hosting',
      'Custom branded UI and touch-optimized steering and acceleration HUD',
      'Full offline Grand Prix, Single Race, and Battle Mode support',
      'Character and kart selection garage with customizable attributes'
    ],
    tech: ['C++', 'Squirrel', 'OpenGL', 'CMake', 'Android NDK', 'Gradle', 'Android Sockets'],
    metrics: [
      { label: 'Architecture', val: 'C++ Native NDK' },
      { label: 'Graphics API', val: 'OpenGL ES' },
      { label: 'Multiplayer', val: '6P Local Wi-Fi' },
      { label: 'Scripting', val: 'Squirrel Engine' }
    ],
    video: {
      file: 'assets/projects/gang-race/video/gang-race-gameplay.mp4',
      poster: 'assets/projects/gang-race/video/gang-race-poster.webp',
      fallbackPoster: 'assets/projects/gang-race/video/gang-race-poster.jpg',
      title: 'GaNg RaCe 60 FPS Android Gameplay & Drift Demonstration'
    },
    screens: [
      {
        id: 'screen-video',
        name: '▶ Gameplay Video',
        isVideo: true,
        desc: 'Real-time 60 FPS Android gameplay footage showing 3D drift physics, Android NDK performance, and local Wi-Fi sync.'
      },
      {
        id: 'screen-menu',
        name: '6P Multiplayer Hub',
        file: 'assets/projects/gang-race/branding/gang-race-01-menu.webp',
        fallback: 'assets/projects/gang-race/branding/gang-race-01-menu.png',
        desc: 'Custom game interface with Quick Race, 6-Player Cross-Platform Wi-Fi & Hotspot Multiplayer, and Garage.'
      },
      {
        id: 'screen-karts',
        name: 'Kart Customization Garage',
        file: 'assets/projects/gang-race/branding/gang-race-02-karts.webp',
        fallback: 'assets/projects/gang-race/branding/gang-race-02-karts.jpg',
        desc: 'Character and kart selection menu with customized vehicle textures and driver handling attributes.'
      },
      {
        id: 'screen-network',
        name: 'Local Sockets Discovery',
        file: 'assets/projects/gang-race/gameplay/gang-race-03-network.webp',
        fallback: 'assets/projects/gang-race/gameplay/gang-race-03-network.jpg',
        desc: 'Zero-configuration local Wi-Fi hotspot socket server discovery screen for instant 6-player ad-hoc multiplayer.'
      },
      {
        id: 'screen-drift',
        name: 'Mountain Drift Track',
        file: 'assets/projects/gang-race/gameplay/gang-race-04-drift.webp',
        fallback: 'assets/projects/gang-race/gameplay/gang-race-04-drift.png',
        desc: 'In-engine action snapshot of the Mountain Drift track showcasing OpenGL lighting and drift boost physics.'
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
    tag: 'PROJECT / 05 • AUTONOMOUS TERMINAL AGENT',
    category: 'ai-automation',
    device: 'terminal',
    accentColor: '#b8f34a',
    badge: '54+ Domain Skills',
    problem:
      'Farmers, researchers, and technical agriculturalists need rapid terminal-based guidance and automated cultivation reports without navigating slow web portals.',
    solution:
      'Command-line assistant built with OpenHands AI and Python providing intelligent natural language farming guidance, crop diagnosis, and cultivation report generation directly from the terminal.',
    technicalDetails: {
      agentArchitecture:
        'Built on OpenHands AI autonomous agent framework, loading 54+ specialized agricultural tools, weather queries, and soil management skills.',
      promptEngineering:
        'Structured context prompts ensuring deterministic crop planting schedules, irrigation volumes, and organic pest remedy recommendations.',
      terminalCli:
        'Rich terminal formatting and command-line argument parser designed for rapid interactive execution and file report export.'
    },
    capabilities: [
      'Natural language command execution directly in terminal workspace',
      '54+ integrated agricultural domain skills and tools',
      'AI-generated cultivation guides and summer irrigation schedules',
      'Extensible modular architecture supporting future agent plugins'
    ],
    tech: ['Python', 'OpenHands AI', 'LLM', 'CLI', 'Prompt Engineering'],
    metrics: [
      { label: 'Agent Core', val: 'OpenHands AI' },
      { label: 'Domain Skills', val: '54+ Integrated' },
      { label: 'Interface', val: 'Interactive Terminal' },
      { label: 'Language', val: 'Python 3' }
    ],
    screens: [
      {
        id: 'farmgen-term',
        name: 'Terminal Interface',
        file: 'assets/projects/farmgen-1.webp',
        fallback: 'assets/projects/farmgen-1.png',
        desc: 'FarmGen AI command-line assistant initialized with 54+ domain-specific skills and tools.'
      },
      {
        id: 'farmgen-query',
        name: 'Farming Query',
        file: 'assets/projects/farmgen-2.webp',
        fallback: 'assets/projects/farmgen-2.png',
        desc: 'Natural language summer irrigation query execution and diagnostic tool selection.'
      },
      {
        id: 'farmgen-res',
        name: 'Cultivation Report',
        file: 'assets/projects/farmgen-3.webp',
        fallback: 'assets/projects/farmgen-3.png',
        desc: 'Structured crop planting methods, irrigation volumes, and diagnostic guides output.'
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 06. ShareLink – File Transfer
  // --------------------------------------------------------------------------
  {
    id: 'sharelink',
    title: 'ShareLink',
    subtitle: 'High-Speed Offline-First Cross-Platform File Transfer',
    tag: 'PROJECT / 06 • LOCAL P2P & AES-256-GCM',
    category: 'mobile-native',
    device: 'desktop-landscape',
    accentColor: '#10b981',
    badge: 'AES-256-GCM Encrypted',
    problem:
      'Transferring large files between mixed Android and desktop/iOS devices without internet connectivity typically forces users to rely on slow Bluetooth or cloud storage services that compromise bandwidth and privacy.',
    solution:
      'Architected ShareLink as an offline-first, peer-to-peer file transfer engine by Gen Soft Tech. Combines an Android Flutter sender with dynamic-port ephemeral HTTP streaming, QR-code zero-network secret pairing, and a zero-install WebCrypto client receiver running in Chrome, Edge, Safari, and Firefox over local Wi-Fi or mobile hotspots.',
    technicalDetails: {
      transportArchitecture:
        'Local HTTP streaming engine binding ephemeral ports on private subnets (192.168.x.x), supporting chunked file delivery with HTTP Range (bytes=start-end) headers.',
      securityAndCrypto:
        'Session key derivation via HKDF-SHA256, AES-256-GCM AEAD payload encryption, zero-network secret transmission via URL hash fragment (#pairingSecret), and cryptographic key zeroization upon session destroy.',
      pairingWorkflow:
        'Bidirectional QR-code pairing protocol establishing instant device handshake and token exchange with 10-minute TTL and path traversal defenses.',
      browserReceiver:
        'Zero-install browser client utilizing the native Web Crypto API for client-side streaming decryption across Windows, macOS, Linux, and iOS without native app installation.'
    },
    capabilities: [
      'High-speed local Wi-Fi and mobile hotspot file streaming without internet connectivity',
      'End-to-end authenticated payload encryption using AES-256-GCM and HKDF-SHA256',
      'QR code zero-network secret transmission and fast device pairing',
      'Zero-install cross-platform Web Receiver compatible with Chrome, Safari, Edge, and Firefox',
      'Chunked streaming with resume support and strict path-traversal sandboxing'
    ],
    tech: ['Flutter', 'Dart', 'Android SDK', 'Local HTTP Sockets', 'AES-256-GCM', 'Web Crypto API', 'QR Pairing'],
    metrics: [
      { label: 'Transfer Mode', val: '100% Offline P2P' },
      { label: 'Encryption', val: 'AES-256-GCM' },
      { label: 'Zero-Install', val: 'WebCrypto Receiver' },
      { label: 'Network', val: 'Wi-Fi / Hotspot' }
    ],
    liveDemo: 'https://gengadharan4656.github.io/sharelink/',
    github: 'https://github.com/gengadharan4656/sharelink',
    screens: [
      {
        id: 'screen-protocol',
        name: 'P2P Transfer Architecture',
        file: 'assets/projects/sharelink/sharelink-protocol.webp',
        fallback: 'assets/projects/sharelink/sharelink-protocol.png',
        desc: 'Bidirectional P2P streaming architecture: local ephemeral HTTP server, AES-256-GCM encryption, and zero-cloud direct transfer.'
      },
      {
        id: 'screen-icon',
        name: 'Brand & Visual Identity',
        file: 'assets/projects/sharelink/sharelink-icon.webp',
        fallback: 'assets/projects/sharelink/sharelink-icon.png',
        desc: 'Official ShareLink cross-platform branding and Play Store icon by Gen Soft Tech.'
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
    tag: 'PROJECT / 07 • NEURAL IMAGE PROCESSING',
    category: 'fullstack-cloud',
    device: 'desktop-landscape',
    accentColor: '#2de1d1',
    badge: 'Real-ESRGAN 4x Upscaling',
    problem:
      'Standard bicubic image scaling produces blurry, pixelated results when restoring low-resolution photos, historic documents, or compressed digital graphics.',
    solution:
      'Built a Flutter desktop interface coupled with a Python Real-ESRGAN deep learning inference engine for rapid high-resolution restoration, texture synthesis, and noise reduction across 2x and 4x scale factors.',
    technicalDetails: {
      neuralModel:
        'Implements the Real-ESRGAN (Enhanced Super-Resolution Generative Adversarial Networks) architecture trained with high-order degradation modeling.',
      inferenceEngine:
        'Coupled with NCNN neural runtime and Vulkan GPU acceleration for sub-second tile processing on consumer-grade desktop hardware.',
      pipelineSeparation:
        'Decoupled Flutter desktop UI layer communicates with local Python inference daemons via standard IPC pipes for non-blocking UI responsiveness.'
    },
    capabilities: [
      '2x and 4x deep learning image upscaling with texture reconstruction',
      'Neural noise reduction and compression artifact elimination',
      'Preservation of natural high-frequency textures without halo artifacts',
      'Batch processing queue and export configuration'
    ],
    tech: ['Flutter', 'Python', 'Real-ESRGAN', 'NCNN', 'Vulkan'],
    metrics: [
      { label: 'Neural Model', val: 'Real-ESRGAN' },
      { label: 'Scale Factors', val: '2x & 4x Neural' },
      { label: 'Inference', val: 'NCNN / Vulkan' },
      { label: 'Platform', val: 'Windows Desktop' }
    ],
    github: 'https://github.com/gengadharan4656/ai_photo_enhancer',
    screens: [
      {
        id: 'photo-res',
        name: '4x Upscaling Result',
        file: 'assets/projects/photo-1.webp',
        fallback: 'assets/projects/photo-1.png',
        desc: 'Real-ESRGAN 4x upscaling showing restored fine detail, sharp edge boundaries, and neural noise reduction.'
      }
    ]
  },
  // --------------------------------------------------------------------------
  // 08. genEditor – Android Video Editor
  // --------------------------------------------------------------------------
  {
    id: 'geneditor',
    title: 'genEditor',
    subtitle: 'Offline Android Video Editor & Media3 Pipeline',
    tag: 'PROJECT / 08 • NATIVE ANDROID & MEDIA3',
    category: 'mobile-native',
    device: 'phone-portrait',
    accentColor: '#8174ff',
    badge: '35 Passing Tests Verified',
    problem:
      'Mobile video creators require reliable, low-latency, offline-first video editing with precise multi-track synchronization without relying on cloud servers or data-harvesting third-party SDKs.',
    solution:
      'Engineered genEditor, an offline-first Android video editing suite combining a reactive Flutter interface with native Kotlin AndroidX Media3 (ExoPlayer & Transformer) and OpenGL ES 3.0 shaders for hardware-accelerated playback and frame composition. Implemented following reverse-engineering research into industry mobile editing architectures.',
    technicalDetails: {
      developmentMotivation:
        'Built as an offline-first, privacy-respecting video editing suite designed to give mobile creators low-latency editing and multi-track control without cloud round-trips or third-party data tracking.',
      hybridArchitecture:
        'Dual-layer hybrid architecture: Flutter Dart layer manages reactive UI components, gesture detection, timeline coordinate projections, and draft persistence; native Kotlin layer handles media pipeline execution.',
      kotlinIntegration:
        'Bidirectional Platform Channels: MethodChannels trigger timeline operations (split, trim, export), while EventChannels stream continuous playback progress and audio waveform amplitudes at 60 FPS.',
      media3Pipeline:
        'AndroidX Media3 (ExoPlayer & Transformer) provides zero-copy hardware video decoding, asynchronous media composition, audio track multiplexing, and hardware-accelerated MP4 transcoding.',
      openglShaders:
        'Custom GLSurfaceView utilizes OpenGL ES 3.0 fragment shaders for real-time video color grading, LUT application, and hardware-accelerated layer blending without CPU bottlenecks.',
      reverseEngineering:
        'Conducted reverse-engineering research on commercial Android editors to analyze safe-area coordinate transforms, multi-track audio scrubbing synchronization, and background memory retention strategies.',
      timelineImplementation:
        'Multi-track timeline managing 3 simultaneous streams (video, audio, text/overlay), sub-frame precision trimming, clip splitting, keyframing, and non-destructive undo/redo history.',
      testingMilestone:
        'Verified development milestone of 35 passing automated unit and widget tests and successful release APK/AAB builds.'
    },
    capabilities: [
      'Multi-track timeline supporting 3 simultaneous tracks (Video, Audio, Overlay)',
      'Sub-frame clip splitting, precision trimming, and time-scale adjustment',
      'Hardware-accelerated media export (720p HD, 1080p FHD, 4K UHD at 24/25/30/60 FPS)',
      'Built-in audio extractor and local draft persistence engine (Project 10-31)',
      'Native AndroidX Media3 and OpenGL ES 3.0 hardware acceleration'
    ],
    tech: ['Flutter', 'Dart', 'Kotlin', 'AndroidX Media3', 'OpenGL ES 3.0', 'Platform Channels', 'Android SDK'],
    metrics: [
      { label: 'Test Suite', val: '35 Passing Tests' },
      { label: 'Media Engine', val: 'AndroidX Media3' },
      { label: 'Rendering', val: 'OpenGL ES 3.0' },
      { label: 'Mode', val: '100% Offline' }
    ],
    screens: [
      {
        id: 'geneditor-home',
        name: 'Home & Project Hub',
        file: 'assets/projects/geneditor/screenshots/geneditor-01-home.webp',
        fallback: 'assets/projects/geneditor/screenshots/geneditor-01-home.png',
        desc: 'Offline project hub with camera import, active draft management (Project 10-31), and audio extractor tool.'
      },
      {
        id: 'geneditor-timeline',
        name: 'Multi-Track Timeline',
        file: 'assets/projects/geneditor/screenshots/geneditor-02-timeline.webp',
        fallback: 'assets/projects/geneditor/screenshots/geneditor-02-timeline.png',
        desc: 'Interactive 3-track timeline workspace with waveform sync, split, keyframe timing, and style controls.'
      },
      {
        id: 'geneditor-export',
        name: 'Export Settings',
        file: 'assets/projects/geneditor/screenshots/geneditor-03-export.webp',
        fallback: 'assets/projects/geneditor/screenshots/geneditor-03-export.png',
        desc: 'Hardware-accelerated export configuration modal for 720p HD, 1080p FHD, 4K UHD, and framerate selection.'
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
    tag: 'PROJECT / 09 • FULL-STACK MOBILE + API',
    category: 'fullstack-cloud',
    device: 'phone-portrait',
    accentColor: '#38bdf8',
    badge: 'Live Web App + REST API',
    problem:
      'Users need a secure blogging platform with robust account protection, scalable feeds, and dependable RESTful architecture without bloated third-party CMS overhead.',
    solution:
      'Engineered a Flutter client paired with Python Flask APIs, MySQL database persistence, and OTP-based password recovery. Successfully deployed the backend on Render, the database on Railway, and the web client on Firebase Hosting.',
    technicalDetails: {
      backendApis:
        'Python Flask REST APIs implementing JWT token authorization, sanitized input validation, and password hashing via bcrypt.',
      databasePersistence:
        'Normalized relational MySQL database deployed on Railway with connection pooling and relational indexing across users, categories, and articles.',
      authSecurity:
        'Two-factor OTP email delivery pipeline for deterministic password resets and account recovery.'
    },
    capabilities: [
      'Secure credential validation with OTP-based password recovery',
      'Categorized article feed with interaction metrics and search',
      'Python Flask REST APIs deployed on Render with Railway database',
      'Live web app client deployed and hosted on Firebase Hosting'
    ],
    tech: ['Flutter', 'Flask', 'MySQL', 'Dart', 'Render', 'Railway', 'Firebase'],
    metrics: [
      { label: 'Backend', val: 'Flask REST API' },
      { label: 'Database', val: 'MySQL / Railway' },
      { label: 'Hosting', val: 'Firebase / Render' },
      { label: 'Security', val: 'OTP Password Reset' }
    ],
    github: 'https://github.com/gengadharan4656/blog-app',
    liveDemo: 'https://blog-app-9a745.web.app',
    screens: [
      {
        id: 'blog-login',
        name: 'Secure Auth & OTP',
        file: 'assets/projects/blog-1.webp',
        fallback: 'assets/projects/blog-1.png',
        desc: 'User authentication with credential validation, bcrypt security, and OTP password recovery.'
      },
      {
        id: 'blog-feed',
        name: 'Article Feed & Search',
        file: 'assets/projects/blog-2.webp',
        fallback: 'assets/projects/blog-2.png',
        desc: 'Searchable article feed with category tags, interaction metrics, and author attribution.'
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
    tag: 'PROJECT / 10 • REALTIME SIMULATION',
    category: 'mobile-native',
    device: 'phone-portrait',
    accentColor: '#0ea5e9',
    badge: 'Map Telemetry Simulation',
    problem:
      'Transit commuters experience delays and frustration when bus positions and arrival times are uncertain, particularly in dense metropolitan or campus transit corridors.',
    solution:
      'Built a simulated real-time tracking application in Flutter with dynamic map visualization, simulated moving vehicle GPS coordinates, route stops, and timing estimation.',
    technicalDetails: {
      mapRendering:
        'Integrated interactive vector map rendering with real-time polyline route rendering and custom bus marker overlays.',
      telemetrySimulation:
        'Background movement simulation engine emitting deterministic GPS coordinate packets to mimic production vehicle telemetry feeds.',
      routeSearch:
        'Intelligent transit stop search indexing bus lines, upcoming intermediate waypoints, and estimated arrival countdowns.'
    },
    capabilities: [
      'Live map visualization displaying moving vehicle coordinates',
      'Smart transit route search with distance and ETA estimates',
      'Multi-vehicle status cards and arrival countdowns',
      'Backend movement simulation mimicking production telemetry flows'
    ],
    tech: ['Flutter', 'Python', 'Map Integration', 'Simulation Pipelines', 'Dart'],
    metrics: [
      { label: 'Frontend', val: 'Flutter Map UI' },
      { label: 'Simulation', val: 'GPS Coordinates' },
      { label: 'Telemetry', val: 'Real-Time Updates' },
      { label: 'Routes', val: 'Multi-Vehicle Fleet' }
    ],
    github: 'https://github.com/gengadharan4656/live_bus_tracking',
    screens: [
      {
        id: 'bus-map',
        name: 'Live Telemetry Map',
        file: 'assets/projects/bus-1.webp',
        fallback: 'assets/projects/bus-1.png',
        desc: 'Interactive map visualization showing simulated real-time bus positions and active route paths.'
      },
      {
        id: 'bus-route',
        name: 'Route Search & Fleet',
        file: 'assets/projects/bus-2.webp',
        fallback: 'assets/projects/bus-2.png',
        desc: 'Route search with distance estimates, intermediate stops, and multi-vehicle status cards.'
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
    tag: 'PROJECT / 11 • OPERATIONS PRODUCTIVITY',
    category: 'ai-automation',
    device: 'desktop-landscape',
    accentColor: '#8174ff',
    badge: 'Deterministic n8n Pipelines',
    problem:
      'Manual repetitive team communication consumes engineering bandwidth and introduces timing inconsistencies and forgotten operational updates.',
    solution:
      'Designed and deployed automated workflows using n8n and Python scripts to trigger communications on precise schedules with operational logging and webhook alerts.',
    technicalDetails: {
      schedulerNode:
        'Cron-based deterministic n8n trigger nodes configured for automated scheduled execution without server polling overhead.',
      emailDelivery:
        'Template-driven email formatting node incorporating dynamic variables, verification safeguards, and recipient routing.',
      loggingAlerts:
        'Webhook error alerting and execution audit logs ensuring 100% operational delivery transparency.'
    },
    capabilities: [
      'Trigger-based scheduling for deterministic workflow execution',
      'Template-driven email delivery with verification safeguards',
      'Operational logging and error alert webhooks',
      'Cloud deployment with zero maintenance overhead'
    ],
    tech: ['n8n', 'Python', 'Cloud Webhooks', 'Automation Workflows'],
    metrics: [
      { label: 'Orchestrator', val: 'n8n Workflow Engine' },
      { label: 'Trigger', val: 'Cron Scheduled' },
      { label: 'Alerts', val: 'Webhook Logging' },
      { label: 'Mode', val: 'Zero Maintenance' }
    ],
    screens: [
      {
        id: 'auto-flow',
        name: 'Email Workflow',
        file: 'assets/projects/automation-1.webp',
        fallback: 'assets/projects/automation-1.png',
        desc: 'Automated email scheduling and trigger-based workflow orchestration in n8n.'
      },
      {
        id: 'auto-logic',
        name: 'Execution Logic',
        file: 'assets/projects/automation-2.webp',
        fallback: 'assets/projects/automation-2.png',
        desc: 'Deterministic node execution logic, conditional validation, and error alert nodes.'
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
// REUSABLE DEVICE CARD COMPONENT (3D Perspective Multi-Card System)
// ============================================================================
function renderDeviceCard(project, screen, sIdx, posClass) {
  const deviceType = project.device || 'phone-portrait';
  const isLandscape = project.layout === 'landscape';
  const fitStyle = screen.fit ? `object-fit: ${screen.fit};` : '';
  const inlineImgStyle = fitStyle ? `style="${fitStyle}"` : '';

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
          <span class="terminal-window-title">farmgen-ai — cli</span>
        </div>
        <div class="terminal-screen-wrapper">
          <picture>
            <source srcset="${screen.file}" type="image/webp">
            <img class="terminal-screen-img screen-showcase-img" 
                 src="${screen.fallback || screen.file}" 
                 alt="${project.title} - ${screen.name}: ${screen.desc}"
                 loading="lazy"
                 ${inlineImgStyle} />
          </picture>
        </div>
      </div>
    `;
  } else if (deviceType === 'desktop' || deviceType === 'desktop-landscape') {
    innerMockup = `
      <div class="device-desktop-primary ${isLandscape ? 'device-landscape' : ''}">
        <div class="desktop-window-header">
          <div class="window-controls" aria-hidden="true">
            <span class="window-dot dot-close"></span>
            <span class="window-dot dot-min"></span>
            <span class="window-dot dot-max"></span>
          </div>
          <span class="desktop-window-title">${project.title}</span>
        </div>
        <div class="desktop-screen-wrapper">
          <picture>
            <source srcset="${screen.file}" type="image/webp">
            <img class="desktop-screen-img screen-showcase-img" 
                 src="${screen.fallback || screen.file}" 
                 alt="${project.title} - ${screen.name}: ${screen.desc}"
                 loading="lazy"
                 ${inlineImgStyle} />
          </picture>
        </div>
      </div>
    `;
  } else {
    // Phone mockup
    innerMockup = `
      <div class="device-phone-primary">
        <div class="phone-camera-notch" aria-hidden="true"></div>
        <picture>
          <source srcset="${screen.file}" type="image/webp">
          <img class="phone-screen-img screen-showcase-img" 
               src="${screen.fallback || screen.file}" 
               alt="${project.title} - ${screen.name}: ${screen.desc}"
               loading="lazy"
               ${inlineImgStyle} />
        </picture>
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

// ============================================================================
// SHOWCASE RENDERER: FARMLINK 2-COLUMN PATTERN ACROSS ALL 11 PROJECTS
// ============================================================================
function renderProjectShowcase(project, index) {
  const isFarmLink = Boolean(project.isFarmLink);
  const isGangRace = project.id === 'gang-race';
  const isTrendPilot = project.id === 'trendpilot';
  const isShareLink = project.id === 'sharelink';

  const screens = project.screens || [];
  const firstScreen = screens[0] || { name: project.title, desc: project.subtitle, file: '' };

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

  // Left Column Custom Telemetry Widgets
  let customWidgetsHtml = '';
  if (isFarmLink) {
    customWidgetsHtml = `
      <div class="farmlink-district-card">
        <div class="district-header">
          <span>District Market Intelligence</span>
          <span class="district-signal">Real-Time Signals</span>
        </div>
        <div class="district-grid">
          <div class="district-metric high-demand">
            <div class="metric-city">
              <span>Chennai Mandi</span>
              <span class="metric-status-tag">High Demand</span>
            </div>
            <div class="metric-val">Supply: <strong>0 kg</strong> &nbsp;|&nbsp; Demand: <strong>714 kg</strong> (1 buyer)</div>
          </div>
          <div class="district-metric high-supply">
            <div class="metric-city">
              <span>Madurai Farmer</span>
              <span class="metric-status-tag">High Supply</span>
            </div>
            <div class="metric-val">Supply: <strong>607 kg</strong> (2 farmers) &nbsp;|&nbsp; Demand: <strong>0 kg</strong></div>
          </div>
        </div>
      </div>

      <div class="ai-pricing-card">
        <div class="pricing-top">
          <div class="pricing-title"><span>🌱 Dynamic AI Pricing Engine</span></div>
          <span class="pricing-confidence">Confidence: HIGH</span>
        </div>
        <div class="pricing-hero">
          <div class="recommended-amount">₹38.00</div>
          <div class="recommended-label">Recommended Baseline / kg</div>
        </div>
        <div class="pricing-factors-grid">
          <div class="factor-chip"><span class="f-label">Market Price</span><span class="f-val">₹30.00</span></div>
          <div class="factor-chip positive"><span class="f-label">Quality Bonus</span><span class="f-val">+₹5.00</span></div>
          <div class="factor-chip positive"><span class="f-label">Demand Bonus</span><span class="f-val">+₹4.00</span></div>
          <div class="factor-chip"><span class="f-label">Season Bonus</span><span class="f-val">₹0.00</span></div>
          <div class="factor-chip positive"><span class="f-label">Weather Bonus</span><span class="f-val">+₹2.00</span></div>
          <div class="factor-chip deduct"><span class="f-label">Transport</span><span class="f-val">-₹3.00</span></div>
        </div>
        <div class="pricing-disclaimer">
          <i>ℹ</i> <span>Dynamic decision support algorithm. Farmer retains final pricing authority.</span>
        </div>
      </div>
    `;
  } else if (isGangRace) {
    customWidgetsHtml = `
      <div class="gaming-telemetry-card">
        <div class="telemetry-header">
          <span>Engine & Socket Telemetry</span>
          <span class="badge-pill">60 FPS Native</span>
        </div>
        <div class="telemetry-grid">
          <div class="telemetry-item">
            <strong>C++ NDK Engine</strong>
            <small>CMake / ARM64 native activity</small>
          </div>
          <div class="telemetry-item">
            <strong>6-Player Wi-Fi Sockets</strong>
            <small>Zero-config ad-hoc hotspot LAN</small>
          </div>
          <div class="telemetry-item">
            <strong>OpenGL ES Pipeline</strong>
            <small>Dynamic track lights & particle drifts</small>
          </div>
          <div class="telemetry-item">
            <strong>Squirrel Scripting</strong>
            <small>Game loops, menus, and HUD state</small>
          </div>
        </div>
      </div>
    `;
  } else if (isTrendPilot) {
    customWidgetsHtml = `
      <div class="trendpilot-agent-card">
        <div class="agent-header">
          <span>Autonomous Agent Pipeline</span>
          <span class="badge-pill">n8n + PostgreSQL</span>
        </div>
        <div class="agent-pipeline-steps">
          <div class="step-pill"><span>01</span> Trend Scraper</div>
          <div class="step-arrow">→</div>
          <div class="step-pill"><span>02</span> Gemini LLM</div>
          <div class="step-arrow">→</div>
          <div class="step-pill"><span>03</span> Python Canvas</div>
          <div class="step-arrow">→</div>
          <div class="step-pill step-human"><span>04</span> Human Verify</div>
        </div>
      </div>
    `;
  } else if (isShareLink) {
    customWidgetsHtml = `
      <div class="gaming-telemetry-card" style="border-color: rgba(16, 185, 129, 0.3);">
        <div class="telemetry-header">
          <span>Peer-to-Peer Protocol & Security</span>
          <span class="badge-pill" style="color: #10b981; background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.3);">AES-256-GCM AEAD</span>
        </div>
        <div class="telemetry-grid">
          <div class="telemetry-item">
            <strong>Ephemeral Local Server</strong>
            <small>Dynamic port binding on 192.168.x.x</small>
          </div>
          <div class="telemetry-item">
            <strong>QR Zero-Network Pairing</strong>
            <small>Key hash (#pairingSecret) exchange</small>
          </div>
          <div class="telemetry-item">
            <strong>WebCrypto Decryption</strong>
            <small>Zero-install Chrome/Safari receiver</small>
          </div>
          <div class="telemetry-item">
            <strong>HTTP Range Streaming</strong>
            <small>Chunked byte offsets with resume</small>
          </div>
        </div>
      </div>
    `;
  }

  // Left Column HTML
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
          ${buildTechTags(project.tech, ['Flutter', 'Dart', 'Kotlin', 'AndroidX Media3', 'C++', 'n8n', 'FastAPI', 'PostgreSQL', 'OpenGL ES 3.0', 'AES-256-GCM', 'OpenHands AI'])}
        </div>

        ${buildProjectLinks(project)}
      </div>
    </div>
  `;

  // Right Column Media Viewport HTML
  let rightMediaHtml = '';

  if (isFarmLink) {
    // FarmLink Satellite Setup
    rightMediaHtml = `
      <div class="project-device-stage farmlink-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        <div class="device-stage-viewport viewport-phone" id="panel-${project.id}">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          <div class="device-satellite device-satellite-left" data-target-screen="1" title="Click to view ${screens[1].name}">
            <img src="${screens[1].fallback || screens[1].file}" alt="${screens[1].name} preview" loading="lazy" />
            <span class="satellite-tag">${screens[1].name}</span>
          </div>
          <div class="device-phone-primary">
            <div class="phone-camera-notch" aria-hidden="true"></div>
            <img id="farmlink-main-screen" class="phone-screen-img screen-showcase-img"
                 src="${firstScreen.fallback || firstScreen.file}" alt="${project.title} - ${firstScreen.name}" loading="lazy" />
          </div>
          <div class="device-satellite device-satellite-right" data-target-screen="2" title="Click to view ${screens[2].name}">
            <img src="${screens[2].fallback || screens[2].file}" alt="${screens[2].name} preview" loading="lazy" />
            <span class="satellite-tag">${screens[2].name}</span>
          </div>
        </div>
        <div class="stage-caption" id="caption-${project.id}">
          <strong class="screen-caption-title">${firstScreen.name}</strong>: 
          <span class="screen-caption-desc">${firstScreen.desc}</span>
        </div>
      </div>
    `;
  } else if (isGangRace) {
    // GaNg RaCe Unified Landscape Viewport (Video + Screenshots in ONE 16:9 frame)
    const videoData = project.video;
    rightMediaHtml = `
      <div class="project-device-stage gaming-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        
        <div class="device-stage-viewport viewport-phone-landscape" id="panel-${project.id}">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          
          <div class="gameplay-video-wrapper" id="gang-race-media-mount">
            <video id="gang-race-player" 
                   class="gameplay-video" 
                   controls 
                   playsinline 
                   preload="metadata" 
                   poster="${videoData.poster}"
                   aria-label="${videoData.title}">
              <source src="${videoData.file}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        <div class="stage-caption" id="caption-${project.id}">
          <strong class="screen-caption-title">${firstScreen.name}</strong>: 
          <span class="screen-caption-desc">${firstScreen.desc}</span>
        </div>
      </div>
    `;
  } else if (isTrendPilot || project.id === 'automation') {
    // Desktop Landscape Frame (TrendPilot AI, Automation)
    rightMediaHtml = `
      <div class="project-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        <div class="device-stage-viewport viewport-desktop" id="panel-${project.id}">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          <div class="device-desktop-primary device-landscape">
            <div class="desktop-window-header">
              <div class="window-controls" aria-hidden="true">
                <span class="window-dot dot-close"></span>
                <span class="window-dot dot-min"></span>
                <span class="window-dot dot-max"></span>
              </div>
              <span class="desktop-window-title">${project.title} — Workspace</span>
            </div>
            <div class="desktop-screen-wrapper">
              <picture>
                <source srcset="${firstScreen.file}" type="image/webp">
                <img id="desktop-img-${project.id}" class="desktop-screen-img screen-showcase-img"
                     src="${firstScreen.fallback || firstScreen.file}"
                     alt="${project.title} - ${firstScreen.name}: ${firstScreen.desc}"
                     loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
        <div class="stage-caption" id="caption-${project.id}">
          <strong class="screen-caption-title">${firstScreen.name}</strong>: 
          <span class="screen-caption-desc">${firstScreen.desc}</span>
        </div>
      </div>
    `;
  } else if (project.id === 'photo') {
    // Desktop Single Window
    rightMediaHtml = `
      <div class="project-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        <div class="device-stage-viewport viewport-desktop" id="panel-${project.id}">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          <div class="device-desktop-primary device-landscape">
            <div class="desktop-window-header">
              <div class="window-controls" aria-hidden="true">
                <span class="window-dot dot-close"></span>
                <span class="window-dot dot-min"></span>
                <span class="window-dot dot-max"></span>
              </div>
              <span class="desktop-window-title">photo-enhancer-studio — v2.4</span>
            </div>
            <div class="desktop-screen-wrapper">
              <picture>
                <source srcset="${firstScreen.file}" type="image/webp">
                <img id="desktop-img-${project.id}" class="desktop-screen-img screen-showcase-img"
                     src="${firstScreen.fallback || firstScreen.file}"
                     alt="${project.title} - ${firstScreen.name}: ${firstScreen.desc}"
                     loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
        <div class="stage-caption" id="caption-${project.id}">
          <strong class="screen-caption-title">${firstScreen.name}</strong>: 
          <span class="screen-caption-desc">${firstScreen.desc}</span>
        </div>
      </div>
    `;
  } else if (screens.length === 3) {
    // Multi-Card Adaptive Carousel (3 Screens: Music Player, genEditor, FarmGen AI CLI)
    rightMediaHtml = `
      <div class="project-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        <div class="device-stage-viewport viewport-phone" id="panel-${project.id}">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          <div class="stage-cards-container" data-project-id="${project.id}">
            ${renderDeviceCard(project, screens[0], 0, 'pos-center')}
            ${renderDeviceCard(project, screens[1], 1, 'pos-right')}
            ${renderDeviceCard(project, screens[2], 2, 'pos-left')}
          </div>
        </div>
        <div class="stage-caption" id="caption-${project.id}">
          <strong class="screen-caption-title">${firstScreen.name}</strong>: 
          <span class="screen-caption-desc">${firstScreen.desc}</span>
        </div>
      </div>
    `;
  } else if (screens.length === 2) {
    // Multi-Card Adaptive Carousel (2 Screens: ShareLink, Blog, Live Bus Tracking)
    rightMediaHtml = `
      <div class="project-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        <div class="device-stage-viewport viewport-phone" id="panel-${project.id}">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          <div class="stage-cards-container" data-project-id="${project.id}">
            ${renderDeviceCard(project, screens[0], 0, 'pos-center')}
            ${renderDeviceCard(project, screens[1], 1, 'pos-side-right')}
          </div>
        </div>
        <div class="stage-caption" id="caption-${project.id}">
          <strong class="screen-caption-title">${firstScreen.name}</strong>: 
          <span class="screen-caption-desc">${firstScreen.desc}</span>
        </div>
      </div>
    `;
  } else {
    // Single screen
    rightMediaHtml = `
      <div class="project-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        <div class="device-stage-viewport viewport-phone" id="panel-${project.id}">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          <div class="stage-cards-container" data-project-id="${project.id}">
            ${renderDeviceCard(project, screens[0], 0, 'pos-single')}
          </div>
        </div>
        <div class="stage-caption" id="caption-${project.id}">
          <strong class="screen-caption-title">${firstScreen.name}</strong>: 
          <span class="screen-caption-desc">${firstScreen.desc}</span>
        </div>
      </div>
    `;
  }

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

  const screen = project.screens[screenIndex];
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

  // 2. FarmLink dynamic switching
  if (project.isFarmLink) {
    const mainImg = stage.querySelector('#farmlink-main-screen');
    const satellites = stage.querySelectorAll('.device-satellite');

    if (mainImg) {
      mainImg.style.opacity = '0.3';
      mainImg.style.transform = 'scale(0.98)';
      setTimeout(() => {
        mainImg.src = screen.fallback || screen.file;
        mainImg.alt = `${project.title} - ${screen.name}: ${screen.desc}`;
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
      }, 150);
    }

    if (satellites.length >= 2 && project.screens.length > 2) {
      const remainingIndices = project.screens
        .map((_, i) => i)
        .filter((i) => i !== screenIndex);
      const leftIdx = remainingIndices[0];
      const rightIdx = remainingIndices[1];
      const leftSat = satellites[0];
      const rightSat = satellites[1];

      if (leftSat && project.screens[leftIdx]) {
        leftSat.dataset.targetScreen = leftIdx;
        const leftImg = leftSat.querySelector('img');
        const leftTag = leftSat.querySelector('.satellite-tag');
        if (leftImg) leftImg.src = project.screens[leftIdx].fallback || project.screens[leftIdx].file;
        if (leftTag) leftTag.textContent = project.screens[leftIdx].name;
      }
      if (rightSat && project.screens[rightIdx]) {
        rightSat.dataset.targetScreen = rightIdx;
        const rightImg = rightSat.querySelector('img');
        const rightTag = rightSat.querySelector('.satellite-tag');
        if (rightImg) rightImg.src = project.screens[rightIdx].fallback || project.screens[rightIdx].file;
        if (rightTag) rightTag.textContent = project.screens[rightIdx].name;
      }
    }
  } else if (project.id === 'gang-race') {
    // GaNg RaCe media swapping
    const mediaMount = stage.querySelector('#gang-race-media-mount');
    if (mediaMount) {
      if (screenIndex === 0) {
        // Mount video player
        const videoData = project.video;
        mediaMount.innerHTML = `
          <video id="gang-race-player" 
                 class="gameplay-video" 
                 controls 
                 playsinline 
                 preload="metadata" 
                 poster="${videoData.poster}"
                 aria-label="${videoData.title}">
            <source src="${videoData.file}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      } else {
        // Mount image with lightbox
        mediaMount.innerHTML = `
          <picture>
            <source srcset="${screen.file}" type="image/webp">
            <img class="gameplay-video screen-showcase-img"
                 src="${screen.fallback || screen.file}"
                 alt="${project.title} - ${screen.name}: ${screen.desc}"
                 loading="lazy"
                 style="cursor: zoom-in;" />
          </picture>
        `;
        const newImg = mediaMount.querySelector('img');
        if (newImg) {
          newImg.addEventListener('click', () => openLightbox(newImg.src, newImg.alt));
        }
      }
    }
  } else if (project.id === 'trendpilot' || project.id === 'automation' || project.id === 'photo') {
    // Desktop frame image swap
    const desktopImg = stage.querySelector(`#desktop-img-${project.id}`) || stage.querySelector('.desktop-screen-img');
    const desktopSource = desktopImg ? desktopImg.parentElement.querySelector('source') : null;
    if (desktopImg) {
      desktopImg.style.opacity = '0.3';
      desktopImg.style.transform = 'scale(0.98)';
      setTimeout(() => {
        if (desktopSource) {
          desktopSource.srcset = screen.file;
        }
        desktopImg.src = screen.fallback || screen.file;
        desktopImg.alt = `${project.title} - ${screen.name}: ${screen.desc}`;
        desktopImg.style.opacity = '1';
        desktopImg.style.transform = 'scale(1)';
      }, 150);
    }
  } else {
    // Multi-card stage carousel rearrangement (Music Player, genEditor, FarmGen, ShareLink, Blog, Bus)
    const cards = stage.querySelectorAll('.stage-card');
    const total = project.screens.length;

    if (total === 3) {
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
      cards.forEach((card) => {
        const cIdx = parseInt(card.dataset.screenIndex, 10);
        card.classList.remove('pos-center', 'pos-side-right', 'pos-side-left');
        if (cIdx === screenIndex) {
          card.classList.add('pos-center');
        } else {
          card.classList.add('pos-side-right');
        }
      });
    }
  }

  // 3. Update descriptive captions
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

  // Stage cards click / keydown
  document.querySelectorAll('.stage-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      const pId = card.dataset.projectId;
      const sIdx = parseInt(card.dataset.screenIndex, 10);
      if (card.classList.contains('pos-center') || card.classList.contains('pos-single')) {
        const img = card.querySelector('.screen-showcase-img');
        if (img) openLightbox(img.src, img.alt);
      } else {
        switchProjectScreen(pId, sIdx);
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const pId = card.dataset.projectId;
        const sIdx = parseInt(card.dataset.screenIndex, 10);
        switchProjectScreen(pId, sIdx);
      }
    });
  });

  // FarmLink Satellites click
  document.querySelectorAll('.device-satellite').forEach((sat) => {
    sat.addEventListener('click', (e) => {
      const targetIdx = parseInt(sat.dataset.targetScreen, 10);
      switchProjectScreen('farmlink', targetIdx);
    });
  });

  // Lightbox for standalone screen images (Desktop, FarmLink main, etc.)
  document.querySelectorAll('#farmlink-main-screen, .desktop-screen-img').forEach((img) => {
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
      <h3>The Challenge & Engineering Problem</h3>
      <p>${project.problem}</p>
    </div>

    <div class="modal-section">
      <h3>Architecture & System Solution</h3>
      <p>${project.solution}</p>
    </div>

    ${
      techRows
        ? `
      <div class="modal-section">
        <h3>Technical Deep-Dive & Architecture Decisions</h3>
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
      ${buildTechTags(project.tech, ['Flutter', 'Dart', 'Kotlin', 'AndroidX Media3', 'C++', 'n8n', 'FastAPI', 'PostgreSQL', 'OpenGL ES 3.0', 'AES-256-GCM', 'OpenHands AI'])}
    </div>

    ${
      screenshotsHtml
        ? `
      <div class="modal-section">
        <h3>Verified Interface & Architecture Evidence</h3>
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
