// Personal Digital Headquarters - Main UI Engine
// Driven by PROFILE_DATA loaded from data.js

let activeArchiveTab = 'designs';
let certViewMode = 'grid'; // 'grid' or 'timeline'
let selectedFilter = 'all';
let currentActiveCAD = null; // Track CAD item for viewpoints slideshow

document.addEventListener('DOMContentLoaded', () => {
  // Initialize dynamic contents
  initHero();
  initSnapshot();
  initCommandCenter();
  initJourney();
  initSkills();
  initProjects();
  initInternships();
  initGallery();
  initBeyondResume();
  initGitHubDashboard();
  
  // Initialize Knowledge Archive Explorer (Consolidated T3)
  initArchiveExplorer();
  
  // Set up event listeners
  initNavbarScroll();
  initMobileMenu();
  initUniversalSearch();
  initModals();
  initContactForm();

  // Redesign Premium Interactions
  initLightboxZoomPan();
  initSearchKeyboardNav();
});

/* ==================== 1. DATA RENDERING ENGINES ==================== */

function initHero() {
  const data = PROFILE_DATA.personal;
  
  // Tagline & Bio
  document.getElementById('hero-tagline').textContent = data.tagline;
  document.getElementById('hero-bio').textContent = data.bio;
  
  // Render Metric Cards
  const metricsContainer = document.getElementById('metrics-container');
  metricsContainer.innerHTML = '';
  PROFILE_DATA.metrics.forEach(metric => {
    metricsContainer.innerHTML += `
      <div class="metric-card">
        <div class="metric-icon-box">
          <span class="material-symbols-outlined">${metric.icon}</span>
        </div>
        <div class="metric-text-box">
          <span class="metric-value">${metric.value}</span>
          <span class="metric-label">${metric.label}</span>
        </div>
      </div>
    `;
  });
}

function initSnapshot() {
  const snap = PROFILE_DATA.personal.snapshot;
  
  document.getElementById('snap-domain').textContent = snap.coreDomain;
  document.getElementById('snap-learning').textContent = snap.currentlyLearning;
  
  // Specializations
  const specContainer = document.getElementById('snap-specializations');
  specContainer.innerHTML = '';
  snap.specializations.forEach(spec => {
    specContainer.innerHTML += `<span class="snap-tag">${spec}</span>`;
  });
  
  // Open To Options
  const openContainer = document.getElementById('snap-opento');
  openContainer.innerHTML = '';
  snap.openTo.forEach(item => {
    openContainer.innerHTML += `<span class="snap-list-item">${item}</span>`;
  });
}

function initCommandCenter() {
  const cc = PROFILE_DATA.commandCenter;
  
  // Current Focus List
  const focusContainer = document.getElementById('focus-container');
  focusContainer.innerHTML = '';
  cc.currentFocus.forEach(focus => {
    focusContainer.innerHTML += `
      <div class="focus-item">
        <div class="focus-icon-box">
          <span class="material-symbols-outlined">${focus.icon}</span>
        </div>
        <span class="focus-name">${focus.name}</span>
      </div>
    `;
  });
  
  // Terminal logs
  document.getElementById('cc-building-name').textContent = cc.currentlyBuilding.name;
  document.getElementById('cc-building-desc').textContent = cc.currentlyBuilding.description;
  document.getElementById('cc-learning').textContent = cc.currentlyLearning.name;
  document.getElementById('cc-activity').textContent = cc.latestActivity.name;
  document.getElementById('cc-goal').textContent = cc.upcomingGoal.name;
}

function initJourney() {
  const timelineContainer = document.getElementById('timeline-container');
  timelineContainer.innerHTML = '';
  
  PROFILE_DATA.journey.forEach((milestone, idx) => {
    timelineContainer.innerHTML += `
      <div class="timeline-node" data-index="${idx}">
        <div class="node-bullet"></div>
        <div class="node-year">${milestone.year}</div>
        <div class="node-card">
          <h4>${milestone.title}</h4>
          <div class="node-institution">${milestone.institution}</div>
          <div class="node-click-tip">
            <span class="material-symbols-outlined" style="font-size:14px;">visibility</span>
            <span>Click to explore records & milestones</span>
          </div>
        </div>
      </div>
    `;
  });

  // Timeline node click to open details slide drawer
  const nodes = timelineContainer.querySelectorAll('.timeline-node');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const idx = node.getAttribute('data-index');
      openTimelineDrawer(PROFILE_DATA.journey[idx]);
      
      // Highlight active node
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
    });
  });
}

function openTimelineDrawer(milestone) {
  const drawer = document.getElementById('timeline-detail-drawer');
  const content = document.getElementById('drawer-content');
  
  const icon = milestone.type === 'internship' ? 'business_center' : 'school';
  
  let milestonesHtml = '';
  milestone.milestones.forEach(m => {
    milestonesHtml += `<div class="drawer-milestone-item">${m}</div>`;
  });

  content.innerHTML = `
    <div style="display:flex; align-items:center; gap:16px; margin-bottom:12px;">
      <span class="material-symbols-outlined text-indigo" style="font-size:32px;">${icon}</span>
      <div>
        <h3>${milestone.title}</h3>
        <div class="drawer-subtitle">${milestone.institution} // ${milestone.year}</div>
      </div>
    </div>
    
    <p>${milestone.details}</p>
    
    <div class="drawer-milestones">
      <h4 class="section-subtitle" style="font-size:0.75rem; margin-bottom:12px;">Key Milestones & Achievements</h4>
      ${milestonesHtml}
    </div>
  `;
  
  drawer.classList.add('active');
}

function initSkills() {
  const skillsContainer = document.getElementById('skills-dashboard-container');
  skillsContainer.innerHTML = '';
  
  PROFILE_DATA.skills.forEach(cat => {
    let listHtml = '';
    cat.list.forEach(skill => {
      const badgeHtml = skill.badge ? `<span class="skill-badge">${skill.badge}</span>` : '';
      listHtml += `
        <div class="skill-tag" data-name="${skill.name}">
          <span class="skill-dot"></span>
          <span class="skill-name">${skill.name}</span>
          ${badgeHtml}
        </div>
      `;
    });

    skillsContainer.innerHTML += `
      <div class="skills-category-card" id="skill-card-${cat.category.replace(/[^a-zA-Z]/g, '')}">
        <h3>${cat.category}</h3>
        <div class="skills-list">
          ${listHtml}
        </div>
      </div>
    `;
  });
}

function initProjects() {
  const featuredContainer = document.getElementById('featured-projects-container');
  featuredContainer.innerHTML = '';
  
  const featured = PROFILE_DATA.projects.filter(p => p.featured);
  featured.forEach(proj => {
    let techHtml = '';
    proj.technologies.forEach(t => {
      techHtml += `<span class="tech-tag">${t}</span>`;
    });

    const docLinkHtml = proj.pdf ? `
      <a href="${proj.pdf}" target="_blank" class="btn-secondary" style="padding:10px 20px; font-size:0.8rem;">
        <span class="material-symbols-outlined" style="font-size:16px;">description</span> View Report
      </a>` : '';

    featuredContainer.innerHTML += `
      <div class="featured-card">
        <div class="featured-img-side">
          <img src="${proj.image}" alt="${proj.title}" onerror="this.src='assets/projects/ecofloat_boat.png';">
          <div class="featured-img-overlay"></div>
        </div>
        <div class="featured-details-side">
          <span class="featured-cat-tag">${proj.category}</span>
          <h3 class="featured-title">${proj.title}</h3>
          <div class="featured-tagline">${proj.tagline}</div>
          <p class="featured-desc">${proj.description}</p>
          <div class="featured-tech-wrap">
            ${techHtml}
          </div>
          <div class="featured-actions">
            <button class="btn-primary view-proj-details-btn" data-id="${proj.id}" style="padding:10px 20px; font-size:0.8rem;">
              <span class="material-symbols-outlined" style="font-size:16px;">open_in_new</span> Details
            </button>
            ${docLinkHtml}
          </div>
        </div>
      </div>
    `;
  });

  document.querySelectorAll('.view-proj-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-id');
      const project = PROFILE_DATA.projects.find(p => p.id === projId);
      openProjectModal(project);
    });
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('project-detail-modal');
  const content = document.getElementById('project-modal-content');
  
  let techHtml = '';
  project.technologies.forEach(t => {
    techHtml += `<span class="tech-tag">${t}</span>`;
  });

  let galleryHtml = '';
  if (project.gallery && project.gallery.length > 0) {
    project.gallery.forEach(img => {
      galleryHtml += `
        <div class="proj-gallery-img" onclick="openLightbox('${img}', '${project.title} Detail Visual')">
          <img src="${img}" alt="Gallery item" onerror="this.parentElement.style.display='none';">
        </div>
      `;
    });
  }

  const actionsHtml = `
    <a href="${project.github}" target="_blank" class="btn-primary">
      <span class="material-symbols-outlined">code</span> GitHub Repository
    </a>
    ${project.pdf ? `<a href="${project.pdf}" target="_blank" class="btn-secondary"><span class="material-symbols-outlined">picture_as_pdf</span> Technical Report</a>` : ''}
    ${project.prd ? `<a href="${project.prd}" target="_blank" class="btn-secondary"><span class="material-symbols-outlined">description</span> View PRD Specs</a>` : ''}
    ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn-secondary"><span class="material-symbols-outlined">image</span> View Prototype Picture</a>` : ''}
  `;

  content.innerHTML = `
    <span class="featured-cat-tag">${project.category}</span>
    <h2>${project.title}</h2>
    <div class="proj-modal-tagline">${project.tagline}</div>
    
    ${galleryHtml ? `
      <h4 class="section-subtitle" style="font-size:0.75rem; margin-bottom:12px;">Subsystem Blueprints & Renders (Click to zoom)</h4>
      <div class="proj-modal-gallery">${galleryHtml}</div>
    ` : ''}

    <p class="proj-modal-desc">${project.longDescription || project.description}</p>
    
    <div class="proj-modal-tech">${techHtml}</div>
    
    <div class="proj-modal-actions">${actionsHtml}</div>
  `;
  
  modal.classList.add('active');
}

function initInternships() {
  const container = document.getElementById('internships-container');
  container.innerHTML = '';
  
  PROFILE_DATA.internships.forEach(intern => {
    let bulletsHtml = '';
    intern.responsibilities.forEach(b => {
      bulletsHtml += `<li>${b}</li>`;
    });

    const reportBtn = intern.document ? `
      <a href="${intern.document}" target="_blank" class="btn-primary" style="padding: 8px 16px; font-size: 0.78rem; border-radius: 8px;">
        <span class="material-symbols-outlined" style="font-size:16px;">description</span> Technical Report
      </a>` : `
      <div style="display:inline-block; position:relative; margin-right: 8px;">
        <button onclick="triggerInternshipUpload(this, '${intern.company.replace(/'/g, "\\'")}', 'report')" class="btn-primary upload-fallback-btn" style="padding: 8px 16px; font-size: 0.78rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.15); color: var(--text-secondary);">
          <span class="material-symbols-outlined" style="font-size:16px;">upload_file</span> Add Report
        </button>
        <input type="file" accept=".pdf,.doc,.docx" style="display:none;" onchange="handleInternshipUpload(event, '${intern.company.replace(/'/g, "\\'")}', 'report', this)">
      </div>`;

    const certBtn = intern.certificate ? `
      <button onclick="openCertificateViewer('${intern.certificate}', '${intern.company.replace(/'/g, "\\'")}', 'Internship Cert')" class="btn-secondary" style="padding: 8px 16px; font-size: 0.78rem; border-radius: 8px;">
        <span class="material-symbols-outlined" style="font-size:16px;">verified</span> Internship Certificate
      </button>` : `
      <div style="display:inline-block; position:relative;">
        <button onclick="triggerInternshipUpload(this, '${intern.company.replace(/'/g, "\\'")}', 'certificate')" class="btn-secondary upload-fallback-btn" style="padding: 8px 16px; font-size: 0.78rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.15); color: var(--text-secondary);">
          <span class="material-symbols-outlined" style="font-size:16px;">upload_file</span> Add Certificate
        </button>
        <input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" style="display:none;" onchange="handleInternshipUpload(event, '${intern.company.replace(/'/g, "\\'")}', 'certificate', this)">
      </div>`;

    container.innerHTML += `
      <div class="internship-card">
        <div class="intern-header">
          <div class="intern-title-group">
            <div class="intern-icon-box">
              <span class="material-symbols-outlined">${intern.logo}</span>
            </div>
            <div>
              <h3 class="intern-role">${intern.role}</h3>
              <div class="intern-company">${intern.company} // ${intern.division}</div>
            </div>
          </div>
          <span class="intern-date">${intern.duration}</span>
        </div>
        
        <div class="intern-body-grid">
          <div class="intern-bullets-col">
            <h4>Responsibilities & Projects</h4>
            <ul>
              ${bulletsHtml}
            </ul>
          </div>
          
          <div class="intern-learnings-col">
            <h4>Engineering Learnings</h4>
            <div class="learnings-text">
              ${intern.learnings}
            </div>
            <div class="intern-actions">
              ${reportBtn}
              ${certBtn}
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function initGallery() {
  const container = document.getElementById('gallery-container');
  container.innerHTML = '';
  
  PROFILE_DATA.gallery.forEach(img => {
    container.innerHTML += `
      <div class="gallery-item" onclick="openLightbox('${img.filePath}', '${img.title}')">
        <img src="${img.filePath}" alt="${img.title}" loading="lazy" onerror="this.parentElement.style.display='none';">
        <div class="gallery-desc-overlay">
          <span class="gallery-item-cat">${img.category}</span>
          <div class="gallery-item-title">${img.title}</div>
          <div class="gallery-item-desc">${img.desc}</div>
        </div>
      </div>
    `;
  });
}

function initBeyondResume() {
  const container = document.getElementById('beyond-feed-container');
  container.innerHTML = '';
  
  PROFILE_DATA.beyondResume.forEach(item => {
    container.innerHTML += `
      <div class="beyond-card">
        <div class="beyond-meta">
          <span class="beyond-tag">${item.tag}</span>
          <span class="beyond-status">${item.status}</span>
        </div>
        <div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    `;
  });
}

function initGitHubDashboard() {
  fetchGitHubData().then(data => {
    document.getElementById('github-avatar').src = data.profile.avatarUrl;
    document.getElementById('github-repo-count').textContent = data.profile.publicRepos;
    document.getElementById('github-followers').textContent = data.profile.followers;
    
    const chart = document.getElementById('github-languages-chart');
    chart.innerHTML = '';
    
    const colors = {
      "Python": "#3572A5",
      "C++": "#f34b7d",
      "MATLAB": "#e16737",
      "HTML": "#e34c26",
      "JavaScript": "#f1e05a",
      "CSS": "#563d7c"
    };

    Object.keys(data.languages).forEach(lang => {
      const frequency = data.languages[lang];
      const color = colors[lang] || "#8b949e";
      chart.innerHTML += `
        <div class="lang-pill-metric">
          <span class="lang-color-indicator" style="background-color: ${color};"></span>
          <span>${lang} (${frequency})</span>
        </div>
      `;
    });

    const reposContainer = document.getElementById('github-repos-container');
    reposContainer.innerHTML = '';
    
    data.repos.forEach(repo => {
      const color = colors[repo.language] || "#8b949e";
      reposContainer.innerHTML += `
        <a href="${repo.url}" target="_blank" class="gh-repo-card">
          <div class="gh-repo-header">
            <span class="gh-repo-name">${repo.name}</span>
            <span class="material-symbols-outlined" style="font-size:16px;">open_in_new</span>
          </div>
          <p>${repo.description}</p>
          <div class="gh-repo-footer">
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="lang-color-indicator" style="background-color: ${color};"></span>
              <span>${repo.language}</span>
            </div>
            <div class="gh-repo-meta">
              <span class="gh-repo-meta-item">
                <span class="material-symbols-outlined" style="font-size:12px;">star</span> ${repo.stars}
              </span>
              <span class="gh-repo-meta-item">
                <span class="material-symbols-outlined" style="font-size:12px;">alt_route</span> ${repo.forks}
              </span>
            </div>
          </div>
        </a>
      `;
    });
  });
}

/* ==================== 2. KNOWLEDGE ARCHIVE EXPLORER Logic (Tabbed T3) ==================== */

function initArchiveExplorer() {
  const tabs = document.querySelectorAll('.archive-tab-btn');
  const searchInput = document.getElementById('archive-sidebar-search');

  // Render initial tab (designs)
  switchArchiveTab('designs');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const tabName = tab.getAttribute('data-tab');
      switchArchiveTab(tabName);
    });
  });

  searchInput.addEventListener('input', () => {
    filterArchiveData();
  });

  // Open modal triggers
  const openArchiveBtn = document.getElementById('open-archive-btn');
  const openArchiveVisual = document.getElementById('open-archive-visual-trigger');
  
  const openArchive = () => {
    const modal = document.getElementById('archive-explorer-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Refresh active tab layout when opened
      switchArchiveTab(activeArchiveTab);
    }
  };

  if (openArchiveBtn) openArchiveBtn.addEventListener('click', openArchive);
  if (openArchiveVisual) openArchiveVisual.addEventListener('click', openArchive);

  // Catch navbar / header Archive links
  const archiveLinks = document.querySelectorAll('a[href="#archive-explorer"]');
  archiveLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openArchive();
    });
  });
}

function switchArchiveTab(tabName) {
  activeArchiveTab = tabName;
  selectedFilter = 'all';
  
  // Hide all panels, show the active one
  const panes = document.querySelectorAll('.archive-tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));
  document.getElementById(`pane-${tabName}`).classList.add('active');

  // Reset search input
  document.getElementById('archive-sidebar-search').value = '';

  // Render contextual filters in the sidebar
  renderSidebarFilters();
  
  // Render active dataset
  filterArchiveData();

  // Special view controllers for certificates chronology toggling
  if (tabName === 'certificates') {
    initCertViewToggles();
  }
}

function initArchiveFilters() {
  const widget = document.getElementById('archive-filters-widget');
  widget.innerHTML = '';

  let title = 'Categories';
  let filters = [];

  if (activeArchiveTab === 'designs') {
    title = 'CAD Vault Subcategories';
    let filtersHtml = `<div class="sidebar-filter-item ${selectedFilter === 'all' ? 'active' : ''}" data-filter="all">
      <span>Show All Designs</span>
    </div>`;

    const designGroups = {
      "Practice Parts": ["Exercises 1-28", "Daily Challenges"],
      "Mechanical Assemblies": ["Engines", "Mechanisms", "Heavy Equipment"],
      "Projects": ["TPMS", "Research Designs", "Product Concepts"],
      "Others": ["Scans", "Drafts", "Experimental Models"]
    };

    for (const [groupName, subCats] of Object.entries(designGroups)) {
      filtersHtml += `<span class="sidebar-filter-group-header">${groupName}</span>`;
      subCats.forEach(sub => {
        filtersHtml += `
          <div class="sidebar-filter-item sub-item ${selectedFilter === sub ? 'active' : ''}" data-filter="${sub}">
            <span>${sub}</span>
          </div>
        `;
      });
    }

    widget.innerHTML = `
      <h4>${title}</h4>
      <div class="sidebar-filter-list">
        ${filtersHtml}
      </div>
    `;

    widget.querySelectorAll('.sidebar-filter-item').forEach(item => {
      item.addEventListener('click', () => {
        widget.querySelectorAll('.sidebar-filter-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        selectedFilter = item.getAttribute('data-filter');
        filterArchiveData();
      });
    });
    return;
  } else if (activeArchiveTab === 'certificates') {
    title = 'Categories';
    const categories = new Set();
    PROFILE_DATA.certificates.forEach(c => categories.add(c.category));
    filters = Array.from(categories);
  } else if (activeArchiveTab === 'presentations') {
    title = 'Categories';
    const categories = new Set();
    PROFILE_DATA.presentations.forEach(p => categories.add(p.category));
    filters = Array.from(categories);
  } else if (activeArchiveTab === 'documents') {
    title = 'Document Type';
    const types = new Set();
    PROFILE_DATA.documents.forEach(d => types.add(d.type));
    filters = Array.from(types);
  } else if (activeArchiveTab === 'research') {
    title = 'Boundary Software';
    const softwares = new Set();
    PROFILE_DATA.research.forEach(r => softwares.add(r.software.split('&')[0].trim()));
    filters = Array.from(softwares);
  }

  let filtersHtml = `<div class="sidebar-filter-item ${selectedFilter === 'all' ? 'active' : ''}" data-filter="all">
    <span>Show All</span>
  </div>`;

  filters.forEach(f => {
    filtersHtml += `
      <div class="sidebar-filter-item ${selectedFilter === f ? 'active' : ''}" data-filter="${f}">
        <span>${f}</span>
      </div>
    `;
  });

  widget.innerHTML = `
    <h4>${title}</h4>
    <div class="sidebar-filter-list">
      ${filtersHtml}
    </div>
  `;

  widget.querySelectorAll('.sidebar-filter-item').forEach(item => {
    item.addEventListener('click', () => {
      widget.querySelectorAll('.sidebar-filter-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      selectedFilter = item.getAttribute('data-filter');
      filterArchiveData();
    });
  });
}

function filterArchiveData() {
  const query = document.getElementById('archive-sidebar-search').value.toLowerCase().trim();

  if (activeArchiveTab === 'designs') {
    const filtered = PROFILE_DATA.cadVault.filter(cad => {
      const matchesSearch = cad.title.toLowerCase().includes(query) || cad.description.toLowerCase().includes(query) || cad.tags.some(t => t.toLowerCase().includes(query));
      const matchesFilter = selectedFilter === 'all' || cad.subCategory === selectedFilter || cad.category === selectedFilter;
      return matchesSearch && matchesFilter;
    });
    renderArchiveDesigns(filtered);
  } else if (activeArchiveTab === 'certificates') {
    const filtered = PROFILE_DATA.certificates.filter(cert => {
      const matchesSearch = cert.title.toLowerCase().includes(query) || cert.issuer.toLowerCase().includes(query) || cert.description.toLowerCase().includes(query);
      const matchesFilter = selectedFilter === 'all' || cert.category === selectedFilter;
      return matchesSearch && matchesFilter;
    });
    renderArchiveCertificates(filtered);
  } else if (activeArchiveTab === 'presentations') {
    const filtered = PROFILE_DATA.presentations.filter(pres => {
      const matchesSearch = pres.title.toLowerCase().includes(query) || pres.description.toLowerCase().includes(query) || pres.tags.some(t => t.toLowerCase().includes(query));
      const matchesFilter = selectedFilter === 'all' || pres.category === selectedFilter;
      return matchesSearch && matchesFilter;
    });
    renderArchivePresentations(filtered);
  } else if (activeArchiveTab === 'documents') {
    const filtered = PROFILE_DATA.documents.filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(query) || doc.description.toLowerCase().includes(query) || doc.software.toLowerCase().includes(query);
      const matchesFilter = selectedFilter === 'all' || doc.type === selectedFilter;
      return matchesSearch && matchesFilter;
    });
    renderArchiveDocuments(filtered);
  } else if (activeArchiveTab === 'research') {
    const filtered = PROFILE_DATA.research.filter(res => {
      const matchesSearch = res.title.toLowerCase().includes(query) || res.description.toLowerCase().includes(query) || res.software.toLowerCase().includes(query);
      const matchesFilter = selectedFilter === 'all' || res.software.includes(selectedFilter);
      return matchesSearch && matchesFilter;
    });
    renderArchiveResearch(filtered);
  }
}

function isCADFile(path) {
  if (!path) return false;
  const lower = path.toLowerCase();
  return lower.endsWith('.f3d') || lower.endsWith('.stl') || lower.endsWith('.step');
}

// 1. Designs Render with viewpoints slideshow
function renderArchiveDesigns(items) {
  const grid = document.getElementById('explorer-designs-grid');
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px 0; color:var(--text-secondary);">No designs match filters.</div>`;
    return;
  }

  items.forEach(cad => {
    let tagsHtml = '';
    cad.tags.forEach(t => {
      tagsHtml += `<span class="tech-tag">${t}</span>`;
    });

    const crossLinkHtml = cad.relatedContent ? `
      <div class="meta-row">
        <span>Related Content:</span>
        <span onclick="triggerCrossLink('${cad.relatedContent.link}')" class="crosslink-tag">${cad.relatedContent.text}</span>
      </div>` : '';

    const downloadBtnHtml = cad.cadSource ? `
      <div class="meta-row" style="margin-top: 6px;">
        <span>Source CAD Model:</span>
        <a href="${cad.cadSource}" download class="crosslink-tag" style="display:inline-flex; align-items:center; gap:4px; color:var(--accent-primary); border-color:var(--accent-primary); cursor:pointer; text-decoration:none;">
          <span class="material-symbols-outlined" style="font-size:12px;">download</span> Download ${cad.cadSource.split('.').pop().toUpperCase()}
        </a>
      </div>` : '';

    let previewImgSrc = cad.filePath || 'assets/projects/fig-2.png';
    let fallbackImgSrc = 'assets/projects/ecofloat_boat.png';
    let actionIcon = 'zoom_in';
    let labelHtml = '';

    if (cad.cadSource) {
      const ext = cad.cadSource.split('.').pop().toUpperCase();
      labelHtml = `<div class="vault-source-badge">${ext} MODEL</div>`;
    }

    grid.innerHTML += `
      <div class="design-vault-card">
        <div class="vault-img-box" onclick="openCADLightbox('${cad.id}')">
          <img src="${previewImgSrc}" alt="${cad.title}" onerror="this.src='${fallbackImgSrc}';">
          ${labelHtml}
          <div class="vault-zoom-indicator">
            <span class="material-symbols-outlined">${actionIcon}</span>
          </div>
        </div>
        <div class="vault-info-box">
          <div class="vault-info-header" style="margin-bottom:6px;">
            <span class="vault-tag">${cad.type}</span>
            <span style="font-size:0.75rem; color:var(--text-secondary);">${cad.date}</span>
          </div>
          <h4>${cad.title}</h4>
          <p>${cad.description}</p>
          
          <div class="vault-metadata-footer">
            <div class="meta-row">
              <span>Software Used:</span>
              <span class="text-white font-bold" onclick="focusSkill('${cad.software}')" style="cursor:pointer; text-decoration:underline;">${cad.software}</span>
            </div>
            ${crossLinkHtml}
            ${downloadBtnHtml}
            <div class="proj-modal-tech" style="margin-bottom:0; margin-top:6px;">${tagsHtml}</div>
          </div>
        </div>
      </div>
    `;
  });
}

function openCADLightbox(cadId) {
  const cad = PROFILE_DATA.cadVault.find(c => c.id === cadId);
  if (!cad) return;

  if (isCADFile(cad.filePath)) {
    // If it's a CAD source file, we trigger a download!
    const link = document.createElement('a');
    link.href = cad.filePath;
    link.download = cad.filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }
  
  currentActiveCAD = cad;
  
  const drawer = document.getElementById('lightbox-viewpoints-drawer');
  const container = document.getElementById('lightbox-viewpoints-container');
  
  if (cad.viewpoints && cad.viewpoints.length > 0) {
    drawer.style.display = 'block';
    container.innerHTML = '';
    cad.viewpoints.forEach((v, idx) => {
      container.innerHTML += `
        <div class="viewpoint-thumb ${idx === 0 ? 'active' : ''}" onclick="switchViewpoint('${v}', this)">
          <img src="${v}" alt="Viewpoint angle" onerror="this.src='assets/projects/ecofloat_boat.png';">
        </div>
      `;
    });
  } else {
    drawer.style.display = 'none';
  }

  openLightbox(cad.filePath, cad.title);
}

function switchViewpoint(filePath, thumbNode) {
  document.getElementById('lightbox-img').src = filePath;
  
  // Highlight active thumb
  const thumbs = document.querySelectorAll('.viewpoint-thumb');
  thumbs.forEach(t => t.classList.remove('active'));
  thumbNode.classList.add('active');
}

// 2. Certificates Render
function initCertViewToggles() {
  const btnGrid = document.getElementById('btn-cert-grid');
  const btnTimeline = document.getElementById('btn-cert-timeline');
  const paneGrid = document.getElementById('explorer-certs-grid');
  const paneTimeline = document.getElementById('explorer-certs-timeline');

  btnGrid.addEventListener('click', () => {
    btnGrid.classList.add('active');
    btnTimeline.classList.remove('active');
    paneGrid.style.display = 'grid';
    paneTimeline.style.display = 'none';
    certViewMode = 'grid';
    filterArchiveData();
  });

  btnTimeline.addEventListener('click', () => {
    btnTimeline.classList.add('active');
    btnGrid.classList.remove('active');
    paneTimeline.style.display = 'block';
    paneGrid.style.display = 'none';
    certViewMode = 'timeline';
    filterArchiveData();
  });
}

function renderArchiveCertificates(items) {
  const grid = document.getElementById('explorer-certs-grid');
  const timeline = document.getElementById('explorer-certs-timeline');

  grid.innerHTML = '';
  timeline.innerHTML = '';

  if (items.length === 0) {
    const errorHtml = `<div style="text-align:center; padding:40px 0; color:var(--text-secondary);">No qualifications match filters.</div>`;
    grid.innerHTML = errorHtml;
    timeline.innerHTML = errorHtml;
    return;
  }

  items.forEach(cert => {
    const pdfPath = `assets/certificates/${cert.fileName}`;
    grid.innerHTML += `
      <div class="certificate-card">
        <span class="cert-issuer-badge">${cert.issuer} // ${cert.date}</span>
        <h4>${cert.title}</h4>
        <p class="cert-description">${cert.description}</p>
        
        <div class="vault-metadata-footer" style="border:none; padding-top:0; margin-bottom:12px; font-size:0.72rem;">
          <div class="meta-row">
            <span>Related:</span>
            <span onclick="triggerCrossLink('${cert.relatedContent.link}')" class="crosslink-tag">${cert.relatedContent.text}</span>
          </div>
        </div>

        <div class="cert-actions" style="margin-top:auto;">
          <button onclick="openCertificateViewer('${pdfPath}', '${cert.title}')" class="btn-primary" style="padding:6px 12px; font-size:0.75rem; border-radius:6px; flex-grow:1;">
            <span class="material-symbols-outlined" style="font-size:14px;">verified</span> Verify PDF
          </button>
        </div>
      </div>
    `;
  });

  const sortedCerts = [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
  sortedCerts.forEach(cert => {
    const pdfPath = `assets/certificates/${cert.fileName}`;
    timeline.innerHTML += `
      <div class="cert-timeline-item">
        <div class="cert-timeline-bullet"></div>
        <div class="cert-timeline-date">${cert.date} // ${cert.issuer}</div>
        <h4>${cert.title}</h4>
        <div class="cert-timeline-meta">
          <p>${cert.description}</p>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
            <span style="font-size:0.75rem;">Related: <strong class="crosslink-tag" onclick="triggerCrossLink('${cert.relatedContent.link}')">${cert.relatedContent.text}</strong></span>
            <button onclick="openCertificateViewer('${pdfPath}', '${cert.title}')" class="btn-secondary" style="padding:4px 10px; font-size:0.7rem; border-radius:4px;">
              <span class="material-symbols-outlined" style="font-size:12px;">open_in_new</span> Verify
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// 3. Presentations Render
function renderArchivePresentations(items) {
  const grid = document.getElementById('explorer-presentations-grid');
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px 0; color:var(--text-secondary);">No presentations match filters.</div>`;
    return;
  }

  items.forEach(pres => {
    let tagsHtml = '';
    pres.tags.forEach(t => {
      tagsHtml += `<span class="tech-tag">${t}</span>`;
    });

    const pptxPath = `assets/presentations/${pres.fileName}`;

    grid.innerHTML += `
      <div class="pres-card">
        <div class="pres-cover-box">
          <div class="pres-slides-badge">${pres.slidesCount} Slides</div>
          <div class="pres-ext-badge">.PPTX</div>
          <div class="pres-cover-title">${pres.title}</div>
          <div class="pres-cover-badge">${pres.category}</div>
        </div>
        <div class="pres-info-box">
          <h4>Technical Slide deck</h4>
          <p>${pres.description}</p>
          
          <div class="pres-meta-footer">
            <div class="meta-row" style="font-size:0.75rem; color:var(--text-secondary);">
              <span>Date:</span>
              <span>${pres.date}</span>
            </div>
            <div class="meta-row" style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:12px;">
              <span>Related Project:</span>
              <span onclick="triggerCrossLink('${pres.relatedContent.link}')" class="crosslink-tag">${pres.relatedContent.text}</span>
            </div>
            <div class="proj-modal-tech" style="margin-bottom:18px;">${tagsHtml}</div>
            
            <div class="pres-actions">
              <button onclick="openPresentationPreview('${pres.id}')" class="btn-primary" style="padding:8px 14px; font-size:0.75rem; border-radius:6px; flex-grow:1;">
                <span class="material-symbols-outlined" style="font-size:14px;">co_present</span> Preview Slides
              </button>
              <a href="${pptxPath}" download class="btn-secondary" style="padding:8px 14px; font-size:0.75rem; border-radius:6px; display:inline-flex; align-items:center; gap:4px;">
                <span class="material-symbols-outlined" style="font-size:14px;">download</span> Download
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function openPresentationPreview(presId) {
  const pres = PROFILE_DATA.presentations.find(p => p.id === presId);
  const modal = document.getElementById('presentation-preview-modal');
  const content = document.getElementById('pres-modal-content');

  let outlineHtml = '';
  pres.slideOutlines.forEach(o => {
    outlineHtml += `<div class="slide-outline-item">${o}</div>`;
  });

  const pdfFrameHtml = pres.pdfName ? `
    <h4 class="section-subtitle" style="font-size:0.75rem; margin-top:24px; margin-bottom:12px;">Inline Slide Viewer</h4>
    <div style="aspect-ratio:16/9; background:#0d121c; border:1px solid var(--border-color); border-radius:12px; overflow:hidden;">
      <iframe src="assets/presentations/${pres.pdfName}#toolbar=0" width="100%" height="100%" frameborder="0"></iframe>
    </div>
  ` : `
    <div class="info-widget" style="margin-top:20px;">
      <span class="material-symbols-outlined text-gold">info</span>
      <p>Inline slide previews require PDF conversion. Please click download to obtain the original PowerPoint deck: <strong>${pres.fileName}</strong></p>
    </div>
  `;

  content.innerHTML = `
    <span class="featured-cat-tag">${pres.category} // ${pres.slidesCount} Slides</span>
    <h2>${pres.title}</h2>
    <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:20px;">${pres.description}</p>
    
    <h4 class="section-subtitle" style="font-size:0.75rem; margin-bottom:12px;">Slide outlines & Index Summary</h4>
    <div class="slide-outline-list">
      ${outlineHtml}
    </div>

    ${pdfFrameHtml}
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 4. Documents Render
function renderArchiveDocuments(items) {
  const tbody = document.getElementById('explorer-documents-table');
  tbody.innerHTML = '';

  if (items.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:40px 0; color:var(--text-secondary);">No documents match filters.</td></tr>`;
    return;
  }

  items.forEach(doc => {
    tbody.innerHTML += `
      <tr>
        <td>
          <div class="doc-name-cell">
            <span class="material-symbols-outlined">picture_as_pdf</span>
            <div>
              <span class="text-white" style="font-weight:600;">${doc.title}</span>
              <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px;">
                Related: <strong class="crosslink-tag" onclick="triggerCrossLink('${doc.relatedContent.link}')">${doc.relatedContent.text}</strong>
              </div>
            </div>
          </div>
        </td>
        <td class="doc-type-cell">${doc.software}</td>
        <td><span class="vault-tag">${doc.type}</span></td>
        <td class="doc-size-cell">${doc.fileSize}</td>
        <td>
          <button onclick="openCertificateViewer('${doc.filePath}', '${doc.title}')" class="btn-primary" style="padding: 6px 12px; font-size: 0.72rem; border-radius: 6px; margin-right:4px;">
            <span class="material-symbols-outlined" style="font-size: 14px;">visibility</span> Preview
          </button>
          <a href="${doc.filePath}" download class="btn-secondary" style="padding: 6px 12px; font-size: 0.72rem; border-radius: 6px; display:inline-flex; align-items:center; gap:4px;">
            <span class="material-symbols-outlined" style="font-size: 14px;">download</span> Download
          </a>
        </td>
      </tr>
    `;
  });
}

// 5. Research Hub Render
function renderArchiveResearch(items) {
  const tbody = document.getElementById('explorer-research-table');
  tbody.innerHTML = '';

  if (items.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:40px 0; color:var(--text-secondary);">No research papers match filters.</td></tr>`;
    return;
  }

  items.forEach(res => {
    tbody.innerHTML += `
      <tr>
        <td>
          <div class="doc-name-cell">
            <span class="material-symbols-outlined">description</span>
            <div>
              <span class="text-white" style="font-weight:600;">${res.title}</span>
              <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px;">
                Source: <strong>${res.source} // ${res.date}</strong>
              </div>
            </div>
          </div>
        </td>
        <td class="doc-type-cell">${res.software}</td>
        <td class="doc-size-cell">${res.fileSize}</td>
        <td>
          <button onclick="openCertificateViewer('${res.filePath}', '${res.title}')" class="btn-primary" style="padding: 6px 12px; font-size: 0.72rem; border-radius: 6px; margin-right:4px;">
            <span class="material-symbols-outlined" style="font-size: 14px;">visibility</span> Open Paper
          </button>
          <a href="${res.filePath}" download class="btn-secondary" style="padding: 6px 12px; font-size: 0.72rem; border-radius: 6px; display:inline-flex; align-items:center; gap:4px;">
            <span class="material-symbols-outlined" style="font-size: 14px;">download</span> PDF
          </a>
        </td>
      </tr>
    `;
  });
}

// Video section removed.

/* ==================== 3. INTERCONNECTED NAVIGATION LOGIC ==================== */

function triggerCrossLink(targetLink) {
  const project = PROFILE_DATA.projects.find(p => p.id === targetLink);
  if (project) {
    openProjectModal(project);
    return;
  }
  
  const anchor = document.getElementById(targetLink);
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth' });
    anchor.classList.add('highlight-section-glow');
    setTimeout(() => anchor.classList.remove('highlight-section-glow'), 1500);
  }
}

function focusSkill(toolName) {
  const skillSection = document.getElementById('skills');
  if (skillSection) {
    skillSection.scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
      const rows = document.querySelectorAll('.skill-row');
      rows.forEach(row => {
        const nameText = row.getAttribute('data-name');
        if (nameText && nameText.toLowerCase().includes(toolName.toLowerCase())) {
          row.style.background = 'rgba(79, 70, 229, 0.15)';
          row.style.borderColor = 'var(--accent-primary)';
          row.style.transform = 'scale(1.03)';
          row.style.transition = 'all 0.5s ease';
          
          setTimeout(() => {
            row.style.background = '';
            row.style.borderColor = '';
            row.style.transform = '';
          }, 2000);
        }
      });
    }, 800);
  }
}

/* ==================== 4. FLOATING NAVIGATION CONTROLLERS ==================== */

function initNavbarScroll() {
  const nav = document.getElementById('floating-navbar');
  let lastScrollY = window.scrollY;
  
  // Initial progress update
  updateScrollProgress();
  
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    
    if (window.scrollY > lastScrollY && window.scrollY > 200) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
    spyNavbarLinks();
  });
}

function updateScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = scrollPercent + '%';
}

function spyNavbarLinks() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentActive = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      currentActive = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    
    let href = link.getAttribute('href');
    if (currentActive === 'archive-explorer' && href === '#archive-explorer') {
      link.classList.add('active');
    } else if (href === `#${currentActive}`) {
      link.classList.add('active');
    }
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-dropdown');
  const links = document.querySelectorAll('.mobile-link');
  
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    
    const icon = toggle.querySelector('span');
    if (menu.classList.contains('active')) {
      icon.textContent = 'close';
    } else {
      icon.textContent = 'menu';
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.querySelector('span').textContent = 'menu';
    });
  });

  document.addEventListener('click', (e) => {
    if (menu.classList.contains('active') && !menu.contains(e.target) && e.target !== toggle) {
      menu.classList.remove('active');
      toggle.querySelector('span').textContent = 'menu';
    }
  });
}

/* ==================== 5. UNIVERSAL SEARCH ENGINE ==================== */

function initUniversalSearch() {
  const trigger = document.getElementById('search-trigger');
  const overlay = document.getElementById('global-search-modal');
  const closeBtn = document.getElementById('search-modal-close');
  const searchInput = document.getElementById('global-search-input');
  const resultsContainer = document.getElementById('search-results-container');
  const feedback = document.getElementById('search-results-feedback');

  trigger.addEventListener('click', openSearch);
  
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeSearch();
    }
  });

  closeBtn.addEventListener('click', closeSearch);
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  function openSearch() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput.focus(), 100);
  }

  function closeSearch() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
    resultsContainer.innerHTML = '';
    feedback.style.display = 'block';
  }

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length < 2) {
      resultsContainer.innerHTML = '';
      feedback.style.display = 'block';
      feedback.textContent = "Type at least 2 characters to search...";
      return;
    }
    
    feedback.style.display = 'none';
    
    const results = {
      projects: PROFILE_DATA.projects.filter(p => p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.technologies.some(t => t.toLowerCase().includes(query))),
      certificates: PROFILE_DATA.certificates.filter(c => c.title.toLowerCase().includes(query) || c.issuer.toLowerCase().includes(query)),
      skills: [],
      internships: PROFILE_DATA.internships.filter(i => i.role.toLowerCase().includes(query) || i.company.toLowerCase().includes(query)),
      documents: PROFILE_DATA.documents.filter(d => d.title.toLowerCase().includes(query) || d.description.toLowerCase().includes(query)),
      cad: PROFILE_DATA.cadVault.filter(c => c.title.toLowerCase().includes(query) || c.description.toLowerCase().includes(query)),
      presentations: PROFILE_DATA.presentations.filter(p => p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.tags.some(t => t.toLowerCase().includes(query))),
      research: PROFILE_DATA.research.filter(r => r.title.toLowerCase().includes(query) || r.description.toLowerCase().includes(query) || r.tags.some(t => t.toLowerCase().includes(query)))
    };

    PROFILE_DATA.skills.forEach(cat => {
      cat.list.forEach(skill => {
        if (skill.name.toLowerCase().includes(query)) {
          results.skills.push({ name: skill.name, category: cat.category });
        }
      });
    });

    renderSearchResults(results, query);
  });
}

function renderSearchResults(results, query) {
  const container = document.getElementById('search-results-container');
  const feedback = document.getElementById('search-results-feedback');
  container.innerHTML = '';
  
  let totalCount = 0;

  // 1. Projects
  if (results.projects.length > 0) {
    totalCount += results.projects.length;
    let group = `<div class="search-result-group"><h5>Projects (${results.projects.length})</h5>`;
    results.projects.forEach(p => {
      group += `<div class="search-result-item" onclick="selectSearchResult('project', '${p.id}')">
        <span>${p.title}</span>
        <span class="search-result-type-tag">Featured Work</span>
      </div>`;
    });
    group += `</div>`;
    container.innerHTML += group;
  }

  // 2. Presentations
  if (results.presentations.length > 0) {
    totalCount += results.presentations.length;
    let group = `<div class="search-result-group"><h5>Presentations (${results.presentations.length})</h5>`;
    results.presentations.forEach(p => {
      group += `<div class="search-result-item" onclick="selectSearchResult('presentation', '${p.id}')">
        <span>${p.title}</span>
        <span class="search-result-type-tag">PowerPoint Deck</span>
      </div>`;
    });
    group += `</div>`;
    container.innerHTML += group;
  }

  // 3. Research Papers
  if (results.research.length > 0) {
    totalCount += results.research.length;
    let group = `<div class="search-result-group"><h5>Research Papers (${results.research.length})</h5>`;
    results.research.forEach(r => {
      group += `<div class="search-result-item" onclick="selectSearchResult('cert', '${r.filePath}', '${r.title}')">
        <span>${r.title}</span>
        <span class="search-result-type-tag">${r.source}</span>
      </div>`;
    });
    group += `</div>`;
    container.innerHTML += group;
  }

  // 5. CAD Models
  if (results.cad.length > 0) {
    totalCount += results.cad.length;
    let group = `<div class="search-result-group"><h5>CAD Designs (${results.cad.length})</h5>`;
    results.cad.forEach(c => {
      group += `<div class="search-result-item" onclick="selectSearchResult('cad', '${c.filePath}', '${c.title}')">
        <span>${c.title}</span>
        <span class="search-result-type-tag">${c.type}</span>
      </div>`;
    });
    group += `</div>`;
    container.innerHTML += group;
  }

  // 6. Certificates
  if (results.certificates.length > 0) {
    totalCount += results.certificates.length;
    let group = `<div class="search-result-group"><h5>Credentials (${results.certificates.length})</h5>`;
    results.certificates.forEach(c => {
      const pdfPath = `assets/certificates/${c.fileName}`;
      group += `<div class="search-result-item" onclick="selectSearchResult('cert', '${pdfPath}', '${c.title}')">
        <span>${c.title}</span>
        <span class="search-result-type-tag">${c.issuer}</span>
      </div>`;
    });
    group += `</div>`;
    container.innerHTML += group;
  }

  if (totalCount === 0) {
    feedback.style.display = 'block';
    feedback.textContent = `No elements matching "${query}" found.`;
  }
}

function selectSearchResult(type, param1, param2, param3) {
  document.getElementById('global-search-modal').classList.remove('active');
  document.body.style.overflow = '';
  
  if (type === 'project') {
    const project = PROFILE_DATA.projects.find(p => p.id === param1);
    openProjectModal(project);
  } else if (type === 'presentation') {
    openPresentationPreview(param1);
  } else if (type === 'cad') {
    // Open in viewpoints drawer
    const cadItem = PROFILE_DATA.cadVault.find(c => c.filePath === param1);
    if (cadItem) {
      openCADLightbox(cadItem.id);
    } else {
      openLightbox(param1, param2);
    }
  } else if (type === 'cert') {
    openCertificateViewer(param1, param2);
  } else {
    const target = document.getElementById(type);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/* ==================== 6. MODAL & LIGHTBOX CONTROLLERS ==================== */

function initModals() {
  const modals = ['archive-explorer-modal', 'project-detail-modal', 'cert-viewer-modal', 'lightbox-modal', 'timeline-detail-drawer', 'presentation-preview-modal'];
  
  modals.forEach(modalId => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    const closeBtn = modal.querySelector('.modal-close-btn') || modal.querySelector('.lightbox-close-btn') || modal.querySelector('.drawer-close-btn') || document.getElementById('pres-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeSpecificModal(modal);
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeSpecificModal(modal);
      }
    });
  });
}

function closeSpecificModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function openCertificateViewer(filePath, title) {
  const modal = document.getElementById('cert-viewer-modal');
  const iframe = document.getElementById('cert-viewer-iframe');
  const fallback = document.getElementById('cert-viewer-fallback');
  const downloadLink = document.getElementById('cert-download-link');
  const titleHeader = document.getElementById('cert-viewer-title');

  titleHeader.textContent = title;
  iframe.style.display = 'block';
  fallback.style.display = 'none';
  iframe.src = filePath + "#toolbar=0";
  downloadLink.href = filePath;

  iframe.onerror = () => {
    iframe.style.display = 'none';
    fallback.style.display = 'flex';
  };

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openLightbox(filePath, captionText) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  img.src = filePath;
  caption.textContent = captionText;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  if (window.resetLightboxZoomPan) {
    window.resetLightboxZoomPan();
  }
}

/* ==================== 7. FORM SUBMISSION HANDLER ==================== */

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    status.className = "form-status-alert";
    status.style.display = 'block';
    status.textContent = "Connecting to mail server...";
    
    setTimeout(() => {
      status.classList.add('success');
      status.textContent = "Message transmitted successfully! Thank you for connecting, Nandha G will get back to you shortly.";
      form.reset();
    }, 1200);
  });
}

/* ==================== 8. PREMIUM ZOOM-PAN & SEARCH KEYBOARD CONTROLS ==================== */

let zoomLevel = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;

function initLightboxZoomPan() {
  const img = document.getElementById('lightbox-img');
  if (!img) return;

  function resetZoomPan() {
    zoomLevel = 1;
    panX = 0;
    panY = 0;
    applyTransform();
  }

  function applyTransform() {
    img.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
    img.style.transition = isDragging ? 'none' : 'transform 0.15s ease-out';
  }

  // Wheel zoom
  img.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = 0.15;
    if (e.deltaY < 0) {
      zoomLevel = Math.min(zoomLevel + zoomFactor, 5);
    } else {
      zoomLevel = Math.max(zoomLevel - zoomFactor, 0.8);
    }
    applyTransform();
  });

  // Mouse pan
  img.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
    img.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    panX = e.clientX - startX;
    panY = e.clientY - startY;
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      img.style.cursor = 'grab';
      applyTransform();
    }
  });

  // Touch Support
  let lastTouchX = 0;
  let lastTouchY = 0;

  img.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      lastTouchX = e.touches[0].clientX - panX;
      lastTouchY = e.touches[0].clientY - panY;
    }
  });

  img.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      e.preventDefault();
      panX = e.touches[0].clientX - lastTouchX;
      panY = e.touches[0].clientY - lastTouchY;
      applyTransform();
    }
  });

  img.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Double click reset
  img.addEventListener('dblclick', () => {
    resetZoomPan();
  });

  window.resetLightboxZoomPan = resetZoomPan;
}

let currentSearchIndex = -1;

function initSearchKeyboardNav() {
  const input = document.getElementById('global-search-input');
  const resultsContainer = document.getElementById('search-results-container');
  if (!input || !resultsContainer) return;

  input.addEventListener('keydown', (e) => {
    const items = resultsContainer.querySelectorAll('.search-result-item');
    if (items.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentSearchIndex = (currentSearchIndex + 1) % items.length;
      highlightSearchItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentSearchIndex = (currentSearchIndex - 1 + items.length) % items.length;
      highlightSearchItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentSearchIndex >= 0 && currentSearchIndex < items.length) {
        items[currentSearchIndex].click();
      }
    }
  });

  input.addEventListener('input', () => {
    currentSearchIndex = -1;
  });
}

function highlightSearchItem(items) {
  items.forEach((item, index) => {
    if (index === currentSearchIndex) {
      item.classList.add('active');
      item.style.background = 'rgba(37, 99, 235, 0.1)';
      item.style.borderColor = 'var(--accent-primary)';
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('active');
      item.style.background = '';
      item.style.borderColor = '';
    }
  });
}

// Fallback upload handlers for missing internship documents
window.triggerInternshipUpload = function(btn, company, type) {
  const input = btn.nextElementSibling;
  if (input) {
    input.click();
  }
};

window.handleInternshipUpload = function(event, company, type, input) {
  const file = event.target.files[0];
  if (!file) return;

  const fileUrl = URL.createObjectURL(file);
  const btn = input.previousElementSibling;

  if (btn) {
    btn.innerHTML = `<span class="material-symbols-outlined" style="font-size:16px;">visibility</span> View ${type === 'report' ? 'Report' : 'Certificate'}`;
    btn.style.background = type === 'report' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)';
    btn.style.borderColor = type === 'report' ? 'var(--accent-primary)' : 'var(--border-color)';
    btn.style.color = 'var(--text-primary)';
    btn.style.borderStyle = 'solid';
    
    btn.onclick = function() {
      if (type === 'report') {
        window.open(fileUrl, '_blank');
      } else {
        openCertificateViewer(fileUrl, `${company} Internship Cert`);
      }
    };

    alert(`File "${file.name}" uploaded successfully!\n\nDISCLAIMER: This uploaded file is temporarily stored in your browser session. To permanently deploy this report/certificate, add the file into the assets/ folder of your workspace and specify its relative path in data.js.`);
  }
};
