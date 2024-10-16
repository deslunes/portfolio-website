import type { Config } from 'tailwindcss';
import { updateMarkup } from 'vite-plugin-tailwind-attributify';


export default {
	darkMode: 'selector',
	content: {
		files: ['./src/**/*.{html,js,svelte,ts}'],
    transform: Object.fromEntries(
      ['tsx', 'jsx', 'svelte', 'vue'].map(ext => [ext, (content) => updateMarkup(content)])
    )
	},
	
	theme: {
		extend: {
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

	plugins: [
	]
} as Config;