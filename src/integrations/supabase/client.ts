// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kdpvaozvalpthsyogzbc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkcHZhb3p2YWxwdGhzeW9nemJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNDQzNDcsImV4cCI6MjA2NjkyMDM0N30.V-n7QAXEokHU_tVS4EklFzw4mYyv8Ac6Ou3j204U5a4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});