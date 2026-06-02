# 🌐 Personal Portfolio Website

A modern, responsive personal portfolio website built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

🔗 **Live Site:** [https://bhavishapatel209.github.io/portfolio-website/](https://bhavishapatel209.github.io/portfolio-website/)

---

## ✨ Features

- **Hero Section** — Animated typing effect, gradient name, and social links
- **About Section** — Bio, stats, and photo placeholder
- **Skills Section** — Categorized skill tags (Frontend, Backend, Database, DevOps)
- **Projects Section** — Project cards with hover effects and GitHub/live links
- **Experience Timeline** — Vertical timeline with roles and tech tags
- **Contact Form** — Contact info panel with a working message form
- **Fully Responsive** — Works on mobile, tablet, and desktop
- **Dark Theme** — Sleek indigo/purple dark theme with animated background blobs

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 |
| Styling | CSS3 (Custom Properties, Flexbox, Grid, Animations) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Inter & Fira Code |
| Hosting | GitHub Pages |

---

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML structure with all sections
├── style.css       # All styles, animations, and responsive design
├── script.js       # Typing effect, scroll animations, form handling
└── README.md       # This file
```

---

## 🚀 How This Was Built & Deployed

### 1. Built with Wibey (AI Coding Assistant)
This portfolio was created using **[Wibey](https://wibey.walmart.com/code)**, an AI-powered coding assistant integrated into VS Code. It generated the full HTML structure, CSS styling, and JavaScript interactivity in one go.

### 2. Repository Setup
A GitHub repository was created and the code was pushed using the GitHub CLI (`gh`):
```bash
git init
git add .
git commit -m "Initial commit: Personal portfolio website"
gh repo create portfolio-website --public --source=. --remote=origin --push
```

### 3. Deployed via GitHub Pages
GitHub Pages was enabled directly via the GitHub API:
```bash
gh api repos/bhavishapatel209/portfolio-website/pages \
  --method POST \
  --input - <<'EOF'
{"source":{"branch":"main","path":"/"}}
EOF
```

This makes the site automatically available at:
> `https://bhavishapatel209.github.io/portfolio-website/`

### 4. Auto-Deploy on Updates
Every time changes are pushed to the `main` branch, GitHub Pages automatically rebuilds and redeploys the site within ~1 minute.

---

## ✏️ How to Customize

1. **Your Info** — Open `index.html` and replace `"Your Name"`, bio, company names, and project details
2. **Your Photo** — Replace the placeholder `div` in the About section with `<img src="your-photo.jpg" />`
3. **Social Links** — Update the GitHub, LinkedIn, and email `href` values in the Hero section
4. **Skills** — Edit the `#skills` section with your actual tech stack
5. **Projects** — Update the 3 project cards with your real projects
6. **Experience** — Edit the timeline items with your actual work history

After editing, deploy your changes:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

---

## 📬 Contact Form Integration

The contact form currently simulates a submission. To make it functional, integrate one of these free services:

- **[EmailJS](https://emailjs.com)** — Send emails directly from JavaScript (no backend needed)
- **[Formspree](https://formspree.io)** — Submit forms via a simple POST request
- **[Netlify Forms](https://netlify.com)** — If you ever migrate hosting to Netlify

---

🌀 Magic applied with [Wibey VS Code Extension](https://wibey.walmart.com/code) 🪄
