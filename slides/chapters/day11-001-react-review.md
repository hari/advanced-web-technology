---
theme: seriph
title: 'React + ES6+ '
layout: center
background: '#f5f5f5'
class: text-center
info: |
  React and ES6+ mastery
drawings:
  persist: false
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: false
colorSchema: 'light'
favicon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png'
---

# React Internals & Patterns

### Terms, mental models, mistakes, component logic

---
layout: center
---

# Thinking in React

<div class="p-4 bg-blue-100 rounded-lg border border-blue-600 text-left">
<ol class="space-y-2 list-decimal pl-4">
  <li>Break UI into a component hierarchy</li>
  <li>Build a static version (no interactivity yet)</li>
  <li>Find the minimal but complete representation of UI state</li>
  <li>Identify where your state should live</li>
</ol>
</div>

---
layout: center
---

# Props vs State

<div class="grid grid-cols-2 gap-4 mb-2 text-left">
  <div class="p-4 rounded-lg border border-blue-600">
    <h3 class="font-bold !m-0">Props</h3>
    <p class="!m-0">Data passed to component (read-only).</p>
  </div>
  <div class="p-4 rounded-lg border border-green-600">
    <h3 class="font-bold !m-0">State</h3>
    <p class="!m-0">Internal component memory (can change).</p>
  </div>
</div>

```js
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>
}
```

<div class="mt-4 p-2 rounded-lg text-center border border-purple-600">
✅ Props flow <b>downward</b> from parent → child
</div>

---
layout: center
---

# When useEffect Runs

```js
useEffect(() => {
  console.log('Runs on mount')
}, [])

useEffect(() => {
  console.log('Runs when count changes')
}, [count])
```

<div class="text-left mt-4 space-y-2">
  <div class="p-3 bg-blue-100 rounded-lg border border-blue-600"><b>Empty deps <code>[]</code></b> = runs once (on mount)</div>
  <div class="p-3 bg-green-100 rounded-lg border border-green-600"><b>Non-empty <code>[count]</code></b> = re-runs when dependencies change</div>
  <div class="p-3 bg-orange-100 rounded-lg border border-orange-600"><b>Cleanup</b> via <code>return () => {...}</code></div>
</div>

---
layout: center
---

# Common Mistakes Juniors Make

<div class="grid grid-cols-2 gap-4 mt-6 text-left text-sm">
  <div class="p-3 rounded-lg border border-red-500">
    <h4 class="font-bold !m-0 flex items-center gap-2"><div class="i-carbon-edt-loop text-red-700"></div>Infinite <code>useEffect</code> loops</h4>
    <p class="text-xs !m-0">Forgetting or using incorrect dependencies.</p>
  </div>
  <div class="p-3 rounded-lg border border-red-500">
    <h4 class="font-bold !m-0 flex items-center gap-2"><div class="i-carbon-compare text-red-700"></div>State from Derived Props</h4>
    <p class="text-xs !m-0">An anti-pattern that creates state management bugs.</p>
  </div>
  <div class="p-3 rounded-lg border border-red-500">
    <h4 class="font-bold !m-0 flex items-center gap-2"><div class="i-carbon-list-checked text-red-700"></div>Overusing <code>useState</code></h4>
    <p class="text-xs !m-0">Not using <code>useReducer</code> for complex, related state.</p>
  </div>
  <div class="p-3 rounded-lg border border-red-500">
    <h4 class="font-bold !m-0 flex items-center gap-2"><div class="i-carbon-key text-red-700"></div>Missing <code>key</code> prop</h4>
    <p class="text-xs !m-0">Not providing a stable, unique <code>key</code> for list items.</p>
  </div>
  <div class="p-3 rounded-lg border border-red-500">
    <h4 class="font-bold !m-0 flex items-center gap-2"><div class="i-carbon-restart text-red-700"></div>Uncontrolled Re-renders</h4>
    <p class="text-xs !m-0">State patterns that cause too many component updates.</p>
  </div>
  <div class="p-3 rounded-lg border border-red-500">
    <h4 class="font-bold !m-0 flex items-center gap-2"><div class="i-carbon-function-math text-red-700"></div>Not Memoizing</h4>
    <p class="text-xs !m-0">Passing new callback functions to children on every render.</p>
  </div>
</div>

---
layout: center
---

# React Core Concepts

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-blue-600">
    <h4 class="font-bold !m-0">Mount</h4>
    <p class="text-sm !m-0">Component is added to DOM for first time</p>
  </div>
  <div class="p-3 rounded-lg border border-green-600">
    <h4 class="font-bold !m-0">Unmount</h4>
    <p class="text-sm !m-0">Component is removed from DOM</p>
  </div>
  <div class="p-3 rounded-lg border border-yellow-600">
    <h4 class="font-bold !m-0">Render</h4>
    <p class="text-sm !m-0">JSX → Virtual DOM generation</p>
  </div>
  <div class="p-3 rounded-lg border border-red-600">
    <h4 class="font-bold !m-0">Re-render</h4>
    <p class="text-sm !m-0">React re-evaluates component due to state/prop change</p>
  </div>
</div>

---
layout: center
---

# React State & Data Flow

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-blue-600">
    <h4 class="font-bold !m-0">Props</h4>
    <p class="text-sm !m-0">Data passed to component (read-only)</p>
  </div>
  <div class="p-3 rounded-lg border border-green-600">
    <h4 class="font-bold !m-0">State</h4>
    <p class="text-sm !m-0">Internal component memory (can change)</p>
  </div>
  <div class="p-3 rounded-lg border border-yellow-600">
    <h4 class="font-bold !m-0">Prop Drilling</h4>
    <p class="text-sm !m-0">Passing props through multiple components</p>
  </div>
  <div class="p-3 rounded-lg border border-red-600">
    <h4 class="font-bold !m-0">Context</h4>
    <p class="text-sm !m-0">Global state management without prop drilling</p>
  </div>
</div>

---
layout: center
---

# React Hooks & Optimization

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-3 rounded-lg border border-purple-600">
    <h4 class="font-bold !m-0">useEffect</h4>
    <p class="text-sm !m-0">Side effects management (fetching data, subscriptions)</p>
  </div>
  <div class="p-3 rounded-lg border border-purple-600">
    <h4 class="font-bold !m-0">useCallback</h4>
    <p class="text-sm !m-0">Memoize callback functions</p>
  </div>
  <div class="p-3 rounded-lg border border-purple-600">
    <h4 class="font-bold !m-0">useMemo</h4>
    <p class="text-sm !m-0">Memoize expensive calculations</p>
  </div>
  <div class="p-3 rounded-lg border border-purple-600">
    <h4 class="font-bold !m-0">Memoize</h4>
    <p class="text-sm !m-0">Cache result to avoid recomputation (React.memo, useMemo)</p>
  </div>
</div>

---
layout: center
---

# Simple project

<div class="text-xl mb-6">Build a <strong>multi-component Notes App</strong>:</div>

<div class="p-4 rounded-lg border border-yellow-600 mb-4 text-left">
  <div class="font-bold flex items-center">
    <div class="i-carbon-task mr-2 text-yellow-700"></div>
    <span>Component Breakdown</span>
  </div>
  <ul class="space-y-1 text-sm mt-2 !list-none pl-2">
    <li><code>App.jsx</code> — holds the shared state for folders and notes</li>
    <li><code>FolderList.jsx</code> — shows a list of folders</li>
    <li><code>FolderItem.jsx</code> — shows a single folder</li>
    <li><code>NotesList.jsx</code> — shows notes for the selected folder</li>
    <li><code>NoteItem.jsx</code> — shows a single note item</li>
    <li><code>NoteDetails.jsx</code> — shows a single note details</li>
  </ul>
  
</div>

---
layout: center
---

<img src="https://media.idownloadblog.com/wp-content/uploads/2022/02/iCloud-Notes-on-Windows-PC.jpg" class="rounded-lg shadow-lg max-h-fit object-contain" />


---
layout: center
---

# Lifting State Up

```js
function NotesList({ notes, onSelect }) {
  return notes.map(note => (
    <Note key={note._id} note={note} onSelect={onSelect} />
  ));
}
```

<div class="mt-4 p-3 bg-teal-100 rounded-lg border border-teal-600 text-left">
State lives in a common parent component.
Children receive state as props and communicate changes via callback functions.
</div>


---
layout: center
---

# ES6+ Features (Part 1)

<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Arrow Functions</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Template Literals</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Destructuring</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Spread & Rest</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Default Params</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Shorthand Object Notation</div>
  <div class="px-3 py-2 bg-orange-100 rounded-lg border border-orange-600 hover:bg-orange-200 transition-colors">let vs const vs var</div>
</div>

---
layout: center
---

# ES6+ Features (Part 2)

<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Promises & Async/Await</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Optional Chaining (?.)</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Nullish Coalescing (??)</div>
  <div class="px-3 py-2 bg-teal-100 rounded-lg border border-teal-600 hover:bg-teal-200 transition-colors">Array.flat()</div>
  <div class="px-3 py-2 bg-teal-100 rounded-lg border border-teal-600 hover:bg-teal-200 transition-colors">Array.includes()</div>
  <div class="px-3 py-2 bg-lime-100 rounded-lg border border-lime-600 hover:bg-lime-200 transition-colors opacity-50">Object.entries()</div>
  <div class="px-3 py-2 bg-lime-100 rounded-lg border border-lime-600 hover:bg-lime-200 transition-colors opacity-50">Object.fromEntries()</div>
  <div class="px-3 py-2 bg-red-100 rounded-lg border border-red-600 hover:bg-red-200 transition-colors opacity-50">BigInt</div>
  <div class="px-3 py-2 bg-red-100 rounded-lg border border-red-600 hover:bg-red-200 transition-colors opacity-50">globalThis</div>
  <div class="px-3 py-2 bg-red-100 rounded-lg border border-red-600 hover:bg-red-200 transition-colors opacity-50">WeakRef</div>
</div>

---
layout: center
---

# Latest ECMAScript (2020 - 2026)

<div class="text-left space-y-2">
  <div class="p-2 bg-blue-100 rounded-lg border border-blue-600"><b>ES2020:</b> Dynamic Import, Promise.allSettled</div>
  <div class="p-2 bg-green-100 rounded-lg border border-green-600"><b>ES2021:</b> String.replaceAll, Logical Assignment Operators</div>
  <div class="p-2 bg-purple-100 rounded-lg border border-purple-600"><b>ES2022:</b> Top-Level Await, Class Fields</div>
</div>

---
layout: center
---

# Recap

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold !m-0">React</h3>
    <p class="text-sm !m-0">Lifecycle, state flow, and modern patterns.</p>
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold !m-0">ES6+</h3>
    <p class="text-sm !m-0">Modern syntax and features for cleaner code.</p>
  </div>
</div>
