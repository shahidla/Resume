# Resume Chatbot Worker

This Worker powers the LLM-only chatbot for Shahid M Syed's resume website.

It uses Cloudflare Workers AI with:

`@cf/meta/llama-3.1-8b-instruct`

Official Cloudflare docs confirm this model can be called from a Worker with `env.AI.run(...)`, and that the Worker must have a Workers AI binding named `AI`.

## Manual Deployment

1. Open Cloudflare dashboard.
2. Go to **Workers & Pages**.
3. Create a new Worker, for example `resume-chatbot`.
4. Paste the contents of `worker.js` into the Worker editor.
5. Open the Worker's **Settings**.
6. Add a **Workers AI binding**:
   - Binding name: `AI`
7. Deploy the Worker.
8. Copy the Worker URL, for example:
   - `https://resume-chatbot.<your-subdomain>.workers.dev`
9. Send that URL back so the website chatbot can be connected to:
   - `https://resume-chatbot.<your-subdomain>.workers.dev/chat`

## Test Request

After deployment, test with:

```powershell
Invoke-RestMethod `
  -Uri "https://resume-chatbot.<your-subdomain>.workers.dev/chat" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"question":"What is Shahid''s SAP BTP experience?"}'
```

The Worker is intentionally restricted to answering from the resume context embedded in `worker.js`.

## Optional Context Variable

For easier maintenance, the Worker also supports a text environment variable:

```text
RESUME_CONTEXT
```

If `RESUME_CONTEXT` is configured in the Cloudflare dashboard, the Worker will use that value instead of the embedded fallback context in `worker.js`.

This lets you update the chatbot knowledge without editing code.
