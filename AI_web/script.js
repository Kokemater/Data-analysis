const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const recognizedTextElement = document.getElementById('recognizedText');
const translatedTextElement = document.getElementById('translatedText');

// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  });

// Capture the image and process it
captureButton.addEventListener('click', () => {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const img = canvas.toDataURL('image/png');

  // Perform OCR with Tesseract.js
  Tesseract.recognize(
    img,
    'eng',
    {
      logger: info => console.log(info),
    }
  ).then(({ data: { text } }) => {
    recognizedTextElement.textContent = text;
    
    // Send recognized text to the server for translation
    fetch('/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
    .then(response => response.json())
    .then(data => {
      translatedTextElement.textContent = data.translatedText;
    });
  });
});
