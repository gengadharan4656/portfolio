/**
 * Gengadharan S — Master Developer Portfolio Engine
 * Production Architecture with Data-Driven Project Showcases,
 * Category Filtering, Landscape Gaming & Video Support,
 * Full Case Study Modals, and Accessible Navigation.
 */

'use strict';

const body = document.body;
const toggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const header = document.querySelector('.site-header');
const progress = document.getElementById('scroll-progress');
const toTop = document.getElementById('to-top');

// Showcase DOM Mounts
const featuredShowcaseContainer = document.getElementById('featured-showcase');
const secondaryGridContainer = document.getElementById('secondary-projects-grid');
const filterBarContainer = document.getElementById('project-filter-bar');
const projectModal = document.getElementById('project-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalContentMount = document.getElementById('modal-content-mount');

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

// ============================================================================
// DATA REPOSITORY: 10 COMPLETE PROJECTS (4 FLAGSHIPS + 6 SECONDARY)
// ============================================================================
const projects = [
  // --------------------------------------------------------------------------
  // FLAGSHIP 01: genEditor (Android Video Editor)
  // --------------------------------------------------------------------------
  {
    id: 'geneditor',
    title: 'genEditor',
    subtitle: 'Offline Android Video Editor & Media3 Pipeline',
    tag: 'FLAGSHIP • NATIVE ANDROID & MEDIA3',
    category: 'mobile-native',
    featured: true,
    device: 'phone-portrait',
    accentColor: '#8174ff',
    badge: 'Verified Release Builds',
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
        name: 'Home & Drafts',
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
  // FLAGSHIP 02: FarmLink (AI Agritech Platform)
  // --------------------------------------------------------------------------
  {
    id: 'farmlink',
    title: 'FarmLink',
    subtitle: 'AI-Powered Agricultural Supply & Demand Platform',
    tag: 'FLAGSHIP • AI AGRITECH ECOSYSTEM',
    category: 'mobile-native',
    featured: true,
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
        'Domain-specific agricultural AI copilot (Navina Vivasayi AI) supporting native Tamil voice and text conversational queries for localized crop disease treatment.'
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
      { id: 'dashboard', name: 'Dashboard', file: 'assets/projects/farmlink-dashboard.webp', fallback: 'assets/projects/farmlink-dashboard.png', desc: 'District Supply & Demand Intelligence Overview' },
      { id: 'marketplace', name: 'Marketplace', file: 'assets/projects/farmlink-marketplace.webp', fallback: 'assets/projects/farmlink-marketplace.png', desc: 'Buyer Catalog & Farmer Crop Listings' },
      { id: 'pricing', name: 'AI Pricing', file: 'assets/projects/farmlink-pricing.webp', fallback: 'assets/projects/farmlink-pricing.png', desc: 'Context-Aware Dynamic Pricing Engine & Crop Registration' },
      { id: 'assistant', name: 'Navina Vivasayi AI', file: 'assets/projects/farmlink-ai.webp', fallback: 'assets/projects/farmlink-ai.png', desc: 'Multilingual Farming Copilot & Disease Diagnosis' },
      { id: 'orders', name: 'Orders', file: 'assets/projects/farmlink-orders.webp', fallback: 'assets/projects/farmlink-orders.png', desc: 'Fulfillment Tracking: Pending, Accepted, Completed' }
    ]
  },

  // --------------------------------------------------------------------------
  // FLAGSHIP 03: GaNg RaCe (Android Racing Game)
  // --------------------------------------------------------------------------
  {
    id: 'gang-race',
    title: 'GaNg RaCe',
    subtitle: '3D Kart Racing with 6-Player Local Wi-Fi Multiplayer',
    tag: 'FLAGSHIP • C++ & ANDROID NDK GRAPHICS',
    category: 'game-dev',
    featured: true,
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
      title: 'GaNg RaCe 60 FPS Android Gameplay & Drift Demo'
    },
    screens: [
      {
        id: 'screen-menu',
        name: '6P Multiplayer Hub',
        file: 'assets/projects/gang-race/branding/gang-race-01-menu.webp',
        fallback: 'assets/projects/gang-race/branding/gang-race-01-menu.png',
        desc: 'Custom game interface with Quick Race, 6-Player Cross-Platform Wi-Fi & Hotspot Multiplayer, and Garage.'
      },
      {
        id: 'screen-karts',
        name: 'Kart Roster',
        file: 'assets/projects/gang-race/branding/gang-race-02-karts.webp',
        fallback: 'assets/projects/gang-race/branding/gang-race-02-karts.jpg',
        desc: 'Character and kart selection menu with customized vehicle textures and driver handling attributes.'
      },
      {
        id: 'screen-network',
        name: 'Local Server Discovery',
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
  // FLAGSHIP 04: TrendPilot AI (Automated Meme Generator Agent)
  // --------------------------------------------------------------------------
  {
    id: 'trendpilot',
    title: 'TrendPilot AI',
    subtitle: 'Autonomous Meme Generator & Trend Monitoring Agent',
    tag: 'FLAGSHIP • AI AGENTS & N8N ORCHESTRATION',
    category: 'ai-automation',
    featured: true,
    device: 'desktop-landscape',
    accentColor: '#06b6d4',
    badge: 'Multi-Stage n8n Pipeline',
    problem:
      'Digital brands and creators lose hours manually scanning social streams, brainstorming culturally relevant captions, finding templates, and formatting images across disparate publishing channels.',
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
        name: 'Template Analysis & Ingestion',
        file: 'assets/projects/trendpilot/workflow/trendpilot-wf-template.webp',
        fallback: 'assets/projects/trendpilot/workflow/trendpilot-wf-template.png',
        desc: 'n8n workflow pipeline reading trend files, sending Google Gemini LLM API requests, executing JavaScript parsers, and querying PostgreSQL.'
      },
      {
        id: 'wf-render',
        name: 'Meme Generation & Verification',
        file: 'assets/projects/trendpilot/workflow/trendpilot-wf-render.webp',
        fallback: 'assets/projects/trendpilot/workflow/trendpilot-wf-render.png',
        desc: 'WF03 scheduled generation pipeline (10:30 AM, 2:30 PM, 6:30 PM IST), draft selection, Python rendering endpoint verification, and human approval node.'
      }
    ],
    gallery: [
      {
        id: 'meme-rcb',
        title: 'Cricket / IPL Relatability Meme',
        tag: 'Generated Meme • 1080x1080',
        file: 'assets/projects/trendpilot/memes/trendpilot-meme-rcb.webp',
        fallback: 'assets/projects/trendpilot/memes/trendpilot-meme-rcb.png',
        caption: 'Tanglish cricket meme generated from live IPL trend candidate data.'
      },
      {
        id: 'meme-deploy',
        title: 'Software Developer Humor',
        tag: 'Generated Meme • 1080x1080',
        file: 'assets/projects/trendpilot/memes/trendpilot-meme-deploy.webp',
        fallback: 'assets/projects/trendpilot/memes/trendpilot-meme-deploy.png',
        caption: 'Relatable client deployment humor automatically composed from developer prompt templates.'
      },
      {
        id: 'dash-cricket',
        title: 'Social Engagement Analytics',
        tag: 'Dashboard Telemetry',
        file: 'assets/projects/trendpilot/dashboard/trendpilot-dash-cricket.webp',
        fallback: 'assets/projects/trendpilot/dashboard/trendpilot-dash-cricket.png',
        desc: 'Tanglish content telemetry dashboard displaying post metadata and hashtag taxonomy.'
      },
      {
        id: 'dash-ramayana',
        title: 'Viral Trend Tracker',
        tag: 'Trend Discovery Feed',
        file: 'assets/projects/trendpilot/dashboard/trendpilot-dash-ramayana.webp',
        fallback: 'assets/projects/trendpilot/dashboard/trendpilot-dash-ramayana.png',
        desc: 'Real-time cinema and social media trend tracker logging audience sentiment.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // SECONDARY 05: Offline Music Player (Published Play Store App)
  // --------------------------------------------------------------------------
  {
    id: 'music',
    title: 'Offline Music Player',
    subtitle: 'Local Audio Engine & Media Library',
    tag: 'Play Store Published Project',
    category: 'mobile-native',
    featured: false,
    device: 'phone-portrait',
    accentColor: '#6366f1',
    summary:
      'Polished Flutter audio player tuned for stable local media playback, background audio lifecycle execution, and fast indexed track search on Android.',
    problem: 'Users need uninterrupted local music playback in poor network conditions without background audio stutters.',
    solution: 'Built a Flutter offline player with Riverpod state management, background audio services, and storage-aware media scanning.',
    capabilities: [
      'Background audio playback service continuing across Android lifecycle states',
      'Local storage-aware metadata indexing and track sorting',
      'Playlists, favorites, and artist album collections',
      'Smooth 60 FPS library scrolling with fast search'
    ],
    tech: ['Flutter', 'Dart', 'Riverpod', 'Android Audio Service'],
    playstore: 'https://play.google.com/store/apps/details?id=com.gengadharan.musicplayer',
    screens: [
      { id: 'music-lib', name: 'Music Library', file: 'assets/projects/music-1.webp', fallback: 'assets/projects/music-1.png', desc: 'Local audio indexing with real-time metadata rendering' },
      { id: 'music-now', name: 'Now Playing', file: 'assets/projects/music-2.webp', fallback: 'assets/projects/music-2.png', desc: 'Playback controls, background service and seek progression' },
      { id: 'music-play', name: 'Playlists', file: 'assets/projects/music-3.webp', fallback: 'assets/projects/music-3.png', desc: 'User playlists, favorites, and artist collections' }
    ]
  },

  // --------------------------------------------------------------------------
  // SECONDARY 06: FarmGen AI CLI
  // --------------------------------------------------------------------------
  {
    id: 'farmgen',
    title: 'FarmGen AI CLI',
    subtitle: 'Terminal AI Assistant with 54+ Agricultural Skills',
    tag: 'Autonomous Terminal Agent',
    category: 'ai-automation',
    featured: false,
    device: 'terminal',
    accentColor: '#b8f34a',
    summary:
      'Command-line assistant built with OpenHands AI and Python providing intelligent natural language farming guidance, crop diagnosis, and report generation directly from the terminal.',
    problem: 'Farmers and technical agriculturalists need rapid terminal-based guidance without navigating complex web portals.',
    solution: 'Integrated OpenHands AI with modular Python CLI tools to handle queries on irrigation, pest control, and planting schedules.',
    capabilities: [
      'Natural language command execution directly in terminal',
      '54+ integrated agricultural domain skills and tools',
      'AI-generated cultivation guides and irrigation schedules',
      'Extensible modular architecture supporting future agent plugins'
    ],
    tech: ['Python', 'OpenHands AI', 'LLM', 'CLI', 'Prompt Engineering'],
    screens: [
      { id: 'farmgen-term', name: 'Terminal Interface', file: 'assets/projects/farmgen-1.webp', fallback: 'assets/projects/farmgen-1.png', desc: 'FarmGen AI command-line assistant loaded with 54+ skills' },
      { id: 'farmgen-query', name: 'Farming Query', file: 'assets/projects/farmgen-2.webp', fallback: 'assets/projects/farmgen-2.png', desc: 'Natural language summer irrigation guidance execution' },
      { id: 'farmgen-res', name: 'AI Response', file: 'assets/projects/farmgen-3.webp', fallback: 'assets/projects/farmgen-3.png', desc: 'Structured crop planting methods and diagnostic guides' }
    ]
  },

  // --------------------------------------------------------------------------
  // SECONDARY 07: AI Photo Enhancer
  // --------------------------------------------------------------------------
  {
    id: 'photo',
    title: 'AI Photo Enhancer',
    subtitle: 'Real-ESRGAN Deep Learning Image Upscaling',
    tag: 'Desktop Application',
    category: 'fullstack-cloud',
    featured: false,
    device: 'desktop-landscape',
    accentColor: '#2de1d1',
    summary:
      'Desktop application utilizing Real-ESRGAN and NCNN neural inference pipelines to restore fine textures, eliminate compression artifacts, and upscale images by 2x and 4x.',
    problem: 'Standard bicubic image scaling produces blurry, pixelated results when restoring low-resolution photos.',
    solution: 'Built a Flutter desktop interface coupled with a Python Real-ESRGAN deep learning inference engine for rapid high-resolution restoration.',
    capabilities: [
      '2x and 4x deep learning image upscaling',
      'Neural noise reduction and edge sharpening',
      'Preservation of natural high-frequency textures',
      'Batch export and high-resolution output'
    ],
    tech: ['Flutter', 'Python', 'Real-ESRGAN', 'NCNN'],
    github: 'https://github.com/gengadharan4656/ai_photo_enhancer',
    screens: [
      { id: 'photo-res', name: 'Enhancement Result', file: 'assets/projects/photo-1.webp', fallback: 'assets/projects/photo-1.png', desc: 'Real-ESRGAN 4x upscaling showing restored fine detail and noise reduction' }
    ]
  },

  // --------------------------------------------------------------------------
  // SECONDARY 08: Full-Stack Blog Application (Live Web App)
  // --------------------------------------------------------------------------
  {
    id: 'blog',
    title: 'Blog Application',
    subtitle: 'Full-Stack Mobile & Web Publishing Platform',
    tag: 'Full-Stack Mobile + API',
    category: 'fullstack-cloud',
    featured: false,
    device: 'phone-portrait',
    accentColor: '#38bdf8',
    summary:
      'Full-stack publishing application with a Flutter frontend and Flask REST API backend, deployed on Render with Railway persistence and secure OTP authentication.',
    problem: 'Users need a secure blogging platform with robust account protection, scalable feeds, and dependable RESTful architecture.',
    solution: 'Engineered a Flutter client paired with Python Flask APIs, MySQL database persistence, and OTP-based password recovery.',
    capabilities: [
      'Secure credential validation with OTP-based password recovery',
      'Categorized article feed with interaction metrics and search',
      'Python Flask REST APIs deployed on Render with Railway database',
      'Live web app client deployed and hosted on Firebase Hosting'
    ],
    tech: ['Flutter', 'Flask', 'MySQL', 'Dart', 'Render', 'Railway'],
    github: 'https://github.com/gengadharan4656/blog-app',
    liveDemo: 'https://blog-app-9a745.web.app',
    screens: [
      { id: 'blog-login', name: 'Secure Auth', file: 'assets/projects/blog-1.webp', fallback: 'assets/projects/blog-1.png', desc: 'User authentication with credential validation and OTP recovery' },
      { id: 'blog-feed', name: 'Article Feed', file: 'assets/projects/blog-2.webp', fallback: 'assets/projects/blog-2.png', desc: 'Searchable article feed with category tags and interaction metrics' }
    ]
  },

  // --------------------------------------------------------------------------
  // SECONDARY 09: Real-Time Bus Tracking Simulation
  // --------------------------------------------------------------------------
  {
    id: 'bus',
    title: 'Bus Tracking Simulation',
    subtitle: 'Real-Time Transit & Map Telemetry System',
    tag: 'Realtime Experience Simulation',
    category: 'mobile-native',
    featured: false,
    device: 'phone-portrait',
    accentColor: '#0ea5e9',
    summary:
      'Simulated real-time transit tracking application featuring map-based bus movement visualization, route stops, and timing estimation.',
    problem: 'Transit commuters experience delays and frustration when bus positions and arrival times are uncertain.',
    solution: 'Built a simulated real-time tracking application in Flutter with dynamic map visualization and route-aware telemetry pipelines.',
    capabilities: [
      'Live map visualization displaying moving vehicle coordinates',
      'Smart transit route search with distance estimates',
      'Multi-vehicle status cards and arrival countdowns',
      'Backend movement simulation mimicking production telemetry flows'
    ],
    tech: ['Flutter', 'Python', 'Map Integration', 'Simulation Pipelines'],
    github: 'https://github.com/gengadharan4656/live_bus_tracking',
    screens: [
      { id: 'bus-map', name: 'Live Map', file: 'assets/projects/bus-1.webp', fallback: 'assets/projects/bus-1.png', desc: 'Interactive map visualization showing simulated real-time bus positions' },
      { id: 'bus-route', name: 'Fleet Route', file: 'assets/projects/bus-2.webp', fallback: 'assets/projects/bus-2.png', desc: 'Route search with distance estimates and multi-vehicle status cards' }
    ]
  },

  // --------------------------------------------------------------------------
  // SECONDARY 10: Operations Workflow Automation
  // --------------------------------------------------------------------------
  {
    id: 'automation',
    title: 'Operations Automation',
    subtitle: 'Scheduled Communications & Email Orchestration',
    tag: 'Operations Productivity',
    category: 'ai-automation',
    featured: false,
    device: 'desktop-landscape',
    accentColor: '#8174ff',
    summary:
      'Automated email scheduling and routine task execution pipelines designed in n8n to reduce manual overhead and ensure consistent operational delivery.',
    problem: 'Manual repetitive team communication consumes engineering bandwidth and introduces timing inconsistencies.',
    solution: 'Designed and deployed automated workflows using n8n and Python scripts to trigger communications on precise schedules with operational logging.',
    capabilities: [
      'Trigger-based scheduling for deterministic workflow execution',
      'Template-driven email delivery with verification safeguards',
      'Operational logging and error alert webhooks',
      'Cloud deployment with zero maintenance overhead'
    ],
    tech: ['n8n', 'Python', 'Cloud Webhooks', 'Automation Workflows'],
    screens: [
      { id: 'auto-flow', name: 'Email Workflow', file: 'assets/projects/automation-1.webp', fallback: 'assets/projects/automation-1.png', desc: 'Automated email scheduling and trigger-based workflow orchestration in n8n' },
      { id: 'auto-logic', name: 'Execution Logic', file: 'assets/projects/automation-2.webp', fallback: 'assets/projects/automation-2.png', desc: 'Deterministic node execution logic and verification nodes' }
    ]
  }
];

// ============================================================================
// THEME & NAVIGATION CONTROLLERS
// ============================================================================
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

// ============================================================================
// LIGHTBOX CONTROLLER
// ============================================================================
function openLightbox(src, alt) {
  if (!lightboxImage || !lightbox) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt || 'Preview';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  lightboxClose?.focus();
  body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  body.style.overflow = '';
}

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightboxClose?.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
    closeProjectModal();
    closeMenu();
  }
});

// ============================================================================
// REUSABLE HTML BUILDERS
// ============================================================================
function buildTechTags(techList, highlightList = []) {
  if (!techList || !techList.length) return '';
  return `
    <div class="tech-tags">
      ${techList.map((t) => {
        const isHighlight = highlightList.includes(t);
        return `<span class="${isHighlight ? 'tech-highlight' : ''}">${t}</span>`;
      }).join('')}
    </div>
  `;
}

function buildMetricsStrip(metrics) {
  if (!metrics || !metrics.length) return '';
  return `
    <div class="project-metrics-strip">
      ${metrics.map((m) => `
        <div class="metric-pill">
          <span class="m-val">${m.val}</span>
          <span class="m-label">${m.label}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function buildProjectLinks(project) {
  const links = [];
  if (project.playstore) {
    links.push(`
      <a href="${project.playstore}" target="_blank" rel="noopener" class="project-btn playstore-btn">
        <span>📱</span> View on Play Store
      </a>
    `);
  }
  if (project.liveDemo) {
    links.push(`
      <a href="${project.liveDemo}" target="_blank" rel="noopener" class="project-btn live-demo-btn">
        <span>↗</span> Launch Live Demo
      </a>
    `);
  }
  if (project.github) {
    links.push(`
      <a href="${project.github}" target="_blank" rel="noopener" class="project-btn github-btn">
        <span>💻</span> View Source Code
      </a>
    `);
  }
  links.push(`
    <button type="button" class="project-btn detail-btn" onclick="openProjectModal('${project.id}')">
      <span>📖</span> Full Case Study
    </button>
  `);
  return `<div class="project-links">${links.join('')}</div>`;
}

// ============================================================================
// DEVICE MOCKUP RENDERERS
// ============================================================================
function renderDeviceMockup(project, screen, isSingle = false) {
  const deviceType = project.device || 'phone-portrait';
  const imgUrl = screen.file;
  const altText = `${project.title} - ${screen.name}: ${screen.desc}`;

  if (deviceType === 'phone-landscape') {
    return `
      <div class="device-phone-landscape">
        <div class="landscape-notch" aria-hidden="true"></div>
        <div class="landscape-screen-wrapper">
          <picture>
            <source srcset="${screen.file}" type="image/webp">
            <img class="landscape-screen-img screen-showcase-img"
                 src="${screen.fallback || screen.file}"
                 alt="${altText}"
                 loading="lazy" />
          </picture>
        </div>
      </div>
    `;
  }

  if (deviceType === 'desktop-landscape') {
    return `
      <div class="device-desktop-primary device-landscape">
        <div class="desktop-window-header">
          <div class="window-controls" aria-hidden="true">
            <span class="window-dot dot-close"></span>
            <span class="window-dot dot-min"></span>
            <span class="window-dot dot-max"></span>
          </div>
          <span class="desktop-window-title">${project.title} — Studio Workspace</span>
        </div>
        <div class="desktop-screen-wrapper">
          <picture>
            <source srcset="${screen.file}" type="image/webp">
            <img class="desktop-screen-img screen-showcase-img"
                 src="${screen.fallback || screen.file}"
                 alt="${altText}"
                 loading="lazy" />
          </picture>
        </div>
      </div>
    `;
  }

  if (deviceType === 'terminal') {
    return `
      <div class="device-terminal-primary">
        <div class="terminal-window-header">
          <div class="window-controls" aria-hidden="true">
            <span class="window-dot dot-close"></span>
            <span class="window-dot dot-min"></span>
            <span class="window-dot dot-max"></span>
          </div>
          <span class="terminal-window-title">${project.title.toLowerCase().replace(/\s+/g, '-')} — cli</span>
        </div>
        <div class="terminal-screen-wrapper">
          <picture>
            <source srcset="${screen.file}" type="image/webp">
            <img class="terminal-screen-img screen-showcase-img"
                 src="${screen.fallback || screen.file}"
                 alt="${altText}"
                 loading="lazy" />
          </picture>
        </div>
      </div>
    `;
  }

  // Default: Portrait Smartphone Frame
  return `
    <div class="device-phone-primary">
      <div class="phone-camera-notch" aria-hidden="true"></div>
      <picture>
        <source srcset="${screen.file}" type="image/webp">
        <img class="phone-screen-img screen-showcase-img"
             src="${screen.fallback || screen.file}"
             alt="${altText}"
             loading="lazy" />
      </picture>
    </div>
  `;
}

// ============================================================================
// FLAGSHIP SHOWCASE RENDERER
// ============================================================================
function renderFlagshipShowcase(project, index) {
  const isFarmLink = Boolean(project.isFarmLink);
  const isGangRace = project.id === 'gang-race';
  const isTrendPilot = project.id === 'trendpilot';

  const screens = project.screens || [];
  const firstScreen = screens[0] || { name: project.title, desc: project.subtitle, file: '' };

  // Screen Tabs
  const tabsHtml = screens.length > 1 ? `
    <div class="screen-selector-tabs" role="tablist" aria-label="${project.title} Screens">
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

  // Left Content Column
  let customLeftWidgets = '';

  if (isFarmLink) {
    customLeftWidgets = `
      <!-- District Market Intelligence -->
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

      <!-- AI Dynamic Pricing -->
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
    customLeftWidgets = `
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
    customLeftWidgets = `
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
  }

  const leftContentHtml = `
    <div class="left-content">
      <div class="flagship-topline">
        <span class="project-index">FLAGSHIP / ${String(index + 1).padStart(2, '0')}</span>
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
          <h4>The Architecture</h4>
          <p>${project.solution}</p>
        </div>

        ${customLeftWidgets}

        <div class="content-block">
          <h4>Key Implemented Capabilities</h4>
          <ul class="capabilities-list">
            ${(project.capabilities || []).map((c) => `<li>${c}</li>`).join('')}
          </ul>
        </div>

        <div class="content-block">
          <h4>Engineering Stack</h4>
          ${buildTechTags(project.tech, ['Flutter', 'Kotlin', 'AndroidX Media3', 'C++', 'n8n', 'FastAPI', 'PostgreSQL', 'OpenGL ES 3.0'])}
        </div>

        ${buildProjectLinks(project)}
      </div>
    </div>
  `;

  // Right Showcase Media Column
  let rightShowcaseHtml = '';

  if (isFarmLink) {
    // FarmLink Satellite Setup
    rightShowcaseHtml = `
      <div class="project-device-stage farmlink-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        <div class="device-stage-viewport viewport-phone" id="panel-${project.id}">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          <div class="device-satellite device-satellite-left" data-target-screen="1" title="Click to view Marketplace">
            <img src="${screens[1].file}" alt="Marketplace screen preview" loading="lazy" />
            <span class="satellite-tag">Marketplace</span>
          </div>
          <div class="device-phone-primary">
            <div class="phone-camera-notch" aria-hidden="true"></div>
            <img id="farmlink-main-screen" class="phone-screen-img screen-showcase-img"
                 src="${firstScreen.file}" alt="${project.title} - ${firstScreen.name}" loading="lazy" />
          </div>
          <div class="device-satellite device-satellite-right" data-target-screen="2" title="Click to view AI Pricing">
            <img src="${screens[2].file}" alt="AI Pricing preview" loading="lazy" />
            <span class="satellite-tag">Dynamic Pricing</span>
          </div>
        </div>
        <div class="stage-caption" id="caption-${project.id}">
          <strong class="screen-caption-title">${firstScreen.name}</strong>: 
          <span class="screen-caption-desc">${firstScreen.desc}</span>
        </div>
      </div>
    `;
  } else if (isGangRace) {
    // GaNg RaCe Landscape Video + Carousel Setup
    const videoData = project.video;
    rightShowcaseHtml = `
      <div class="project-device-stage gaming-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        
        <!-- Video Player Display -->
        <div class="gameplay-video-card" id="gang-race-video-container">
          <div class="video-window-header">
            <div class="window-controls" aria-hidden="true">
              <span class="window-dot dot-close"></span>
              <span class="window-dot dot-min"></span>
              <span class="window-dot dot-max"></span>
            </div>
            <span class="video-window-title">GaNg RaCe v1.0.5 — Android 60FPS Native Gameplay</span>
            <span class="video-status-tag">Live Footage</span>
          </div>
          <div class="gameplay-video-wrapper">
            <video id="gang-race-player" 
                   class="gameplay-video" 
                   controls 
                   playsinline 
                   preload="none" 
                   poster="${videoData.poster}"
                   aria-label="${videoData.title}">
              <source src="${videoData.file}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="video-caption-bar">
            <span><strong>Real Gameplay:</strong> 3D drift physics, Android NDK performance, and local Wi-Fi sync</span>
          </div>
        </div>

        <!-- Landscape Screenshots Carousel -->
        <div class="landscape-cards-carousel" id="gang-race-screens-carousel">
          <div class="device-stage-viewport viewport-phone-landscape" id="panel-${project.id}">
            <div class="device-ambient-glow" aria-hidden="true"></div>
            <div class="stage-cards-container" data-project-id="${project.id}">
              ${screens.map((s, sIdx) => `
                <div class="stage-card ${sIdx === 0 ? 'pos-center' : (sIdx === 1 ? 'pos-right' : 'pos-left')}"
                     data-screen-index="${sIdx}"
                     data-project-id="${project.id}"
                     role="button"
                     tabindex="0"
                     aria-label="${s.name}">
                  ${renderDeviceMockup(project, s)}
                  <span class="stage-card-tag">${s.name}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="stage-caption" id="caption-${project.id}">
            <strong class="screen-caption-title">${firstScreen.name}</strong>: 
            <span class="screen-caption-desc">${firstScreen.desc}</span>
          </div>
        </div>
      </div>
    `;
  } else if (isTrendPilot) {
    // TrendPilot AI Studio Setup: Large Workflow Screen + Generated Meme Gallery
    const memeGallery = project.gallery || [];
    rightShowcaseHtml = `
      <div class="project-device-stage trendpilot-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        
        <!-- Large Landscape Workflow Showcase -->
        <div class="device-stage-viewport viewport-desktop" id="panel-${project.id}">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          <div class="stage-cards-container" data-project-id="${project.id}">
            ${screens.map((s, sIdx) => `
              <div class="stage-card ${sIdx === 0 ? 'pos-center' : 'pos-side-right'}"
                   data-screen-index="${sIdx}"
                   data-project-id="${project.id}"
                   role="button"
                   tabindex="0"
                   aria-label="${s.name}">
                ${renderDeviceMockup(project, s)}
                <span class="stage-card-tag">${s.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="stage-caption" id="caption-${project.id}">
          <strong class="screen-caption-title">${firstScreen.name}</strong>: 
          <span class="screen-caption-desc">${firstScreen.desc}</span>
        </div>

        <!-- Integrated Generated Meme Gallery -->
        <div class="trendpilot-gallery-section">
          <div class="gallery-header">
            <h4><span>✦</span> Real Generated Meme & Content Gallery</h4>
            <small>Click image to expand in full lightbox</small>
          </div>
          <div class="meme-gallery-grid">
            ${memeGallery.map((m) => `
              <div class="meme-gallery-card" onclick="openLightbox('${m.file}', '${m.title}')" role="button" tabindex="0">
                <div class="meme-img-wrap">
                  <picture>
                    <source srcset="${m.file}" type="image/webp">
                    <img src="${m.fallback || m.file}" alt="${m.title}" loading="lazy" />
                  </picture>
                  <span class="meme-zoom-cue">🔍 Expand</span>
                </div>
                <div class="meme-info">
                  <span class="meme-tag">${m.tag}</span>
                  <strong>${m.title}</strong>
                  <p>${m.caption || m.desc || ''}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  } else {
    // genEditor & Standard Adaptive Carousel (3-screen tilt)
    rightShowcaseHtml = `
      <div class="project-device-stage" data-project-id="${project.id}" style="--proj-accent: ${project.accentColor};">
        ${tabsHtml}
        <div class="device-stage-viewport viewport-${project.device || 'phone-portrait'}" id="panel-${project.id}">
          <div class="device-ambient-glow" aria-hidden="true"></div>
          <div class="stage-cards-container" data-project-id="${project.id}">
            ${screens.map((s, sIdx) => {
              let posClass = 'pos-center';
              if (screens.length === 3) {
                posClass = sIdx === 0 ? 'pos-center' : (sIdx === 1 ? 'pos-right' : 'pos-left');
              } else if (screens.length === 2) {
                posClass = sIdx === 0 ? 'pos-center' : 'pos-side-right';
              }
              return `
                <div class="stage-card ${posClass}"
                     data-screen-index="${sIdx}"
                     data-project-id="${project.id}"
                     role="button"
                     tabindex="0"
                     aria-label="${s.name}">
                  ${renderDeviceMockup(project, s)}
                  <span class="stage-card-tag">${s.name}</span>
                </div>
              `;
            }).join('')}
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
    <article class="project-slide flagship-slide reveal" id="project-${project.id}" data-category="${project.category}">
      <div class="container">
        <div class="panel project-section flagship-panel ${isFarmLink ? 'farmlink-panel' : ''}">
          ${leftContentHtml}
          ${rightShowcaseHtml}
        </div>
      </div>
    </article>
  `;
}

// ============================================================================
// SECONDARY PROJECT CARD RENDERER (COMPACT GRID)
// ============================================================================
function renderSecondaryCard(project) {
  const firstScreen = (project.screens && project.screens[0]) ? project.screens[0].file : '';
  const fallbackScreen = (project.screens && project.screens[0]) ? (project.screens[0].fallback || project.screens[0].file) : '';

  return `
    <article class="panel secondary-card reveal" data-category="${project.category}" id="card-${project.id}">
      <div class="card-media-preview" onclick="openProjectModal('${project.id}')" role="button" tabindex="0" aria-label="Open ${project.title} details">
        <picture>
          <source srcset="${firstScreen}" type="image/webp">
          <img src="${fallbackScreen}" alt="${project.title} screenshot" loading="lazy" />
        </picture>
        <span class="preview-overlay"><span>📖</span> View Case Study</span>
      </div>
      <div class="card-body">
        <div class="card-header">
          <span class="card-tag">${project.tag}</span>
        </div>
        <h4 class="card-title">${project.title}</h4>
        <p class="card-subtitle">${project.subtitle}</p>
        <p class="card-summary">${project.summary || project.problem}</p>
        
        <div class="card-tech">
          ${(project.tech || []).slice(0, 4).map((t) => `<span>${t}</span>`).join('')}
        </div>

        <div class="card-actions">
          <button type="button" class="btn-card-details" onclick="openProjectModal('${project.id}')">
            Read Case Study <span aria-hidden="true">→</span>
          </button>
          ${project.playstore ? `<a href="${project.playstore}" target="_blank" rel="noopener" class="card-icon-link" title="Play Store">📱</a>` : ''}
          ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" rel="noopener" class="card-icon-link" title="Live Demo">↗</a>` : ''}
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="card-icon-link" title="GitHub">💻</a>` : ''}
        </div>
      </div>
    </article>
  `;
}

// ============================================================================
// PROJECT DETAIL MODAL / DRAWER CONTROLLER
// ============================================================================
window.openProjectModal = function(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project || !projectModal || !modalContentMount) return;

  const screens = project.screens || [];
  const gallery = project.gallery || [];

  modalContentMount.innerHTML = `
    <div class="modal-case-study">
      <div class="modal-hero">
        <span class="modal-tag">${project.tag}</span>
        <h2>${project.title}</h2>
        <p class="modal-subtitle">${project.subtitle}</p>
        ${buildMetricsStrip(project.metrics)}
      </div>

      <div class="modal-section">
        <h3>Problem & Objective</h3>
        <p>${project.problem}</p>
      </div>

      <div class="modal-section">
        <h3>Architecture & Solution</h3>
        <p>${project.solution}</p>
      </div>

      ${project.technicalDetails ? `
        <div class="modal-section modal-tech-breakdown">
          <h3>Technical Architecture Breakdown</h3>
          <div class="tech-details-grid">
            ${Object.entries(project.technicalDetails).map(([k, v]) => `
              <div class="tech-detail-box">
                <strong>${k.replace(/([A-Z])/g, ' $1').toUpperCase()}</strong>
                <p>${v}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="modal-section">
        <h3>Verified Capabilities</h3>
        <ul class="modal-list">
          ${(project.capabilities || []).map((c) => `<li>${c}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h3>Screenshots & Visual Evidence</h3>
        <div class="modal-screenshots-grid">
          ${screens.map((s) => `
            <div class="modal-screen-item" onclick="openLightbox('${s.file}', '${s.name}')">
              <picture>
                <source srcset="${s.file}" type="image/webp">
                <img src="${s.fallback || s.file}" alt="${s.name}" loading="lazy" />
              </picture>
              <div class="modal-screen-caption">
                <strong>${s.name}</strong>
                <small>${s.desc}</small>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      ${gallery.length ? `
        <div class="modal-section">
          <h3>Generated Media & Content</h3>
          <div class="modal-screenshots-grid">
            ${gallery.map((g) => `
              <div class="modal-screen-item" onclick="openLightbox('${g.file}', '${g.title}')">
                <picture>
                  <source srcset="${g.file}" type="image/webp">
                  <img src="${g.fallback || g.file}" alt="${g.title}" loading="lazy" />
                </picture>
                <div class="modal-screen-caption">
                  <strong>${g.title}</strong>
                  <small>${g.caption || g.desc || ''}</small>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="modal-section">
        <h3>Technologies Employed</h3>
        ${buildTechTags(project.tech)}
      </div>

      <div class="modal-footer-actions">
        ${project.playstore ? `<a href="${project.playstore}" target="_blank" rel="noopener" class="btn btn-primary"><span>📱</span> Google Play Store</a>` : ''}
        ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" rel="noopener" class="btn btn-primary"><span>↗</span> Launch Live App</a>` : ''}
        ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener" class="btn btn-secondary"><span>💻</span> GitHub Repository</a>` : ''}
        <button type="button" class="btn btn-secondary" onclick="closeProjectModal()">Close Case Study</button>
      </div>
    </div>
  `;

  projectModal.classList.add('open');
  projectModal.setAttribute('aria-hidden', 'false');
  modalCloseBtn?.focus();
  body.style.overflow = 'hidden';
};

window.closeProjectModal = function() {
  if (!projectModal) return;
  projectModal.classList.remove('open');
  projectModal.setAttribute('aria-hidden', 'true');
  body.style.overflow = '';
};

modalCloseBtn?.addEventListener('click', closeProjectModal);
projectModal?.addEventListener('click', (e) => {
  if (e.target === projectModal) closeProjectModal();
});

// ============================================================================
// INTERACTIVE SCREEN SWITCHING LOGIC
// ============================================================================
function switchProjectScreen(projectId, screenIndex) {
  const project = projects.find((p) => p.id === projectId);
  if (!project || !project.screens || !project.screens[screenIndex]) return;

  const screen = project.screens[screenIndex];
  const stage = document.querySelector(`.project-device-stage[data-project-id="${projectId}"]`);
  if (!stage) return;

  const tabs = stage.querySelectorAll('.screen-tab-btn');
  const titleElem = stage.querySelector('.screen-caption-title');
  const descElem = stage.querySelector('.screen-caption-desc');

  tabs.forEach((tab, i) => {
    const isActive = i === screenIndex;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
    tab.setAttribute('tabindex', isActive ? '0' : '-1');
  });

  // 1. FarmLink satellites swap
  if (project.isFarmLink) {
    const mainImg = stage.querySelector('#farmlink-main-screen');
    const satellites = stage.querySelectorAll('.device-satellite');

    if (mainImg) {
      mainImg.style.opacity = '0.2';
      setTimeout(() => {
        mainImg.src = screen.file;
        mainImg.alt = `${project.title} - ${screen.name}: ${screen.desc}`;
        mainImg.style.opacity = '1';
      }, 150);
    }

    if (satellites.length >= 2 && project.screens.length > 2) {
      const otherIndices = project.screens.map((_, i) => i).filter((i) => i !== screenIndex);
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
    // 2. Carousel cards repositioning
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
    } else {
      // 4+ screens (e.g. GaNg RaCe)
      cards.forEach((card) => {
        const cIdx = parseInt(card.dataset.screenIndex, 10);
        card.classList.remove('pos-center', 'pos-left', 'pos-right', 'pos-hidden');
        if (cIdx === screenIndex) {
          card.classList.add('pos-center');
        } else if (cIdx === (screenIndex + 1) % total) {
          card.classList.add('pos-right');
        } else if (cIdx === (screenIndex - 1 + total) % total) {
          card.classList.add('pos-left');
        } else {
          card.classList.add('pos-hidden');
        }
      });
    }
  }

  if (titleElem) titleElem.textContent = screen.name;
  if (descElem) descElem.textContent = screen.desc;
}

function initShowcaseEventListeners() {
  document.querySelectorAll('.project-device-stage').forEach((stage) => {
    const projectId = stage.dataset.projectId;
    const tabs = stage.querySelectorAll('.screen-tab-btn');
    const satellites = stage.querySelectorAll('.device-satellite');
    const cards = stage.querySelectorAll('.stage-card');

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => switchProjectScreen(projectId, index));
    });

    satellites.forEach((sat) => {
      sat.addEventListener('click', () => {
        const targetIdx = parseInt(sat.dataset.targetScreen, 10);
        if (!isNaN(targetIdx)) switchProjectScreen(projectId, targetIdx);
      });
    });

    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const targetIdx = parseInt(card.dataset.screenIndex, 10);
        if (card.classList.contains('pos-center') || card.classList.contains('pos-single')) {
          const img = card.querySelector('.screen-showcase-img');
          if (img) openLightbox(img.src, img.alt);
        } else {
          switchProjectScreen(projectId, targetIdx);
        }
      });
    });
  });

  // Standalone image lightbox triggers
  document.querySelectorAll('#farmlink-main-screen').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });
}

// ============================================================================
// FILTERING & MASTER RENDERER
// ============================================================================
let activeCategory = 'all';

const CATEGORIES = [
  { id: 'all', label: 'All Projects', count: 10 },
  { id: 'mobile-native', label: 'Mobile & Native Systems', count: 4 },
  { id: 'ai-automation', label: 'AI & Automation', count: 3 },
  { id: 'fullstack-cloud', label: 'Full-Stack & Cloud', count: 2 },
  { id: 'game-dev', label: 'Game Development', count: 1 }
];

function renderFilters() {
  if (!filterBarContainer) return;
  filterBarContainer.innerHTML = `
    <div class="filter-pills-wrap" role="tablist" aria-label="Project Categories">
      ${CATEGORIES.map((cat) => `
        <button class="filter-pill ${cat.id === activeCategory ? 'active' : ''}" 
                data-category="${cat.id}"
                role="tab"
                aria-selected="${cat.id === activeCategory ? 'true' : 'false'}">
          ${cat.label} <span class="pill-count">${cat.count}</span>
        </button>
      `).join('')}
    </div>
  `;

  filterBarContainer.querySelectorAll('.filter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      renderFilters();
      applyFilter();
    });
  });
}

function applyFilter() {
  // Filter flagship projects
  const flagshipSlides = document.querySelectorAll('.flagship-slide');
  let visibleFlagships = 0;
  flagshipSlides.forEach((slide) => {
    const cat = slide.dataset.category;
    const shouldShow = activeCategory === 'all' || cat === activeCategory;
    slide.style.display = shouldShow ? 'block' : 'none';
    if (shouldShow) visibleFlagships++;
  });

  // Filter secondary cards
  const secondaryCards = document.querySelectorAll('.secondary-card');
  let visibleSecondary = 0;
  secondaryCards.forEach((card) => {
    const cat = card.dataset.category;
    const shouldShow = activeCategory === 'all' || cat === activeCategory;
    card.style.display = shouldShow ? 'flex' : 'none';
    if (shouldShow) visibleSecondary++;
  });

  // Toggle secondary section wrapper when no secondary items match category
  const secWrap = document.querySelector('.secondary-showcase-wrap');
  if (secWrap) {
    secWrap.style.display = visibleSecondary > 0 ? 'block' : 'none';
  }

  // Toggle flagship showcase container when no flagships match
  if (featuredShowcaseContainer) {
    featuredShowcaseContainer.style.display = visibleFlagships > 0 ? 'block' : 'none';
  }
}

function renderAllProjects() {
  const flagshipProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  if (featuredShowcaseContainer) {
    featuredShowcaseContainer.innerHTML = flagshipProjects
      .map((project, idx) => renderFlagshipShowcase(project, idx))
      .join('');
  }

  if (secondaryGridContainer) {
    secondaryGridContainer.innerHTML = secondaryProjects
      .map((project) => renderSecondaryCard(project))
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

// Initialize everything on DOM load
renderAllProjects();
updateOnScroll();
