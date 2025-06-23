---
theme: seriph
background: #f5f5f5
title: 'React & HTTP: Backend Connections'
info: |
  # React & HTTP Communication
  Connecting React applications to backend services.
layout: center
colorSchema: 'light'
favicon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
---

# React & HTTP: Backend Connections

<div class="text-xl mt-4">Fetching Data, Mutations, & Real-time Updates</div>

---
layout: center
---

# Why HTTP in React?

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Fetch Data</h3>
    <p>Display dynamic content</p>
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Send Data</h3>
    <p>Create or update info</p>
  </div>
  <div class="p-4 bg-purple-100 rounded-lg border border-purple-600">
    <h3 class="font-bold mb-2">Real-time</h3>
    <p>Live updates</p>
  </div>
</div>

---
layout: center
---

# 1. `fetch` API Basics

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <b>useEffect Hook</b><br/>
```jsx
useEffect(() => {
  fetch('/quotes')
    .then(res => res.json())
}, []);
```
  </div>
  <div class="p-4 bg-pink-100 rounded-lg border border-pink-600">
    <b>Common Methods</b><br/>
    <ul class="list-disc pl-4 text-sm mt-2">
      <li>GET: Retrieve data</li>
      <li>POST: Send new data</li>
      <li>DELETE: Remove data</li>
    </ul>
  </div>
</div>

---
layout: center
---

# 2. Custom Hooks

<div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
  <b>useQuotesApi Example</b><br/>
```jsx
const useQuotesApi = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchQuotes = async () => {
    // Fetch logic here
  };
  
  return { quotes, isLoading, fetchQuotes };
};
```
</div>

---
layout: center
---

# 3. React Query

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <b>useQuery</b><br/>
```jsx
const { data } = useQuery({
  queryKey: ['quotes'],
  queryFn: fetchQuotes
});
```
  </div>
  <div class="p-4 bg-purple-100 rounded-lg border border-purple-600">
    <b>useMutation</b><br/>
```jsx
const mutation = useMutation({
  mutationFn: addQuote,
  onSuccess: () => {
    queryClient.invalidateQueries(['quotes'])
  }
});
```
  </div>
</div>

---
layout: center
---

# 4. Real-time Options

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-orange-100 rounded-lg border border-orange-600">
    <b>Server-Sent Events</b><br/>
```jsx
const eventSource = new EventSource('/stream');
eventSource.onmessage = (e) => {
  console.log(e.data);
};
```
  </div>
  <div class="p-4 bg-indigo-100 rounded-lg border border-indigo-600">
    <b>WebSocket (Socket.IO)</b><br/>
```jsx
const socket = io(SOCKET_URL);
socket.on('update', (data) => {
  console.log(data);
});
```
  </div>
</div>

---
layout: center
---

# Quiz: React & HTTP

<Poll question="For live sports scores, which is best?" :answers="['fetch with polling', 'Server-Sent Events', 'Custom Hooks', 'React Query']" :correctAnswer="1" />

---
layout: center
---

# Summary

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Basic Needs</h3>
    <ul class="list-disc pl-4">
      <li>fetch API</li>
      <li>Custom Hooks</li>
    </ul>
  </div>
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Advanced</h3>
    <ul class="list-disc pl-4">
      <li>React Query</li>
      <li>SSE/WebSockets</li>
    </ul>
  </div>
</div>

> Check the related project for demo: https://advanced-web-technology.pages.dev/projects/react-intro/