const body = document.body;
const toggle = document.getElementById('theme-toggle');
const progress = document.getElementById('scroll-progress');
const toTop = document.getElementById('to-top');
const projectShowcase = document.getElementById('project-showcase');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

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
    features: ['Automated scheduling', 'Email workflow orchestration', 'Reduced manual effort'],
    tech: ['n8n', 'Python', 'Cloud'],
    images: ['assets/projects/automation-1.png',
            'assets/projects/automation-2.png']
  }
];

function setTheme(isDark) {
  body.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

setTheme(localStorage.getItem('theme') !== 'light');
toggle?.addEventListener('click', () => setTheme(!body.classList.contains('dark')));

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightboxClose?.addEventListener('click', closeLightbox);

function listBlock(title, items) {
  return `
    <div class="content-block">
      <h4>${title}</h4>
      <ul>${items.map((item) => `<li>✔ ${item}</li>`).join('')}</ul>
    </div>
  `;
}

function textBlock(title, content) {
  return `
    <div class="content-block">
      <h4>${title}</h4>
      <p>${content}</p>
    </div>
  `;
}

function renderProjects() {
  const markup = projects
    .map(
      (project) => `
      <article class="project-slide reveal">
        <div class="container">
          <div class="panel project-section">
            <div class="left-content">
              <p class="kicker">${project.tag}</p>
              <h3>${project.title}</h3>
              <p class="project-intro">A story-driven product showcase focused on clarity, architecture, and measurable UX value.</p>
              ${textBlock('Problem', project.problem)}
              ${textBlock('Solution', project.solution)}
              ${listBlock('Implementation', project.implementation)}
              ${listBlock('Features', project.features)}
              <div class="content-block">
                <h4>Tech Stack</h4>
                <div class="tech-tags">${project.tech.map((tech) => `<span>${tech}</span>`).join('')}</div>
              </div>
            </div>
            <div class="right-images" aria-label="${project.title} screenshots">
              ${project.images
                .map(
                  (img, idx) => `
                <figure class="phone-shot">
                  <img src="${img}" alt="${project.title} mobile screenshot ${idx + 1}" loading="lazy" />
                </figure>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  projectShowcase.innerHTML = markup;

  document.querySelectorAll('.phone-shot img').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });
}

function updateOnScroll() {
  const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / maxHeight) * 100}%`;
  toTop.classList.toggle('show', window.scrollY > 450);
}

window.addEventListener('scroll', updateOnScroll);

toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.15 }
);

renderProjects();

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
updateOnScroll();
