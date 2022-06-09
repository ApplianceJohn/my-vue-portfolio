module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Basier", "ui-sans-serif", "system-ui"],
			serif: ["BasierMono", "ui-serif", "Georgia"],
			mono: ["BasierMono", "ui-monospace", "SFMono-Regular"],
		},
		fontSize: {
			base: "1rem",
			lg: "1.414rem",
			xl: "1.999rem",
			"2xl": "2.827rem",
			"3xl": "3.998rem",
			"4xl": "5.653rem",
		},
		extend: {
			colors: {
				support: {
					dark: "#4a2480",
					light: "#b190e0",
				},
				accent: {
					dark: "#c53a9d",
					light: "#eec8e3",
				},
				highlight: {
					dark: "#ff8e80",
					light: "#fff4f2",
				},
				base: {
					dark: "#051f39",
					light: "#374c61",
				},
			},
		},
	},
	plugins: [],
};
