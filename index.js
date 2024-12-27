import express from 'express';
import cors from 'cors';

const app = express();
const port = 9000;

// Enable CORS for all routes
app.use(cors());

// Define a GET route for the root path
app.get('/', (req, res) => {
    res.json({ message: "Hello from API" });
});

app.get('/bye', (req, res)=>{
    res.json({message: "Bye"});
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
