/**
 * Cloudflare Pages Function – POST /api/contact
 *
 * Validates the incoming JSON payload and, when RESEND_API_KEY is present,
 * forwards the inquiry to the studio inbox via the Resend transactional email API.
 *
 * Environment variables (set in Cloudflare Pages → Settings → Environment variables):
 *   RESEND_API_KEY   – Resend API secret key (required for email delivery)
 *   CONTACT_EMAIL    – Override the recipient address (default: hello@47sunsetstudios.com)
 *   FROM_EMAIL       – Override the sender address  (default: website@47sunsetstudios.com)
 */

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_EMAIL?: string;
  FROM_EMAIL?: string;
}

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Strip ASCII control characters to prevent header/log injection. */
function sanitize(value: string): string {
  return value.replace(/[\x00-\x1F\x7F]/g, ' ').trim();
}

const MAX_MESSAGE_LENGTH = 5000;

const ALLOWED_ORIGIN = 'https://47sunsetstudios.com';

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  // ── Parse body ────────────────────────────────────────────────────────────
  let payload: ContactPayload;
  try {
    payload = (await context.request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  // ── Validate ──────────────────────────────────────────────────────────────
  const name = typeof payload.name === 'string' ? sanitize(payload.name) : '';
  const email = typeof payload.email === 'string' ? sanitize(payload.email) : '';
  const message = typeof payload.message === 'string' ? sanitize(payload.message) : '';

  if (!name || !email || !message) {
    return jsonResponse({ error: 'All fields are required.' }, 422);
  }
  if (!isValidEmail(email)) {
    return jsonResponse({ error: 'Invalid email address.' }, 422);
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return jsonResponse({ error: 'Message exceeds maximum length.' }, 422);
  }

  // ── Send email via Resend ─────────────────────────────────────────────────
  const {
    RESEND_API_KEY,
    CONTACT_EMAIL = 'hello@47sunsetstudios.com',
    FROM_EMAIL = 'website@47sunsetstudios.com',
  } = context.env;

  if (RESEND_API_KEY) {
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: CONTACT_EMAIL,
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!emailRes.ok) {
      return jsonResponse({ error: 'Failed to deliver message. Please try again.' }, 502);
    }
  }

  return jsonResponse({ ok: true }, 200);
}

export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
