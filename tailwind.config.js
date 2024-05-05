/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-900": "#1e212c",
        "gray-700": "#787a80",
        primary: "#7772f1",
        "gray-800": "#424551",
        warning: "#f89828",
        crimson: "#f52f6e",
        info: "#5a87fc",
        success: "#03cea4",
        "gray-600": "#9a9da5",
        gray1: {
          "100": "rgba(255, 255, 255, 0.2)",
          "200": "rgba(255, 255, 255, 0.12)",
        },
        "gray-200": "#f5f5f7",
        "gray-300": "#e5e8ed",
        "divider-gradient": "rgba(218, 219, 221, 0)",
        mediumslateblue: "rgba(119, 114, 241, 0.4)",
        "gray-400": "#d6dadd",
        "gray-500": "#b4b7bc",
        secondary: "#00f0b5",
      },
      spacing: {},
      fontFamily: {
        h1: "Lato",
        "regular-regular": "Ubuntu",
      },
      borderRadius: {
        "10xs": "3px",
        "21xl": "40px",
      },
    },
    fontSize: {
      "27xl": "46px",
      base: "16px",
      sm: "14px",
      "13xl": "32px",
      "9xl": "28px",
      xl: "20px",
      xs: "12px",
      "3xs": "10px",
      "53xl": "72px",
      "37xl": "56px",
      "5xl": "24px",
      lg: "18px",
      "8xs": "5px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
