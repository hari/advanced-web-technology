---
theme: seriph
background: #f5f5f5
title: Why Web Security Matters
info: |
  # Why Web Security Matters
  Modern web security for every developer.
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

# Why Web Security Matters
### A Developer's Responsibility

---
layout: center
---

# Real-World Breaches

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <h3 class="font-bold mb-2">Uber</h3>
    <ul class="space-y-1 list-disc pl-4 text-sm">
      <li>GitHub token in public repo</li>
      <li>Driver & rider data exposed</li>
    </ul>
  </div>
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Facebook</h3>
    <ul class="space-y-1 list-disc pl-4 text-sm">
      <li>Insecure token endpoints</li>
      <li>50M account sessions lost</li>
    </ul>
  </div>
</div>

<div class="mt-6 p-4 bg-pink-100 rounded-lg border w-full border-pink-600 inline-flex items-center">
  <div class="i-carbon-warning-alt mr-2 text-pink-700"></div>
  <span><b>Takeaway:</b> Breaches cost money, users, and trust.</span>
</div>

---
layout: center
---

# What is a Vulnerability?

- A weakness in your app or system
- Can be exploited by attackers
- Exists in code, config, design, or even people

<div class="p-4 bg-orange-100 rounded-lg border border-orange-600 mt-4">
  <b>Example:</b> SQL injection, default passwords, exposed API keys
</div>

---
layout: center
---

# Layers of Defense

```mermaid
flowchart LR
  A[Network Layer] --> B[System Layer] --> C[Application Layer]
  C:::focus
classDef focus fill:#ffe0e0,stroke:#333,stroke-width:2px;
```

<div class="mt-4">Developer's zone of control = <b>Application Layer</b></div>

---
layout: center
---

# What Do Attackers Want?

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-red-100 rounded-lg border border-red-600">
    <ul class="list-disc pl-4 text-sm">
      <li>Steal sensitive data (credentials, SSNs)</li>
      <li>Hijack user accounts</li>
    </ul>
  </div>
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <ul class="list-disc pl-4 text-sm">
      <li>Inject code/scripts (XSS, SQLi)</li>
      <li>Abuse systems (free credits, spam)</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Threat Actors

People who want to do harm to your system.

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 bg-gray-100 rounded-lg border border-gray-600">
    <b>Script Kiddies</b><br/>
    Run tools, little skill
  </div>
  <div class="p-3 bg-blue-100 rounded-lg border border-blue-600">
    <b>Automated Bots</b><br/>
    Scan & inject payloads
  </div>
  <div class="p-3 bg-yellow-100 rounded-lg border border-yellow-600">
    <b>Insider Threats</b><br/>
    Disgruntled/careless devs
  </div>
  <div class="p-3 bg-red-100 rounded-lg border border-red-600">
    <b>State-Sponsored</b><br/>
    Advanced, resourceful
  </div>
</div>

---
layout: center
---

# Where Are You Vulnerable?

```mermaid
flowchart TB
  A[Form Inputs] --> R[Risk]
  B[URLs] --> R
  C[Cookies] --> R
  D[LocalStorage] --> R
  E[3rd Party Packages] --> R
```

<div class="mt-4 p-4 bg-pink-100 rounded-lg border border-pink-600">
  <b>Vulnerabilities exist everywhere — front and back.</b>
</div>

---
layout: center
---

# The Golden Rule

Never trust user input — anywhere.

- Validate inputs  
- Sanitize data  
- Escape outputs

---
layout: center
---

# Security Mindset for Devs

- Assume your code will be attacked
- "What if this input is malicious?"
- Defense in depth: multiple layers
- Learn from real breaches

<div class="p-4 bg-blue-100 rounded-lg border border-blue-600 mt-4">
  <b>Pro tip:</b> Paranoia is a feature, not a bug.
</div>

---
layout: center
---

# How Are Vulnerabilities Discovered?

- Security researchers, bug bounties
- Automated scanners
- Penetration testing
- Sometimes: attackers find them first

---
layout: center
---

# How to Stay Up to Date

- Follow OWASP, security blogs, mailing lists
- Use dependency scanners (npm audit, Snyk)
- Join security communities (Discord, Reddit)

---
layout: center
---

# Terms to Know

<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600">Vulnerability</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600">Exploit</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600">Threat Actor</div>
  <div class="px-3 py-2 bg-pink-100 rounded-lg border border-pink-600">Attack Surface</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600">Defense in Depth</div>
  <div class="px-3 py-2 bg-orange-100 rounded-lg border border-orange-600">Zero Day</div>
  <div class="px-3 py-2 bg-gray-100 rounded-lg border border-gray-600">Bug Bounty</div>
  <div class="px-3 py-2 bg-red-100 rounded-lg border border-red-600">Patch</div>
</div>

