/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			lightSurf: "#fff8f1",
			lightSurfDim: "#e0d9d0",
			lightSurfCon: "#f4ede4",
			lightSurfConLow: "#faf2e9",
			lightSurfConHigh: "#eee7de",
			lightSurfConHighest: "#e9e1d9",
			lightPrimary: "#765b00",
			lightSecondary: "#6a5d3f",
			lightTertiary: "#1a6c31",
			lightError: "#ba1a1a",
			lightSecIcon: "#baaa87",
			lightOutline: "#7e7667",
			lightOutlineVar: "#cfc5b4",
			lightMain: "#edc148",
			lightPrimCon: "#ffdf93",
			lightPrimText: "#241a00",
			lightModalBack: "rgba(176, 170, 162, .8)",
		},
		extend: {},
	},
	plugins: [],
};
