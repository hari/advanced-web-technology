---
theme: seriph
background: #f5f5f5
title: 'React Forms & Complex UI'
info: |
  # React Forms & Complex UI
  Handling user input, form steps, and tricky edge cases in React apps.
layout: center
colorSchema: 'light'
favicon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
---

# React Forms & Complex UI

<div class="text-xl mt-4">Simple Forms, Multi-step Flows, and State Nuances</div>

---
layout: center
---

# Why Forms Matter

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Common Use Cases</h3>
    <ul class="list-disc pl-4">
      <li>Login & Register</li>
      <li>Checkout flows</li>
      <li>Settings pages</li>
      <li>Search filters</li>
    </ul>
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Key Aspects</h3>
    <ul class="list-disc pl-4">
      <li>State management</li>
      <li>Validation logic</li>
      <li>User experience</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Controlled vs Uncontrolled

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <b>Controlled Components</b><br/>
```jsx
<input 
  value={email} 
  onChange={(e) => setEmail(e.target.value)} 
/>
```
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>React state controls value</li>
      <li>Full control over input</li>
    </ul>
  </div>
  <div class="p-4 bg-pink-100 rounded-lg border border-pink-600">
    <b>Uncontrolled Components</b><br/>
```jsx
const inputRef = useRef();
<input ref={inputRef} />
```
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>DOM handles state</li>
      <li>Less React overhead</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Simple Form Example

<div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
```jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // ... submit logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      {error && <p className="error">{error}</p>}
      <button disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
```
</div>

---
layout: center
---

# Multi-Step Form Logic

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <b>State Management</b><br/>
```jsx
const [step, setStep] = useState(0);
const [formData, setFormData] = useState({
  name: '',
  age: '',
  email: ''
});
```
  </div>
  <div class="p-4 bg-purple-100 rounded-lg border border-purple-600">
    <b>Step Navigation</b><br/>
```jsx
{step === 0 && <StepOne data={formData} />}
{step === 1 && <StepTwo data={formData} />}
{step === 2 && <StepThree data={formData} />}
```
  </div>
</div>

---
layout: center
---

# Problem: Step Data Lost?

<div class="p-4 bg-red-100 rounded-lg border border-red-600">
  <h3 class="font-bold mb-2">The Issue</h3>
  <ul class="list-disc pl-4">
    <li>Dynamic mount/unmount = state reset</li>
    <li>Each step loses its data</li>
  </ul>
</div>

<div class="p-4 bg-green-100 rounded-lg border border-green-600 mt-4">
  <h3 class="font-bold mb-2">Solution: Lift State Up</h3>
```jsx
// Parent component
const [formData, dispatch] = useReducer(formReducer, {
  step1: { name: '' },
  step2: { age: '' },
  step3: { email: '' }
});
```
</div>

---
layout: center
---

# Preserving State on Navigation

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <b>Option 1: Hide Steps</b><br/>
```jsx
<div style={{ display: step === 0 ? 'block' : 'none' }}>
  <StepOne />
</div>
```
  </div>
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <b>Option 2: Keep Mounted</b><br/>
```jsx
<div className={step === 0 ? 'active' : 'hidden'}>
  <StepOne />
</div>
```
  </div>
</div>

---
layout: center
---

# Dynamic & Conditional Fields

<div class="p-4 bg-purple-100 rounded-lg border border-purple-600">
```jsx
function AddressForm() {
  const [isNepali, setIsNepali] = useState(false);
  
  return (
    <form>
      <input 
        type="checkbox"
        checked={isNepali}
        onChange={(e) => setIsNepali(e.target.checked)}
      />
      {isNepali && (
        <input 
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      )}
    </form>
  );
}
```
</div>

---
layout: center
---

# Form Validation

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <b>Manual</b><br/>
```js
if (!email.includes('@')) {
  setError('Invalid email');
}
```
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <b>Zod Schema</b><br/>
```js
const schema = z.object({
  email: z.string().email()
});
```
  </div>
  <div class="p-4 bg-purple-100 rounded-lg border border-purple-600">
    <b>React Hook Form</b><br/>
```js
const { register, handleSubmit } = useForm();
```
  </div>
</div>

---
layout: center
---

# UI States to Handle

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <h3 class="font-bold mb-2">Form States</h3>
    <ul class="list-disc pl-4">
      <li>Submitting / loading</li>
      <li>Disabled buttons</li>
      <li>Error messages</li>
    </ul>
  </div>
  <div class="p-4 bg-pink-100 rounded-lg border border-pink-600">
    <h3 class="font-bold mb-2">Field States</h3>
    <ul class="list-disc pl-4">
      <li>Touched vs dirty</li>
      <li>Focus management</li>
      <li>Validation timing</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Common UX Traps

<div class="p-4 bg-red-100 rounded-lg border border-red-600">
  <ul class="list-disc pl-4">
    <li>Error messages too late</li>
    <li>Step reset on back/next</li>
    <li>Scroll to top on step change</li>
    <li>Losing inputs on rerender</li>
  </ul>
</div>

---
layout: center
---

# Quiz Time 🎯

<Poll question="What causes a form step's data to reset unexpectedly?" :answers="['Component key changes', 'Unmounted component state lost', 'Form state is not lifted up', 'All of the above']" :correctAnswer="3" />

---
layout: center
---

# Summary

✅ Controlled components = predictable state  
✅ Multi-step = lift state, avoid remounts  
✅ Handle edge cases: hidden inputs, rerenders, focus

---
layout: center
---

# Native HTML Form Behavior

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Key Behaviors</h3>
    <ul class="list-disc pl-4">
      <li>Submit on Enter key</li>
      <li>Native validation</li>
      <li>Default page reload</li>
      <li>Single submit button priority</li>
    </ul>
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Pro Tips</h3>
    <ul class="list-disc pl-4">
      <li>Always preventDefault()</li>
      <li>Use type="submit"</li>
      <li>Handle form.submit()</li>
    </ul>
  </div>
</div>

---
layout: center
---

# Form Elements Gotchas

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <b>Common Mistakes</b><br/>
```jsx
// ❌ Wrong
<input type="checkbox" value={checked} />

// ✅ Correct
<input 
  type="checkbox"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
```
  </div>
  <div class="p-4 bg-pink-100 rounded-lg border border-pink-600">
    <b>File Inputs</b><br/>
```jsx
<input 
  type="file"
  onChange={(e) => {
    const files = e.target.files;
    // Handle files...
  }}
/>
```
  </div>
</div>

---
layout: center
---

# Accessibility & Keyboard

<div class="p-4 bg-purple-100 rounded-lg border border-purple-600 grid grid-cols-2 gap-4">
  <div>
    <h3 class="font-bold mb-2">Essential Practices</h3>
    <ul class="list-disc pl-4">
      <li>Logical tab order</li>
      <li>Label every input</li>
      <li>Focus management</li>
      <li>ARIA attributes</li>
    </ul>
  </div>

```jsx
<label htmlFor="email">Email</label>
<input 
  id="email"
  aria-invalid={hasError}
  aria-describedby="error-message"
/>
{hasError && (
  <span id="error-message" role="alert">
    {errorMessage}
  </span>
)}
```
</div>

---
layout: center
---

# Form Reset Behavior

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <b>Native Reset</b><br/>
```jsx
<form ref={formRef}>
  <input defaultValue="initial" />
  <button type="reset">Reset</button>
</form>
```
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <b>Controlled Reset</b><br/>
```jsx
const handleReset = () => {
  setFormData(initialState);
  formRef.current?.reset();
};
```
  </div>
</div>

---
layout: center
---

# Form APIs Every Dev Should Know

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <b>FormData API</b><br/>
```jsx
const formData = new FormData(formRef.current);
const data = Object.fromEntries(formData);
```
  </div>
  <div class="p-4 bg-pink-100 rounded-lg border border-pink-600">
    <b>Validation API</b><br/>
```jsx
formRef.current.checkValidity();
formRef.current.reportValidity();
inputRef.current.setCustomValidity('Error');
```
  </div>
</div>

---
layout: center
---

# Advanced Form Patterns

<div class="p-4 bg-purple-100 rounded-lg border border-purple-600">
  <h3 class="font-bold mb-2">Pro Features</h3>
  <ul class="list-disc pl-4">
    <li>Hybrid forms (React + native)</li>
    <li>Progressive enhancement</li>
    <li>Form autosave</li>
    <li>Undo/redo support</li>
    <li>Scroll/focus preservation</li>
  </ul>
</div>

---
layout: center
---

# Quiz Time 🎯

<Poll question="What's the most important thing to remember about form submission?" :answers="['Always use preventDefault()', 'Handle all validation', 'Use controlled components', 'All of the above']" :correctAnswer="3" />

---
layout: center
---

# Summary

&nbsp;

✅ Master native form behavior  
✅ Handle accessibility properly  
✅ Use the right APIs for the job  
✅ Consider advanced patterns

> Check the related project for demo: https://advanced-web-technology.pages.dev/react-intro/