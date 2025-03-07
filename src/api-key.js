export async function onRequest(context) {
    return new Response(import.meta.env.VITE_OPENAI_API_KEY, {
        headers: { 'Content-Type': 'text/plain' },
    });
}
