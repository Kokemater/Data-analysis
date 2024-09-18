const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

// Replace with your Google Translate API key
const GOOGLE_TRANSLATE_API_KEY = 'YOUR_API_KEY_HERE';

app.post('/translate', async (req, res) => {
  const text = req.body.text;
  
  const response = await fetch(`https://translation.googleapis.com/language/translate/v2`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GOOGLE_TRANSLATE_API_KEY}`,
    },
    body: JSON.stringify({
      q: text,
      target: 'es', // Target language (Spanish in this case)
    }),
  });

  const data = await response.json();
  const translatedText = data.data.translations[0].translatedText;
  
  res.json({ translatedText });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
