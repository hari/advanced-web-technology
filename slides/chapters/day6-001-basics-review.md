---
theme: seriph
layout: center
class: text-center
background: #f5f5f5
title: Paisa chaiyo 💰
info: |
  Understanding Web Concepts
  A Web Adventure at Home 🏠
transition: fade-out
mdc: true
highlighter: shiki
lineNumbers: false
colorSchema: 'light'
favicon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
---

# 💰 Paisa chaiyo

<span class="text-sm max-w-sm text-balance inline-block" v-click>Imagine your own story.<br />How did you get money when you were a kid?</span>



---
layout: center
---

# 🏠 The Host (The House)

The **Host** is the house, it’s the address (like 192.168.0.1) where services live.

<div class="grid mb-4 grid-cols-2 p-4 gap-4 mx-auto border border-gray-300 border-dashed justify-items-center">
  <span class="col-span-2">🏠 House</span>            
  <span>👧 You</span>     <span>🧓 Guardian</span>
</div>

> The client doesn't necessarily live in the same house as the server.

---
layout: center
---

# 👧 The Client (You)

You want to ask for money:

```plaintext
👧: “Can I get 500 rupees for the school trip?”
```

---
layout: center
---

# 🚪 The Port (The Room)

You must go to the **right room** in the house.

```plaintext
🏠 House
 ├── 🚪 Living Room (Port 3000) ✅
 └── 🚿 Bathroom (Port 5000) ❌
```

Wrong room = no reply.

---
layout: center
---

# 🧓 The Server (Guardian)

Inside the correct room, you find the guardian.

```plaintext
👧: “Can I get 500 rupees?”
🧓: “Okay, here you go.”
```

The server responds.

---
layout: center
---

# 📨 The Request

```plaintext
👧 → 🧓: “Can I get 500 rupees, please?”
```

A clear, valid message from Client to Server.

---
layout: center
---

# 📩 The Response

```plaintext
🧓 → 👧: “Sure, here you go.”
```

Request accepted.

---
layout: center
---

# 🙋‍♀️ Middleware (Sibling Intercepts!)

Sometimes your sibling checks before the request goes to the guardian.

```plaintext
👧 → 🙋‍♀️: “I need 500 rupees.”
🙋‍♀️: “Did you do your homework?”
```

If ✅:

🙋‍♀️ → 🧓: “She did it.”

If ❌:

🙋‍♀️ → 👧: “No money until homework is done.”

---
layout: center
---

# ❌ 400 - Bad Request

You say something confusing or invalid.

```plaintext
👧: “Give me five money cash plz.”
🧓: “What are you saying?”
```

Request rejected.

---
layout: center
---

# 💥 500 - Server Error

Something went wrong with the server.

```plaintext
🧓: “Oops! I lost my wallet.”
```

Request was fine, but the server had an issue.

---
layout: center
---

# ⛔ 403 - Forbidden

You ask for something you’re not allowed to get.

```plaintext
👧: “Can I get 1000 rupees for a game?”
🧓: “No. Not allowed.”
```

---
layout: center
---

# 🚷 401 - Unauthorized

Someone unknown tries to ask.

```plaintext
👤: “Can I get 500 rupees?”
🧓: “I don’t know you!”
```

---
layout: center
---

# 🔍 404 - Not Found

The request is valid, but the server doesn't have that resource.

```plaintext
👧: “Can I get 500 rupees for the trip?”
```

<div class="mt-2">

> Guardian is not there or they don't have the money.
</div>

---
layout: center
---

# ✅ 200 - OK

Everything is valid.

```plaintext
👧: “Can I get 500 rupees for the trip?”
🧓: “Sure. Here it is.”
```

---
layout: center
---

# 🔁 301 - Moved Permanently

Guardian no longer handles this.

```plaintext
🧓: “I don’t manage that. Go ask your mom/siblings.”
```

<div class="mt-2">

> or 307 if they send you to a different person for once.
</div>

Request is redirected.

---
layout: center
---

# 🔃 429 - Too Many Requests

You ask too many times.

```plaintext
👧: “Now? Can I? Again? Now?”
🧓: “Enough! Come back later.”
```

Too many requests = rate limit.

---
layout: center
---

# 🧠 Our Story So Far...

- 🏠 **Host** = The house
- 👧 **Client** = You
- 🚪 **Port** = The room you must enter
- 🧓 **Server** = Guardian
- 📨📩 **Request/Response** = Conversation
- 🙋‍♀️ **Middleware** = The checker

---
layout: center
---

# 💡 Match the Code

Match each scene to its status code:

1. 👤 Stranger asks for money → <span class="text-red-500 font-bold" v-click>401</span>  
2. 👧 asks but keeps repeating → <span class="text-red-500 font-bold" v-click>429</span>  
3. 👧 gives confusing message → <span class="text-red-500 font-bold" v-click>400</span>  
4. 👧 asks for game money → <span class="text-red-500 font-bold" v-click>403</span>  
5. 👧 gets money instantly → <span class="text-green-500 font-bold" v-click>200</span>