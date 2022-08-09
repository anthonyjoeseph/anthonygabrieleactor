export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/GM0A2507.jpg","images/GM0A2642.jpg","images/headshots/headshot1.jpg","images/headshots/headshot2.jpg","images/resume.pdf","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".pdf":"application/pdf",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"start-47ebe5da.js","js":["start-47ebe5da.js","chunks/index-3441f1d6.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "components/Contact",
				pattern: /^\/components\/Contact\/?$/,
				names: [],
				types: [],
				path: "/components/Contact",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "components/Header",
				pattern: /^\/components\/Header\/?$/,
				names: [],
				types: [],
				path: "/components/Header",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "components/Headshot",
				pattern: /^\/components\/Headshot\/?$/,
				names: [],
				types: [],
				path: "/components/Headshot",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "components/ImageRow",
				pattern: /^\/components\/ImageRow\/?$/,
				names: [],
				types: [],
				path: "/components/ImageRow",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "components/MainContent",
				pattern: /^\/components\/MainContent\/?$/,
				names: [],
				types: [],
				path: "/components/MainContent",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "components/shared/Image",
				pattern: /^\/components\/shared\/Image\/?$/,
				names: [],
				types: [],
				path: "/components/shared/Image",
				shadow: null,
				a: [0,9],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
