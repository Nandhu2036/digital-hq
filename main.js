// Personal Digital Headquarters - Main UI Engine V2
// Driven by PROFILE_DATA loaded from data.js

let activeCADSubCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  // Add Femlogic Reverse Engineering project dynamically to profile data
  injectReverseEngineeringProject();

  // Initialize dynamic contents
  init3DCanvas();
  initProjects();
  initJourney();
  initEcosystem();
  initVerificationCenter();
  initGitHubDashboard();
  
  // Navigation & Menu setups
  initNavbarScroll();
  initMobileMenu();
  initModals();
  initContactForm();
  initLightboxZoomPan();
  initMagneticButtons();
});

/* ==================== 0. DYNAMIC DATA INJECTION ==================== */

function injectReverseEngineeringProject() {
  const reverseEngineeringProj = {
    id: "reverse-engineering",
    title: "Reverse Engineering & Digital Prototyping",
    tagline: "Metrology, CAD Reconstruction & DfAM Optimization (Femlogic Technologies)",
    category: "Reverse Engineering",
    description: "Captured geometric data of physical parts using precision metrology tools (calipers, thread gauges). Reconstructed parts into fully editable parametric 3D models and verified assemblies clearances, optimizing tolerances for FDM 3D printing.",
    longDescription: "Performed dimensional inspection, parametric CAD modeling, and print optimization for legacy components at Femlogic Technologies. Capturing geometric data of physical parts using metrology tools allowed for high-fidelity parametric reconstruction of physical assemblies. Verified tolerances and clearances, and modified parameters to optimize FDM printing parameters (reducing print time while maintaining structural load paths). Verified fit and tolerances by assembling physical parts.",
    image: "assets/cad-models/2025-05-04_1738687165f52.webp",
    technologies: ["Metrology", "Parametric CAD", "Tolerance Analysis", "FDM Printing", "Fusion 360"],
    github: "https://github.com/Nandhu2036",
    demo: null,
    pdf: "assets/internships/Femlogic_Intern_report.pdf",
    gallery: [
      "assets/cad-models/2025-05-04_1738687165f52.webp",
      "assets/cad-models/2025-05-04_267afeb45f7158.webp",
      "assets/cad-models/2025-05-04_51dc53de5821f8.webp"
    ],
    featured: true
  };

  // Add dynamically if not already present
  if (!PROFILE_DATA.projects.some(p => p.id === "reverse-engineering")) {
    PROFILE_DATA.projects.push(reverseEngineeringProj);
  }
}

/* ==================== 1. ACT 1: HERO 3D VECTOR CANVAS ==================== */

function init3DCanvas() {
  const canvas = document.getElementById('hero-vector-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const label = document.getElementById('canvas-shape-label');
  
  let width = canvas.width = canvas.offsetWidth || 300;
  let height = canvas.height = canvas.offsetHeight || 300;
  
  function resizeCanvas() {
    if (canvas.offsetWidth > 0 && (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight)) {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }
  }
  
  window.addEventListener('resize', resizeCanvas);
  for (let delay of [100, 300, 500, 1000, 2000]) {
    setTimeout(resizeCanvas, delay);
  }

  // Programmatic shape generators
  function generateGear() {
    let vertices = [];
    let edges = [];
    let numTeeth = 16;
    let rInner = 0.55;
    let rOuter = 0.85;
    let depth = 0.35;
    
    // Generate teeth nodes
    for (let i = 0; i < numTeeth * 2; i++) {
      let angle = (i / (numTeeth * 2)) * Math.PI * 2;
      let r = (i % 2 === 0) ? rInner : rOuter;
      let cos = Math.cos(angle);
      let sin = Math.sin(angle);
      
      // Front teeth edge ring
      vertices.push({x: cos * r, y: sin * r, z: -depth});
      // Back teeth edge ring
      vertices.push({x: cos * r, y: sin * r, z: depth});
    }
    
    // Generate linkages
    let count = numTeeth * 4;
    for (let i = 0; i < count; i += 2) {
      let next = (i + 2) % count;
      edges.push([i, next]); // Front face connector
      edges.push([i + 1, next + 1]); // Back face connector
      edges.push([i, i + 1]); // Extrusion side connector
    }
    return { vertices, edges };
  }

  function generateExplodedProduct() {
    let vertices = [];
    let edges = [];
    let segments = 12;
    let r1 = 0.65;
    let r2 = 0.45;
    
    // Front half cylinder
    for (let i = 0; i < segments; i++) {
      let angle = (i / segments) * Math.PI * 2;
      vertices.push({x: Math.cos(angle) * r1, y: Math.sin(angle) * r1, z: -1.0});
      vertices.push({x: Math.cos(angle) * r1, y: Math.sin(angle) * r1, z: -0.4});
    }
    // Back half cylinder
    for (let i = 0; i < segments; i++) {
      let angle = (i / segments) * Math.PI * 2;
      vertices.push({x: Math.cos(angle) * r2, y: Math.sin(angle) * r2, z: 0.4});
      vertices.push({x: Math.cos(angle) * r2, y: Math.sin(angle) * r2, z: 1.0});
    }
    
    // Connections front
    for (let i = 0; i < segments * 2; i += 2) {
      let next = (i + 2) % (segments * 2);
      edges.push([i, next]);
      edges.push([i + 1, next + 1]);
      edges.push([i, i + 1]);
    }
    // Connections back
    let offset = segments * 2;
    for (let i = 0; i < segments * 2; i += 2) {
      let next = (i + 2) % (segments * 2);
      edges.push([offset + i, offset + next]);
      edges.push([offset + i + 1, offset + next + 1]);
      edges.push([offset + i, offset + i + 1]);
    }
    // Exploded axle center line
    vertices.push({x: 0, y: 0, z: -1.3});
    vertices.push({x: 0, y: 0, z: 1.3});
    edges.push([vertices.length - 2, vertices.length - 1]);
    
    return { vertices, edges };
  }

  function generateCADMesh() {
    let vertices = [];
    let edges = [];
    let size1 = 0.8;
    let size2 = 0.4;
    
    // Outer cube vertices
    vertices.push({x: -size1, y: -size1, z: -size1});
    vertices.push({x: size1, y: -size1, z: -size1});
    vertices.push({x: size1, y: size1, z: -size1});
    vertices.push({x: -size1, y: size1, z: -size1});
    vertices.push({x: -size1, y: -size1, z: size1});
    vertices.push({x: size1, y: -size1, z: size1});
    vertices.push({x: size1, y: size1, z: size1});
    vertices.push({x: -size1, y: size1, z: size1});
    
    // Inner cube vertices
    vertices.push({x: -size2, y: -size2, z: -size2});
    vertices.push({x: size2, y: -size2, z: -size2});
    vertices.push({x: size2, y: size2, z: -size2});
    vertices.push({x: -size2, y: size2, z: -size2});
    vertices.push({x: -size2, y: -size2, z: size2});
    vertices.push({x: size2, y: -size2, z: size2});
    vertices.push({x: size2, y: size2, z: size2});
    vertices.push({x: -size2, y: size2, z: size2});
    
    // Connections outer
    edges.push([0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]);
    // Connections inner
    edges.push([8,9],[9,10],[10,11],[11,8],[12,13],[13,14],[14,15],[15,12],[8,12],[9,13],[10,14],[11,15]);
    // Connect outer to inner corners
    for (let i = 0; i < 8; i++) {
      edges.push([i, i + 8]);
    }
    
    return { vertices, edges };
  }

  function generateLattice() {
    let vertices = [];
    let edges = [];
    let size = 0.75;
    
    // Space frame nodal grid
    for (let x of [-size, 0, size]) {
      for (let y of [-size, 0, size]) {
        for (let z of [-size, 0, size]) {
          vertices.push({x, y, z});
        }
      }
    }
    
    // Connect elements based on distance metric
    let len = vertices.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        let dx = Math.abs(vertices[i].x - vertices[j].x);
        let dy = Math.abs(vertices[i].y - vertices[j].y);
        let dz = Math.abs(vertices[i].z - vertices[j].z);
        let dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist > 0.05 && dist < size * 1.05) {
          edges.push([i, j]);
        }
      }
    }
    return { vertices, edges };
  }

  // Pre-generate shape datasets
  const shapesData = [
    { name: "Gear Assembly", data: generateGear() },
    { name: "Exploded Product", data: generateExplodedProduct() },
    { name: "CAD Wireframe Mesh", data: generateCADMesh() },
    { name: "TPMS Space Lattice", data: generateLattice() }
  ];
  
  let activeShapeIdx = 0;
  let currentShape = shapesData[activeShapeIdx];
  let rotX = 0.5, rotY = 0.5, rotZ = 0.1;
  let scale = Math.min(width, height) * 0.35;
  let opacity = 1.0;
  let fadeState = 'in'; // 'in', 'stable', 'out'
  let transitionTimer = 0;

  // Cycle shapes every 4.5 seconds
  setInterval(() => {
    fadeState = 'out';
  }, 4500);

  function rotate3D(point, rx, ry, rz) {
    let cosX = Math.cos(rx), sinX = Math.sin(rx);
    let y1 = point.y * cosX - point.z * sinX;
    let z1 = point.y * sinX + point.z * cosX;
    
    let cosY = Math.cos(ry), sinY = Math.sin(ry);
    let x2 = point.x * cosY + z1 * sinY;
    let z2 = -point.x * sinY + z1 * cosY;
    
    let cosZ = Math.cos(rz), sinZ = Math.sin(rz);
    let x3 = x2 * cosZ - y1 * sinZ;
    let y3 = x2 * sinZ + y1 * cosZ;
    
    return { x: x3, y: y3, z: z2 };
  }

  function drawLoop() {
    ctx.clearRect(0, 0, width, height);
    
    // Apply viewport scale calculations
    scale = Math.min(width, height) * 0.35;
    
    // Draw viewport circular blueprint markings
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(width/2, height/2, scale * 1.25, 0, Math.PI*2);
    ctx.arc(width/2, height/2, scale * 0.6, 0, Math.PI*2);
    ctx.stroke();
    
    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(width/2 - scale * 1.4, height/2);
    ctx.lineTo(width/2 + scale * 1.4, height/2);
    ctx.moveTo(width/2, height/2 - scale * 1.4);
    ctx.lineTo(width/2, height/2 + scale * 1.4);
    ctx.stroke();

    // Rotate angles slightly
    rotX += 0.006;
    rotY += 0.008;
    rotZ += 0.003;

    // Handle Opacity Fading logic
    if (fadeState === 'out') {
      opacity -= 0.05;
      if (opacity <= 0.0) {
        opacity = 0.0;
        activeShapeIdx = (activeShapeIdx + 1) % shapesData.length;
        currentShape = shapesData[activeShapeIdx];
        label.textContent = currentShape.name;
        fadeState = 'in';
      }
    } else if (fadeState === 'in') {
      opacity += 0.05;
      if (opacity >= 1.0) {
        opacity = 1.0;
        fadeState = 'stable';
      }
    }

    const vertices = currentShape.data.vertices;
    const edges = currentShape.data.edges;
    const projectedPoints = [];

    // Project points
    vertices.forEach(v => {
      let r = rotate3D(v, rotX, rotY, rotZ);
      // Perspective factor
      let factor = 2.8 / (2.8 - r.z);
      let cx = width/2 + r.x * scale * factor;
      let cy = height/2 + r.y * scale * factor;
      projectedPoints.push({ x: cx, y: cy });
    });

    // Draw edges
    ctx.strokeStyle = `rgba(37, 99, 235, ${0.45 * opacity})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    edges.forEach(e => {
      let p1 = projectedPoints[e[0]];
      let p2 = projectedPoints[e[1]];
      if (p1 && p2) {
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
      }
    });
    ctx.stroke();

    // Draw vertex dots
    ctx.fillStyle = `rgba(14, 165, 233, ${0.85 * opacity})`;
    projectedPoints.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI*2);
      ctx.fill();
    });

    requestAnimationFrame(drawLoop);
  }

  // Start loop
  drawLoop();
}

/* ==================== 2. ACT 2: BENTO PROJECT SHOWCASE ==================== */

function initProjects() {
  const container = document.getElementById('projects-bento-grid');
  if (!container) return;
  container.innerHTML = '';
  
  // Bento order
  const order = ['ecofloat', 'solar-tracker', 'regen-braking', 'seed-spreader', 'hollow-clock', 'aquatic-monitoring'];
  
  order.forEach((id, index) => {
    const proj = PROFILE_DATA.projects.find(p => p.id === id);
    if (!proj) return;
    
    let sizeClass = 'small';
    if (id === 'ecofloat') sizeClass = 'large';
    else if (id === 'solar-tracker' || id === 'regen-braking') sizeClass = 'medium';
    
    // Tech pills slice
    let techHtml = proj.technologies.slice(0, 3).map(t => `<span class="tech-pill">${t}</span>`).join('');
    
    container.innerHTML += `
      <div class="bento-card ${sizeClass}" data-id="${proj.id}">
        <div class="bento-img-wrapper">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy" onerror="this.src='assets/projects/ecofloat_boat.png';">
        </div>
        <div class="bento-info">
          <span class="bento-cat">${proj.category}</span>
          <h3 class="bento-title">${proj.title}</h3>
          <p class="bento-desc">${proj.description}</p>
          <div class="bento-techs">
            ${techHtml}
          </div>
        </div>
        <span class="material-symbols-outlined bento-arrow">arrow_outward</span>
      </div>
    `;
  });
  
  // Bento Empty slot: CTA card leading to Verification Vault
  container.innerHTML += `
    <div class="bento-card cta-card" onclick="document.getElementById('verification').scrollIntoView({behavior:'smooth'})">
      <div class="bento-cta-content">
        <div>
          <span class="bento-cat" style="color:var(--accent-secondary);">Credentials & Archives</span>
          <h3 class="bento-title" style="margin-top:4px;">Verification Center</h3>
          <p class="bento-desc" style="-webkit-line-clamp: 3;">Validate academic reports, industrial credentials, and explore the complete library of 28+ CAD engineering exercises.</p>
        </div>
        <div style="display:flex; align-items:center; gap:8px; font-family:var(--font-subheadings); font-size:0.75rem; font-weight:600; color:var(--text-primary);">
          <span>Launch Vault</span>
          <span class="material-symbols-outlined" style="font-size:14px;">arrow_forward</span>
        </div>
      </div>
    </div>
  `;
  
  // Bento Cards click handlers
  container.querySelectorAll('.bento-card:not(.cta-card)').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-id');
      const project = PROFILE_DATA.projects.find(p => p.id === projId);
      openProjectModal(project);
    });
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('project-detail-modal');
  const content = document.getElementById('project-modal-content');
  
  let techHtml = project.technologies.map(t => `<span class="tech-pill" style="font-size: 0.72rem; padding:4px 10px;">${t}</span>`).join('');

  let galleryHtml = '';
  if (project.gallery && project.gallery.length > 0) {
    project.gallery.forEach(img => {
      galleryHtml += `
        <div class="proj-gallery-img" onclick="openLightbox('${img}', '${project.title} Detailed Render')">
          <img src="${img}" alt="CAD rendering" onerror="this.parentElement.style.display='none';">
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
    <span class="bento-cat" style="margin-bottom:8px; display:inline-block;">${project.category}</span>
    <h2>${project.title}</h2>
    <div class="proj-modal-tagline" style="margin-top:2px;">${project.tagline}</div>
    
    ${galleryHtml ? `
      <h4 class="section-badge" style="font-size:0.65rem; margin-top:24px; margin-bottom:12px;">Component Blueprints & Alternative Angles (Click to zoom)</h4>
      <div class="proj-modal-gallery">${galleryHtml}</div>
    ` : ''}

    <p class="proj-modal-desc">${project.longDescription || project.description}</p>
    
    <div class="proj-modal-tech">${techHtml}</div>
    <div class="proj-modal-actions">${actionsHtml}</div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==================== 3. ACT 3: ENGINEERING JOURNEY TIMELINE ==================== */

function initJourney() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  container.innerHTML = '';
  
  const journeySteps = [
    {
      year: "2023",
      title: "Started Mechanical Engineering",
      subtitle: "St. Joseph’s College of Engineering, Chennai",
      icon: "school",
      details: "Pursued standard mechanical undergraduate curriculum, developing deep analytical knowledge in thermodynamics, materials science, fluid dynamics, and machine design theory.",
      milestones: [
        "Synthesized core competencies in mechanical drafting and physics equations.",
        "Formed design groups focusing on clean-energy CPV solar tracking setups.",
        "Participated in active university workshops for mechanical systems modeling."
      ]
    },
    {
      year: "2024",
      title: "Built Projects & Gained Industrial Experience",
      subtitle: "K.M. Knitwear Pvt. Ltd. & Core Designs",
      icon: "precision_manufacturing",
      details: "Began modeling structural assemblies in CAD, designed regenerative braking control models in MATLAB Simulink, and completed a Production Engineering Internship optimizing packaging assembly layouts by 10%.",
      milestones: [
        "Modeled container cargo packaging layouts, reducing downtime processes by 15%.",
        "Configured active BLDC regenerative braking control loops in MATLAB Simulink.",
        "Completed 2D mechanical drafting practices in AutoCAD (Limits & Fits systems)."
      ]
    },
    {
      year: "2025",
      title: "Competitions, Presentations & Product Design Intern",
      subtitle: "Niral Hackathon & Femlogic Technologies",
      icon: "emoji_events",
      details: "Built the hull design for the Project EcoFloat catamaran, won hackathon awards, and worked as a Product Design Intern at Femlogic contributing to structural thin sheet metal carriage seating for Vande Bharat trains.",
      milestones: [
        "Designed the twin-hull catamaran structure and gimbals in Autodesk Fusion 360.",
        "Co-authored technical reports and pitch decks for autonomous marine platforms.",
        "Applied professional DFM sheet-metal guidelines for railway seating carriage assemblies."
      ]
    },
    {
      year: "2026",
      title: "Reverse Engineering Intern & Research Publications",
      subtitle: "Femlogic Technologies & SAIL Salem Plant",
      icon: "analytics",
      details: "Worked as a Reverse Engineering Intern calibrating tolerances of legacy parts via metrology, completed SAIL steel mill drives inspections, and authored papers on TPMS lattice optimizations.",
      milestones: [
        "Inspected physical parts using metrology (micrometers, thread gauges) and generated parametric models.",
        "Optimized part structures and 3D printing slice parameters (PLA/PETG infill clearances).",
        "Published academic research papers detailing topological lattice stresses (diamond/gyroid) in COMSOL."
      ]
    }
  ];

  journeySteps.forEach((step, index) => {
    let milestonesHtml = step.milestones.map(m => `<li>${m}</li>`).join('');
    container.innerHTML += `
      <div class="journey-node" id="journey-node-${index}">
        <div class="journey-bullet"></div>
        <span class="node-year-badge">${step.year}</span>
        <div class="node-content-card">
          <div class="node-header">
            <div>
              <h4 class="node-title">${step.title}</h4>
              <div class="node-subtitle">${step.subtitle}</div>
            </div>
            <span class="material-symbols-outlined node-type-icon">${step.icon}</span>
          </div>
          <p class="node-details">${step.details}</p>
          <ul class="node-milestones-list">
            ${milestonesHtml}
          </ul>
        </div>
      </div>
    `;
  });
  
  // Intersection Observer for Journey Timeline node fade-in reveal
  const nodes = container.querySelectorAll('.journey-node');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  nodes.forEach(node => observer.observe(node));
}

/* ==================== 4. ACT 4: ENGINEERING ECOSYSTEM ==================== */

function initEcosystem() {
  // Identity Domains
  const identityContainer = document.getElementById('identity-cards');
  if (identityContainer) {
    identityContainer.innerHTML = `
      <div class="identity-card">
        <div class="identity-card-header">
          <span class="material-symbols-outlined identity-card-icon">layers</span>
          <h4 class="identity-card-title">Product Design & DFM</h4>
        </div>
        <p class="identity-card-desc">Translating physical concepts into manufacturing assemblies. Competency in parametric CAD modeling (Fusion 360, SolidWorks, Siemens NX), tolerance stack analysis, limits & fits, and sheet metal manufacturing.</p>
      </div>
      <div class="identity-card">
        <div class="identity-card-header">
          <span class="material-symbols-outlined identity-card-icon">3d_rotation</span>
          <h4 class="identity-card-title">Additive Manufacturing & DfAM</h4>
        </div>
        <p class="identity-card-desc">Designing specifically for FDM 3D printing. Experience in print orientation optimization, thermal shrinkage compensation, infill pattern stresses (PLA/PETG), and hybrid TPMS lattice structures.</p>
      </div>
      <div class="identity-card">
        <div class="identity-card-header">
          <span class="material-symbols-outlined identity-card-icon">memory</span>
          <h4 class="identity-card-title">Automation & Sensor Fusion</h4>
        </div>
        <p class="identity-card-desc">Integrating controls firmware with mechanical hardware. Experienced in ROS/ROS 2 robot nodes, Arduino controllers, stepper motor microstepping calibration, and serial telemetry integrations.</p>
      </div>
    `;
  }

  // Skill Network
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = '';
    PROFILE_DATA.skills.forEach(cat => {
      let tagsHtml = cat.list.map(s => `<span class="skill-tag-item">${s.name}</span>`).join('');
      skillsContainer.innerHTML += `
        <div class="skill-group">
          <h4 class="skill-group-name">${cat.category}</h4>
          <div class="skill-tags-wrap">
            ${tagsHtml}
          </div>
        </div>
      `;
    });
  }

  // Live Status Board
  const statusContainer = document.getElementById('status-container');
  if (statusContainer) {
    statusContainer.innerHTML = `
      <div class="status-card">
        <div class="status-indicator">
          <span class="pulse-dot green"></span>
          <span style="color: var(--accent-success);">Current Project</span>
        </div>
        <h4 class="status-name">${PROFILE_DATA.commandCenter.currentlyBuilding.name}</h4>
        <p class="status-detail">${PROFILE_DATA.commandCenter.currentlyBuilding.description} - ${PROFILE_DATA.commandCenter.currentlyBuilding.status}</p>
      </div>
      <div class="status-card">
        <div class="status-indicator">
          <span class="pulse-dot yellow"></span>
          <span style="color: var(--accent-warn);">Current Learning</span>
        </div>
        <h4 class="status-name">${PROFILE_DATA.commandCenter.currentlyLearning.name}</h4>
        <p class="status-detail">${PROFILE_DATA.commandCenter.currentlyLearning.detail}</p>
      </div>
      <div class="status-card">
        <div class="status-indicator">
          <span class="pulse-dot blue"></span>
          <span style="color: var(--accent-secondary);">Current Experiment</span>
        </div>
        <h4 class="status-name">3D Printed Compliant Mechanisms</h4>
        <p class="status-detail">Modeling zero-friction flexure joints and non-assembly compliant triggers in Fusion 360 for high-durability print assemblies.</p>
      </div>
      <div class="status-card">
        <div class="status-indicator">
          <span class="pulse-dot purple"></span>
          <span style="color: var(--accent-explore);">Current Exploration</span>
        </div>
        <h4 class="status-name">${PROFILE_DATA.commandCenter.upcomingGoal.name}</h4>
        <p class="status-detail">${PROFILE_DATA.commandCenter.upcomingGoal.detail}</p>
      </div>
    `;
  }
}

/* ==================== 5. ACT 5: TRUST & CONNECT (VERIFICATION CENTER) ==================== */

function initVerificationCenter() {
  const tabs = document.querySelectorAll('.vault-tab-btn');
  const searchInput = document.getElementById('vault-search-input');
  if (!tabs.length || !searchInput) return;
  
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const activeTab = btn.getAttribute('data-tab');
      document.querySelectorAll('.vault-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      document.getElementById(`vault-pane-${activeTab}`).classList.add('active');
      
      // Clear search input on tab switch
      searchInput.value = '';
      runVerificationFilter();
    });
  });

  searchInput.addEventListener('input', runVerificationFilter);

  // Initialize CAD Subcategory buttons
  initCADSubcategories();
  
  // Render initial list
  runVerificationFilter();
}

function initCADSubcategories() {
  const container = document.getElementById('cad-subcategories');
  if (!container) return;
  
  const subcats = [
    { id: 'all', label: 'All CAD' },
    { id: 'Practice Parts', label: 'Practice Parts' },
    { id: 'Mechanical Assemblies', label: 'Assemblies' },
    { id: 'Projects', label: 'Projects CAD' },
    { id: 'Others', label: 'Others' }
  ];
  
  container.innerHTML = subcats.map(sc => `
    <button class="cad-sub-btn ${sc.id === activeCADSubCategory ? 'active' : ''}" data-sub="${sc.id}">
      ${sc.label}
    </button>
  `).join('');
  
  container.querySelectorAll('.cad-sub-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.cad-sub-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCADSubCategory = btn.getAttribute('data-sub');
      runVerificationFilter();
    });
  });
}

function runVerificationFilter() {
  const activeTabBtn = document.querySelector('.vault-tab-btn.active');
  if (!activeTabBtn) return;
  const activeTab = activeTabBtn.getAttribute('data-tab');
  const query = document.getElementById('vault-search-input').value.toLowerCase().trim();
  
  if (activeTab === 'certificates') {
    renderVaultCertificates(query);
  } else if (activeTab === 'reports') {
    renderVaultReports(query);
  } else if (activeTab === 'cad') {
    renderVaultCADModels(activeCADSubCategory, query);
  }
}

function renderVaultCertificates(query) {
  const grid = document.getElementById('vault-certs-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  const filtered = PROFILE_DATA.certificates.filter(c => {
    return c.title.toLowerCase().includes(query) || 
           c.issuer.toLowerCase().includes(query) || 
           c.tags.some(t => t.toLowerCase().includes(query));
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-secondary);">No certificates match query.</div>`;
    return;
  }
  
  filtered.forEach(c => {
    const filePath = `assets/certificates/${c.fileName}`;
    grid.innerHTML += `
      <div class="cert-card" onclick="openCertificateViewer('${filePath}', '${c.title}')">
        <div>
          <span class="cert-meta">${c.issuer}</span>
          <h4 class="cert-title">${c.title}</h4>
          <p class="cert-issuer" style="font-size:0.75rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-top:6px; color: var(--text-secondary);">${c.description}</p>
        </div>
        <div class="cert-actions">
          <span class="cert-date">${c.date}</span>
          <span class="cert-btn">
            <span class="material-symbols-outlined" style="font-size:14px;">visibility</span>
            <span>Verify</span>
          </span>
        </div>
      </div>
    `;
  });
}

function renderVaultReports(query) {
  const tbody = document.getElementById('vault-reports-table');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  const reportsList = [];
  
  // Core research papers
  PROFILE_DATA.research.forEach(r => {
    reportsList.push({
      title: r.title,
      software: r.software,
      size: r.fileSize,
      filePath: r.filePath,
      description: r.description,
      type: "Research Paper"
    });
  });
  
  // Internship reports
  PROFILE_DATA.internships.forEach(i => {
    if (i.document) {
      reportsList.push({
        title: `${i.company} Internship Report`,
        software: "Technical Report",
        size: "20+ MB",
        filePath: i.document,
        description: i.learnings,
        type: "Internship Doc"
      });
    }
  });

  // Project reports
  PROFILE_DATA.projects.forEach(p => {
    if (p.pdf) {
      reportsList.push({
        title: `${p.title} - Technical Report`,
        software: p.technologies.slice(0, 2).join(', '),
        size: "PDF Specs",
        filePath: p.pdf,
        description: p.tagline,
        type: "Project Report"
      });
    }
  });

  const filtered = reportsList.filter(r => {
    return r.title.toLowerCase().includes(query) || 
           r.software.toLowerCase().includes(query) || 
           r.description.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:40px; color:var(--text-secondary);">No documents match query.</td></tr>`;
    return;
  }

  filtered.forEach(doc => {
    tbody.innerHTML += `
      <tr>
        <td>
          <div class="vault-doc-title">${doc.title}</div>
          <div class="vault-doc-desc">${doc.description}</div>
        </td>
        <td>${doc.software}</td>
        <td>${doc.size}</td>
        <td>
          <div style="display:flex; gap:8px;">
            <button onclick="openCertificateViewer('${doc.filePath}', '${doc.title}')" class="btn-primary" style="padding: 8px 12px; font-size: 0.72rem; border-radius: 6px;">
              <span class="material-symbols-outlined" style="font-size: 14px;">visibility</span>
            </button>
            <a href="${doc.filePath}" download class="btn-secondary" style="padding: 8px 12px; font-size: 0.72rem; border-radius: 6px;">
              <span class="material-symbols-outlined" style="font-size: 14px;">download</span>
            </a>
          </div>
        </td>
      </tr>
    `;
  });
}

function renderVaultCADModels(activeSubcat, query) {
  const grid = document.getElementById('vault-cad-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  let filtered = PROFILE_DATA.cadVault;
  
  if (activeSubcat !== 'all') {
    filtered = filtered.filter(c => c.category === activeSubcat);
  }
  
  if (query.length > 0) {
    filtered = filtered.filter(c => {
      return c.title.toLowerCase().includes(query) || 
             c.description.toLowerCase().includes(query) || 
             c.tags.some(t => t.toLowerCase().includes(query));
    });
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-secondary);">No CAD models match filters.</div>`;
    return;
  }

  filtered.forEach(c => {
    let downloadBtn = '';
    if (c.cadSource) {
      downloadBtn = `
        <a href="${c.cadSource}" download class="cad-link-btn">
          <span class="material-symbols-outlined" style="font-size:12px;">download</span>
          <span>Download CAD</span>
        </a>
      `;
    }
    
    let drawingBtn = '';
    if (c.drawings) {
      drawingBtn = `
        <button onclick="openCertificateViewer('${c.drawings}', '${c.title} Blueprints')" class="cad-link-btn" style="background:transparent; border:none; padding:0; cursor:pointer;">
          <span class="material-symbols-outlined" style="font-size:12px;">picture_as_pdf</span>
          <span>Drawing</span>
        </button>
      `;
    }

    grid.innerHTML += `
      <div class="cad-card">
        <div class="cad-img-box" onclick="openLightbox('${c.filePath}', '${c.title} Render View')">
          <img src="${c.filePath}" alt="${c.title}" loading="lazy" onerror="this.src='assets/projects/ecofloat_boat.png';">
        </div>
        <div class="cad-info-box">
          <div>
            <div class="cad-title-lbl">${c.title}</div>
            <div class="cad-software-lbl">${c.subCategory || c.category}</div>
          </div>
          <div class="cad-action-links">
            <button onclick="openCADLightbox('${c.id}')" class="cad-link-btn" style="background:transparent; border:none; padding:0; cursor:pointer;">
              <span class="material-symbols-outlined" style="font-size:12px;">zoom_in</span>
              <span>Inspect</span>
            </button>
            ${drawingBtn}
            ${downloadBtn}
          </div>
        </div>
      </div>
    `;
  });
}

function openCADLightbox(id) {
  const item = PROFILE_DATA.cadVault.find(c => c.id === id);
  if (!item) return;
  
  openLightbox(item.filePath, `${item.title} - ${item.description}`);
  
  const drawer = document.getElementById('lightbox-viewpoints-drawer');
  const container = document.getElementById('lightbox-viewpoints-container');
  
  if (item.viewpoints && item.viewpoints.length > 0) {
    drawer.style.display = 'block';
    container.innerHTML = item.viewpoints.map((vp, index) => `
      <div class="vp-thumb ${vp === item.filePath ? 'active' : ''}" onclick="changeLightboxImage('${vp}', this)">
        <img src="${vp}" alt="View ${index}">
      </div>
    `).join('');
  } else {
    drawer.style.display = 'none';
  }
}

function changeLightboxImage(src, element) {
  document.getElementById('lightbox-img').src = src;
  document.querySelectorAll('.vp-thumb').forEach(thumb => thumb.classList.remove('active'));
  element.classList.add('active');
}

/* ==================== 6. GITHUB WORKSPACE OBSERVATORY ==================== */

async function initGitHubDashboard() {
  const repoCount = document.getElementById('github-repo-count');
  const followers = document.getElementById('github-followers');
  const avatar = document.getElementById('github-avatar');
  const userId = document.getElementById('github-user-id');
  const languagesChart = document.getElementById('github-languages-chart');
  const reposContainer = document.getElementById('github-repos-container');
  
  if (!repoCount || !followers || !avatar) return;
  
  const data = await fetchGitHubData();
  if (!data) return;
  
  repoCount.textContent = data.profile.publicRepos;
  followers.textContent = data.profile.followers;
  avatar.src = data.profile.avatarUrl;
  avatar.onerror = () => { avatar.src = 'assets/profile/portrait.jpg'; };
  userId.innerHTML = `<a href="${data.profile.url}" target="_blank">github.com/Nandhu2036</a>`;
  
  // Render languages bar
  languagesChart.innerHTML = '';
  const colors = ['#2563EB', '#0EA5E9', '#10B981', '#F59E0B', '#8B5CF6'];
  const langKeys = Object.keys(data.languages);
  const totalCount = langKeys.reduce((acc, key) => acc + data.languages[key], 0);
  
  langKeys.forEach((key, index) => {
    const count = data.languages[key];
    const percent = (count / totalCount) * 100;
    const color = colors[index % colors.length];
    
    languagesChart.innerHTML += `
      <div class="git-lang-seg" style="width: ${percent}%; background-color: ${color};" title="${key}: ${percent.toFixed(1)}%"></div>
    `;
  });
  
  // Render top 3 repositories list
  reposContainer.innerHTML = '';
  const topRepos = data.repos.slice(0, 3);
  topRepos.forEach(repo => {
    reposContainer.innerHTML += `
      <a href="${repo.url}" target="_blank" class="git-repo-item">
        <div>
          <span class="git-repo-name">${repo.name}</span>
          <p class="git-repo-desc" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${repo.description}</p>
        </div>
        <div class="git-repo-footer">
          <span>● ${repo.language}</span>
          <span>Updated: ${repo.updated}</span>
        </div>
      </a>
    `;
  });
}

/* ==================== 7. FORM SUBMISSION HANDLER ==================== */

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  
  if (!form || !status) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    status.className = "form-status";
    status.style.display = 'block';
    status.textContent = "Connecting to mail socket...";
    
    setTimeout(() => {
      status.classList.add('success');
      status.textContent = "Message transmitted successfully! Thank you for connecting, Nandha will get back to you shortly.";
      form.reset();
    }, 1000);
  });
}

/* ==================== 8. FLOATING NAVBAR CONTROLLER ==================== */

function initNavbarScroll() {
  const nav = document.getElementById('floating-navbar');
  if (!nav) return;
  let lastScrollY = window.scrollY;
  
  updateScrollProgress();
  
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    
    if (window.scrollY > lastScrollY && window.scrollY > 200) {
      nav.style.transform = 'translateY(-100%)';
    } else {
      nav.style.transform = 'translateY(0)';
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
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentActive = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    
    let href = link.getAttribute('href');
    if (href === `#${currentActive}`) {
      link.classList.add('active');
    }
  });
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-dropdown');
  const links = document.querySelectorAll('.mobile-link');
  if (!toggle || !menu) return;
  
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

/* ==================== 9. MODALS & LIGHTBOX CONTROLLERS ==================== */

function initModals() {
  const modalIds = ['project-detail-modal', 'cert-viewer-modal', 'lightbox-modal'];
  
  modalIds.forEach(modalId => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    const closeBtn = modal.querySelector('.modal-close-btn') || modal.querySelector('.lightbox-close-btn');
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
  
  // If it is the PDF viewer modal, clear the src to stop loading/playing
  if (modal.id === 'cert-viewer-modal') {
    const iframe = document.getElementById('cert-viewer-iframe');
    if (iframe) iframe.src = '';
  }
}

function openCertificateViewer(filePath, title) {
  const modal = document.getElementById('cert-viewer-modal');
  const iframe = document.getElementById('cert-viewer-iframe');
  const fallback = document.getElementById('cert-viewer-fallback');
  const downloadLink = document.getElementById('cert-download-link');
  const titleHeader = document.getElementById('cert-viewer-title');
  if (!modal || !iframe || !titleHeader) return;

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
  if (!modal || !img || !caption) return;

  img.src = filePath;
  caption.textContent = captionText;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  zoomLevel = 1;
  panX = 0;
  panY = 0;
  img.style.transform = `translate(0px, 0px) scale(1)`;
}

/* ==================== 10. LIGHTBOX ZOOM-PAN MECHANISM ==================== */

let zoomLevel = 1;
let panX = 0;
let panY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;

function initLightboxZoomPan() {
  const img = document.getElementById('lightbox-img');
  const modal = document.getElementById('lightbox-modal');
  if (!img || !modal) return;

  modal.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = 0.1;
    if (e.deltaY < 0) {
      zoomLevel = Math.min(zoomLevel + zoomFactor, 3);
    } else {
      zoomLevel = Math.max(zoomLevel - zoomFactor, 0.8);
    }
    applyTransform();
  }, { passive: false });

  img.addEventListener('mousedown', (e) => {
    if (zoomLevel > 1) {
      isDragging = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      img.style.cursor = 'grabbing';
      e.preventDefault();
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging) {
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      applyTransform();
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    img.style.cursor = zoomLevel > 1 ? 'grab' : 'default';
  });

  function applyTransform() {
    img.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomLevel})`;
  }
}

/* ==================== 11. MAGNETIC BUTTON MICRO-INTERACTIONS ==================== */

function initMagneticButtons() {
  const buttons = document.querySelectorAll('.magnetic-btn');
  if (!buttons.length) return;
  
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const bound = btn.getBoundingClientRect();
      const x = e.clientX - bound.left - bound.width / 2;
      const y = e.clientY - bound.top - bound.height / 2;
      
      // Pull element towards mouse coordinates slightly
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

// Global hook references for inline HTML calls
window.openCertificateViewer = openCertificateViewer;
window.openLightbox = openLightbox;
window.openCADLightbox = openCADLightbox;
window.changeLightboxImage = changeLightboxImage;
