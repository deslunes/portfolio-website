import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { Attributify } from 'vite-plugin-tailwind-attributify';

export default defineConfig({
	plugins: [sveltekit()]
});