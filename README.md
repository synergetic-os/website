# Synergetics Operating System (SOS) Official Website

This repository contains the official research, architecture, prototype, and founder website for the **Synergetics Operating System (SOS)** — an experimental open-source operating system initiative founded by **Solomon Yaw Adeklo**.

The project originated when Solomon conceptualized the idea of a topology-based operating system as an undergraduate student at **Valley View University** in Ghana while studying the core Operating Systems course. The project investigates whether topology-based models, geometric relationships inspired by Buckminster Fuller's Synergetics, and adaptive resource management can inform a relationship-aware approach to operating-system architecture and process scheduling.

---

## 🚀 Live Demo & Official Links

- **SOS GitHub Organization**: [https://github.com/synergetic-os](https://github.com/synergetic-os)
- **Operating-System Prototype**: [https://github.com/synergetic-os/Prototype](https://github.com/synergetic-os/Prototype)
- **Rust Scheduler Simulation**: [https://github.com/synergetic-os/Simulation/blob/main/synergetic_scheduler_rust_simulation.rs](https://github.com/synergetic-os/Simulation/blob/main/synergetic_scheduler_rust_simulation.rs)
- **Research Publication (ResearchGate)**: [SYNERGETIC OPERATING SYSTEM (SOS): A Topology-Based Emergent and Resource-Field Operating System Architecture](https://www.researchgate.net/publication/408462085_SYNERGETIC_OPERATING_SYSTEM_SOS_A_Topology-Based_Emergent_and_Resource-Field_Operating_System_Architecture)
- **Comprehensive Systems Documentation**: [A comprehensive systems documentation of Synergetics operating system](https://www.researchgate.net/publication/408461895_A_comprehensive_systems_documentation_of_Synergetics_operating_system)
- **Synergetics OS LinkedIn Page**: [https://linkedin.com/company/synergetics-operating-system](https://linkedin.com/company/synergetics-operating-system)
- **Founder Portfolio**: [https://www.solomonadeklo.com/](https://www.solomonadeklo.com/)
- **Founder GitHub**: [https://github.com/solomonyaw](https://github.com/solomonyaw)
- **Founder LinkedIn**: [https://www.linkedin.com/in/solomon-adeklo-1501453bb/](https://www.linkedin.com/in/solomon-adeklo-1501453bb/)

---

## 🎨 Official Brand Identity & Color Palette

The visual identity is designed around the official Synergetics OS logo, featuring the geodesic sphere, orbital rings, and dynamic gradient:

- **Ocean Blue** (`#0879D1`): Primary buttons, calls to action, active navigation, key headings.
- **Synergetic Teal** (`#159C91`): Secondary accents, geometric lines, architecture illustrations.
- **Growth Green** (`#79B96B`): Resource visualization accents, positive status indicators.
- **Energy Orange** (`#F2A52B`): Selected emphasis elements, important milestone markers.
- **Deep Navy** (`#12345A`): Main headings, typography, dark technical panels, and footer.
- **Clean White** (`#FFFFFF`): Dominant background, cards, content surfaces.
- **Pale Blue** (`#EAF4FB`): Alternating section backgrounds, soft panels.
- **Cool Grey** (`#F3F6F8`): Secondary section backgrounds, neutral borders.

---

## 📁 Project Structure

```text
├── index.html          # Complete semantic HTML5 structure with all written content
├── styles.css          # Dedicated CSS3 stylesheet using CSS custom properties
├── script.js           # Vanilla JavaScript (navigation, interactive diagram, lightbox, FAQ)
├── assets/             # Local images and visual assets
│   ├── logo-synergetics.png     # Official Synergetics OS logo
│   ├── system-architecture.jpg  # 🏗 System Architecture Blueprint & Execution Pipeline
│   ├── design-model.jpg         # 📐 Design Model: 3D Vector Equilibrium & Equilibrium Equations
│   ├── gui.png                  # Concept 01: Synergetic Desktop Environment
│   ├── gui2.png                 # Concept 02: Adaptive Resource & Topology Monitor
│   └── founder.png              # Authentic photograph of founder Solomon Yaw Adeklo
├── metadata.json       # Applet metadata configuration
├── vite.config.ts      # Vite configuration for local preview & static bundling
└── README.md           # Documentation, editing, and deployment guide
```

---

## 💻 How to Run Locally

Because the website is built with native web technologies (**HTML5**, **CSS3**, and **Vanilla JavaScript**), it has **zero mandatory runtime dependencies**.

### Option A: Open directly in a browser
Double-click `index.html` or open it with Chrome, Firefox, Safari, or Edge.

### Option B: Using Python's built-in HTTP server
```bash
python3 -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

### Option C: Using Node / Vite
```bash
npm run dev
```

---

## 🛠️ How to Customize & Maintain

### 1. Updating the Written Content
All textual content, headings, research summaries, and FAQ items reside directly within `index.html`. Edit the text within standard semantic HTML tags (`<h1>`, `<p>`, `<li>`, etc.).

### 2. Replacing the Founder Photograph
To update or refresh Solomon Yaw Adeklo's photograph:
1. Place the new high-resolution JPEG or PNG file into the `assets/` directory.
2. Name it `assets/solomon-profile.jpg` (or update the `src` attribute in the `#founder` section of `index.html`).

### 3. Updating the UI/UX Concept Images
1. Save your replacement concept screenshots into the `assets/` folder:
   - `assets/concept-01-desktop.jpg`
   - `assets/concept-02-monitor.jpg`
2. Update the `CONCEPT_IMAGES` array in `script.js` if you wish to adjust the lightbox captions.

### 4. Modifying Colors and Spacing
All theme variables are centrally configured in `:root` inside `styles.css`:
```css
:root {
  --color-primary: #0879D1;
  --color-teal: #159C91;
  --color-green: #79B96B;
  --color-orange: #F2A52B;
  --color-navy: #12345A;
  --color-white: #FFFFFF;
  --color-pale-blue: #EAF4FB;
  --color-cool-grey: #F3F6F8;
  --color-border: #D7E4EF;
}
```

---

## 🤝 Collaboration & Project Ownership

Organisations, research institutions, academic labs, open-source foundations, and software engineers interested in collaborating, sponsoring development, or discussing taking ownership of the Synergetics Operating System open-source project are invited to reach out directly via email:

- **Project Email**: [synergeticsoperatingsystem@gmail.com](mailto:synergeticsoperatingsystem@gmail.com?subject=Collaboration%20%26%20Project%20Ownership%20Inquiry%20-%20Synergetics%20OS)

---
## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: official Synergetics OS website"
   git push origin main
   ```
2. Navigate to your repository settings on GitHub: **Settings &gt; Pages**.
3. Under **Build and deployment &gt; Source**, select **Deploy from a branch**.
4. Set branch to `main` and folder to `/ (root)`.
5. Click **Save**. GitHub Pages will deploy the website within seconds.

All internal links and asset references use relative paths (`./styles.css`, `assets/...`), ensuring 100% compatibility when hosted on root domains or project subpaths (e.g. `https://synergetic-os.github.io/website/`).

---

## ⚖️ Official Research Disclaimer

*Synergetics Operating System (SOS) is an experimental research and development initiative. Its architectural concepts, simulation, and prototype remain subject to continued implementation, testing, and evaluation.*
