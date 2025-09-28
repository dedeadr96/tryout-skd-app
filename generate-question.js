// api/generate-questions.js
export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: 'API key not configured' });
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  
  try {
    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request.body), // Meneruskan payload dari client
    });

    if (!geminiResponse.ok) {
      const errorBody = await geminiResponse.text();
      console.error('Gemini API Error:', errorBody);
      return response.status(geminiResponse.status).json({ error: 'Failed to fetch from Gemini API' });
    }
    
    const data = await geminiResponse.json();
    return response.status(200).json(data);

  } catch (error) {
    console.error('Internal Server Error:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}