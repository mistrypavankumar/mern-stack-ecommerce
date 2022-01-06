module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      color: {
        primaryBlue: "#3482E7",
      },
      borderColor: {
        borderBlue: "#3482E7",
        borderGlowBlue: "hsl(188, 100%, 62%)",
      },
      textColor: {
        lightGray: "#F1EFEE",
        primaryBlue: "#14cddb",
        secColor: "#efefef",
        navColor: "#BEBEBE",
      },
      backgroundColor: {
        mainColor: "#1A1B1F",
        primaryBlue: "#022f47",
        primaryDarkBlue: "#021e34",
        secondaryColor: "#14cddb",
        secondaryDark: "#0e8f99",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
      },
      shadow: {
        glow: "hsl(188, 100%, 62%)",
      },
    },
  },

  plugins: [],
};
