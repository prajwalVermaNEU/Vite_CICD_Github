export async function onRequest(context) {
    conosle.log("PRajwal reached here too");
    return new Response(import.meta.env.VITE_OPENAI_API_KEY, {
        headers: { 'Content-Type': 'text/plain' },
    });
}
