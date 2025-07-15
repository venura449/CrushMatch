export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbyZVgTsadWu83G3EY7uPQKAnhSXIKAGVdl4SX-i0Xgho5vonexX0w8x3H9eqKOiWeKl/exec';
  
    try {
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      });
  
      const result = await response.json();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }
  