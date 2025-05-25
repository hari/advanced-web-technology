---
theme: seriph
background: #f5f5f5
title: React + ES6 Basics
info: |
  # React + ES6 Basics
  Modern UI development with React and ES6+ JavaScript.
layout: center
colorSchema: 'light'
favicon: https://cdn-icons-png.flaticon.com/512/1126/1126012.png
---

# The Quotes App

<div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
  <b>Let's build a quote manager:</b>
  <ul class="list-disc pl-4 mt-2">
    <li>Store quotes in state</li>
    <li>Display them in a list</li>
    <li>Add/remove quotes</li>
  </ul>
</div>

---
layout: center
---

````md magic-move {lines: true}
```jsx
function Quotes() {
  return (
    <div>
      <h1>Quotes</h1>
    </div>
  );
}
```

```jsx {1|5}
import { useState } from 'react';

function Quotes() {
  // what is useState?
  const [quotes, setQuotes] = useState();

  return (
    <div>
      <h1>Quotes</h1>
    </div>
  )
}

```


```jsx {4-8}
import { useState } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([
    "Stay hungry.",
    "Be kind.",
    "Keep coding."
  ]);

  return (
    <div>
      <h1>Quotes</h1>
    </div>
  )
}
```

```jsx {13-15}
import { useState } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([
    "Stay hungry.",
    "Be kind.",
    "Keep coding."
  ]);

  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote, index) => <li key={index}>{quote}</li>)}
      </ul>
    </div>
  );
}
```

```jsx {6-9|16}
import { useState } from 'react';

function Quotes() {
  // ...

  const removeQuote = (index) => {
    const newQuotes = quotes.filter((_, i) => i !== index);
    setQuotes(newQuotes);
  };

  return (
    // ...
    {quotes.map((quote, index) => (
      <li key={index}>
        {quote}
        <button onClick={() => removeQuote(index)}>Remove</button>
      </li>
    ))}
  );
}
```

```jsx {*|5|11-18}
import { useState } from 'react';

function Quotes() {
  // ...
  const [newQuote, setNewQuote] = useState("");

  // ...

  return (
    // ...
    <form>
      <input value={newQuote} onChange={event => setNewQuote(event.target.value)} />
      <button type="submit">Add</button>
    </form>
    // ...
  );
}
```

```jsx {*|7|8|9}
// ...

return (
  // ...
  <form 
    onSubmit={event => {
      event.preventDefault(); // Prevent default form submission behavior
      setQuotes([...quotes, newQuote]); // Add new quote to quotes array
      setNewQuote(""); // Reset newQuote to empty string
    }}
  >
    <input onChange={event => setNewQuote(event.target.value)} />
    <button type="submit">Add</button>
  </form>
)
```
````

---
layout: center
---
# Quiz Time 🧠

<Poll question="What does useState return?" :answers="['One value', 'A function', 'An array with current state and updater', 'A boolean']" :correctAnswer="2" />


---
layout: center
---

# Summary

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <ul class="list-disc pl-4">
      <li>Setup React using Vite</li>
      <li>Wrote your first JSX and Component</li>
      <li>Passed data via props</li>
      <li>Used <code>useState</code> for interactivity</li>
      <li>Learned basic ES6: arrow functions, destructuring</li>
    </ul>
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600" v-click>
    <b>What's Next?</b>
    <ul class="list-disc pl-4 mt-2">
      <li>React Router</li>
      <li>Conditional rendering</li>
      <li>Forms & Inputs</li>
      <li>API Integration (axios + react-query)</li>
      <li>Real-world component design</li>
    </ul>
  </div>
</div>
