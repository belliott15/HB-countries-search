const SUPABASE_URL = 'https://yyafrnrhvbvehifltlkl.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5YWZybnJodmJ2ZWhpZmx0bGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU5NDA2NDEsImV4cCI6MTk3MTUxNjY0MX0.xMaK7QxF8ut26HwnOeZONCj9728N9XXm0bIknwpAUtg';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCountries(continent) {
    // Slice A: write a query to table countries (get all columns, order by country name, limit query to 100 countries)
    let query = client.from('countries').select('*').order('name').limit(100);

    // query for continent (Slice C)
    if (continent) {
        query = query.eq('continent', continent);
    }
    // Slice A: await the query and set to a response variable
    const response = await query;
    // Slice A: return the response
    return response;
}

export async function getContinents() {
    // Slice B: write an awaited client query to table country_continent and get all columns
    // Slice B: return the response
}
