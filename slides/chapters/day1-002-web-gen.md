---
theme: seriph
background: #f5f5f5
title: Advanced Web Technology
info: |
  # Advanced Web Technology
  Modern web development course for aspiring developers.

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

# The Web is the Operating System of the World

---
layout: center
---

# Everyday Web

> What app or service do you use the most in your day?

We’ll map it to:
  - Client
  - Server
  - Protocol
  - Database

---

# Web Generations

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Web 1.0</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Static pages</li>
      <li>Read-only</li>
      <li>Examples: early blogs, Yahoo! (1996)</li>
    </ul>
  </div>
  
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Web 2.0</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Read-write</li>
      <li>Social media, dynamic content</li>
      <li>Examples: Facebook, YouTube</li>
    </ul>
  </div>
  
  <div class="p-4 bg-purple-100 rounded-lg border border-purple-600">
    <h3 class="font-bold mb-2">Web 3.0</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Decentralized, smart contracts, semantics</li>
      <li>Examples: Ethereum, IPFS</li>
    </ul>
  </div>
  
  <div class="p-4 bg-orange-100 rounded-lg border border-orange-600">
    <h3 class="font-bold mb-2">Web 4.0</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>AI-powered, personalized, decentralized</li>
      <li>Examples: ChatGPT, AI Agents</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Quiz: Web Generations

<Poll question="What is a key shift from Web 1.0 to Web 2.0?" :answers="['Static to Dynamic', 'JavaScript to TypeScript', 'FTP to HTTP', 'Frontend to Backend']" :correctAnswer="0" />

---
layout: center
---

# What is the Internet?

- A global network of networks
- Web = apps built on top of it
- Uses protocols like TCP/IP and HTTP

---
layout: center
class: text-center
---

# Client-Server Communication

```mermaid
graph TD
  U[User] --> B[Browser]
  B -->|HTTP GET| S[Web Server]
  S --> DB[(Database)]
  S -->|HTML + JS| B
```

---
layout: center
---
# Core Web Protocols

<div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
<div>

**Web & Communication**
<ul class="!list-disc !pl-5 space-y-1">
  <li><strong>HTTP/HTTPS:</strong> Request-response for web resources (Secure)</li>
  <li><strong>WebSockets:</strong> Persistent, real-time, two-way connections</li>
  <li><strong>DNS:</strong> Translates domain names to IP addresses</li>
</ul>

</div>
<div>

**Foundation & Transfer**
<ul class="!list-disc !pl-5 space-y-1">
  <li><strong>TCP/IP:</strong> Foundational internet protocol suite</li>
  <li><strong>FTP:</strong> File Transfer Protocol</li>
</ul>

</div>
<div>

**Security**
<ul class="!list-disc !pl-5 space-y-1">
  <li><strong>SSL/TLS:</strong> Cryptographic protocols for secure connections (TLS supersedes SSL)</li>
</ul>

</div>
<div>

**Email**
<ul class="!list-disc !pl-5 space-y-1">
  <li><strong>SMTP:</strong> Sending email</li>
  <li><strong>IMAP:</strong> Retrieving email</li>
</ul>

</div>
</div>

---
layout: center
---

# Protocol Analogy

- HTTP = postcard (anyone can read)
- HTTPS = sealed envelope (secure)
- WebSocket = phone call (real-time)

---
layout: center
---

# Quiz: Protocols

<Poll question="What does the 'S' in HTTPS stand for?" :answers="['Secure', 'Server', 'Session', 'Syntax']" :correctAnswer="0" />

---
layout: center
---

# Modern Web Architecture

- Separation: frontend/backend
- API-driven communication
- Based on patterns like MVC
- Includes monoliths and microservices
- Other architectures: Serverless, SPA, JAMStack, Layered Architecture, etc.

---
layout: center
---

# Other Architectures

<div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 text-sm mb-2">
  <div class="p-3 bg-purple-100 rounded-lg border border-purple-600">
    <h3 class="text-sm! font-bold flex mb-1 items-center gap-1"><div class="i-carbon-application-web text-purple-700"></div>SPA (Single Page App)</h3>
    <ul class="text-xs">
      <li>Single HTML page load</li>
      <li>Dynamic content updates</li>
      <li>Rich user experience</li>
      <li>Faster after initial load</li>
      <li>Can be complex to build</li>
      <li>SEO challenges (historically)</li>
    </ul>
  </div>
  
  <div class="p-3 bg-teal-100 rounded-lg border border-teal-600">
    <h3 class="text-sm! font-bold flex mb-1 items-center gap-1"><div class="i-carbon-function text-teal-700"></div>Serverless</h3>
    <ul class="text-xs">
      <li>No server management</li>
      <li>Pay-per-use model</li>
      <li>Automatic scaling</li>
      <li>FaaS (e.g., AWS Lambda)</li>
      <li>Reduced operational cost</li>
      <li>Potential vendor lock-in</li>
    </ul>
  </div>

  <div class="p-3 bg-orange-100 rounded-lg border border-orange-600">
    <h3 class="text-sm! font-bold flex mb-1 items-center gap-1"><div class="i-carbon-layers text-orange-700"></div>Layered Architecture</h3>
    <ul class="text-xs">
      <li>Separation of concerns</li>
      <li>Typically: Presentation, Application, Business, Data Access</li>
      <li>Improved maintainability</li>
      <li>Enhanced testability</li>
      <li>Promotes reusability</li>
      <li>Can be overly complex for small projects</li>
    </ul>
  </div>

  <div class="p-3 bg-lime-100 rounded-lg border border-lime-600">
    <h3 class="text-sm! font-bold flex mb-1 items-center gap-1"><div class="i-carbon-flash text-lime-700"></div>JAMstack</h3>
    <ul class="text-xs">
      <li>JavaScript, APIs, Markup</li>
      <li>Pre-rendered static sites</li>
      <li>Enhanced performance</li>
      <li>Improved security</li>
      <li>Scalability via CDN</li>
      <li>Relies on client-side JS & APIs</li>
    </ul>
  </div>
</div>


> we will use most of these as we build projects

---
layout: center
---

# MVC Structure

```mermaid
graph TD
  C[Client View] --> S[Server Controller]
  S --> M[Model]
```

---
layout: center
---

# Live Demo: Web App Traffic

<div class="space-y-4 mt-6">
  <div class="flex items-center gap-2">
    <div class="i-carbon-code-reference text-blue-700"></div>
    <span>Introducing DevTools</span>
  </div>
  <div class="flex items-center gap-2">
    <div class="i-carbon-data-view text-blue-700"></div>
    <span>Observe requests, headers, responses</span>
  </div>
</div>

<div class="mt-8 p-4 bg-blue-100 rounded-lg inline-flex items-center border border-blue-600">
  <div class="i-carbon-view mr-2 text-blue-700"></div>
  <span>Let's see how the web really works!</span>
</div>

---
layout: center  
---

# What Did You Learn Today?

<Poll question="What did you learn today?" :answers="['Web 1.0 and 2.0', 'HTTP', 'Web is used in most apps', 'MVC Architecture', 'All of the above']" :correctAnswer="5" />

---
layout: center
---

# Your turn

<div class="text-xl mb-6">Choose a web app you use:</div>

<div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600 mb-4">
  <div class="font-bold flex items-center">
    <div class="i-carbon-task mr-2 text-yellow-700"></div>
    <span>Open DevTools</span>
  </div>
</div>

<div class="p-4 bg-green-100 rounded-lg border border-green-600">
  <div class="font-bold flex items-center mb-2">
    <div class="i-carbon-analytics mr-2 text-green-700"></div>
    <span>Analyze the HTTP request and response:</span>
  </div>
  <ul class="space-y-2 list-disc pl-5">
    <li>What HTTP method was used? (GET, POST, etc.)</li>
    <li>Examine the request headers - identify at least 3 important ones</li>
    <li>What was in the request payload/body (if any)?</li>
    <li>What status code did the response return?</li>
    <li>What content type was returned in the response?</li>
    <li>How does this request contribute to the app's functionality?</li>
  </ul>
</div>

---
layout: center
class: text-center
---
# Terms to Know
 
<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Web 1.0 - 4.0</div>

  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">HTTP(S)</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">WebSockets</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">REST</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">GraphQL</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">TCP/IP</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">FTP</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">SSL</div>

  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">HTTP Response</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Status Codes</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Request Headers</div>
  <div class="px-3 py-2 bg-pink-100 rounded-lg border border-pink-600 hover:bg-pink-200 transition-colors">Response Headers</div>
  <div class="px-3 py-2 bg-pink-100 rounded-lg border border-pink-600 hover:bg-pink-200 transition-colors">Endpoints</div>
  <div class="px-3 py-2 bg-indigo-100 rounded-lg border border-indigo-600 hover:bg-indigo-200 transition-colors">Payload/Body</div>
  <div class="px-3 py-2 bg-teal-100 rounded-lg border border-teal-600 hover:bg-teal-200 transition-colors">Content-Type</div>

  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Client-Server Architecture</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">MVC (Model-View-Controller)</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Microservices Architecture</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Monolithic Architecture</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">API Gateway</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Serverless Architecture</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">JSON</div>
</div>

<div class="text-xl text-left mb-0 mt-4">Bonus</div>
<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">PWA</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">SPA</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">SSR</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">CSR</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">SSG</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">ISR</div>
  
</div>  

---
layout: center
---

# Next Class

<div class="text-2xl mb-8 text-blue-700">
  HTML5, CSS3, JavaScript – <strong>foundations of a modern frontend</strong>
</div>

<div class="grid grid-cols-3 gap-4 mt-8">
  <div class="p-4 bg-orange-100 rounded-lg border border-orange-600">
    <div class="i-logos-html-5 text-4xl mx-auto mb-2"></div>
    <div class="text-center">Structure</div>
  </div>
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <div class="i-logos-css-3 text-4xl mx-auto mb-2"></div>
    <div class="text-center">Style</div>
  </div>
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <div class="i-logos-javascript text-4xl mx-auto mb-2"></div>
    <div class="text-center">Behavior</div>
  </div>
</div>