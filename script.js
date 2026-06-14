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
    title: 'Offline Music Player',
    tag: 'Featured • Play Store Project',
    problem:
      'Users need uninterrupted music playback when network connectivity is poor or unavailable. Most mobile apps focus on streaming and fail to provide a polished offline-first experience.',
    solution:
      'Developed a Flutter-based offline music player focused on stable local playback, clean navigation, and fast media library rendering for real daily usage.',
    implementation:
      [
        'Implemented an audio playback system tuned for local file handling',
        'Added a background service so playback continues across app lifecycle changes',
        'Built storage-aware indexing to keep metadata and playlists synced',
        'Optimized UI rendering and transitions to remain smooth across large libraries'
      ],
    features: ['Background playback', 'Smooth UI', 'Offline support'],
    tech: ['Flutter', 'Dart'],
    images: ['assets/projects/music-1.png', 'assets/projects/music-2.png', 'assets/projects/music-3.png']
  },
  {
    title: 'Blog Application',
    tag: 'Full-stack Mobile + API',
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
    images: ['assets/projects/blog-1.png', 'assets/projects/blog-2.png']
  },
  {
    title: 'Bus Tracking',
    tag: 'Realtime Experience Simulation',
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
    images: ['assets/projects/bus-1.png', 'assets/projects/bus-2.png']
  },
  {
  title: 'Workflow Automation',
  tag: 'Operations Productivity',
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
  images: [
    'assets/projects/automation-1.png' // Landscape image
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
  return `<div class="content-block"><h4>${title}</h4><ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul></div>`;
}
function textBlock(title, content) {
  return `<div class="content-block"><h4>${title}</h4><p>${content}</p></div>`;
}

function renderProjects() {
  projectShowcase.innerHTML = projects.map((project, index) => `
    <article class="project-slide reveal">
      <div class="container">
        <div class="panel project-section">
          <div class="left-content">
            <span class="project-index">PROJECT / ${String(index + 1).padStart(2, '0')}</span>
            <p class="project-tag">${project.tag}</p>
            <h3>${project.title}</h3>
            <p class="project-intro">A story-driven product showcase focused on clarity, architecture, and meaningful user value.</p>
            <div class="project-details">
              ${textBlock('The challenge', project.problem)}
              ${textBlock('The solution', project.solution)}
              ${listBlock('Implementation', project.implementation)}
              ${listBlock('Key features', project.features)}
              <div class="content-block"><h4>Technology</h4><div class="tech-tags">${project.tech.map((tech) => `<span>${tech}</span>`).join('')}</div></div>
            </div>
          </div>
          <div class="right-images" aria-label="${project.title} screenshots">
            ${project.title === 'Workflow Automation'
              ? `<figure class="workflow-shot"><img src="${project.images[0]}" alt="${project.title} workflow overview" loading="lazy" /></figure>`
              : project.images.map((img, imageIndex) => `<figure class="phone-shot"><img src="${img}" alt="${project.title} mobile screenshot ${imageIndex + 1}" loading="lazy" /></figure>`).join('')}
          </div>
        </div>
      </div>
    </article>`).join('');

  document.querySelectorAll('.phone-shot img, .workflow-shot img').forEach((image) => {
    image.addEventListener('click', () => openLightbox(image.src, image.alt));
  });
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
