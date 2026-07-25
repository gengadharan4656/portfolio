/* ===========================
   SPACE BACKGROUND ENGINE
   =========================== */

const SPACE_SVG_NS = 'http://www.w3.org/2000/svg';
const SPACE_CONFIG = {
    stars: 120,
    streams: 6,
    particlesPerStream: 24,
    shootingStars: 4,
    orbits: 4
};

const spaceState = {
    root: null,
    svg: null,
    layers: {},
    paths: [],
    particles: [],
    rocket: null,
    shootingStars: [],
    constellations: [],
    stars: [],
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    lastTime: 0
};

function randomBetween(minimum, maximum) {
    return minimum + Math.random() * (maximum - minimum);
}

function createSvgElement(tagName, attributes = {}) {
    const element = document.createElementNS(SPACE_SVG_NS, tagName);

    Object.entries(attributes).forEach(([name, value]) => {
        element.setAttribute(name, value);
    });

    return element;
}

function setDocumentHeight() {
    spaceState.width = window.innerWidth;
    spaceState.height = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
    );

    spaceState.root.style.height = `${spaceState.height}px`;
    spaceState.svg.setAttribute('viewBox', `0 0 ${spaceState.width} ${spaceState.height}`);
}

function createLayer(className) {
    const layer = createSvgElement('g', { class: className });

    spaceState.svg.appendChild(layer);

    return layer;
}

function createStars() {
    for (let index = 0; index < SPACE_CONFIG.stars; index += 1) {
        const star = createSvgElement('circle', {
            class: 'space-background__star',
            cx: randomBetween(0, spaceState.width),
            cy: randomBetween(0, spaceState.height),
            r: randomBetween(0.45, 1.35)
        });

        star.style.setProperty('--star-opacity', randomBetween(0.06, 0.24).toFixed(3));
        star.style.setProperty('--star-drift-x', `${randomBetween(-4, 4).toFixed(2)}px`);
        star.style.setProperty('--star-drift-y', `${randomBetween(-4, 4).toFixed(2)}px`);
        star.style.animationDuration = `${randomBetween(3.5, 9).toFixed(2)}s`;
        star.style.animationDelay = `${randomBetween(-9, 0).toFixed(2)}s`;

        spaceState.layers.stars.appendChild(star);
        spaceState.stars.push(star);
    }
}

function createStreamPath(index) {
    const startX = randomBetween(-120, spaceState.width * 0.2);
    const endX = randomBetween(spaceState.width * 0.78, spaceState.width + 140);
    const startY = randomBetween(spaceState.height * 0.08, spaceState.height * 0.9);
    const endY = randomBetween(spaceState.height * 0.08, spaceState.height * 0.92);
    const controlOneX = randomBetween(spaceState.width * 0.18, spaceState.width * 0.42);
    const controlTwoX = randomBetween(spaceState.width * 0.55, spaceState.width * 0.82);
    const controlOneY = randomBetween(0, spaceState.height);
    const controlTwoY = randomBetween(0, spaceState.height);
    const pathData = `M ${startX} ${startY} C ${controlOneX} ${controlOneY}, ${controlTwoX} ${controlTwoY}, ${endX} ${endY}`;
    const path = createSvgElement('path', {
        class: 'space-background__stream-path',
        d: pathData
    });

    spaceState.layers.streams.appendChild(path);

    return {
        path,
        length: path.getTotalLength(),
        speed: randomBetween(0.012, 0.026),
        particleRadius: randomBetween(0.85, 1.7),
        offset: index * 400
    };
}

function createParticleStreams() {
    for (let index = 0; index < SPACE_CONFIG.streams; index += 1) {
        const stream = createStreamPath(index);

        spaceState.paths.push(stream);

        for (let particleIndex = 0; particleIndex < SPACE_CONFIG.particlesPerStream; particleIndex += 1) {
            const particle = createSvgElement('circle', {
                class: 'space-background__particle',
                r: stream.particleRadius
            });

            spaceState.layers.particles.appendChild(particle);
            spaceState.particles.push({
                element: particle,
                stream,
                spacing: particleIndex / SPACE_CONFIG.particlesPerStream,
                phase: randomBetween(0, stream.length)
            });
        }
    }
}

function createOrbits() {
    for (let index = 0; index < SPACE_CONFIG.orbits; index += 1) {
        const orbit = createSvgElement('ellipse', {
            class: 'space-background__orbit',
            cx: spaceState.width * randomBetween(0.36, 0.68),
            cy: spaceState.height * randomBetween(0.24, 0.72),
            rx: spaceState.width * randomBetween(0.32, 0.62),
            ry: spaceState.height * randomBetween(0.08, 0.18)
        });

        orbit.style.animationDuration = `${randomBetween(100, 200).toFixed(1)}s`;
        orbit.style.transform = `rotate(${randomBetween(-28, 28).toFixed(1)}deg)`;
        spaceState.layers.orbits.appendChild(orbit);
    }
}

function createMoon() {
    const moon = createSvgElement('g', {
        class: 'space-background__moon',
        transform: `translate(${spaceState.width * 0.82} ${spaceState.height * 0.18})`
    });

    moon.innerHTML = '<circle cx="0" cy="0" r="18"></circle><path d="M -7 -14 C 7 -7, 7 7, -7 14"></path><path d="M -17 2 C -6 -2, 6 -2, 17 2"></path>';
    spaceState.layers.moon.appendChild(moon);
}

function createRocket() {
    const rocket = createSvgElement('g', { class: 'space-background__rocket' });

    rocket.innerHTML = '<path d="M 11 2 C 17 4, 21 8, 22 14 C 18 13, 14 14, 11 17 C 9 14, 7 12, 4 10 C 7 7, 10 5, 11 2 Z"></path><path d="M 4 10 L 2 16 L 8 14"></path><path d="M 11 17 L 8 22 L 14 20"></path><circle cx="15" cy="9" r="2.2"></circle>';
    spaceState.layers.rocket.appendChild(rocket);
    spaceState.rocket = {
        element: rocket,
        streamIndex: 0,
        nextLaunch: randomBetween(3000, 9000),
        launchStart: 0,
        duration: randomBetween(26000, 42000),
        active: false
    };
}

function createConstellations() {
    for (let index = 0; index < 8; index += 1) {
        const line = createSvgElement('line', { class: 'space-background__constellation' });

        spaceState.layers.constellations.appendChild(line);
        spaceState.constellations.push(line);
    }
}

function createShootingStars() {
    for (let index = 0; index < SPACE_CONFIG.shootingStars; index += 1) {
        const star = document.createElement('span');

        star.className = 'space-background__shooting-star';
        spaceState.root.appendChild(star);
        spaceState.shootingStars.push({
            element: star,
            nextLaunch: randomBetween(4000, 40000),
            start: 0,
            duration: randomBetween(1200, 2400),
            active: false
        });
    }
}

function updateParticles(time) {
    spaceState.particles.forEach((particle) => {
        const distance = (
            (time * particle.stream.speed) +
            (particle.spacing * particle.stream.length) +
            particle.phase
        ) % particle.stream.length;
        const point = particle.stream.path.getPointAtLength(distance);

        particle.element.setAttribute('cx', point.x);
        particle.element.setAttribute('cy', point.y);
    });
}

function updateRocket(time) {
    const rocket = spaceState.rocket;

    if (!rocket.active && time > rocket.nextLaunch) {
        rocket.active = true;
        rocket.launchStart = time;
        rocket.duration = randomBetween(26000, 42000);
        rocket.streamIndex = Math.floor(randomBetween(0, spaceState.paths.length));
    }

    if (!rocket.active) {
        return;
    }

    const progress = (time - rocket.launchStart) / rocket.duration;
    const stream = spaceState.paths[rocket.streamIndex];

    if (progress >= 1) {
        rocket.active = false;
        rocket.nextLaunch = time + randomBetween(18000, 42000);
        rocket.element.style.opacity = 0;
        return;
    }

    const distance = progress * stream.length;
    const point = stream.path.getPointAtLength(distance);
    const nextPoint = stream.path.getPointAtLength(Math.min(distance + 4, stream.length));
    const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI;
    const opacity = Math.sin(progress * Math.PI) * 0.28;

    rocket.element.style.opacity = opacity.toFixed(3);
    rocket.element.setAttribute(
        'transform',
        `translate(${point.x} ${point.y}) rotate(${angle}) translate(-12 -12)`
    );
}

function updateConstellations(time) {
    if (Math.floor(time / 4500) === Math.floor(spaceState.lastTime / 4500)) {
        return;
    }

    spaceState.constellations.forEach((line) => {
        const firstStar = spaceState.stars[Math.floor(randomBetween(0, spaceState.stars.length))];
        const secondStar = spaceState.stars[Math.floor(randomBetween(0, spaceState.stars.length))];

        line.setAttribute('x1', firstStar.getAttribute('cx'));
        line.setAttribute('y1', firstStar.getAttribute('cy'));
        line.setAttribute('x2', secondStar.getAttribute('cx'));
        line.setAttribute('y2', secondStar.getAttribute('cy'));
        line.classList.add('is-visible');

        window.setTimeout(() => line.classList.remove('is-visible'), 2300);
    });
}

function updateShootingStars(time) {
    spaceState.shootingStars.forEach((star) => {
        if (!star.active && time > star.nextLaunch) {
            star.active = true;
            star.start = time;
            star.fromX = randomBetween(0, spaceState.width);
            star.fromY = randomBetween(0, Math.min(window.innerHeight, 520));
            star.angle = randomBetween(0.35, 2.7);
            star.travel = randomBetween(220, 360);
        }

        if (!star.active) {
            return;
        }

        const progress = (time - star.start) / star.duration;

        if (progress >= 1) {
            star.active = false;
            star.nextLaunch = time + randomBetween(15000, 40000);
            star.element.style.opacity = 0;
            return;
        }

        const travel = progress * star.travel;
        const x = star.fromX + Math.cos(star.angle) * travel;
        const y = window.scrollY + star.fromY + Math.sin(star.angle) * travel;
        const opacity = Math.sin(progress * Math.PI) * 0.22;

        star.element.style.opacity = opacity.toFixed(3);
        star.element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${star.angle}rad)`;
    });
}

function updateParallax() {
    const x = (spaceState.mouseX - 0.5);
    const y = (spaceState.mouseY - 0.5);

    spaceState.layers.stars.style.transform = `translate(${x * 4}px ${y * 4}px)`;
    spaceState.layers.streams.style.transform = `translate(${x * 10}px ${y * 10}px)`;
    spaceState.layers.particles.style.transform = `translate(${x * 10}px ${y * 10}px)`;
    spaceState.layers.moon.style.transform = `translate(${x * 15}px ${y * 15}px)`;
}

function animateSpace(time) {
    updateParticles(time);
    updateRocket(time);
    updateConstellations(time);
    updateShootingStars(time);
    updateParallax();

    spaceState.lastTime = time;
    requestAnimationFrame(animateSpace);
}

function rebuildSpace() {
    spaceState.svg.innerHTML = '';
    spaceState.paths = [];
    spaceState.particles = [];
    spaceState.stars = [];
    spaceState.constellations = [];
    spaceState.layers = {
        orbits: createLayer('space-background__parallax'),
        streams: createLayer('space-background__parallax'),
        particles: createLayer('space-background__parallax'),
        constellations: createLayer('space-background__parallax'),
        stars: createLayer('space-background__parallax'),
        moon: createLayer('space-background__parallax'),
        rocket: createLayer('space-background__parallax')
    };

    createOrbits();
    createParticleStreams();
    createStars();
    createConstellations();
    createMoon();
    createRocket();
}

function handleResize() {
    setDocumentHeight();
    rebuildSpace();
}

function handlePointerMove(event) {
    spaceState.mouseX = event.clientX / window.innerWidth;
    spaceState.mouseY = event.clientY / window.innerHeight;
}

function initializeSpaceBackground() {
    spaceState.root = document.getElementById('space-background');

    if (!spaceState.root) {
        return;
    }

    spaceState.svg = createSvgElement('svg', {
        class: 'space-background__canvas',
        preserveAspectRatio: 'none',
        role: 'presentation'
    });

    spaceState.root.appendChild(spaceState.svg);
    setDocumentHeight();
    rebuildSpace();
    createShootingStars();

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    requestAnimationFrame(animateSpace);
}

initializeSpaceBackground();
