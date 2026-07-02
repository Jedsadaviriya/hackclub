# Macondo Hackathon Log

A personal hackathon journal I built to track my progress during Hack Club's Macondo event. It's basically a digital bulletin board where I drop notes, ideas, and status updates as I go, plus a couple of little toy pages I made along the way because I got curious.

## Why I built it

Instead of jumping straight into one big hackathon project, I decided the site itself would be the project. I wanted to actually *understand* how the web works underneath instead of reaching for a framework, so I gave myself one rule: no frameworks, no build step, no npm. Just plain HTML, CSS and vanilla JavaScript. Everything here (the log, the modal, the cards, the nav) I wired up by hand.

_fun fact: beige is one of my favorite colors, which is why the whole thing is a warm off-white (`#f5f0e8`) instead of the usual white._

## Try it

- **Live:** enable GitHub Pages on this repo and it'll be at `https://jedsadaviriya.github.io/hackclub/` (Settings → Pages → deploy from `main`). It's fully static so nothing else is needed.
- **Locally:** clone the repo and just open `index.html` in a browser. No server, no install. That's the whole setup.

```bash
git clone https://github.com/Jedsadaviriya/hackclub.git
cd hackclub
# then open index.html however you like
```

## What's in it

- **The log (`index.html`):** the main page. Hit **+ New Entry** to open a modal, write a title and body, pick a card color from the swatches, and save. Every entry becomes a card you can edit or delete later. All of it persists in the browser's `localStorage` (under the key `hacklog-cards`), so your entries are still there when you come back.

- **About Me (`aboutme.html`):** a little intro page. Who I am, why I'm doing Macondo, and a few random facts (I like the word *fish*, I play too much Valorant, etc).

- **Fun Tab (`funtab.html`):** a polaroid-style menu that links out to every page using my own custom button component. This is where the counter and coinflip live.

- **Counter (`counter.html`):** a clean +/− counter that goes green when positive, red when negative, bumps on each press, and has step sizes (1 / 5 / 10 / 25).

- **Coin Flip (`coinflip.html`):** a 3D CSS coin that actually spins to land on the right face, and tracks your heads/tails counts and current streak.

## How it's built

Everything is plain HTML + vanilla JS, styled with **Tailwind via the CDN** (turns out you can just drop in a `<script>` tag and use the classes, I didn't know that until this project). No framework, no bundler, no server.

The part I'm most proud of is that I built **three custom Web Components** from scratch using the browser's Web Components API, no libraries:

- `<styled-card>` (`styled-card.js`): renders each log entry, has its own edit button, and fires a custom `card-edit` event so the modal knows which card to open.
- `<site-header>` (`header.js`): the shared nav bar, so I write it once and reuse it on every page.
- `<go-to-page-button>` (`go-to-page.js`): the configurable polaroid link buttons on the Fun Tab.

```
hackclub/
├── index.html       # main log page (entries + modal)
├── aboutme.html     # about page
├── funtab.html      # polaroid menu linking to the other pages
├── counter.html     # counter toy
├── coinflip.html    # coin flip toy
├── styled-card.js   # <styled-card> web component
├── header.js        # <site-header> web component
├── go-to-page.js    # <go-to-page-button> web component
├── public/pic/      # images for the polaroid buttons
└── README.md
```

## What's next

Ideas on the board: a dark mode toggle, a countdown timer to the deadline, and syncing the log to a real database (right now it's `localStorage`, so entries live only in your own browser). I want to keep building this out until it feels finished, then use everything I learned here on my next project.

## License

MIT, see [LICENSE](LICENSE). Do whatever you want with it.
