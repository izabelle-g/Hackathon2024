const express = require('express');
const supa = require('@supabase/supabase-js');
const app = express();
const supaUrl = 'https://dpurxnwnkjulaoflmhxw.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoZWpoaXdzaHBteG5uZGxhb3lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxNDgxMTIsImV4cCI6MjA0MzcyNDExMn0.1Yvvrl74ud4nLxbC8vLii8AeQNZnboIIV81JkzFZAO0';
const supabase = supa.createClient(supaUrl, supaAnonKey);

// Client request + profiling
app.get('/api/requests', async (req,res) => {
    const {data,error} = await supabase
    .from('Request')
    .select(`Client(name, talkativity, formality, friendliness, extroversion), 
        time_required, additional`);
    if (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(data);
});

// Client request + profiling
app.get('/api/mentor/:name', async (req,res) => {
    const {data,error} = await supabase
    .from('mentor')
    .select(`name, available, talkativity, formality, friendliness, extroversion`)
    .ilike('name', req.params.ref.toLowerCase());
    if (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(data);
});