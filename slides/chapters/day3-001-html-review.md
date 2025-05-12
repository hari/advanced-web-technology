---
theme: seriph
background: #f5f5f5
title: HTML Basics
layout: center
info: |
  ## HTML Basics
  From beginner to advanced HTML concepts.
class: text-center
drawings:
  persist: false
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: false
colorSchema: 'light'
favicon: 'https://developer.mozilla.org/favicon-48x48.png'
---

# HTML Fundamentals

<div class="text-xl mb-4 opacity-90">
  <strong class="text-blue-700">Structure, semantics, and accessibility</strong>
</div>

<div class="pt-6 flex justify-center">
  <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" class="h-20" />
</div>

---
layout: center
---

<div class="grid grid-cols-2 gap-4">
  <div>
    <img src="https://jamesclear.com/wp-content/uploads/2015/08/tiny-gains-graph-700x700.jpg" class="w-full" />
  </div>
  <div v-click v-motion :enter="{ opacity: 1, y: 0 }" :initial="{ opacity: 0, y: 50  }">
    <img src="https://miro.medium.com/v2/resize:fit:1400/1*s-2k4fu5zEfa-KXAjibVUw.jpeg" class="w-full" />
  </div>
</div>

---
layout: center
---

# Self-Assessment  

<div class="text-xl text-gray-700 mt-4 mb-6">
  Before we do anything, let’s reflect.
</div>

---
layout: center
---

## Your Task: Reflect Before You Build

<div class="grid grid-cols-1 gap-4 text-left max-w-2xl mx-auto mt-4 mb-2">
  <div class="p-4 bg-blue-100 rounded border border-blue-400">
    💡 <strong>Think about your upcoming project:</strong><br>
    What role are you planning to take on? (Developer, designer, planner, etc.)
  </div>
  <div class="p-4 bg-yellow-100 rounded border border-yellow-400">
    ✍️ <strong>Be honest with yourself:</strong><br>
    What are your current strengths? What do you still need to learn?
  </div>
  <div class="p-4 bg-green-100 rounded border border-green-400">
    📓 <strong>Track your journey:</strong><br>
    This isn’t a test, it’s a personal checkpoint for growth.
  </div>
</div>

> Open notes app in your mobile and write down your thoughts.

---
layout: default
---
# Beginner Level HTML
<div class="grid grid-cols-2 gap-6">
  <div>
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-document text-blue-700"></div>
        <span class="font-bold">Basic Structure</span>
      </div>
      <div class="flex flex-wrap gap-2 text-sm">
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;!DOCTYPE html&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;html&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;head&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;title&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;body&gt;</code></span>
      </div>
    </div>
    <div class="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-list-checked text-green-700"></div>
        <span class="font-bold">Basic Elements</span>
      </div>
      <div class="flex flex-wrap gap-2 text-sm">
        <span class="px-2 py-1 bg-white rounded-md border border-green-300"><code>&lt;h1&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-green-300"><code>&lt;p&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-green-300"><code>&lt;a&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-green-300"><code>&lt;img&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-green-300"><code>&lt;ul&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-green-300"><code>&lt;li&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-green-300"><code>&lt;div&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-green-300"><code>&lt;span&gt;</code></span>
      </div>
    </div>
  </div>
  
  <div>
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-application text-blue-700"></div>
        <span class="font-bold">Basic Forms</span>
      </div>
      <div class="flex flex-wrap gap-2 text-sm">
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;form&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;input&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;label&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;button&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;select&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;option&gt;</code></span>
        <span class="px-2 py-1 bg-white rounded-md border border-blue-300"><code>&lt;textarea&gt;</code></span>
      </div>
    </div>
    <div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
      <div class="flex items-center gap-2">
        <div class="i-carbon-idea text-yellow-700"></div>
        <span class="font-bold">Tips</span>
      </div>
      <div class="flex flex-wrap gap-2 text-sm mt-2">
        <span class="px-2 py-1 bg-white rounded-md border border-yellow-300">Include DOCTYPE</span>
        <span class="px-2 py-1 bg-white rounded-md border border-yellow-300">Indent code</span>
        <span class="px-2 py-1 bg-white rounded-md border border-yellow-300">Close all tags</span>
        <span class="px-2 py-1 bg-white rounded-md border border-yellow-300">Use alt text</span>
        <span class="px-2 py-1 bg-white rounded-md border border-yellow-300">Test in browsers</span>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 text-sm">
  Resources: <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" class="text-blue-600 hover:underline">MDN: HTML Basics</a> | 
  <a href="https://web.dev/learn/html" class="text-blue-600 hover:underline">web.dev: Learn HTML</a>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full border border-green-600">Beginner</span>
</div>

---
layout: default
---

# HTML Structure, Tags & Attributes

<div>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-code text-blue-700"></div>
        <span class="font-bold">Anatomy of an HTML Element</span>
      </div>
      <div class="bg-white p-3 rounded-lg border border-gray-200">
        <img src="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax/grumpy-cat-small.png" class="mx-auto" />
      </div>
    </div>
    <div class="p-3 bg-green-50 rounded-lg border border-green-200">
      <div class="flex items-center gap-2">
        <div class="i-carbon-checkmark text-green-700"></div>
        <span class="font-bold">Tag Types</span>
      </div>
      <ul class="text-sm space-y-1">
        <li><strong>Container tags</strong>: Have opening and closing tags (<code>&lt;p&gt;...&lt;/p&gt;</code>)</li>
        <li><strong>Empty tags</strong>: Self-closing (<code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;input&gt;</code>)</li>
        <li><strong>Block elements</strong>: Take full width (<code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>)</li>
        <li><strong>Inline elements</strong>: Take only needed space (<code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>)</li>
      </ul>
    </div>
    </div>
  <div class="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
    <div class="flex items-center gap-2 mb-2">
      <div class="i-carbon-tag text-purple-700"></div>
      <span class="font-bold">Common Attributes</span>
    </div>
    <div class="flex flex-wrap gap-2 mt-3">
      <span class="px-3 py-1.5 bg-white rounded-full border border-purple-300 text-sm shadow-sm"><code>id</code>: Unique identifier</span>
      <span class="px-3 py-1.5 bg-white rounded-full border border-purple-300 text-sm shadow-sm"><code>class</code>: For CSS styling</span>
      <span class="px-3 py-1.5 bg-white rounded-full border border-purple-300 text-sm shadow-sm"><code>style</code>: Inline CSS</span>
      <span class="px-3 py-1.5 bg-white rounded-full border border-purple-300 text-sm shadow-sm"><code>src</code>: Source file path</span>
      <span class="px-3 py-1.5 bg-white rounded-full border border-purple-300 text-sm shadow-sm"><code>href</code>: Hyperlink reference</span>
      <span class="px-3 py-1.5 bg-white rounded-full border border-purple-300 text-sm shadow-sm"><code>alt</code>: Alternative text</span>
      <span class="px-3 py-1.5 bg-white rounded-full border border-purple-300 text-sm shadow-sm"><code>title</code>: Tooltip text</span>
    </div>
  </div>
</div>

<div class="mt-4 text-sm">
  Resources: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" class="text-blue-600 hover:underline">HTML Elements Reference</a> | 
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes" class="text-blue-600 hover:underline">HTML Attributes Reference</a>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full border border-green-600">Beginner</span>
</div>

---
layout: default
---

# <div class="i-carbon-tree-view text-blue-700 inline-block"></div> HTML Document Structure

  <div class="rounded-lg">
```
┌── <!DOCTYPE html>
├── <html>
│   ├── <head>
│   │   ├── <meta>
│   │   ├── <title>
│   │   └── <link>
│   └── <body>
│       ├── <header>
│       ├── <nav>
│       ├── <main>
│       │   ├── <section>
│       │   ├── <article>
│       │   └── <aside>
│       └── <footer>
```
  </div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full border border-green-600">Beginner</span>
</div>
---
layout: default
---

# Intermediate Level HTML

<div class="p-6 bg-blue-50 rounded-lg border border-blue-200 mb-6">
  <h2 class="text-xl font-bold mb-4 text-center">What HTML Can Do</h2>
  
  <div class="flex flex-wrap justify-center gap-3 mb-6">
    <span class="px-3 py-2 bg-white rounded-full border border-blue-300 text-sm shadow-sm">Make Headers</span>
    <span class="px-3 py-2 bg-white rounded-full border border-blue-300 text-sm shadow-sm">Create Lists</span>
    <span class="px-3 py-2 bg-white rounded-full border border-blue-300 text-sm shadow-sm">Add Pictures</span>
    <span class="px-3 py-2 bg-white rounded-full border border-blue-300 text-sm shadow-sm">Make Links</span>
    <span class="px-3 py-2 bg-white rounded-full border border-blue-300 text-sm shadow-sm">Build Forms</span>
    <span class="px-3 py-2 bg-white rounded-full border border-blue-300 text-sm shadow-sm">Show Videos</span>
    <span class="px-3 py-2 bg-white rounded-full border border-blue-300 text-sm shadow-sm">Make Buttons</span>
  </div>
  
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-accessibility text-yellow-700"></div>
        <span class="font-bold">Making Websites for Everyone</span>
      </div>
      <p class="text-sm">HTML helps make websites that everyone can use, even people who can't see or hear well. It's like making sure everyone can play with the same toys!</p>
    </div>
    <div class="p-4 bg-green-50 rounded-lg border border-green-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-idea text-green-700"></div>
        <span class="font-bold">Cool Form Tricks</span>
      </div>
      <p class="text-sm">HTML can make forms with color pickers, date choosers, and sliders. It can even check if you filled everything out correctly!</p>
    </div>
  </div>
</div>

<div class="flex flex-wrap justify-center gap-4 mb-4">
  <span class="px-4 py-2 bg-purple-100 rounded-full border border-purple-300 text-sm shadow-sm">Headers</span>
  <span class="px-4 py-2 bg-blue-100 rounded-full border border-blue-300 text-sm shadow-sm">Paragraphs</span>
  <span class="px-4 py-2 bg-green-100 rounded-full border border-green-300 text-sm shadow-sm">Images</span>
  <span class="px-4 py-2 bg-yellow-100 rounded-full border border-yellow-300 text-sm shadow-sm">Links</span>
  <span class="px-4 py-2 bg-red-100 rounded-full border border-red-300 text-sm shadow-sm">Buttons</span>
  <span class="px-4 py-2 bg-indigo-100 rounded-full border border-indigo-300 text-sm shadow-sm">Forms</span>
  <span class="px-4 py-2 bg-pink-100 rounded-full border border-pink-300 text-sm shadow-sm">Lists</span>
</div>

<div class="mt-4 text-sm">
  Resources: <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML" class="text-blue-600 hover:underline">Making Websites for Everyone</a> | 
  <a href="https://web.dev/learn/forms/" class="text-blue-600 hover:underline">Cool Form Tricks</a>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: default
---

# Intermediate HTML: Semantic Structure

<section class="grid grid-cols-2 grid-rows-2 gap-6 mt-6">
  <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-search text-blue-700"></div>
      <span class="font-bold text-blue-900">Semantic HTML</span>
    </header>
    <p class="text-sm text-gray-700">
      Use meaningful tags like <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, and <code>&lt;main&gt;</code> to structure your content for clarity, accessibility, and SEO.
    </p>
  </div>

  <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-accessibility text-blue-700"></div>
      <span class="font-bold text-blue-900">Accessibility</span>
    </header>
    <p class="text-sm text-gray-700">
      Build inclusive sites by using proper labels, roles, ARIA attributes (<code>aria-*</code>), and keyboard navigation (<code>tabindex</code>). Always include <code>alt</code> text for images.
    </p>
  </div>

  <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-code text-blue-700"></div>
      <span class="font-bold text-blue-900">Advanced Forms</span>
    </header>
    <p class="text-sm text-gray-700">
      Use <code>&lt;fieldset&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;datalist&gt;</code>, and native validation attributes for powerful forms without JavaScript.
    </p>
  </div>

  <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-code text-blue-700"></div>
      <span class="font-bold text-blue-900">Media Elements</span>
    </header>
    <p class="text-sm text-gray-700">
      Use <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;source&gt;</code>, and <code>&lt;track&gt;</code> for embedding media with fallbacks and captions.
    </p>
  </div>
</section>

<div class="mt-4 text-sm">
  Resources: <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility" class="text-blue-600 hover:underline">MDN: Accessibility</a> |
  <a href="https://web.dev/learn/accessibility/" class="text-blue-600 hover:underline">web.dev: Accessibility</a> | 
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" class="text-blue-600 hover:underline">MDN: HTML Elements</a>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: default
---

# Intermediate HTML: Tables & Metadata

<section class="grid grid-cols-2 gap-6 mt-6">
  <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-table text-blue-700"></div>
      <span class="font-bold text-blue-900">Table Elements</span>
    </header>
    <p class="text-sm text-gray-700">
      Structure data properly with <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;caption&gt;</code> for accessible, semantic tables.
    </p>
  </div>

  <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-document-multiple text-blue-700"></div>
      <span class="font-bold text-blue-900">Metadata Tags (Basic)</span>
    </header>
    <p class="text-sm text-gray-700">
      Enhance your document with <code>&lt;meta&gt;</code>, <code>&lt;title&gt;</code>, and <code>&lt;link rel="stylesheet"&gt;</code> for better SEO and browser behavior.
    </p>
  </div>
</section>

<div class="mt-4 text-sm">
  Resources: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" class="text-blue-600 hover:underline">MDN: Table Element</a> |
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta" class="text-blue-600 hover:underline">MDN: Meta Element</a>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full border border-yellow-600">Intermediate</span>
</div>

---
layout: default
---

# Advanced HTML: SEO & Structured Data

<section class="grid grid-cols-2 gap-6">
  <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
    <header class="flex items-center gap-2 mb-2">
      <div class="i-carbon-search text-blue-700"></div>
      <span class="font-bold">SEO & Meta Tags</span>
    </header>
    <div class="text-xs">
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page description">
  <meta name="keywords" content="html, web development">
  
  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Description">
  <meta property="og:image" content="image.jpg">
  
  <title>Page Title</title>
</head>
```
    </div>
  </div>
  <div>
    <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <header class="flex items-center gap-2 mb-2">
        <div class="i-carbon-data-structured text-purple-700"></div>
        <span class="font-bold">Structured Data</span>
      </header>
      <div class="text-xs">
```js
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2023-01-01"
}
</script>
```
    </div>
  </div>
</div>
</section>

<div class="flex flex-wrap justify-center gap-3 mt-4">
  <span class="px-3 py-2 bg-blue-100 rounded-full border border-blue-300 text-sm shadow-sm">Meta Tags</span>
  <span class="px-3 py-2 bg-purple-100 rounded-full border border-purple-300 text-sm shadow-sm">SEO</span>
  <span class="px-3 py-2 bg-green-100 rounded-full border border-green-300 text-sm shadow-sm">Schema.org</span>
  <span class="px-3 py-2 bg-yellow-100 rounded-full border border-yellow-300 text-sm shadow-sm">JSON-LD</span>
  <span class="px-3 py-2 bg-red-100 rounded-full border border-red-300 text-sm shadow-sm">Open Graph</span>
  <span class="px-3 py-2 bg-indigo-100 rounded-full border border-indigo-300 text-sm shadow-sm">Microdata</span>
  <span class="px-3 py-2 bg-teal-100 rounded-full border border-teal-300 text-sm shadow-sm">RDFa</span>
</div>

<div class="mt-4 text-sm">
  Resources: <a href="https://schema.org/docs/gs.html" class="text-blue-600 hover:underline">Schema.org Getting Started</a> |
  <a href="https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data" class="text-blue-600 hover:underline">Google: Structured Data</a>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>

---
layout: default
---

# Advanced HTML: Content Embedding & Templates

<div class="grid grid-cols-3 gap-6">
<div class="p-4 bg-blue-50 col-span-2 rounded-lg border border-blue-200 mb-4">
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon-application-web text-blue-700"></div>
    <span class="font-bold">Document Fragments & Embeds</span>
  </div>
  <div class="bg-white p-2 rounded-lg border border-gray-200 mb-2 text-xs">
```html
<!-- Template for static HTML fragments -->
<template id="user-card-template">
  <div class="user-card">
    <img class="avatar">
    <div class="info">
      <h2 class="name"></h2>
      <p class="email"></p>
    </div>
  </div>
</template>

<!-- Content embedding -->
<iframe src="https://example.com" title="Embedded content"></iframe>
<embed src="file.pdf" type="application/pdf" width="600" height="400">
<object data="file.pdf" type="application/pdf" width="600" height="400">
  <p>Alternative content</p>
</object>
```
  </div>
</div>

  <div>
    <div class="flex flex-wrap justify-center gap-3 mb-4">
      <span class="px-3 py-2 bg-indigo-100 rounded-full border border-indigo-300 text-sm shadow-sm">Templates</span>
      <span class="px-3 py-2 bg-teal-100 rounded-full border border-teal-300 text-sm shadow-sm">iframes</span>
      <span class="px-3 py-2 bg-orange-100 rounded-full border border-orange-300 text-sm shadow-sm">Embeds</span>
      <span class="px-3 py-2 bg-pink-100 rounded-full border border-pink-300 text-sm shadow-sm">Objects</span>
      <span class="px-3 py-2 bg-lime-100 rounded-full border border-lime-300 text-sm shadow-sm">Advanced Forms</span>
      <span class="px-3 py-2 bg-cyan-100 rounded-full border border-cyan-300 text-sm shadow-sm">Input Types</span>
    </div>
    <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-warning text-yellow-700"></div>
        <span class="font-bold">Forms Deep Dive</span>
      </div>
      <p class="text-sm">Advanced input types like email, date, range, color, and pattern validation constraints make powerful forms without JavaScript.</p>
    </div>
    <div class="mt-4 text-sm">
      Resources: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template" class="text-blue-600 hover:underline">MDN: Template Element</a> |
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" class="text-blue-600 hover:underline">MDN: iframe Element</a>
    </div>
  </div>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>

---
layout: default
---

# HTML Features Requiring JavaScript 

<div class="grid grid-cols-2 gap-4">
  <div class="p-4 bg-white rounded-lg border border-orange-200">
    <div class="flex items-center gap-2 mb-2">
      <div class="i-carbon-warning text-orange-700"></div>
      <span class="font-bold">Canvas & SVG Manipulation</span>
    </div>
    <p class="text-sm text-gray-700">
      While <code>&lt;canvas&gt;</code> and <code>&lt;svg&gt;</code> are HTML elements, they're useless without JavaScript for drawing and animation.
    </p>
  </div>
  <div class="p-4 bg-white rounded-lg border border-orange-200">
    <div class="flex items-center gap-2 mb-2">
      <div class="i-carbon-warning text-orange-700"></div>
      <span class="font-bold">Dialog Elements</span>
    </div>
    <p class="text-sm text-gray-700">
      The <code>&lt;dialog&gt;</code> element requires JavaScript to call <code>.showModal()</code> for proper functionality.
    </p>
  </div>    
  <div class="p-4 bg-white rounded-lg border border-orange-200">
    <div class="flex items-center gap-2 mb-2">
      <div class="i-carbon-warning text-orange-700"></div>
      <span class="font-bold">Web Components</span>
    </div>
    <p class="text-sm text-gray-700">
      Custom Elements, Shadow DOM, and dynamic <code>&lt;template&gt;</code> + <code>&lt;slot&gt;</code> usage are 100% JavaScript territory.
    </p>
  </div>    
  <div class="p-4 bg-white rounded-lg border border-orange-200">
    <div class="flex items-center gap-2 mb-2">
      <div class="i-carbon-warning text-orange-700"></div>
      <span class="font-bold">Shadow DOM</span>
    </div>
    <p class="text-sm text-gray-700">
      Shadow DOM encapsulation is not HTML at all, but a JavaScript API for component isolation.
    </p>
  </div>
</div> 

<div class="mt-4 text-sm">
  Resources: <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" class="text-blue-600 hover:underline">MDN: Web Components</a> |
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" class="text-blue-600 hover:underline">MDN: Canvas API</a> |
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog" class="text-blue-600 hover:underline">MDN: Dialog Element</a> |
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template" class="text-blue-600 hover:underline">MDN: Template Element</a>
</div>

<div class="absolute top-5 right-5">
  <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full border border-orange-600">JavaScript Required</span>
</div>

---
layout: default
---

# Know Your Next Step

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="p-4 bg-green-50 border border-green-300 rounded-lg text-center">
    <div class="i-carbon-user-role text-green-700 text-2xl mx-auto mb-2"></div>
    <strong>Beginner?</strong>
    <p class="text-sm mt-2">Master the basics: document structure, elements, forms, links, and images</p>
    <div class="mt-3 text-xs">
      <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML" class="text-blue-600 hover:underline">MDN HTML Basics →</a>
    </div>
  </div>
  
  <div class="p-4 bg-yellow-50 border border-yellow-300 rounded-lg text-center">
    <div class="i-carbon-user-admin text-yellow-700 text-2xl mx-auto mb-2"></div>
    <strong>Intermediate?</strong>
    <p class="text-sm mt-2">Focus on semantics, accessibility, and advanced form techniques</p>
    <div class="mt-3 text-xs">
      <a href="https://web.dev/learn/accessibility/" class="text-blue-600 hover:underline">web.dev Accessibility →</a>
    </div>
  </div>
  
  <div class="p-4 bg-red-50 border border-red-300 rounded-lg text-center">
    <div class="i-carbon-user-expert text-red-700 text-2xl mx-auto mb-2"></div>
    <strong>Advanced?</strong>
    <p class="text-sm mt-2">Explore SEO optimization, structured data, and Web Components</p>
    <div class="mt-3 text-xs">
      <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" class="text-blue-600 hover:underline">Google SEO Guide →</a>
    </div>
  </div>
</div>

<div class="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
  <div class="flex items-center gap-2 mb-2">
    <div class="i-carbon-book text-blue-700"></div>
    <span class="font-bold">Essential Resources</span>
  </div>
  <div class="grid grid-cols-3 gap-4 text-sm">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" class="p-2 bg-white rounded border border-gray-200 hover:bg-gray-50 flex items-center gap-2">
      <div class="i-carbon-document text-blue-700"></div>
      MDN: HTML Reference
    </a>
    <a href="https://web.dev/learn/html" class="p-2 bg-white rounded border border-gray-200 hover:bg-gray-50 flex items-center gap-2">
      <div class="i-carbon-education text-blue-700"></div>
      web.dev: Learn HTML
    </a>
    <a href="https://html.spec.whatwg.org/" class="p-2 bg-white rounded border border-gray-200 hover:bg-gray-50 flex items-center gap-2">
      <div class="i-carbon-document-multiple text-blue-700"></div>
      HTML Living Standard
    </a>
  </div>
</div>
