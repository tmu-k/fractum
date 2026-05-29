const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });

    const url = new URL(request.url);

    if (url.pathname === '/scores' && request.method === 'GET') {
      const { results } = await env.DB.prepare(
        'SELECT name, score, level FROM scores ORDER BY score DESC LIMIT 10'
      ).all();
      return Response.json(results, { headers: CORS });
    }

    if (url.pathname === '/scores' && request.method === 'POST') {
      const { name, score, level } = await request.json();
      if (!name || typeof score !== 'number' || typeof level !== 'number')
        return new Response('Bad request', { status: 400, headers: CORS });
      await env.DB.prepare(
        'INSERT INTO scores (name, score, level) VALUES (?, ?, ?)'
      ).bind(name.slice(0, 3).toUpperCase(), score, level).run();
      return new Response(null, { status: 201, headers: CORS });
    }

    return new Response('Not found', { status: 404 });
  },
};
