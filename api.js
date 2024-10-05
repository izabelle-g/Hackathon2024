const express = require('express');
const supa = require('@supabase/supabase-js');
const app = express();
const supaUrl = 'https://dpurxnwnkjulaoflmhxw.supabase.co';
const supaAnonKey = 'Secret';
const supabase = supa.createClient(supaUrl, supaAnonKey);

// Client request + profiling
app.get('/api/requests'), async (req,res) => {
    const {data,error} = await supabase
    .from('Request')
    .select(`Client(name, talkativity, formality, friendliness, extroversion), 
        time_required, additional`);
    return data;
}

// Client request + profiling
app.get('/api/mentor/:name'), async (req,res) => {
    const {data,error} = await supabase
    .from('mentor')
    .select(`name, available, talkativity, formality, friendliness, extroversion`)
    .ilike('name', req.params.ref.toLowerCase());
    return data;
}