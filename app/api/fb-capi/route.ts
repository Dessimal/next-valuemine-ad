import { NextRequest } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  const { eventName, name, email, phone, url, userAgent } = await req.json();

  const pixelId = process.env.FB_PIXEL_ID;
  const accessToken = process.env.FB_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return new Response(JSON.stringify({ error: 'Missing credentials' }), { status: 500 });
  }

  const hashEmail = email ? crypto.createHash('sha256').update(email.trim().toLowerCase()).digest('hex') : undefined;
  const hashPhone = phone ? crypto.createHash('sha256').update(phone.trim()).digest('hex') : undefined;
  const hashName = name ? crypto.createHash('sha256').update(name.trim().toLowerCase()).digest('hex') : undefined;

  const payload = {
    data: [
      {
        event_name: eventName || 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: url,
        user_data: {
          em: hashEmail ? [hashEmail] : undefined,
          ph: hashPhone ? [hashPhone] : undefined,
          fn: hashName ? [hashName] : undefined,
          client_user_agent: userAgent,
        },
      },
    ],
  };

  const fbRes = await fetch(`https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const result = await fbRes.json();
  return new Response(JSON.stringify(result), { status: 200 });
}