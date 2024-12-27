import express from 'express';
import cors from 'cors';
const app = express();
const port = 9000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Hello from API" });
});

app.get('/bye', (req, res)=>{
    res.json({message: "Bye"});
})

app.post('/data', (req,res)=>{
    try{
        res.send('temp');
    }catch(e){
        console.log(e)
    };
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
