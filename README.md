# Shahid M Syed Resume Website

Public resume and architecture portfolio for Shahid M Syed.

Live site:

https://shahidla.github.io/Resume/

## Structure

- `index.html` - main resume and portfolio page
- `architecture/` - architecture case studies
- `projects/` - selected project case studies
- `blogs/` - self-hosted blog migrations and summaries
- `assets/` - blog images and supporting media
- `data/` - structured profile, project, and certification data
- `worker/` - Cloudflare Workers AI chatbot backend scaffold
- `chatbot.js` - browser chatbot client
- `styles.css` - shared site styles

## Local Development

Run a local static server from the repository root:

```powershell
python -m http.server 5500 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:5500/
```

## Chatbot

The frontend calls the Cloudflare Worker endpoint:

```text
https://resume-chatbot.shahid-la.workers.dev/chat
```

The Worker is configured to answer only from Shahid's resume/site context.

For easier maintenance, the Worker supports an optional Cloudflare environment variable named `RESUME_CONTEXT`. See `worker/resume-context.txt`.

## Deployment

The site is deployed with GitHub Pages from the `main` branch.
