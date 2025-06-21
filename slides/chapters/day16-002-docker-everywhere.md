---
theme: seriph
background: #f5f5f5
title: Docker Everywhere
info: |
  # Docker Everywhere
  Modern containerization in real-world workflows.
  Instructor: Er. Hari Lamichhane
drawings:
  persist: false
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: false
colorSchema: 'light'
favicon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
layout: center
pollSettings:
  anonymous: true
---

# Docker Compose & Beyond

How to run, scale, and automate containers in the real world

---
layout: center
---

# Why Docker Compose?

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Multi-Service Apps</h3>
    <ul class="list-disc pl-4">
      <li>Run backend, frontend, DB, cache, etc. together</li>
      <li>One command = all services up</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Simple YAML Config</h3>
    <ul class="list-disc pl-4">
      <li>Define services, networks, volumes</li>
      <li>Control env, ports, dependencies</li>
    </ul>
  </div>
</div>

---
layout: center
---

# docker-compose.yml Example

```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports: ['3000:3000']
  frontend:
    build: ./frontend
    ports: ['8080:80']
    depends_on: ['backend']
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: example
    volumes:
      - db-data:/var/lib/postgresql/data
volumes:
  db-data:
```

---
layout: center
---

# Useful Docker Compose Commands

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <ul class="list-disc pl-4">
      <li><code>docker-compose up --build</code></li>
      <li><code>docker-compose down</code></li>
      <li><code>docker-compose logs -f</code></li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <ul class="list-disc pl-4">
      <li><code>docker-compose exec backend sh</code></li>
      <li><code>docker-compose ps</code></li>
      <li><code>docker-compose stop/start/restart</code></li>
    </ul>
  </div>
</div>

---
layout: center
---

# Compose in Dev & Prod

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Development</h3>
    <ul class="list-disc pl-4">
      <li>Hot reload with volumes</li>
      <li>Easy local testing</li>
      <li>Share config with team</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Production</h3>
    <ul class="list-disc pl-4">
      <li>Override configs for prod</li>
      <li>Integrate with CI/CD</li>
      <li>Scale with orchestration</li>
    </ul>
  </div>
</div>

---
layout: center
---

# 🛠 Docker in DevOps

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">CI/CD Pipelines</h3>
    <ul class="list-disc pl-4">
      <li>Build containers on every commit</li>
      <li>Test inside containers</li>
      <li>Push images to registry</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Example: GitHub Actions</h3>
    <pre><code class="language-yaml">jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: docker build -t myapp .
</code></pre>
  </div>
</div>

---
layout: center
---

# Docker Orchestration

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-yellow-600">
    <h3 class="font-bold mb-2">Docker Swarm</h3>
    <ul class="list-disc pl-4">
      <li>Native clustering</li>
      <li>Simple scaling</li>
      <li>Good for small/medium teams</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-purple-600">
    <h3 class="font-bold mb-2">Kubernetes</h3>
    <ul class="list-disc pl-4">
      <li>Industry standard for orchestration</li>
      <li>Auto-scaling, self-healing, rolling updates</li>
      <li>Works with any cloud</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Infrastructure as Code (IaC)

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <ul class="list-disc pl-4">
      <li>Dockerfiles, Compose YAML</li>
      <li>Declarative, versioned infra</li>
      <li>Share and reuse configs</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <ul class="list-disc pl-4">
      <li>Terraform: Infra provisioning</li>
      <li>Helm: Kubernetes app packaging</li>
      <li>Automate everything</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Quiz: Compose vs Orchestration

<Poll question="What does Docker Compose NOT do?" :answers="['Run multi-container apps', 'Scale across many servers', 'Define service dependencies', 'Use YAML config']" :correctAnswer="1" />

---
layout: center
---

# Terms to Know

<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 rounded-lg border bg-blue-100 border-blue-600 hover:transition-colors">Docker Compose</div>
  <div class="px-3 py-2 rounded-lg border bg-green-100 border-green-600 hover:transition-colors">Service</div>
  <div class="px-3 py-2 rounded-lg border bg-yellow-100 border-yellow-600 hover:transition-colors">Volume</div>
  <div class="px-3 py-2 rounded-lg border bg-purple-100 border-purple-600 hover:transition-colors">Orchestration</div>
  <div class="px-3 py-2 rounded-lg border bg-pink-100 border-pink-600 hover:transition-colors">Kubernetes</div>
  <div class="px-3 py-2 rounded-lg border bg-indigo-100 border-indigo-600 hover:transition-colors">Swarm</div>
  <div class="px-3 py-2 rounded-lg border bg-teal-100 border-teal-600 hover:transition-colors">CI/CD</div>
  <div class="px-3 py-2 rounded-lg border bg-orange-100 border-orange-600 hover:transition-colors">Infrastructure as Code</div>
  <div class="px-3 py-2 rounded-lg border bg-lime-100 border-lime-600 hover:transition-colors">Helm</div>
  <div class="px-3 py-2 rounded-lg border bg-gray-100 border-gray-600 hover:transition-colors">Terraform</div>
</div>

---
layout: center
---

# Your Turn: Docker Compose Lab

<div class="text-xl mb-6">Try this on your machine:</div>

<div class="p-4 rounded-lg border border-blue-600 mb-4">
  <div class="font-bold flex items-center">
    <div class="i-carbon-task mr-2 text-blue-700"></div>
    <span>Write a <code>docker-compose.yml</code> for a Node.js app + Postgres</span>
  </div>
</div>

<div class="p-4 rounded-lg border border-green-600">
  <div class="font-bold flex items-center mb-2">
    <div class="i-carbon-analytics mr-2 text-green-700"></div>
    <span>Bonus:</span>
  </div>
  <ul class="space-y-2 list-disc pl-5">
    <li>Run <code>docker-compose up</code> and connect your app to the DB</li>
    <li>Try <code>docker-compose logs</code> and <code>exec</code></li>
    <li>Experiment with volumes for data persistence</li>
  </ul>
</div>
