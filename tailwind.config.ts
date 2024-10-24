import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			colors: {
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},

			fontFamily: {
        "Bricolage" : "Bricolage Grotesque",
				'Inter': 'Inter',
      },
			animation: {
				'ripple': 'ripple 15s infinite',
				'reveal': 'reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;',
				'slideup': 'slideup 2s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;',
				'hr' : 'hr 2s',
				'hr2' : 'hr2 2s'
			},
			keyframes: {
				ripple: {
          '0%': { transform: 'scale(1.0) rotate(0turn)' },
          '50%': { transform: 'scale(1.4) rotate(0.5turn)' },
          '100%': { transform: 'scale(1.0) rotate(1turn)' },
				},
				reveal: {
					'0%': { transform: 'translate(0, 100%)' },
          '100%': { transform: 'translate(0, 0)' },
				},
				slideup: {
          '0%': { maxHeight: '0', opacity: '0', overflow: "none" },
          '100%': { maxHeight: '500px', opacity: '1', overflow: "none" },
				},
				hr : {
					'0%': { width: '0%' },
          '100%': { width: '100%' },
				},
				hr2 : {
					'0%': { width: '0%' },
          '100%': { width: '50%' },
				}
			}
		}
	},
};

export default config;
