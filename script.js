/**
 * Synergetics Operating System (SOS) - Official Website
 * Native Vanilla JavaScript (ES6+) Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavSpy();
  initArchitectureDiagram();
  initLightboxModal();
  initFaqAccordion();
  initDynamicYear();
});

/* ==========================================================================
   1. Mobile Navigation
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  if (!toggleBtn || !mainNav) return;

  function toggleMenu(show) {
    const isExpanded = show !== undefined ? show : mainNav.classList.toggle('open');
    if (show !== undefined) {
      mainNav.classList.toggle('open', isExpanded);
    }
    toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    const iconOpen = toggleBtn.querySelector('.icon-menu');
    const iconClose = toggleBtn.querySelector('.icon-close');
    if (iconOpen && iconClose) {
      iconOpen.style.display = isExpanded ? 'none' : 'block';
      iconClose.style.display = isExpanded ? 'block' : 'none';
    }
  }

  toggleBtn.addEventListener('click', () => {
    toggleMenu();
  });

  // Close menu when clicking any nav link
  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   2. Active Navigation Spy on Scroll
   ========================================================================== */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   3. Interactive Architecture Diagram
   ========================================================================== */
const ARCH_COMPONENTS = {
  process: {
    id: 'process',
    name: '1. Process and Workload Model',
    status: 'Proposed Model',
    purpose: 'Represents computational tasks and their structural characteristics, including runtime demands, priority state, dependencies, lifecycle state, and scheduling requirements.',
    relationship: 'Feeds task specifications directly into the Topology Model and Resource Field, establishing what computing work needs to be performed and under what constraints.',
    researchStatus: 'Conceptual model under active development; formal task dependency schemas are being formalized for simulation benchmarking.'
  },
  topology: {
    id: 'topology',
    name: '2. Topology Model',
    status: 'Experimental Concept',
    purpose: 'Explores the structural relationships, topological distances, and interconnected dependencies among tasks, system resources, and hardware execution nodes.',
    relationship: 'Transforms isolated process queues into a connected relationship graph inspired by synergetic geometry, revealing proximity, contention hotspots, and synergistic task clusters.',
    researchStatus: 'Graph models and topological distance algorithms currently tested within the Rust scheduler simulation.'
  },
  resource: {
    id: 'resource',
    name: '3. Resource Field',
    status: 'Proposed Abstraction',
    purpose: 'A continuous, field-based representation of resource availability, gradients, and distribution across CPU cores, memory channels, cache hierarchies, and I/O capacity.',
    relationship: 'Interacts dynamically with the Topology Model to map competing task footprints against spatial resource density, moving beyond monolithic time-slice quotas.',
    researchStatus: 'Under active research; gradient fields and density functions modeled in the SOS research publications.'
  },
  scheduler: {
    id: 'scheduler',
    name: '4. Adaptive Scheduler',
    status: 'Simulation in Progress',
    purpose: 'Investigates relationship-aware scheduling decisions that adapt dynamically to workload characteristics, topological proximity, and fluctuating resource conditions.',
    relationship: 'The central engine that evaluates task-to-resource compatibility and dispatches execution units based on synergistic optimization rather than naive round-robin queues.',
    researchStatus: 'Implemented as an executable Rust scheduler simulation (`synergetic_scheduler_rust_simulation.rs`). Empirical evaluation and validation ongoing.'
  },
  feedback: {
    id: 'feedback',
    name: '5. System Feedback',
    status: 'Experimental Concept',
    purpose: 'Captures empirical runtime observations about actual throughput, cache misses, latency, and task behavior to update subsequent scheduling decisions iteratively.',
    relationship: 'Closes the synergetic control loop by feeding real-time execution metrics back into the Resource Field and Topology Model, enabling emergent self-organization.',
    researchStatus: 'Designed as a closed-loop telemetry and adaptation layer in architectural documentation; simulated in test harness.'
  },
  shell: {
    id: 'shell',
    name: '6. User Interface & Shell',
    status: 'Prototype Stage',
    purpose: 'Represents the human-facing environment and management shell through which operators, researchers, and users inspect topology states and launch workloads.',
    relationship: 'Provides interactive observability into topological graphs, resource field heatmaps, and scheduler metrics, rendering the operating system state visible and navigable.',
    researchStatus: 'Explored through UI/UX visual concepts and desktop environment mockups; integration with prototype CLI and display servers in planning.'
  }
};

function initArchitectureDiagram() {
  const nodes = document.querySelectorAll('.arch-node');
  const pills = document.querySelectorAll('.arch-pill-btn');
  const cardTitle = document.getElementById('arch-card-title');
  const cardStatus = document.getElementById('arch-card-status');
  const cardPurpose = document.getElementById('arch-card-purpose');
  const cardRelationship = document.getElementById('arch-card-relationship');
  const cardResearch = document.getElementById('arch-card-research');

  if (!cardTitle) return;

  function selectComponent(key) {
    const data = ARCH_COMPONENTS[key];
    if (!data) return;

    // Update Card Content
    cardTitle.textContent = data.name;
    cardStatus.textContent = data.status;
    cardPurpose.textContent = data.purpose;
    cardRelationship.textContent = data.relationship;
    cardResearch.textContent = data.researchStatus;

    // Update SVG selection
    nodes.forEach(node => {
      if (node.getAttribute('data-component') === key) {
        node.classList.add('selected');
      } else {
        node.classList.remove('selected');
      }
    });

    // Update Pill Buttons
    pills.forEach(pill => {
      if (pill.getAttribute('data-component') === key) {
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');
      } else {
        pill.classList.remove('active');
        pill.setAttribute('aria-selected', 'false');
      }
    });
  }

  // Add click listeners to SVG nodes
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const key = node.getAttribute('data-component');
      selectComponent(key);
    });
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const key = node.getAttribute('data-component');
        selectComponent(key);
      }
    });
  });

  // Add click listeners to selector pill buttons
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const key = pill.getAttribute('data-component');
      selectComponent(key);
    });
  });

  // Initialize with the Process Model
  selectComponent('scheduler');
}

/* ==========================================================================
   4. UI/UX Concepts Lightbox Modal
   ========================================================================== */
const CONCEPT_IMAGES = [
  {
    src: 'assets/concept-01-desktop.jpg',
    title: 'Concept 01 — Synergetic Desktop Environment',
    caption: 'An exploration of how geometric organization and resource awareness might inform a future desktop experience.'
  },
  {
    src: 'assets/concept-02-monitor.jpg',
    title: 'Concept 02 — Adaptive Resource and Topology Monitor',
    caption: 'A proposed interface for exploring relationships among workloads, computational resources, and scheduling decisions.'
  }
];

function initLightboxModal() {
  const modal = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-img');
  const captionEl = document.getElementById('lightbox-caption-text');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');
  const triggers = document.querySelectorAll('.concept-lightbox-trigger');

  if (!modal || !imgEl || !triggers.length) return;

  let currentIndex = 0;
  let lastActiveElement = null;

  function showImage(index) {
    if (index < 0) index = CONCEPT_IMAGES.length - 1;
    if (index >= CONCEPT_IMAGES.length) index = 0;
    currentIndex = index;

    const data = CONCEPT_IMAGES[currentIndex];
    imgEl.src = data.src;
    imgEl.alt = data.title;
    if (captionEl) {
      captionEl.textContent = `${data.title} — ${data.caption}`;
    }
  }

  function openModal(index) {
    lastActiveElement = document.activeElement;
    showImage(index);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) lastActiveElement.focus();
  }

  triggers.forEach((trigger, idx) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const customIndex = parseInt(trigger.getAttribute('data-index') || idx, 10);
      openModal(customIndex);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (prevBtn) prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  // Close on clicking backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-image-wrap')) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      showImage(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showImage(currentIndex + 1);
    }
  });
}

/* ==========================================================================
   5. Frequently Asked Questions Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-button');
    const collapse = item.querySelector('.faq-collapse');
    if (!btn || !collapse) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items for clean accordion behavior
      faqItems.forEach(other => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.faq-button');
          const otherCollapse = other.querySelector('.faq-collapse');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherCollapse) otherCollapse.style.maxHeight = null;
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        collapse.style.maxHeight = null;
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        collapse.style.maxHeight = `${collapse.scrollHeight}px`;
      }
    });
  });
}

/* ==========================================================================
   6. Dynamic Copyright Year
   ========================================================================== */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
