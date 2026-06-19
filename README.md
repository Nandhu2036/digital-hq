# Personal Digital Headquarters

Welcome to your premium, immersive personal digital headquarters. This platform has been designed to showcase your actual engineering accomplishments, CAD assemblies, professional certifications, and internship records in a luxurious, calm, and high-fidelity environment.

Unlike traditional resumes, this acts as a personal operating system that is fully scalable and easy to maintain.

---

## Directory Architecture

The system has been set up with the following directory structure:

```
d:/digital-hq/
├── index.html            # Main markup & section frameworks
├── index.css             # Matte styling sheets & typographic hierarchy
├── main.js               # Event controllers & layout mechanics
├── github.js             # Live GitHub statistics fetcher
├── data.js               # Centralized configuration (All your content is here!)
└── assets/               # Local folder holding your assets
    ├── profile/          # Drop your profile photo here as portrait.jpg
    ├── projects/         # Technical spec presentations & screenshots
    ├── certificates/     # PDF files of your qualifications
    ├── cad/              # CAD renders & topological simulations
    ├── documents/        # PDF reports & downloadable resumes
    ├── gallery/          # Masonry team and workshop photos
    └── internships/      # Internship certificates and reports
```

All your files, reports, and photos have been successfully copied from your workspace into their respective subfolders in `assets/`.

---

## How to Edit and Scale Content

You do **not** need to touch `index.html` or `main.js` to update your portfolio. 

All content is dynamically populated from **`data.js`**. To add a new project, certificate, document, or milestone:

1. Open `d:/digital-hq/data.js` in your editor.
2. Follow the JSON-like javascript objects. To add a project, simply copy an existing project block in `projects: [...]`, update the fields, and save the file.
3. Drop the respective images or PDFs inside `d:/digital-hq/assets/` under the appropriate subfolders.
4. Refresh your browser to see updates instantly!

### Customizing Your Profile Photo
* Place a high-quality vertical portrait named `portrait.jpg` under `d:/digital-hq/assets/profile/`.
* The site automatically looks for `portrait.jpg` first. If it cannot find it, it gracefully displays a glowing monogram placeholder with your initials (`NG`).

### Customizing GitHub Connection
* Open `d:/digital-hq/github.js`.
* Update the value of `const GITHUB_USERNAME = "Nandhu2036"` if your GitHub handle changes.
* The API engine handles real-time querying. If rate-limited or offline, it renders custom fallback blocks representing your real credentials.

---

## Testing Locally

To run and preview the digital headquarters locally:

1. Open a terminal or PowerShell.
2. Start a local HTTP server:
   ```bash
   # Using Python
   python -m http.server 8000 --directory d:/digital-hq/
   
   # Or using Node.js (npx)
   npx http-server d:/digital-hq/
   ```
3. Open your browser and navigate to `http://localhost:8000`.

---

## Deployment Guide

This site is fully client-side and requires no complex backend. You can host it for free in minutes:

### 1. GitHub Pages
1. Push this folder to a GitHub repository (e.g. `github.com/Nandhu2036/digital-hq`).
2. Go to repository **Settings** -> **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** and choose `main` branch.
4. Click save. Your headquarters will be online at `https://Nandhu2036.github.io/digital-hq/`!

### 2. Vercel / Netlify
1. Log into Vercel or Netlify.
2. Drag and drop the `d:/digital-hq` folder directly onto their upload boxes, or link it to your GitHub repository.
3. The platform will automatically deploy your site static files within seconds.
