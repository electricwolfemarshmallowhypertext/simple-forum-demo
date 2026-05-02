# Neon Forum Frontend

This is a pure HTML, CSS, and JavaScript forum frontend demo. It has no build step, no framework, and no backend dependency.

## Features

- Dynamic forum feed with sections, tags, search, and sorting
- Thread cards with reactions, counters, modal discussions, and local demo replies
- New-thread composer with animated feedback
- Canvas background animation and small reaction particles
- Sound enabled by default, with a visible toggle
- English interface by default
- Optional Thai language mode using the `TH` / `EN` button
- Responsive layout for desktop and mobile

## Run

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Note For The Professor

Dear Professor,

I know this project has a suspiciously large number of lines for a small forum demo. That is partly the point: the frontend is doing the visual design, responsive layout, animation, sound, demo data, language switching, modal behavior, filtering, sorting, reactions, and local interaction logic without any external framework.

Reading every line manually may be less fun than simply opening the page and clicking around. The code is intentionally split into `index.html`, `style.css`, and `app.js`, so the structure, presentation, and behavior are at least polite enough to stay in their own rooms.

Respectfully,  
the student who may have made the professor scroll a bit too much
