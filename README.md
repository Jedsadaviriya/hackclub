# Macondo Hackathon Log

A personal hackathon journal I built to track my progress during Hack Club's Macondo event. It's basically a digital bulletin board where I can drop notes, ideas, and status updates as I go.

## What I built so far

**The log site itself** which is kind of boring if we are being honest. but the thing is that I usually have many things to do in a day but anywayyyy. Instead of just building the hackathon project, I first built the site to document it.

Here's the breakdown:

- **Set up the base layout** — `index.html` with Tailwind CSS, a warm off-white background (`#f5f0e8`) _fun fact beige is one of my favorite color_. and a clean centered column. Nothing fancy, just readable.

- **Built a custom Web Component** `styled-card.js` defines a `<styled-card>` element from scratch using the Web Components API. Each card handles its own rendering, has an edit button, and fires a custom event when clicked so the modal knows what to open.

- **Added a full modal system** clicking "New Entry" opens an overlay with title/body inputs, a color swatch picker, and save/cancel/delete buttons. Edit any card by clicking its Edit button. no libraries yet.

- **Added an About Me page** `aboutme.html` with nav between the two pages. Still fleshing it out but it's there.

## How it works

The site is entirely static plain HTML, CSS (via Tailwind CDN like in the tutorial, I didn't even know you could do that until now so idk), and vanilla JavaScript. No framework, no build step, no server. You can open `index.html` directly in a browser and everything works.

```
hackclub/
├── index.html       # main log page
├── aboutme.html     # about page
├── styled-card.js   # custom Web Component
└── README.md
```

## What's next

Still figuring out the actual hackathon project direction. For now the log site is the artifact. Ideas on the board: dark mode toggle, a countdown timer to the deadline, filling out the About Me page properly.

what I could do next could be to continue to develop this website until I can't anymore. it will take a while until I can get everything right for my next project
