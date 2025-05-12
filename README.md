# Advanced Web Technology Course Materials

Welcome! This repository contains the course materials for Advanced Web Technology, taught by [Hari](https://github.com/hari). It includes presentation slides, project code examples, and build scripts.

## Overview

This course explores modern web development concepts, tools, and best practices. The materials are designed to provide a practical understanding of building and deploying web applications, covering both theoretical foundations via slides and practical application through projects.

## Tech Stack

*   **Slides:** [Slidev](https://sli.dev/)
*   **Frontend Build Tool:** [Vite](https://vitejs.dev/)
*   **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)
*   **Package Manager:** [pnpm](https://pnpm.io/)
*   **Tailwind CSS:** [Tailwind CSS](https://tailwindcss.com/)
*   **Frontend:** React (Coming Soon)
*   **Backend:** Express.js (Coming Soon)
*   (more coming soon)

## Directory Structure

*   `slides/`: Contains the source Markdown files for the course presentations, powered by Slidev.
*   `frontend/`: Houses various frontend projects and examples used throughout the course. Each sub-directory is a separate project (e.g., `calculator`).
*   `scripts/`: Contains build and utility scripts, including the deployment script (`deploy.js`) and HTML templates (`template.html`).
*   `dist/`: The output directory for the built slides and frontend projects, structured for deployment. This is automatically generated when running `pnpm build`.

## Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   Corepack (`npm install --global corepack@latest`)
*   pnpm (`corepack enable pnpm`)

### Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/hari/advanced-web-technology.git
    cd advanced-web-technology
    ```

2.  Install dependencies for the entire workspace:
    ```bash
    pnpm install
    ```

### Running Locally

*   **Run Slides:** To view and develop the slides locally:
    ```bash
    cd slides && pnpm dev chapters/slide-name.md
    # Or run from the root
    pnpm slides chapters/slide-name.md
    ```

*   **Run a Frontend Project (e.g., Calculator):**
    ```bash
    cd frontend/calculator
    pnpm dev
    ```
    Navigate to the specific project directory and run its development server.

### Building for Deployment

To build all slides and frontend projects into the `dist` directory:
```bash
pnpm build
```

> This command executes the `scripts/deploy.js` script.

You can then use VsCode's Live Server extension to view the slides and projects locally.

---

## Deployment

The live version of the slides and projects is automatically deployed to Cloudflare Pages.

**Live Site:** [https://advanced-web-technology.pages.dev/](https://advanced-web-technology.pages.dev/)