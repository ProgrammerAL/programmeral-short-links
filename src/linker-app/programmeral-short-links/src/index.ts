export default {
	async fetch(request): Promise<Response> {
		const redirectMap = new Map([
			["/", "https://programmerAL.com"],
			["/rr-1", "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ"],
		]);

		const requestURL = new URL(request.url);
		const path = requestURL.pathname;
		const location = redirectMap.get(path);

		if (location) {
			return Response.redirect(location, 301);
		}
		// If request not in map, return the original request
		return fetch(request);
	},
} satisfies ExportedHandler;