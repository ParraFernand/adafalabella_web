import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  safelist: [
    'bg-black/30',
    'bg-black/50',
    'bg-[#001f3f]/30',
    'bg-[#004d40]/40',
    'bg-[#6d4c41]/40',
    'bg-[#3f51b5]/30',
  ],
  
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        jafherb: ["JAF Herb", "sans-serif"],
        title: ['var(--font-playfair)', 'serif'],
        merriweather: ['var(--font-merriweather)', 'serif2'],
        pacifico: ['var(--font-pacifico)', 'cursive'],
        corinthia: ['var(--font-corinthia)', 'cursive'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        anton: ['var(--font-anton)', 'sans-serif'],
        barlowCondensed: ['var(--font-barlow-condensed)', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          red: "#e8bf1c",
          orange: "#456ea6",
          gold: "#e8bf1c",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        bonewhite: "#FAF9F6",
        Lavandasuave: "#E6E6FA",
      },
      backgroundImage: {
        cielo: "linear-gradient(to right, #7dd3fc, #f0f9ff)", // Definición de gradiente corregida
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;


