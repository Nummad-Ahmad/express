const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // For parsing application/json

// Endpoint to send message to Botpress and get a response
app.post('/send-message', async (req, res) => {
  const { message, userId } = req.body;

  try {
    // Send the message to Botpress webhook
    const response = await axios.post('https://webhook.botpress.cloud/f1984cf2-0a55-4199-9e76-f6a6e2fc36b5', {
      event: 'user_message',
      payload: {
        text: message,
        userId: userId
      }
    });

    // Relay the response from Botpress back to the frontend
    res.json({ botResponse: response.data });
  } catch (error) {
    console.error('Error communicating with Botpress:', error);
    res.status(500).send('Error communicating with Botpress');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
