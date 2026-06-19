// Personal Digital Headquarters - Centralized Configuration Data
const PROFILE_DATA = {
  // Professional Snapshot & Hero Information
  personal: {
    name: "NANDHAKUMAR G",
    title: "Mechanical Engineering Undergraduate",
    tagline: "Designing, Building & Documenting Engineering Solutions",
    bio: "Mechanical Engineering undergraduate specializing in the integration of advanced CAD modeling, autonomous systems, and additive manufacturing. Proven ability to optimize mechanical performance through data-driven analysis and machine learning.",
    location: "Chennai, Tamil Nadu, India",
    phone: "+91 93441-61321",
    email: "nandhu2036os@gmail.com",
    linkedin: "https://www.linkedin.com/in/nandha06",
    github: "https://github.com/Nandhu2036",
    avatarFallbackText: "NG",
    avatarImagePath: "assets/profile/portrait.jpg", // Users can drop portrait.jpg here
    resumePath: "assets/documents/Nandhakumar_G_Resume.pdf",
    
    // Professional Snapshot Card Info
    snapshot: {
      coreDomain: "Product Design & Engineering",
      specializations: [
        "CAD (Parametric & Surface)",
        "Design Analysis (FEA / CFD)",
        "Automation & Sensor Fusion",
        "Additive Manufacturing (3D Printing)"
      ],
      currentlyLearning: "ROS 2 (Robot Operating System)",
      openTo: [
        "Industrial Internships",
        "R&D Collaborations",
        "Core Engineering Opportunities"
      ]
    }
  },

  // Engineering Command Center Signature Component
  commandCenter: {
    currentFocus: [
      { name: "Mechanical Engineering", icon: "engineering" },
      { name: "Product Design", icon: "architecture" },
      { name: "CAD Engineering", icon: "layers" }
    ],
    currentlyBuilding: {
      name: "Project EcoFloat",
      description: "Dual-function autonomous marine cleaning vessel",
      status: "Actively Refining Hull & Sensor Nodes"
    },
    currentlyLearning: {
      name: "ROS 2 & ROS Melodic",
      detail: "Configuring autonomous path tracking and real-time mapping algorithms"
    },
    latestActivity: {
      name: "3D Printed Seed Spreader Crankshaft",
      detail: "Optimized PETG infill patterns for 8h54m printing structural load"
    },
    upcomingGoal: {
      name: "Advanced Engineering Thesis",
      detail: "Topology optimization of suspension control arms using hybrid TPMS lattice structures"
    }
  },

  // Metric Snapshots
  metrics: [
    { value: "3", label: "Industry Internships", icon: "business_center" },
    { value: "4", label: "Engineering Projects", icon: "precision_manufacturing" },
    { value: "8", label: "Professional Credentials", icon: "verified" },
    { value: "50+", label: "3D CAD Assemblies", icon: "model_training" }
  ],

  // Engineering Journey Timeline
  journey: [
    {
      year: "2023 - Present",
      title: "Bachelor of Mechanical Engineering",
      institution: "St. Joseph’s College of Engineering, Chennai, Tamil Nadu",
      type: "education",
      details: "Pursuing standard mechanical undergrad curriculum with emphasis on structural dynamics, fluid machinery, machine design, and control theory.",
      milestones: [
        "Core Coursework: Thermodynamics, Fluid Mechanics, Machine Design, CAD modeling.",
        "Synthesized research interests in topological lattice optimization and hybrid TPMS designs.",
        "Maintained active participation in student design groups and automotive hackathons."
      ]
    },
    {
      year: "December 2025",
      title: "Industrial Engineering Trainee",
      institution: "Steel Authority of India Ltd. (SAIL), Salem Steel Plant",
      type: "internship",
      details: "Gained hands-on industrial exposure in raw material handling, continuous casting, rolling mills, and automated metallurgical systems.",
      milestones: [
        "Analyzed shop-floor operational workflows and maintenance protocols.",
        "Documented heavy mill mechanical drives and hydraulic system operations."
      ]
    },
    {
      year: "June 2025 - July 2025",
      title: "Product Design Intern",
      institution: "Femlogic Technologies Pvt. Ltd., Chennai",
      type: "internship",
      details: "Contributed to structural seating modules design for the premium Vande Bharat express trains.",
      milestones: [
        "Worked on 3D parametric modeling and components interface verification.",
        "Applied Design for Manufacturing (DFM) guidelines to optimize metal sheet assemblies."
      ]
    },
    {
      year: "July 2024 - August 2024",
      title: "Production Engineering Intern",
      institution: "K.M. Knitwear Pvt. Ltd., Tirupur",
      type: "internship",
      details: "Analyzed structural packaging designs and optimized assembly lines.",
      milestones: [
        "Proclaimed a 10% efficiency improvement in box packaging layouts.",
        "Assisted in mechanical troubleshooting, lifting overall equipment reliability by 15%."
      ]
    },
    {
      year: "2022 - 2023",
      title: "Higher Secondary Education (Class XII)",
      institution: "Shri Swamy Matriculation Higher Secondary School, Salem",
      type: "education",
      details: "Completed standard curriculum under Computer Science stream with distinction, laying a strong mathematical and programmatic foundation.",
      milestones: [
        "Learned core OOP concepts, C++, and basic data structures.",
        "Ranked in top tier for analytical and mathematical coursework."
      ]
    },
    {
      year: "2021 - 2022",
      title: "Secondary School Education (Class X)",
      institution: "Shri Swamy Matriculation Higher Secondary School, Salem",
      type: "education",
      details: "Completed secondary education under the state board curriculum with high academic performance.",
      milestones: [
        "Acquired foundational training in basic sciences, mathematics, and communication.",
        "Graduated with distinction marks."
      ]
    }
  ],

  // Skills Catalog
  skills: [
    {
      category: "Mechanical Engineering",
      list: [
        { name: "Digital Prototyping", rating: 90 },
        { name: "Product Design & DFM", rating: 88 },
        { name: "Finite Element Analysis (FEA)", rating: 85 },
        { name: "Computational Fluid Dynamics", rating: 80 },
        { name: "Additive Manufacturing", rating: 92 },
        { name: "Lattice Structure Design", rating: 85 }
      ]
    },
    {
      category: "Programming & Logic",
      list: [
        { name: "Python (Advanced)", rating: 85, badge: "Advanced Cert" },
        { name: "C++", rating: 75 },
        { name: "MATLAB & Simulink", rating: 80 },
        { name: "HTML / CSS / JS", rating: 85, badge: "Frontend Cert" },
        { name: "SQL", rating: 70 },
        { name: "ROS (Robot Operating System)", rating: 80 }
      ]
    },
    {
      category: "Engineering Software Tools",
      list: [
        { name: "Autodesk Fusion 360", rating: 95, badge: "Certified Professional" },
        { name: "SolidWorks", rating: 90, badge: "Certified Professional" },
        { name: "Siemens NX CAD", rating: 88, badge: "Certified Professional" },
        { name: "AutoCAD", rating: 92 },
        { name: "COMSOL Multiphysics", rating: 78 },
        { name: "Blender 3D Modeling", rating: 82 },
        { name: "Figma", rating: 80 }
      ]
    }
  ],

  // Engineering Projects
  // ==========================================
  // EDITING GUIDE - PROJECTS:
  // To edit or add projects:
  // - "image": Main cover image path (placed in assets/projects/)
  // - "demo": Prototype image/demo path (placed in assets/projects/)
  // - "pdf" / "prd": Technical report / PRD PDF paths (placed in assets/reports/ or assets/projects/)
  // - "gallery": Array of image paths for the project details slideshow (placed in assets/projects/)
  // ==========================================
  projects: [
    {
      id: "ecofloat",
      title: "Project EcoFloat (Niral Hackathon)",
      tagline: "Autonomous Marine Debris Interceptor & Water Quality Analyst",
      category: "Robotics & Automation",
      description: "Spearheaded the development of a solar-powered, dual-function autonomous robotic catamaran. Designed to simultaneously clear floating plastic debris using an onboard collector mesh and trace chemical runoffs with a real-time sensor node array integrated with ROS and IoT networks.",
      longDescription: "Project EcoFloat was built to tackle the challenges of manual marine cleanup. Engineered as a twin-hull catamaran, the vessel optimizes solar energy capture and navigation efficiency. Featuring real-time toxicity mapping and automated obstacle avoidance, this boat moves marine conservation from reactive manual labor to a proactive, automated, data-driven system. Handled mechanical structural assembly designs in Fusion 360 and sensor communications via serial interfaces.",
      image: "assets/projects/ecofloat_boat.png",
      technologies: ["ROS", "IoT", "Fusion 360", "Arduino", "Sensor Fusion"],
      github: "https://github.com/Nandhu2036",
      demo: "assets/projects/WhatsApp Image 2026-04-17 at 2.47.17 PM.jpeg", 
      pdf: "assets/reports/ECO-FLOAT_Technical_Report.pdf",
      prd: "assets/reports/ECO-FLOAT_PRD.pdf",
      gallery: [
        "assets/projects/1381_v4_Schema.png",
        "assets/projects/fig-2.png",
        "assets/projects/image001.png",
        "assets/projects/MSI_CD.jpeg",
        "assets/projects/MULTISPECTRAL_IMAGING.jpeg",
        "assets/projects/WhatsApp Image 2026-04-17 at 2.45.46 PM.jpeg",
        "assets/projects/WhatsApp Image 2026-04-17 at 7.44.32 PM.jpeg"
      ],
      featured: true
    },
    {
      id: "solar-tracker",
      title: "Hemispherical CPV Solar Tracking System",
      tagline: "Dual-Axis Concentrator Photovoltaic System Design",
      category: "Thermal & Energy Systems",
      description: "Developed a hemispherical Concentrator Photovoltaic (CPV) tracking design with adaptive weather algorithms. Designed dome-shaped panel matrices to maximize solar vector absorption and validated thermal and structural characteristics using COMSOL Multiphysics.",
      longDescription: "Standard flat solar panels lose efficiency when light strikes at extreme angles. This project implements a dome-shaped layout mimicking biological compound eyes. Combining dual-axis stepper motor actuators with solar tracking math models, it increases absorption by up to 25% across non-ideal solar vectors. Validated via mechanical finite element simulations to survive high-speed wind shears.",
      image: "assets/projects/solar_tracker.png",
      technologies: ["COMSOL Multiphysics", "Solar Tracking Math", "Fusion 360", "MATLAB"],
      github: "https://github.com/Nandhu2036",
      demo: null,
      pdf: null,
      gallery: [],
      featured: true
    },
    {
      id: "regen-braking",
      title: "Regenerative Braking for Electric Vehicles",
      tagline: "Efficiency Optimization through MATLAB Simulink Modeling",
      category: "Automotive Systems",
      description: "Designed and simulated an active regenerative braking control loop for EV prototypes, recovering kinetic energy during deceleration phases and extending overall battery life cycle parameters by up to 20%.",
      longDescription: "This research project models the interaction between brushless DC motors, battery packs, and dynamic wheel loads during braking. Using MATLAB Simulink, the system controls the PWM duty cycle of motor drives to act as high-efficiency generators, transferring current safely back to the cells through a dynamic Battery Management System (BMS) control loop. The design limits thermal stresses on conventional friction pads.",
      image: "assets/projects/ev_braking.png",
      technologies: ["MATLAB Simulink", "BMS", "Powertrain Modeling", "Control Engineering"],
      github: "https://github.com/Nandhu2036",
      demo: null,
      pdf: null,
      gallery: [],
      featured: true
    },
    {
      id: "aquatic-monitoring",
      title: "Advanced Aquatic Monitoring Platform",
      tagline: "High-Resolution Hyperspectral Spectrometer Integration",
      category: "Robotics & Automation",
      description: "Designed a stabilized floating vessel equipped with a high-resolution spectrometer. Uses sensor fusion and hyperspectral imaging maps to trace microplastics concentration and mapping chlorophyll levels.",
      longDescription: "Aquatic monitoring traditionally relies on sparse sample testing. This autonomous vessel sweeps water surfaces, utilizing an onboard synthesized optical spectrometer. Processing hyperspectral profiles dynamically allows the system to identify plastic polymers and monitor algal bloom factors. Optimized structural loading of the optical gimbal in CAD to reduce wave disturbances.",
      image: "assets/projects/aquatic_catamaran.png",
      technologies: ["Hyperspectral Imaging", "Sensor Fusion", "Optical Gimbals", "Additive Manufacturing"],
      github: "https://github.com/Nandhu2036",
      demo: null,
      pdf: null,
      gallery: [],
      featured: false
    },
    {
      id: "seed-spreader",
      title: "Hand-Cranked Seed Spreader",
      tagline: "DFM Optimization for Additive Manufacturing",
      category: "Product Design",
      description: "Designed and prototyped a robust agricultural seed spreader optimizing infill configurations for low-cost FDM 3D printing. Validated crankshaft wear mechanics under heavy loads.",
      longDescription: "An exercise in designing assemblies purely optimized for 3D printing (DFM/FDM). Redesigned complex gearing systems to minimize friction and print overhangs without needing excessive supports. Re-configured internal gear clearances to compensate for filament thermal shrinkages.",
      image: "assets/cad-models/2025-05-04_1738687165f52.webp",
      technologies: ["Fusion 360", "3D Printing (FDM)", "Tolerance Analysis", "Gearing Design"],
      github: "https://github.com/Nandhu2036",
      demo: null,
      pdf: "assets/reports/Hand_Crancked_Seed_Spreader.pdf",
      gallery: [
        "assets/cad-models/2025-05-04_267afeb45f7158.webp",
        "assets/cad-models/2025-05-04_51dc53de5821f8.webp",
        "assets/cad-models/2025-05-04_57bdf21f5de0e.webp",
        "assets/cad-models/2025-05-04_6a29ce4ebc72c.webp",
        "assets/cad-models/2025-05-04_aac909828bd768.webp",
        "assets/cad-models/2025-05-04_c35fb3395885d.webp",
        "assets/cad-models/2025-05-04_eefdecde13d0f8.webp"
      ],
      featured: false
    },
    {
      id: "hollow-clock",
      title: "ULN2003 Stepper Hollow Clock",
      tagline: "Precision Mechanical Timing & Embedded Programming",
      category: "Product Design",
      description: "Mechanical assembly design of a gearing-exposed hollow ring clock driven by a custom ULN2003 driver and Arduino stepper algorithms.",
      longDescription: "Engineered a ring-style clock where the center remains fully hollow. Utilizes complex nested gears to transmit rotational force from a base stepper to the hour and minute hands. Programmed microstepping profiles on a microcontroller to achieve silent, jitter-free movements.",
      image: "assets/projects/ecofloat_boat.png", 
      technologies: ["Arduino", "ULN2003 Driver", "Embedded C++", "Precision Gearing"],
      github: "https://github.com/Nandhu2036",
      demo: null,
      pdf: null,
      gallery: [],
      featured: false
    }
  ],

  // 3D Model & Design Showcase (CAD Vault)
  // ==========================================
  // EDITING GUIDE - CAD VAULT:
  // To edit or add 3D assemblies:
  // - "filePath": Path to the main render image (placed in assets/cad-models/)
  // - "drawings": Path to PDF drawing sheet (placed in assets/reports/ or assets/drawings/)
  // - "viewpoints": Array of render/blueprint image paths (placed in assets/cad-models/ or assets/cad-models/<subfolder>/)
  // - To link a physical CAD source model for direct download (.f3d, .stl), ensure the filename matches 
  //   and is placed in assets/cad-models/
  // ==========================================
  cadVault: [
    {
      id: "spreader-gearing",
      title: "Hand-Cranked Seed Spreader Gearing",
      type: "Product Assembly",
      filePath: "assets/cad-models/2025-05-04_1738687165f52.webp",
      description: "Full parametric assembly of structural gears, crank, and hopper frame optimized for FDM printing.",
      software: "Autodesk Fusion 360",
      date: "2025-05-04",
      tags: ["Gearing", "DFM", "FDM Printing"],
      relatedContent: { text: "Seed Spreader Project", link: "seed-spreader" },
      drawings: "assets/reports/Hand_Crancked_Seed_Spreader.pdf",
      viewpoints: [
        "assets/cad-models/2025-05-04_1738687165f52.webp",
        "assets/cad-models/2025-05-04_267afeb45f7158.webp",
        "assets/cad-models/2025-05-04_51dc53de5821f8.webp",
        "assets/cad-models/2025-05-04_57bdf21f5de0e.webp",
        "assets/cad-models/2025-05-04_6a29ce4ebc72c.webp",
        "assets/cad-models/2025-05-04_aac909828bd768.webp",
        "assets/cad-models/2025-05-04_c35fb3395885d.webp",
        "assets/cad-models/2025-05-04_eefdecde13d0f8.webp"
      ]
    },
    {
      id: "spreader-hopper",
      title: "Manual Spreader Hopper Section",
      type: "Technical Drawing",
      filePath: "assets/cad-models/2025-05-04_aac909828bd768.webp",
      description: "Hopper clearance details showing optimized angle of repose for seed flow.",
      software: "Autodesk Fusion 360",
      date: "2025-05-01",
      tags: ["Hopper Flow", "Section Analysis", "Tolerance stacks"],
      relatedContent: { text: "Seed Spreader Project", link: "seed-spreader" },
      drawings: "assets/reports/Hand_Crancked_Seed_Spreader.pdf",
      viewpoints: [
        "assets/cad-models/2025-05-04_aac909828bd768.webp",
        "assets/cad-models/2025-05-04_eefdecde13d0f8.webp"
      ]
    },
    {
      id: "tpms-lattice",
      title: "Hybrid TPMS Control Arm Lattice",
      type: "Simulation Output",
      filePath: "assets/cad-models/voxel_plot.png",
      description: "Voxelized stress plots under boundary load conditions on a triply periodic minimal surface control arm design.",
      software: "MATLAB & COMSOL",
      date: "2026-02-15",
      tags: ["TPMS Lattice", "Finite Element Analysis", "Topology Optimization"],
      relatedContent: { text: "Hybrid TPMS Research", link: "archive-explorer" },
      drawings: "assets/research/Design_and_parametrization_of_TPMS_lattice.pdf",
      viewpoints: ["assets/cad-models/voxel_plot.png"]
    },
    {
      id: "catamaran-hulls",
      title: "Aquatic Catamaran Hull Layout",
      type: "3D CAD Model",
      filePath: "assets/projects/ecofloat_boat.png",
      description: "Twin displacement hulls optimized for low hydro-drag coefficients.",
      software: "Autodesk Fusion 360",
      date: "2026-03-10",
      tags: ["Hull Design", "Hydrodynamics", "Autonomous boat"],
      relatedContent: { text: "Project EcoFloat", link: "ecofloat" },
      drawings: "assets/reports/ECO-FLOAT_Technical_Report.pdf",
      viewpoints: ["assets/projects/ecofloat_boat.png", "assets/projects/ecofloat_boat.png"]
    },
    {
      id: "screw-jack-drafting",
      title: "Mechanical Screw Jack Blueprint",
      type: "Technical Drawing",
      filePath: "assets/projects/fig-2.png", 
      description: "Precision 2D engineering drafting detailing the load-bearing screw thread profiles and tolerances annotations.",
      software: "AutoCAD",
      date: "2024-04-12",
      tags: ["Drafting", "Thread profiles", "Limits & Fits"],
      relatedContent: { text: "SAIL Salem mill designs", link: "experience" },
      drawings: "assets/drawings/Plumberjack.pdf",
      viewpoints: ["assets/projects/fig-2.png"]
    },
    {
      id: "adjustable-shaft-mount",
      title: "Adjustable Shaft Mount Bracket",
      type: "CAD Challenge",
      filePath: "assets/cad-models/adjustable_shaft_mount.png",
      description: "Parametric brackets model with adjustable clearances, designed for structural stability and high-rigidity shaft alignments.",
      software: "Autodesk Fusion 360",
      date: "2024-12-15",
      tags: ["Bracket", "Mount", "Parametric Part"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/adjustable_shaft_mount_drawing.pdf",
      viewpoints: ["assets/cad-models/adjustable_shaft_mount.png"]
    },
    {
      id: "angular-transmitter",
      title: "Angular Transmitter Assembly",
      type: "Product Assembly",
      filePath: "assets/cad-models/angular_transmitter.jpg",
      description: "Mechanical link dynamics gearing transmitter model configuring precise rotational displacements between angular shafts.",
      software: "Autodesk Fusion 360",
      date: "2025-01-20",
      tags: ["Transmitter", "Gearing Linkage", "Kinematics"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/angular_transmitter.jpg"]
    },
    {
      id: "axial-turbine-wheel",
      title: "Axial Turbine Wheel",
      type: "Product Assembly",
      filePath: "assets/cad-models/axial_turbine_wheel.png",
      description: "High-performance axial flow turbine rotor model with curved blades profiles optimized for fluid dynamic pressures extraction.",
      software: "Autodesk Fusion 360",
      date: "2025-02-12",
      tags: ["Turbine Rotor", "Aerodynamics", "Rotor assembly"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/axial_turbine_wheel.png"]
    },
    {
      id: "ball-joint-assy",
      title: "Ball Joint Assembly",
      type: "Product Assembly",
      filePath: "assets/cad-models/ball_joint.png",
      description: "Multi-axis spherical joint suspension connector modeling precise boundary clearances tolerances for automotive linkages.",
      software: "Autodesk Fusion 360",
      date: "2024-10-05",
      tags: ["Ball Joint", "Suspension Linkage", "Tolerances"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/ball_joint.png"]
    },
    {
      id: "cam-follower-mech",
      title: "Cam & Follower Mechanism",
      type: "Product Assembly",
      filePath: "assets/cad-models/cam_follower.png",
      description: "Standard mechanical motion translator converting rotational crankshaft forces to linear follower valve lifters profiles.",
      software: "Autodesk Fusion 360",
      date: "2024-09-18",
      tags: ["Cam follower", "Valve Gearing", "Rotational study"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/cam_follower.png"]
    },
    {
      id: "cardan-joint-assy",
      title: "Cardan Joint Gearing Linkage",
      type: "Product Assembly",
      filePath: "assets/cad-models/cardan_joint.png",
      description: "Universal cross coupling joint assembly transmitting torque through misaligned rotation axles setups.",
      software: "Autodesk Fusion 360",
      date: "2024-11-12",
      tags: ["Cardan Joint", "Universal joint", "Torque transmission"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/cardan_joint.png"]
    },
    {
      id: "dual-clevis-connector",
      title: "Dual Clevis Mount Connector",
      type: "Product Assembly",
      filePath: "assets/cad-models/dual_clevis_mount.png",
      description: "Heavy structural hinge bracket connector modeled for load transmissions in multi-degree hydraulic cranes structural hubs.",
      software: "Autodesk Fusion 360",
      date: "2024-11-28",
      tags: ["Clevis hinge", "Hinged bracket", "Hydraulic load"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/Model 3 Drawing.pdf",
      viewpoints: ["assets/cad-models/dual_clevis_mount.png"]
    },
    {
      id: "piston-cylinder-assy",
      title: "Reciprocating Piston Cylinder Assembly",
      type: "Product Assembly",
      filePath: "assets/cad-models/piston_cylinder.png",
      description: "Full combustion chamber slider mechanism mapping internal crankshaft offsets and tolerances clearances.",
      software: "Autodesk Fusion 360",
      date: "2024-12-22",
      tags: ["Piston cylinder", "Combustion slider", "Engine mechanisms"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/piston_cylinder.png"]
    },
    {
      id: "rachet-pawl-mechanism",
      title: "Ratchet & Pawl Mechanism",
      type: "Product Assembly",
      filePath: "assets/cad-models/rachet_pawl.jpg",
      description: "Exposure gears system allowing single-direction rotational motions and locking backwards dynamic loads.",
      software: "Autodesk Fusion 360",
      date: "2024-12-05",
      tags: ["Ratchet pawl", "Clutches lock", "Exposure gears"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/rachet_pawl.jpg"]
    },
    {
      id: "radial-engine-assembly",
      title: "9-Cylinder Radial Engine Assembly",
      type: "Product Assembly",
      filePath: "assets/cad-models/radial_engine.png",
      description: "Complex aircraft powertrain system linking multiple master and articulating rods to a single central crank pin.",
      software: "Autodesk Fusion 360",
      date: "2025-01-15",
      tags: ["Radial Engine", "Aerospace powertrain", "Crankshaft link"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/Radial Engine Assembly.pdf",
      viewpoints: ["assets/cad-models/radial_engine.png"]
    },
    {
      id: "traction-wheel-assembly",
      title: "High-Traction Planetary Gear Wheel",
      type: "Product Assembly",
      filePath: "assets/cad-models/traction_wheel.png",
      description: "Specialized hub motor shell design integrating traction tread blocks with high-torque planetary gearbox clearances.",
      software: "Autodesk Fusion 360",
      date: "2026-06-18",
      tags: ["Traction wheel", "Planetary hub", "Rover wheel"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/traction_wheel.png"]
    },
    {
      id: "universal-coupling-assy",
      title: "Universal Joint Coupling",
      type: "Product Assembly",
      filePath: "assets/cad-models/universal_coupling.png",
      description: "Torque coupler modeling nested fork profiles and a central block configuration to drive offset rotational axes.",
      software: "Autodesk Fusion 360",
      date: "2025-02-28",
      tags: ["Universal coupler", "Fork joint", "Axes offsets"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/universal_coupling.png"]
    },
    {
      id: "wobbling-disk-mechanism",
      title: "Wobbling Disk Pump Mechanism",
      type: "Product Assembly",
      filePath: "assets/cad-models/wobbling_disk.jpg",
      description: "Kinematics mechanism modeling an offset swashplate disk that translates rotary motions into axial strokes profiles.",
      software: "Autodesk Fusion 360",
      date: "2025-03-05",
      tags: ["Wobbling disk", "Swashplate pump", "Kinematics study"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/wobbling_disk.jpg"]
    },
    {
      id: "cad-challenge-day1",
      title: "CAD Modeling Challenge - Day 1",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_1.png",
      description: "Parametric block base, focusing on extruded profile boundaries and concentric slot holes features.",
      software: "Autodesk Fusion 360",
      date: "2024-08-01",
      tags: ["Challenge", "Slot holes", "Base brackets"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_1_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_1.png"]
    },
    {
      id: "cad-challenge-day2",
      title: "CAD Modeling Challenge - Day 2",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_2.png",
      description: "Angled rib base modeling using rib networks and thickness control parameters.",
      software: "Autodesk Fusion 360",
      date: "2024-08-02",
      tags: ["Challenge", "Rib structures", "Angled brackets"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_2_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_2.png"]
    },
    {
      id: "cad-challenge-day3",
      title: "CAD Modeling Challenge - Day 3",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_3.png",
      description: "Circular flange adapter, featuring circular bolt patterns and step-down cylinder bores.",
      software: "Autodesk Fusion 360",
      date: "2024-08-03",
      tags: ["Challenge", "Bolt patterns", "Flanges adapter"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_3_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_3.png"]
    },
    {
      id: "cad-challenge-day4",
      title: "CAD Modeling Challenge - Day 4",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_4.png",
      description: "Rotational guide slot guide block guide guides guidance mapping.",
      software: "Autodesk Fusion 360",
      date: "2024-08-04",
      tags: ["Challenge", "Guide slots", "Linkages clearances"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_4_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_4.png"]
    },
    {
      id: "cad-challenge-day5",
      title: "CAD Modeling Challenge - Day 5",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_5.png",
      description: "Symmetrical spacer hub, verifying tolerances stack-up alignments.",
      software: "Autodesk Fusion 360",
      date: "2024-08-05",
      tags: ["Challenge", "Symmetrical hubs", "Spacer tolerances"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_5_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_5.png"]
    },
    {
      id: "cad-challenge-day6",
      title: "CAD Modeling Challenge - Day 6",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_6.png",
      description: "Threaded rod adapter, configuring pitch sizes and lead constraints.",
      software: "Autodesk Fusion 360",
      date: "2024-08-06",
      tags: ["Challenge", "Threaded rod", "Pitch sizing"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_6_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_6.png"]
    },
    {
      id: "cad-challenge-day7",
      title: "CAD Modeling Challenge - Day 7",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_7.png",
      description: "Slotted clevis block, modeling pin holes and slot thickness controls.",
      software: "Autodesk Fusion 360",
      date: "2024-08-07",
      tags: ["Challenge", "Clevis block", "Pin holes"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_7_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_7.png"]
    },
    {
      id: "cad-challenge-day8",
      title: "CAD Modeling Challenge - Day 8",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_8.png",
      description: "Serrated gear clamp block, checking teeth clearances mesh parameters.",
      software: "Autodesk Fusion 360",
      date: "2024-08-08",
      tags: ["Challenge", "Serrated gear", "Clamping block"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_8_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_8.png"]
    },
    {
      id: "cad-challenge-day9",
      title: "CAD Modeling Challenge - Day 9",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_9.png",
      description: "Curved manifold coupling flange, checking loft profiles thickness constants.",
      software: "Autodesk Fusion 360",
      date: "2024-08-09",
      tags: ["Challenge", "Manifolds loft", "Lofted flanges"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_9_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_9.png"]
    },
    {
      id: "cad-challenge-day10",
      title: "CAD Modeling Challenge - Day 10",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_10.png",
      description: "Counterbalanced crank arm, modeling eccentric offset weight balances.",
      software: "Autodesk Fusion 360",
      date: "2024-08-10",
      tags: ["Challenge", "Crank arm", "Eccentric counterweight"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_10_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_10.png"]
    },
    {
      id: "cad-challenge-day11",
      title: "CAD Modeling Challenge - Day 11",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_11.png",
      description: "Fork link joint coupler, modeling clearances and structural pin blocks.",
      software: "Autodesk Fusion 360",
      date: "2024-08-11",
      tags: ["Challenge", "Fork link", "Joint coupling"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_11_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_11.png"]
    },
    {
      id: "cad-challenge-day12",
      title: "CAD Modeling Challenge - Day 12",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_12.png",
      description: "Reciprocating slide guide track block, verifying dynamic clearances.",
      software: "Autodesk Fusion 360",
      date: "2024-08-12",
      tags: ["Challenge", "Guide tracks", "Slide block"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_12_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_12.png"]
    },
    {
      id: "cad-challenge-day13",
      title: "CAD Modeling Challenge - Day 13",
      type: "CAD Challenge",
      filePath: "assets/cad-models/challenge/day_13.png",
      description: "Triple-port manifold connector hub, verifying fluid path flow clearances.",
      software: "Autodesk Fusion 360",
      date: "2024-08-13",
      tags: ["Challenge", "Triple manifold", "Flow path clearances"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: "assets/drawings/challenge/day_13_Nandhakumar.pdf",
      viewpoints: ["assets/cad-models/challenge/day_13.png"]
    },
    {
      id: "geneva-wheel",
      title: "Geneva Wheel Mechanism",
      type: "Product Assembly",
      filePath: "assets/cad-models/geneva_wheel.f3d",
      description: "Parametric model of a Geneva drive mechanism, translating continuous rotational force into intermittent index motions.",
      software: "Autodesk Fusion 360",
      date: "2025-06-08",
      tags: ["Geneva Drive", "Index Mechanism", "Kinematics"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/geneva_wheel.f3d"]
    },
    {
      id: "toy-grabber",
      title: "Toy Grabber Mechanical Claw",
      type: "Product Assembly",
      filePath: "assets/cad-models/toy_grabber.f3d",
      description: "Ergonomic hand-cranked scissor linkage mechanism grabber claw modeled for manufacturing.",
      software: "Autodesk Fusion 360",
      date: "2025-06-08",
      tags: ["Scissor Linkage", "Mechanical Claw", "Product Design"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/toy_grabber.f3d"]
    },
    {
      id: "groove-cam",
      title: "Groove Cam & Follower Mechanism",
      type: "Product Assembly",
      filePath: "assets/cad-models/groove_cam.f3d",
      description: "Specialized rotational face cam design specifying dynamic translation offsets and follower pathways.",
      software: "Autodesk Fusion 360",
      date: "2025-06-08",
      tags: ["Groove Cam", "Follower Linkage", "Actuators"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/groove_cam.f3d"]
    },
    {
      id: "knuckle-joint",
      title: "Knuckle Joint Tension Linkage",
      type: "Product Assembly",
      filePath: "assets/cad-models/knuckle_joint_v1.f3d",
      description: "Parametric fork and eye tension coupler pin assembly designed to transmit axial tensile forces.",
      software: "Autodesk Fusion 360",
      date: "2025-06-08",
      tags: ["Knuckle Joint", "Tension Linkage", "Pin Coupler"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/knuckle_joint_v1.f3d"]
    },
    {
      id: "rocker-arm",
      title: "Rocker Arm Lever Mechanism",
      type: "Product Assembly",
      filePath: "assets/cad-models/rocker_arm.f3d",
      description: "Precision levers for automotive valvetrains translating circular cam lobe profiles into linear valve strokes.",
      software: "Autodesk Fusion 360",
      date: "2025-06-08",
      tags: ["Rocker Arm", "Valve Actuation", "Leverage Linkage"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/rocker_arm.f3d"]
    },
    {
      id: "generated-rotor",
      title: "Generated Aerodynamic Rotor",
      type: "Product Assembly",
      filePath: "assets/cad-models/rotor.f3d",
      description: "Curved surface rotor blades geometry model, engineered for fluid flow pressures extraction.",
      software: "Autodesk Fusion 360",
      date: "2025-06-08",
      tags: ["Rotor Blade", "Aerodynamics", "Surfacing Layout"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/rotor.f3d"]
    },
    {
      id: "schmidt-coupling",
      title: "Schmidt Coupling Mechanism",
      type: "Product Assembly",
      filePath: "assets/cad-models/schidmth_coupling.f3d",
      description: "Modular link system coupling parallel misaligned rotating shafts in tight footprints.",
      software: "Autodesk Fusion 360",
      date: "2025-06-08",
      tags: ["Schmidt Coupling", "Misaligned Shafts", "Torque coupler"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/schidmth_coupling.f3d"]
    },
    {
      id: "slider-crank",
      title: "Slider Crank Linkage",
      type: "Product Assembly",
      filePath: "assets/cad-models/slider_crank.f3d",
      description: "Classical kinematic link mechanism translating circular rotation into linear sliders displacement.",
      software: "Autodesk Fusion 360",
      date: "2025-06-08",
      tags: ["Slider Crank", "Kinematics", "Crankshaft"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/slider_crank.f3d"]
    },
    {
      id: "slot-cam-four-follower",
      title: "Slot Cam & Four Follower Mechanism",
      type: "Product Assembly",
      filePath: "assets/cad-models/slot_cam_four_sliding.jpg",
      description: "Complex mechanical link coordinating four followers sliding synchronously driven by a nested cam slot.",
      software: "Autodesk Fusion 360",
      date: "2025-06-08",
      tags: ["Four Followers", "Slotted Cam", "Synchronous motion"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/slot_cam_four_sliding.jpg"]
    },
    {
      id: "spur-gear-spinner",
      title: "Spur Gear Fidget Spinner",
      type: "Product Assembly",
      filePath: "assets/cad-models/spur_gear_spinner.f3d",
      description: "Multi-stage planetary gearing arrangement fidget spinner designed for FDM assembly clearance.",
      software: "Autodesk Fusion 360",
      date: "2025-06-08",
      tags: ["Spur Gears", "Planetary mesh", "Fidget Toy"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/spur_gear_spinner.f3d"]
    },
    {
      id: "component-mesh-scan",
      title: "3D Mesh Scan Capture",
      type: "3D CAD Model",
      filePath: "assets/cad-models/20250130_092000_mesh.stl",
      description: "High-resolution mesh capture scanner output of mechanical components for reverse-engineering.",
      software: "MeshLab & Fusion 360",
      date: "2025-01-30",
      tags: ["3D Scanning", "Mesh generation", "Reverse Engineering"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: ["assets/cad-models/20250130_092000_mesh.stl"]
    },
    {
      id: "turntable-geared-assembly",
      title: "Rotational Geared Turntable Assembly",
      type: "Product Assembly",
      filePath: "assets/cad-models/turntable/Gear.png",
      description: "Complete motor-mounted rotating table and gear ring mechanical system modeled for printability.",
      software: "Autodesk Fusion 360",
      date: "2024-07-20",
      tags: ["Turntable", "Geared Ring", "Motor Mount", "Assembly"],
      relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
      drawings: null,
      viewpoints: [
        "assets/cad-models/turntable/Gear.png",
        "assets/cad-models/turntable/Bottom.png",
        "assets/cad-models/turntable/Table.png",
        "assets/cad-models/turntable/Motormount.png",
        "assets/cad-models/turntable/IMG_6450.JPG",
        "assets/cad-models/turntable/IMG_6451.jpg",
        "assets/cad-models/turntable/39AECF0E-4C62-4B8C-89B1-AA7D28F61425.JPG",
        "assets/cad-models/turntable/5F256617-A3F6-4D15-8CCE-0D2EB27328FE.JPG",
        "assets/cad-models/turntable/852AFF5E-669C-4A0C-ADC0-3D646E2127DD.JPG",
        "assets/cad-models/turntable/BEE1E7DA-A88B-4646-A2A4-A621697EB647.JPG"
      ]
    }
  ],

  // Certificate Vault
  // ==========================================
  // EDITING GUIDE - CERTIFICATES:
  // To edit or add certificates:
  // - "fileName": Base filename of the certificate PDF. 
  //   Place the PDF inside: assets/certificates/
  //   Example: "fusion360_autodesk.pdf" will resolve to assets/certificates/fusion360_autodesk.pdf
  // ==========================================
  certificates: [
    {
      title: "Autodesk Certified Fusion Designer",
      category: "Software certifications",
      issuer: "Autodesk",
      fileName: "fusion360_autodesk.pdf",
      description: "Professional credential validating modeling proficiency in Fusion 360, parametric constructs, and assembly joints.",
      date: "2025-03-12",
      tags: ["CAD", "Parametric Modeling"],
      relatedContent: { text: "EcoFloat Project", link: "ecofloat" }
    },
    {
      title: "Certified Solidworks Designer",
      category: "Software certifications",
      issuer: "Dassault Systèmes / Springboard",
      fileName: "Solidworks_springboard.pdf",
      description: "Validation of drafting, assembly structures, and tolerance stacks validation methodologies.",
      date: "2024-11-20",
      tags: ["CAD", "Assemblies validation"],
      relatedContent: { text: "Femlogic Internship", link: "experience" }
    },
    {
      title: "Siemens NX CAD Designer",
      category: "Software certifications",
      issuer: "Siemens / Springboard",
      fileName: "Catia_springboard.pdf", 
      description: "Advanced surfaces design, drafting layouts, and high-reliability parametric model designs.",
      date: "2025-01-15",
      tags: ["CAD", "Surface modeling"],
      relatedContent: { text: "Vande Bharat modules", link: "experience" }
    },
    {
      title: "AutoCAD for 2D Modelling",
      category: "Software certifications",
      issuer: "Infosys Springboard",
      fileName: "autocad_infosysspringboard.pdf",
      description: "Standard industrial drafting alignment, projections, block parameters, and engineering layers structures.",
      date: "2024-05-18",
      tags: ["Drafting", "2D Layouts"],
      relatedContent: { text: "SAIL Salem mill designs", link: "experience" }
    },
    {
      title: "Certified in Python Advanced",
      category: "Course certificates",
      issuer: "Udemy",
      fileName: "pythonDSA.pdf",
      description: "Computational logic, algorithmic search scripts, data handling, and integrations frameworks.",
      date: "2024-09-30",
      tags: ["Python", "Algorithms"],
      relatedContent: { text: "EcoFloat IoT scripts", link: "ecofloat" }
    },
    {
      title: "Certified Frontend Developer",
      category: "Course certificates",
      issuer: "Udemy",
      fileName: "digital101.pdf",
      description: "Core UI/UX engineering covering high-fidelity layout alignments (HTML/CSS/JS) and responsive frameworks.",
      date: "2024-07-22",
      tags: ["HTML/CSS/JS", "Webdev"],
      relatedContent: { text: "Digital HQ Website", link: "hero" }
    },
    {
      title: "Blender for 3D Modelling",
      category: "Course certificates",
      issuer: "Udemy",
      fileName: "MESH.pdf",
      description: "Focuses on complex organic mesh generation, material shaders configurations, and render lighting environments.",
      date: "2025-04-10",
      tags: ["Blender", "3D Rendering"],
      relatedContent: { text: "Seed Spreader Hopper", link: "seed-spreader" }
    },
    {
      title: "C++ Programming Certificate",
      category: "Course certificates",
      issuer: "Udemy",
      fileName: "C++_udemy.pdf",
      description: "Validation of fundamental object-oriented patterns, pointer operations, and logic structures.",
      date: "2023-12-15",
      tags: ["C++", "OOP"],
      relatedContent: { text: "Hollow Clock firmware", link: "projects" }
    },
    {
      title: "IoT Enabled Solar Tree Workshop",
      category: "Workshop certificates",
      issuer: "IEI Technical Council",
      fileName: "IoT_enabled_Solar_Tree.pdf",
      description: "Practical engineering training in solar panel wiring configurations, sensor nodes setup, and IoT real-time monitoring.",
      date: "2024-02-18",
      tags: ["IoT", "Solar Energy"],
      relatedContent: { text: "CPV Solar Tracker", link: "solar-tracker" }
    },
    {
      title: "Product Design and Development NPTEL",
      category: "Course certificates",
      issuer: "NPTEL / IIT Madras",
      fileName: "Product_design_and_Development_NPTEL.pdf",
      description: "National program course certifying concepts of prototyping, design validation, product architecture, and DFM.",
      date: "2024-10-25",
      tags: ["Product Design", "DFM"],
      relatedContent: { text: "Femlogic modules", link: "experience" }
    },
    {
      title: "Niral Hackathon Participant Award",
      category: "Competition certificates",
      issuer: "St. Joseph's Council",
      fileName: "NANDHAKUMAR-G-Participant-Certificate.pdf",
      description: "Awarded for participating and pitching Project EcoFloat autonomous catamaran during the national hackathon.",
      date: "2026-04-17",
      tags: ["Hackathon", "EcoFloat Pitch"],
      relatedContent: { text: "Project EcoFloat", link: "ecofloat" }
    }
  ],

  // Presentation Center
  // ==========================================
  // EDITING GUIDE - PRESENTATIONS:
  // To edit or add presentation slides:
  // - "fileName": Base filename of the PowerPoint (.pptx) file. Place inside: assets/presentations/
  // - "pdfName": Base filename of the PDF version of slides (for inline preview). Place inside: assets/presentations/
  //   Note: If no pdfName is available, set it to null.
  // ==========================================
  presentations: [
    {
      id: "ecofloat-pitch",
      title: "EcoFloat Project Pitch (Niral Hackathon)",
      category: "Project presentations",
      description: "Dynamic product pitch slide deck detailing hull design dynamics, multispectral imaging, and business PRD specifications.",
      fileName: "EcoFloat_Product_Pitch.pptx",
      pdfName: "ECO-FLOAT_PRESENTATION.pdf",
      date: "2026-04-17",
      slidesCount: 12,
      tags: ["Robotics", "Marine Clean", "Innovation"],
      relatedContent: { text: "Project EcoFloat", link: "ecofloat" },
      slideOutlines: [
        "1. Executive Summary - The Marine Trash Crisis",
        "2. Core Innovation - Twin Hull Displacement Catamaran",
        "3. Mechanical Assembly Layout - Solar Arrays & Mesh Net",
        "4. Sensor Array - IoT pH, Turbidity & GPS Tracking Nodes",
        "5. Control Architecture - ROS Edge node & Serial Comm",
        "6. Manufacturing Plan & Bill of Materials (BOM)"
      ]
    },
    {
      id: "ecofloat-final",
      title: "Project EcoFloat Technical Evaluation",
      category: "Technical presentations",
      description: "High-fidelity system architecture review mapping serial communications, path tracking logic, and water chemistry models.",
      fileName: "EcoFloat_Final.pptx",
      pdfName: "ECO-FLOAT_PRESENTATION.pdf",
      date: "2026-04-12",
      slidesCount: 18,
      tags: ["Systems Engineering", "IoT", "ROS"],
      relatedContent: { text: "Project EcoFloat", link: "ecofloat" },
      slideOutlines: [
        "1. Problem Definition - Scaling Autonomous Cleanup",
        "2. Hydro-hull Design & Stability Simulations in Fusion 360",
        "3. Embedded Hardware Stack - RPi, Arduino, Sensors Node",
        "4. Control Loop - Autonomous Path Finding & Collision Detection",
        "5. Sensor Calibration Models & Laboratory Results"
      ]
    },
    {
      id: "regen-brake-eval",
      title: "EV Regenerative Braking Systems Simulation",
      category: "Academic presentations",
      description: "Academic slides analyzing BLDC motor equations, regenerative cycles, and battery state-of-charge parameters in MATLAB Simulink.",
      fileName: "Regen_Brake_Presentation.pptx",
      pdfName: null,
      date: "2025-10-18",
      slidesCount: 15,
      tags: ["EV Powertrains", "MATLAB", "Control Loops"],
      relatedContent: { text: "Regen Brake Project", link: "regen-braking" },
      slideOutlines: [
        "1. Energy Recovery Dynamics in EVs",
        "2. Mathematical Modeling of Regenerative Torques",
        "3. MATLAB Simulink Block Configurations",
        "4. Battery Charging Controls & Thermal Safeguards",
        "5. Efficiency Comparison Plots (Conventional vs. Regen)"
      ]
    },
    {
      id: "purepath-remediation",
      title: "PurePath ECO-FLOAT Advanced Remediation",
      category: "Research presentations",
      description: "Research evaluation deck addressing chemical runoff tracking, sensor sensitivity registers, and localized algal bloom projections.",
      fileName: "PurePath_ECO-FLOAT_Advanced_Remediation.html.pptx",
      pdfName: null,
      date: "2026-03-24",
      slidesCount: 14,
      tags: ["Environmental R&D", "Sensor Fusion", "Hyperspectral"],
      relatedContent: { text: "Aquatic Monitoring Platform", link: "aquatic-monitoring" },
      slideOutlines: [
        "1. Aquatic Toxicity Vectors & Flow Dynamics",
        "2. Multi-Spectral Colorimetric Mapping",
        "3. Edge Inference Algorithms for Plastic Detection",
        "4. Prototype Performance in Natural Lake Environments",
        "5. Path Forward: Scaling Node Mesh Networks"
      ]
    }
  ],

  // Central Document Hub
  // ==========================================
  // EDITING GUIDE - DOCUMENTS:
  // To edit or add documents/reports:
  // - "filePath": Full relative path to the document/report PDF (placed in assets/reports/ or assets/documents/)
  // ==========================================
  documents: [
    {
      title: "Executive Technical Resume",
      fileSize: "213 KB",
      filePath: "assets/documents/Nandhakumar_G_Resume.pdf",
      type: "Resume",
      description: "Updated professional resume detailing engineering methodologies, core competencies, and career records.",
      date: "2026-06-18",
      software: "HTML / LaTeX",
      tags: ["Resume", "Qualifications"],
      relatedContent: { text: "About Me", link: "about" }
    },
    {
      title: "Femlogic Vande Bharat Design Report",
      fileSize: "42.0 MB",
      filePath: "assets/reports/Femlogic_Vande_Bharat_Seating_Report.pdf",
      type: "Internship reports",
      description: "Comprehensive engineering report detailing structural design inputs, parametric seating models, and DFM stacks.",
      date: "2025-07-10",
      software: "SolidWorks & Siemens NX",
      tags: ["Vande Bharat", "DFM Report", "Sheet Metal"],
      relatedContent: { text: "Femlogic Internship", link: "experience" }
    },
    {
      title: "SAIL Industrial Training Report",
      fileSize: "20.2 MB",
      filePath: "assets/reports/SAIL_Salem_Steel_Plant_Report.pdf",
      type: "Internship reports",
      description: "Industrial records covering steel manufacturing workflows, hydraulic controls, and heavy machinery operations.",
      date: "2025-12-28",
      software: "AutoCAD",
      tags: ["SAIL", "Metallurgical Plant", "Industrial Workflows"],
      relatedContent: { text: "SAIL Internship", link: "experience" }
    },
    {
      title: "EcoFloat Project Report & Presentation",
      fileSize: "6.8 MB",
      filePath: "assets/reports/ECO-FLOAT_Technical_Report.pdf",
      type: "Project reports",
      description: "Detailed system design report mapping sensor networks, ROS integrations, and testing metrics.",
      date: "2026-04-17",
      software: "Fusion 360 & Python",
      tags: ["EcoFloat", "Hackathon Report", "Systems Architecture"],
      relatedContent: { text: "Project EcoFloat", link: "ecofloat" }
    },
    {
      title: "EcoFloat Product Requirements Document (PRD)",
      fileSize: "343 KB",
      filePath: "assets/reports/ECO-FLOAT_PRD.pdf",
      type: "Technical reports",
      description: "Strategic requirement outline for the automated catamaran, specifying sensor tolerance ranges.",
      date: "2026-03-01",
      software: "Word / Markdown",
      tags: ["PRD", "Vessel Specs", "Sensors Tolerances"],
      relatedContent: { text: "Project EcoFloat", link: "ecofloat" }
    },
    {
      title: "Hand-Cranked Spreader Technical Specs",
      fileSize: "365 KB",
      filePath: "assets/reports/Hand_Crancked_Seed_Spreader.pdf",
      type: "Project reports",
      description: "Print parameters analysis, gear tolerances offsets, and PLA/PETG testing records.",
      date: "2025-05-04",
      software: "Fusion 360",
      tags: ["Seed Spreader", "PLA/PETG parameters", "Mechanical tolerances"],
      relatedContent: { text: "Seed Spreader Project", link: "seed-spreader" }
    }
  ],

  // Peer-Reviewed / Academic Research Papers (New Hub Category)
  // ==========================================
  // EDITING GUIDE - RESEARCH PAPERS:
  // To edit or add research papers:
  // - "filePath": Full relative path to the PDF (placed in assets/research/)
  // ==========================================
  research: [
    {
      title: "Design and Parametrization of TPMS Lattice Structures",
      source: "Academic R&D",
      filePath: "assets/research/Design_and_parametrization_of_TPMS_lattice.pdf",
      fileSize: "2.8 MB",
      description: "Computational modeling of gyroid and diamond structures to optimize mechanical load paths in thin wall components.",
      date: "2025-09-15",
      software: "MATLAB & Fusion 360",
      tags: ["TPMS Lattices", "Additive Manufacturing", "Lattice Stress"],
      relatedContent: { text: "Skills Dashboard", link: "skills" }
    },
    {
      title: "Mechanical Performance of Additive Manufactured TPMS",
      source: "Experimental Analysis",
      filePath: "assets/research/Mechanical_Performance_of_Additive_Manufactured_TPMS.pdf",
      fileSize: "3.2 MB",
      description: "Tensile testing and deformation analysis of 3D printed lattice meshes subjected to compression stress parameters.",
      date: "2025-11-22",
      software: "COMSOL Multiphysics",
      tags: ["FEA", "Compression Testing", "Mechanical Performance"],
      relatedContent: { text: "Skills Dashboard", link: "skills" }
    },
    {
      title: "Topology Optimization of Automotive Suspension Control Arms",
      source: "Topology Thesis Research",
      filePath: "assets/research/Topology_Optimization_Design_of_Automotive_Suspension.pdf",
      fileSize: "13.0 MB",
      description: "Applying structural topology optimizations to reduce mass in suspension arm systems while maintaining structural integrity constants.",
      date: "2026-02-18",
      software: "SolidWorks & ANSYS",
      tags: ["Topology Optimization", "Suspension arms", "ANSYS Stress"],
      relatedContent: { text: "Command Center Focus", link: "command-center" }
    },
    {
      title: "Design and Analysis of Lower Control Arm Systems",
      source: "Suspension Assemblies",
      filePath: "assets/research/Design_and_analysis_of_lower_control_arm.pdf",
      fileSize: "2.2 MB",
      description: "FEA modeling, boundary load distributions, and fatigue analysis of structural links configurations.",
      date: "2026-03-02",
      software: "ANSYS & Inventor",
      tags: ["FEA Analysis", "Control Arms", "Boundary Loads"],
      relatedContent: { text: "Command Center Focus", link: "command-center" }
    }
  ],



  // Internship Records
  internships: [
    {
      company: "Steel Authority of India Ltd. (SAIL)",
      division: "Salem Steel Plant",
      logo: "business",
      role: "Industrial Engineering Trainee",
      duration: "December 2025",
      document: "assets/reports/SAIL_Salem_Steel_Plant_Report.pdf",
      responsibilities: [
        "Studied integrated heavy mills processing, raw materials feeding, continuous slab casting processes, and mechanical cooling tables.",
        "Inspected automatic rolling loops and hydraulics actuators operating hot structural steel profiles mills.",
        "Analyzed shop-floor compliance, occupational hazards regulations, and plant maintenance records schedules."
      ],
      learnings: "Obtained concrete exposure to massive industrial machines, mechanical linkages structural layout, safety control processes, and state-governed production workflows."
    },
    {
      company: "Femlogic Technologies Pvt. Ltd.",
      division: "Product Design Division",
      logo: "train",
      role: "Product Design Intern",
      duration: "June 2025 - July 2025",
      document: "assets/reports/Femlogic_Vande_Bharat_Seating_Report.pdf",
      certificate: "assets/internships/Femlogic_Internship_Certificate.pdf",
      responsibilities: [
        "Assisted in developing 3D CAD modeling segments for structural seating modules of the Vande Bharat express train systems.",
        "Collaborated with senior designers applying DFM limitations for thin sheet-metal stamped designs and fasteners selections.",
        "Performed mechanical interfaces integrity and clearances tolerances checks on train carriage structures."
      ],
      learnings: "Acquired real design constraints methodologies, corporate workflows structure, and professional validation habits for high-reliability consumer assemblies."
    },
    {
      company: "K.M. Knitwear Pvt. Ltd.",
      division: "Production & packaging",
      logo: "precision_manufacturing",
      role: "Production Engineering Intern",
      duration: "July 2024 - August 2024",
      document: null,
      responsibilities: [
        "Modeled container logistics loading cycles, optimizing box dimensions configurations to reduce shipping damage risks.",
        "Identified floor bottlenecks, presenting line balancing updates yielding a 10% production rate boost.",
        "Participated in plant machinery repairs, reducing production line downtime parameters by 15%."
      ],
      learnings: "Understood line balancing algorithms, predictive equipment maintenance schedules, and shipping load optimization parameters."
    }
  ],

  // Beyond My Resume Lab Book
  beyondResume: [
    {
      title: "3D Printed Compliant Mechanisms",
      tag: "Experiments",
      status: "In Progress",
      description: "Designing non-joint flexure hinges in Fusion 360 to print single-piece mechanisms. Eliminates friction and lubrication requirements in small actuator systems."
    },
    {
      title: "ROS 2 TurtleBot Navigation",
      tag: "Learning",
      status: "Active",
      description: "Setting up SLAM algorithms on a localized mock grid. Learning AMCL particle filter localization concepts to transition my maritime projects from ROS Melodic to ROS 2 Humble."
    },
    {
      title: "Topology Optimization of Lattice Assemblies",
      tag: "Research",
      status: "Planned",
      description: "Studying gyroid and diamond lattice structures (TPMS) to minimize mass in structural brackets while retaining load path stiffness. Intending to prototype using high-infill PETG prints."
    }
  ],

  // Memory Photo Gallery
  gallery: [
    {
      title: "Niral Hackathon Team Project EcoFloat",
      category: "Projects",
      filePath: "assets/projects/WhatsApp Image 2026-04-17 at 2.47.17 PM.jpeg",
      desc: "Our hackathon team presenting the initial deployment phase of the automated catamaran."
    },
    {
      title: "Catamaran Edge Sensors Testing",
      category: "Workshops",
      filePath: "assets/projects/WhatsApp Image 2026-04-17 at 7.44.32 PM.jpeg",
      desc: "Configuring toxicity sensors and calibrating onboard compass registers."
    },
    {
      title: "Seed Spreader Assembled Prototype",
      category: "College",
      filePath: "assets/cad-models/2025-05-04_1738687165f52.webp",
      desc: "Checking tolerances and gears meshing quality on the FDM printed seed spreader."
    },
    {
      title: "Optical Spectrometer Path Setup",
      category: "Projects",
      filePath: "assets/projects/MSI_CD.jpeg",
      desc: "Configuring multispectral cameras alignment within the central sensor bay."
    }
  ]
};

// Dynamically populate 28 exercises to avoid file bloating
for (let i = 1; i <= 28; i++) {
  const ext = i === 1 ? 'png' : 'f3d';
  PROFILE_DATA.cadVault.push({
    id: `cad-exercise-${i}`,
    title: `CAD Practice Exercise ${i}`,
    type: `CAD Exercise`,
    filePath: `assets/cad-models/exercises/Ex_${i}.${ext}`,
    description: `Parametric component design for practicing modeling speed and accuracy (Exercise ${i} of 28).`,
    software: "Autodesk Fusion 360",
    date: "2024-08-15",
    tags: ["Exercise", `Part ${i}`, "Parametric modeling"],
    relatedContent: { text: "Archive Explorer", link: "archive-explorer" },
    drawings: null,
    viewpoints: [`assets/cad-models/exercises/Ex_${i}.${ext}`]
  });
}

// Export to make it accessible to modules or load globally in standard scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROFILE_DATA };
}
