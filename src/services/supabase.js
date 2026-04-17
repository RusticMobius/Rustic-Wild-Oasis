
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://iphdtugnikngdivuvxxi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwaGR0dWduaWtuZ2RpdnV2eHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwNzAzMDAsImV4cCI6MjA5MTY0NjMwMH0.JclcqxZs3p0uRPvoW11Kg7DUVBALDNdDDOt-AMJHPqo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase