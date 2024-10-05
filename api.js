const express = require('express');
const supa = require('@supabase/supabase-js');
const app = express();
const supaUrl = 'https://dpurxnwnkjulaoflmhxw.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoZWpoaXdzaHBteG5uZGxhb3lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxNDgxMTIsImV4cCI6MjA0MzcyNDExMn0.1Yvvrl74ud4nLxbC8vLii8AeQNZnboIIV81JkzFZAO0';
const supabase = supa.createClient(supaUrl, supaAnonKey);

app.use(express.json());

// Function to calculate cosine similarity between two profiles
function cosineSimilarity(profileA, profileB) {
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let key in profileA) {
        dotProduct += profileA[key] * profileB[key];
        normA += profileA[key] ** 2;
        normB += profileB[key] ** 2;
    }

    normA = Math.sqrt(normA);
    normB = Math.sqrt(normB);

    return dotProduct / (normA * normB);
}

// Function to find best matches for a given user profile
function findBestMatches(userProfile, profiles) {
    let similarities = profiles.map((profile) => ({
        profile: profile,
        score: cosineSimilarity(userProfile, profile)
    }));

    similarities.sort((a, b) => b.score - a.score);
    return similarities;
}

// Endpoint to fetch client requests and match profiles
app.get('/api/matches', async (req, res) => {
    const { data: clientData, error: clientError } = await supabase
        .from('Request')
        .select('Client(name, talkativity, formality, friendliness, extroversion), time_required, additional');

    if (clientError) {
        return res.status(500).json({ error: 'Error fetching client data' });
    }

    // Fetch mentor profiles from the database
    const { data: mentorData, error: mentorError } = await supabase
        .from('mentor')
        .select('name, available, talkativity, formality, friendliness, extroversion');

    if (mentorError) {
        return res.status(500).json({ error: 'Error fetching mentor data' });
    }

    // For simplicity, use the first client to find matches (or modify to take an ID)
    const userProfile = clientData[0].Client;
    const matches = findBestMatches(userProfile, mentorData);
    res.json(matches);
});

const http = require('http');
const { Server } = require('socket.io');

// Create HTTP server and attach Socket.io
const server = http.createServer(app);
const io = new Server(server);

// Whenever a new profile is created, broadcast the updates to clients
app.post('/api/matches', async (req, res) => {
    // Handle matching logic here, as shown before
    const matches = findBestMatches(req.body, mentorData);

    // Emit to all connected clients
    io.emit('new-match', matches);

    res.json(matches);
});

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Listen for disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
