// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tynxjskxsaprnscdwtsf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5bnhqc2t4c2Fwcm5zY2R3dHNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NjM2NjEsImV4cCI6MjA2MzMzOTY2MX0.my57QDKSQFFnxDKeReu4B5B2hU2FZdz3XMARU2OJUb0'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
