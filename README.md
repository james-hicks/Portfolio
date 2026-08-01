# Portfolio site

Plain HTML/CSS/JS, no build step, no framework. Free to host.

## Files
- `index.html` — page structure
- `style.css` — all styling
- `projects.js` — **edit this to add/update projects.** Everything else reads from here.
- `script.js` — renders the project cards and the detail popup, no edits needed
- `images/` — put screenshots and thumbnails here

## Adding a project
Open `projects.js` and copy one of the existing objects in the `PROJECTS` array,
change the fields, and drop it into the array wherever you want it to appear.
Field descriptions are in the comment at the top of the file.

## Adding video
1. Upload the clip to YouTube (can be "Unlisted" so it doesn't show in search
   or on your channel, but still embeds fine).
2. Copy the video ID from the URL — the part after `watch?v=`.
   `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`.
3. Paste it into that project's `youtubeId` field in `projects.js`.

## Adding images
Drop image files into the `images/` folder, then reference them by path in
`projects.js`, e.g. `"images/friendslop-1.jpg"`. Keep images reasonably sized
(under ~500KB each) so the page loads fast — export at around 1600px wide max.

## Hosting for free (recommended: GitHub Pages)

1. Create a free GitHub account if you don't have one.
2. Create a new repository, e.g. `portfolio`.
3. Upload all these files (`index.html`, `style.css`, `projects.js`,
   `script.js`, `images/`) to the repo — either drag-and-drop on github.com,
   or `git push` if you're comfortable with git.
4. In the repo, go to **Settings → Pages**.
5. Under "Build and deployment", set Source to **Deploy from a branch**,
   branch `main`, folder `/ (root)`. Save.
6. GitHub gives you a live URL within a minute or two, something like
   `https://yourusername.github.io/portfolio/`.
7. Optional: if you own a domain, add it under Settings → Pages → Custom
   domain, and point your domain's DNS at GitHub Pages. Still free — you
   just pay for the domain itself (~$10-15/year), not hosting.

This costs $0/month indefinitely, unlike Squarespace. Netlify and Vercel are
solid free alternatives if you outgrow GitHub Pages (e.g. you later want a
contact form with server logic) — both also deploy this kind of static site
for free with basically the same steps.

## Local preview
Just double-click `index.html` — plain file:// works, but if the modal or
fonts act up, run a quick local server from this folder instead:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
