---
theme: seriph
background: #f5f5f5
title: HTTP & Protocol Basics
layout: center
class: text-center
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: false
colorSchema: 'light'
favicon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
pollSettings:
  anonymous: true
---

# HTTP & Protocol Basics

<div class="text-lg mt-4">
Understanding the <strong>language of the web</strong><br>
How computers talk to each other
</div>

---
layout: center
---

# What is HTTP?

<div class="grid grid-cols-1 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <ul class="space-y-2 list-disc pl-4">
      <li><strong>H</strong>yper<strong>T</strong>ext <strong>T</strong>ransfer <strong>P</strong>rotocol</li>
      <li>Foundation of data communication on the web</li>
      <li><i>Stateless</i> request-response protocol</li>
      <li>Uses TCP/IP for reliable delivery</li>
    </ul>
  </div>
</div>

---

# URL Structure
```mermaid
graph TD
    URL[URL] --> Protocol[Protocol]
    URL --> Domain[Domain]
    URL --> Path[Path]
    URL --> Query[Query]
    URL --> Fragment[Fragment]
    
    Protocol -->|https://| ProtocolValue
    Domain -->|example.com| DomainValue
    Path -->|/api/users| PathValue
    Query -->|?id=123| QueryValue
    Fragment -->|#section| FragmentValue
```

---

# Client-Server Communication

```mermaid
sequenceDiagram
    participant Client
    participant DNS
    participant Server
    
    Client->>DNS: Resolve domain
    DNS-->>Client: IP address
    Client->>Server: HTTP Request
    Server-->>Client: HTTP Response
```

---

# HTTP Evolution

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-gray-100 rounded-lg border border-gray-600">
    <h3 class="font-bold mb-2">HTTP/0.9 (1991)</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>One-line protocol</li>
      <li>GET method only</li>
      <li>HTML responses only</li>
      <li>No headers</li>
      <li>Connection closed after response</li>
    </ul>
  </div>
  
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <h3 class="font-bold mb-2">HTTP/1.0 (1996)</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Headers introduced</li>
      <li>Status codes</li>
      <li>Multiple content types</li>
      <li>POST, HEAD methods added</li>
      <li>One request per connection</li>
    </ul>
  </div>
</div>

<div>
  <div class="mt-4 mb-2 px-3 bg-yellow-50 rounded-lg border border-yellow-400">
    <p class="text-sm"><strong>Note:</strong> HTTP is called <i>stateless</i> protocol, meaning that the server does not need to remember anything about the client.</p>
  </div>

  <div class="text-xs flex flex-col">
    <div>More info at:</div>
    <a class="block text-blue-500" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP" target="_blank">https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP</a>
    <a class="block text-blue-500" href="https://cs.fyi/guide/http-in-depth" target="_blank">https://cs.fyi/guide/http-in-depth</a>
  </div>
</div>

---

# HTTP Evolution (Cont.)

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">HTTP/1.1 (1997)</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Persistent connections</li>
      <li>Pipelining requests</li>
      <li>Host header required</li>
      <li>Content negotiation</li>
      <li>Chunked transfers</li>
    </ul>
  </div>
  
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">HTTP/2 (2015)</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Binary protocol (not text)</li>
      <li>Multiplexing streams</li>
      <li>Header compression</li>
      <li>Server push</li>
      <li>Request prioritization</li>
    </ul>
  </div>
  
  <div class="p-4 bg-purple-100 rounded-lg border border-purple-600">
    <h3 class="font-bold mb-2">HTTP/3 (2022)</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>QUIC transport protocol</li>
      <li>Built-in encryption</li>
      <li>Reduced connection setup</li>
      <li>Better mobile performance</li>
      <li>Improved loss recovery</li>
    </ul>
  </div>
</div>

<div class="mt-4 text-sm px-3 bg-yellow-50 rounded-lg border border-yellow-400">
  <p class="text-sm"><strong>Key Evolution:</strong> HTTP evolved from a simple text protocol to an optimized binary protocol focused on reducing latency and improving performance.</p>
</div>

---
layout: center
---
# HTTP Verbs (Methods)

| Method | Purpose        | Example             | Typical Success Status |
|--------|----------------|---------------------|-------------------------|
| GET    | Retrieve data  | GET /users          | 200 OK                  |
| POST   | Create new     | POST /users         | 201 Created             |
| PUT    | Replace        | PUT /users/1        | 200 OK / 204 No Content |
| PATCH  | Partial update | PATCH /users/1      | 200 OK / 204 No Content |
| DELETE | Remove         | DELETE /users/1     | 204 No Content          |

---

# Status Codes

<div class="grid grid-cols-2 gap-4 mt-4 mb-2">
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">2xx Success</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>200 OK</li>
      <li>201 Created</li>
      <li>204 No Content</li>
    </ul>
  </div>

  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <h3 class="font-bold mb-2">3xx Redirection</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>301 Moved Permanently</li>
      <li>302 Found</li>
      <li>304 Not Modified</li>
    </ul>
  </div>

  <div class="p-4 bg-red-100 rounded-lg border border-red-600">
    <h3 class="font-bold mb-2">4xx Client Error</h3>
    <ul class="space-y-1 list-disc pl-4 grid grid-cols-2">
      <li>400 Bad Request</li>
      <li>401 Unauthorized</li>
      <li>403 Forbidden</li>
      <li>404 Not Found</li>
      <li class="col-span-2">405 Method Not Allowed</li>
    </ul>
  </div>

  <div class="p-4 bg-purple-100 rounded-lg border border-purple-600">
    <h3 class="font-bold mb-2">5xx Server Error</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>500 Internal Server Error</li>
      <li>502 Bad Gateway</li>
      <li>503 Service Unavailable</li>
    </ul>
  </div>
</div>

> There are more status codes, but these are the most common ones that you will encounter.
> You can find more info here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

---

# Monolith vs Microservices

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
    <h3 class="font-bold mb-2">Monolith</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Single codebase</li>
      <li>Easier to develop</li>
      <li>Harder to scale</li>
      <li>Good for small apps</li>
      <li>Simpler deployment</li>
      <li>Tight coupling</li>
    </ul>
  </div>
  
  <div class="p-4 bg-green-100 rounded-lg border border-green-600">
    <h3 class="font-bold mb-2">Microservices</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li>Multiple services</li>
      <li>Independent scaling</li>
      <li>Complex to manage</li>
      <li>Good for large apps</li>
      <li>Language flexibility</li>
      <li>Resilience (partial failures)</li>
    </ul>
  </div>
</div>

---

# Key Concepts for Beginners

<div class="mt-6">
  <div class="p-4 bg-yellow-100 rounded-lg border border-yellow-600">
    <h3 class="font-bold mb-2">When to Choose What?</h3>
    <ul class="space-y-1 list-disc pl-4">
      <li><strong>Start with Monolith</strong> - For MVPs, startups, and simple applications</li>
      <li><strong>Consider Microservices</strong> - When specific components need independent scaling</li>
      <li><strong>Migration Path</strong> - Many successful apps start as monoliths and gradually break into microservices</li>
    </ul>
  </div>
  
  <div class="grid grid-cols-2 gap-4 mt-4">
    <div class="p-4 bg-blue-100 rounded-lg border border-blue-600">
      <h3 class="font-bold mb-2">Monolith Challenges</h3>
      <ul class="space-y-1 list-disc pl-4">
        <li>Single point of failure</li>
        <li>Technology lock-in</li>
        <li>Difficult to understand as it grows</li>
        <li>Slower development in large teams</li>
      </ul>
    </div>
    <div class="p-4 bg-green-100 rounded-lg border border-green-600">
      <h3 class="font-bold mb-2">Microservices Challenges</h3>
      <ul class="space-y-1 list-disc pl-4">
        <li>Network complexity</li>
        <li>Data consistency issues</li>
        <li>Testing is more complex</li>
        <li>Requires DevOps expertise</li>
      </ul>
    </div>
  </div>
</div>

---

# Architecture Comparison

```mermaid
graph TD
    subgraph Monolith
        A[Single App] --> B[Database]
    end
    
    subgraph Microservices
        C[Auth Service] --> D[Auth DB]
        E[User Service] --> F[User DB]
        G[Order Service] --> H[Order DB]
    end
```

---
layout: center
---

# Quiz: HTTP Basics

<Poll question="Which HTTP method is used to create a new resource?" :answers="['GET', 'POST', 'PUT', 'DELETE']" :correctAnswer="1" />

---
layout: center
---

# Terms to Know

<div class="flex flex-wrap gap-2">
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">HTTP/1.1</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">HTTP/2</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">HTTP/3</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">Status Code</div>
  <div class="px-3 py-2 bg-blue-100 rounded-lg border border-blue-600 hover:bg-blue-200 transition-colors">HTTP Verb</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">TCP/IP</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">DNS</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Compression</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Gzip</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">Handshake</div>
  <div class="px-3 py-2 bg-green-100 rounded-lg border border-green-600 hover:bg-green-200 transition-colors">SSL/TLS</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Monolith</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">Microservices</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">REST</div>
  <div class="px-3 py-2 bg-purple-100 rounded-lg border border-purple-600 hover:bg-purple-200 transition-colors">API</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Performance</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Latency</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Throughput</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Scalability</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Reliability</div>
  <div class="px-3 py-2 bg-yellow-100 rounded-lg border border-yellow-600 hover:bg-yellow-200 transition-colors">Security</div>
  
 </div> 
