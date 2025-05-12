---
theme: seriph
background: #f5f5f5
title: CSS Basics
layout: center
info: |
  ## CSS Basics
  Modern styling for web developers of all levels.
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

<section>
  <header>
    <h1>CSS for All Levels</h1>
    <div class="text-xl mb-4 opacity-90">
      <strong class="text-blue-700">From beginner to advanced concepts</strong>
    </div>
  </header>

  <div class="pt-6 flex justify-center">
    <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" class="h-20" alt="CSS Logo" />
  </div>
</section>
---
layout: default
---

# CSS Fundamentals: Part 1

<section>
  <div class="grid grid-cols-2 gap-6 mt-4">
    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-cube text-blue-700"></div>
        <span class="font-bold">Box Model</span>
      </div>
      <p class="text-sm">Every element is a box with:</p>
      <ul class="text-sm space-y-1">
        <li>Content - The actual content of the box</li>
        <li>Padding - Space between content and border</li>
        <li>Border - Line around the padding</li>
        <li>Margin - Space outside the border</li>
      </ul>
    </div>
    <div class="p-4 bg-green-50 rounded-lg border border-green-200">
      <header class="flex items-center gap-2 mb-2">
        <i class="i-carbon-select-window text-green-700"></i>
        <span class="font-bold">CSS Selectors</span>
      </header>
      <ul class="text-sm space-y-1">
        <li><code>element</code> - Selects all elements of that type</li>
        <li><code>.class</code> - Selects elements with that class</li>
        <li><code>#id</code> - Selects element with that ID</li>
        <li><code>element.class</code> - Selects elements with that class</li>
        <li><code>parent > child</code> - Direct child selector</li>
      </ul>
    </div>
  </div>

  <footer>
    <div class="mt-4 text-sm">
      Resources: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model" class="text-blue-600 hover:underline">MDN: Box Model</a> | 
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" class="text-blue-600 hover:underline">MDN: CSS Selectors</a>
    </div>
  </footer>

  <div class="absolute top-5 right-5">
    <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full border border-green-600">Beginner</span>
  </div>
</section>

---
layout: default
---

<section>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-paint-brush text-yellow-700"></div>
        <span class="font-bold">Colors & Typography</span>
      </div>
      <ul class="text-sm space-y-1">
        <li><code>color</code> - Text color</li>
        <li><code>background-color</code> - Background color</li>
        <li><code>font-family</code> - Font typeface</li>
        <li><code>font-size</code> - Text size</li>
        <li><code>font-weight</code> - Text boldness</li>
        <li><code>line-height</code> - Line spacing</li>
      </ul>
    </div>
    <div class="p-4 bg-red-50 rounded-lg border border-red-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-location text-red-700"></div>
        <span class="font-bold">Positioning & Layout</span>
      </div>
      <ul class="text-sm space-y-1">
        <li><code>position: static</code> - Default flow</li>
        <li><code>position: relative</code> - Relative to normal position</li>
        <li><code>position: absolute</code> - Relative to positioned parent</li>
        <li><code>position: fixed</code> - Relative to viewport</li>
        <li><code>display</code> - Controls how element is displayed</li>
      </ul>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-6 mt-4">
    <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-code text-purple-700"></div>
        <span class="font-bold">CSS Types</span>
      </div>
      <ul class="text-sm space-y-1">
        <li><code>Inline</code> - Using style attribute</li>
        <li><code>Internal</code> - Using &lt;style&gt; in HTML</li>
        <li><code>External</code> - Using .css files</li>
      </ul>
    </div>
    <div class="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon-cursor-1 text-indigo-700"></div>
        <span class="font-bold">Pseudo-selectors</span>
      </div>
      <ul class="text-sm space-y-1">
        <li><code>:hover</code> - When mouse is over element</li>
        <li><code>:active</code> - When element is being clicked</li>
        <li><code>:focus</code> - When element has focus</li>
        <li><code>::before</code> - Creates content before element</li>
        <li><code>::after</code> - Creates content after element</li>
      </ul>
    </div>
  </div>

  <div class="absolute top-5 right-5">
    <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full border border-green-600">Beginner</span>
  </div>
</section>

---
layout: default
---
# CSS Fundamentals: Part 2

<section class="relative">
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 bg-white rounded-lg border-2 border-purple-300 shadow-sm hover:shadow-md transition-shadow">
      <header class="flex items-center gap-3 mb-3">
        <div class="i-carbon-layers text-purple-700 text-xl"></div>
        <span class="font-bold text-lg text-purple-800">CSS Specificity & Priority</span>
      </header>
      <div class="bg-purple-50 px-3 py-1 rounded-lg mb-2">
        <p class="text-sm mt-0 font-medium text-purple-900 mb-2">From highest to lowest priority:</p>
        <ol class="text-sm space-y-2 pl-5 list-decimal">
          <li class="font-medium"><span class="text-red-600 font-bold">!important</span> flag</li>
          <li><span class="font-mono bg-gray-100 px-1">style="..."</span> (inline styles)</li>
          <li><span class="font-mono bg-gray-100 px-1">#id</span> selectors</li>
          <li><span class="font-mono bg-gray-100 px-1">.class</span> selectors</li>
          <li><span class="font-mono bg-gray-100 px-1">element</span> selectors (p, div)</li>
          <li><span class="font-mono bg-gray-100 px-1">*</span> universal selector</li>
        </ol>
      </div>
    </div>
    <div class="p-5 bg-white rounded-lg border-2 border-green-300 shadow-sm hover:shadow-md transition-shadow">
      <header class="flex items-center gap-3 mb-3">
        <div class="i-carbon-idea text-green-700 text-xl"></div>
        <span class="font-bold text-lg text-green-800">CSS Best Practices</span>
      </header>
      <div class="bg-green-50 py-4 rounded-lg">
        <ul class="text-sm space-y-3">
          <li class="flex items-center gap-2">
            <div class="i-carbon-checkmark text-green-600"></div>
            <span>Use <span class="font-medium">external stylesheets</span> instead of inline styles</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-checkmark text-green-600"></div>
            <span>Prefer <span class="font-mono bg-gray-100 px-1">.classes</span> over <span class="font-mono bg-gray-100 px-1">#ids</span> for styling</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-checkmark text-green-600"></div>
            <span>Use <span class="font-medium">meaningful, descriptive</span> class names</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-checkmark text-green-600"></div>
            <span>Always add <span class="font-mono bg-gray-100 px-1">box-sizing: border-box</span></span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</section>

<div class="absolute top-4 right-4">
  <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full border border-green-600">Beginner</span>
</div>

---
layout: default
---

# CSS Concepts

<section class="relative">
  <div class="grid grid-cols-2 gap-6 mt-4">
    <div class="p-5 bg-white rounded-lg border-2 border-blue-300 shadow-sm hover:shadow-md transition-shadow">
      <header class="flex items-center gap-3 mb-3">
        <div class="i-carbon-align-horizontal-center text-blue-700 text-xl"></div>
        <span class="font-bold text-lg text-blue-800">Flexbox Layout</span>
      </header>
      <div class="bg-blue-50 px-4 py-3 rounded-lg">
        <p class="text-sm mb-2">One-dimensional layout system:</p>
        <ul class="text-sm space-y-2">
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-blue-600"></div>
            <span>Container-based layout model</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-blue-600"></div>
            <span>Controls alignment, direction, and ordering</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-blue-600"></div>
            <span>Ideal for component-level layouts</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-5 bg-white rounded-lg border-2 border-indigo-300 shadow-sm hover:shadow-md transition-shadow">
      <header class="flex items-center gap-3 mb-3">
        <div class="i-carbon-grid text-indigo-700 text-xl"></div>
        <span class="font-bold text-lg text-indigo-800">CSS Grid</span>
      </header>
      <div class="bg-indigo-50 px-4 py-3 rounded-lg">
        <p class="text-sm mb-2">Two-dimensional layout system:</p>
        <ul class="text-sm space-y-2">
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-indigo-600"></div>
            <span>Rows and columns simultaneously</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-indigo-600"></div>
            <span>Precise item placement control</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-indigo-600"></div>
            <span>Ideal for page-level layouts</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <footer class="mt-6">
    <div class="text-sm">
      Resources: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout" class="text-blue-600 hover:underline">MDN: Flexbox</a> | 
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" class="text-blue-600 hover:underline">MDN: Grid</a> | <a href="https://cssgridgarden.com/" class="text-blue-600 hover:underline"><i class="i-carbon-game-console inline-block text-blue-600"></i> CSS Grid Garden</a> |
      <a href="https://flexboxfroggy.com/" class="text-blue-600 hover:underline"><i class="i-carbon-game-console inline-block text-blue-600"></i> Flexbox Froggy</a>
    </div>
  </footer>
</section>

<div class="absolute top-4 right-4">
  <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border border-blue-600">Intermediate</span>
</div>


---
layout: default
---

# CSS Concepts

<section class="relative">

  <div class="grid grid-cols-2 gap-6 mt-6">
    <div class="p-5 bg-white rounded-lg border-2 border-yellow-300 shadow-sm hover:shadow-md transition-shadow">
      <header class="flex items-center gap-3 mb-3">
        <div class="i-carbon-screen text-yellow-700 text-xl"></div>
        <span class="font-bold text-lg text-yellow-800">Responsive Design</span>
      </header>
      <div class="bg-yellow-50 px-4 py-3 rounded-lg">
        <ul class="text-sm space-y-2">
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-yellow-600"></div>
            <span>Adapts to different screen sizes</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-yellow-600"></div>
            <span>Uses relative units and breakpoints</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-yellow-600"></div>
            <span>Mobile-first methodology</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-5 bg-white rounded-lg border-2 border-purple-300 shadow-sm hover:shadow-md transition-shadow">
      <header class="flex items-center gap-3 mb-3">
        <div class="i-carbon-movement text-purple-700 text-xl"></div>
        <span class="font-bold text-lg text-purple-800">Transitions & Animations</span>
      </header>
      <div class="bg-purple-50 px-4 py-3 rounded-lg">
        <ul class="text-sm space-y-2">
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-purple-600"></div>
            <span>Smooth state changes between values</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-purple-600"></div>
            <span>Keyframe-based motion sequences</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-purple-600"></div>
            <span>Hardware-accelerated techniques</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <footer class="mt-6 text-sm">
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations" class="text-blue-600 hover:underline">MDN: Animations</a> | <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" class="text-blue-600 hover:underline">MDN: Media Queries</a> | <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" class="text-blue-600 hover:underline">MDN: CSS Units</a>
  </footer>
</section>

<div class="absolute top-4 right-4">
  <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border border-blue-600">Intermediate</span>
</div>

---
layout: default
---

# CSS Concepts

<section>  
  <div class="grid grid-cols-2 gap-6 mt-6">
    <div class="p-5 bg-white rounded-lg border-2 border-purple-300 shadow-sm hover:shadow-md transition-shadow">
      <header class="flex items-center gap-3 mb-3">
        <div class="i-carbon-code text-purple-700 text-xl"></div>
        <span class="font-bold text-lg text-purple-800">Modern Features</span>
      </header>
      <div class="bg-purple-50 px-4 py-3 rounded-lg">
        <ul class="text-sm space-y-2">
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-purple-600"></div>
            <span>Container queries & logical properties</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-purple-600"></div>
            <span>Subgrid & <code>aspect-ratio</code></span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-purple-600"></div>
            <span><code>:is()</code>, <code>:where()</code> selector groups</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-5 bg-white rounded-lg border-2 border-orange-300 shadow-sm hover:shadow-md transition-shadow">
      <header class="flex items-center gap-3 mb-3">
        <div class="i-carbon-application text-orange-700 text-xl"></div>
        <span class="font-bold text-lg text-orange-800">CSS Architecture</span>
      </header>
      <div class="bg-orange-50 px-4 py-3 rounded-lg">
        <ul class="text-sm space-y-2">
          <li class="flex items-center gap-2 opacity-50">
            <div class="i-carbon-arrow-right text-orange-600"></div>
            <span>BEM, SMACSS, ITCSS methodologies</span>
          </li>
          <li class="flex items-center gap-2 opacity-50">
            <div class="i-carbon-arrow-right text-orange-600"></div>
            <span>CSS-in-JS & CSS preprocessors</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-orange-600"></div>
            <span>CSS Houdini for low-level API access</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <footer class="mt-6">
    <div class="text-sm">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" class="text-blue-600 hover:underline">MDN: CSS Variables</a> | 
      <a href="https://web.dev/learn/css/functions/" class="text-blue-600 hover:underline">web.dev: CSS Functions</a>
    </div>
  </footer>
</section>

<div class="absolute top-4 right-4">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>


---
layout: default
---

# CSS Concepts

<section>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 bg-white rounded-lg border-2 border-blue-300 shadow-sm hover:shadow-md transition-shadow">
      <header class="flex items-center gap-3 mb-3">
        <div class="i-carbon-variable text-blue-700 text-xl"></div>
        <span class="font-bold text-lg text-blue-800">CSS Variables</span>
      </header>
      <div class="bg-blue-50 px-4 py-3 rounded-lg">
        <ul class="text-sm space-y-2">
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-blue-600"></div>
            <span>Custom properties with <code>--variable-name</code></span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-blue-600"></div>
            <span>Scoped to selectors, inheritable</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-blue-600"></div>
            <span>Dynamic theming and responsive design</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-5 bg-white rounded-lg border-2 border-green-300 shadow-sm hover:shadow-md transition-shadow">
      <header class="flex items-center gap-3 mb-3">
        <div class="i-carbon-function text-green-700 text-xl"></div>
        <span class="font-bold text-lg text-green-800">CSS Functions</span>
      </header>
      <div class="bg-green-50 px-4 py-3 rounded-lg">
        <ul class="text-sm space-y-2">
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-green-600"></div>
            <span><code>calc()</code>, <code>clamp()</code>, <code>min()/max()</code></span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-green-600"></div>
            <span>Dynamic calculations and constraints</span>
          </li>
          <li class="flex items-center gap-2">
            <div class="i-carbon-arrow-right text-green-600"></div>
            <span>Responsive without media queries</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="mt-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-3">Popular CSS & UI Frameworks</h3>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium border border-cyan-300 hover:bg-cyan-200 transition-colors">Tailwind CSS</span>
      <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-300 hover:bg-purple-200 transition-colors">Bootstrap</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-300 hover:bg-blue-200 transition-colors">Material UI</span>
      <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium border border-red-300 hover:bg-red-200 transition-colors">Ant Design</span>
      <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-300 hover:bg-green-200 transition-colors">PrimeVue</span>
      <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium border border-indigo-300 hover:bg-indigo-200 transition-colors">Bulma</span>
      <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium border border-yellow-300 hover:bg-yellow-200 transition-colors">Foundation</span>
      <span class="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium border border-pink-300 hover:bg-pink-200 transition-colors">Chakra UI</span>
      <span class="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm font-medium border border-violet-300 hover:bg-violet-200 transition-colors">shadcn/ui</span>
    </div>
  </div>

  <footer class="mt-6">
    <div class="text-sm">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" class="text-blue-600 hover:underline">MDN: CSS Variables</a> | 
      <a href="https://web.dev/learn/css/functions/" class="text-blue-600 hover:underline">web.dev: CSS Functions</a>
    </div>
  </footer>
</section>

<div class="absolute top-4 right-4">
  <span class="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full border border-red-600">Advanced</span>
</div>

---
layout: default
---

# CSS Learning Path

<section>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Beginner Level -->
    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm p-5 border border-green-200 hover:shadow-md transition-all">
      <div class="flex items-center mb-3">
        <div class="i-carbon-sprout text-green-600 text-xl"></div>
        <h4 class="font-bold ml-2 text-green-800">Beginner</h4>
      </div>
      <ul class="space-y-2 text-sm">
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-green-500 mr-2"></div>
          <span>Selectors & properties</span>
        </li>
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-green-500 mr-2"></div>
          <span>Box model</span>
        </li>
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-green-500 mr-2"></div>
          <span>Basic layouts</span>
        </li>
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-green-500 mr-2"></div>
          <span>Colors & typography</span>
        </li>
      </ul>
    </div>
    <!-- Intermediate Level -->
    <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-sm p-5 border border-yellow-200 hover:shadow-md transition-all">
      <div class="flex items-center mb-3">
        <div class="i-carbon-growth text-yellow-600 text-xl"></div>
        <h4 class="font-bold ml-2 text-yellow-800">Intermediate</h4>
      </div>
      <ul class="space-y-2 text-sm">
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-yellow-500 mr-2"></div>
          <span>Flexbox & Grid</span>
        </li>
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-yellow-500 mr-2"></div>
          <span>Responsive design</span>
        </li>
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-yellow-500 mr-2"></div>
          <span>Transitions & animations</span>
        </li>
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-yellow-500 mr-2"></div>
          <span>CSS methodologies</span>
        </li>
      </ul>
    </div>
    <!-- Advanced Level -->
    <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-sm p-5 border border-red-200 hover:shadow-md transition-all">
      <div class="flex items-center mb-3">
        <div class="i-carbon-rocket text-red-600 text-xl"></div>
        <h4 class="font-bold ml-2 text-red-800">Advanced</h4>
      </div>
      <ul class="space-y-2 text-sm">
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-red-500 mr-2"></div>
          <span>Variables & functions</span>
        </li>
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-red-500 mr-2"></div>
          <span>Preprocessors</span>
        </li>
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-red-500 mr-2"></div>
          <span>Advanced animations</span>
        </li>
        <li class="flex items-center">
          <div class="i-carbon-checkmark text-red-500 mr-2"></div>
          <span>Design systems</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- Resources -->
  <div class="mt-4 bg-blue-50 rounded-xl p-5 border border-blue-200">
    <div class="flex items-center mb-3">
      <div class="i-carbon-book text-blue-600 text-xl"></div>
      <h4 class="font-bold ml-2 text-blue-800">Learning Resources</h4>
    </div>
    <div class="flex flex-wrap gap-4">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" class="flex items-center p-2 bg-white rounded-lg hover:bg-blue-100 transition-colors">
        <div class="i-carbon-document text-blue-500 mr-2"></div>
        <span class="text-sm">MDN Web Docs</span>
      </a>
      <a href="https://web.dev/learn/css/" class="flex items-center p-2 bg-white rounded-lg hover:bg-blue-100 transition-colors">
        <div class="i-carbon-code text-blue-500 mr-2"></div>
        <span class="text-sm">web.dev CSS</span>
      </a>
      <a href="https://css-tricks.com/" class="flex items-center p-2 bg-white rounded-lg hover:bg-blue-100 transition-colors">
        <div class="i-carbon-code text-blue-500 mr-2"></div>
        <span class="text-sm">CSS Tricks</span>
      </a>
      <a href="https://flexboxfroggy.com/" class="flex items-center p-2 bg-white rounded-lg hover:bg-blue-100 transition-colors">
        <div class="i-carbon-game-console text-blue-500 mr-2"></div>
        <span class="text-sm">Flexbox Froggy</span>
      </a>
      <a href="https://cssgridgarden.com/" class="flex items-center p-2 bg-white rounded-lg hover:bg-blue-100 transition-colors">
        <div class="i-carbon-game-console text-blue-500 mr-2"></div>
        <span class="text-sm">Grid Garden</span>
      </a>
    </div>
  </div>
</section>
