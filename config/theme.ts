const colors = {
	primary: "#8BC846",
	secondary: "#828080",
	red: "#f5222d",
	lightBlack: "#595958",
	white: "#ffffff",
	gray3: "#f4f4f4",
	gray4: "#eeeeee",
	gray5: "#acacac",
	gray6: "#646464",
	gray7: "#6d6c6b",
	gray8: "#73738c",
	redPurple: "#953553",
};

const typographyCommon = {
	fontFamily: "'Roboto', sans-serif",
};

const typography = {
	text: {
		...typographyCommon,
		fontSize: "12px",
		fontWeight: "normal",
		lineHeight: "16px",
	},
	textSmall: {
		...typographyCommon,
		fontSize: "10px",
		fontWeight: "normal",
		lineHeight: "12px",
	},
	textBold: {
		...typographyCommon,
		fontSize: "12px",
		fontWeight: "bold",
		lineHeight: "16px",
	},
	typographyH4: {
		...typographyCommon,
		fontSize: "24px",
		fontWeight: "700",
		lineHeight: "32px",
	},
	captionBold: {
		...typographyCommon,
		fontSize: "16px",
		fontWeight: "700",
		lineHeight: "24px",
	},
};

export const THEME = { colors, typography };
