import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
				"lato-google-latin-v13": "lato-google-latin-v13.html",
				"lato-google-latin-v24": "lato-google-latin-v24.html",
				"lato-latin-v2": "lato-latin-v2.html",
			}
		}
	}
});
