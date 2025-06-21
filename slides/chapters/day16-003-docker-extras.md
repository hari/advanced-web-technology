---
theme: seriph
background: #f5f5f5
title: Docker Extras
info: |
  # Docker Extras
  Deep dive: Linux, security, troubleshooting, and pro tips for containers.
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

# Linux & Containers: Under the Hood

---
layout: center
---

# Why Linux for Containers?

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Kernel Features</h3>
    <ul class="list-disc pl-4">
      <li>Namespaces: process, network, mount, user</li>
      <li>cgroups: resource limits</li>
      <li>UnionFS: layered filesystems</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Why It Matters</h3>
    <ul class="list-disc pl-4">
      <li>Fast, lightweight base images</li>
      <li>Runs everywhere Linux runs</li>
      <li>Security & isolation by default</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Popular Base Images

<div class="grid grid-cols-4 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">alpine</h3>
    <div class="text-xs opacity-80">Minimal OS<br/>5MB, super fast</div>
  </div>
  <div class="p-3 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">node</h3>
    <div class="text-xs opacity-80">Node.js apps<br/>Official, secure</div>
  </div>
  <div class="p-3 rounded-lg border border-yellow-600">
    <h3 class="font-bold mb-2">nginx</h3>
    <div class="text-xs opacity-80">Static servers<br/>Reverse proxy</div>
  </div>
  <div class="p-3 rounded-lg border border-purple-600">
    <h3 class="font-bold mb-2">python</h3>
    <div class="text-xs opacity-80">APIs/scripts<br/>Data science</div>
  </div>
</div>

---
layout: center
---

# .dockerignore: Keep Images Clean

```txt
node_modules
.env
.git
*.log
coverage
.DS_Store
```

<div class="mt-4 p-2 border border-yellow-500 rounded">
🚀 Pro Tip: Use .dockerignore to keep builds fast and images small
</div>

---
layout: center
---

# 🛡 Docker Security: What Matters

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Security Features</h3>
    <ul class="list-disc pl-4">
      <li>Namespaces = isolation</li>
      <li>cgroups = resource limits</li>
      <li>AppArmor / SELinux profiles</li>
      <li>Signed images</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Best Practices</h3>
    <ul class="list-disc pl-4">
      <li>Use trusted base images</li>
      <li>Keep containers small</li>
      <li>Use multi-stage builds</li>
      <li>Scan images regularly</li>
      <li>Drop root privileges</li>
      <li>Keep secrets out of images</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Multi-Stage Builds: Smaller, Safer

```
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-slim
WORKDIR /app
COPY --from=build /app/dist ./dist
CMD ["node", "dist/index.js"]
```

<div class="mt-4 p-2 border border-green-500 rounded">
💡 Only ship what you need! Build in one stage, run in another.
</div>

---
layout: center
---

# Troubleshooting Containers

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <ul class="list-disc pl-4">
      <li>Check logs: <code>docker logs &lt;container&gt;</code></li>
      <li>Shell in: <code>docker exec -it &lt;container&gt; sh</code></li>
      <li>Inspect: <code>docker inspect &lt;container&gt;</code></li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <ul class="list-disc pl-4">
      <li>Check ports: <code>docker ps</code></li>
      <li>Remove stopped: <code>docker container prune</code></li>
      <li>Rebuild: <code>docker-compose build --no-cache</code></li>
    </ul>
  </div>
</div>

---
layout: center
---

# Quiz: Security & Best Practices

<Poll question="Which is NOT a Docker security best practice?" :answers="['Use trusted base images', 'Run as root', 'Scan images', 'Use multi-stage builds']" :correctAnswer="1" />

---
layout: center
---

# Terms to Know

<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 rounded-lg border bg-blue-100 border-blue-600 hover:transition-colors">Namespace</div>
  <div class="px-3 py-2 rounded-lg border bg-green-100 border-green-600 hover:transition-colors">cgroups</div>
  <div class="px-3 py-2 rounded-lg border bg-yellow-100 border-yellow-600 hover:transition-colors">UnionFS</div>
  <div class="px-3 py-2 rounded-lg border bg-purple-100 border-purple-600 hover:transition-colors">Multi-stage Build</div>
  <div class="px-3 py-2 rounded-lg border bg-pink-100 border-pink-600 hover:transition-colors">AppArmor</div>
  <div class="px-3 py-2 rounded-lg border bg-indigo-100 border-indigo-600 hover:transition-colors">SELinux</div>
  <div class="px-3 py-2 rounded-lg border bg-teal-100 border-teal-600 hover:transition-colors">.dockerignore</div>
  <div class="px-3 py-2 rounded-lg border bg-orange-100 border-orange-600 hover:transition-colors">Image Scan</div>
  <div class="px-3 py-2 rounded-lg border bg-lime-100 border-lime-600 hover:transition-colors">Rootless</div>
</div>

---
layout: center
---

# Final Tips & Takeaways

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <ul class="list-disc pl-4">
      <li>Containers ≠ VMs</li>
      <li>Containers are ephemeral</li>
      <li>Use volumes for data</li>
      <li>Keep images minimal</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <ul class="list-disc pl-4">
      <li>docker-compose = Dev superpower</li>
      <li>Security is everyone's job</li>
      <li>Automate, automate, automate</li>
      <li>Experiment and break things!</li>
    </ul>
  </div>
</div>
