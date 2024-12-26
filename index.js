import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const PORT = 9000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// Your Botpress Webhook URL
const BOTPRESS_WEBHOOK_URL = 'https://webhook.botpress.cloud/57532300-5370-4ade-b423-d547f519cc25';

// Endpoint to send a message to Botpress
app.post('/send-message', async (req, res) => {
    const { userId, message } = req.body;

    if (!userId || !message) {
        return res.status(400).json({ error: 'userId and message are required.' });
    }

    try {
        // Send message to Botpress
        const response = await axios.post(BOTPRESS_WEBHOOK_URL, {
            type: 'text', // Specify the type of message
            text: message,
            userId: userId // Unique identifier for the user
        });

        console.log('Message sent to Botpress:', response.data);

        res.status(200).json({ success: true, botResponse: response.data });
    } catch (error) {
        console.error('Error sending message to Botpress:', error.message);
        res.status(500).json({ success: false, error: 'Failed to send message to Botpress.' });
    }
});

// Endpoint to receive Botpress responses
app.post('/', (req, res) => {
    console.log('Response received from Botpress:', req.body);

    // Process the response as needed
    const { userId, messages } = req.body;
    messages.forEach((msg) => {
        console.log(`Message for user ${userId}: ${msg.text}`);
    });

    res.status(200).send('Response received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
