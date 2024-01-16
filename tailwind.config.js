/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  mode: "JIT",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1280px",
    },

    extend: {
      fontSize: {
        xxxxs: ["10px", "16px"],
        widexxxs: ["12px", "24px"],
        wides: ["13px", "24px"],
        widess: ["20px", "24px"],
        errorxs: ["10px", "12px"],
        xxs: ["12px", "22px"],
        xs: ["12px", "20px"],
        sm: ["14px", "20px"],
        smm: ["14px", "24px"],
        subtext: ["14px", "16px"],
        subtextlg: ["16px", "24px"],
        bt: ["18px", "48px"],

        xxl: ["20px", "17px"],
        xxlmd: ["22px", "18px"],
        subtitle: ["30px", "36px"],
        "4xxl": ["40px", "56px"],
        "slide-number": ["43px", "52px"],

        textms: ["16px", "20px"],
        textlg: ["18px", "24px"],

        xlmd: ["67px", "81px"],
        xllg: ["98px", "119px"],

        xlslider: ["67px", "78px"],

        btnlg: ["32px", "39px"],

        navbtn: ["33px", "40px"],

        textslider: ["13px", "20px"],
        textsliderlg: ["28px", "24px"],
      },

      letterSpacing: {
        almostwidest: "2.4px",
        thesml: "-0.14px;",
        thesmlmd: " 0.32px",
        thesmllg: "2.16px",
        extra: "9.48px",
        extramd: "25.9px",
        extralg: "36.48px",

        days: "1.67px",
        daysmd: "8.71px",

        menu: "1.4px",
        mobmenu: "1.8px",
        subtext: "1.26px",
        thetightest: "-1.6px", // title,
        titlemd: "-2.68px",
        titlelg: "-3.92px",
      },

      maxWidth: {
        mobct: "320px",
        tablct: "744px",
        deskct: "1280px",
      },

      width: {
        checkbox: "22px",
        textcont: "180px",
      },

      height: {
        checkbox: "22px",
      },

      colors: {
        "pale-grey": "rgba(255, 255, 255, 0.20)",
        "input-clr": "rgba(255, 255, 255, 0.05)",
        "error-clr": "#FF5757",
      },

      backgroundColor: {
        button: "rgba(255, 255, 255, 0.10)",
        "btn-hover": "rgba(255, 255, 255, 0.2)",
        backdrop: "rgba(1, 10, 5, 0.75)",
      },

      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
};
