module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        makyeetestframerwebsitealabaster:
          "var(--makyeetestframerwebsitealabaster)",
        "makyeetestframerwebsitealizarin-crimson":
          "var(--makyeetestframerwebsitealizarin-crimson)",
        makyeetestframerwebsitealto: "var(--makyeetestframerwebsitealto)",
        "makyeetestframerwebsitebig-stone":
          "var(--makyeetestframerwebsitebig-stone)",
        makyeetestframerwebsiteblack: "var(--makyeetestframerwebsiteblack)",
        makyeetestframerwebsitedixie: "var(--makyeetestframerwebsitedixie)",
        "makyeetestframerwebsitedove-gray":
          "var(--makyeetestframerwebsitedove-gray)",
        "makyeetestframerwebsitefrench-gray":
          "var(--makyeetestframerwebsitefrench-gray)",
        makyeetestframerwebsitemanatee: "var(--makyeetestframerwebsitemanatee)",
        "makyeetestframerwebsitemine-shaft":
          "var(--makyeetestframerwebsitemine-shaft)",
        "makyeetestframerwebsiteoslo-gray":
          "var(--makyeetestframerwebsiteoslo-gray)",
        makyeetestframerwebsiteshark: "var(--makyeetestframerwebsiteshark)",
        "makyeetestframerwebsiteshuttle-gray":
          "var(--makyeetestframerwebsiteshuttle-gray)",
        "makyeetestframerwebsitesilver-chalice":
          "var(--makyeetestframerwebsitesilver-chalice)",
        "makyeetestframerwebsitestorm-gray":
          "var(--makyeetestframerwebsitestorm-gray)",
        makyeetestframerwebsitethunder: "var(--makyeetestframerwebsitethunder)",
        makyeetestframerwebsitewhite: "var(--makyeetestframerwebsitewhite)",
        "makyeetestframerwebsitewhite-15":
          "var(--makyeetestframerwebsitewhite-15)",
        "makyeetestframerwebsitewhite-20":
          "var(--makyeetestframerwebsitewhite-20)",
        "makyeetestframerwebsitewhite-white":
          "var(--makyeetestframerwebsitewhite-white)",
        "makyeetestframerwebsitewild-sand":
          "var(--makyeetestframerwebsitewild-sand)",
        makyeetestframerwebsitewoodsmoke:
          "var(--makyeetestframerwebsitewoodsmoke)",
        makyeetestframerwebsitezircon: "var(--makyeetestframerwebsitezircon)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-scale": "fade-in-scale 1s ease-out forwards",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};
