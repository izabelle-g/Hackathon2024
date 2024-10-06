const express = require('express');
const supa = require('@supabase/supabase-js');
const app = express();
const supaUrl = 'https://dpurxnwnkjulaoflmhxw.supabase.co';
const supaAnonKey = 'Secret';
const supabase = supa.createClient(supaUrl, supaAnonKey);

// Client request + profiling
app.get('/api/requests', async (req,res) => {
    const {data, error} = await supabase
    .from('request')
    .select(`client(name, talkativity, formality, friendliness, extroversion), time_required, additional`);
    res.send(data);
});

app.get('/api/client/:name', async (req,res) => {
    const {data, error} = await supabase
    .from('client')
    .select(`name, talkativity, formality, friendliness, extroversion`)
    .ilike('name', req.params.name.toLowerCase());
    res.send(data);
});

app.get('/api/client/available/:name', async (req,res) => {
    const {data, error} = await supabase
    .from('client')
    .select(`name, time_constraints(avail_end,avail_start)`)
    .ilike('name', req.params.name.toLowerCase());
    res.send(data);
});

