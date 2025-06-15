---
theme: seriph
background: #f5f5f5
title: SEO for Developers & Builders – The Complete Playbook
info: |
  # SEO for Developers & Builders
  Modern SEO strategies, technical foundations, and advanced tactics for 2024+.
  
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

# SEO Part 2

Keywords, metrics, content, strategy, and more

---
layout: center
---

# Keyword Research – Types

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-blue-600">
    <h3 class="font-bold text-lg mb-2">Short-tail</h3>
    <div class="text-sm opacity-80">e.g. <code>photo editor</code></div>
  </div>
  <div class="p-3 rounded-lg border border-green-600">
    <h3 class="font-bold text-lg mb-2">Long-tail</h3>
    <div class="text-sm opacity-80">e.g. <code>ai photo editor for instagram</code></div>
  </div>
  <div class="p-3 rounded-lg border border-purple-600">
    <h3 class="font-bold text-lg mb-2">(LSI) Keywords</h3>
    <small class="text-xs opacity-80">Latent Semantic Indexing</small>
    <div class="text-sm opacity-80">Related search terms <code>professional photos</code> <code>LinkedIn profile</code></div>
  </div>
</div>

---
layout: center
---

# Quiz: What is LSI?

<Poll question="Which of these is an LSI keyword for 'best gaming laptop'?" :answers="['how to cook rice', 'RTX 4080', 'JavaScript', 'subway schedule']" :correctAnswer="1" />

---
layout: center
---

# Understanding Intent

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Intent</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li><b>Informational:</b> "What is programmatic SEO?"</li>
      <li><b>Transactional:</b> "Buy photo editor"</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Why This Matters</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li><b>Informational:</b> Teach → Build trust → Capture traffic</li>
      <li><b>Transactional:</b> Convert → Upsell → Monetize</li>
    </ul>
  </div>
</div>

---
layout: center
---

# SEO Metrics to Track

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-blue-600">
    <h3 class="font-bold text-lg mb-2">Keyword Difficulty (KD)</h3>
    <div class="text-sm opacity-80">
      Score (0-100) showing ranking difficulty
      <ul class="mt-2 list-disc pl-5">
        <li>Higher = more competition</li>
        <li>Lower = easier to rank</li>
      </ul>
    </div>
  </div>
  <div class="p-3 rounded-lg border border-green-600">
    <h3 class="font-bold text-lg mb-2">CPC (Cost Per Click)</h3>
    <div class="text-sm opacity-80">
      Advertiser bid value per click
      <ul class="mt-2 list-disc pl-5">
        <li>High CPC = High commercial value</li>
        <li>Low CPC = Less profitable</li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
---

# More SEO Metrics

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-yellow-600">
    <h3 class="font-bold text-lg mb-2">Search Volume</h3>
    <div class="text-sm opacity-80">
      Monthly search frequency
      <ul class="mt-2 list-disc pl-5">
        <li>10,000+ = High volume</li>
        <li>100-1,000 = Niche terms</li>
      </ul>
    </div>
  </div>
  <div class="p-3 rounded-lg border border-purple-600">
    <h3 class="font-bold text-lg mb-2">Domain Authority</h3>
    <div class="text-sm opacity-80">
      Site trust score (0-100)
      <ul class="mt-2 list-disc pl-5">
        <li>High DA = Easier ranking</li>
        <li>Low DA = Start with long-tail</li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
---

# Tools of the Trade

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <ul class="space-y-1 list-disc pl-4">
      <li>Free: Google Planner, Search Console</li>
      <li>Paid: Ahrefs, SEMrush, LowFruits</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <ul class="space-y-1 list-disc pl-4">
      <li>Use multiple tools for best results</li>
      <li>Track progress over time</li>
    </ul>
  </div>
</div>

---
layout: center
---

# From Keywords to Site Structure

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-blue-600">
    <h3 class="font-bold text-lg mb-2">Smart Page Organization</h3>
    <div class="text-sm opacity-80">
      <ul class="mt-2 list-disc pl-5">
        <li>Home: Your main value proposition</li>
        <li>Categories: Group similar topics together</li>
        <li>Comparisons: Help users make decisions</li>
        <li>Reviews: Build trust with detailed analysis</li>
      </ul>
    </div>
  </div>
  <div class="p-3 rounded-lg border border-green-600">
    <h3 class="font-bold text-lg mb-2">Real Example: AI Tattoo Studio</h3>
    <div class="text-sm opacity-80">
      <ul class="mt-2 list-disc pl-5">
        <li>/tattoos/dragon (Category page)</li>
        <li>/compare/tattoosai-vs-inkai (Comparison)</li>
        <li>/reviews/tattoosai (Tool review)</li>
        <li>/usecases/ai-sleeve-design (Use case)</li>
      </ul>
    </div>
  </div>
</div>

<div class="mt-4 p-2 border border-yellow-500 rounded">
🎯 Pro Tip: Think of your site as a well-organized store - each page serves a specific purpose for your visitors
</div>

---
layout: center
---

# Content Strategy: The Building Blocks

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-purple-600">
    <h3 class="font-bold text-lg mb-2">Core Pages</h3>
    <div class="text-sm opacity-80">
      <ul class="mt-2 list-disc pl-5">
        <li>Landing Pages: Convert visitors</li>
        <li>Tool Pages: Showcase features</li>
        <li>Blog Posts: Share knowledge</li>
        <li>Integration Guides: Help users connect</li>
      </ul>
    </div>
  </div>
  <div class="p-3 rounded-lg border border-orange-600">
    <h3 class="font-bold text-lg mb-2">Content Goals</h3>
    <div class="text-sm opacity-80">
      <ul class="mt-2 list-disc pl-5">
        <li>Educate your audience</li>
        <li>Build authority</li>
        <li>Drive conversions</li>
        <li>Support users</li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
---

# Programmatic SEO: Scale Smart

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-teal-600">
    <h3 class="font-bold text-lg mb-2">How It Works</h3>
    <div class="text-sm opacity-80">
      <ul class="mt-2 list-disc pl-5">
        <li>Create smart templates</li>
        <li>Add dynamic content rules</li>
        <li>Generate pages automatically</li>
        <li>Maintain consistency at scale</li>
      </ul>
    </div>
  </div>
  <div class="p-3 rounded-lg border border-indigo-600">
    <h3 class="font-bold text-lg mb-2">Success Stories</h3>
    <div class="text-sm opacity-80">
      <ul class="mt-2 list-disc pl-5">
        <li>TattoosAI: 1000+ design pages</li>
        <li>Landingfolio: 500+ template pages</li>
        <li>Your next success story?</li>
      </ul>
    </div>
  </div>
</div>

<div class="mt-4 p-2 border border-yellow-500 rounded">
🚀 Think big, start small, scale smart with programmatic SEO
</div>

---
layout: center
---

# Build Authority: Get Links

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-blue-600">
    <h3 class="font-bold text-lg mb-2">Why Links Matter</h3>
    <div class="text-sm opacity-80">
      <ul class="mt-2 list-disc pl-5">
        <li>Backlinks = trust signals</li>
        <li>Quality > Quantity</li>
        <li>Authority sites = better ranking</li>
      </ul>
    </div>
  </div>
  <div class="p-3 rounded-lg border border-green-600">
    <h3 class="font-bold text-lg mb-2">Effective Strategies</h3>
    <div class="text-sm opacity-80">
      <ul class="mt-2 list-disc pl-5">
        <li>HARO: Expert quotes for journalists</li>
        <li>Affiliate: Commission-based promotion</li>
        <li>Outreach: Personal connections</li>
        <li>Case Studies: User success stories</li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
---

# What Not to Do

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-red-600">
    <h3 class="font-bold text-lg mb-2">Avoid These Practices</h3>
    <div class="text-sm opacity-80">
      <ul class="mt-2 list-disc pl-5">
        <li>Spammy anchor text
          <div class="text-xs mt-1 text-red-700">
            Example: "Best AI Tattoo Generator FREE Tool 2025 💯💯💯"
          </div>
        </li>
        <li>Private Blog Networks (PBN)
          <div class="text-xs mt-1 text-red-700">
            Networks of fake sites linking to each other
          </div>
        </li>
        <li>Irrelevant domain purchases
          <div class="text-xs mt-1 text-red-700">
            Like linking SaaS from cat grooming blog
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="p-3 rounded-lg border border-yellow-600">
    <h3 class="font-bold text-lg mb-2">Why It Matters</h3>
    <div class="text-sm opacity-80">
      <ul class="mt-2 list-disc pl-5">
        <li>Google penalizes manipulation</li>
        <li>Risk of de-indexing</li>
        <li>Waste of resources</li>
      </ul>
    </div>
  </div>
</div>

<div class="mt-4 p-2 border border-green-500 rounded">
💡 Remember: Earn links through value, don't try to trick the system
</div>

---
layout: center
---

# SEO in the LLM Era

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Key Changes</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>AI answers before clicks</li>
      <li>Zero-click results growing</li>
      <li>New discovery patterns</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Adaptation Strategy</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Clear, structured content</li>
      <li>Depth over repetition</li>
      <li>Regular content updates</li>
    </ul>
  </div>
</div>

---
layout: center
---

# LLM SEO Best Practices

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-yellow-600">
    <h3 class="font-bold mb-2">Content Structure</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Semantic HTML markup</li>
      <li>Schema.org integration</li>
      <li>Clean heading hierarchy</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-purple-600">
    <h3 class="font-bold mb-2">Technical Setup</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>SSR/SSG for static HTML</li>
      <li>Fast Core Web Vitals</li>
      <li>Clean sitemaps</li>
    </ul>
  </div>
</div>

---
layout: center
---

# SSR for Bots

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-blue-600">
    <ul class="space-y-1 list-disc pl-4">
      <li>SSR = Send HTML content to crawlers</li>
      <li>Use Next.js / Astro / SvelteKit</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <ul class="space-y-1 list-disc pl-4">
      <li>Improves crawlability and ranking</li>
      <li>Reduces reliance on JS for SEO</li>
    </ul>
  </div>
</div>

---
layout: center
---

# SEO Maintenance Tips

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-yellow-600">
    <ul class="space-y-1 list-disc pl-4">
      <li>Track SERP volatility</li>
      <li>Refresh outdated content</li>
      <li>Stay ahead on backlinks</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-blue-600">
    <ul class="space-y-1 list-disc pl-4">
      <li>Monitor site health with Search Console</li>
      <li>Fix crawl errors promptly</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Minimal Effective SEO

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-green-600">
    <h3 class="font-bold text-lg mb-2">1. Semantic HTML + Metadata</h3>
  </div>
  <div class="p-3 rounded-lg border border-blue-600">
    <h3 class="font-bold text-lg mb-2">2. Match + Exceed Content</h3>
  </div>
  <div class="p-3 rounded-lg border border-yellow-600">
    <h3 class="font-bold text-lg mb-2">3. Consistent Link Building</h3>
  </div>
</div>

---
layout: center
---

# Your Turn: SEO Audit

<div class="text-xl mb-6">Pick a site you use or built:</div>

<div class="p-4 rounded-lg border border-yellow-600 mb-4">
  <div class="font-bold flex items-center">
    <div class="i-carbon-task mr-2 text-yellow-700"></div>
    <span>Open DevTools and inspect the HTML</span>
  </div>
</div>

<div class="p-4 rounded-lg border border-green-600">
  <div class="font-bold flex items-center mb-2">
    <div class="i-carbon-analytics mr-2 text-green-700"></div>
    <span>Checklist:</span>
  </div>
  <ul class="space-y-2 list-disc pl-5">
    <li>Are meta tags present and descriptive?</li>
    <li>Is the HTML semantic?</li>
    <li>Is there a sitemap.xml and robots.txt?</li>
    <li>How fast does the page load?</li>
    <li>Is the content unique and valuable?</li>
    <li>Are there quality backlinks?</li>
  </ul>
</div>

---
layout: center
---

# Technical SEO, Schema, and Real-World Audits

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 rounded-lg border border-orange-600">
    <h3 class="font-bold mb-2">Technical SEO</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Site speed optimization</li>
      <li>Mobile responsiveness</li>
      <li>URL structure & redirects</li>
      <li>XML sitemaps</li>
      <li>Robots.txt/llms.txt configuration</li>
    </ul>
  </div>
  <div class="p-4 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Schema Markup</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Structured data types</li>
      <li>JSON-LD implementation</li>
      <li>Rich snippets</li>
      <li>Testing with Google's tool</li>
    </ul>
  </div>
</div>

---
layout: center
---

<div class="mt-6 p-4 rounded-lg border border-yellow-600">
  <h3 class="font-bold mb-2">Real-World Audits</h3>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <h4 class="font-semibold mb-2">Tools</h4>
      <ul class="space-y-1 list-disc pl-4">
        <li>Lighthouse</li>
        <li>Google Search Console</li>
        <li>SEMrush</li>
        <li>Ahrefs</li>
      </ul>
    </div>
    <div>
      <h4 class="font-semibold mb-2">Key Metrics</h4>
      <ul class="space-y-1 list-disc pl-4">
        <li>Core Web Vitals</li>
        <li>Indexing status</li>
        <li>Backlink profile</li>
        <li>Keyword rankings</li>
      </ul>
    </div>
  </div>
</div>

---
layout: center
---

# SEO Terms to Know
<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 rounded-lg border bg-blue-100 border-blue-600 hover:transition-colors">Short-tail Keywords</div>
  <div class="px-3 py-2 rounded-lg border bg-green-100 border-green-600 hover:transition-colors">Long-tail Keywords</div>
  <div class="px-3 py-2 rounded-lg border bg-yellow-100 border-yellow-600 hover:transition-colors">LSI Keywords</div>
  <div class="px-3 py-2 rounded-lg border bg-purple-100 border-purple-600 hover:transition-colors">Search Intent</div>
  <div class="px-3 py-2 rounded-lg border bg-blue-100 border-blue-600 hover:transition-colors">Keyword Difficulty</div>
  <div class="px-3 py-2 rounded-lg border bg-green-100 border-green-600 hover:transition-colors">CPC</div>
  <div class="px-3 py-2 rounded-lg border bg-yellow-100 border-yellow-600 hover:transition-colors">Search Volume</div>
  <div class="px-3 py-2 rounded-lg border bg-purple-100 border-purple-600 hover:transition-colors">Domain Authority</div>
  <div class="px-3 py-2 rounded-lg border bg-blue-100 border-blue-600 hover:transition-colors">Programmatic SEO</div>
  <div class="px-3 py-2 rounded-lg border bg-green-100 border-green-600 hover:transition-colors">HARO</div>
  <div class="px-3 py-2 rounded-lg border bg-yellow-100 border-yellow-600 hover:transition-colors">PBN</div>
  <div class="px-3 py-2 rounded-lg border bg-purple-100 border-purple-600 hover:transition-colors">Schema Markup</div>
  <div class="px-3 py-2 rounded-lg border bg-blue-100 border-blue-600 hover:transition-colors">JSON-LD</div>
  <div class="px-3 py-2 rounded-lg border bg-green-100 border-green-600 hover:transition-colors">Rich Snippets</div>
  <div class="px-3 py-2 rounded-lg border bg-yellow-100 border-yellow-600 hover:transition-colors">Core Web Vitals</div>
</div>