# The Link Cemetery | Smart Bookmark App

A digital artifact cemetery for the links you'll never actually visit. Built with Next.js, Supabase, and a lot of caffeine.

## 🚀 Key Features

- **Digital Grave Creation**: Save and categorize your bookmarks.
- **Detailed Dossier**: Explore the engineer's blueprint and professional timeline.
- **Formal Relics**: Access and download the developer's resume.
- **Self-Healing**: Robust error handling and environment validation.

## 🛠️ Deployment Readiness

This project is optimized for deployment on Vercel or similar platforms.

### Environment Variables
Ensure the following are set in your production environment:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Local Preview
```bash
npm run build
npm run start
```

## 🧠 Challenges & "Aha!" Moments

### 1. The Real-time Ghost
**Problem:** I added a bookmark in Tab A, but Tab B just sat there looking at me, doing nothing. 
**Solution:** I realized that while I'm a "Professional Div-Centerer," I am not a psychic. I hadn't enabled the **Supabase Replication** for the `bookmarks` table. One toggle in the dashboard later, and the tabs started talking to each other like gossiping teenagers.

### 2. The OAuth Infinite Loop
**Problem:** Google would say "Welcome back, Kiran," but my app would say "I've never seen this man in my life."
**Solution:** The PKCE flow was missing the `auth/callback` route. I added the server-side exchange logic to trade the Google code for a real session. Now the app remembers users better than I remember my own passwords.

### 3. CSS Existential Crisis
**Problem:** Centering a div is supposed to be my specialty, but the "Add Bookmark" modal was escaping the viewport on mobile.
**Solution:** Applied some `flex items-center justify-center` and a pinch of `z-index` magic. It's now centered so perfectly it would make Euclid weep with joy.