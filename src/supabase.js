import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qblwvkpapdidhjhpxnqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFibHd2a3BhcGRpZGhqaHB4bnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4NTExOTYsImV4cCI6MjAzNTQyNzE5Nn0.cQ9vCy2k31fY4uKIkqj6fKTNurnN9AwcX2BHGXfhj5Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
